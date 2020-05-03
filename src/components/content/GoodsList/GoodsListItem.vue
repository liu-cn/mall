<template>
    <div class="goods-list-item" @click="goodsClick">
        <a>
            <img :src="GoodsItem.show.img" @load="loadImage">   <!--监听图片加载事件，加载完成就调用-->
        </a>
        <div class="goodsInfo">
            <p class="title">{{GoodsItem.title}}</p>
            <span class="price">{{GoodsItem.price}}</span>

            <div class="collect-icon"></div>
            <span class="collect-num">{{GoodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      GoodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      loadImage(){
        //发送一个事件总线，
        this.$bus.$emit('loadImage')
      },
      goodsClick(){
        console.log('goods click')
        this.$router.push('/detail/'+this.GoodsItem.iid)
      }
    }
  }
</script>

<style scoped>
    .goods-list-item img{
        width: 100%;
    }
    .goods-list-item{
        position: relative;
        margin-top: 5px;
    }
    .title{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 5px;
    }

    .price{
        color: var(--color-tint);
        margin: 0px 10px 0px 10px;
    }
    .collect-icon{
        width: 14px;
        height: 14px;
        margin-right: 3px;
        display: inline-block;
        background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    }

</style>