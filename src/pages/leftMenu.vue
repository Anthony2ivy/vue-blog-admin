<template>
  <div>
    <Menu class="left-menu" :theme="mainTheme" :active-name="activeItem">
      <div class="center-icon" style="padding-top: 10px">
        <div class="my-double-circle-icon"
             style="margin-top: 10px;padding-top: 5px; background-image: url('static/imgs/icon.jpg'); width: 100px; height: 100px;"></div>
      </div>
      <div class="center-title">MY BLOG</div>
      <MenuItem name="home" to="home">
        <Icon type="md-home"/>
        首页
      </MenuItem>
      <MenuItem name="newBlog" to="newBlog">
        <Icon type="md-send"/>
        发布新博客
      </MenuItem>
      <MenuItem name="blogList" to="blogs">
        <Icon type="md-list"/>
        博客管理
      </MenuItem>
      <MenuItem name="tag">
        <Icon type="md-pricetag"/>
        标签管理
      </MenuItem>
      <MenuItem name="setting">
        <Icon type="md-settings"/>
        设置
      </MenuItem>
    </Menu>
    <router-view class="right-container"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'leftMenu',
  };
</script>

<style scoped>

</style>
