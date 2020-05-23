<template>
  <div id="home">
      <!--导航栏-->
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>
      <!--丝滑滚动条,使用better-scroll必须有固定高度-->
      <scroll class="content" ref="scroll" :ScrollType="3"
              @ScrollMove="ShowBackTop" :pullUpLoad="true"
              @LoadMore="LoadMore">
          <!--轮播图-->
          <HomeSwiper :banners="banners"></HomeSwiper>
          <!--推荐-->
          <recommend :recommends="recommends"></recommend>
          <!--本周流行-->
          <popular></popular>
          <!--选项卡控件-->
          <tab-control id="tab-control"
                       :titles="['流行','新款','精选']" @TabControlClick="TabControlClick">
          </tab-control>
          <!--商品列表-->
          <GoodsList id="goods-list" :goods="goods[CurrentSelect].list"></GoodsList>
      </scroll>
      <!--回到顶部按钮，滑到一定位置显示-->
      <back-top @click.native="backClick" ref="back-top" v-show="IsShowBackTop"></back-top>

  </div>
</template>

<script>

 //请求首页数据--->数据类
 import {getHomeMultidata,getHomeGoods} from "network/home"


 //首页组件，导航栏------>组件类
 import navbar from 'components/common/navbar/navbar'
 //轮播图
 import HomeSwiper from "./ChildComps/HomeSwiper"
 //推荐
 import recommend from "./ChildComps/recommend"
 //本周流行
 import popular from "./ChildComps/popular"
 //选项卡控件
 import TabControl from "components/common/TabControl/TabControl"
 //商品列表
 import GoodsList from "components/content/GoodsList/GoodsList"
 //滚动条~~用better-scroll封装的组件就是丝滑~~
 import Scroll from "components/common/scroll/Scroll"
 //回到顶部
 import BackTop from "components/content/BackTop/BackTop"


 export default {
   name: 'Home',
   data(){
     return{
       banners:[],      //存储轮播图数据
       recommends:[],   //存储本周流行数据
       result:null,     //这个暂时好像用不到
       goods:{          //存储商品数据,pop流行,new新款,sell精选
         'pop':{page:0,list:[]},
         'new':{page:0,list:[]},
         'sell':{page:0,list:[]}
       },
       //选项卡默认选择流行
       CurrentSelect:"pop",
       //刚进入时回到顶部按钮不显示
       IsShowBackTop:false,
       //记录上次离开时滑动到的位置,第一次默认为0
       scrollY:0
    }
   },
  components:{
    Scroll,
    navbar,
    HomeSwiper,
    recommend,
    popular,
    TabControl,
    GoodsList,
    BackTop
   },
   //组件创建完成后，去请求首页数据。
   created() {
     // 请求首页数据
     this.getHomeMultidata()
     // 请求首页商品数据
     this.getHomeGoods("pop")
     this.getHomeGoods("new")
     this.getHomeGoods("sell")
   },
   mounted() {
     // 组件挂载后·监听事件总线，
     this.$bus.$on('loadImage',(route)=>{
       if (route.indexOf("/home")!=-1){
         this.$refs.scroll && this.$refs.scroll.refresh()
       }

     })
   },
   // 进入路由时
   activated() {
     //回到上次记录的位置，ScrollTo后边的第三个时间参数不能传，我也不知道为啥，反正不传就好使了。
     this.$refs.scroll.ScrollTo(0,this.scrollY)
     //移动到位置后重新计算一下滚动区域，不然有时候会卡顿。
     this.$refs.scroll.refresh()
   },
   //离开路由时
   deactivated() {
     // 记录当时离开时滑到哪个位置
     this.scrollY= this.$refs.scroll.getScrollY()
   },

   methods:{
     //请求数据类
     getHomeMultidata(){
       getHomeMultidata().then(res => {
         // 把首页数据保存到data中
         this.banners=res.data.data.banner.list
         this.recommends=res.data.data.recommend.list
       })
    },
     //获取首页商品数据
     getHomeGoods(type){
       const page =this.goods[type].page+1
       getHomeGoods(type,page).then(res=>{
         this.goods[type].list.push(...res.data.data.list)
         this.goods[type].page+=1
         this.$refs.scroll && this.$refs.scroll.finish()
        })

     },

   // 事件监听类
     TabControlClick(index){
       switch (index) {
          case 0:
            this.CurrentSelect='pop'
            break
          case 1:
            this.CurrentSelect='new'
            break
          case 2:
            this.CurrentSelect='sell'
           break
       }
     },

     //  回到顶部
     backClick(){
       this.$refs.scroll.ScrollTo(0,0)
     },

    //移动到指定位置显示回到顶部按钮
     ShowBackTop(position){
      // 如果向下移动超过1000px，显示出回到顶部图标
      this.IsShowBackTop=(-position.y)>1000
     },
     //加载更多
     LoadMore(){
       // this.$refs.Scroll.
       this.getHomeGoods(this.CurrentSelect)
     },
   }

 }
</script>
<style scoped>
   .home-nav{
       background-color: var(--color-tint);
       color: white;
       position: fixed;
       left: 0px;
       right: 0px;
       top: 0px;
       z-index: 9;
   }
    #home{
        padding-top: 44px;
    }
    #tab-control{
        z-index: 8;
    }
    #goods-list{
        margin-bottom: 60px;
    }
    .content{
        position: absolute;
        top: 44px;
        left: 0px;
        right: 0px;
        bottom: 49px;
        overflow: hidden;
    }
</style>