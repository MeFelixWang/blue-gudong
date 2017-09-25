<template>
  <div id="circle-hot">
    <swiper :options="hotSwiperOps" class="swiper-container">
      <swiper-slide v-for="swiperItem in hotSwiper" :key="swiperItem.id" class="swiper-item">
        <img :src="swiperItem.src" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="section">
      <div class="title">
        <h3>热门话题</h3>
        <span>更多<i class="iconfont icon-right"></i></span></div>
      <div class="slider-container topic-slider">
        <div class="slider-wrap">
          <img v-for="paneItem in pane" :src="paneItem.src" :key="paneItem.id" alt="">
        </div>
      </div>
      <div class="topic-card">
        <div class="topic-card-main" v-for="topic in topicCard" :key="topic.id">
          <img :src="topic.src" alt="">
          <div class="topic-card-content">
            <div class="topic-card-inner">
              <h3 class="topic-card-title">{{topic.title}}</h3>
              <div class="topic-card-desc">{{topic.desc}}</div>
            </div>
            <small class="topic-card-join"><img src="../../../static/img/avatar.gif" alt="">{{topic.num}}人参与</small>
          </div>
        </div>
      </div>
      <div class="title">
        <h3>热门活动</h3>
      </div>
      <div><img src="../../../static/img/circle/swiper/swiper-2.gif" width="100%" alt=""></div>
    </div>
    <div class="section">
      <div class="title">
        <h3>讨论专区</h3>
        <span>更多<i class="iconfont icon-right"></i></span></div>
      <div>
        <img src="../../../static/img/circle/swiper/swiper-2.gif" width="100%" alt="">
      </div>
    </div>
    <div class="section">
      <div class="title"><h3>精选动态</h3></div>
      <el-row :gutter="15" type="flex" justify="start" class="delicate">
        <el-col :span="12" :sm="6" class="delicate-bottom" v-for="delicateItem in delicate" :key="delicateItem.id">
          <img :src="delicateItem.src" alt="">
          <div class="delicate-desc">{{delicateItem.desc}}</div>
          <div class="delicate-praise">
            <small><img src="../../../static/img/avatar.gif" alt="">{{delicateItem.username}}</small>
            <small><i class="iconfont icon-praise">&nbsp;</i>{{delicateItem.praise}}</small>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'CircleHot',
    data () {
      return {
        hotSwiper: [
          {id: 1, src: './static/img/circle/swiper/swiper-1.gif'},
          {id: 2, src: './static/img/circle/swiper/swiper-2.gif'},
          {id: 3, src: './static/img/circle/swiper/swiper-3.gif'},
          {id: 4, src: './static/img/circle/swiper/swiper-4.gif'},
          {id: 5, src: './static/img/circle/swiper/swiper-5.gif'},
          {id: 6, src: './static/img/circle/swiper/swiper-6.gif'}
        ],
        pane: [
          {id: 1, src: './static/img/circle/slider/slider-1.gif'},
          {id: 2, src: './static/img/circle/slider/slider-2.gif'},
          {id: 3, src: './static/img/circle/slider/slider-3.gif'},
          {id: 4, src: './static/img/circle/slider/slider-4.gif'},
          {id: 5, src: './static/img/circle/slider/slider-5.gif'},
          {id: 6, src: './static/img/circle/slider/slider-6.gif'},
          {id: 7, src: './static/img/circle/slider/slider-7.gif'},
          {id: 8, src: './static/img/circle/slider/slider-8.gif'}
        ],
        topicCard: [
          {
            id: 1,
            src: './static/img/circle/hot/topic-1.gif',
            title: '#Running Girl',
            desc: '突破·勇敢超越，Running Girl50进10进行时',
            num: 1253
          },
          {
            id: 2,
            src: './static/img/circle/hot/topic-2.gif',
            title: '#热恋一夏',
            desc: '热恋一夏，用汗水怒对夏天！',
            num: 2022
          }
        ],
        delicate: [
          {
            id: 1,
            src: './static/img/circle/hot/card-3.gif',
            desc: '海边晨曦，我向上精选',
            username: '尼古拉斯',
            praise: 106
          },
          {
            id: 2,
            src: './static/img/circle/hot/card-4.gif',
            desc: '成都的小伙伴，快来一起吧成都的小伙伴，快来一起吧',
            username: '清清约跑',
            praise: 63
          },
          {
            id: 3,
            src: './static/img/circle/hot/card-5.gif',
            desc: '早上大选沿着情侣跑步的',
            username: 'season',
            praise: 217
          },
          {
            id: 4,
            src: './static/img/circle/hot/card-6.gif',
            desc: '你的人生，应该有些值得回忆的往事',
            username: '最好的自己',
            praise: 9
          },
          {
            id: 5,
            src: './static/img/circle/hot/card-7.gif',
            desc: '越努力越美丽，我要上精选',
            username: '奔跑的犀牛',
            praise: 55
          },
          {
            id: 6,
            src: './static/img/circle/hot/card-8.gif',
            desc: '如果你有梦想，你必须捍卫它',
            username: '小七关',
            praise: 602
          },
          {
            id: 7,
            src: './static/img/circle/hot/card-9.gif',
            desc: '如果你有梦想，你必须捍卫它',
            username: '小七关',
            praise: 602
          },
          {
            id: 8,
            src: './static/img/circle/hot/card-10.gif',
            desc: '如果你有梦想，你必须捍卫它',
            username: '小七关',
            praise: 602
          },
          {
            id: 9,
            src: './static/img/circle/hot/card-11.gif',
            desc: '如果你有梦想，你必须捍卫它',
            username: '小七关',
            praise: 602
          },
          {
            id: 10,
            src: './static/img/circle/hot/card-12.gif',
            desc: '如果你有梦想，你必须捍卫它',
            username: '小七关',
            praise: 602
          },
          {
            id: 11,
            src: './static/img/circle/hot/card-13.gif',
            desc: '如果你有梦想，你必须捍卫它',
            username: '小七关',
            praise: 602
          },
          {
            id: 12,
            src: './static/img/circle/hot/card-14.gif',
            desc: '如果你有梦想，你必须捍卫它',
            username: '小七关',
            praise: 602
          },
          {
            id: 13,
            src: './static/img/circle/hot/card-15.gif',
            desc: '如果你有梦想，你必须捍卫它',
            username: '小七关',
            praise: 602
          },
          {
            id: 14,
            src: './static/img/circle/hot/card-16.gif',
            desc: '如果你有梦想，你必须捍卫它',
            username: '小七关',
            praise: 602
          }
        ],
        hotSwiperOps: {
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
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../assets/css/common.scss';

  .topic-slider {
    height: 80px;
    .slider-wrap {
      height: 95px;
      img {
        height: 75px;
      }
    }
  }

  .topic-item {
    padding: 5px 0;
  }

  .topic-card-main {
    @extend %display-flex;
    @extend %pd-ud;
    height: 120px;
    img {
      height: 100%;
      width: auto;
      margin-right: 15px;
    }
  }

  .topic-card-content {
    @extend %display-flex;
    @extend %space-between;
    @extend %flex-column;
  }

  .topic-card-desc {
    @extend %text-overflow;
    -webkit-line-clamp: 2;
  }

  .topic-card-join {
    @extend %display-flex;
    @extend %align-center;
    img {
      height: 20px;
      width: auto;
      margin-right: 3px;
    }
  }

  .delicate {
    @extend %flex-wrap;
  }

  .delicate-desc {
    @extend %overflow-hidden;
    @extend %text-overflow;
    height: 40px;
    margin: 5px 0;
    -webkit-line-clamp: 2;
  }

  .delicate-bottom {
    padding-bottom: 15px;
  }

  .delicate-praise {
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    small {
      @extend %display-flex;
      @extend %align-center;
    }
    img {
      height: 20px;
      width: auto;
      margin-right: 3px;
    }
  }
</style>
