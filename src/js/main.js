//要把组件渲染到页面中，我们就必须要导入vue这个库,然后才可以new他
//es6语法导入的vue与我们在浏览器中使用的vue有点小区别，失去了浏览器模板编译功能
//失去该功能的原因是，你使用es6语法，vue知道你一定用了构建工具，那么使用狗就按工具
//你应该会使用vue-loader，使用了vue-loader他会在本地打包时把模板编译好，
//然后在浏览器中直接使用编译好的模板，相比咱们以往的方式，性能有所提升

//导入第三方包
import Vue from "Vue";
import VueRouter from "vue-router";
import MintUi from "mint-ui";

//手动启用vue插件，在以前VueRouter插件会自动调用use，
//但是我们使用了模块化之后，window下没有vue全局变量，插件就无法自调use了
Vue.use(VueRouter);

//导入我们编写的组件
import App from "../component/App.vue";
import Home from "../component/home/home.vue";
import News from "../component/news/news.vue";
import Photo from "../component/photo/photo.vue";

new Vue({
  el: "#app",
  //以前这里写的是 template与 methods等等东西，现在这些代码都统一放在了App.vue里面来写
  //App.vue就是咱们项目中的根文件
  render: function(c) {
    return c(App);
  },
  //路由配置
  router: new VueRouter({
    routes: [
      { path: "/", component: Home },
      { path: "/news", component: News },
      { path: "/photo", component: Photo }
    ]
  })
});
