1、使用el-dialog时无法获取dom元素
解决方法：在open事件中使用this.$nextTick(() => {})