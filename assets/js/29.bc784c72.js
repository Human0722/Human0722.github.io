(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{355:function(t,r,a){"use strict";a.r(r);var e=a(0),s=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"大地测量学-geodesy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大地测量学-geodesy"}},[t._v("#")]),t._v(" 大地测量学（Geodesy）")]),t._v(" "),r("p",[r("strong",[t._v("大地测量学")]),t._v(" 是一门测量和描绘地球表面的学科。")]),t._v(" "),r("h4",{attrs:{id:"大地水准面-geoid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大地水准面-geoid"}},[t._v("#")]),t._v(" 大地水准面（geoid)")]),t._v(" "),r("p",[r("strong",[t._v("大地水准面")]),t._v(" 是海洋表面只在重力和自转影响下的封闭曲面， 可以近似表示为一个椭球体，叫做 "),r("strong",[t._v("参考椭球体")]),t._v("。")]),t._v(" "),r("h4",{attrs:{id:"参考椭球体-reference-ellipsoid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考椭球体-reference-ellipsoid"}},[t._v("#")]),t._v(" 参考椭球体 （Reference ellipsoid)")]),t._v(" "),r("p",[t._v("由于大地水准面并不规则，随着时间推移对测量精度要求的提高，往往不通地区需要不通的参考椭球体来尽可能“贴合”当地的大地水准面，所以出现了不同的参考椭球体。如“北京54“用的是 Krasovsky 1940参考体。当前世界范围使用普遍的是 "),r("strong",[t._v("WGS")]),t._v(" 所定义的参考椭球。")]),t._v(" "),r("h3",{attrs:{id:"坐标系-coordinate-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#坐标系-coordinate-system"}},[t._v("#")]),t._v(" 坐标系（Coordinate System)")]),t._v(" "),r("p",[t._v("有了参考椭球体后，就可以定义坐标系来描述位置。在相同坐标系下，可以保证相同位置的坐标相同。 通常有两种坐标系 "),r("strong",[t._v("地理坐标系（geographic coordinate system)")]),t._v(" 和 "),r("strong",[t._v("投影坐标系（projected coordinate system)")]),t._v("。")]),t._v(" "),r("h4",{attrs:{id:"地理坐标系-geographic-coordinate-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地理坐标系-geographic-coordinate-system"}},[t._v("#")]),t._v(" 地理坐标系 （geographic coordinate system)")]),t._v(" "),r("p",[t._v("地理坐标系一般指由经度纬度和高度组成的坐标系。为了使椭球体更好的吻合大地水准面，不通的地区会使用不通的椭球体，即使是相同的椭球体也可能会调整椭球体的方位甚至大小。这就需要使用不同的大地测量系统（Geodetic datum)。随着测量精度的提高，不通坐标系的差异变得非常小，如 WGS84 和 CGS2000之间的差异是非常小的。")]),t._v(" "),r("h4",{attrs:{id:"投影坐标系-projected-coordinate-systems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#投影坐标系-projected-coordinate-systems"}},[t._v("#")]),t._v(" 投影坐标系 （projected coordinate systems）")]),t._v(" "),r("p",[t._v("地理坐标系是三维的，我们要在屏幕上显示就要转换为二维，这个过程叫"),r("strong",[t._v("投影（Map projection）")]),t._v("。显然三维到二维的转换会导致失真，不同的投影会有不同的失真。 常用的投影有"),r("strong",[t._v("等距矩形投影")]),t._v(" 和 "),r("strong",[t._v("墨卡托投影")]),t._v("。"),r("br"),t._v(" "),r("img",{attrs:{src:"/images/solution/map_projection.png",alt:""}}),r("br"),t._v("\n左图表示地球球面上大小相同的圆形，右上为墨卡托投影，投影后仍然是圆形，但是在高纬度时物体被严重放大了。右下为等距投影，物体的大小变化不是那么明显，但是图像被拉长了。Platte Carre 投影因为在投影上有扭曲，并不适合于航海等活动，但是因为坐标与像素之间的对应关系十分简单，非常适合于栅格图的展示，Platte Carre 投影是很多GIS 软件的默认投影。\n注意，对于墨卡托投影来说，越到高纬度，大小扭曲越严重，到两极会被放到无限大，所以，墨卡托投影无法显示极地地区。\n"),r("img",{attrs:{src:"images/solution/real_area.gif",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"开发常用的两种坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发常用的两种坐标系"}},[t._v("#")]),t._v(" 开发常用的两种坐标系")]),t._v(" "),r("h4",{attrs:{id:"epsg-4326"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#epsg-4326"}},[t._v("#")]),t._v(" EPSG:4326")]),t._v(" "),r("p",[t._v("WGS84是最流行的地理坐标系统。在国际上，每个坐标系统都会被分配一个EPSG代码。"),r("strong",[t._v("EPSG:4326")]),t._v("就是WGS84的代码。")]),t._v(" "),r("h4",{attrs:{id:"epsg-3857"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#epsg-3857"}},[t._v("#")]),t._v(" EPSG:3857")]),t._v(" "),r("p",[t._v("伪墨卡托投影，也被称为球体墨卡托，Web Mercator。它是基于墨卡托投影的，"),r("strong",[t._v("把 WGS84坐标系投影到正方形")]),t._v("。我们前面已经知道 WGS84 是基于椭球体的，但是伪墨卡托投影把坐标投影到球体上，这导致"),r("strong",[t._v("两极的失真变大，但是却更容易计算")]),t._v("。这也许是为什么被称为”伪“墨卡托吧。另外，伪墨卡托投影还切掉了南北85.051129°纬度以上的地区，以保证整个投影是正方形的。因为墨卡托投影等正形性的特点，在不同层级的图层上物体的形状保持不变，一个正方形可以不断被划分为更多更小的正方形以显示更清晰的细节。很明显，伪墨卡托坐标系是非常显示数据，但是不适合存储数据的，通常我们"),r("strong",[t._v("使用WGS84 存储数据，使用伪墨卡托显示数据")]),t._v("。\nWeb Mercator 最早是由 Google 提出的，当前已经成为 Web Map 的事实标准。使用EPSG:3857这个代码。")]),t._v(" "),r("h3",{attrs:{id:"常见的坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见的坐标系"}},[t._v("#")]),t._v(" 常见的坐标系")]),t._v(" "),r("h4",{attrs:{id:"中国大地坐标系2000"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中国大地坐标系2000"}},[t._v("#")]),t._v(" 中国大地坐标系2000")]),t._v(" "),r("p",[t._v("我国天地图使用的坐标系，China Geodetic  Coordinate System 2000(CGCS2000)，坐标代码是 EPSG:4490.")]),t._v(" "),r("h4",{attrs:{id:"北京54-西安80坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#北京54-西安80坐标系"}},[t._v("#")]),t._v(" 北京54，西安80坐标系")]),t._v(" "),r("p",[t._v("北京54的坐标代码是 EPSG:4214\n西安80的坐标代码是 EPSG:4610")]),t._v(" "),r("h4",{attrs:{id:"gcj02-坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gcj02-坐标系"}},[t._v("#")]),t._v(" GCJ02 坐标系")]),t._v(" "),r("p",[t._v("国测局02坐标系，在WGS84基础上加入随机偏差，也是高德使用的坐标系。存储这个类型的数据通常将数据标记为WGS84坐标，使用时再通过计算矫正偏移。"),r("a",{attrs:{href:"https://github.com/Human0722/eviltransform",target:"_blank",rel:"noopener noreferrer"}},[t._v("eviltransform"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("参考链接：\n"),r("img",{attrs:{src:"https://www.cnblogs.com/E7868A/p/11460865.html",alt:""}})])])}),[],!1,null,null,null);r.default=s.exports}}]);