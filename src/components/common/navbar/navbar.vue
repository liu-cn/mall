<template>
    <div class="HomeNavbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .HomeNavbar{
        display: flex;
        line-height: 44px;
        height: 44px;
        text-align: center;
    }
    .left, .right{
        width: 40px;
    }
    .center{
        flex: 1;
    }

</style>