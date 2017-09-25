<template>
  <div>
    <div v-for="data in dataOrigin" :key="data.id" class="card">
      <div class="card-title">
        <h3>{{data.title}}</h3>
        <span>更多<i class="iconfont icon-right"></i></span>
      </div>
      <div class="card-main" v-for="dataDetail in data.content" :key="dataDetail.tag">
        <img :src="dataDetail.src" alt="">
        <div class="card-content">
          <div class="card-inner">
            <div class="card-desc">{{dataDetail.desc}}</div>
            <el-tag type="primary">{{dataDetail.tag}}</el-tag>
          </div>
          <div class="card-share">
            <small><i class="iconfont icon-user">&nbsp;</i>{{dataDetail.name}}</small>
            <small><i class="iconfont icon-eye">&nbsp;</i>{{dataDetail.view}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'Card1',
    props: ['dataOrigin']
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../assets/css/variable';

  .card {
    @extend %bg-white;
    @extend %pd-lr;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .card-title {
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    @extend %pd-ud;
  }


  .card-main {
    @extend %display-flex;
    @extend %flex-start;
    @extend %align-start;
    @extend %pd-ud;
    height: 120px;
    img {
      height: 100%;
      width: auto;
      margin-right: 15px;
    }
  }

  .card-content {
    @extend %display-flex;
    @extend %space-between;
    @extend %flex-column;
    height: 100%;
  }

  .card-inner {
    .el-tag {
      margin-top: 5px;
    }
  }

  .card-desc {
    @extend %display-flex;
    @extend %space-between;
    @extend %flex-column;
    @extend %overflow-hidden;
    @extend %text-overflow;
    -webkit-line-clamp: 2;
  }

  .card-share {
    font-size: 8px;
    .iconfont {
      color: #8a8a8a;
      font-size: 8px;
    }
    small {
      margin-right: 25px;
    }
  }
</style>
