<template>
    <div>
        文章详情页
    </div>
</template>

<script>
    export default {
         name:'article',
        data(){
            return{ 
                id: parseInt(this.$route.params.id) 
            }
        }
    }
</script>

<style lang="less">
    
</style>