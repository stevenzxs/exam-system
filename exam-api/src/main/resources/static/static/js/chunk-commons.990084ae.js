(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-commons"],{"0f93":function(t,e,i){},"1c18":function(t,e,i){},"333d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[i("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},n=[],s=(i("c5f6"),i("09f4")),l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&Object(s["a"])(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&Object(s["a"])(0,800)}}},o=l,r=(i("e498"),i("2877")),u=Object(r["a"])(o,a,n,!1,null,"6af373ef",null);e["a"]=u.exports},"4a02":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-select",{staticClass:"filter-item",attrs:{filterable:"",remote:"",multiple:t.multi,"reserve-keyword":"",clearable:"","automatic-dropdown":"",placeholder:"选择或搜索题库","remote-method":t.fetchData},on:{change:t.handlerChange},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}},t._l(t.dataList,(function(t){return i("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)},n=[],s=(i("7514"),i("0468")),l={name:"RepoSelect",props:{multi:{type:Boolean,default:!1},value:String},data:function(){return{dataList:[],currentValue:[]}},watch:{value:{handler:function(){this.currentValue=this.value}}},created:function(){this.currentValue=this.value,this.fetchData()},methods:{fetchData:function(){var t=this;Object(s["c"])({}).then((function(e){t.dataList=e.data}))},handlerChange:function(t){var e=this.dataList.find((function(e){return e.id===t}));this.$emit("change",e),this.$emit("input",t)}}},o=l,r=i("2877"),u=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=u.exports},5103:function(t,e,i){"use strict";var a=i("0f93"),n=i.n(a);n.a},7845:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[t._t("filter-content"),i("el-row",[i("el-col",[t.options.addRoute?i("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("添加")]):t._e()],1)],1)],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.multiShow&&t.options.multiActions,expression:"multiShow && options.multiActions"}],staticClass:"filter-container"},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:t.selectedLabel},on:{change:t.handleOption},model:{value:t.multiNow,callback:function(e){t.multiNow=e},expression:"multiNow"}},t._l(t.options.multiActions,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.dataList.records,border:"",fit:"","highlight-current-row":"","header-cell-style":{background:"#f2f3f4",color:"#555","font-weight":"bold","line-height":"32px"}},on:{"selection-change":t.handleSelection}},[t.options.multi?i("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}):t._e(),t._t("data-columns")],2),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.dataList.total>0,expression:"dataList.total>0"}],attrs:{total:t.dataList.total,page:t.listQuery.current,limit:t.listQuery.size},on:{"update:page":function(e){return t.$set(t.listQuery,"current",e)},"update:limit":function(e){return t.$set(t.listQuery,"size",e)},pagination:t.getList}})],1)},n=[],s=(i("ac6a"),i("2934")),l=i("333d"),o={name:"PagingTable",components:{Pagination:l["a"]},props:{options:{type:Object,default:function(){return{multiActions:[],listUrl:"/exam/api",deleteUrl:"",stateUrl:"",multi:!1}}},listQuery:{type:Object,default:function(){return{current:1,size:10,params:{},t:0}}}},data:function(){return{dataList:{total:0},listLoading:!0,selectedIds:[],selectedObjs:[],selectedLabel:"",multiShow:!1,multiNow:""}},watch:{listQuery:{handler:function(){this.getList()},deep:!0}},created:function(){this.getList()},methods:{handleAdd:function(){this.options.addRoute?this.$router.push({name:this.options.addRoute,params:{}}):console.log("未设置添加数据跳转路由！")},getList:function(){var t=this;this.listLoading=!0,this.listQuery.t=(new Date).getTime(),Object(s["c"])(this.options.listUrl,this.listQuery).then((function(e){t.dataList=e.data,t.listLoading=!1}))},handleFilter:function(){this.getList()},handleOption:function(t){this.multiNow="","delete"!==t?"enable"!==t?"disable"!==t?this.$emit("multi-actions",{opt:t,ids:this.selectedIds}):this.handleState(1):this.handleState(0):this.handleDelete()},handleState:function(t){var e=this;Object(s["a"])(this.options.stateUrl,this.selectedIds,t).then((function(t){0===t.code&&(e.$message({type:"success",message:"状态修改成功!"}),e.getList())}))},handleDelete:function(){var t=this;0!==this.selectedIds.length?this.$confirm("确实要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["b"])(t.options.deleteUrl,t.selectedIds).then((function(){t.$message({type:"success",message:"删除成功!"}),t.getList()}))})):this.$message({message:"请至少选择一条数据！",type:"warning"})},handleSelection:function(t){var e=[];t.forEach((function(t){e.push(t.id)})),this.selectedObjs=t,this.selectedIds=e,this.multiShow=e.length>0,this.selectedLabel="已选"+e.length+"项",this.$emit("select-changed",{ids:this.selectedIds,objs:this.selectedObjs})}}},r=o,u=(i("5103"),i("2877")),c=Object(u["a"])(r,a,n,!1,null,null,null);e["a"]=c.exports},e498:function(t,e,i){"use strict";var a=i("1c18"),n=i.n(a);n.a}}]);