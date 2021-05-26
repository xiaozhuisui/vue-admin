<!--  -->
<template>
  <div>
    <h1>欢迎使用全栈学习页面 学习VUE3</h1>
  </div>
</template>

<script >
export default {
  name: 'welcome',
  data: () => {
    return {}  },
  mounted() {
    this.$request({
      url: '/get/list'
    }).then(res => console.log(res))
  }
}
</script>
<style scoped>
</style>
