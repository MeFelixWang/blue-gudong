<template>
  <div id="mine">
    <div class="mine-status">
      <el-badge :value="2"><i class="iconfont icon-message"></i></el-badge>
    </div>
    <div class="mine-head ">
      <div class="mine-info">
        <div class="mine-info-main">
          <div class="mine-avatar">
            <img src="../../../static/img/avatar.gif" alt="">
          </div>
          <div class="mine-num">
            <h2>CD3381701446</h2>
          </div>
        </div>
        <i class="iconfont icon-right"></i>
      </div>
      <div class="mine-cate">
        <div>
          <strong>0</strong>
          <div>关注</div>
        </div>
        <div>
          <strong>0</strong>
          <div>粉丝</div>
        </div>
        <div>
          <strong>0</strong>
          <div>动态</div>
        </div>
      </div>
    </div>
    <div class="mine-data">
      <div class="mine-data-main">
        <i class="iconfont icon-move"></i>
        <div>
          <strong>0次运动</strong>
          <p>最近运动0.00公里</p>
        </div>
      </div>
      <small>查看记录<i class="iconfont icon-right"></i></small>
    </div>
    <ul class="domain">
      <li><span><i class="iconfont icon-timer"></i>成绩</span>
        <i class="iconfont icon-right"></i></li>
      <li><span><i class="iconfont icon-medal"></i>奖章</span>
        <i class="iconfont icon-right"></i></li>
      <li><span><i class="iconfont icon-rank"></i>排行</span>
        <i class="iconfont icon-right"></i></li>
      <li><span><i class="iconfont icon-whistle"></i>训练计划</span>
        <i class="iconfont icon-right"></i></li>
    </ul>
    <ul class="domain">
      <li><span><i class="iconfont icon-star"></i>收藏</span>
        <i class="iconfont icon-right"></i></li>
      <li><span><i class="iconfont icon-flag"></i>运动团</span>
        <i class="iconfont icon-right"></i></li>
      <li><span><i class="iconfont icon-cup"></i>赛事</span>
        <i class="iconfont icon-right"></i></li>
      <li><span><i class="iconfont icon-dumbbell"></i>装备</span>
        <i class="iconfont icon-right"></i></li>
    </ul>
    <ul class="domain">
      <li><span><i class="iconfont icon-file"></i>订单</span>
        <i class="iconfont icon-right"></i></li>
      <li><span><i class="iconfont icon-wallet"></i>钱包</span>
        <i class="iconfont icon-right"></i></li>
    </ul>
    <ul class="domain">
      <li><span><i class="iconfont icon-coffee"></i>俱乐部</span>
        <i class="iconfont icon-right"></i></li>
    </ul>
    <ul class="domain">
      <li><span><i class="iconfont icon-gear"></i>设置</span>
        <i class="iconfont icon-right"></i></li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'Mine',
    mounted () {
      this.fixAvatar()
    },
    methods: {
      fixAvatar: function () {
        let status = document.querySelector('.mine-status')
        let avatarBox = document.querySelector('.mine-avatar')
        window.onscroll = function () {
          let avatar = avatarBox.querySelector('img')
          let top = document.body.scrollTop
          if (top > 30) {
            status.style.borderColor = '#eaeaea'
            avatar.classList.add('fixed')
          } else {
            status.style.borderColor = 'transparent'
            avatar.classList.remove('fixed')
          }
        }
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../assets/css/common.scss';

  #mine {
    @extend %overflow-hidden;
    margin-bottom: 55px;
  }

  .mine-status {
    @extend %bg-white;
    @extend %pd-lr;
    @extend %pd-ud;
    @extend %position-fixed;
    @extend %text-right;
    border-bottom: solid 1px transparent;
    width: 100%;
    z-index: 10;
  }

  .mine-head {
    @extend %bg-white;
    @extend %pd-lr;
    @extend %margin-bottom-10;
    padding-top: 41px;
  }

  .mine-info {
    @extend %bg-white;
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    @extend %border-bottom;
    padding-bottom: 30px;
  }

  .mine-info-main {
    @extend %display-flex;
    @extend %align-center;
  }

  .mine-avatar {
    @extend %margin-right-10;
    height: 60px;
    width:60px;
    img {
      @extend %position-relative;
      width: 60px;
      height: 60px;
      transition: all 0.3s ease-in-out;
      z-index: 10;
      &.fixed {
        @extend %position-fixed;
        top: 10px;
        left: 15px;
        transform: translateX(-20px) translateY(-20px) scale(0.5);
      }
    }
  }

  .mine-cate {
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    @extend %text-center;
    @extend %pd-ud;
    padding-left: 30px;
    padding-right: 30px;
  }

  .mine-data {
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    @extend %pd-lr;
    @extend %bg-white;
    @extend %margin-bottom-10;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .mine-data-main {
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    .icon-move {
      @extend %color-blue;
      @extend %font-bold;
      margin-right: 15px;
    }
    strong {
      @extend %color-blue;
    }
  }

  .domain {
    @extend %bg-white;
    @extend %pd-lr;
    @extend %margin-bottom-10;
    li {
      @extend %display-flex;
      @extend %space-between;
      @extend %align-center;
      @extend %border-bottom;
      padding-top: 15px;
      padding-bottom: 15px;
      .iconfont:not(.icon-right) {
        @extend %color-blue;
        @extend %font-bold;
        margin-right: 15px;
      }
    }
  }
</style>
