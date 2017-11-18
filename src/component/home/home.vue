<template>
  <article>
    <!-- 轮播图 -->
      <mt-swipe :auto="4000">
            <mt-swipe-item v-for='item in lunbos' v-bind:key="item.url">
                <a :href="item.url">
                    <img :src="item.img">
                </a>
            </mt-swipe-item>
        </mt-swipe>
  </article>
</template>

<script>
export default {
  data() {
    return {
      lunbos: []
    };
  },
  methods: {
    //请求数据，成功后把数据储存到lunbos里面
    getLunbo() {
      this.axios
        .get("http://vue.studyit.io/api/getlunbo")
        .then(resp => (this.lunbos = resp.data.message));
    }
  },
  created() {
    this.getLunbo();
  }
};
</script>

<style lang='less' scoped>
@height:200px;
article {
  height: @height;
  img {
    width: 100%;
  }
}
</style>

