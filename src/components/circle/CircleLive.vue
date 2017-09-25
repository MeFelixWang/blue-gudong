<template>
  <div id="circle-live">
    <div class="section">
      <div class="anchor-img"><img src="../../../static/img/circle/live/activity-lg-4.gif" width="100%" alt=""></div>
      <div class="anchor-rank">
        <h3>主播排行榜</h3>
        <span><img src="../../../static/img/avatar.gif" alt=""><i class="iconfont icon-right"></i></span>
      </div>
    </div>
    <div class="section" v-for="activity in activities" :key="activity.id">
      <div class="title">
        <h3>{{activity.title}}</h3>
        <span>详情<i class="iconfont icon-right"></i></span>
      </div>
      <el-row class="activity-content">
        <el-col class="activity-img-lg"><img :src="activity.srcBig" alt=""></el-col>
        <el-col :span="8">
          <div class="activity-img-sm"><img :src="activity.srcSmall" alt=""></div>
          <div class="activity-desc">{{activity.desc}}</div>
          <div class="activity-avatar">
            <img src="../../../static/img/avatar.gif" alt="">
            <small>{{activity.name}}</small>
          </div>
        </el-col>
      </el-row>
      <div class="activity-time">{{activity.time}}</div>
    </div>
    <CardSlider :sliderData="cards"></CardSlider>
    <div class="section">
      <div class="title">
        <h3>精彩回放</h3>
        <span>全部 <i class="iconfont icon-right"></i></span>
      </div>
      <ul class="back">
        <li v-for="backItem in back" :key="backItem.id"><img :src="backItem.src" alt=""></li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import CardSlider from '@/components/basic/CardSlider'
  export default{
    name: 'CircleLive',
    data () {
      return {
        activities: [
          {
            id: 1,
            title: '咕咚智能运动战略暨新品发布会',
            srcBig: './static/img/circle/live/activity-lg-1.gif',
            srcSmall: './static/img/circle/live/activity-sm-1.gif',
            desc: '8月29日，哇，咕咚就要发新品啦',
            name: '咕咚小编',
            time: '时间：08月29日 14:00 - 08月29日 16:00'
          },
          {
            id: 2,
            title: '报告教练',
            srcBig: './static/img/circle/live/activity-lg-2.gif',
            srcSmall: './static/img/circle/live/activity-sm-2.gif',
            desc: '8月29日，TR小艺教练就要开课啦',
            name: '罗小艺',
            time: '时间：08月29日 20:00 - 08月29日 21:00'
          },
          {
            id: 3,
            title: '踢馆豹小姐',
            srcBig: './static/img/circle/live/activity-lg-3.gif',
            srcSmall: './static/img/circle/live/activity-sm-3.gif',
            desc: 'MMA综合格斗实战',
            name: '豹小姐Julie',
            time: '时间：08月29日 21:00 - 08月29日 22:00'
          },
          {
            id: 4,
            title: '咕咚赛事秀',
            srcBig: './static/img/circle/live/activity-lg-4.gif',
            srcSmall: './static/img/circle/live/activity-sm-4.gif',
            desc: '咚小姐再次空降活动现场',
            name: '咕咚官方赛事',
            time: '时间：08月30日 12:00 - 08月30日 12:40'
          }
        ],
        cards: [
          {
            title: 'Running Girl',
            content: [
              {id: 1, src: './static/img/circle/live/live-1.gif', desc: '娜姐带你看徐州环湖马拉松', username: '幸运星137'},
              {id: 2, src: './static/img/circle/live/live-2.gif', desc: '跑遍中国的熊熊，这次来了', username: '跑者熊熊'},
              {id: 3, src: './static/img/circle/live/live-3.gif', desc: '跑遍中国的熊熊，这次来了', username: '跑者熊熊'},
              {id: 4, src: './static/img/circle/live/live-4.gif', desc: '跑遍中国的熊熊，这次来了', username: '跑者熊熊'},
              {id: 5, src: './static/img/circle/live/live-5.gif', desc: '跑遍中国的熊熊，这次来了', username: '跑者熊熊'}
            ]
          }, {
            title: '我想上精选',
            content: [
              {id: 1, src: './static/img/circle/live/live-1.gif', desc: '娜姐带你看徐州环湖马拉松', username: '幸运星137'},
              {id: 2, src: './static/img/circle/live/live-2.gif', desc: '跑遍中国的熊熊，这次来了', username: '跑者熊熊'},
              {id: 3, src: './static/img/circle/live/live-3.gif', desc: '跑遍中国的熊熊，这次来了', username: '跑者熊熊'}
            ]
          }, {
            title: '流汗，不留憾',
            content: [
              {id: 1, src: './static/img/circle/live/live-1.gif', desc: '娜姐带你看徐州环湖马拉松', username: '幸运星137'}
            ]
          }
        ],
        back: [
          {id: 1, src: './static/img/circle/live/back-1.gif'},
          {id: 2, src: './static/img/circle/live/back-2.gif'}
        ]
      }
    },
    components: {
      CardSlider
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../assets/css/common.scss';
  .anchor-img{
    @extend %pd-ud;
  }
  .anchor-rank{
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    img{
      height:20px;
      width: auto;
    }
  }
  .activity-content {
    @extend %border-bottom;
  }

  .activity-img-lg {
    img {
      width: 100%;
    }
  }

  .activity-img-sm {
    @extend %pd-ud;
  }

  .activity-desc {
    @extend %overflow-hidden;
    height: 20px;
  }

  .activity-avatar {
    @extend %display-flex;
    @extend %align-center;
    @extend %flex-start;
    @extend %pd-ud;
    img {
      height: 25px;
      width: auto;
      margin-right: 5px;
    }
    img, small {
      @extend %display-table-cell;
      vertical-align: middle;
    }
  }

  .activity-time {
    padding-top: 10px;
  }

  .back {
    li {
      padding-bottom: 10px;
      img {
        width: 100%;
      }
    }
  }
</style>
