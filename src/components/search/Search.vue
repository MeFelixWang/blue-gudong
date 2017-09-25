<template>
  <div id="search">
    <form class="search-box" action="">
      <button class="iconfont icon-search search-btn"></button>
      <label for=""><input class="search-area" type="text" placeholder="搜索用户 运动图 文章 动态 商品"></label>
    </form>
    <i class="iconfont icon-scanner search-scanner"></i>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Search'
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../assets/css/variable';

  #search {
    @extend %bg-white;
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    @extend %pd-lr;
    @extend %position-fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    z-index: 10;
  }

  .search-box {
    @extend %display-flex;
    @extend %flex-start;
    @extend %align-center;
    background-color: #eaeaea;
    border-radius: 4px;
    padding: 5px;
    width: 90%;
  }

  .search-box label {
    width: 93%;
  }

  .search-btn {
    @extend %color-black;
    background: transparent;
    font-size: 16px;
    height: 20px;
    width: 20px;
  }

  .search-area {
    background: transparent;
    width: 100%;
    padding: 2px 0 2px 5px;
  }

  .search-scanner {
    @extend %color-black;
    font-size: 26px;
  }
</style>
