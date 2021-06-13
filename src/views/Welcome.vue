<!--  -->
<template>
  <div class="welcome">欢迎</div>
  <div>{{b}}</div>
<div>{{d}}</div>
  <div @click="upd">{{a}}{{d.a}}</div>
</template>

<script >
export default {
  name: 'welcome',
  data: () => {
    return {
      a: 1,
      c: 3,
      d: {
        a: 33,
        b: 22      }
    }  },
  beforeCreate() {
    console.log(this.$router)
    console.log(this.a)
    console.log('访问计算属性', this.b)
    console.log('创建前')
  },
  created() {
    console.log(this)
    console.log('访问计算属性', this.b)
    console.log(this.a)
    console.log('创建后')
  },
  beforeMount() {
    console.log('挂载前')
    console.log(this)
    console.log(this.a)
    console.log(this.b)  },
  mounted() {
    console.log(this)
    console.log(this.a)
    console.log(this.b)  },
  beforeUpdate() {
    console.log('数据更新前')
  },
  updated() {
    console.log('数据更新完成')
  },
  beforeUnmount() { },
  unmounted() { },
  renderTracked(DebuggerEvent) {
    console.log(DebuggerEvent)
    console.log('renderTracked')
  },
  renderTriggered(DebuggerEvent) {
    console.log(DebuggerEvent)
    console.log('renderTriggered')
  },
  methods: {
    upd() {
      this.a++
      this.a++
      console.log(this.a)
      this.d.a++
    }
  },
  computed: {
    b() {
      console.log('计算属性')
      return 1
    }
  },
  watch: {
    a: {
      handler: function (val1, val2) {
        console.log(1111)
        console.log(val1, val2)
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss">
</style>
