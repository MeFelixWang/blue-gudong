<template>
  <div id="circle">
    <Search></Search>
    <el-tabs>
      <el-tab-pane label="热门">
        <CircleHot></CircleHot>
      </el-tab-pane>
      <el-tab-pane label="关注">
        <CircleFocus></CircleFocus>
      </el-tab-pane>
      <el-tab-pane label="直播">
        <CircleLive></CircleLive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  import Search from '@/components/search/Search'
  import CircleHot from '@/components/circle/CircleHot'
  import CircleFocus from '@/components/circle/CircleFocus'
  import CircleLive from '@/components/circle/CircleLive'
  export default{
    name: 'Circle',
    components: {
      Search,
      CircleFocus,
      CircleHot,
      CircleLive
    }
  }
</script>
<style lang="scss" type="text/scss">
  @import "../../assets/css/variable";

  #circle {
    .el-tabs {
      margin-top: 55px;
    }
    .el-tabs__header {
      @extend %bg-white;
      @extend %pd-lr;
      @extend %position-fixed;
      top:55px;
      width:100%;
      margin: 0;
      z-index: 10;
    }
    .el-tabs__content {
      margin-top:97px;
      margin-bottom: 55px;
    }
  }
</style>
