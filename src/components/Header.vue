<template>
  <div class="header">
    <h2>hospital</h2>
    <div class="header-right">
      <el-dropdown>
        <div class="el-dropdown-link" style="margin-top: 10px">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-office-building"
            >hospital</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-tickets"
            >Hospital information</el-dropdown-item
          >
          <router-link to="./login" style="text-decoration: none">
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >Switch account</el-dropdown-item
            >
          </router-link>

          <!-- <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check"
            >蚵仔煎</el-dropdown-item -->
          <!-- > -->
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  float: left;
  margin-top: 10px;
  margin-left: 80px;
  color: white;
}
.header-right {
  /* width: 30%; */
  height: 60px;
  /* background-color: pink; */
  float: right;
  margin-top: 10px;
}
.el-dropdown {
  /* background-color: white; */
  float: right;
  margin-right: 50px;
}
.el-dropdown-menu {
  top: 50px;
}
</style>
