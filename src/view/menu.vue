<template lang="html">
  <div class="content">
    <div class="small_box">
      <div class="tools_box">
        <span class="close fa fa-times-circle"></span>
        <span class="small fa fa-minus-circle"></span>
        <span class="big fa fa-ban"></span>
      </div>
      <div class="userPhoto">
        <img src="../assets/img/timg.jpg" alt="">
      </div>
      <div class="content_box">
          <div class="">
            <span class="fa fa-code" :class=' activeClass == 1 ? "active" : "" '></span>
          </div>
          <div class="">
            <span class="fa fa-wrench" :class=' activeClass == 2 ? "active" : "" '></span>
          </div>
          <div class="">
            <span class="fa fa-plus-square" :class=' activeClass == 3 ? "active" : "" '></span>
          </div>
      </div>
      <div class="fix_box">
          <span class="fa fa-navicon"></span>
      </div>
    </div>
    <div class="big_box">
      <div class="search_box">
        <input type="text" v-model='search_value'>
        <button class="button">+</button>
      </div>
      <div class="data_box">
        <ul>
          <li v-for='(item, index) in codeList'>
            <p>{{ item.title }}  </p><span>{{item.time}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        activeClass:1, // 当前选中项
        search_value: "", //搜索关键词
        codeList:[
          {
            title:'ElementUI走马灯效果的实现',
            time:'2018/01/13',
            content:'sakjhaskdjhaksdjhaksjdhakjsdhakjsdhaksjh'
          },
          {
            title:'ElementUI的Input效果',
            time:'2018/01/13',
            content:'sakjhaskdjhaksdjhaksjdhakjsdhakjsdhaksjh'
          },
          {
            title:'Nuxt.JS 引用ElementUI',
            time:'2018/01/13',
            content:'sakjhaskdjhaksdjhaksjdhakjsdhakjsdhaksjh'
          },
          {
            title:'CSS3 实现文字抖动效果',
            time:'2018/01/13',
            content:'sakjhaskdjhaksdjhaksjdhakjsdhakjsdhaksjh'
          },
          {
            title:'Git常用命令集合',
            time:'2018/01/13',
            content:'sakjhaskdjhaksdjhaksjdhakjsdhakjsdhaksjh'
          },
          {
            title:'Express框架事件教程详解',
            time:'2018/01/13',
            content:'sakjhaskdjhaksdjhaksjdhakjsdhakjsdhaksjh'
          }
        ]
    }
  },
  mounted(){
    this.getCodeList('-- 获取代码列表 --');
  },
  methods: {
    getCodeList(text){
      console.log(text)
    }
  }
}
</script>

<style lang="less" scoped>
  *{
    outline: 0;
    box-sizing: border-box;
  }
  .content{
    width: 330px;
    height:100vh;
    background-color: #f6f5f5;
    .small_box{
      float: left;
      position: relative;
      width: 70px;
      height: 100vh;
      background-color: rgba(0,0,0,.7);
      .tools_box{
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
      .content_box{
        margin-top: 50px;
        div{
          margin-top: 30px;
          span{
            display: inline-block;
            color:#757776;
            font-size: 30px;
            transition: all .2s linear;
            &:hover,&.active{
              color: #1fb922;
            }
          }
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
    .big_box{
      float: left;
      height: 100vh;
      overflow-y: scroll;
      .search_box{
        width: 260px;
        height: 50px;
        padding:12px;
        background-color: #f7f6f6;
        border-bottom:1px solid #c8c8c8;
        input{
          width: 200px;
          height:20px;
          border-radius:3px;
          border:1px solid #c8c8c8;
        }
        button{
          width: 27px;
          height: 22px;
          line-height: 17px;
          font-size: 16px;
          border-radius:3px;
          color:#888;
          border:1px solid #c8c8c8;
          position: relative;
          top:1px;
        }
      }
      .data_box{
        ul{
          li{
            position: relative;
            height: 70px;
            border-bottom: 1px solid #e0e0e0;
            p{
              text-align: left;
              padding-left:15px;
              padding-top:25px;
            }
            span{
              position: absolute;
              top: 10px;
              right: 10px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>
