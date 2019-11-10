<template>
	<div class="container">
		 
	</div>
</template>


<script>
 
export default {
	name:"MallClassify",
	data(){
		return{
			
		}
	},
	methods:{
    	
    },
    mounted(){
    	
    }
    
	
}
</script>

<style lang="less">
@bgcolor:#e22968;

.ellipsis {
	white-space: nowrap;
	 overflow: hidden;
	 text-overflow: ellipsis;
}
.cate {
	position: absolute;
    top: 43px;
    content: '';
    width: 70px;
    height: 4px;
    background: #d4d4d4;
}

.container {
	.el-tabs--left, .el-tabs--right {
	 overflow: initial;
	}
	.el-tabs--left .el-tabs__header.is-left {
		width: 25%;
		margin-right: 0;
	}
	.el-tabs__item {
		width: 100%;
		&:extend(.ellipsis);
	}
	.el-tabs__active-bar  {
		background-color: @bgcolor;
	}
	.el-tabs__item.is-active {
		color: @bgcolor !important;
		background: #fff;
	}
	.goods {
		width: 91%;
		padding: 20px 15px;
		display: flex;
		justify-content: flex-start;
		margin: 15px 0 0px 10px;
		border-bottom: 1px solid #E4E4E4;
		.imgs {
			width: 125px;
			height: 125px;
		}
		.right {
			width: 65%;
			margin-left: 10px;
			 .title {
		      margin: 14px 0;
		      &:extend(.ellipsis);
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
	.cate-title{
	    position: relative;
	    height: 30px;
	    line-height: 30px;
	    padding:30px 0 55px;
	    text-align: center;
	    color: #d4d4d4;
	    font-size: 28px;
	}
	.cate-title::before{
	    &:extend(.cate);
	    left: 90px;   
	}
	.cate-title::after{
	   	&:extend(.cate);
	    right: 100px;  
	}

}
	
	
</style>