<template>
  <div class="aside">
    <el-row class="tac">
      <el-col :span="12">
        <!-- <h3 style="color: black">管理系统</h3> -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
        
          background-color="#fff"
          text-color="black"
          active-text-color="#14a17e"
         
          
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>System settings</span>
            </template>
            <el-menu-item-group>
              <router-link
                to="/menu"
                style="color: black; text-decoration: none"
              >
                <el-menu-item index="1-1"> menu </el-menu-item>
              </router-link>

              <router-link
                to="/role"
                style="color: black; text-decoration: none"
              >
                <el-menu-item index="1-2"> role </el-menu-item>
              </router-link>

              <router-link
                to="/admin"
                style="color: black; text-decoration: none"
              >
                <el-menu-item index="1-3"> admin </el-menu-item>
              </router-link>

              <!-- <el-menu-item index="1-4">病情4</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-office-building"></i>
              <span>hospital management</span>
            </template>
            <el-menu-item-group>
              <router-link
                to="/one"
                style="color: black; text-decoration: none"
              >
              <el-menu-item index="2-1">one</el-menu-item>
              </router-link>
              <router-link
                to="/two"
                style="color: black; text-decoration: none"
              >
              <el-menu-item index="2-2">two</el-menu-item>
              </router-link>
              <router-link
                to="/three"
                style="color: black; text-decoration: none"
              >
              <el-menu-item index="2-3">three</el-menu-item>
              </router-link>
              <router-link
                to="/four"
                style="color: black; text-decoration: none"
              >
              <el-menu-item index="2-4">four</el-menu-item>
              </router-link>
              <router-link
                to="/five"
                style="color: black; text-decoration: none"
              >
              <el-menu-item index="2-5">five</el-menu-item>
              </router-link>
              <router-link
                to="/six"
                style="color: black; text-decoration: none"
              >
              <el-menu-item index="2-6">six</el-menu-item>
              </router-link><router-link
                to="/seven"
                style="color: black; text-decoration: none"
              >
              <el-menu-item index="2-7">seven</el-menu-item>
              </router-link><router-link
                to="/eight"
                style="color: black; text-decoration: none"
              >
              <el-menu-item index="2-8">eight</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-submenu__title {


  padding: 0 44px;
}
.el-aside h3 {
  line-height: 40px;
}
.tac {
  width: 100%;
  background-color: pink;
  /* float: left; */
}
.el-col-12 {
  width: 100%;
  height: 500px;
  background-color: #14a17e;
}
.el-menu-item {
  height: 100px;
  line-height: 100px;
}
.el-submenu.el-menu-item {
  min-width: 161px;
  padding: 0 0;
}
.el-menu-item is-active{
  background-color: #14a17e;
}
.el-menu el-menu--inline{
  background-color: #14a17e;

}
/* el-menu-vertical-demo el-menu{
  opacity: 0.5;
} */
/* .el-submenu{
  background-color: #14a17e;

} */
</style>
