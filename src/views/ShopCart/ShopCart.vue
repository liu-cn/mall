<template>
  <div class="shopCart">
    <div class="wrapper" ref="wrapper">
      <div class="content">
    <h1>开发中...</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

export default {
  name:"ShopCart",
  data(){
    return{
      bscoll:null
    }
  },
  mounted() {
    this.bscoll=new BScroll('.wrapper',{
      probeType:3
    })

    this.bscoll.on('scroll',(position)=>{
      console.log(position)
    })

  }

}

</script>

<style scoped>
  .wrapper{
    height: 150px;
    overflow: hidden;
  }

</style>