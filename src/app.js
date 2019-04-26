import Vue from 'vue'
import Button from './button/button'
import Icon from "./icon"
import ButtonGtoup from './button/button-group'
import Input from './input'
import Col from './grid/col'
import Row from './grid/row'
import Layout from './layout/layout'
import Header from './layout/header'
import Sider from './layout/sider'
import Content from './layout/content'
import Footer from './layout/footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsItem from './tabs/tabs-item'
import TabsBody from './tabs/tabs-body'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGtoup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.use(plugin)

new Vue({
    el:"#app",
    data:{
        selectedTab: ['2','1']
    },
    created(){

    }
    ,
    methods:{
        yyy(){
            console.log('yyy')
        },

        showToast(position){
            this.$toast(`${parseInt(Math.random()*100)}`,{
                position,
                enableHtml: false,
                closeButton:{
                    text:'已充值',
                    callback(){
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose: 3
            })
        }
    }
})
