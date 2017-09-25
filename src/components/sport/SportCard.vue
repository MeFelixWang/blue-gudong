<template>
  <div class="sport-card">
    <div class="sport-card-data">
      <strong>{{sportData.num | format}}</strong>
      <h2>{{sportData.title}}总公里</h2>
    </div>
    <div class="sport-card-btn">GO!</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'SportCard',
    props: ['sportData'],
    filters: {
      format: function (value) {
        if (value) {
          return value.toFixed(2)
        }
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import "../../assets/css/variable";

  .sport-card {
    @extend %display-flex;
    @extend %flex-column;
    @extend %align-center;
    @extend %text-center;
    justify-content: center;
    height:100%;
  }

  .sport-card-data {
    margin-bottom:10%;
    strong{
      font-size: 50px;
    }
  }

  .sport-card-btn {
    @extend %display-flex;
    @extend %align-center;
    @extend %bg-blue;
    @extend %color-white;
    @extend %font-bold;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 1px 20px 0 rgba(32, 160, 255, 0.8);
    font-size: 24px;
  }
</style>
