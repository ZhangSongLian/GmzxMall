<template>
    <article class="article-wrapper">
        <ArrowHeader :title="title"></ArrowHeader>
        <div class="article-content">
            <div class="info df-sb">
                <div class="info-a">
                    <div class="avatar bg-cover-all" :style="{ backgroundImage: `url(${articleInfo.headimg})`}"></div>
                    <div>
                        <h3>{{articleInfo.name}}</h3>
                        <time>11小时前</time>
                    </div>
                </div>
                <div class="like-box" 
                    :class="articleInfo.attention?'like-n':'like-y'"
                    @click="articleInfo.attention = !articleInfo.attention">
                    {{articleInfo.attention?'已关注':'关注'}}
                </div>
            </div>
            <div class="content">
                <img :src="articleInfo.images" alt="">
                <h2 class="red">{{articleInfo.classify}}</h2>
                <div class="text">
                    {{articleInfo.intro}}
                </div>
                <div class="tg">
                    <a href="javascript:;" style="color: #e75629;">#{{articleInfo.classify}}</a>
                    <a href="javascript:;">医美整形</a>
                </div>
            </div>
            <div class="comment">
                <h3 class="comment-title">评论</h3>
                <div class="info-a border-bt pdt10" style="width:100%;">
                    <div class="avatar bg-cover-all" :style="{ backgroundImage: `url(${articleInfo.headimg})`}"></div>
                    <div> 
                        <p>{{articleInfo.name}}</p>
                        <p>真好看</p>
                    </div>
                </div>
                <div class="comment-text df-sb"> 
                    <input type="text" name="" id="" placeholder="你的评论将由作者筛选后显示">
                    <span style="color:#cc0031;">发布</span>
                </div>
            </div>
     </div>
    </article>
</template>

<script>
    import axios from 'axios' 
    import { mapGetters } from 'vuex'
   import { Icon } from 'vant';
    export default {
        name:'article',
        components:{
            [Icon.name]:Icon,
        },
        
        data(){
            return{ 
                title:"内容",
                id: parseInt(this.$route.params.id),
                articleInfo: {},
                pageLoading: false
            }
        },
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
    }
</script>

<style lang="less">
    .article-wrapper {
        overflow-y: scroll;
        img{
            width: 100%;
            height: 100%;
        }
    .article-content {
        // width: 100%;
        height: 100%;
        padding: 15px;
        background: #fff;
        overflow-y: scroll;
    }
    .info {
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
                border: 1px solid #fff;
            }
        }
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
        .content {
            margin-bottom: 20px;
             .text {
                font-size: 30px;
                line-height: 48px;
            }  
            .tg {
                color: #999999;
                margin-top: 30px;
                padding: 20px 0;
            
            }
            .tg a {
                display: inline-block;
                padding: 5px 8px;
                margin-right: 15px;
                background: #eeeeee;
                color: #999999;
                font-size: 26px;
                border-radius: 14px;
            
            }
        }

        .comment {
             padding: 20px 0;
             border-top: 1px solid #9999;
             .comment-title {
                 padding: 20px 0;
             }
             .comment-text {
                   padding: 20px 10px;
               input {
                   width: 88%;
                   padding-left: 15px;
                   height: 55px;
                    border: 1px solid #f0f2f7;
                    background-color: #f0f2f7;
                     border-radius: 4px;
               }
             }
         }
        

    }

</style>