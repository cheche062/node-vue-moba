<template>
  <div>
    <h1>英雄列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="name" label="英雄名称"></el-table-column>
      <el-table-column prop="icon" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" class="avatar" style="width:3rem;height:3rem" />
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/heroes/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "HeroList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/heroes");
      this.items = res.data;
      console.log("英雄列表数据:", this.items);
      
    },

    async handleDelete(row) {
      this.$confirm(`是否确定删除英雄 ${row.name}`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/heroes/${row._id}`);
        if (res.data.success) {
          this.fetch( );

          this.$message({
            type: "success",
            message: "删除成功!"
          });
          
        }
      });
    }
  }
};
</script>

<style>
</style>