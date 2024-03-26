(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{385:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("Build Standred REST API")])]),t._v(" "),e("h3",{attrs:{id:"restful是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restful是什么"}},[t._v("#")]),t._v(" RESTful是什么")]),t._v(" "),e("p",[t._v("RESTful(Representational State Transfer), (资源)表现层状态转化。资源是网络上的一个实体，对应一个 URI. 表现层是资源的呈现方式，以 html、xml 等。状态转换，说的是由于 HTTP 协议是无状态协议，所有的状态都保存在服务器。综上，客户端想要操作服务器，就要让服务器端发生状态转换。而这种转换建立在表现层之上，所有叫 RESTful。"),e("br"),t._v("\n通俗的讲，就是 HTTP 协议里面，四个表示操作的动词: GET POST PUT DELETE。其分别对应四种操作: GET 用来获取资源、POST 用来新建资源、PUT 用来更新资源、DELETE 用来删除资源。"),e("br"),t._v("\n用这几种方式操作服务器， 这些方式就是 RESTful(adj) 的。")]),t._v(" "),e("h3",{attrs:{id:"restful-url规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restful-url规范"}},[t._v("#")]),t._v(" RESTful URL规范")]),t._v(" "),e("blockquote",[e("p",[t._v("比如对员工 emp 增删改查的 url 规范")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("URL")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Method")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/emps")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("展示所有")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/emp")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("去往添加页面")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/emp")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("POST")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("添加员工")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/emp/{id}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("DELETE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("删除员工")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/emp/{id}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("去修改页面，回显")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/emp")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PUT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("提交修改，重定向到 list")])])])]),t._v(" "),e("ul",[e("li",[t._v("Add Emp: GET /emp + POST /emp")]),t._v(" "),e("li",[t._v("Update Emp: GET /emp/{id} + PUT /emp")])]),t._v(" "),e("h3",{attrs:{id:"开发中技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发中技巧"}},[t._v("#")]),t._v(" 开发中技巧")]),t._v(" "),e("h4",{attrs:{id:"_1-渲染模式需要准备的-html-页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-渲染模式需要准备的-html-页面"}},[t._v("#")]),t._v(" 1. 渲染模式需要准备的 html 页面")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("list.html")]),t._v(" 展示页面"),e("br"),t._v("\n  \n展示页面列出所有的信息，另外还有跳转到添加、删除记录、修改记录的超链接。")]),t._v(" "),e("li",[e("code",[t._v("edit.html")]),t._v(" 一页两用"),e("br"),t._v("\n  \n为 add.html 和 update.html 合并版本。为了在 edit.html 一个文件中，提交时候体现差异，在渲染时候会选择性渲染 id 或其他唯一标志信息。具体细节接下。")])]),t._v(" "),e("h4",{attrs:{id:"_2-由底向上实现一页两用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-由底向上实现一页两用"}},[t._v("#")]),t._v(" 2. 由底向上实现一页两用")]),t._v(" "),e("p",[e("b",[t._v("为 form 标签提供发送完整 RESTful 请求的能力：")]),t._v('\n在 html 的 form 标签中，只支持 GET 和  POST 两种请求方式，为了能够 "发送" 出其他请求，可以和后端约定好添加某些字段来标记为其他请求方法。通常是在 form 表单为 POST 方式的前提下，添加一个隐藏的属性，属性名称为 '),e("code",[t._v("_method")]),t._v("，值为请求方式。")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_method"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("PUT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("但是这并不代表浏览器无法发送其他请求，如果是使用 Javascript 发送，就可以支持其他的方式。"),e("br"),t._v(" "),e("b",[t._v("\n更新数据和添加数据，在最接近数据库的 DAO 层，都是通过 save() 方法保存，若待更新数据已有主键(id)则更新数据，否则新建数据。"),e("br"),t._v("\n    \n所以在通过控制器跳转到 edit.html 的时候，就要考虑是否分配 flag 来区分是新增还是更新，这个值也影响是否渲染隐藏域和其他页面显示信息。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);