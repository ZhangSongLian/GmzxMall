<template>
    <div>
        <arrow-header :title="title" class="bt"></arrow-header>
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
import { AddressEdit,Toast } from 'vant';
import ArrowHeader from '../../../components/ArrowHeader'
export default {
    name:'addressEdit',
    components:{
        ArrowHeader,
        [AddressEdit.name]:AddressEdit,
        [Toast.name]:Toast
    },
    data(){
        return{
           title:"新增地址",
           areaList:{},
           searchResult: [] 
        }
    },
 methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
    .bt {
        padding-bottom 10px;
    }
</style>