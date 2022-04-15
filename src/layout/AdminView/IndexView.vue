<template>
  <div class="admin">
    <el-row>
      <router-link to="/adminadd" style="text-decoration: none; color: white">
        <el-button type="success" plain style="float: left; text-align: center"
          >add
        </el-button>
      </router-link>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="user ID" width="180">
      </el-table-column>
      <el-table-column prop="name" label="role" width="180"> </el-table-column>
      <el-table-column prop="admin" label="user name" width="180">
      </el-table-column>
      <el-table-column prop="name" label="state" width="180">
        <template>
          <el-tag type="success">Enable</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="operation">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >edit</el-button
          >
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >details</el-button
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

    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="margin-top:20px;float:left"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "administrators",
          admin: "Annot",
        },
        {
          date: "2",
          name: "doctor",
          admin: "Anslyn",
        },
        {
          date: "3",
          name: "administrators",
          admin: "Jackie",
        },
        {
          date: "4",
          name: "doctor",
          admin: "Jacobson",
        },
        {
          date: "5",
          name: "administrators",
          admin: "Annot",
        },
        {
          date: "6",
          name: "doctor",
          admin: "Anslyn",
        },
        {
          date: "7",
          name: "administrators",
          admin: "Jackie",
        },
        {
          date: "8",
          name: "doctor",
          admin: "Jacobson",
        },
        {
          date: "9",
          name: "doctor",
          admin: "Annot",
        },
        {
          date: "10",
          name: "doctor",
          admin: "Anslyn",
        },
        {
          date: "11",
          name: "administrators",
          admin: "Jackie",
        },
        {
          date: "12",
          name: "doctor",
          admin: "Jacobson",
        },
      ],
    };
  },
};
</script>

<style>
.admin {
  width: 50%;
}
.el-main{
    line-height: 0px;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #14a17e;
}
</style>