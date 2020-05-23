<template>
    <div class="cart-list-item">
        <div class="shop-info">
            <div class="btn" @click="btnClick">
                <div class="point" :class="{isSelect:this.isSelect}">√</div>
            </div>
            <div class="shop-img"><img :src="info.img" alt=""></div>
            <div  class="title"><div>{{info.title}}</div></div>
        </div>
        <div class="price-num">
            <div class="null"></div>
            <div class="price">￥{{info.realPrice}}</div>
            <div class="change-num">
                <button class="add-num">+</button>
                <div class="num"><span>{{info.num}}</span></div>
                <button class="reduce">-</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "shopCartList",
    data(){
      return{
        isSelect:this.info.isSelect
      }
    },
    props:{
      info:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    activated() {
      console.log(this.isSelect);
    },
    methods:{
      btnClick(){
        // console.log("iid",this.info.iid,)
        this.$store.commit("changeSelect",this.info.iid)
        console.log(this.isSelect)
        // this.isSelect=!this.isSelect
      }
    }
  }

</script>

<style scoped>
    .cart-list-item{
        border: 1px solid;
        border-radius: 10px;
        margin: 1px;
    }
    .price-num{
        display: flex;
        justify-content: space-between;
    }
    .shop-info{
        display: flex;
        height: 80px;
    }
    .shop-img img{

        width: 50px;
    }
    .shop-img{
        margin: 0px 5px;
    }
    .title{
        display: inline-block;
        font-size: 14px;
    }
    .btn{
        display: flex;
        align-items: center;

        margin: 0px 5px;
    }
    .btn,.title,.shop-img,.num{
        display: flex;
        align-items: center;
    }
    .btn .point{

        width: 15px;
        height: 15px;
        border-radius: 20px;
        border: 1px solid var(--color-tint);
        font-size: 12px;
        text-align: center;
        line-height: 15px;
        color: white;
    }
    .change-num{
        display: flex;
        padding-right: 10px;
    }
    .change-num button{
        border-radius: 2px;
        border: 1px solid #C0C7C5;
        width: 20px;
        height: 20px;
        background-color: white;
    }
    .change-num .num{
        width: 30px;
        height: 20px;
        border: 1px solid  #C0C7C5;
        /*text-align: center;*/
        display: flex;
        justify-content: center;
    }
    .price{
        color: var(--color-tint);
    }
    .isSelect{
        background-color: var(--color-tint);
    }


</style>