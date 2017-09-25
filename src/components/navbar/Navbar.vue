<template>
  <div id="navbar">
    <router-link tag="div" class="navbar-item" to="/circle">
      <i class="iconfont icon-circle"></i>
      <div>运动圈</div>
    </router-link>
    <router-link tag="div" class="navbar-item" to="/discovery">
      <i class="iconfont icon-discovery"></i>
      <div>发现</div>
    </router-link>
    <router-link tag="div" class="navbar-item" to="/sport">
      <i class="iconfont icon-sport"></i>
      <div>运动</div>
    </router-link>
    <router-link tag="div" class="navbar-item" to="/skill">
      <i class="iconfont icon-book"></i>
      <div>干货</div>
    </router-link>
    <router-link tag="div" class="navbar-item" to="/mine">
      <el-badge :value="2">
        <i class="iconfont icon-user"></i>
        <div>我的</div>
      </el-badge>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'Navbar',
    data () {
      return {}
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../assets/css/variable';

  #navbar {
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    @extend %position-fixed;
    @extend %bg-white;
    @extend %border-top;
    @extend %pd-lr;
    @extend %text-center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 55px;
    color: #9c9c9c;
    z-index: 10;
  }

  .navbar-item {
    font-size: 12px;
    &.router-link-active {
      @extend %color-blue;
    }
  }

  .iconfont {
    font-size: 20px;
  }

</style>
