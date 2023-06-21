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

# GeoServer发布Tif格式影像文件

## 一、新建工作空间


## 二、存储仓库-新建数据源

#### 在新建数据源中选择 GeoTIFF


## 三、添加栅格数据源

#### 输入数据源的名称，选择tif影像文件所在的目录位置，点击保存

## 四、发布服务

#### 在定义SRS中选择投影，选择边框范围
#### Input Transparent Color比如影像图有黑色边框范围等可以输入#000000更改背景色


## 五、cesium 加载 GeoServer发布服务跨域问题

#### 1、进入GeoServer安装目录，打开lib文件夹

#### 2、复制如图两个jar包至 GeoServer\webapps\geoserver\WEB-INF\lib 文件夹中.
 * jetty-servlets-9.4.48.v20220622.jar
 * jetty-util-9.4.48.v20220622.jar


#### 3、打开WEB-INF下的web.xml进行如图配置

##### 注: 打开这两处代码注释即可(web.xml已有跨域配置)

#### 4、重启GeoServer服务

##### 注: 开启关闭服务批处理文件位置 GeoServer\bin
