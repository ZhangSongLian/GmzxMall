<template>
    <article class="home-wrapper">
     	<header-nav :title="title"></header-nav>
        <top-bar></top-bar>
        <!-- loading -->
        <div class="load df-c">
             <van-loading type="spinner" color="#1989fa" v-show="newsLoading"/>
        </div>
        <!-- content -->
        <swiper ref="swiper-wrapper" id="swiper-container" @slideChangeTransitionEnd="end">
            <swiper-slide v-for="(news,index) in newsList" :key="index">
                <section class="swiper-box">
                    <ul>
                        <li v-for="item in news.list" @click="articleDetail($router,item.id)" class="item">
                           <div class="diary-top">
                                <div class="left">
                                    <div class="head-port">
                                        <img :src="item.headimg" alt="">
                                    </div>
                                    <div><h2>{{item.name}}</h2><em></em><a href="javascript:;">{{item.classify}}</a></div>
                                </div>
                                <div class="right">
                                    <span><van-icon name="browsing-history-o" /></i>浏览 {{item.preview}}</span>
                                    <span><van-icon name="chat-o" />评论 {{item.comment}}</span>
                                </div>
                            </div>
                            <div class="diary-text mult_line_ellipsis">{{item.intro}}</div>
                            <div class="diary-pic"><img :src="item.images" alt="" /></div>
                        </li>
                    </ul>
                     <NoneData v-if="news.list"></NoneData>
                </section>
            </swiper-slide>
        </swiper>
        <backTop></backTop>
    </article>
</template>

<script>

import axios from 'axios'
import { mapGetters } from 'vuex'
import topBar from './components/topBar'
import { Icon, Loading } from 'vant'

export default {
  name: 'home',
  components: {
    topBar,
    [Icon.name]: Icon,
    [Loading.name]: Loading
  },
  data () {
    return {
      title: '首页'
    }
  },
  methods: {
    async end () {
      this.$store.state.home.newsIndex = this.swiper.activeIndex // 当前活动块的索引
      this.$store.state.home.newsPrevIndex = this.swiper.previousIndex // 返回上一个活动块的索引，切换前的索引
      const data = await this.$store.dispatch('getHomeList', this.newsList[this.homeNewsIndex])
    },

    // 跳转到详情页
    articleDetail (route, id) {
      //  this.$router.push({name: '文章详情', params: {id: id}})
      route.push('/Article/' + id)
    }
  },
  computed: {
    swiper () {
      return this.$refs['swiper-wrapper'].swiper
    },
    ...mapGetters([
      'newsList',
      'newsLoading',
      'homeNewsIndex',
      'homeNewsPrevIndex',
      'homeEnd'
    ])
  },

  watch: { // 监听homeNewsIndex的变化也就是滑块的index
    homeNewsIndex () {
      this.swiper.slideTo(this.homeNewsIndex)
    }
  },

  created () {
    this.$store.dispatch('getHomeList', this.newsList[this.homeNewsIndex])
  }

}
</script>

<style lang="less" scoped>
    .flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    img {
        width: 100%;
        height: 100%;
    }

    .home-wrapper {
         overflow-y: scroll;
    }
    .load {
        width: 100%;
        height: 40%;
        position: absolute;
        left: 0;top: 110px;
    }
    #swiper-container {
            width: 100%;
            height: calc(100% - 65px);
            .swiper-box {
               width: 100%;
                height: 100%;
                overflow-y: scroll;
                .item {
                  padding: 0 20px;
                  margin-top: 10px;
                 .diary-top {
                    font-size: 23px;
                    padding: 20px 0;
                    height: 65px;
                    &:extend(.flex);
                    .left {
                        width: 270px;
                        &:extend(.flex);
                        h2 {
                            font-size: 32px;
                        }
                        a {
                            font-size: 24px;
                            color: #d2235a;
                        }
                        .head-port {
                            width: 65px;
                            height: 65px;
                            img {
                                border-radius: 50%;
                            }
                        }
                    }
                    .right {
                        width:258px;
                        color: #a6a6a6;
                        &:extend(.flex);
                    }
                }
                .diary-text{
                    font-size: 28px;
                    line-height: 42px;
                }
                .diary-pic{
                    padding: 20px 0;
                    width: 707px;
                    height: 349px;

                }
            }
        }
    }
</style>
