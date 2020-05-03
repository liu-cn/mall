<template>
    <swiper>
        <SwiperItem v-for="item in banners" :key="item.index">
            <a :href="item.link"><img :src="item.image"></a>
        </SwiperItem>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "HomeSwiper",
    components:{
      SwiperItem,
      Swiper
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>