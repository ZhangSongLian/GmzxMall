<template>
    <article class="article-wrapper">
        <ArrowHeader :title="title"></ArrowHeader>

        <h2 style="padding:15px">ID:{{id}}</h2>
        <div class="info df-sb">
            <div class="info-a">
                <div class="avatar bg-cover-all" :style="{ backgroundImage: `url(${articleInfo.headimg})`}"></div>
                <div>
                    <h3>{{articleInfo.name}}</h3>
                    <time>11小时前</time>
                </div>
            </div>
            <!-- <div class="like-box" 
                :class="articleInfo.attention?'like-n border-half':'like-y'"
                @click="articleInfo.attention = !articleInfo.attention">
                 {{articleInfo.attention?'已关注':'关注'}}
             </div>  -->
            <div class="like-box like-y" :class="">关注</div>
        </div>
        <div class="content">
             <img :src="articleInfo.images" alt="">
             <h2 class="red">{{articleInfo.classify}}</h2>
             <div class="text">
                {{articleInfo.intro}}
             </div>
             <div class="tg">
                <span>所属标签</span>
                <a href="javascript:;" style="color: #e75629;">{{articleInfo.classify}}</a>
                <a href="javascript:;">双眼皮</a>
            </div>
        </div>

    </article>
</template>

<script>
    import axios from 'axios' 
    import { mapGetters } from 'vuex'
    import ArrowHeader from '../../components/ArrowHeader'
    export default {
         name:'article',
         components:{
             ArrowHeader
         },
        data(){
            return{ 
                title:"内容",
                id: parseInt(this.$route.params.id),
                articleInfo: {},
                pageLoading: false
            }
        },
        // computed: {
        //     ...mapGetters([
        //         'articleInfo'
        //     ])
        // },
        methods: {
            getArticle(){
                return new Promise((resolve,reject) => {
                    axios.get('/api/homeList.json')
                    .then((res) => {
                        res = res.data
                        this.articleInfo = res.list.find(item => {
                            console.log(item)
                            return item.id === this.id
                        })
                    })
                })
            }
        },

        async created() {
           await this.getArticle()
        },
        
        //   async created () {
        //     await this.$store.dispatch('getArticle', {id: this.$route.params.id})
        // },
    }
</script>

<style lang="less">
    .article-wrapper {
        img{
            width: 100%;
            height: 100%;
        }
    .info {
           padding: 20px;
            .info-a {
                >* {
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 28px;
                }
                time {
                    color: #ccc;
                }
                .avatar {
                    width: 75px;
                    height: 75px;
                    border-radius: 50%;
                    background: red;
                    background-size: 100% 100%;
                   
                }
            }
            .like-box {
                padding: 6px 15px;
                border-radius: 4px;
                font-size: 28px;

            }
            .like-y {
                color: #f4f4f4;
                background-color: #d43d3d;

            }
            .like-n {
                color: #bbb;
            }
        }

        .content{
            padding: 10px;
             .text {
                font-size: 30px;
                line-height: 48px;
            }  
        }
         
        .tg {
            color: #999999;
            margin-top: 30px;
            padding: 20px 0;
           
        }
        .tg a {
            color: #999999;
            margin-left: 10px;
            font-size: 30px;
        }

    }

</style>