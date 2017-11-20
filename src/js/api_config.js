const domain = 'http://vue.studyit.io/api';
export default {

  //获取轮播图接口
  getLunbo: `${domain}/getlunbo`,

  //新闻相关接口
  getNL: `${domain}/getnewslist`,
  getND: `${domain}/getnew/`,  //该接口后面需要一个id
  
};