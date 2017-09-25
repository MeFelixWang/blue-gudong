<template>
  <div id="skill">
    <Search></Search>
    <el-tabs>
      <el-tab-pane label="推荐">
        <SkillRecommendation></SkillRecommendation>
      </el-tab-pane>
      <el-tab-pane label="跑步">
        <SkillRun></SkillRun>
      </el-tab-pane>
      <el-tab-pane label="骑行">
        <SkillRide></SkillRide>
      </el-tab-pane>
      <el-tab-pane label="健身">
        <SkillBuild></SkillBuild>
      </el-tab-pane>
      <el-tab-pane label="个性">
        <SkillCustom></SkillCustom>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  import Search from '@/components/search/Search'
  import SkillRecommendation from '@/components/skill/SkillRecommendation'
  import SkillRun from '@/components/skill/SkillRun'
  import SkillRide from '@/components/skill/SkillRide'
  import SkillBuild from '@/components/skill/SkillBuild'
  import SkillCustom from '@/components/skill/SkillCustom'
  export default{
    name: 'Skill',
    components: {
      Search,
      SkillRecommendation,
      SkillRun,
      SkillRide,
      SkillBuild,
      SkillCustom
    }
  }
</script>
<style lang="scss" type="text/scss">
  @import "../../assets/css/variable";

  #skill {
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
