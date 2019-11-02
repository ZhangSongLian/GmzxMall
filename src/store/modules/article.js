import axios from 'axios' 

const article = {
    state :{
        articleInfo: {},
        pageLoading: false
    },
    mutations:{
        GETARTICLE(state,info) {
            state.articleInfo = info
        }
    },
    actions:{
        getArticle({commit, state}, params){
            return new Promise( (resolve, reject) => {
                axios.get('/api/homeList.json', params)
                    .then( res => {
                        console.log(res)
                        commit('GETARTICLE', res.data)
                        resolve(res.data)
                    }).catch( err => {
                        reject(err)
                    })
            }) 
        }
    }

}
export default article