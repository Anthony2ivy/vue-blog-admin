// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import my from '@/assets/css/my.css';
import blogService from './services/blogService'

Vue.use(iView);

// The routing configuration

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  data: function() {
    return {
      isLogin: false,
    };
  },
  template: '<App/>',
  created: function(){
    let self=this;
    blogService.checkLogin().then(() =>{
      self.isLogin=true;
    }).catch(error =>{
      this.$router.push('login');
    });
  },
  mounted: function() {
  },
  watch:{
    isLogin(val){
      if(val&&this.$route.name=='login'){
        this.$router.push('home');
      }
      if(!val&&this.$route.name!='login'){
        this.$router.push('login');
      }
    },
    $route(to,from){
      if(to.name=='login'&&this.isLogin){
        this.$router.push('home');
      }
      if(to.name!='login'&&!this.isLogin){
        this.$router.push('login');
      }
    }
  },
  
  render: h => h(App),
});
