<template>
     <tabbar id="tabbar-list">
        <tabbar-item path="/home" ActiveColor="#FF5777">
        <img slot="item-icon" src="../../../assets/img/home/home.svg">
        <img slot="item-active-icon" src="../../../assets/img/home/home_active.svg">
        <div slot="item-text">首页</div>
        </tabbar-item>
        <tabbar-item path="/category" ActiveColor="#FF5777">
        <img slot="item-icon" src="../../../assets/img/category/category.svg">
        <img slot="item-active-icon" src="../../../assets/img/category/category_active.svg">
        <div slot="item-text">分类</div>
        </tabbar-item>
        <tabbar-item path="/shopcart" ActiveColor="#FF5777">
        <img slot="item-icon" src="../../../assets/img/shopcart/shopcart.svg">
        <img slot="item-active-icon" src="../../../assets/img/shopcart/shopcart_active.svg">
        <div slot="item-text">购物车</div>
        </tabbar-item>
        <tabbar-item path="/profile" ActiveColor="#FF5777">
        <img slot="item-icon" src="../../../assets/img/profile/profile.svg">
        <img slot="item-active-icon" src="../../../assets/img/profile/profile_active.svg">
        <div slot="item-text">我的</div>
        </tabbar-item>
      </tabbar>
</template>

<script>
import Tabbar from '../../common/tabbar/Tabbar.vue'
import TabbarItem from '../../common/tabbar/TabbaItem.vue'

export default {
  name:"MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
   #tabbar-list{
      z-index: 9;
   }


</style>