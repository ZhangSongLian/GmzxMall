import { Cookie } from '@/utils/storage'
// import { Cookie } from '../../utils/storage'
import axios from '../../utils/https';

const user = {
    state:{
        isLogin:false,
        user:{
            name:Cookie.get("username") || "",
            headImg:Cookie.get("headImg") || "",
        },
    },
    
    actions:{
        login({ commit },data){
            return new Promise((resolve,reject)=>{
                axios.post('/login',data)
                .then( res => {
                    console.log(res.data)
                    commit('LOGIN',res.data) 
                    resolve(res.data)
                }).catch( err => {
                    reject(err)
                })
            })
        },
        esc ({ commit }) {
            commit('ESC')
        }
    },

    mutations:{
        // 获取state中的数据
        LOGIN(state,data){
            state.user={
               name: data.username,
               headImg:require('../../assets/img/headimg.png')
            }
            //用Cookie设置存储的值
            Cookie.set({
                username: data.username,
                headImg:require('../../assets/img/headimg.png')
            })
        },

        ESC(state){
            state.user={
                name: '',
                headImg:''
             }
             Cookie.remove(['username', 'headImg'])
        }


    }
}
export default user