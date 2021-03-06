// from后面的路径, 如果含有./ ../那么就相对于当前文件找文件
// 如果没有, 那么就会去node_modules里面找对应的包
//1.1导入第三方包
import Vue from "Vue";
import MintUi from "mint-ui";
import "mint-ui/lib/style.css";
import Common from "../component/common";  //自动找到index.js引入
import "mui/dist/css/mui.css";
import "mui/examples/hello-mui/css/icons-extra.css";
import axios from 'axios';
import VueRouter from "vue-router";
import dateFilter from '../filter';

//1.2 启用vue插件
Vue.use(VueRouter);
Vue.use(MintUi);
Vue.use(Common);
Vue.use(dateFilter);

Vue.prototype.axios = axios; // 把axios库放置到原型, 将来其他组件直接可以拿到axios对象
Vue.prototype.api = apiConfig;

// 2.1 导入根组件
import AppComponent from "../component/App.vue";

//2.2 导入配置
import routerConfig from '../router';   // 自动找到index.js引入
import apiConfig from './api_config.js';

new Vue({
  el: "#app",
  render(createNode) {
    return createNode(AppComponent);
  },
  router: new VueRouter(routerConfig)
});
