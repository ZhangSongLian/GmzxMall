import axios from 'axios';
const cart = {
    state: {
        cartList:[],
        cartInfo:[],
        subOrderList:[]
       },
       getters:{
          productDictList(state){
            const dict = {};
            state.cartInfo.forEach(item => {
              dict[item.id] = item
            })
            console.log(dict)
            return dict
          }
       },
       mutations: {
        //添加到购物车
        addCart(state,id){
          //先判断购物车是否有，如果有，数量加1
          let isAdded = state.cartList.find(item => item.id === id);
          if(isAdded){
            isAdded.count++
          }else {
            state.cartList.push({
              id:id,
              count:1
            })
          }
        },
        setCartInfo(state,data){
            state.cartInfo = data.cartInfo;
        }
        
       },
       actions:{
          getCart(store){
            return new Promise((resolve,reject) =>{
              axios.get('/api/goodsList.json')
              .then(response => {
                store.commit('setCartInfo',{
                  cartInfo:response.data.goodsList
                })
              })
            })
          }
      }
    
}

export default cart