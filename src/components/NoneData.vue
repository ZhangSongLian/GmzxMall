<template>
    <div>
        <div class="noDate">
            <img src="../assets/img/sad.png" alt="">
            <span> 我也是有底线的</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"NoneData"
}
</script>

<style lang="less">
    .noDate {
       padding-bottom: 60px;
        text-align: center;
       
        >* {
            display: inline-block;
            vertical-align: middle;
            font-size:26px;
            color: #666;
        }
        img {
            width: 45px;
            height: 45px;
        }
    }
</style>