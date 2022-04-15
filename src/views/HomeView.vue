<template>
  <div class="home">
    <el-container>
      <el-header style="height:80px"><VHeader /></el-header>
      <el-container>
        <el-aside width="300px"> <Aside /></el-aside>
        <el-main> <router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Aside from '@/components/Aside.vue'
import VHeader from '@/components/Header.vue'
export default {
  name: "HomeView",
  components: {
    Aside,
    VHeader
    // HelloWorld
  },
};
</script>

<style >

.home{
  width: 100%;
  height: 100vh;
  background-color: pink;
}
 .el-header {
    background-color: #14a17e;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #14a17e;
    border: 2px solid #14a17e;
    border-right: none;
    color: #333;
    text-align: center;
    line-height: 200rem;
  }
  
  .el-main {
    background-color: #fff;
    border: 2px solid #14a17e;
    color: #333;
    text-align: center;
    /* line-height: 160rem; */
  }
  .el-container{
    height: 100%;
  }
  

</style>
