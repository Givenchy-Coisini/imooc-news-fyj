# imooc-news-fyj
uniapp基础

uniapp简介

1.uniapp是什么

uniapp是Dcloud公司研发的、使用Vue.js技术开发的所有前端应用的框架

2.uniapp可以干什么

一套代码可以发布到多个平台，如ios、Android、h5、微信小程序、支付宝小程序、百度小程序、字节跳动小程序、qq小程序等等。

3.为什么学习uniapp

- 移动端技术太多，跨端框架或是未来发展的趋势
- 一套代码多端发布，受开发者的青睐
- uniapp有着完整的生态，受企业的青睐

4.uniapp的优势是什么

- 开发者、案例数量多

拥有着几十万的应用、uni统计月活8.5亿、社区活跃

- 平台能力不受限制

支持原生代码混写和原生sdk集成。

在跨端的同时、通过条件编译+平台特有的API调用，可以优雅的为某平台写个性化的代码。

- 性能体验优秀

体验更好的Hybrid框架，加载新页面速度快。

App支持weex原生渲染，可以支持更流畅的用户体验。

小程序端的性能优与其他的市场框架。

- 周边生态丰富

插件市场有着数千个插件。

支持npm，支持小程序组件和sdk，兼容mpvue项目，兼容weex组件。

- 学习成本低

基于通用的前端技术栈，采用vue语法+微信小程序api，没有额外的学习成本。

- 开发成本低

开发成本低，开发效率翻倍。

小程序入门

1.app.js

    App({
    //App是一个实例
        //生命周期
        onLanch:function(){//当小程序初始化完成的时候，会触发，全局只触发一次
        console.log("onLanch");
    }
        onShow：function (options){//当小程序启动 或者从后台进入前台的时候，会触发
        console.log("onShow");
    }
    onHide:function(){//当进入后台的时候触发
        console.log("onHide")
    }
    })

2.index.js

    Page({
    //需要一个page的页面构造器来构造页面
      data：{
      
    },
      onLoad:function(options){//监听页面加载
      console.log("onLoad");1
    }
    onReady:function(){//监听页面初次渲染完成
      console.log("onReady 页面渲染完成");}3
    onShow:function(){//监听页面显示
      console.log("onShow 页面显示");}2
    onHide:function(){//监听页面隐藏
      console.log("onHide 页面隐藏");}
    onUnLoad:function(){//监听页面卸载  b页面进入a页面的时候，b页面关闭了，所以b页面执行卸载
      console.log("onUnLoad 页面卸载");}
    })
    
    //index页面进入detail页面的时候，会先触发index页面的onHide(页面隐藏) 接着会触发detail页面的onload
    //(页面加载)->onshow(页面显示)->onready(页面渲染完毕)
    //当detail页面返回index页面的时候，先触发detail页面的onUnload(卸载页面) 然后触发index页面的onshow 

3.小程序基础知识

- 数据绑定

html文件

    <text wx:if="{{is_show}}">{{name}}</text>
    ## text是行内元素->span
    ## view是换行的元素->div
    <view wx:for="{{arr}}">{{item}}</view>

js文件

    Page({
    //需要一个page的页面构造器来构造页面
      data：{
      name：'张三',
      is_show:false,
      arr:[12,13,14,15]
    },
      onLoad:function(options){//监听页面加载
      console.log("onLoad");1
      //需要动态绑定数据
      setTimeout(//定时器，2s后改变数据
        ()=>{
          //设置data中的数据
          this.setData({//this指的是Page对象，他有这个setData的方法，这个方法接受的参数为一个对象
            name:'李四',
            is_show:true
          })
        },2000)
    }
    onReady:function(){//监听页面初次渲染完成
      console.log("onReady 页面渲染完成");}3
    onShow:function(){//监听页面显示
      console.log("onShow 页面显示");}2
    onHide:function(){//监听页面隐藏
      console.log("onHide 页面隐藏");}
    onUnLoad:function(){//监听页面卸载  b页面进入a页面的时候，b页面关闭了，所以b页面执行卸载
      console.log("onUnLoad 页面卸载");}
    })

- 条件判断
- 列表渲染

item是当前变量的默认值

index是当前下标(索引)的默认值

如果不想用默认值的话，可以用wx：for-item="age"//注意这里没有插值表达式   对应的{{}}->{{age}}

uniapp核心知识点

1.uniapp规范

- 页面遵循Vue.js单文件(SFC)规范

    <template></template>  //模板块
    <script>
    export default{//脚本块
      data(){
        return{
          xxx:"xxx"
        }
      }
    }
    </script>
    <style></style>//样式块

- 组件标签靠近小程序规范
- 接口能力(js API)靠近微信小程序规范
- 数据绑定及事件处理同Vue,js规范
- 为兼容多端开发，建议使用flex布局进行开发

2.uniapp特色

- 条件编译 
  在一个工程中，uniapp可以实现优雅的不同平台适配以及个性化实现
- App端的Nvue开发
  内置了weex的渲染引擎，为App提供了原生的渲染能力

3.uniapp知识点

- 组件  ->基础组件-->自定义组件
- API
- 路由 ->uniapp是没有vue-router的概念的，这里说的路由主要是类似于小程序中的页面切换。
- 生命周期
- 语法
- 布局样式 sass  less

4.如何用vue-cli下载工程

- 先检测node是否安装、vuecli是否安装
- node -v   vue -V
- vue create -p dcloudio/uni-preset-vue xxx
- 选择默认模板
- npm run  serve  运行

5.uniapp的基础知识

- 模板语法
- 数据绑定

    <template>
    	<view class="content" v-bind:class="className" v-on:click="open">
    		{{title}}
    	</view>
    </template>
    
    <script>
    	export default {
    		data() {//初始化数据的方法
    			return {
    				title:'hello uniapp',
    				className:'active'
    			}
    		},
    		onLoad() {
          setTimeout(()=>{
    	       this.title='hello uniappfyj'    
          }, 2000);
    		},
    		methods: {
          open(){
    	      console.log('我被点击了')
           }
    		}
    	}
    </script>
    
    <style>
    	
    </style>

- 条件判断

    <template>
    	<view class="content" v-if="true">  //v-if如果表达式返回真值为true 就会正常渲染我们的内容
    		hello uni-app
    	</view>
      //这个view只能有一个就像vue中只能有一个div是一个道理
      ##有v-if   v-else-if   v-else三种情况
    </template>

- 列表渲染

    <template>
    	<view class="">
    		<view v-for="(item,index) in arr">
    			{{(index+1)+' '+item}}
    		</view>
    	</view>
    </template>
    
    <script>
    	export default {
    		data() { //初始化数据的方法
    			return {
    				//item:被迭代的数组元素的别名
    				//index:下标的别名
    				arr: ['uniapp', 'vue', 'html']
    			}
    		},
    		onLoad() {
    
    		},
    		methods: {
           //v-bind 会把字符串解析为变量
           //v-model 是双向绑定
    		}
    	}
    </script>
    
    <style>
    
    </style>
    

- 基础组件的使用
- 自定义组件的使用

btn组件：

    <template>
    	<view class="btn-box" :style="{color:color}" @click="Onclick">
    		<slot></slot>父组件调用子组件的时候用到了插槽
    	</view>
    </template>
    
    <script>
    //:style中 第一个color是样式的属性名  第二个color是我们的变量
    	export default {
    		props:{
    			color:{
    				type:String,
    				default:"#000"
    			}
    		},
    		data() {
    			return {
    				
    			};
    		},
    		methods:{
    			Onclick(){
    				console.log("我被点击了")
    				this.$emit('change',this.color)//prop中的值和data中的值是一样的  第一个参数是父组件的方法前面的名字
    			}
    		}
    	}
    </script>
    
    <style>
    .btn-box{
    	width: 200px;
    	height: 100px;
    	line-height: 100px;
    	text-align: center;
    	border: 1px red solid;
    }
    </style>
    

页面(父组件)

    <template>
    	<view class="">
    		<btn color="blue" @change="change">这是一个按钮</btn>
    	</view>
    </template>
    
    <script>
    	import btn from "@/components/btn.vue"//导入组件
    	export default {
    		components: {
    			btn//注册组件
    		},
    		data() { //初始化数据的方法
    			return {
    
    			}
    		},
    		onLoad() {
    
    		},
    		methods: {
    			change(e){
    			console.log(`'我是页面的事件,我返回了:'${e}`);
    			}
    		}
    	}
    </script>
    
    <style>
    
    </style>
    

- 基础api的用法
- 条件编译
- 页面布局



通过@import 引入外部样式   建议布局采用flex布局。

6.生命周期

- 应用生命周期

App.vue

    <script>
    	export default {
    		//应用 初始化完成触发一次 全局只触发一次
    		onLaunch: function() {
          //登录  获取全局变量的事情
    			console.log('App Launch')
    		},
    		//应用启动的时候  或者从后台进入前台会触发
    		onShow: function() {
    			console.log('App Show')
    		},
    		//应用从前台进入后台触发
    		onHide: function() {
    			console.log('App Hide')
    		}
    	}
    </script>
    
    <style>
    	/*每个页面公共css */
    </style>

- 页面生命周期

    onLoad() {//监听页面加载 只要页面开始加载就会触发  这个时候标签还没有渲染  1
    			uni.getSystemInfo({
    				success(res) {
    					console.log(res)
    				},
    				fail(err) {
    					console.log(err)
    				},
    				complete(res) {
    					console.log('不管成功还是失败', res)
    				}
    			})
    		},
    		onReady() {   3
          //如果页面渲染速度太快，会在页面进入动画之前完成渲染
    			//监听页面初次渲染完成  标签和页面已经渲染完成了
    		},
        onShow(){   2
          //监听页面显示   
        }
        onHide(){//监听页面隐藏
         console.log("onHide 页面隐藏");
        }
        onUnLoad(){//监听页面卸载  b页面进入a页面的时候，b页面关闭了，所以b页面执行卸载
          console.log("onUnLoad 页面卸载");
        }

- 组件生命周期

        beforeCreate() {//在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
    			
    		},
    		created() {
    			//在实例创建完成后被立即调用。挂载阶段还没有开始
    		},
    		mounted() {
    			// 挂载到实例上去之后调用该钩子。
    		},
    		destroyed() {
    			// vue实例销毁后调用
    		}

7.目录结构

    1.components  自定义组件的目录
    2.pages  页面的存放目录
    3.static 静态文件的目录
    4.unpackage  编译后的文件存放目录
    5.utils  工具类
    6.common  公用的文件
    7.app.vue 和小程序中的app.js是一样的
    8.mian.js  vue工程中的main.js是一样的
    9.manifest.json  项目配置
    10.pakage.json   页面配置
    11.uni.scss   样式

8.scss预处理

scss预处理可以清楚的表达模板中的层级关系，需要安装scss插件才可以生效

可以定义一个变量：

$width : 200rpx ;下面遇到200rpx的可以直接去用这个变量

&box 代表父级的选择器

uniCloud云开发平台

1.什么是unicloud

unicloud是Dcloud公司联合腾讯云、阿里云开发的基于serverless模式和js编程的云开发平台

2.unicloud有那些价值

- 轻松的用js开发整体的前后台业务
- 开发成本大幅下降
- 只需要关注业务，不需要再去关注服务器运维等等
- 不发布H5  域名都不用去申请
- 对于敏捷性项目，完全不需要前后台分离

3.unicloud开发流程

- 先开启一个项目
- 选择云环境
- 编写代码->云函数
- serverless
- 调用云函数

4.unicloud构成

- 云函数
- 云数据库
- 云存储和CDN

5.配置云开发环境

- 创建uniapp项目、启用阿里云云开发
- 确保登录状态、然后重新获取appid
- 创建云服务空间、进行实名认证、邮箱手机号认证等
- 选择之前创建好的云服务空间
- 创建云函数 上传并部署

6.云函数

- 运行在云端(服务器端)的函数，云函数运行在云端的nodejs中

    'use strict';
    exports.main = async (event, context) => {
      //event为客户端上传的参数
      //context 包含了调用信息和运行状态  获取每次调用的上下文
      console.log('event : ' + event)
      //返回数据给客户端
      return event
    };

- 前端代码通过uniCloud.callFunction()方法调用云函数。

7.云数据库

- 异步和同步 async  await
- 删除

    'use strict';
    const db = uniCloud.database() //获取数据库的引用
    exports.main = async (event, context) => {
    	const collection = db.collection('user') //获取数据库中集合的引用
    	//event为客户端上传的参数
    	const res = await collection.doc('5f0411e73057830001874e07').remove()//删除数据
    	console.log('数据插入:' + JSON.stringify(res))
    	return {}
    };

- 插入和更新

    'use strict';
    const db = uniCloud.database() //获取数据库的引用
    exports.main = async (event, context) => {
    	const collection = db.collection('user') //获取数据库中集合的引用
    	//event为客户端上传的参数
    	const res = await collection.doc('5f0411e73057830001874e06').update({//也可以是set
        //update只能更新存在的记录，set如果存在就更新，如果不存在就添加
    		name:'html1'
    	})
    	const res1= await collection.add([//添加一个数组
    		{
    			name:'lisi'
    		},
    		{
    			name:'fyj'
    		}
    	])
    	console.log('数据插入:' + JSON.stringify(res))
    	return {
    		res1
    	}
    };

- 查询

    'use strict';
    const db = uniCloud.database() //获取数据库的引用
    exports.main = async (event, context) => {
    	const collection = db.collection('user') //获取数据库中集合的引用
    	//event为客户端上传的参数
    	const res = await collection.doc('5f0411e73057830001874e06').get()//查询方法  doc只能根据id去查询
    	console.log(JSON.stringify(res))
    	return {}
    };

- 根据其他条件查询用where 然后返回给客户端数据

    'use strict';
    const db = uniCloud.database() //获取数据库的引用
    //涉及到聚合
    exports.main = async (event, context) => {
    	const collection = db.collection('user') //获取数据库中集合的引用
    	//event为客户端上传的参数
    	const res = await collection.where({name:'fyj'}).get()
      //const res = await collection.where({name:event.name}).get() 这样的话name就不是死的值了  而是前台传过来的数据
    	console.log(JSON.stringify(res))
    	return {
    		code:200,
    		msg:'查询成功',
    		data:res.data
    	}
    };

8.云存储

- 存储图片

    <template>
    	<view class="content">
    		<image class="logo" :src="src"></image>
    		<view class="text-area">
    			<text class="title">{{title}}</text>
    		</view>
    		<button type="default" @click="open">获取数据</button>
    	</view>
    </template>
    
    <script>
    	export default {
    		data() {
    			return {
    				title: 'Hello',
    				src:''
    			}
    		},
    		onLoad() {
    
    		},
    		methods: {
    			open() {
    				const self = this//改变一下this指向
    				uni.chooseImage({
    					count: 1,
    					success(res) {
    						const tempFilePath = res.tempFilePaths[0]
    						console.log(tempFilePath);
    						uniCloud.uploadFile({
    							 cloudPath: '正面.jpg',
    							 filePath:tempFilePath,
    							 success(res){
    							 	console.log(res);
    								self.src=res.fileID
    							 },
    							 fail(err) {
    							 	console.log(err);
    							 }
    						})
    						console.log(res)
    					},
    					fail(err) {
    						console.log(err)
    					}
    				})
    			}
    		}
    	}
    </script>

项目(imooc-news-fyj)

项目初始化

1.环境搭建

- 创建云服务空间(imooc-news-fyj)
- 选择云服务空间(imooc-news-fyj)
- 初始化云数据库(db_init.json文件)  找到我们的项目的源代码中的数据库
- 初始化tabbar->找到对应的字体图标

效果图如下：



2.自定义导航栏(组件化思维)

- page.json中

    "style": {
    				"navigationStyle":"custom",//删除原生的导航栏 在index页面中
    				"navigationBarTitleText": "uni-app"
    			}

- index.vue中

    <template>
    	<view class="content">
    		<!-- 自定义组件 -->
    		<navbar></navbar>
    	</view>
    </template>
    <script>
       // easyCom   components/组件名/组件名.vue 局部引入  也就是说不用import 可以直接用
    	import navbar from '@/components/navbar/navbar.vue'//在父组件中导入子组件
    	export default {
    		components:{
    			navbar//注册子组件
    		},
    		data() {
    			return {
    				title: 'Hello'
    			}
    		},
    		onLoad() {
    
    		},
    		methods: {
    
    		}
    	}
    </script>
    
    <style lang="scss">
    	
    </style>

- navbar.vue中

    <template>
    	<view>
    		导航栏
    	</view>
    </template>
    
    <script>
    	export default {
    		data() {
    			return {
    			};
    		}
    	}
    </script>
    <style>
    </style>


## 插件市场中的字体图标
[插件市场地址](https://ext.dcloud.net.cn/)

