<template>
  <div id="skill-run">
    <Card :dataOrigin="run"></Card>
  </div>
</template>
<script type="text/ecmascript-6">
  import Card from '@/components/basic/Card'
  export default{
    name: 'SkillRun1',
    data () {
      return {
        run: [
          {
            title: '跑步知识',
            content: [{
              tag: '跑步知识',
              src: './static/img/skill/run/skill-1.gif',
              desc: '7种最常见的错误跑姿，你中枪了几个？',
              name: '咕咚跑步',
              view: 411993
            }, {
              tag: '跑步知识',
              src: './static/img/skill/run/skill-2.gif',
              desc: '跑马的盆友注意啦！不懂这些术语的话你就尴尬了',
              name: '咕咚跑步',
              view: 274612
            }]
          },
          {
            title: '跑步训练',
            content: [{
              tag: '跑步训练',
              src: './static/img/skill/run/skill-3.gif',
              desc: '长距离慢跑，这才是你跑马路上的必修课',
              name: '咕咚跑步',
              view: 739677
            }, {
              tag: '跑步训练',
              src: './static/img/skill/run/skill-4.gif',
              desc: '备战马拉松期间，你应该注意哪些问题？',
              name: '咕咚跑步',
              view: 1144964
            }]
          },
          {
            title: '跑步资讯',
            content: [{
              tag: '跑步资讯',
              src: './static/img/skill/run/skill-5.gif',
              desc: '原来你们是这样的Girl，是在下输了！',
              name: '咕咚跑步',
              view: 91804
            }, {
              tag: '跑步资讯',
              src: './static/img/skill/run/skill-6.gif',
              desc: '嘿，我好像在哪里见过你，你记得我吗？',
              name: '咕咚跑步',
              view: 172555
            }]
          },
          {
            title: '损伤防护',
            content: [{
              tag: '损伤防护',
              src: './static/img/skill/run/skill-7.gif',
              desc: '它能让你疼得跪地，碰到足底静默眼怎么办？',
              name: '咕咚跑步',
              view: 779627
            }, {
              tag: '损伤防护',
              src: './static/img/skill/run/skill-8.gif',
              desc: '不想变成烧烤人，就别忘了跑前防晒！',
              name: '咕咚跑步',
              view: 227565
            }]
          },
          {
            title: '跑步话题',
            content: [{
              tag: '跑步话题',
              src: './static/img/skill/run/skill-9.gif',
              desc: '长跑王法拉赫转战马拉松，能否创造新神话？',
              name: '咕咚跑步',
              view: 202616
            }, {
              tag: '跑步话题',
              src: './static/img/skill/run/skill-10.gif',
              desc: '掐指算算，你为跑步“投资”了多少钱？',
              name: '咕咚跑步',
              view: 421507
            }]
          },
          {
            title: '跑步装备',
            content: [{
              tag: '跑步装备',
              src: './static/img/skill/run/skill-11.gif',
              desc: '紧身裤真的可以提升我们的跑步成绩吗？',
              name: '咕咚跑步',
              view: 837313
            }, {
              tag: '跑步装备',
              src: './static/img/skill/run/skill-12.gif',
              desc: '我只想和你寸步不离，这也有错吗？',
              name: '咕咚跑步',
              view: 401760
            }]
          },
          {
            title: '跑者故事',
            content: [{
              tag: '跑者故事',
              src: './static/img/skill/run/skill-13.gif',
              desc: '驰骋天路110公里，鬼知道我经历了什么',
              name: '咕咚跑步',
              view: 432983
            }, {
              tag: '跑者故事',
              src: './static/img/skill/run/skill-14.gif',
              desc: '【明星秀】爱跑步的医生，是如何制定跑量的',
              name: '咕咚跑步',
              view: 1260724
            }]
          },
          {
            title: '越野跑',
            content: [{
              tag: '越野跑',
              src: './static/img/skill/run/skill-15.gif',
              desc: '跑越野，这些装备不能少',
              name: '咕咚跑步',
              view: 764706
            }, {
              tag: '越野跑',
              src: './static/img/skill/run/skill-16.gif',
              desc: '他们说这是跑者的最终归宿',
              name: '咕咚跑步',
              view: 993659
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
<style lang="scss" type="text/css" scoped>
</style>
