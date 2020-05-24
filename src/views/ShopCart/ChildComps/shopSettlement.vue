<template>
    <div class="shop-settlement">
        <div class="all-select" @click="allSelectClick">
            <div class="point" :class="{allSelect:isAllSelect}">√</div>
            <span class="text">全选</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "shopSettlement",
    methods:{
      allSelectClick(){
        this.$store.commit("allSelectClick")
      }
    },
    computed:{
      isAllSelect(){
       return  this.$store.getters.getIsAllSelect
      }
    }
  }
</script>

<style scoped>
    .point{
        width: 15px;
        height: 15px;
        border: 1px solid var(--color-tint);
        border-radius: 50%;
        background-color: white;
        color: white;
        margin-left: 10px;
        margin-right: 5px;
    }

    .shop-settlement{
        height: 40px;
        display: flex;
        align-items: center;
    }
    .all-select{
        display: flex;
        align-items: center;
    }
    .allSelect{
        background-color: var(--color-tint);
    }

</style>