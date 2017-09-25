<template>
  <div id="Skill-recommendation">
    <swiper :options="skillSwiperOps" ref="skillSwiper" class="swiper-container">
      <swiper-slide v-for="swiperItem in skillSwiper" :key="swiperItem.id" class="swiper-item">
        <img :src="swiperItem.src" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <Card :dataOrigin="hot"></Card>
    <div class="section">
      <div class="title">
        <h3>训练计划</h3>
        <span>更多<i class="iconfont icon-right"></i></span>
      </div>
      <div class="slider-container train-slider">
        <div class="slider-wrap">
          <img v-for="trainItem in train" :src="trainItem.src" :key="trainItem.id" alt="">
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title">
        <h3>咕咚学院</h3>
        <span>更多<i class="iconfont icon-right"></i></span>
      </div>
      <div class="slider-container skill-slider">
        <div class="slider-wrap">
          <img v-for="paneItem in paneSchool" :src="paneItem.src" :key="paneItem.id" alt="">
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title">
        <h3>言值大爆炸</h3>
        <span>更多<i class="iconfont icon-right"></i></span>
      </div>
      <div class="slider-container skill-slider">
        <div class="slider-wrap">
          <img v-for="paneItem in paneBomb" :src="paneItem.src" :key="paneItem.id" alt="">
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title">
        <h3>言值大爆炸</h3>
        <span>更多<i class="iconfont icon-right"></i></span>
      </div>
      <div class="slider-container skill-slider">
        <div class="slider-wrap">
          <img v-for="paneItem in paneShow" :src="paneItem.src" :key="paneItem.id" alt="">
        </div>
      </div>
    </div>
    <Card :dataOrigin="guess"></Card>
  </div>
</template>
<script type="text/ecmascript-6">
  import Card from '@/components/basic/Card'
  export default{
    name: 'Skill',
    data () {
      return {
        skillSwiper: [
          {id: 1, src: './static/img/skill/recommendation/pane/pane-3.gif'},
          {id: 2, src: './static/img/skill/recommendation/pane/pane-4.gif'},
          {id: 3, src: './static/img/skill/recommendation/pane/pane-5.gif'},
          {id: 4, src: './static/img/skill/recommendation/pane/pane-6.gif'},
          {id: 5, src: './static/img/skill/recommendation/pane/pane-7.gif'}
        ],
        hot: [{
          title: '今日热门',
          content: [
            {
              id: 1,
              tag: '基础健身',
              src: './static/img/skill/run/skill-1.gif',
              desc: '7种最常见的错误跑姿，你中枪了几个？',
              name: '咕咚跑步',
              view: 411993
            }, {
              id: 2,
              tag: '骑行达人',
              src: './static/img/skill/run/skill-2.gif',
              desc: '跑马的盆友注意啦！不懂这些术语的话你就尴尬了',
              name: '咕咚健身',
              view: 274612
            }, {
              id: 3,
              tag: '竞技极限',
              src: './static/img/skill/run/skill-3.gif',
              desc: '跑马的盆友注意啦！不懂这些术语的话你就尴尬了',
              name: '咕咚个性',
              view: 274612
            }, {
              id: 4,
              tag: '健身饮食',
              src: './static/img/skill/run/skill-4.gif',
              desc: '跑马的盆友注意啦！不懂这些术语的话你就尴尬了',
              name: '咕咚型男',
              view: 274612
            }
          ]
        }],
        train: [
          {id: 1, src: './static/img/skill/recommendation/pane/pane-7.gif'},
          {id: 2, src: './static/img/skill/recommendation/pane/pane-8.gif'},
          {id: 3, src: './static/img/skill/recommendation/pane/pane-9.gif'},
          {id: 4, src: './static/img/skill/recommendation/pane/pane-10.gif'}
        ],
        paneSchool: [
          {id: 1, src: './static/img/skill/recommendation/pane/pane-3.gif'},
          {id: 2, src: './static/img/skill/recommendation/pane/pane-4.gif'},
          {id: 3, src: './static/img/skill/recommendation/pane/pane-5.gif'},
          {id: 4, src: './static/img/skill/recommendation/pane/pane-6.gif'}
        ],
        paneBomb: [
          {id: 5, src: './static/img/skill/recommendation/pane/pane-7.gif'},
          {id: 6, src: './static/img/skill/recommendation/pane/pane-8.gif'},
          {id: 7, src: './static/img/skill/recommendation/pane/pane-9.gif'},
          {id: 8, src: './static/img/skill/recommendation/pane/pane-10.gif'}
        ],
        paneShow: [
          {id: 9, src: './static/img/skill/recommendation/pane/pane-11.gif'},
          {id: 10, src: './static/img/skill/recommendation/pane/pane-12.gif'},
          {id: 11, src: './static/img/skill/recommendation/pane/pane-13.gif'},
          {id: 12, src: './static/img/skill/recommendation/pane/pane-14.gif'}
        ],
        guess: [{
          title: '猜你喜欢',
          content: [
            {
              id: 1,
              tag: '基础健身',
              src: './static/img/skill/skill-24.gif',
              desc: '7种最常见的错误跑姿，你中枪了几个？',
              name: '咕咚健身',
              view: 411993
            }, {
              id: 2,
              tag: '骑行达人',
              src: './static/img/skill/skill-25.gif',
              desc: '跑马的盆友注意啦！不懂这些术语的话你就尴尬了',
              name: '咕咚骑行',
              view: 274612
            }, {
              id: 3,
              tag: '竞技极限',
              src: './static/img/skill/skill-26.gif',
              desc: '跑马的盆友注意啦！不懂这些术语的话你就尴尬了',
              name: '咕咚极限',
              view: 274612
            }
          ]
        }],
        skillSwiperOps: {
          autoplay: 3000,
          direction: 'horizontal',
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop: true,
          observer: true,
          observeParents: true,
          autoplayDisableOnInteraction: false
        }
      }
    },
    components: {
      Card
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../assets/css/common.scss';

  .skill-cate {
    @extend %bg-white;
    @extend %pd-lr;
    @extend %pd-ud;
    margin-top: 10px;
  }

  .skill-content {
    padding-bottom: 15px;
    &:last-child {
      padding-bottom: 0;
    }
  }

  .skill-content-txt {
    @extend %display-flex;
    @extend %flex-column;
    @extend %space-between;
  }

  .skill-img img {
    width: 100%;
  }

  .item-share {
    font-size: 6px;
    color: rgb(189, 189, 189);
  }

  .item-share small {
    margin-right: 25px;
  }

  .train-slider {
    height: 100px;
    .slider-wrap {
      height: 120px;
      img {
        height: 100px;
      }
    }
  }

  .skill-slider {
    height: 85px;
    .slider-wrap {
      height: 100px;
      img {
        height: 85px;
      }
    }
  }
</style>
