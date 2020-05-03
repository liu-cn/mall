<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data(){
      return{
        Scroll:null,
      }
    },
    props:{
      ScrollType:{
        type:Number,
        default(){
          return 0
        }
      },
      pullUpLoad:{
        type:Boolean,
        default(){
          return false
        }
      }

    },
    mounted() {
      //创建滚动条实例
      this.Scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        scrollY: true,
        probeType:this.ScrollType,
        pullUpLoad:this.pullUpLoad
      })
      // 监听滚动条滚动
     if (this.ScrollType==2 || this.ScrollType==3){
       this.Scroll.on('scroll',(position)=>{
         this.$emit('ScrollMove',position)
       })
     }

      //监听滚动条滚到底部，执行上拉加载更多。
      this.Scroll.on('pullingUp',()=>{
        console.log('上拉加载更多')
        this.$emit('LoadMore')
      })
    },

    //回到顶部
    methods:{
      //回到顶部方法
      ScrollTo(x,y,time=300){
        this.Scroll.scrollTo(x,y,time)
      },
      //刷新滚动区域
      refresh(){
        this.Scroll && this.Scroll.refresh()
      },
      //上拉加载更多，完成
      finish(){
        this.Scroll && this.Scroll.finishPullUp()
      },
      //获取scroll的y值
      getScrollY(){
       return this.Scroll ? this.Scroll.y :0
      }
    }
  }
</script>

<style scoped>

</style>