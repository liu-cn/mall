<template>
  <div id="app">
    <!--导航按钮-->
    <main-tabbar/>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

// 导入下方的导航按钮组件
import MainTabbar from 'components/content/MainTabbar/MainTabbar'

export default {
  name:"App",
  components: {
    MainTabbar,
  },
}
</script>


<style>
  @import "assets/css/base.css";


</style>
