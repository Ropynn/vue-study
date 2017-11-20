<template>
  <article>
    <div class="mui-card">
      <div class="mui-card-header">
          <h4>{{ newsDetail.title }}</h4>
          <p class="mui-ellipsis">
            <span>创建时间: {{ newsDetail.add_time | date }}</span>
            <span>点击数: {{ newsDetail.click }}</span>
          </p>
      </div>
      <!-- content内容中含有html标签, 要让它正常展示, 必须使用v-html -->
      <div class="mui-card-footer" v-html="newsDetail.content"></div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      newsDetail: []
    };
  },

  methods: {
    getNewsDetail() {
      this.axios
        .get(this.api.getND + this.$route.params.id)
        .then(resp => (this.newsDetail = resp.data.message[0]));
    }
  },

  created() {
    this.getNewsDetail();
  }
};
</script>

<style scoped>
.mui-card-header,
.mui-card-footer {
  display: block;
}
</style>