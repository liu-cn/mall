<template>
  <div class="shopCart">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <p v-if="cartList.length===0">购物车为空，去添加一个吧！</p>
        <shop-cart-list v-else v-for="i in cartList" :info="i"></shop-cart-list>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import shopCartList from "./ChildComps/shopCartList";

  export default {
  name:"ShopCart",
  components: {
    shopCartList,
  },
  data(){
    return{
      bscoll:null,
    }
  },
    computed:{
      cartList(){
        return this.$store.getters.getCartList
      }
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
    bottom: 49px;
    left: 0px;
    right: 0px;
    top: 44px;
    overflow: hidden;
  }

</style>