<template>
    <div class="recommend">
        <div v-for="item in recommends" :key="item.index" class="recommendItem">
            <a :href="item.link"><img :src="item.image"></a>
            <span class="title">{{item.title}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Recommend",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
    .recommend{
        text-align: center;
        font-size: 14px;
        display: flex;
        box-shadow: 1px 1px 10px  rgba(0,0,0,0.5);
        margin: 10px 0px 10px 0px;
    }
    .recommendItem{
        /*width: 25%;*/
        text-align: center;
        flex: 1;
        margin: 10px 0px 10px 0px;
    }
    .recommendItem img{
        width: 85%;
        flex: 1;

    }


</style>