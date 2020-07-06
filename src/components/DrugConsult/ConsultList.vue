<template>
  <div>
    <ul class="list">
      <li v-for="(item, index) in list" :key="item.id">
        <a class="link" @click="toDetail(item.id)">
          <div class="question">
            {{index+1}}、
            <span v-html="showDate(item.Q_content)">{{}}</span>
          </div>
          <div class="answer" v-html="showDate(item.Q_answer)"></div>
        </a>
        <a-divider></a-divider>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    keyword: String
  },
  data () {
    return {
      list: [{
        id: 1,
        Q_content: '高女士妊娠32周了，这次孕检查血压140/100mmHg，医生给开了盐酸拉贝洛尔口服，患者咨询市场上有那么多抗高血压药物，除了拉贝洛尔，孕妇还能使用什么药物控制血压？',
        Q_answer: '妊娠期高血压选择用药原则是：对肾脏和胎盘-胎儿单位影响小，平稳降压；首选口服降压药，次选静脉降压药；可以联合用药。如果本身有慢性高血压，甲基多巴是首选口服药物，拉贝洛尔、硝苯地平、肼屈嗪是可供选择的口服药，可以考虑联合用药。即使对于急性重度高血压也可选择硝苯地平、拉贝洛尔口服降压，无效时选择静脉给药。静脉用药首选拉贝洛尔，其次酚妥拉明、尼卡地平等。肼屈嗪是妊娠期严重高血压的静脉首选药物。硫酸镁不作为降压药使用，主要用于重度子痫前期孕妇惊厥的预防和子痫惊厥及复发的控制。小剂量阿司匹林可用于子痫前期的预防。不推荐使用阿替洛尔和哌唑嗪。妊娠期禁止使用血管紧张素转换酶抑制剂和血管紧张素Ⅱ受体拮抗剂。硝普钠是妊娠禁忌药物'
      }]
    }
  },
  methods: {
    // 筛选变色
    showDate (val) {
      val = val + ''
      // if (val.indexOf(this.searchForm.keyword) !== -1 && this.searchForm.keyword !== '') {
      return val.replace(this.keyword, '<font color="red">' + this.keyword + '</font>')
      // } else {
      //   return val
      // }
    },
    toDetail (id) {
      this.$router.push({ path: `/consultDetail?id=${id}` })
    }
  }
}
</script>

<style>
.list {
  margin: 10px 20px 10px 10px;
}
.list li {
  font-size: 14px;
  list-style: none;
  margin: 20px 0;
  /* border: 1px solid #ccc; */
}
.question {
  color: #71b6f9;
  /* font-weight: 700; */
}
.answer {
  text-indent: 28px;
  line-height: 22px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.link {
  display: inline-block;
  /* margin: 20px 0; */
  cursor: pointer;
}
.link:hover div {
  color: #6a9955;
  /* text-decoration: underline; */
  /* background-color: #eee !important; */
}
</style>
