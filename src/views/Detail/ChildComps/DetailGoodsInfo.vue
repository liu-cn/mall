<template>
    <div class="detail-goods-info">
        <div v-show="goodsInfo.desc" class="desc">{{goodsInfo.desc}}</div>
        <div class="key">{{goodsInfo.key}}</div>
        <img @load="imgload" class="goods-image" v-for="(item,index) in goodsInfo.list" :src="item">
    </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgload(){
        this.$emit("imgload")
      }
    }
  }
</script>

<style scoped>
    .desc{
        margin: 10px 0px;
    }
    .key{
        font-size: 12px;
        margin-left: 10px;
    }
    .goods-image{
        width: 100%;
    }

</style>