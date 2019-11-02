<template>
	<div class="container" @click="handleGallayClick">
		<div class="wrapper">
            <!-- https://github.com/surmon-china/vue-awesome-swiper -->
			<swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="swiper-img" :src="item" alt=""/>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
		    </div>
	</div>
</template>

<script>
	export default {
	 name:"Gallary",
		props:{
			imgs: {
            type:Array,
            default() {
                return ['https://wx-gmzx.oss-cn-shenzhen.aliyuncs.com/images/wxapp/products/banner/doctor.jpg',
                'https://wx-gmzx.oss-cn-shenzhen.aliyuncs.com/images/wxapp/products/banner/doctor.jpg']
            }
            }
        },
		data(){
			return{
				swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },
                    observer:true,
                    observeParents:true
       			}
			}
		},
		methods:{
			handleGallayClick(){
				this.$emit('close');
            }
        },
	}
</script>
 
<style lang="stylus" scoped>
   .container >>>.swiper-container {
        overflow:inherit
    }
    .container
        display:flex
        flex-direction:column
        justify-content:center
        position: fixed
        left:0
        right:0
        top:0
        bottom:0
        background:#fff
        .wrapper 
         height:0
         width 100%
         padding-bottom:100%
         .swiper-img {
             width 100% 
         }

          
</style>

