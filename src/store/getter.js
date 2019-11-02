const getters = {
    //首页
    newsList: state => state.home.newsList,
    newsLoading: state => state.home.newsLoading,
    homeNewsIndex: state => state.home.newsIndex,
    homeNewsPrevIndex: state => state.home.newsPrevIndex,
    homeEnd: state => state.home.end,

    //商城
    goodsList:state => state.goodlist.goodsList,
    bannerList:state => state.goodlist.bannerList,
    //详情页
    detailList:state => state.goodlist.detailList,
    //购物车
    cartList:state => state.cart.cartList,
    cartInfo:state => state.cart.cartInfo,
    // 个人中心
    isLogin: state => state.user.isLogin,
    user:state => state.user.user
}

export default getters
