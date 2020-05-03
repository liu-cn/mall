<template>
    <div class="tabbar">
      <!-- 留一个插槽-->
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:"Tabbar"
}
</script>

<style>
.tabbar{
  display: flex;
  justify-content:space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
}

</style>