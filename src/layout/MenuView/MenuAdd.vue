<template>
  <div class="menuadd">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="superior" prop="region">
        <el-select
          v-model="ruleForm.region"
          placeholder="Please select an active area"
        >
          <el-option label="System settings" value="System settings"></el-option>
          <el-option label="hospital management" value="hospital management"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="catalogue" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="state" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>

      <el-form-item label="type" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="catalogue"></el-radio>
          <el-radio label="menu"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <router-link to="./menu">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >determine</el-button
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
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter directory name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "The length is between 3 and 10 characters",
            trigger: "blur",
          },
        ],

        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
.menuadd {
  width: 50%;
}
.el-main {
  text-align: left;
}
/* .el-input__suffix {
  right: 26px;
} */
</style>