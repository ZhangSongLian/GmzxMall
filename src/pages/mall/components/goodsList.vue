<template>
    	<div class="warp clearfix" >
    		<router-link tag="div" class="goods" :to="'/detail/'+info.id">
    			  <img class="imgs" :src="info.goodsimgs" alt="">
			      <h3 class="title ellipsis">{{info.name}}</h3>
			      <span class="retailPrice">价格：￥{{info.price}}</span>
			      <span class="counterPrice">￥{{info.oldprice}}</span>
    		</router-link>
    	</div>
</template>

<script>

export default {
    name:'GoodsList',
    props:{
      info:Object
    }
}
</script>


<style lang="less" scoped>

@borderColor: #eee;
.warp {
  margin:12px;
  float: left;
   height: 423px;
	  width:46%;
  .goods {
	  align-content: left;
	  border: 1px solid @borderColor;
	  background: #fff;
	  padding:10px 20px;
    .imgs {
      width: 100%;
      height: 302px;
      z-index: 1;
    }
    .title {
      margin: 14px 0;
      font-size: 28px;
      color: #333;
    }
    .counterPrice {
      text-decoration: line-through;
      font-size: 22px;
      color: #999;
      margin-left:22px;
    }
    .retailPrice {
      font-size: 25px;
      color: #a78845;
    }
}

}
</style>
