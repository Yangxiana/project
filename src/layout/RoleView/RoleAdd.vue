<template>
  <div class="roleadd">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="Role name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Menu permissions" prop="name">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps"
        >
        </el-tree>
      </el-form-item>

      <el-form-item class="add1">
        <router-link to="./role">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Determine</el-button
          >
        </router-link>

        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter the role name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 8,
            message: "The length is between 3 and 8 characters",
            trigger: "blur",
          },
        ],
      },
      data: [
        {
          id: 2,
          label: "system settings",
          children: [
            {
              id: 5,
              label: "menu",
            },
            {
              id: 6,
              label: "role",
            },{
              id: 7,
              label: "admin",
            },
          ],
        },
        {
          id: 3,
          label: "hospital management",
          children: [
            {
              id: 8,
              label: "one",
            },
            {
              id: 9,
              label: "two",
            },
            {
              id: 10,
              label: "three",
            },
            {
              id: 11,
              label: "four",
            },{
              id: 12,
              label: "five",
            },
            {
              id: 13,
              label: "six",
            },
            {
              id: 14,
              label: "seven",
            },
            {
              id: 15,
              label: "eight",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
};
</script>

<style>
.roleadd {
  width: 50%;
}
.el-form-item__label{
  text-align: left;
}
</style>