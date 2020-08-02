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
     <a-sub-menu v-show = '!isLogin'>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="user" />登录/注册</span
        >
          <a-menu-item key="setting:1" @click="showLogin">
            登录
          </a-menu-item>
          <a-menu-item key="setting:2" @click="showRegister">
            注册
          </a-menu-item>
      </a-sub-menu>
      <a-sub-menu v-show = 'isLogin'>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="user" />你好，{{userInfo.username}}</span
        >
          <a-menu-item key="setting:1" @click="showUserInfo">
            个人中心
          </a-menu-item>
        <a-menu-item key="setting:2">
          消息中心
        </a-menu-item>
          <a-menu-item key="setting:3" @click="logout">
            退出
          </a-menu-item>
      </a-sub-menu>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ marginTop: '70px' }">
      <!-- <div class="banner"></div> -->
       <transition mode="out-in">
       <router-view></router-view>
      </transition>
      <!-- <div class="content"></div> -->
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2019 Created by cpu Llr
    </a-layout-footer>
  </a-layout>
    <!--登录对话框-->
    <a-modal v-model="visible" okText="登录" cancelText="取消" title="登录" @ok="login">
      <a-form-model
        ref="ruleForm"
        :model="loginForm"
        :rules="loginRules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="name" label="登录名" prop="name">
          <a-input
            v-model="loginForm.name"
            @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="password" label="密码" prop="password">
          <a-input
            type="password"
            v-model="loginForm.password"
            @blur="
          () => {
            $refs.password.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-row>
          <a-col :span="labelCol.span">
          </a-col>
          <a-col :span="wrapperCol.span">
            <a-checkbox
              v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
            >
              记住我
            </a-checkbox>
            <a class="login-form-forgot" href="#">
              忘记密码?
            </a>
          </a-col>
        </a-row>

      </a-form-model>
    </a-modal>
    <!--登录对话框-->
    <!--注册对话框-->
    <a-modal v-model="registerVisible" okText="注册" cancelText="取消" title="注册" @ok="register">
      <a-form-model
        ref="registerRuleForm"
        :model="registerForm"
        :rules="registerRules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="username" label="登录名" prop="username">
          <a-input
            v-model="registerForm.username"
            @blur="
          () => {
            $refs.username.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="password" label="密码" prop="password">
          <a-input-password placeholder=""  v-model="registerForm.password"
                            @blur="
          () => {
            $refs.password.onFieldBlur();
          }
        "/>

        </a-form-model-item>
        <a-form-model-item label="姓名">
          <a-input v-model="registerForm.name" />
        </a-form-model-item>
        <a-form-model-item label="性别">
          <a-radio-group v-model="registerForm.sex">
            <a-radio value="男">
              男
            </a-radio>
            <a-radio value="女">
              女
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="电话">
          <a-input v-model="registerForm.tel" />
        </a-form-model-item>
        <a-form-model-item label="邮箱">
          <a-input v-model="registerForm.email" />
        </a-form-model-item>
        <a-form-model-item label="职业">
          <a-input v-model="registerForm.job" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
    <!--注册对话框-->
<!--个人信息抽屉-->
    <a-drawer
      :title="userInfo.username"
      placement="right"
      :closable="true"
      :visible="userInfoVisible"
      @close="onClose"
    >
      <h3 class="title-drawer">基本信息</h3>
      <p>姓名： {{userInfo.name}}</p>
      <!--<h5></h5>-->
      <p>性别： {{userInfo.sex}}</p>
      <p>执业： {{userInfo.job}}</p>
      <p>电话： {{userInfo.tel}}</p>
      <p>邮箱： {{userInfo.email}}</p>
      <a-divider />
      <h3 class="title-drawer">其他</h3>
      <p>账号等级：<a-tag color="red">
        L5
      </a-tag> </p>

        <div class="setting">
      <a-button type="primary" class="setting-button">
        编辑
      </a-button>
      <a-button type="primary" class="setting-button">
        重置密码
      </a-button>
    </div>

    </a-drawer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import AFormModelItem from 'ant-design-vue/es/form-model/FormItem'
export default {
  name: 'Home',
  components: {
    AFormModelItem
    // HelloWorld
  },
  data () {
    return {
      current: ['index'],
      visible: false,
      isLogin: false,
      registerVisible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      loginForm: {
        name: 'user1',
        password: '123456'
      },
      loginRules: {
        name: [
          {
            required: true,
            message: '请输入登录名',
            trigger: 'blur'
          },
          {
            max: 10,
            message: '最大长度为10',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 20,
            message: '长度6-20',
            trigger: 'blur'
          }
        ]
      },
      registerForm: {
        username: 'user2',
        password: '123456',
        name: '张三',
        sex: '男',
        tel: '18113484856',
        email: '2342456322@qq.com',
        job: '医生'
      },
      registerRules: {
        username: [
          {
            required: true,
            message: '请输入登录名',
            trigger: 'blur'
          },
          {
            max: 10,
            message: '最大长度为10',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 20,
            message: '长度6-20',
            trigger: 'blur'
          }
        ]
      },
      userInfo: {},
      userInfoVisible: false
    }
  },
  created () {
    if (sessionStorage.getItem('current')) {
      this.current[0] = sessionStorage.getItem('current')
    } else {
      this.current[0] = 'index'
    }
    if (localStorage.getItem('userinfo')) {
      this.userInfo = JSON.parse(localStorage.getItem('userinfo'))
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },
  methods: {
    toThis (path) {
      this.$router.push('/' + path)
      sessionStorage.setItem('current', path)
    },
    showLogin () {
      this.visible = true
    },
    showRegister () {
      this.registerVisible = true
    },
    async login () {
      console.log(this.loginForm)
      const { data: res } = await this.$http.post('/Userinfo/login', JSON.stringify(this.loginForm))
      console.log(res)
      if (res.status === 200) {
        this.$message.success(res.msg)
        this.userInfo = res.data
        localStorage.setItem('userinfo', JSON.stringify(this.userInfo))
        // console.log(this.userInfo.username)
        this.isLogin = true
      }
      this.visible = false
    },
    async register () {
      console.log(this.registerForm)
      const { data: res } = await this.$http.post('/Userinfo/register', JSON.stringify(this.registerForm))
      console.log(res)
      if (res.status === 200) {
        this.$message.success(res.msg)
        this.registerVisible = false
        this.visible = true
        // console.log(this.userInfo.username)
      } else {
        this.$message.error(res.msg)
      }
      // this.visible = false
    },
    onClose () {
      this.userInfoVisible = false
    },
    showUserInfo () {
      this.userInfoVisible = true
    },
    logout () {
      this.isLogin = false
      localStorage.clear()
      this.$message.success('已退出当前账号')
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
.title-drawer {
  color: #448885;
}
.setting {
  margin-top: 30px;
  margin-top: 10vh;
  text-align: center;

}
.setting .setting-button {
  margin-right: 10px;
}
.ant-layout-header {
  background-color: #fff;
}
.ant-layout-content {
  width: 100%;
  /* min-width: 1200px; */
  /* min-height: 1500px; */
  margin: 0 auto;
  background-color: #fff;
}
.ant-menu-horizontal {
  border-bottom: 0;
}
.ant-layout-footer {
/* background-color: #448885; */
}
/* 过渡*/
   .v-enter,.v-leave-to{
            opacity: 0;
            transform: translateY(50px);
        }
        .v-enter-active,.v-leave-active{
            transition: all 0.3s ease;
        }
</style>
