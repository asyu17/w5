webpackJsonp([6],{SY8Z:function(t,a){},WzTo:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=[{title:"剧本名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"},width:260},{title:"类型",dataIndex:"type",key:"type",scopedSlots:{customRender:"type"},width:100},{title:"时间",dataIndex:"time",key:"time",scopedSlots:{customRender:"time"}},{title:"更新时间",key:"update_time",dataIndex:"update_time",scopedSlots:{customRender:"update_time"},width:190},{title:"创建时间",key:"create_time",dataIndex:"create_time",scopedSlots:{customRender:"create_time"},width:190},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"},width:100},{title:"操作",key:"action",scopedSlots:{customRender:"action"},width:60}],s={name:"timerHome",data:function(){return{columns:n,loading:!1,data:[],so_text:"",startPaueLoading:!1}},mounted:function(){this.onLoad()},methods:{onLoad:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loading=!0,this.$http.post("/api/v1/w5/get/timer/list",{keywords:a}).then(function(a){0==a.code?(t.data=a.data,t.loading=!1):(t.$message.error(a.msg),t.loading=!1)})},onStartPause:function(t,a){var e=this;this.startPaueLoading=!0,this.$http.post("/api/v1/w5/post/timer/start_pause",{uuid:t,type:a}).then(function(t){0==t.code?(e.onLoad(),e.startPaueLoading=!1):(e.$message.error(t.msg),e.startPaueLoading=!1)}).catch(function(t){e.startPaueLoading=!1})},onTz:function(t){this.$router.push({name:"WorkflowEdit",params:{uuid:t}})},onSearch:function(t){this.so_text=t,this.onLoad(this.so_text)}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-layout-content",[e("div",{staticClass:"header_div"},[e("a-input-search",{staticClass:"align",staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字"},on:{search:t.onSearch}}),t._v(" "),e("a-button",{staticClass:"align btn_add",staticStyle:{"background-color":"#469824","border-color":"#469824","margin-left":"10px"},attrs:{type:"primary",loading:t.startPaueLoading,icon:"play-circle"},on:{click:function(a){return t.onStartPause("all","start")}}},[t._v("\n            启动全部\n        ")]),t._v(" "),e("a-button",{staticClass:"align btn_add",attrs:{type:"primary",loading:t.startPaueLoading,icon:"pause-circle"},on:{click:function(a){return t.onStartPause("all","pause")}}},[t._v("\n            停止全部\n        ")])],1),t._v(" "),e("a-table",{attrs:{rowKey:"id",columns:t.columns,"data-source":t.data,loading:t.loading},scopedSlots:t._u([{key:"name",fn:function(a,n){return e("span",{},[e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[e("span",[t._v("打开剧本")])]),t._v(" "),e("a-icon",{staticClass:"pointer",attrs:{type:"link"},on:{click:function(a){return t.onTz(n.uuid)}}}),t._v(" "),e("b",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(a))])],2)],1)}},{key:"type",fn:function(a){return"cron"==a?e("a-tag",{attrs:{color:"#c63935"}},[t._v("\n            执行计划\n        ")]):"date"==a?e("a-tag",{attrs:{color:"#3356b9"}},[t._v("\n            定时执行\n        ")]):"interval"==a?e("a-tag",{attrs:{color:"#2d9bad"}},[t._v("\n            间隔执行\n        ")]):t._e()}},{key:"time",fn:function(a,n){return e("a-tag",{attrs:{color:"#7d838c"}},["cron"==n.type?e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[""===String(n.start_date).trim()?e("span",[t._v("开始时间：未设置")]):e("span",[t._v("开始时间："+t._s(n.start_date))]),t._v(" "),""===String(n.end_date).trim()?e("span",[t._v("结束时间：未设置")]):e("span",[t._v("结束时间："+t._s(n.end_date))]),t._v(" "),e("span",[t._v("随机浮动时间："+t._s(n.jitter))])]),t._v("\n                "+t._s(a)+"\n            ")],2):t._e(),t._v(" "),"interval"==n.type?e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[""===String(n.start_date).trim()?e("span",[t._v("开始时间：未设置")]):e("span",[t._v("开始时间："+t._s(n.start_date))]),t._v(" "),""===String(n.end_date).trim()?e("span",[t._v("结束时间：未设置")]):e("span",[t._v("结束时间："+t._s(n.end_date))]),t._v(" "),e("span",[t._v("随机浮动时间："+t._s(n.jitter))])]),t._v("\n                "+t._s(a)+"\n                "),"seconds"==n.interval_type?e("span",[t._v("秒钟")]):t._e(),t._v(" "),"minutes"==n.interval_type?e("span",[t._v("分钟")]):t._e(),t._v(" "),"hours"==n.interval_type?e("span",[t._v("小时")]):t._e(),t._v(" "),"days"==n.interval_type?e("span",[t._v("天")]):t._e(),t._v(" "),"weeks"==n.interval_type?e("span",[t._v("周")]):t._e()],2):t._e(),t._v(" "),"date"==n.type?e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[e("span",[t._v("指定时间执行，只执行一次")])]),t._v("\n                "+t._s(a)+"\n            ")],2):t._e()],1)}},{key:"status",fn:function(a,n){return e("span",{},["cron"==n.type?e("span",[""===String(n.end_date).trim()?e("span",[0==a?e("a-tag",{attrs:{color:"#c63935"}},[t._v("停止中...")]):t._e(),t._v(" "),1==a?e("a-tag",{attrs:{color:"#469823"}},[t._v("执行中...")]):t._e()],1):e("span",[new Date(n.end_date).getTime()>=(new Date).getTime()?e("span",[0==a?e("a-tag",{attrs:{color:"#c63935"}},[t._v("停止中...")]):t._e(),t._v(" "),1==a?e("a-tag",{attrs:{color:"#469823"}},[t._v("执行中...")]):t._e()],1):e("span",[e("a-tag",{attrs:{color:"#585858"}},[t._v("已结束...")])],1)])]):t._e(),t._v(" "),"interval"==n.type?e("span",[""===String(n.end_date).trim()?e("span",[0==a?e("a-tag",{attrs:{color:"#c63935"}},[t._v("停止中...")]):t._e(),t._v(" "),1==a?e("a-tag",{attrs:{color:"#469823"}},[t._v("执行中...")]):t._e()],1):e("span",[new Date(n.end_date).getTime()>=(new Date).getTime()?e("span",[0==a?e("a-tag",{attrs:{color:"#c63935"}},[t._v("停止中...")]):t._e(),t._v(" "),1==a?e("a-tag",{attrs:{color:"#469823"}},[t._v("执行中...")]):t._e()],1):e("span",[e("a-tag",{attrs:{color:"#585858"}},[t._v("已结束...")])],1)])]):t._e(),t._v(" "),"date"==n.type?e("span",[new Date(n.time).getTime()>=(new Date).getTime()?e("span",[0==a?e("a-tag",{attrs:{color:"#c63935"}},[t._v("停止中...")]):t._e(),t._v(" "),1==a?e("a-tag",{attrs:{color:"#469823"}},[t._v("执行中...")]):t._e()],1):e("span",[e("a-tag",{attrs:{color:"#585858"}},[t._v("已结束...")])],1)]):t._e()])}},{key:"create_time",fn:function(a){return e("div",{},[t._v("\n            "+t._s(t.Dayjs(a).subtract(8,"hour").format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])}},{key:"update_time",fn:function(a){return e("div",{},[t._v("\n            "+t._s(t.Dayjs(a).subtract(8,"hour").format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])}},{key:"action",fn:function(a,n){return e("div",{staticStyle:{"text-align":"center"}},["date"==n.type?e("span",[new Date(n.time).getTime()>=(new Date).getTime()?e("span",[0==n.status?e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[e("span",[t._v("启动执行剧本")])]),t._v(" "),e("a-button",{staticStyle:{"background-color":"#469824","border-color":"#469824"},attrs:{size:"small",shape:"circle",type:"primary",icon:"play-circle",loading:t.startPaueLoading},on:{click:function(a){return t.onStartPause(n.timer_uuid,"start")}}})],2):t._e(),t._v(" "),1==n.status?e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[e("span",[t._v("停止执行剧本")])]),t._v(" "),e("a-button",{attrs:{size:"small",shape:"circle",type:"primary",icon:"pause-circle",loading:t.startPaueLoading},on:{click:function(a){return t.onStartPause(n.timer_uuid,"pause")}}})],2):t._e()],1):e("span",[e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[e("span",[t._v("已经结束，无法操作")])]),t._v(" "),e("a-button",{staticStyle:{"background-color":"#469824","border-color":"#469824"},attrs:{size:"small",shape:"circle",type:"primary",icon:"play-circle",loading:t.startPaueLoading,disabled:""}})],2)],1)]):e("span",[0==n.status?e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[e("span",[t._v("启动执行剧本")])]),t._v(" "),e("a-button",{staticStyle:{"background-color":"#469824","border-color":"#469824"},attrs:{size:"small",shape:"circle",type:"primary",icon:"play-circle",loading:t.startPaueLoading},on:{click:function(a){return t.onStartPause(n.timer_uuid,"start")}}})],2):t._e(),t._v(" "),1==n.status?e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[e("span",[t._v("停止执行剧本")])]),t._v(" "),e("a-button",{attrs:{size:"small",shape:"circle",type:"primary",icon:"pause-circle",loading:t.startPaueLoading},on:{click:function(a){return t.onStartPause(n.timer_uuid,"pause")}}})],2):t._e()],1)])}}],null,!0)})],1)},staticRenderFns:[]};var r=e("VU/8")(s,o,!1,function(t){e("SY8Z")},"data-v-be62b8ec",null);a.default=r.exports}});