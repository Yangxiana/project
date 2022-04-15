<template>
  <div class="roleadd">
    <!-- <h2>添加</h2> -->

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!-- <el-form-item label="role">
        <el-input type="role" v-model="ruleForm.role"></el-input>
      </el-form-item> -->
      <el-form-item label="superior" prop="region">
        <el-select
          v-model="ruleForm.region"
          placeholder="Please select a role"
        >
          <el-option label="administators" value="administators"></el-option>
          <el-option label="doctor" value="doctor"></el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="Doctor job number" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Name of doctor" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      
      <el-form-item label="password" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
     
      <el-form-item label="VerifyPassword" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
       <el-form-item label="Department" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
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
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      radio: 3,
      ruleForm: {
        role: "",
        work:'',
        pass: "",
        checkPass: "",
        age: "",
        add: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
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
.el-main {
  line-height: 0px;
}
.roleadd {
  width: 45%;
  /* margin:  auto; */
}
.add1 {
  margin-top: 30px;
  margin-left: -60px;
}
.el-button--primary{
    margin-left: -85px;
}
.el-button{
    margin-left: 20px;
}
</style>