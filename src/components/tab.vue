<template>
  <div class="tab">
    <router-link to="/A" class="tab-nav">我是A导航</router-link>
    <router-link to="/B" class="tab-nav">我是B导航</router-link>
    <router-link to="/C" class="tab-nav">我是C导航</router-link>
    <router-link to="/D" class="tab-nav">我是D导航</router-link>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {

  }
</script>
<style scoped>
  .tab{ width: 100%; display: flex; height: 44px; background-color: red;}
  .tab-nav{flex: 1; text-align: center; line-height: 44px; color: #fff; display: block;}
  .router-link-active.tab-nav{ color: yellow;}
</style>
