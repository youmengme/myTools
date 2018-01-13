<template lang="html">
  <div id="content">
  	<div class="page-ztb-box page-ztb-box3">
          <div class="container">
              <div class="ztb-desc">
                  <ul class="ztb-zy-list">
                    <li v-for="(item, index) in listData">
                        <a :href="item.url">
                        <div class="ztb-zy-i">
                            <div class="ztb-zy-i-m" :style="{backgroundColor:item.color}">
                                <i class="vh-i"></i>
                                <div class="cnt-area">
                                    <span class="ico"><img :src="item.img" :alt="item.title"></span>
                                    <span class="text">{{ item.title }}</span>
                                </div>
                            </div>
                            <div class="ztb-zy-i-d" :style="{backgroundColor:item.color}">
                                <i class="vh-i"></i>
                                <div class="cnt-area">{{ item.desc }}</div>
                            </div>
                        </div>
                        </a>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      listData:[
        {
          url:'javascript:void(0)',
          color:'#9d7cd4',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#50cd8e',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#50add9',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#e76a64',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#4176a3',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#ef6f3c',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#008BCA',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#87CEFF',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#d79452',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#965695',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#617d91',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#D9594C',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#e9bc45',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#50add9',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#d276f8',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        },
        {
          url:'javascript:void(0)',
          color:'#806cff',
          img:require('../assets/images/ios开发工程师_tQEO92m.png'),
          title:'iOS应用开发',
          desc:'6964位学员正在学习'
        }
      ]
    }
  },
  mounted(){
    this.is_login()
  },
  methods: {
    is_login(){ // 判断是否登录成功
      var is_login = this.$cookie.get('login')
      if(is_login != 'yes'){
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
