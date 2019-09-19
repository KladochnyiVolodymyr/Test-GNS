<template>
  <div id="app">
    <el-table :data="getDataTable">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="location" label="Location"></el-table-column>
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
    return {};
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  computed: {
    getDataTable() {
      return this.$store.state.data;
    }
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
