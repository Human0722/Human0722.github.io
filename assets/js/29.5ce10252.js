(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{513:function(s,t,a){"use strict";a.r(t);var n=a(21),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("包结构, HelloWorld")])]),s._v(" "),a("h3",{attrs:{id:"spring-的几个特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-的几个特性"}},[s._v("#")]),s._v(" Spring 的几个特性")]),s._v(" "),a("ul",[a("li",[s._v('非侵入式 : 不用"知道"框架代码(不继承框架类，不实现框架接口),耦合低，代码可迁移。')]),s._v(" "),a("li",[s._v("依赖注入 :\nDI(Dependencies Injection),反转控制(IOC)的经典实现。")]),s._v(" "),a("li",[s._v("面向切面编程 (AOP)")]),s._v(" "),a("li",[s._v("容器 :\nSpring 是一个容器，其可以管理应用对象的生命周期。")]),s._v(" "),a("li",[s._v("组件化 :\n可以用简单的组件组合成复杂的应用，在 Spring 中用 XML 或者注解组合对象。")]),s._v(" "),a("li",[s._v("一站式 :\n在 IOC 和 AOP 上整合了广泛的三方类库。")])]),s._v(" "),a("h3",{attrs:{id:"spring-模块及-jar-包解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-模块及-jar-包解释"}},[s._v("#")]),s._v(" Spring 模块及 jar 包解释")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/spring/struct.png",alt:"proxy"}})]),s._v(" "),a("p",[s._v("Spring 下载地址: "),a("a",{attrs:{href:"https://repo.spring.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("repo.spring.io"),a("OutboundLink")],1),s._v(" "),a("code",[s._v("Artifact> libs-release-local> org > springframework> spring> Version")])]),s._v(" "),a("h4",{attrs:{id:"jar包解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jar包解释"}},[s._v("#")]),s._v(" Jar包解释")]),s._v(" "),a("blockquote",[a("p",[s._v("包名 context 为 spring-context-xxx.RELEASE.jar.  "),a("span",{staticClass:"ec ec-rainbow"}),s._v(" 代表 YES; 功能多，按需引入，核心包必须引入。")])]),s._v(" "),a("h5",{attrs:{id:"spring-依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-依赖"}},[s._v("#")]),s._v(" Spring 依赖")]),s._v(" "),a("ul",[a("li",[s._v("commons-logging : Spring所需依赖，需要下载")])]),s._v(" "),a("h5",{attrs:{id:"核心容器-core-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心容器-core-container"}},[s._v("#")]),s._v(" 核心容器（Core Container）")]),s._v(" "),a("ul",[a("li",[s._v("spring-core"),a("span",{staticClass:"ec ec-rainbow"}),s._v("：核心类库，其他模块大量使用此jar包；")]),s._v(" "),a("li",[s._v("spring-beans"),a("span",{staticClass:"ec ec-rainbow"}),s._v("：Spring定义Bean的支持；")]),s._v(" "),a("li",[s._v("spring-context"),a("span",{staticClass:"ec ec-rainbow"}),s._v("：运行时Spring容器；")]),s._v(" "),a("li",[s._v("spring-context-support：Spring容器对第三方包的集成支持，比如邮件服务、视图解析")]),s._v(" "),a("li",[s._v("spring-expression"),a("span",{staticClass:"ec ec-rainbow"}),s._v("：Spring表达式语言")])]),s._v(" "),a("h5",{attrs:{id:"aop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aop"}},[s._v("#")]),s._v(" AOP")]),s._v(" "),a("ul",[a("li",[s._v("spring-aop：基于代理的AOP支持；")]),s._v(" "),a("li",[s._v("spring-aspects：基于AspectJ的AOP支持；")]),s._v(" "),a("li",[s._v("spring-instrument：提供一些类级的工具支持和ClassLoader级的实现，用于服务器；")]),s._v(" "),a("li",[s._v("spring-instrument-tomcat：针对tomcat的instrument实现；")])]),s._v(" "),a("h5",{attrs:{id:"数据访问-集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据访问-集成"}},[s._v("#")]),s._v(" 数据访问/集成")]),s._v(" "),a("ul",[a("li",[s._v("spring-jdbc：提供以jdbc访问数据库的支持；")]),s._v(" "),a("li",[s._v("spring-tx：提供编程式和声明式事务支持；")]),s._v(" "),a("li",[s._v("spring-orm：提供对象/关系映射支持；")]),s._v(" "),a("li",[s._v("spring-oxm：提供对象/xml映射支持；")]),s._v(" "),a("li",[s._v("spring-jms：提供对JMS（java消息服务）的支持；")])]),s._v(" "),a("h5",{attrs:{id:"web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[s._v("#")]),s._v(" web")]),s._v(" "),a("ul",[a("li",[s._v("spring-web：提供基础的web集成功能；")]),s._v(" "),a("li",[s._v("spring-webmvc：基于servlet的MVC；")]),s._v(" "),a("li",[s._v("spring-webmvc-portlet：基于portlet的mvc实现；")]),s._v(" "),a("li",[s._v("spring-websocket：提供websocket功能；")])]),s._v(" "),a("h5",{attrs:{id:"test-messaging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-messaging"}},[s._v("#")]),s._v(" test&messaging")]),s._v(" "),a("ul",[a("li",[s._v("spring-test：spring测试，提供junit与mock测试功能；")]),s._v(" "),a("li",[s._v("spring-messaging：对消息架构和协议的支持；")])]),s._v(" "),a("h3",{attrs:{id:"helloworld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helloworld"}},[s._v("#")]),s._v(" HelloWorld")]),s._v(" "),a("blockquote",[a("p",[s._v("Spring HellWorld in Intellij IDEA")])]),s._v(" "),a("p",[s._v("1.创建普通的 maven 项目")]),s._v(" "),a("p",[s._v("2.导入 Spring 的核心包\nStep1: [手动导入]在项目路径下创建 libs 文件夹, 把 core, bean, context, expression和 commons-logging 放入其中。\nStep2: 在 "),a("code",[s._v("Project Structer > Libraries")]),s._v(" 中添加一个库，选择上面的包，加入到库中。\nStep3: 在 "),a("code",[s._v("Project Structer > Module")]),s._v(" 中勾选这个库， 让库作用到项目中。")]),s._v(" "),a("p",[s._v("3.创建Bean类")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("4.在 "),a("code",[s._v("resources")]),s._v("中创建 spring 配置文件:")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// New File > XML Configration File > Spring Config `创建 spring.xml.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注: 先导入 spring-context 包后才有 Spring config 这个选项。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接创建 xml 没有 Spring xml 的命名空间，也就没有标签提示")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("beans xxx命名空间xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("bean id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"student"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.example.Student"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"randy"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bean"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("beans"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("5.主方法中，让容器根据配置文件自动创建对象")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassPathXmlApplicationContext")]),s._v(" context "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassPathXmlApplicationContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spring.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),s._v(" student "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"student"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("6.总结\nSpring 可以根据配置文件，帮我们生成对象，且可以帮我们初始化、组装对象，用配置文件批量化 "),a("code",[s._v("new对象 + 初始化这个对象 + 组装对象")]),s._v("的流程。\n下一节，了解一个实体对象成员属性为不通的类型，如何通过配置文件为其赋值。")]),s._v(" "),a("hr"),s._v(" "),a("p",[a("a",{attrs:{href:"/pages/spring"}},[s._v("Spring 全家桶导航")])])])}),[],!1,null,null,null);t.default=r.exports}}]);