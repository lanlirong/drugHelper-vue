<template>
  <div>
    <img class="banner" src="../assets/banner2.png" alt />
    <!-- anchor -->
    <a-anchor :offsetTop="300" :target-offset="targetOffset">
      <a-anchor-link href="#search" title="问题检索" />
      <a-anchor-link href="#recommond" title="问题推荐" />
      <a-anchor-link href="#introduction" title="内容说明" />
      <a-anchor-link href="#statistic" title="数据统计" />
      <a-anchor-link href="#add" title="补充纠错" />
    </a-anchor>
    <!-- anchor -->
    <!-- 主体内容 -->
    <div class="container">
      <div id="search">
        <!-- 搜索框 -->
        <a-input-group class="search" compact>
          <a-select v-model="searchway" size="large" default-value="1">
            <a-select-option value="关键词">关键词</a-select-option>
            <a-select-option value="相关度">相关度</a-select-option>
          </a-select>
          <a-input-search
            shape="round"
            size="large"
            placeholder="糖尿病"
            v-model="searchForm.search"
            @search="onSearch"
          />
          <br />
          <span class="total">
            为你找到相关结果约为：
            <span style="color: red;">{{ this.total }}</span>条
          </span>
        </a-input-group>
        <!-- 搜索框 -->
        <!-- 搜索内容 -->
        <div class="search-content">
          <!-- <consult-list></consult-list>
          <consult-detail></consult-detail>-->
          <a-spin :spinning="spin" tip="Loading...">
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
          </a-spin>
          <a-pagination
            @change="onChange"
            :hideOnSinglePage="true"
            :default-current="page"
            :total="total"
          />
          <!-- <router-view></router-view> -->
        </div>
        <!-- 搜索内容 -->
      </div>
      <div id="recommond">
        <h2>问题推荐</h2>
        <div class="recommond-main">
          <a-row :gutter="[30,30]">
            <a-col :span="8">
              <a-card hoverable>
                <img slot="cover" alt="example" src="../assets/recommend/img3.jpg" />
                <a-card-meta title="二甲双胍不良反应">
                  <template slot="description">
                    患者王先生，新诊断2型糖尿病，服用二甲双胍肠溶片控制血糖。口服二甲双胍后腹泻严重，咨询还能用什么药？
                    <a-button class="detail" size="small">详情>></a-button>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card hoverable>
                <img slot="cover" alt="example" src="../assets/recommend/img3.jpg" />
                <a-card-meta title="二甲双胍不良反应">
                  <template slot="description">
                    患者王先生，新诊断2型糖尿病，服用二甲双胍肠溶片控制血糖。口服二甲双胍后腹泻严重，咨询还能用什么药？
                    <a-button class="detail" size="small">详情>></a-button>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card hoverable>
                <img slot="cover" alt="example" src="../assets/recommend/img3.jpg" />
                <a-card-meta title="二甲双胍不良反应">
                  <template slot="description">
                    患者王先生，新诊断2型糖尿病，服用二甲双胍肠溶片控制血糖。口服二甲双胍后腹泻严重，咨询还能用什么药？
                    <a-button class="detail" size="small">详情>></a-button>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card hoverable>
                <img slot="cover" alt="example" src="../assets/recommend/img3.jpg" />
                <a-card-meta title="二甲双胍不良反应">
                  <template slot="description">
                    患者王先生，新诊断2型糖尿病，服用二甲双胍肠溶片控制血糖。口服二甲双胍后腹泻严重，咨询还能用什么药？
                    <a-button class="detail" size="small">详情>></a-button>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card hoverable>
                <img slot="cover" alt="example" src="../assets/recommend/img3.jpg" />
                <a-card-meta title="二甲双胍不良反应">
                  <template slot="description">
                    患者王先生，新诊断2型糖尿病，服用二甲双胍肠溶片控制血糖。口服二甲双胍后腹泻严重，咨询还能用什么药？
                    <a-button class="detail" size="small">详情>></a-button>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card hoverable>
                <img slot="cover" alt="example" src="../assets/recommend/img3.jpg" />
                <a-card-meta title="二甲双胍不良反应">
                  <template slot="description">
                    患者王先生，新诊断2型糖尿病，服用二甲双胍肠溶片控制血糖。口服二甲双胍后腹泻严重，咨询还能用什么药？
                    <a-button class="detail" size="small">详情>></a-button>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
      <div id="introduction">222</div>
      <div id="statistic">333</div>
      <div id="add">333</div>
    </div>
    <!-- 主体内容 -->
  </div>
</template>

<script>
// import ConsultList from './DrugConsult/ConsultList'
// import ConsultDetail from './DrugConsult/ConsultDetail'
export default {
  // components: { ConsultList, ConsultDetail },
  data () {
    return {
      targetOffset: undefined,
      searchway: '关键词',
      searchForm: {
        way: 2,
        search: '糖尿病',
        pagesize: 5,
        pagenum: 1
      },
      list: [],
      page: 1,
      total: 0,
      spin: false
    }
  },
  mounted () {
    this.targetOffset = window.innerHeight / 2
    this.getRecommend()
  },
  methods: {
    //* *******问题检索************** */
    async  onSearch () {
      if (this.searchForm.search === '') {
        return this.$message.warning('检索不能为空')
      }
      if (this.searchway === '关键词') {
        this.searchForm.way = 2
      } else {
        this.searchForm.way = 1
      }
      this.spin = true
      const { data: res } = await this.$http.post(`/index/resultlist?pagenum=${this.searchForm.pagenum}`, JSON.stringify(this.searchForm))
      console.log(res)
      this.list = res.data
      this.page = res.current_page
      this.total = res.total
      this.spin = false
      // this.$router.push('/consultList')
    },
    // 筛选变色
    showDate (val) {
      val = val + ''
      if (this.searchForm.search !== '') {
        return val.replace(this.searchForm.search, '<font color="red">' + this.searchForm.search + '</font>')
      } else {
        return val
      }
    },
    toDetail (id) {
      // this.$router.push({ path: `/consultDetail?id=${id}` })
      const { href } = this.$router.resolve({
        path: '/consultDetail',
        query: {
          id: id
        }
      })
      window.open(href, '_blank')
    },
    onChange (page) {
      this.searchForm.pagenum = page
      // console.log(this.searchForm)

      this.onSearch()
    },
    //* *******问题检索************** */
    //* *******问题推荐************** */
    async getRecommend () {
      const { data: res } = await this.$http.get('/index/recommend')
      console.log(res)
    }
    //* *******问题推荐************** */

  }
}
</script>

<style>
.banner {
  margin: 0 auto;
}
.container {
  min-width: 1200px;
}
.search {
  /* margin: 0 auto; */
  position: relative;
  left: 50%;
  top: -20px;
  transform: translateX(-300px);
  /* margin-left: -50%; */
}
.ant-input-search {
  float: left;
  max-width: 500px;
  border-radius: 20px;
}
.ant-anchor {
  position: fixed;
  left: 50%;
  margin-left: -600px;
  /* transform: translateX(-640%); */
  margin-top: 20px;
}
#search {
  min-height: 400px;
}
#recommond {
  background-color: #f5f5f5;
  min-height: 600px;
}
.recommond-main {
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
}
.detail {
  margin-top: 10px;
  float: right;
}
#introduction {
  min-height: 300px;
}
#statistic {
  min-height: 300px;
}
.search-content {
  width: 60%;
  margin: 0 auto;
  /* background-color: #ccc; */
}
.total {
  font-weight: 700;
  margin-left: 20px;
}
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
  color: #70acb7 !important;
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
  /* color: #6a9955 !important; */
  text-decoration: underline;
  /* background-color: #eee !important; */
}
.ant-pagination {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  /* transform: translateX(50%); */
}
h2 {
  padding-top: 20px;
  text-align: center;
}
</style>
