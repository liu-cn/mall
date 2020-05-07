<template>
  <div>
    <h1>待开发...</h1>
    <div class="content">

    </div>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
export default {
  name:"Category",
  components:{
    Scroll,
  }
}
</script>

<style scoped>
  .content{
    height: 150px;
    overflow: hidden;
    overflow-y: scroll;
  }
</style>