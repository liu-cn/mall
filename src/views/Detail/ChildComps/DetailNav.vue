<template>
    <div  id="detail-nav">
        <navbar>
            <div class="back-img" @click="backClick" slot="left">
                <img src="~assets/img/common/back.svg">
            </div>
            <div class="title"  slot="center">
                <div class="title-item"
                v-for="(item,index) in titles"
                @click="titleClick(index)"
                :class="{active:index===currentIndex}"
                >{{item}}</div>
            </div>
        </navbar>
    </div>
</template>

<script>

  import navbar from "components/common/navbar/navbar"
  export default {
    name: "DetailNav",
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components: {
      navbar
    },
    methods:{
      titleClick(index){
        this.currentIndex=index
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
    .title{
        display: flex;
        font-size: 13px;
    }
    .title-item{
        flex: 1;
    }
    .active{
        color: var(--color-tint);
    }
    .back-img img{
        margin-top: 11px;
    }



</style>