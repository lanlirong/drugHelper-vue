<template>
  <div>
    <img class="banner" src="../assets/banner3.png" alt="">
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
       <a-input-group  class="search" compact>
        <a-select  size="large" default-value="1">
        <a-select-option value="1">
          关键词
        </a-select-option>
        <a-select-option value="2">
          相关度
        </a-select-option>
        </a-select>
        <a-input-search shape="round"  size="large" placeholder="糖尿病"  @search="onSearch" />
        </a-input-group>
        <!-- 搜索框 -->
        <!-- 搜索内容 -->
        <div class="search-content">
          <consult-list></consult-list>
          <consult-detail></consult-detail>
        </div>
        <!-- 搜索内容 -->
    </div>
    <div id="recommond">111</div>
    <div id="introduction">222</div>
    <div id="statistic">333</div>
    <div id="add">333</div>

    </div>
    <!-- 主体内容 -->
    </div>
</template>

<script>
import ConsultList from './DrugConsult/ConsultList'
import ConsultDetail from './DrugConsult/ConsultDetail'
export default {
  components: { ConsultList, ConsultDetail },
  data () {
    return {
      targetOffset: undefined
    }
  },
  mounted () {
    this.targetOffset = window.innerHeight / 2
  },
  methods: {
    onSearch () {
    }
  }
}
</script>

<style>
.banner{
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
  background-color: #F5F5F5;
  min-height: 600px;
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
  background-color: #ccc;
}
</style>
