<template>
  <div id="sport" ref="sport">
    <div class="sport-header">
      <div id="weather"><i class="iconfont icon-weather">&nbsp;</i>{{temperature | formatTemperature}}</div>
      <div class="steps">
        今日步数 <strong>3698</strong><i class="iconfont icon-right"></i>
      </div>
    </div>
    <el-tabs>
      <el-tab-pane label="跑步">
        <SportCard :sportData="dataRun"></SportCard>
      </el-tab-pane>
      <el-tab-pane label="健走">
        <SportCard :sportData="dataWalk"></SportCard>
      </el-tab-pane>
      <el-tab-pane label="骑行">
        <SportCard :sportData="dataRide"></SportCard>
      </el-tab-pane>
      <el-tab-pane label="登山">
        <SportCard :sportData="dataClimb"></SportCard>
      </el-tab-pane>
    </el-tabs>
    <div class="popup">
      没有别的安排？恰好来运动一下
      <i class="iconfont icon-up"></i>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import SportCard from '@/components/sport/SportCard'
  export default{
    name: 'Sport',
    data () {
      return {
        temperature: 0,
        dataRun: {num: 16, title: '跑步'},
        dataWalk: {num: 30.15, title: '健走'},
        dataRide: {num: 70, title: '骑行'},
        dataClimb: {num: 24.86, title: '登山'}
      }
    },
    created () {
      //  雅虎天气接口
      axios.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\'chengdu, il\')&format=json')
        .then(response => {
          let tempF = response.data.query.results.channel.item.condition.temp
          this.temperature = parseInt((tempF - 32) / 1.8)
        })
        .catch(error => {
          console.log(error)
        })
    },
    mounted () {
      this.fullSport()
    },
    methods: {
      fullSport () {
        let content = this.$refs.sport.querySelector('.el-tabs__content')
        let winHeight = window.innerHeight
        content.style.height = winHeight - 188 + 'px'
      }
    },
    filters: {
      formatTemperature: function (value) {
        if (value) {
          return value + '℃'
        }
      }
    },
    components: {
      SportCard
    }
  }

</script>
<style lang="scss" type="text/scss">
  @import '../../assets/css/variable';

  #sport {
    @extend %bg-white;

    .sport-header {
      @extend %bg-blue;
      @extend %color-white;
      @extend %pd-lr;
      @extend %pd-ud;
      @extend %display-flex;
      @extend %space-between;
      @extend %align-center;
    }

    .steps {
      @extend %display-flex;
      @extend %align-center;
      font-size: 8px;
      padding: 2px 15px 2px 15px;
      border-radius: 25px 0 0 25px;
      background-color: rgba(0, 0, 0, 0.15);
      transform: translateX(25px);
      strong {
        margin-left: 5px;
      }
    }

    .el-tabs__header {
      @extend %bg-blue;
      margin-bottom: 0;
    }
    .el-tabs__active-bar {
      @extend %bg-white;
    }
    .el-tab-pane{
      height:100%;
    }
    .el-tabs__item {
      @extend %color-white;
    }
    .popup {
      @extend %bg-white;
      @extend %position-fixed;
      @extend %text-center;
      @extend %border-top;
      width: 100%;
      box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15);
      bottom: 55px;
      padding: 15px;
    }

    .icon-up {
      float: right;
    }
  }
</style>
