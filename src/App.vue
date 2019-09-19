<template>
  <div id="app">
    <el-table :data="tableData">
      <el-table-column prop="date" label="ID"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="address" label="Location"></el-table-column>
      <el-table-column prop="currency" label="Currency"></el-table-column>
    </el-table>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */

export default {
  name: "app",
  components: {
    /* HelloWorld */
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          currency: "1"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          currency: "1"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          currency: "1"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          currency: "1"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
