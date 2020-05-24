<template>
    <div class="bottom-bar">
   <div class="left">
       <div class="icon-list">
           <div class="icon-item-left">
           </div>
           <div class="icon-item-center">
           </div>
           <div class="icon-item-right">
           </div>
       </div>
       <div class="text-list">
           <span>客服</span>
           <span>店铺</span>
           <span>收藏</span>
       </div>
   </div>
   <div class="right">
        <div class="add-cat" @click="AddCart">
            加入购物车
        </div>
       <div class="buy">
           购买
       </div>
   </div>


    </div>
</template>

<script>
    import {addShopList} from "../../../common/util/addShopList";

    export default {
    name: "DetailBottomBar",
      props:{
        goods:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      methods:{
        AddCart(){
          // let shop=new addShopList(this.goods)
          // console.log(this.goods);
          // console.log(shop);
          this.$store.commit("AddCatList",this.goods)
          console.log(this.$store.state.CartList);
          alert("加入购物车成功！")

        }
      },
  }
</script>

<style scoped>
    .left{
        width: 50%;
    }
    .bottom-bar{
        height: 48px;
        width: 100%;
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        display: flex;
        background-color: white;
    }
    .icon-list{
        width: 100%;
        display: flex;
        margin: 6px 0px;
        justify-content: space-around;
    }
    .icon-list div{
        width: 33%;
        width: 23px;
        height: 20px;
        background-size: 100%;
    }
    .icon-item-left{
        background-image: url("~assets/img/common/detail_bottom.png");
        background-position: 0px 100px;
    }
    .icon-item-center{
        background-image: url("~assets/img/common/detail_bottom.png");
        background-position: 0px 210px;
    }
    .icon-item-right{
        background-image: url("~assets/img/common/detail_bottom.png");
        background-position: 0 0;
    }
    .text-list{
        display: flex;
        width: 100%;
        font-size: 12px;
        justify-content: space-around;
    }
    .right{
        width: 50%;
        display: flex;
        text-align: center;
        line-height: 48px;
        justify-content: space-evenly;
    }
    .add-cat{
        width: 50%;
        background-color: yellow;
    }
    .buy{
        width: 50%;
        color: white;
        background-color: palevioletred;
    }

</style>