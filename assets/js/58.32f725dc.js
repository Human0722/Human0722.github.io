(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{384:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("Hello, SpringMVC ~")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("jdk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("\nTomcat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nSpring"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),t._v("\nSpring Tool Suite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"讲在前面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲在前面"}},[t._v("#")]),t._v(" 讲在前面")]),t._v(" "),s("p",[t._v("SpringMVC 是对 Servlet 的封装。 Servlet 是一种约束，是接口。只要我们编写的 Java 程序实现了这个接口, 程序就叫做 Servlet 程序。 和 Tomcat 的关系的是， Tomcat 调用我们编写的 Servlet 程序, 同时传进来一些用户访问信息的封装类。因为 Servlet 程序受到 Servlet 接口的约束， Tomcat 就能保证调用 Servlet 程序一定可用。 原始的 Servlet 编程每个 url 都要编写对应的 servlet 配置块,来实现 url 和 Servlet 功能的映射，效率低下。而 SpringMVC 中的 DispatcherServlet 实现了 Servlet接口，保证能够被 Tomcat(或 Servlet 容器)调用，且这个类接管了所有的 url 地址，具体细分的地址和对应的功能实现用高效的注解绑定，绑定抛弃了繁琐的 xml 注解，先是将功能类用 Spring 的扫描器加载到容器中，然后再给方法加上注解，来标注这个方法是为了实现哪个 url 功能的而实现绑定。")]),t._v(" "),s("h3",{attrs:{id:"_1-新建一个动态-web-工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建一个动态-web-工程"}},[t._v("#")]),t._v(" 1.新建一个动态 Web 工程")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/spring/newProject.jpg",alt:"new Project"}}),t._v(" "),s("img",{attrs:{src:"/images/spring/createProject.jpg",alt:"create Project"}}),t._v("\n注意：如果生成的模板中，在 "),s("code",[t._v("ProjectName/WebContext/WEB-INF/")]),t._v(" 下没有 web.xml, 则按下图操作点击后，则会自动生成 web.xml .\n"),s("img",{attrs:{src:"/images/spring/createWebXml.jpg",alt:"createWebXml"}})]),t._v(" "),s("p",[t._v("导入 SpringMVC 所需要的包:(在 WEB-INF 下新建lib 包，然后选中所有包，add build path)")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/spring/packages.jpg",alt:"packages"}})]),t._v(" "),s("h3",{attrs:{id:"_2-将所有的-url-请求分配给-dispatcherservlet-处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-将所有的-url-请求分配给-dispatcherservlet-处理"}},[t._v("#")]),t._v(" 2.将所有的 url 请求分配给 DispatcherServlet 处理")]),t._v(" "),s("h4",{attrs:{id:"_2-1-在-tomcat-中配置-dispatcherservlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-在-tomcat-中配置-dispatcherservlet"}},[t._v("#")]),t._v(" 2.1 在 Tomcat 中配置 DispatcherServlet")]),t._v(" "),s("p",[t._v("在 web.xml 中追加一下内容:")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("web-app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 注册一个 Servlet --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("springmvc"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Servlet 名称--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--实现了 Servlet 的具体类名--\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.web.servlet.DispatcherServlet"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 注册 Servlet 和 url 的映射关系--\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("springmvc"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 所有的 url --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("web-app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h4",{attrs:{id:"_2-2-为-springmvc-编写配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-为-springmvc-编写配置文件"}},[t._v("#")]),t._v(" 2.2 为 SpringMVC 编写配置文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("DispatcherServlet 的配置文件，要求是放在 `WEB-INF` 下，名称格式为: `<servlet-name>-servlet.xml`(以 New File [> Other]> Spring Bean Configuration File新建,如果没有这个选项，需要从商店安装 Spring Tools 3 Add-On). \n")])])]),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("....")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--  Spring的自动扫描组件，将控制器扫描装载到容器中 --\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("component-scan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("base-package")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.atguigu.springmvc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("component-scan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 将方法返回的字符串映射成视图的规则 --\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("internalResourceViewResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.web.servlet.view.InternalResourceViewResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/WEB-INF/view/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("suffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".jsp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h4",{attrs:{id:"_2-3-创建处理方法-并映射-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-创建处理方法-并映射-url"}},[t._v("#")]),t._v(" 2.3 创建处理方法，并映射 url")]),t._v(" "),s("p",[t._v("按照上文的 base-package 创建包， 创建 HelloController 类。其中 "),s("code",[t._v("@Controller")]),t._v(" 注解为了容器能够扫描到这个类,这是类被使用的前提。 "),s("code",[t._v("@RequestMapping()")]),t._v(" 注册了哪个 url 能直接访问这个方法。\n"),s("img",{attrs:{src:"/images/spring/mapping.jpg",alt:"mapping"}})]),t._v(" "),s("h3",{attrs:{id:"_3-处理视图层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-处理视图层"}},[t._v("#")]),t._v(" 3. 处理视图层")]),t._v(" "),s("ol",[s("li",[t._v('在2.3 中返回的字符串 "success", 将被 2.2 中的配置渲染成 '),s("code",[t._v("/WEB-INF/view/success.jsp")]),t._v(". 我们的项目中并没有这个文件，手动创建。")]),t._v(" "),s("li",[t._v("在 "),s("code",[t._v("/WEB-INF/")]),t._v(" 下创建 index.jsp, 生成跳转到 "),s("code",[t._v("/hello")]),t._v(" 的超链接."),s("br"),t._v(" "),s("img",{attrs:{src:"/images/spring/dir.jpg",alt:"dir"}})])]),t._v(" "),s("h3",{attrs:{id:"_4-在-sts4-中配置-tomcat-服务器。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-在-sts4-中配置-tomcat-服务器。"}},[t._v("#")]),t._v(" 4. 在 STS4 中配置 Tomcat 服务器。")]),t._v(" "),s("h4",{attrs:{id:"_4-1-点击-servers-下的添加服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-点击-servers-下的添加服务器"}},[t._v("#")]),t._v(" 4.1 点击 Servers 下的添加服务器")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/spring/createTomcat.jpg",alt:"createTomcat"}})]),t._v(" "),s("h4",{attrs:{id:"_4-2-选择自己机器的环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-选择自己机器的环境"}},[t._v("#")]),t._v(" 4.2 选择自己机器的环境")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/spring/tomcatInfo.jpg",alt:"createWebXml"}})]),t._v(" "),s("h4",{attrs:{id:"_4-3-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-run"}},[t._v("#")]),t._v(" 4.3 Run !")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/spring/deployment.jpg",alt:"deployment   "}})]),t._v(" "),s("h4",{attrs:{id:"_4-4-访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-访问"}},[t._v("#")]),t._v(" 4.4 访问")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/spring/browser.jpg",alt:"browser"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);