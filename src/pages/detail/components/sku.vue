<template>
    <div class="container">
    <div class="wrapper">
                <div class="close" @click="$emit('close')">
                  <van-icon name="close" />
                </div>
            <div class="info">
                <img :src="skuList.goodsimgs" alt="" class="productimg"/>
                <div class="right">
                    <p :style="[priceStyle]">￥{{skuList.price}}</p>
                    <p>请选择数量</p>
                </div>
            </div>
            <div class="botton-line"></div>
            <div class="number">
                <h3>数量</h3>
                <div class="num">
                    <span class="n" @click="handleReduce()">-</span>
                    <span class="n" style="padding:0 10px">{{count}}</span>
                    <span class="n" @click="handleAdd()">+</span>
                </div>
            </div>
            <van-button type="primary" class="btn" @click="subOrder(skuList.id)">确定</van-button>
		</div>
    </div>
</template>

<script>
import { Button } from 'vant';
import { Icon } from 'vant';
export default {
    name:'Sku',
    components:{
      [Button.name]: Button,
      [Icon.name]: Icon,
     },
     props:['skuList','id'],
    data(){
        return {
            priceStyle:{
                color:'red',
                fontSize:'20px'
            },
            count:1
        }
    },
    methods:{
        handleAdd(){
           this.count++
        },
        handleReduce(){
            if(this.count>1){
                this.count--
            }
        },
        subOrder(id){
            // 带查询参数 注意：path只能跟query共存，不能跟params共事
           // $router 是路由操作对象,只写对象
            this.$router.push({
                path:'/SubDetails',
                query: {
                    queryId:id,
                    count:this.count
                }
            })
        },
       

    }
}
</script>

<style lang="less" scoped>
.flexcenter {
 display: flex;
 align-items: center;
}
.container{
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    width: 100%;
    height: 100%;
    position: fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background:rgba(0, 0, 0, 0.5);
    z-index: 9999;
    .wrapper {
        width:92%;
        padding:30px;
        background:#fff;
        position:fixed;
        z-index:9;
        bottom:0px;
        .close {
            font-size: 48px;
            position: absolute;
            right: 65px;
            top: 45px;
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
            }
        }
        .botton-line {
            padding: 20px 0;
            border-bottom: 1px solid #eee;
        }
        .number {
            padding: 30px 0 50px 0;
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
        .btn {
            width:100%;background: #f00a56;border: none;
        }
    }

 }













</style>