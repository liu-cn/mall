<template>
  <div class="profile">
    <h1>欢迎注册</h1>
    <div class="loginAndReg">
    <p class="p1"><el-button class="register" type="primary">注册</el-button></p>
    <p class="p2"><el-button class="login" type="success">登录</el-button></p>
    </div>
  </div>
</template>

<script>
export default {
  name:"Profile"
}
</script>

<style>
.p1{
  display: flex;
  /* align-content: center; */
  justify-content: center;
}
.p2{
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

.register{
  width: 100%;
  margin: 20px 0px;
}
.login{
  width: 100%;
}
.loginAndReg{
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 30%;
}
h1{
  text-align: center;
}

</style>