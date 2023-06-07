---
title: JavaScript简介
date: 2023-05-09 13:49:16
# permalink: /pages/0796ba76b4b55368
categories:
  - JavaScript
tags:
  - JavaScript
author:
  name: zhang
  # link: https://github.com
---

> 

# Cesium调用GeoServer服务

## 一、使用 WebMapServiceImageryProvider 加载服务


```js
  const tifLayer = new Cesium.WebMapServiceImageryProvider({
    url: 'http://192.168.1.1:8080/geoserver/Gansu/wms?service=WMS',        // GeoServer服务地址
    layers: 'Gansu:ten_meter_resolution_land_use_data',                    // 工作空间名:图层名
    parameters: {
      service: 'WMS',
      format: 'image/png',
      srs: 'EPSG:900913',
      // crs: 'EPSG:900913',
      transparent: true,
    }
  });

  viewer.imageryLayers.addImageryProvider(tifLayer);
```

## 二、添加点击事件获取features


```js
  let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

  handler.setInputAction(function (movement) {
    let cartesian = viewer.camera.pickEllipsoid(movement.position, viewer.scene.globe.ellipsoid);

    if (typeof cartesian === 'undefined') {
      return;
    } else {
      let pickRay = viewer.camera.getPickRay(movement.position);

      viewer.imageryLayers.pickImageryLayerFeatures(
        pickRay,
        viewer.scene
      ).then((feature) => {
        if (feature) {
          let cartographic = Cesium.Cartographic.fromCartesian(cartesian);

          let lon = Cesium.Math.toDegrees(cartographic.longitude);
          let lat = Cesium.Math.toDegrees(cartographic.latitude);

          let data = feature[0].data;

          console.log(data.properties)
        }
      });
    }

  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

```

## 二、通过GeoServer服务查询features

```js
function getUrlLayerInfoByCoor(lon, lat, vm) {
  return new Promise((resolve, reject) => {
    var pointA = turf.point([96.049959, 40.177626]);
    // var pointA = turf.point([parseFloat(lon), parseFloat(lat)]);
    var pointB = turf.destination(pointA, 50, 45, { units: 'meters' }); //kilometers
    var bbx = turf.bbox(turf.featureCollection([pointA, pointB]));  //经纬度转四至

    // 经纬度转墨卡托
    let box_a = lonLatToMercator(bbx[0], bbx[1])
    let box_b = lonLatToMercator(bbx[2], bbx[3])

    let url = `http://192.168.1.1:8080/geoserver/Gansu/wms?SERVICE=WMS
  &VERSION=1.1.1
  &REQUEST=GetFeatureInfo
  &FORMAT=image/jpeg
  &TRANSPARENT=true
  &QUERY_LAYERS=Gansu:Jiuquan_ten_meter_resolution_land_use_data
  &STYLES=&LAYERS=Gansu:Jiuquan_ten_meter_resolution_land_use_data
  &exceptions=application/vnd.ogc.se_inimage
  &INFO_FORMAT=application/json
  &FEATURE_COUNT=50
  &X=50&Y=50
  &SRS=EPSG:3857
  &WIDTH=101
  &HEIGHT=101
  &BBOX=${box_a.x},${box_a.y},${box_b.x},${box_b.y}`

    fetch(url).then(res => {
      return res.json();
    }).then(res => {
      let features = res.features;
      if (features.length) {
        let data = features[0];

        resolve(data);
      }
    })
  });
}

```

```js
//经纬度转墨卡托
function lonLatToMercator(lon, lat) {
  let mercator = {};
  let earthRad = 6378137.0;
  mercator.x = lon * Math.PI / 180 * earthRad;

  let a = lat * Math.PI / 180;
  mercator.y = earthRad / 2 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));

  return mercator;
}
```