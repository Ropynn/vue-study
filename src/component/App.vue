<template>
  <main>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </main>
</template>

<script>
import HomeComponent from "./home/home.vue";

export default {
  components: {
    "app-home": HomeComponent
  }
};
</script>

<style scoped>

</style>
