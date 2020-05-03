<template>
    <div id="detail">
       <!--导航条-->
       <detail-nav class="detail-nav"></detail-nav>
        <Scroll class="content" ref="Scroll">
            <!--轮播图-->
            <DetailSwiper :topImages="topImages"></DetailSwiper>
            <!--基本信息，店铺信息-->
            <DetailBaseInfo :goods="goods" :shopInfo="shopInfo"></DetailBaseInfo>
            <!--商品穿着效果展示-->
            <DetailGoodsInfo :goods-info="goodsInfo" @imgload="imgload"></DetailGoodsInfo>
            <!--商品尺寸-->
            <DetailSize :goods-size="goodsSize"></DetailSize>
        </Scroll>
    </div>
</template>

<script>
  import DetailNav from "./ChildComps/DetailNav";
  import DetailSwiper from "./ChildComps/DetailSwiper";
  import DetailBaseInfo from "./ChildComps/DetailBaseInfo";
  import Scroll from "components/common/scroll/Scroll";
  import DetailGoodsInfo from "./ChildComps/DetailGoodsInfo";
  import DetailSize from "./ChildComps/DetailSize";

  import {getDetailData,Goods,ShopInfo,GoodsSize} from "network/detail";



  export default {
    name: "Detail",
    components: {
      DetailGoodsInfo,
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      Scroll,
      DetailBaseInfo,
      DetailSize
    },
   data(){
      return{
        iid:this.$route.params.iid,
        detailData:null,
        topImages:[],
        goods:{},
        shopInfo:{},
        goodsInfo:{},
        goodsSize:{}
      }
   },
  created(){
      this.initDetail()
  },
  methods:{
      // 初始化商品数据
    initDetail(){
      // 获取商品数据
      getDetailData(this.iid).then(res=>{
        console.log(res)
        //保存商品介绍
        const data=res.data.result
        //轮播图数据
        this.topImages=data.itemInfo.topImages
        //保存商品穿着展示信息
        this.goodsInfo=data.detailInfo.detailImage[0]
        //创建商品对象
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //保存店铺数据
        this.shopInfo = new ShopInfo(data.shopInfo)
        //保存商品尺寸信息
        this.goodsSize= new GoodsSize(data)
      })
    },
    imgload(){
      this.$refs.Scroll.refresh()
    }
  }

  }
</script>

<style scoped>
    #detail{
      z-index: 9;
      height: 100vh;
      background-color: white;
      position: relative;
    }
    .content{
        /*position: absolute;*/
        /*top: 44px;*/
        /*left: 0px;*/
        /*right: 0px;*/
        /*bottom: 0px;*/
        /*overflow: hidden;*/
        height: calc(100% - 44px);
        /*overflow: hidden;*/
    }
    .detail-nav{
        z-index: 9;
        position: relative;
        background-color: white;
    }

</style>