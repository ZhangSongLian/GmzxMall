<template>
  <div class="list">
    <router-link :to="content.path">
          <van-cell :title="content.title" :icon="content.icon">
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <van-icon
            slot="right-icon"
            name="arrow"
            style="line-height: inherit;"
          />
        </van-cell>
      </router-link>
  </div>
</template>

<script>
import { Icon } from 'vant';
import { Cell, CellGroup } from 'vant';
export default {
  name:'MyContent',
  //子组件通过props接收父组件传值
  props:{
    content:Object
  },
  components:{
          [Icon.name]:Icon,
		    	[Cell.name]:Cell,
		    	[CellGroup.name]:CellGroup
      }
}

</script>

<style scoped>
  .list {
    border-bottom: 1px solid #eee;
  }
</style>
