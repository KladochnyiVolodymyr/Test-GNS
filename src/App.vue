<template>
  <div id="app">
    <el-row type="flex" justify="space-between">
      <el-col :span="9">
        <SearchInput v-model="searchValue" />
        {{searchValue}}
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <el-table :data="filteredTable">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="location" label="Location"></el-table-column>
      <el-table-column prop="currency" label="Currency"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput";

export default {
  name: "app",
  components: {
    SearchInput
  },
  data() {
    return {
      searchValue: ""
    };
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  computed: {
    getDataTable() {
      return this.$store.state.dataTable;
    },
    filteredTable() {
      return this.getDataTable.filter(item => {
        return item.name.toLowerCase().includes(this.searchValue.toLowerCase());
      });
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
}
</style>
