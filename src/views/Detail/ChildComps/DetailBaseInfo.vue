<template>
    <div class="detail-base-info">
        <!--商品标题-->
        <div class="title">{{goods.title}}</div>
        <!--价格信息-->
        <div class="priceInfo">
            <span class="realPrice">￥{{goods.realPrice}}</span>
            <s v-if="goods.oldPrice" class="oldPrice">{{goods.oldPrice}}</s>
            <span v-if="goods.discount" class="box"><span class="discount">{{goods.discount}}</span></span>
        </div>
        <!--销量，收藏等-->
        <div class="columns">
            <span v-if="index<=1" :class="{left:index==0,center:index==1}" v-for="(item,index) in goods.columns"
                  class="columns-item">{{item}}</span>

            <span v-if="index===0" v-for="(item,index) in goods.services"
                  class="columns-item right">{{item.name}} </span>
        </div>
        <!--服务，(退货补运费等)-->
        <div class="services">
            <div v-if="item.icon" v-for="(item,index) in goods.services"
                 class="service-item" :class="{just3:goods.services.length==3}">
                <img class="item-icon" :src="item.icon"><span class="item-text">{{item.name}}</span>
            </div>
        </div>
        <!--店铺信息-->
        <div class="shop-info">
            <div class="shop">
                <a :href="shopInfo.shopUrl">
                    <img class="shop-logo" :src="shopInfo.shopLogo">
                </a>
                <span class="shop-name">{{shopInfo.name}}</span>
            </div>
            <div class="info">
              <div class="left-item">
               <div class="sells">

                      <!--如果销量大于10000以上面的方式展示示-->
                      <p v-if="shopInfo.sells>10000" class="sell">{{Math.round((shopInfo.sells/10000)*10)/10+"万"}}</p>
                      <!--如果销量小于10000以下面的方式展示-->
                      <p v-else class="sell">{{shopInfo.sells}}</p>
                       <p class="goods-nums">总销量</p>
               </div>
                  <div class="goods">
                      <p>{{shopInfo.goods}}</p>
                      <p class="all-goods">全部宝贝</p>
                  </div>

              </div>
              <div class="right-item">
                <div v-for="item in shopInfo.score">
                    <span class="span-left">{{item.name}}</span>
                    <span :class="{RedScoreNum:item.score>=5,scoreNum:item.score<5}">{{item.score}}</span>
                    <span :class="{RedScoreText:item.score>=5,scoreText:item.score<5}"
                          class="span-right" v-if="item.score>=5">高</span>
                    <span  class="span-right scoreText" v-else>低</span>
                </div>

              </div>
            </div>
            <div class="go-shop">
                <a :href="shopInfo.shopUrl">进店逛逛</a>
            </div>
        </div>
    </div>
    
</template>

<script>

  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      },
      shopInfo:{
        type:Object,
        default() {
          return {}
        }
      }
    },
    data(){
      return{
        sells:0
      }
    }
  }
</script>

<style scoped>
/*商品标题简介*/
    .title{
        margin: 10px 0px 10px 0px;
        padding-left: 5px;
    }
    /*真实价格*/
    .realPrice{
        font-size: 18px;
        padding-left: 2px;
        color: var(--color-tint);
    }
    /*老价格*/
    .oldPrice{
        font-size: 12px;
        margin: 0px 5px;
    }
    .discount{
        color:white;
        font-size: 14px;
        padding: 4px;
    }
    .box{
        top: -3px;
        position: absolute;
        border-radius: 10px;
        display: inline-block;
        background-color: #F8717E;
    }
    /*价格信息的老爹*/
    .priceInfo{
        position: relative;
    }

    /*销量，收藏等*/
    .columns{
        display: flex;
        font-size: 14px;
        margin-top: 20px;
    }
    .columns .columns-item{
        flex: 1;
    }
    .columns .right{
       padding-right: 10px;
       text-align: right;
    }
    .columns .left{
        padding-left: 5px;
    }
    .columns .center{
        text-align: center;
    }

   /* 服务，退货补运费，全场包邮等*/
   .service-item img{
       width: 12px;
       height: 12px;
   }
   .services{
       margin-top: 20px;
       display: flex;
       justify-content: space-between;
   }
   .services .item-text{
       font-size: 12px;
   }
   .service-item{
       padding-right: 2px;
       display: inline-block;
   }
    /*.just3{*/
    /*    width: 33%;*/
    /*}*/
    .shop-info{
      margin-top: 20px;
      position: relative;
    }
    .shop{
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    }

    .shop-info .shop img{
        width: 60px;
    }
    .shop-name{
        font-size: 20px;
        margin-left: 15px;
        display: inline-block;
    }
    .info{
        display: flex;
    }
    .left-item, .right-item{
        width: 50%;
    }
    .left-item{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: space-around;
    }
    .sells,.goods{
        width: 50%;
        text-align: center;
    }
    .all-goods ,.goods-nums{
        font-size: 12px;
        margin-top: 8px;
    }
    .right-item div{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

    }

    .right-item div span{
        /*flex: 1;*/
        font-size: 12px;
    }
    .span-left{
        padding-left: 30px;
    }
    .span-right{
        margin-right: 30px;
    }
    .RedScoreNum{
        color: red;
    }
    .scoreNum{
        color: green;
    }
    .RedScoreText{
        color: white;
        background-color: red;
    }
    .scoreText{
        color: white;
        background-color: #0E9A00;
    }
    .go-shop{
        display: flex;
        margin-top: 20px;
        justify-content: center;
    }
    .go-shop a{
        width: 40%;
        font-size: 12px;
        text-align: center;
    }




</style>