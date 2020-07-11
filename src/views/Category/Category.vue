<template>
  <div class="f">
    <h1>待开发...</h1>
    <div class="content">
        <ul>
          <li v-for="(v,i) in categoryList">{{v.title}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import {getCategoryData,category} from "../../network/category"
export default {
  name:"Category",
  components:{
    Scroll,
  },
  data(){
    return{
      categoryList:{}
    }
  },
  created(){
    this.GetCategoryData()
  },
  methods:{
    GetCategoryData(){
      
      getCategoryData().then(res => {
      console.log(res);
      this.categoryList=new category(res)
      console.log(this.categoryList);
    })
    }

  
  }
  
}

</script>

<style scoped>
  .content{
    position: fixed;
    top: 49px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 60px;
    background-color: #bbffaa;
    overflow: hidden;
    overflow-y: scroll;
  }
</style>