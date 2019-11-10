import HeaderNav from './components/header'
import ArrowHeader from './components/ArrowHeader'
import NoneData from './components/NoneData'
import backTop from './components/backTop'

const install = Vue => {
    Vue.component('HeaderNav', HeaderNav)
    Vue.component('ArrowHeader', ArrowHeader)
    Vue.component('NoneData', NoneData)
    Vue.component('backTop', backTop)
    
}

export default install