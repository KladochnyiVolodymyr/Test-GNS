<template>
  <div>
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
      <el-table-column label="Open">
        <template slot-scope="scope">
          <router-link :to="`/${scope.row.id}`">
            <el-button type="primary" icon="el-icon-open" circle></el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import SearchInput from "./SearchInput";

export default {
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
<style lang="scss" scoped>
</style>