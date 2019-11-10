<template>
	<div class="backTop df-c" v-if="btnFlag" @click="backTop">
		<img src="../assets/img/backtop.png" alt="">
	</div>
</template>

<script>

export default {
	name:"backTop",
	data(){
		return {
            btnFlag :false,
            scrollTop:0
		}
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop)
    },

	methods:{
		// 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop () {
            // const that = this
            let timer = setInterval(() => {
                let ispeed = Math.floor(-this.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
                if (this.scrollTop === 0) {
                    clearInterval(timer)
                }
            }, 16)
        },
 
        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop () {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            this.scrollTop = scrollTop
            if (this.scrollTop > 60) {
             this.btnFlag = true
            } else {
             this.btnFlag = false
            }
        }

	}
}
</script>

<style lang="less" scoped>
    .backTop {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #dbdbdb;
        border: 2px solid #8a8a8a;
        opacity: 0.7;
        z-index: 999;
        position: fixed;
        right: 20px;
        bottom: 15%;
    }
</style>