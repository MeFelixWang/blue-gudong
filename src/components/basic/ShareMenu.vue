<template>
  <div class="share" v-show="show">
    <div class="share-menu">
      <div class="share-menu-main">
        <div class="share-menu-item">
          <i class="iconfont icon-wechat"></i>
          <small>微信好友</small>
        </div>
        <div class="share-menu-item">
          <i class="iconfont icon-pengyouquan"></i>
          <small>朋友圈</small>
        </div>
        <div class="share-menu-item">
          <i class="iconfont icon-weibo"></i>
          <small>新浪微博</small>
        </div>
        <div class="share-menu-item">
          <i class="iconfont icon-qq"></i>
          <small>QQ</small>
        </div>
        <div class="share-menu-item">
          <i class="iconfont icon-qzone"></i>
          <small>QQ空间</small>
        </div>
      </div>
      <div class="share-menu-cancel" @click="changeStatus()">取消</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'ShareMenu',
    props: {
      show: false
    },
    methods: {
      changeStatus () {
        this.show = false
        this.$emit('canceled')
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import "../../assets/css/variable";

  .share {
    @extend %position-fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease-in-out;
    z-index: 20;
  }

  .share-menu {
    @extend %position-absolute;
    bottom: 0;
    width: 100%;
  }

  .share-menu-main {
    @extend %bg-white;
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    @extend %flex-wrap;
  }

  .share-menu-item {
    @extend %display-flex;
    @extend %align-center;
    @extend %pd-lr;
    @extend %pd-ud;
    @extend %flex-wrap;
    @extend %flex-column;
    width: 25%;
    .iconfont {
      font-size: 30px;
    }
    .icon-wechat {
      color: #35f61d;
    }
    .icon-pengyouquan {
      color: #7b5cc7;
    }
    .icon-weibo {
      color: #f62f25;
    }
    .icon-qq {
      color: #20a0ff;
    }
    .icon-qzone {
      color: #f67b1d;
    }
  }

  .share-menu-cancel {
    @extend %pd-ud;
    @extend %text-center;
    background-color: #e0e0e0;
  }
</style>
