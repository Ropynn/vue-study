<template>
     <header>
        <mt-header fixed title="小买卖">
          <mt-button v-if="$route.path != '/index'" v-on:click="$router.go(-1)" 
          icon="back" slot="left"></mt-button>
        </mt-header>
        <i></i>
    </header>
</template>


<style scoped>
i {
  display: block;
  height: 40px;
}
</style>
