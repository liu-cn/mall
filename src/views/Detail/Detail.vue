<template>
    <div id="detail">
       <!--导航条-->
       <detail-nav ref="nav" @navClick="navClick" class="detail-nav"></detail-nav>
        <Scroll :ScrollType="3" @ScrollMove="ScrollMove" class="content" ref="Scroll">
            <!--轮播图-->
            <DetailSwiper :topImages="topImages"></DetailSwiper>
            <!--基本信息，店铺信息-->
            <DetailBaseInfo :goods="goods" :shopInfo="shopInfo"></DetailBaseInfo>
            <!--商品穿着效果展示-->
            <DetailGoodsInfo :goods-info="goodsInfo" @imgload="imgload"></DetailGoodsInfo>
            <!--商品尺寸-->
            <DetailSize ref="DetailSize" :goods-size="goodsSize"></DetailSize>
            <!--用户评价-->
            <detail-user-rate ref="UserRate" :user-rate="userRate"></detail-user-rate>
            <!--推荐商品-->
            <goods-list ref="recommend" :goods="recommend"></goods-list>
        </Scroll>
        <!--回到顶部-->
        <back-top @click.native="backTop" v-show="isShow"></back-top>
        <!--底部收藏，购买按钮-->
        <detail-bottom-bar :goods="goods"></detail-bottom-bar>
    </div>
</template>

<script>
  import DetailNav from "./ChildComps/DetailNav";
  import DetailSwiper from "./ChildComps/DetailSwiper";
  import DetailBaseInfo from "./ChildComps/DetailBaseInfo";
  import Scroll from "components/common/scroll/Scroll";
  import DetailGoodsInfo from "./ChildComps/DetailGoodsInfo";
  import DetailSize from "./ChildComps/DetailSize";
  import DetailUserRate from "./ChildComps/DetailUserRate";
  import GoodsList from "components/content/GoodsList/GoodsList";
  import BackTop from "components/content/BackTop/BackTop";
  import DetailBottomBar from "./ChildComps/DetailBottomBar";

  import {getDetailData,Goods,ShopInfo,GoodsSize,Rate,getRecommend} from "network/detail";


  export default {
    name: "Detail",
    components: {
      DetailGoodsInfo,
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      Scroll,
      DetailSize,
      DetailUserRate,
      GoodsList,
      BackTop,
      DetailBottomBar

    },
  data(){
      return{
        iid:this.$route.params.iid,
        detailData:null,
        topImages:[],
        goods:{},
        shopInfo:{},
        goodsInfo:{},
        goodsSize:{},
        userRate:{},
        recommend:[],
        moveTop:[],
        currentIndex:0,
        isShow:false
      }
   },
  created(){
    this.initDetail()
  },
  mounted() {
    //在这里获取的dom数据不真实，因为dom还没渲染好。
  },
  methods:{
      // 初始化商品数据
    initDetail(){
      // 获取商品数据
      getDetailData(this.iid).then(res=>{
        // console.log(res)
        //保存商品介绍
        const data=res.data.result
        console.log(data);
        //轮播图数据
        this.topImages=data.itemInfo.topImages
        //保存商品穿着展示信息
        this.goodsInfo=data.detailInfo.detailImage[0]
        //创建商品对象
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services,data.detailInfo)
        //保存店铺数据
        this.shopInfo = new ShopInfo(data.shopInfo)
        //保存商品尺寸信息
        this.goodsSize= new GoodsSize(data)
        //保存用户评价信息
        this.userRate=new Rate(data.rate)

      })
      //获取推荐数据
      getRecommend().then(res=>{
        this.recommend=res.data.data.list
      })
    },
    //商品展示图片加载完成后触发
    imgload(){
      //重新计算滚动区域
      this.$refs.Scroll.refresh()
      //重新覆盖原先保存的指定位置的数据
      this.moveTop=[]
      this.moveTop.push(0)
      this.moveTop.push(this.$refs.DetailSize.$el.offsetTop-44)
      this.moveTop.push(this.$refs.UserRate.$el.offsetTop-44)
      this.moveTop.push(this.$refs.recommend.$el.offsetTop-44)
    },
    //点击导航栏按钮移动到页面指定位置
    navClick(index){
      this.$refs.Scroll.ScrollTo(0,-this.moveTop[index],100)
    },
    //滚动到指定位置时，上方导航栏同步切换。
    ScrollMove(position){
      //获取当前y值
      const y=-position.y
      this.isShow=y>1000

      // console.log(this.moveTop)
      if (y>=this.moveTop[0] && y<this.moveTop[1]){
        if (this.currentIndex!==0){
          this.currentIndex=0
        }
        this.$refs.nav.currentIndex=this.currentIndex
      }else if(y>=this.moveTop[1] && y<this.moveTop[2]){
        if (this.currentIndex!==1){
          this.currentIndex=1
        }
        this.$refs.nav.currentIndex=this.currentIndex
      }else if(y>=this.moveTop[2] && y<this.moveTop[3]){
        if (this.currentIndex!==2){
          this.currentIndex=2
        }
        this.$refs.nav.currentIndex=this.currentIndex
      }else if(y>=this.moveTop[3]){
        if (this.currentIndex!==3){
          this.currentIndex=3
        }
        this.$refs.nav.currentIndex=this.currentIndex
      }
    },
    backTop(){
      this.$refs.Scroll.ScrollTo(0,0)
    }
  }

  }
</script>

<style scoped>
    #detail{
      z-index: 9;
      height: 100vh;
      position: relative;
      background-color: white;
    }
    .content{
        overflow: hidden;
        height: calc(100% - 44px - 48px);
    }
    .detail-nav{
        z-index: 9;
        position: relative;
        background-color: white;
    }

</style>