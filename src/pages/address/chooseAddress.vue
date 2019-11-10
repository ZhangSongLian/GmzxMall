<template>
    <div>
        <arrow-header :title="title" class="bt"></arrow-header>
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            @add="onAdd"
            @edit="onEdit"
        />
       
    </div>
</template>

<script>
import { AddressList ,Toast } from 'vant';
import ArrowHeader from '../../components/ArrowHeader'
export default {
    name:'chooseAddress',
    components:{
        ArrowHeader,
        [AddressList.name]:AddressList,
        [Toast.name]:Toast
    },
   data() {
    return {
      title:"地址列表",
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
   },
 methods: {
    onAdd() {
      //   Toast('新增地址');
        this.$router.push({ path:'/addressEdit',query: {} })
    },

    onEdit(item, index) {
      Toast('编辑地址:' + index);
    }
  }

}
</script>

<style lang="stylus" scoped>
    .bt {
        padding-bottom 10px;
    }
</style>