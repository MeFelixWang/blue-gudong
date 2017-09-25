<template>
  <div>
    <div class="card-slider" v-for="data in sliderData">
      <div class="slider-title">
        <h3>{{data.title}}</h3>
      </div>
      <div class="slider-container">
        <div class="slider-wrap">
          <div class="slider-inner">
            <div class="slider-item" v-for="card in data.content" :key="card.id">
              <a href=""><img :src="card.src" alt=""></a>
              <div class="slider-desc">{{card.desc}}</div>
              <div class="slider-user"><img src="../../../static/img/avatar.gif" alt="">
                <small>{{card.username}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'CardSlider',
    props: ['sliderData'],
    mounted () {
      this.setWidth()
    },
    methods: {
      setWidth () {
        let sliderInner = document.querySelector('.slider-inner')
        let sliderItems = sliderInner.querySelectorAll('.slider-item')
        let length = sliderItems.length
        sliderInner.style.width = (150 * length - 10) + 'px'
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import "../../assets/css/variable";

  .card-slider {
    @extend %bg-white;
    @extend %pd-lr;
    padding-bottom: 15px;
    margin-bottom: 10px;
  }

  .slider-title {
    @extend %pd-ud;
  }

  .slider-container {
    @extend %overflow-hidden;
    height: 194px;
  }

  .slider-wrap {
    height: 210px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .slider-inner {
    &:before, &:after {
      content: '';
      display: table;
    }
    &:after {
      clear: both;
    }
  }

  .slider-item {
    float: left;
    width: 140px;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 100%;
      height: auto;
    }
  }

  .slider-desc {
    @extend %overflow-hidden;
    @extend %text-overflow;
    margin: 5px 0;
    -webkit-line-clamp: 1;
  }

  .slider-user {
    @extend %display-flex;
    @extend %align-center;
    margin: 5px 0;
    img {
      height: 20px;
      width: auto;
      margin-right: 3px;
    }
  }
</style>
