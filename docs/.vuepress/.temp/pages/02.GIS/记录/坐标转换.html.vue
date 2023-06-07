<template><div><blockquote></blockquote>
<h1 id="坐标转换" tabindex="-1"><a class="header-anchor" href="#坐标转换" aria-hidden="true">#</a> 坐标转换</h1>
<h2 id="一、经纬度转墨卡托" tabindex="-1"><a class="header-anchor" href="#一、经纬度转墨卡托" aria-hidden="true">#</a> 一、经纬度转墨卡托</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">lonLatToMercator</span><span class="token punctuation">(</span><span class="token parameter">lon<span class="token punctuation">,</span> lat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> mercator <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> earthRad <span class="token operator">=</span> <span class="token number">6378137.0</span><span class="token punctuation">;</span>
  mercator<span class="token punctuation">.</span>x <span class="token operator">=</span> lon <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">180</span> <span class="token operator">*</span> earthRad<span class="token punctuation">;</span>

  <span class="token keyword">let</span> a <span class="token operator">=</span> lat <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">;</span>
  mercator<span class="token punctuation">.</span>y <span class="token operator">=</span> earthRad <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1.0</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1.0</span> <span class="token operator">-</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> mercator<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、地心坐标系转经纬高" tabindex="-1"><a class="header-anchor" href="#三、地心坐标系转经纬高" aria-hidden="true">#</a> 三、地心坐标系转经纬高</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 地心坐标系转经纬高
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">ecef</span>
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">EcefToLLH</span><span class="token punctuation">(</span><span class="token parameter">ecef</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">let</span> cartographic <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromCartesian</span><span class="token punctuation">(</span>ecef<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">longitude</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">latitude</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alt</span><span class="token operator">:</span> cartographic<span class="token punctuation">.</span>height
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、发射系转东北天" tabindex="-1"><a class="header-anchor" href="#二、发射系转东北天" aria-hidden="true">#</a> 二、发射系转东北天</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 发射系转东北天
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">x</span> 发射系中射向，发射系数据中的x
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">y</span> 发射系中射向右手坐标系形成的z
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">launchAngle</span> 发射角度
 * 发射系y &lt;=> 东北天z
 */</span>
<span class="token keyword">function</span> <span class="token function">launchToEnu</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> launchAngle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> launchRadians <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>launchAngle<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> <span class="token constant">Y</span><span class="token punctuation">,</span> <span class="token constant">X</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> Ya<span class="token punctuation">,</span> Xa<span class="token punctuation">;</span>

  <span class="token constant">Y</span> <span class="token operator">=</span> z <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>launchRadians<span class="token punctuation">)</span> <span class="token operator">+</span> x <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>launchRadians<span class="token punctuation">)</span>
  <span class="token constant">X</span> <span class="token operator">=</span> <span class="token operator">-</span>z <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>launchRadians<span class="token punctuation">)</span> <span class="token operator">+</span> x <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>launchRadians<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token constant">X</span><span class="token punctuation">,</span> <span class="token constant">Y</span><span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、站心-东北天-转地心" tabindex="-1"><a class="header-anchor" href="#三、站心-东北天-转地心" aria-hidden="true">#</a> 三、站心（东北天）转地心</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 站心（东北天）转地心
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">pos</span>
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">enuToEcef</span><span class="token punctuation">(</span><span class="token parameter">launchOrigin<span class="token punctuation">,</span> enu</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// let enu = {</span>
  <span class="token comment">//   x: 5378.520558,</span>
  <span class="token comment">//   y: 28864.325181,</span>
  <span class="token comment">//   z: -57.481289</span>
  <span class="token comment">// }</span>
  <span class="token comment">// FASHE原点</span>
  <span class="token keyword">let</span> center <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>
    launchOrigin<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    launchOrigin<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    launchOrigin<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 根据FASHE原点、enu坐标 转地心坐标系</span>
  <span class="token keyword">let</span> enr2ffTransforms <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">eastNorthUpToFixedFrame</span><span class="token punctuation">(</span>center<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> ecef <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token function">multiplyByPoint</span><span class="token punctuation">(</span>
    enr2ffTransforms<span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span>enu<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> enu<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> enu<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>ecef<span class="token punctuation">.</span>x<span class="token punctuation">,</span> ecef<span class="token punctuation">.</span>y<span class="token punctuation">,</span> ecef<span class="token punctuation">.</span>z<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


