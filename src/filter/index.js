import dateFilter from './date.js';
export default {
  install (Vue){
    Vue.filter("date", dateFilter);
  }
};
