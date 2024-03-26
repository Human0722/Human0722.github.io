(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{394:function(t,a,v){"use strict";v.r(a);var e=v(0),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("一些 vim 技巧")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/tool/reflection.png",alt:"reflection"}})]),t._v(" "),a("p",[t._v("传说中 Vim 厉害地不得了, 专注主键盘区, 双手脱离"),a("del",[t._v("键盘")]),t._v("鼠标，效率嘎嘎上升。但是，找遍网上的教程无非就是根据键盘挨个键位解释功能，再带你在三种模式中来回切换，辛辛苦苦学到头发现自己只能利用 vim 在服务器的黑窗口中顶替一下记事本，教程的目的好像也是为了教你《如何在不小心进入vim程序中成功退出来》.")]),t._v(" "),a("p",[t._v("丝滑使用 Vim 前置条件 :  "),a("font",{staticStyle:{color:"red"}},[t._v("Caps Lock 映射成 ESC(本文提及的 Caps Lock 默认映射成 ESC)")]),t._v("。MacOS可以在设置中直接完成，其余系统可用三方工具完成。因为 Vim 使用中要多次用 ESC 切换状态,不映射的话低头找 ESC 的时间可能比找上下左右键时间还要长。")],1),t._v(" "),a("p",[t._v("本文不包括 Vim 基础知识，如三种模式如何切换,键盘功能挨个介绍...")]),t._v(" "),a("h4",{attrs:{id:"知识点1-插入数据的几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点1-插入数据的几种方式"}},[t._v("#")]),t._v(" 知识点1: 插入数据的几种方式")]),t._v(" "),a("blockquote",[a("p",[t._v("以下命令要在普通模式下输入，输入后进入插入模式。")])]),t._v(" "),a("ul",[a("li",[t._v("O:  在光标所在行上插入新行。")]),t._v(" "),a("li",[t._v("o:  在光标所在行下插入新行。")]),t._v(" "),a("li",[t._v("I:  在光标所在行行首插入。")]),t._v(" "),a("li",[t._v("A:  在光标所在行行尾插入。")]),t._v(" "),a("li",[t._v("i:  在光标所在位置前面插入。")]),t._v(" "),a("li",[t._v("a:  在光标所在位置后面插入。")])]),t._v(" "),a("h4",{attrs:{id:"知识点2-command-motions-text-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点2-command-motions-text-object"}},[t._v("#")]),t._v(" 知识点2: command + motions + text object")]),t._v(" "),a("h5",{attrs:{id:"command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("d: delete 删除\nc: change 修改\ny: yank(copy) 复制\nv: view 选中\n")])])]),a("h5",{attrs:{id:"motions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motions"}},[t._v("#")]),t._v(" motions:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("a: all \ni: in\nt: until 直到\nf: find Forward 向后\nF: find backward\n")])])]),a("h5",{attrs:{id:"text-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-object"}},[t._v("#")]),t._v(" text object:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("w: word 单词\ns: sentences 句子\np: paragraph 段落\nt: tag 标签\n")])])]),a("p",[t._v("上面列出了三类命令, 按照 "),a("code",[t._v("command + motions + text object")]),t._v(" 组合成命令就可以在普通模式下大杀四方了。")]),t._v(" "),a("p",[t._v("如都取用第一个选项组成 "),a("code",[t._v("daw")]),t._v(",就是 "),a("code",[t._v("delete all word")]),t._v(" 删除整体单词的意思，就可以快速删除光标所在的单词了。(试试看)")]),t._v(" "),a("p",[t._v("下面罗列一些个人常用的命令:\n"),a("code",[t._v('di"')]),t._v(" : 删除光标所在位置外层双引号内内容"),a("br"),t._v(" "),a("code",[t._v('ci"')]),t._v(" : 删除光标所在位置外层双引号内内容并进入编辑模式"),a("br"),t._v(" "),a("code",[t._v("das")]),t._v(" : 删除光标所在位置所属的句子，以标点符号为界"),a("br"),t._v(" "),a("code",[t._v("vat")]),t._v(" : 选中光标所在位置所属的 xml 标签"),a("br"),t._v(" "),a("code",[t._v('ct"')]),t._v(' : 删除光标所在位置到后"的所有内容并进入编辑模式'),a("br"),t._v("\n更多排列组合...."),a("br"),t._v(" "),a("code",[t._v("cw")]),t._v("  : 修改光标到单词结尾内容"),a("br"),t._v(" "),a("code",[t._v("dw")]),t._v("  : 删除光标到单词结尾内容")]),t._v(" "),a("h4",{attrs:{id:"知识点4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点4"}},[t._v("#")]),t._v(" 知识点4")]),t._v(" "),a("p",[t._v("IDE 的 Vim Mode "),a("span",{staticClass:"ec ec-100"})]),t._v(" "),a("p",[t._v("把 Vim 改造成 IDE"),a("span",{staticClass:"ec ec-x"})])])}),[],!1,null,null,null);a.default=_.exports}}]);