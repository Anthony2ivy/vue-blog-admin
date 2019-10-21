<template>
  <div>
    <Menu class="left-menu" :theme="mainTheme" :active-name="activeItem" v-if="this.$route.name !='login'" @on-select="selectMenu" >
      <div class="center-icon" style="padding-top: 10px">
        <div  class="my-double-circle-icon" style="margin-top: 10px;padding-top: 5px; background-image: url('static/imgs/icon.jpg'); width: 100px; height: 100px;"></div>
      </div>
      <div class="center-title">MY BLOG</div>
      <MenuItem name="home" to="home">
        <Icon type="md-home" />
        首页
      </MenuItem>
      <MenuItem name="newBlog" to="newBlog">
        <Icon type="md-send" />
        发布新博客
      </MenuItem>
      <MenuItem name="blogList" to="blogs">
        <Icon type="md-list" />
        博客管理
      </MenuItem>
      <MenuItem name="tag">
        <Icon type="md-pricetag" />
        标签管理
      </MenuItem>
      <MenuItem name="setting">
        <Icon type="md-settings" />
        设置
      </MenuItem>
      <MenuItem name="logout">
        <Icon type="md-log-out" />
        退出
      </MenuItem>
    </Menu>
    <router-view class="right-container"> </router-view>
  </div>
</template>


<script>
  import blogService from './services/blogService'
  export default {
    name: 'App',
    data: function () {
      console.log(this.$route);
      return {
        navItems: [],
        isTop: true,
        mainTheme: 'dark',
        activeItem: this.$route.name
      }
    },
    methods: {
      selectMenu(name){
        if(name=='logout'){
          blogService.logout().finally(()=>{
            this.$root.isLogin=false;
          });
        }
      }
    },
    mounted: function () {
      var self=this;
      window.onscroll = function () {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        if (scrollTop > 0) {
          if (self.isTop)
            self.isTop = false;
        } else {
          if (!self.isTop)
            self.isTop = true;
        }
      }
    }
  }
</script>

<style>
  body{
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
  }
  .left-menu{
    min-height: 100vh;
    position: fixed;
  }
  .center-title{
    font-weight: 500;
    color: white;
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    margin-bottom: 20px;
  }
  .right-container{
    padding-left: 250px;
    padding-top: 10px;
    padding-right: 10px;
    background-color: rgb(238, 238, 238);
    height: 100vh;
  }

</style>
