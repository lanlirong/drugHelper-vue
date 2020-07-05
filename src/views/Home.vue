<template>
  <div class="home">
    <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <h1 class="logo">
        <img src="../assets/logo.png" alt="用药师助手">
      </h1>
      <a-menu class="menu" v-model="current" mode="horizontal">
      <a-menu-item key="index" @click="toThis('index')"> <a-icon type="home" />首页</a-menu-item>
      <a-menu-item key="drugconsult"  @click="toThis('drugconsult')"><a-icon type="medicine-box" />用药咨询</a-menu-item>
      <a-menu-item key="introduction"  @click="toThis('introduction')"> <a-icon type="search" />药学检索</a-menu-item>
      <a-menu-item key="2"  ><a-icon type="file-search" />疾病解读</a-menu-item>
      <a-menu-item key="3"  > <a-icon type="sound" />科普宣教</a-menu-item>
     <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="user" />登录/注册</span
        >
          <a-menu-item key="setting:1">
            登录
          </a-menu-item>
          <a-menu-item key="setting:2">
            注册
          </a-menu-item>
      </a-sub-menu>
      <!-- <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="user" />会飞的猫</span
        >
          <a-menu-item key="setting:1">
            个人中心
          </a-menu-item>
          <a-menu-item key="setting:2">
            退出
          </a-menu-item>
      </a-sub-menu> -->
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ marginTop: '70px' }">
      <!-- <div class="banner"></div> -->
       <router-view></router-view>
      <!-- <div class="content"></div> -->
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2019 Created by cpu Llr
    </a-layout-footer>
  </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      current: ['index']
    }
  },
  created () {
    if (sessionStorage.getItem('current')) {
      this.current[0] = sessionStorage.getItem('current')
    } else {
      this.current[0] = 'index'
    }
  },
  methods: {
    toThis (path) {
      this.$router.push('/' + path)
      sessionStorage.setItem('current', path)
    }
  }
}
</script>

<style scoped>
.ant-layout {
  background-color: #fff;
}
.ant-layout-header {
 border-top: 5px solid #448885;
 height: 70px;
 box-shadow: 3px 3px 3px #ccc;
}
/* .home {
  min-width: 1000px;
} */
.ant-layout-header {
  min-width: 1200px;
}
 .logo img{
  height: 64px;
  margin: 0 20px;
  float: left;
}
.menu {
  float: right;
}
.ant-layout-header {
  background-color: #fff;
}
.ant-layout-content {
  width: 100%;
  /* min-width: 1200px; */
  min-height: 1500px;
  margin: 0 auto;
  background-color: #fff;
}
.ant-menu-horizontal {
  border-bottom: 0;
}
.ant-layout-footer {
/* background-color: #448885; */
}
</style>
