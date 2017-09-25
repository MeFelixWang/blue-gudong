<template>
  <div id="app">
    <NavBar></NavBar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import NavBar from '@/components/navbar/Navbar'
  export default {
    name: 'app',
    components: {
      NavBar
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import 'assets/css/reset.scss';
  @import "assets/css/swiper-3.4.2.min.css";
  @import "assets/css/iconfont.css";
</style>
