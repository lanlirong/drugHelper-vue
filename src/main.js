import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import {
  Button, Input, Layout, Menu, Icon, Select, Anchor, List, Avatar, Divider, Pagination, Spin, message, notification, PageHeader, Tabs, Tag, Row, Col, Card,
  Result, FormModel, Radio, Form
} from 'ant-design-vue'
// import { RadioGroup } from 'ant-design-vue/types/radio/radio-group'
// import { InputGroup } from 'ant-design-vue/types/input/input-group'
// import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1/index/'
Vue.prototype.$http = axios

Vue.prototype.$message = message
Vue.prototype.$notification = notification
message.config({
  duration: 2
})

Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Input.TextArea.name, Input.TextArea)
Vue.component(Layout.name, Layout)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Layout.Footer.name, Layout.Footer)
Vue.component(Layout.Sider.name, Layout.Sider)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Menu.SubMenu.name, Menu.SubMenu)
Vue.component(Menu.ItemGroup.name, Menu.ItemGroup)
Vue.component(Icon.name, Icon)
Vue.component(Input.Search.name, Input.Search)
Vue.component(Input.Group.name, Input.Group)
Vue.component(Select.name, Select)
Vue.component(Select.Option.name, Select.Option)
Vue.component(Anchor.name, Anchor)
Vue.component(Anchor.Link.name, Anchor.Link)
Vue.component(List.name, List)
Vue.component(List.Item.name, List.Item)
Vue.component(Avatar.name, Avatar)
Vue.component(Divider.name, Divider)
Vue.component(Pagination.name, Pagination)
Vue.component(Spin.name, Spin)
Vue.component(PageHeader.name, PageHeader)
Vue.component(Tabs.name, Tabs)
Vue.component(Tabs.TabPane.name, Tabs.TabPane)
Vue.component(Tag.name, Tag)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Card.name, Card)
Vue.component(Card.Meta.name, Card.Meta)
Vue.component(Result.name, Result)
Vue.component(FormModel.name, FormModel)
Vue.component(FormModel.Item.name, FormModel.Item)
Vue.component(Radio.name, Radio)
Vue.component(Radio.Group.name, Radio.Group)
Vue.component(Radio.Button.name, Radio.Button)
Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
