<template>
  <!-- 绑定单击事件监听并跳转路由， -->
  <div class="tabbar-item" @click="itemClick">
    <!-- 如果isActive为flase时显示不活跃的图标 -->
    <div class="icon" v-if="!isActive"><slot name="item-icon"></slot></div>
    <!-- 如果isActive为true时显示活跃的图标 -->
    <div class="icon" v-else><slot name="item-active-icon"></slot></div>
    <!-- 插槽外套一层div，改变div字体颜色字体自动继承父元素的样式 -->
    <div :class="{active:isActive}" class="text" :style="ActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:"TabbarItem",
  props: {
    // 组件传过来的目标路径
    path:String,
    // 路由处于活跃时字体的样式
    ActiveColor:{
      type:String,
      default:"red"
    }
  },
  // 计算属性
  computed: {
    // 判断此组件的目标路径是不是当前路径如果是及当前路径为活跃状态(判断当前哪个路径处于活跃状态)
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    // 处于活跃状态时字体的颜色
    ActiveStyle(){
      return this.isActive?{color:this.ActiveColor}:{}      //三元运算符
    }
  },
  // 跳转路由
  methods: {
    itemClick(){
      if(this.path !==this.$route.path){
        this.$router.replace(this.path)
      }
      
    }
  }
}
</script>

<style>
.tabbar-item{
  width: 49px;
  text-align: center;
}
.icon img{
  width: 24px;
  height: 24px;
  vertical-align:middle;
  margin: 3px 0px 3px 0px;
}

</style>