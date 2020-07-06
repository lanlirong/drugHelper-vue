<template>
  <div class="container">
    <!-- <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="返回"
      sub-title="问题详情"
      @back="back"
    /> -->
    <h1>问题详情</h1>
    <div class="main">
      <h3>
        {{this.question.Q_content}}
        <a-tag color="orange">{{this.question.K_type}}</a-tag>
      </h3>
<a-divider></a-divider>
      <h4>参考文献</h4>
      <p>{{this.question.Source}}</p>
      <p>ISBN: {{ this.question.B_ISBN }}</p>
      <!-- <a-divider></a-divider> -->
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="问题解答">{{this.question.Q_answer}}</a-tab-pane>
        <a-tab-pane key="2" tab="知识拓展" force-render>{{this.question.K_link}}</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      question: {}
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    async getDetail () {
      // console.log(this.$route.query.id)
      const { data: res } = await this.$http.get(`/index/detail?id=${this.$route.query.id}`)
      console.log(res)
      this.question = res
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  /* padding: 0 20px; */
}
.ant-page-header {
  border: 0 !important;
}
.main {
  padding: 0 30px;
  min-height: 700px;
}
.ant-tab-pane {
 text-indent: 24px!important;
}
h1 {
  text-align: center;
  padding-top: 20px;
}
h3 {
  font-weight: 700;
}
h4 {
  color: #448885;
}
</style>
