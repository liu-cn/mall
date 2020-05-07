<template>
    <div class="user-rate">
        <div class="title">
            <span class="title-text">用户评价</span>
            <span class="more">更多</span>
        </div>
        <div class="user-info">
            <img :src="UserRate.avatar">
            <span>{{UserRate.name}}</span>
        </div>
        <div class="content">
            {{UserRate.content}}
        </div>
        <div class="style">
            <span class="date">{{UserRate.date}}</span>
            <span class="style-text">{{UserRate.style}}</span>
        </div>
        <div v-show="UserRate" class="imgs">
            <img v-for="(item,index) in UserRate.images" :src="item" alt="">
        </div>
        <p class="no-rate" v-show="UserRate.isNull">暂无评价</p>
    </div>
</template>

<script>
  export default {
    name: "DetailUserRate",
    props:{
      UserRate:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .title{
        display: flex;
        justify-content: space-between;
    }
    .title .title-text{
        padding-left: 10px;
    }
    .title .more{
        padding-right: 10px;
    }
    .user-info{
        margin-top: 10px;
        display: flex;
        align-items: center;
    }
    .user-info img{
        width: 35px;
        margin:0px 10px;
    }
    .content{
        font-size: 12px;
        padding: 10px 10px;
    }
    .imgs{
        display: flex;
        flex-wrap: wrap;
        margin: 0px 10px;
        justify-content:left;
    }
    .imgs img{
        width: 32%;
        height: 125px;
        margin: 2px;
    }
    .no-rate{
        text-align: center;
    }
    .style{
        font-size: 12px;
    }
    .style .date{
        margin: 0px 10px;
    }


</style>