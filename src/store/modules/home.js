import { titleList } from './classify'
import { Local } from '@/utils/storage'

import Vue from 'vue'
import axios from 'axios';
const home = {
    state:{
        newsList: (function(){
            //获取时再将其转换成对象
            let newList = JSON.parse(Local.get('newList')) || titleList.slice(0, 9);
            newList.forEach( news => {
                console.log(news)
                if (news.list) delete news.title
            })
             // 注意：存localStorage时需要转换成字符串，不能直接存对象
            Local.set('newList',  JSON.stringify(newList))
            console.log(newList)
            return newList
        })(),
        newsIndex: 0,
        newsPrevIndex: 0,
        newsLoading: false,
        end: false
    },

    mutations:{
        GETHOMELIST(state,list){
            state.newsList[state.newsIndex].list = list;
            // 动态添加数据
            // Vue.set(object, key, value) - 适用于添加单个属性
            Vue.prototype.$set(state.newsList,state.newsIndex,state.newsList[state.newsIndex])
        }
    },
    // 异步获取数据
    actions:{
        getHomeList ({commit, state}, params) {
            let obj = state.newsList.find(v => v.id == params.id)
            if (obj.list) return
            state.newsLoading = true
            return new Promise( (resolve, reject) => {
                axios.get('/api/homeList.json',params)
                    .then( res => {
                        console.log(res)
                        state.newsLoading = false
                        if (res.data.list.length < 7) {
                            state.end = true
                        }
                        commit('GETHOMELIST', res.data.list)
                    }).catch( err => {
                        console.log(err)
                    })
              })
        }
    }

}
export default home
