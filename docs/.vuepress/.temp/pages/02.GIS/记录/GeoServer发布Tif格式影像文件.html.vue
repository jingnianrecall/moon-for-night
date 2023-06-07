<template><div><blockquote></blockquote>
<h1 id="geoserver发布tif格式影像文件" tabindex="-1"><a class="header-anchor" href="#geoserver发布tif格式影像文件" aria-hidden="true">#</a> GeoServer发布Tif格式影像文件</h1>
<h2 id="一、新建工作空间" tabindex="-1"><a class="header-anchor" href="#一、新建工作空间" aria-hidden="true">#</a> 一、新建工作空间</h2>
<h2 id="二、存储仓库-新建数据源" tabindex="-1"><a class="header-anchor" href="#二、存储仓库-新建数据源" aria-hidden="true">#</a> 二、存储仓库-新建数据源</h2>
<h4 id="在新建数据源中选择-geotiff" tabindex="-1"><a class="header-anchor" href="#在新建数据源中选择-geotiff" aria-hidden="true">#</a> 在新建数据源中选择 GeoTIFF</h4>
<h2 id="三、添加栅格数据源" tabindex="-1"><a class="header-anchor" href="#三、添加栅格数据源" aria-hidden="true">#</a> 三、添加栅格数据源</h2>
<h4 id="输入数据源的名称-选择tif影像文件所在的目录位置-点击保存" tabindex="-1"><a class="header-anchor" href="#输入数据源的名称-选择tif影像文件所在的目录位置-点击保存" aria-hidden="true">#</a> 输入数据源的名称，选择tif影像文件所在的目录位置，点击保存</h4>
<h2 id="四、发布服务" tabindex="-1"><a class="header-anchor" href="#四、发布服务" aria-hidden="true">#</a> 四、发布服务</h2>
<h4 id="在定义srs中选择投影-选择边框范围" tabindex="-1"><a class="header-anchor" href="#在定义srs中选择投影-选择边框范围" aria-hidden="true">#</a> 在定义SRS中选择投影，选择边框范围</h4>
<h4 id="input-transparent-color比如影像图有黑色边框范围等可以输入-000000更改背景色" tabindex="-1"><a class="header-anchor" href="#input-transparent-color比如影像图有黑色边框范围等可以输入-000000更改背景色" aria-hidden="true">#</a> Input Transparent Color比如影像图有黑色边框范围等可以输入#000000更改背景色</h4>
<h2 id="五、cesium-加载-geoserver发布服务跨域问题" tabindex="-1"><a class="header-anchor" href="#五、cesium-加载-geoserver发布服务跨域问题" aria-hidden="true">#</a> 五、cesium 加载 GeoServer发布服务跨域问题</h2>
<h4 id="_1、进入geoserver安装目录-打开lib文件夹" tabindex="-1"><a class="header-anchor" href="#_1、进入geoserver安装目录-打开lib文件夹" aria-hidden="true">#</a> 1、进入GeoServer安装目录，打开lib文件夹</h4>
<h4 id="_2、复制如图两个jar包至-geoserver-webapps-geoserver-web-inf-lib-文件夹中" tabindex="-1"><a class="header-anchor" href="#_2、复制如图两个jar包至-geoserver-webapps-geoserver-web-inf-lib-文件夹中" aria-hidden="true">#</a> 2、复制如图两个jar包至 GeoServer\webapps\geoserver\WEB-INF\lib 文件夹中.</h4>
<ul>
<li>jetty-servlets-9.4.48.v20220622.jar</li>
<li>jetty-util-9.4.48.v20220622.jar</li>
</ul>
<h4 id="_3、打开web-inf下的web-xml进行如图配置" tabindex="-1"><a class="header-anchor" href="#_3、打开web-inf下的web-xml进行如图配置" aria-hidden="true">#</a> 3、打开WEB-INF下的web.xml进行如图配置</h4>
<h5 id="注-打开这两处代码注释即可-web-xml已有跨域配置" tabindex="-1"><a class="header-anchor" href="#注-打开这两处代码注释即可-web-xml已有跨域配置" aria-hidden="true">#</a> 注: 打开这两处代码注释即可(web.xml已有跨域配置)</h5>
<h4 id="_4、重启geoserver服务" tabindex="-1"><a class="header-anchor" href="#_4、重启geoserver服务" aria-hidden="true">#</a> 4、重启GeoServer服务</h4>
<h5 id="注-开启关闭服务批处理文件位置-geoserver-bin" tabindex="-1"><a class="header-anchor" href="#注-开启关闭服务批处理文件位置-geoserver-bin" aria-hidden="true">#</a> 注: 开启关闭服务批处理文件位置 GeoServer\bin</h5>
</div></template>


