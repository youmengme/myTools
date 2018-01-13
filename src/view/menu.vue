<template lang="html">
  <div class="content">
    <div class="small_box">
      <div class="tools">
        <span class="close fa fa-times-circle"></span>
        <span class="small fa fa-minus-circle"></span>
        <span class="big fa fa-ban"></span>
      </div>
      <div class="userPhoto">
        <img src="../assets/img/timg.jpg" alt="">
      </div>




      <div class="fix_box">
          <span class="fa fa-navicon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .content{
    width: 330px;
    height:100vh;
    background-color: #eee;
    .small_box{
      position: relative;
      width: 70px;
      height: 100vh;
      background-color: rgba(0,0,0,.7);
      .tools{
        padding-top:10px;
        span{
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 3px;
          &.close{
            color: #fc605b;
          }
          &.small{
            color: #fec041;
          }
          &.big{
            color: #32ca47;
          }
        }
      }
      .userPhoto{
        margin-top: 50px;
        text-align: center;
        height: 50px;
        box-sizing: border-box;
        img{
          width: 50px;
          height:50px;
          border-radius: 5px;
        }
      }
      .fix_box{
        position: absolute;
        left:50%;
        bottom: 20px;
        margin-left: -10px;
        font-size: 24px;
        color:#747473;
        font-weight: 200;

      }
    }
  }
</style>
