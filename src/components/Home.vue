<!--  -->
<template>
  <div class="basic-layout">
    <div class="nav-side"></div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">面包屑</div>
        <div class="user-">用户</div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: 'Home'
}
</script>
<style lang="scss">
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 20vw;
    height: 100vh;
    overflow-y: auto;
    background-color: #001529;
    color: #ffffff;
    transition: width 0.5s;
  }
  .content-right {
    margin-left: 20vw;
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ffffff;
      padding: 0 20px;
    }
    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      .main-page {
        background-color: #fff;
        height: 100%;
      }
    }
  }
}
</style>
