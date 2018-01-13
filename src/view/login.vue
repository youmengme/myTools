<template lang="html">
  <div class="content">
    <div class="content_box">
      <div class="input_box">
        <span>输入口令：</span>
        <input type="text" v-model="password" @keyup.13='login'>
      </div>
      <div class="button_box">
        <button class="button" @click='login'>点击开始</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      password:''
    };
  },
  methods: {
    login(){
        if(this.password == 'admin123'){
            this.$message({
              type:'success',
              message:'登录成功'
            })
            this.$cookie.set('login','yes',1)
            this.$router.push('/main')
        }else{
          this.$message({
            type:'warning',
            message:'登录失败'
          })
        }
    }
  }
}
</script>

<style lang="less" scoped>
  @base: #005dd0;
  @border: 1px solid #fff;
  @media screen and (min-width:300px) and (max-width:500px) {
    /* CSS 代码 */
  }

  .content{
    // position: absolute;
    width: 100%;
    height:100vh;
    background:url('../assets/img/background.jpg') no-repeat;
    background-size: 100% 100%;
    .content_box{
      position: absolute;
      left:50%;
      top:50%;
      width: 500px;
      height:50px;
      margin-left: -250px;
      margin-top: -25px;
      div{
        margin-bottom: 30px;
        span{
          position: absolute;
          line-height: 32px;
          color:#fff;
          padding-left:10px;
          transition: all .2s linear;
        }
        &:hover{
          span{
            color:@base;
          }
          input{
            border-color: @base;
            color:@base;
          }
        }
      }
      input{
        width: 400px;
        height: 30px;
        border-radius: 20px;
        outline: 0;
        padding-left: 90px;
        background-color: transparent;
        border:1px solid #fff;
        color:#fff;
        transition: all .2s linear;
        font-size: 14px;
        box-sizing: border-box;

      }
      .button{
        width: 200px;
        height: 30px;
        color:#fff;
        outline:0;
        border-radius:20px;
        border:1px solid #fff;
        background-color: transparent;
        transition: all .2s linear;
        &:hover{
          color:@base;
          border-color: @base;
        }
      }
    }
  }
</style>
