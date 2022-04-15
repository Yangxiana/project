<template>
  <div class="role">
    <el-row>
      <router-link to="/roleadd" style="text-decoration: none; color: white">
        <el-button type="success" plain style="float: left; text-align: center"
          >add
        </el-button>
      </router-link>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="name" width="250"> </el-table-column>
      <el-table-column prop="name" label="state" width="250">
        <template>
          <el-tag type="success">Enable</el-tag>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="address" width="300" label="地址">
      </el-table-column> -->

      <el-table-column label="operation">
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
      tableData: [
        {
          date: "administrators",
        },
        {
          date: "doctor",
        },
      ],
    };
  },
};
</script>

<style>
.role {
  width: 50%;
}
.el-main {
  line-height: 10px;
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