import axios from 'axios';
// import axios from '../../utils/https'

const goodlist = {
    state: {
        goodsList:[],
        bannerList:[],
        detailList: [],
       },
       getters: {},
       mutations: {
        //添加商品列表
        setGoodList(state,data){
            state.goodsList = data.goodsList;
            state.bannerList = data.bannerList; 
        },
       },
       actions: { //异步获取商品的信息
        loadGoodList({ commit }){  //在根组件mounted（）触发
              return new Promise( (resolve, reject) => {
                axios.get('/api/goodsList.json').then(function (response) {
                  commit('setGoodList',{
                    goodsList:response.data.goodsList,
                    bannerList:response.data.bannerList,
                  })
              })
            })
        }

       }
}

export default goodlist