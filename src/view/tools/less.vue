<template lang="html">
  <div class="">
      <button type="button" @click='getData'>测试</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      str: "@width:500px;@height:300px;@font_size:12px;textarea {width:@width;height:@height;font-size:@font_size;}"
    };
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      var _this = this;
      var url = 'http://www.matools.com/less'
      var body = {
        less: this.str
      }
      this.$http.post(url, body,{headers: {'Content-type': 'application/x-www-form-urlencoded'}}).then(function (response) {
            console.log(response);
      })
      // axios({
      //     method: 'post',
      //     url: url,
      //     headers: {
      //         'Content-type': 'application/x-www-form-urlencoded'
      //     },
      //     params: {
      //         less: _this.str
      //     }
      // }).then((response) => {
      //         console.log(response);
      //   }).catch((error) => {
      //       console.log(error);
      //   }
      // );
    }
  }
}
</script>

<style lang="css" scoped>
</style>
