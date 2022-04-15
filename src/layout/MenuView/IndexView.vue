<template>
<div class="menu">
  <el-row>
      <router-link to="/menuadd" style="text-decoration: none; color: white">
        <el-button type="success" plain style="float: left; text-align: center"
          >add
        </el-button>
      </router-link>
    </el-row>
  <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="date"
      label="name"
      width="250">
    </el-table-column>
    <el-table-column
      prop="name"
      label="icon"
      width="100">
      <template >
        <i class="el-icon-setting"></i>
      </template>
    </el-table-column>
    <el-table-column
   
      label="type"
      width="180">
       <template >
        <el-tag type="success">catalogue</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >delete</el-button
          >
        </template>
      </el-table-column>
  </el-table>

 
</div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          date: 'System settings',
          children: [{
              id: 31,
              date: 'menu',
            },{
              id: 32,
              date: 'role',
          },{
              id: 32,
              date: 'admin',
          },]
        },
        {
          id: 2,
          date: 'hospital management',
    
          children: [{
              id: 31,
              date: 'one',
            }, {
              id: 32,
              date: 'two',
          },{
              id: 31,
              date: 'three',
            }, {
              id: 32,
              date: 'four',
          },{
              id: 31,
              date: 'five',
            }, {
              id: 32,
              date: 'six',
          },]
        }]
      }
    },

  }
</script>

<style>
.menu{
  width: 50%;
}
.el-main{
  line-height: 0px;
}
.el-tag {
  background-color: #14a17e;
  color: white;
}
.el-button--success.is-plain {
  background-color: #14a17e;

  color: white;
}
.el-button--success {
  background-color: #14a17e;
}

</style>