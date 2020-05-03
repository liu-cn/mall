<template>
    <div id="goods-list">
        <goods-list-item v-for="item in goods" :GoodsItem="item"></goods-list-item>
    </div>
</template>

<script>

  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    components: {GoodsListItem},
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .goods-list-item{
        width: 48%;
    }
    #goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>