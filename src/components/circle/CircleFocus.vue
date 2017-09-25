<template>
  <div id="circle-focus">
    <div class="article" v-for="article in articles" :key="article.id">
      <div class="article-title">
        <div class="article-avatar">
          <img :src="article.avatar" alt="">
        </div>
        <div class="article-author"><p>{{article.author}}</p>
          <small>{{article.uptime}}</small>
        </div>
      </div>
      <div class="article-main">
        <div class="article-content">
          <strong>{{article.emphasis}}</strong>{{article.content}}
        </div>
        <div class="article-img">
          <img :src="article.src" alt="">
        </div>
        <div class="article-operation">
            <span class="article-operation-left">
              <i class="iconfont icon-praise"></i>
              <i class="iconfont icon-message"></i>
              <i class="iconfont icon-share" @click="showShareMenu()"></i>
            </span>
          <span><i class="iconfont icon-ellipsis"></i></span>
        </div>
        <div class="article-praise"><i class="iconfont icon-praise">&nbsp;</i>{{article.praise}}人赞了</div>
        <div class="article-comment">查看所有{{article.comment}}条评论</div>
      </div>
    </div>
    <ShareMenu :show="showMenu" @canceled="hideShareMenu"></ShareMenu>
  </div>
</template>
<script type="text/ecmascript-6">
  import ShareMenu from '@/components/basic/ShareMenu'
  export default{
    name: 'CircleFocus',
    data () {
      return {
        articles: [
          {
            id: 1,
            avatar: './static/img/avatar.gif',
            author: '咕咚小编',
            uptime: '3小时前',
            content: '50强已经出炉，有你支持的女神吗？即日起到9月5日，他们将展开50进10的角逐，能否入围十强依然取决于你们的支持哦！这种时刻小编',
            emphasis: '#Running Girl',
            src: './static/img/circle/focus/focus-1.gif',
            praise: 1269,
            comment: 8
          },
          {
            id: 2,
            avatar: './static/img/avatar.gif',
            author: '咕咚小编',
            uptime: '5小时前',
            content: '50强已经出炉，有你支持的女神吗？即日起到9月5日，他们将展开50进10的角逐，能否入围十强依然取决于你们的支持哦！这种时刻小编',
            emphasis: '#Running Man',
            src: './static/img/circle/focus/focus-2.gif',
            praise: 2295,
            comment: 16
          },
          {
            id: 3,
            avatar: './static/img/avatar.gif',
            author: '咕咚小编',
            uptime: '9小时前',
            content: '50强已经出炉，有你支持的女神吗？即日起到9月5日，他们将展开50进10的角逐，能否入围十强依然取决于你们的支持哦！这种时刻小编',
            emphasis: '#Running Man',
            src: './static/img/circle/focus/focus-3.gif',
            praise: 3319,
            comment: 142
          },
          {
            id: 4,
            avatar: './static/img/avatar.gif',
            author: '咕咚小编',
            uptime: '15小时前',
            content: '50强已经出炉，有你支持的女神吗？即日起到9月5日，他们将展开50进10的角逐，能否入围十强依然取决于你们的支持哦！这种时刻小编',
            emphasis: '#Running Man',
            src: './static/img/circle/focus/focus-4.gif',
            praise: 2249,
            comment: 226
          }
        ],
        showMenu: false
      }
    },
    methods: {
      showShareMenu () {
        this.showMenu = true
      },
      hideShareMenu () {
        this.showMenu = false
      }
    },
    components: {
      ShareMenu
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../assets/css/variable';

  .article {
    @extend %bg-white;
    @extend %pd-lr;
    @extend %margin-bottom-10;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .article-title {
    @extend %display-table;
    padding-top: 10px;
  }

  .article-avatar {
    @extend %display-table-cell;
    padding: 5px 0;
    width: 40px;

    img {
      height: auto;
      width: 100%;
    }

  }

  .article-author {
    @extend %display-table-cell;
    padding-left: 10px;
  }

  .article-content {
    @extend %overflow-hidden;
    max-height: 60px;
    margin: 5px 0;
    strong {
      @extend %color-blue;
    }
  }

  .article-operation {
    @extend %display-flex;
    @extend %space-between;
    @extend %align-center;
    @extend %pd-ud;
    border-bottom: solid 1px #eaeaea;
  }

  .article-operation-left {
    .iconfont {
      margin-right: 20px;
    }
  }

  .article-praise {
    padding: 5px 0;
    border-bottom: solid 1px #eaeaea;
    width: 40%;
  }

  .article-comment {
    @extend %color-blue;
    padding: 5px 0;
  }
</style>
