import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Button from 'ant-design-vue/lib/button'
import { Button, Input, Layout, Menu, Icon, Select, Anchor, List, Avatar, Divider } from 'ant-design-vue'
// import { InputGroup } from 'ant-design-vue/types/input/input-group'
// import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
