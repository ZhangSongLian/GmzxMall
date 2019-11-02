<template>
<div>
    <arrow-header :title="title"></arrow-header>
    <div class="container">
        <router-link to="/address">
            <van-cell title="新增收获地址" icon="plus">
            <van-icon
                slot="right-icon"
                name="arrow"
                style="line-height: inherit;"
            />
            </van-cell>
        </router-link>  
        <div class="content-list">
             <div class="info">
                <img :src="detailList.goodsimgs" alt="" class="productimg"/>
                <div class="right">
                    <div class="ellipsis title">{{detailList.name}}</div>
                    <p class="price">{{detailList.price}}</p>
                </div>
            </div>
            <div class="botton-line"></div>
            <div class="number">
                <h3>数量</h3>
                <div class="num">
                    <span class="n">-</span>
                    <span class="n" style="padding:0 10px">{{count}}</span>
                    <span class="n">+</span>
                </div>
            </div>
        </div>
        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
        />
    </div>
</div>
</template>

<script>
import axios from 'axios' 
import { mapGetters } from 'vuex'
import { SubmitBar } from 'vant';
import { Icon } from 'vant';
import { Cell, CellGroup,Toast } from 'vant';
import ArrowHeader from '../../components/ArrowHeader'
export default {
    name:"subDetails",
    components:{
        ArrowHeader,
        [Icon.name]:Icon,
        [Cell.name]:Cell,
        [CellGroup.name]:CellGroup,
        [SubmitBar.name]:SubmitBar,
        [Toast.name]:Toast
    },
    data(){
        return {
            title:"确定订单",
            //query传参接收 
            id: parseInt(this.$route.query.queryId),
            count:this.$route.query.count,
            detailList:[]
        }
    },
    // computed:{
    //     ...mapGetters(['detailList']),
    // },
    methods:{
        onSubmit(){
            console.log(this.id)
        },
        getProduct (){
            return new Promise((resolve, reject) => {
            axios.get('/api/goodsList.json')
            .then(response=> {
                    if(response){
                    this.detailList = response.data.goodsList.find(item => {
                     return item.id === this.id
                    })
                    }
                })
            })
        }

    },
    created(){
        this.getProduct ();
        //  this.$store.dispatch({
        //     type: 'loadGoodList',
        //     id: this.id
        //  })
    }
    
}
</script>

<style lang="less" scoped>
    .flexcenter {
    display: flex;
    align-items: center;
    }
    .container {
        padding: 20px;
        .content-list {
            background: #fff;
             padding: 30px;
             margin-top: 10px;
        }
        .info{
            width: 100%;
            &:extend(.flexcenter);
            justify-content: flex-start;
            .productimg {
                width: 210px;
                height: 200px;
            }
            .right {
                padding-left: 20px;
                line-height: 48px;
                .title {
                    font-size: 32px;
                    font-weight: 600;
                }
                .price {
                    font-size: 28px;
                    color: red;
                }
            }
        }
        .botton-line {
            padding: 20px 0;
            border-bottom: 1px solid #eee;
        }
        .number {
            padding: 10px 0;
            &:extend(.flexcenter);
            justify-content: space-between;
            .num {
                padding-top: 15px;
                .n {
                    display: inline-block;
                    width: 58px;
                    text-align: center;
                    line-height: 53px;
                    background: #ededed;
                    font-size: 32px;
                }

            }

        }
    }
</style>