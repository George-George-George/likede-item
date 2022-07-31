<template>

    <div class="login-container">
      <el-form ref="form" :model="form" label-width="40px" class="login-box">
        <img src="http://likede2-admin.itheima.net/img/logo.595745bd.png" alt="">
      <el-form-item style="width:100%"  >
          <el-input  v-model="form.name">
          </el-input>
      </el-form-item>
         <el-form-item style="width:100%"  >
          <el-input v-model="form.name"></el-input>
      </el-form-item>   <el-form-item style="width:100%" >
          <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-button class="btn" style="width:90%" type="primary">主要按钮</el-button>

      </el-form>
  </div>

</template>

<script>


export default {
  name: 'Login',
  data() {
    return {
      form: {
      name:''
  }
    }
  
  },

  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
.login-container{
      position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url('http://likede2-admin.itheima.net/img/background.be4fae7d.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding:35px;
    .login-box{
      position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 50px 0px 0px;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    
    }
    :deep(el-form-item){
      margin-top:500px
    }

    img{
          position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    }
    .el-form-item{
     
      .el-input{
        height: 50px !important;
        line-height: 60px !important
      }
      input{
      height:60px
      }
    }
    .btn{
      position: relative;
      left:10%;
      height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
    }

}


</style>
