<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :class="{active:index===NowIndex}" @click="tabClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        NowIndex:0
      }
    },
    methods:{
      tabClick(index){
        this.NowIndex=index
        this.$emit('TabControlClick',index)
      }
    }
  }
</script>

<style scoped>
    .tab-control{
        background-color: white;
        text-align: center;
        display: flex;
    }
    .tab-control div{
        flex: 1;
        padding: 10px 0px 10px 0px;
    }
    .active{
        color: var(--color-tint);
        border-bottom: 2px solid var(--color-tint);
    }

</style>