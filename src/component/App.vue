<template>
  <main>
    <p>{{msg}}</p>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  data() {
    return {
      msg: "测试vue文件是否可用"
    };
  }
};
</script>

<style>
p {
  font-size: 30px;
  color: red;
}
</style>
