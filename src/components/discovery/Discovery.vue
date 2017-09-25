<template>
  <div id="discovery">
    <Search></Search>
    <el-row tag="ul" class="section">
      <el-row tag="li" type="flex" justify="space-between" class="discovery-item" v-for="cate in category"
              :key="cate.title">
        <el-row type="flex" justify="center" class="discovery-content">
          <h3>{{cate.title}}</h3>
          <p>{{cate.desc}}</p>
        </el-row>
        <div class="discovery-img">
          <img :src="cate.src" alt="">
        </div>
      </el-row>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  import Search from '@/components/search/Search'
  export default{
    name: 'Discovery',
    data () {
      return {
        category: [
          {title: '运动商城', desc: '买运动装备，128元免费领', src: './static/img/discovery/discovery-1.gif'},
          {title: '活动', desc: '赚福利，约伙伴，PK战', src: './static/img/discovery/discovery-2.gif'},
          {title: '赛事', desc: '赛事由你主宰，荣誉等你来战', src: './static/img/discovery/discovery-3.gif'},
          {title: '运动团', desc: '加入运动团，安全有趣不孤单', src: './static/img/discovery/discovery-4.gif'},
          {title: '跑场', desc: '发现附近最佳运动场所', src: './static/img/discovery/discovery-5.gif'},
          {title: '咕咚GO', desc: '与好友一同开启环球之旅', src: './static/img/discovery/discovery-6.gif'}
        ]
      }
    },
    components: {
      Search
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../assets/css/variable';

  #discovery {
    @extend %bg-white;
    @extend %pd-lr;
    @extend %viewport;
  }

  .discovery-item {
    @extend %border-bottom;
    @extend %pd-ud;
  }

  .discovery-content {
    @extend %flex-column;
    @extend %text-left;
  }

  h3 {
    font-weight: bold;
  }

  .discovery-img {
    height: 100px;
    img {
      height: 100%;
      width: auto;
    }
  }
  @media screen and (min-width: 768px){
    .discovery-img{
      height:190px;
    }
  }

</style>
