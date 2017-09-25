<template>
  <div id="skill-ride">
    <Card :dataOrigin="ride"></Card>
  </div>
</template>
<script type="text/ecmascript-6">
  import Card from '@/components/basic/Card'
  export default{
    name: 'Skill',
    data () {
      return {
        ride: [
          {
            title: '骑行知识',
            content: [{
              tag: '跑步知识',
              src: './static/img/skill/run/skill-1.gif',
              desc: '7种最常见的错误跑姿，你中枪了几个？',
              name: '咕咚骑行',
              view: 411993
            }, {
              tag: '跑步知识',
              src: './static/img/skill/run/skill-2.gif',
              desc: '跑马的盆友注意啦！不懂这些术语的话你就尴尬了',
              name: '咕咚骑行',
              view: 274612
            }]
          },
          {
            title: '骑行话题',
            content: [{
              tag: '跑步训练',
              src: './static/img/skill/run/skill-3.gif',
              desc: '长距离慢跑，这才是你跑马路上的必修课',
              name: '咕咚骑行',
              view: 739677
            }, {
              tag: '跑步训练',
              src: './static/img/skill/run/skill-4.gif',
              desc: '备战马拉松期间，你应该注意哪些问题？',
              name: '咕咚骑行',
              view: 1144964
            }]
          },
          {
            title: '骑行资讯',
            content: [{
              tag: '跑步资讯',
              src: './static/img/skill/run/skill-5.gif',
              desc: '原来你们是这样的Girl，是在下输了！',
              name: '咕咚骑行',
              view: 91804
            }, {
              tag: '跑步资讯',
              src: './static/img/skill/run/skill-6.gif',
              desc: '嘿，我好像在哪里见过你，你记得我吗？',
              name: '咕咚骑行',
              view: 172555
            }]
          },
          {
            title: '骑行达人',
            content: [{
              tag: '损伤防护',
              src: './static/img/skill/run/skill-7.gif',
              desc: '它能让你疼得跪地，碰到足底静默眼怎么办？',
              name: '咕咚骑行',
              view: 779627
            }, {
              tag: '损伤防护',
              src: './static/img/skill/run/skill-8.gif',
              desc: '不想变成烧烤人，就别忘了跑前防晒！',
              name: '咕咚骑行',
              view: 227565
            }]
          },
          {
            title: '骑行专题',
            content: [{
              tag: '跑步话题',
              src: './static/img/skill/run/skill-9.gif',
              desc: '长跑王法拉赫转战马拉松，能否创造新神话？',
              name: '咕咚骑行',
              view: 202616
            }, {
              tag: '跑步话题',
              src: './static/img/skill/run/skill-10.gif',
              desc: '掐指算算，你为跑步“投资”了多少钱？',
              name: '咕咚骑行',
              view: 421507
            }]
          },
          {
            title: '单车旅行',
            content: [{
              tag: '跑步装备',
              src: './static/img/skill/run/skill-11.gif',
              desc: '紧身裤真的可以提升我们的跑步成绩吗？',
              name: '咕咚骑行',
              view: 837313
            }, {
              tag: '跑步装备',
              src: './static/img/skill/run/skill-12.gif',
              desc: '我只想和你寸步不离，这也有错吗？',
              name: '咕咚骑行',
              view: 401760
            }]
          }
        ]
      }
    },
    components: {
      Card
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
</style>
