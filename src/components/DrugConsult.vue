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
            <a-result v-show="visible" status="404" title="还没有检索结果" sub-title="请在上部搜索框中输入并检索"></a-result>
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
            <a-col :span="8" v-for=" item in recommendList" :key="item.id">
              <a-card hoverable>
                <img slot="cover" alt="example" :src="item.url" />
                <a-card-meta :title="item.K_type">
                  <template slot="description">
                    <span class="recommond-body">{{ item.Q_content }}</span>
                    <a-button class="detail" size="small" @click="toDetail(item.id)">详情>></a-button>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
      <div id="introduction">
        <h2>内容说明</h2>
        <h3>
          <a-spin />内容简介
        </h3>
        <p>本网站提供部分药品用法用量、用药禁忌、不良反应、相互作用等用药知识查询。数据库内容包括常见疾病的常见分类。每个问题除了问题解答，还提供相关知识的拓展讲解。</p>
        <a-divider></a-divider>
        <h3>
          <a-spin />使用介绍
        </h3>
        <p>您可在本网站各处搜索框输入您的内容或关键词进行筛选查询。搜索页主搜索框提供按相关度查询和按关键词查询两种方式，导航栏副搜索框默认按关键词查询。当按相关度查询时，系统会根据您输入内容的相关性排序展示，当按关键词查询时，系统会将您的输入内容作为一个关键词进行匹配。</p>
        <a-divider></a-divider>
        <h3>
          <a-spin />特别说明
        </h3>
        <p>本网站内容仅供查询参考, 若您有任何疑问或补充，欢迎在“补充纠错”栏给我们留言。</p>
        <a-divider></a-divider>
      </div>
      <div id="statistic">
        <h2>数据统计</h2>
        <!-- <h3>
          <a-spin />统计图
        </h3>-->
        <div id="chart1" style="width: 1000px; height: 400px;"></div>
        <a-row class="book">
          <a-col :span="12">
            <ul>
              <li class="adrs">《糖尿病用药咨询标准化手册 》 ISBN：978-7-117-24301-8</li>
              <li class="adrs">《脑血管病用药咨询标准化手册 》 ISBN: 978-7-117-24412-1</li>
              <li class="adrs">《乳腺肿瘤用药咨询标准化手册 》 ISBN: 978-7-117-24183-0</li>
              <li class="adrs">《中成药慢病管理用药咨询标准化手册 》 ISBN: 978-7-117-23156-5</li>
              <li class="adrs">《骨质疏松用药咨询标准化手册 》 ISBN: 978-7-117-24071-0</li>
              <li class="adrs">《精神分裂症用药咨询标准化手册 》 ISBN: 978-7-117-24136-6</li>
              <li class="adrs">《抑郁症用药咨询标准化手册 》 ISBN: 978-7-117-24195-3</li>
              <li class="adrs">《高血压用药咨询标准化手册 》 ISBN: 978-7-117-22143-6</li>
              <li class="adrs">《血栓栓塞性疾病用药咨询标准化手册 》 ISBN: 978-7-117-24135-9</li>
              <li class="adrs">《肿瘤化疗及支持治疗用药咨询标准化手册 》 ISBN: 978-7-117-24572-2</li>
              <li class="adrs">《戒烟管理用药咨询标准化手册 》 ISBN: 978-7-117-24155-7</li>
            </ul>
          </a-col>
          <a-col :span="12">
            <ul>
              <li class="adrs">《儿童哮喘用药咨询标准化手册 》 ISBN: 978-7-117-22429-1</li>
              <li class="adrs">《哮喘用药咨询标准化手册 》 ISBN: 978-7-117-24219-6</li>
              <li class="adrs">《消化道肿瘤用药咨询标准化手册 》 ISBN: 978-7-117-22741-4</li>
              <li class="adrs">《儿童保健用药咨询标准化手册 》 ISBN: 978-7-117-22761-2</li>
              <li class="adrs">《癌痛治疗用药咨询标准化手册 》 ISBN: 978-7-117-22754-4</li>
              <li class="adrs">《血脂异常用药咨询标准化手册 》 ISBN: 978-7-117-22144-3</li>
              <li class="adrs">《妊娠及哺乳期用药咨询标准化手册 》 ISBN: 978-7-117-22665-3</li>
              <li class="adrs">《中药煎煮用药咨询标准化手册 》 ISBN: 978-7-117-23157-2</li>
              <li class="adrs">《结核病用药咨询标准化手册 》 ISBN: 978-7-117-22431-4</li>
              <li class="adrs">《消化系统疾病用药咨询标准化手册 》 ISBN: 978-7-117-22383-6</li>
              <li class="adrs">《眼科、耳鼻咽喉头颅外科用药咨询标准化手册》 ISBN: 978-7-117-22430-7</li>
            </ul>
          </a-col>
        </a-row>
      </div>
      <div id="add">
        <h2>补充纠错</h2>
        <a-tabs default-active-key="1">
          <a-tab-pane key="1">
            <span slot="tab">
              <a-icon type="apple" />补充
            </span>
            <!-- 补充表单 -->
            <a-form-model
              ref="ruleForm"
              :model="form"
              :rules="rules"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <a-form-model-item label="问题详情" prop="Q_content">
                <a-input v-model="form.Q_content" type="textarea" />
              </a-form-model-item>
              <a-form-model-item ref="label" label="问题标签" prop="label">
                <a-input
                  v-model="form.label"
                  @blur="
          () => {
            $refs.label.onFieldBlur();
          }
        "
                />
              </a-form-model-item>
              <a-form-model-item label="参考材料">
                <a-input v-model="form.Q_content" type="textarea" />
              </a-form-model-item>
              <a-form-model-item label="问题回答" prop="Q_answer">
                <a-input v-model="form.Q_answer" type="textarea" />
              </a-form-model-item>
              <a-form-model-item label="知识拓展">
                <a-input v-model="form.Q_content" type="textarea" />
              </a-form-model-item>
              <a-form-model-item label="其他说明">
                <a-input v-model="form.Q_content" type="textarea" />
              </a-form-model-item>
              <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit">提交</a-button>
                <a-button style="margin-left: 10px;" @click="resetForm">重置</a-button>
              </a-form-model-item>
            </a-form-model>
            <!-- 补充表单 -->
          </a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">
              <a-icon type="android" />纠错
            </span>
            <a-form-model
              ref="errorForm"
              :model="errorform"
              :rules="errorRules"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <a-form-model-item label="错误信息" prop="error">
                <a-input v-model="errorform.error" type="textarea" />
              </a-form-model-item>
               <a-form-model-item label="纠正内容" prop="explain">
                <a-input v-model="errorform.explain" type="textarea" />
              </a-form-model-item>
               <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="errorSubmit">提交</a-button>
                <a-button style="margin-left: 10px;" @click="errorReset">重置</a-button>
              </a-form-model-item>
            </a-form-model>
          </a-tab-pane>
        </a-tabs>
        <!-- <a-form layout="horizontal">
          <a-form-item
            label="Form Layout"

          >
            <a-radio-group default-value="horizontal" >
              <a-radio-button value="horizontal">补充</a-radio-button>
              <a-radio-button value="inline">纠错</a-radio-button>
            </a-radio-group>
          </a-form-item>
        </a-form>-->
      </div>
    </div>
    <!-- 主体内容 -->
  </div>
</template>

<script>
import echarts from 'echarts'
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
      spin: false,
      // 推荐
      recommend: [],
      recommendList: [],
      visible: true,
      formLayout: 'horizontal',
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        Q_content: '',
        label: '',
        Q_answer: ''
      },
      rules: {
        Q_content: [
          { required: true, message: '输入不能为空', trigger: 'blur' }
        ],
        label: [
          { min: 1, max: 10, message: '长度在1-10之间', trigger: 'blur' }
        ],
        Q_answer: [
          { required: true, message: '输入不能为空', trigger: 'blur' }
        ]
      },
      errorform: {
        error: '',
        explain: ''

      },
      errorRules: {
        error: [
          { required: true, message: '输入不能为空', trigger: 'blur' }
        ],
        explain: [
          { required: true, message: '输入不能为空', trigger: 'blur' }

        ]
      }
    }
  },
  mounted () {
    this.targetOffset = window.innerHeight / 2
    this.getRecommend()
    this.recommendList = this.recommend
    var myChart = echarts.init(document.getElementById('chart1'))
    var dataAxis = [
      '糖尿病', '脑血管病', '乳腺肿瘤', '中成药慢病管理', '骨质疏松',
      '精神分裂症', '抑郁症', '高血压', '血栓栓塞性疾病', '肿瘤化疗及支持治疗', '戒烟管理用药', '儿童哮喘用药', '哮喘用药', '消化道肿瘤用药', '眼科、耳鼻咽喉头颅外科', '儿童保健用药', '癌痛治疗用药', '血脂异常用药', '妊娠及哺乳期用药', '中药煎煮用药', '结核病用药', '消化系统疾病用药'
    ]
    var data = [50, 41, 50, 48, 42, 47, 106, 52, 50, 45, 50, 45, 40, 56, 50, 43, 43, 50, 54, 60, 64, 42]
    var yMax = 100
    var dataShadow = []

    for (var i = 0; i < data.length; i++) {
      dataShadow.push(yMax)
    }

    var option = {
      title: {
        text: '数据统计'
        // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: false,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            color: 'rgba(0,0,0,0.05)'
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: true
        },
        {
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ]
            )
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ]
              )
            }
          },
          data: data
        }
      ],
      aspectRatio: 3.5,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{

          categoryPercentage: 0.5,
          gridLines: {
            color: 'transparent'
          },
          scaleLabel: {
            display: true,
            labelString: '参考书籍'
          }
        }],
        yAxes: [{
          gridLines: {
            color: 'transparent'
          },
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: '问题数目'
          }
        }]
      }
    }

    // Enable data zoom when user click bar.
    var zoomSize = 6
    myChart.on('click', function (params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)])
      myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      })
    })
    myChart.setOption(option)
    // console.log(this.recommendList)
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
      // console.log(res)
      if (res.data.length === 0) {
        this.visible = true
      } else {
        this.visible = false
      }
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
      this.onSearch()
    },
    //* *******问题检索************** */
    //* *******问题推荐************** */
    async getRecommend () {
      const { data: res } = await this.$http.get('/index/recommend')
      this.recommend = res
      this.recommend.forEach(async item => {
        const { data: res } = await this.$http.get(`/index/detail?id=${item.id}`)
        // console.log(res)
        let result = {}
        result = res
        result.url = require('../assets/recommend/' + item.url)
        this.recommendList.push(result)
        // item.url = '../assets/recommend/img3.jpg'
      })
    },
    //* *******问题推荐************** */
    //* *******补充************** */
    onSubmit () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm () {
      this.$refs.ruleForm.resetFields()
    },
    errorSubmit () {
      this.$refs.errorRule.validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    errorReset () {
      this.$refs.errorRule.resetFields()
    }
    //* *******补充************** */

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
  max-width: 1000px;
  margin: 0 auto;
  min-height: 300px;
  padding-top: 20px;
}
#statistic {
  min-height: 300px;
  max-width: 1000px;
  margin: 0 auto;
  /* background-color: #ccc; */
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
.ant-card {
  height: 400px;
}
.recommond-body {
  min-height: 84px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
#introduction h3 {
  font-weight: 700;
  color: #448885;
}
#introduction .ant-spin {
  padding-right: 10px;
}
#introduction p {
  color: #868686;
}
.book li {
  list-style: none;
  color: #868686;
  line-height: 30px;
}
#add {
  max-width: 1000px;
  min-height: 400px;
  margin: 10px auto;
}
</style>
