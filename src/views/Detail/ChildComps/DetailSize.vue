<template>
   <div class="goods-size-info">
       <div class="goods-size">
           <a :href="'#'+goodsSize.infoAnchor" :id="goodsSize.infoAnchor">{{goodsSize.ruleKey}}</a>
           <table class="tables">
               <tr class="table-item" v-for="(item,index) in goodsSize.tables">
                   <td class="table-item-text" v-for="(info,i) in item">
                       {{info}}
                   </td>
               </tr>
           </table>
       </div>
       <div class="goods-info">
           <a href="#">{{goodsSize.infoKey}}</a>
           <table class="goods-info-tables">
               <tr class="info-item" v-for="(item,index) in goodsSize.infoSet">
                   <td class="info-item-text" :class="{infoTitle:i==0,infoText:i==1}" v-for="(v,k,i) in item">{{v}}</td>
               </tr>
           </table>
       </div>
   </div>

</template>

<script>
  export default {
    name: "DetailSize",
    props:{
      goodsSize:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .tables{
        width: 100%;
    }
    .table-item{
        display: flex;
        font-size: 14px;
        text-align: center;
        border-bottom: 1px solid black;
        margin-top: 10px;
    }
    .table-item-text{
        flex: 1;
    }
    .infoTitle{
        width: 30%;
        text-align: center;
    }
    .goods-info{
        margin-top: 10px;
    }
    .goods-info-tables{
        font-size: 14px;
    }
    .info-item td{
        padding: 5px 0px;
    }
    .infoText{
        color: var(--color-tint);
    }


</style>