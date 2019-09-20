<template>
  <div id="app">
    <el-row type="flex" justify="space-between">
      <el-col :span="9">
        <SearchInput v-model="searchValue" />
      </el-col>
      <el-col :span="12">Total Currency: {{totalCurrency}}</el-col>
    </el-row>
    <el-table :data="filteredTable" :default-sort="{order: 'descending'}">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="Name" sortable></el-table-column>
      <el-table-column prop="location" label="Location" sortable></el-table-column>
      <el-table-column prop="currency" label="Currency" sortable></el-table-column>
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
    },
    totalCurrency() {
      return this.filteredTable.reduce(function(sum, current) {
        return sum + current.currency;
      }, 0);
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
