<template>
    <div class="topbar-wrapper">
        <div class="top-menu-bar">
             <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide 
                     v-for="(news, index) in newsList" 
                	:class="{'active': homeNewsIndex === index}" 
                	@click.native="active(index)" 
                	:key="index">
                    {{news.title}}
                </swiper-slide>
                
            </swiper>
        </div>
        <div class="add-icon">
            <i class="list-shadow"></i>
            <van-icon name="add-o" size="20px" color="#d2235a"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Icon } from 'vant';
export default {
    name:"topBar",
    components: {
        swiper,
        swiperSlide,
        [Icon.name]:Icon
    },
    data(){
        return { 
            swiperOption:{
                slidesPerView : 6
            }
        }
    },
    methods: {
            async active (index) {
                this.$store.state.home.newsIndex = index
                await this.$store.dispatch('getHomeList', this.newsList[this.homeNewsIndex])
            }
        },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        },
       ...mapGetters([
                'newsList',
                'homeNewsIndex'
            ])
    }
}
</script>

<style lang="less" scope>
    .topbar-wrapper {
       height: 85px;
       line-height: 85px;
       color: #363636;
       font-size: 32px;
       text-align: center;
       position: relative;
    //    background: #f4f5f6;
        background: #fff;
        .active {
            color: #d2235a;
        }
       .top-menu-bar {
           width: calc(100% - 85px);
           border-bottom: 1px solid #ddd; 
       }
       .add-icon {
           position: absolute;
           right:20px;
           top:15px;
       }
    }
</style>