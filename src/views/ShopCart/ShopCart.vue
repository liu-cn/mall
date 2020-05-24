<template>
<div>
  <navbar class="navbar">
    <div slot="left">购物</div>
    <div slot="right">管理</div>
  </navbar>
  <div class="shopCart">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <p v-if="cartList.length===0">购物车为空，去添加一个吧！</p>
        <shop-cart-list v-else v-for="i in cartList" :info="i"></shop-cart-list>
      </div>
    </div>
    <shop-settlement class="shop-settlement"></shop-settlement>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import shopCartList from "./ChildComps/shopCartList";
  import navbar from "../../components/common/navbar/navbar";
  import shopSettlement from "./ChildComps/shopSettlement";

  export default {
  name:"ShopCart",
  components: {
    shopCartList,
    navbar,
    shopSettlement
  },
  data(){
    return{
      bscoll:null,
      cartList:this.$store.getters.getCartList
    }
  },
    computed:{
    },
  mounted() {
    this.bscoll=new BScroll('.wrapper',{
      probeType:0,
      click:true
    })

  }

}

</script>

<style scoped>
  .wrapper{
    position: fixed;
    bottom: 89px;
    left: 0px;
    right: 0px;
    top: 44px;
    overflow: hidden;
  }
  .navbar{
    background-color: var(--color-tint);
    color: white;
  }
  .shop-settlement{
    position: fixed;
    bottom: 49px;
    left: 0px;
    right: 0px;

  }

</style>