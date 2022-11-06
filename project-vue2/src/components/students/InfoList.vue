<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="addstudent">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tagList" style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="father" label="父亲" align="center">
      </el-table-column>
      <el-table-column prop="mather" label="母亲" align="center">
      </el-table-column>
      <el-table-column prop="time" label="入校时间" align="center">
      </el-table-column>
      <el-table-column prop="address" label="家庭地址" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-edit"
            @click="edit(scope.row)"
          ></el-button>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="del(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="state ? '添加学生信息' : '修改学生信息'"
      :visible.sync="dialogFormVisible"
      width="500px"
    >
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="父亲" :label-width="formLabelWidth">
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="母亲" :label-width="formLabelWidth">
          <el-input v-model="form.mather" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="入校时间"
          :label-width="formLabelWidth"
          prop="time"
        >
          <el-date-picker
            v-model="form.time"
            format="yyyy年MM月dd日"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="家庭地址"
          :label-width="formLabelWidth"
          prop="address"
        >
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="联系方式"
          :label-width="formLabelWidth"
          prop="phone"
        >
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeForm('form')">取 消</el-button>
        <el-button type="primary" @click="confrimStu('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addInfo, getInfo, DelInfo } from "@/api/api";
export default {
  name: "InfoList",
  data() {
    return {
      tagList: [],
      dialogFormVisible: false,
      formLabelWidth: "80px",
      form: {
        name: "",
        age: "",
        sex: "1",
        father: "",
        mather: "",
        time: "",
        address: "",
        phone: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "bulr" }],
        age: [{ required: true, message: "请输入年龄" }],
        sex: [{ required: true }],
        time: [{ required: true, message: "请输入入学时间" }],
        address: [{ required: true, message: "请输入地址" }],
        phone: [{ required: true, message: "请输入联系方式" }],
      },
      total: 0,
      state: true,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    edit(row) {
      this.form = { ...row };
      this.dialogFormVisible = true;
      this.state = false;
    },
    del(row) {
      this.$alert("你确定要删除吗？", "提示", {
        confirmButtonText: "确定",
        callback: () => {
          DelInfo(row.id).then((res) => {
            if (res.data.status === 200) {
              this.getData();
              this.$message({ type: "success", message: res.data.message });
            }
          });
        },
      });
    },
    addstudent() {
      this.state = true;
      this.dialogFormVisible = true;
      this.form = {
        name: "",
        age: "",
        sex: "1",
        father: "",
        mather: "",
        time: "",
        address: "",
        phone: "",
      };
    },
    closeForm(from) {
      this.dialogFormVisible = false;
      this.$refs[from].resetFields();
    },
    getData() {
      getInfo().then((res) => {
        if (res.data.status === 200) {
          this.tagList = res.data.data;
          console.log(res.data.data);
          this.total = res.data.total;
          this.tagList.forEach((item) => {
            item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
          });
        }
      });
    },
    confrimStu(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          if (this.state) {
            addInfo(this.form, "post").then((res) => {
              if (res.data.status === 200) {
                this.getData();
                this.dialogFormVisible = false;

                this.$message({ type: "success", message: res.data.message });
              }
            });
          } else {
            addInfo(this.form, "put").then((res) => {
              if (res.data.status === 200) {
                this.getData();
                this.dialogFormVisible = false;
                this.$refs[`form`].resetFields();
                this.$message({ type: "success", message: res.data.message });
              }
            });
          }
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.demo-form-inline {
  float: left;
  margin-bottom: 0px;
}
</style>