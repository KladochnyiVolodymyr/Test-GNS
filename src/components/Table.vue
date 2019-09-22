<template>
  <div>
    <el-row type="flex" justify="space-between">
      <el-col :span="9">
        <SearchInput v-model="searchValue" />
      </el-col>
      <el-col :span="12">Total Currency: {{totalCurrency}}</el-col>
    </el-row>
    <el-table :data="filteredTable" :default-sort="{order: 'descending'}" @row-click="rowClick">
      <el-table-column label="Name" sortable>
        <template slot-scope="scope">
          <span v-if="currentEditing.id !== scope.row.id">{{ scope.row.name }}</span>
          <input v-model="currentEditing.name" v-else />
        </template>
      </el-table-column>
      <el-table-column label="Location" sortable>
        <template slot-scope="scope">
          <span v-if="currentEditing.id !== scope.row.id">{{ scope.row.location }}</span>
          <input v-model="currentEditing.location" v-else />
        </template>
      </el-table-column>
      <el-table-column label="Currency" sortable>
        <template slot-scope="scope">
          <span v-if="currentEditing.id !== scope.row.id">{{ scope.row.currency }}</span>
          <input v-model="currentEditing.currency" v-else />
        </template>
      </el-table-column>
      <el-table-column label width="100">
        <template slot-scope="scope">
          <el-button
            type="success"
            icon="el-icon-check"
            circle
            v-if="currentEditing.id == scope.row.id"
          ></el-button>
        </template>
      </el-table-column>
      <el-table-column label="Open" width="100">
        <el-button type="primary" icon="el-icon-open" circle></el-button>
      </el-table-column>
      <el-table-column label="Edit" width="100">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
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
      searchValue: "",
      currentEditing: {
        id: "",
        name: "",
        location: "",
        currency: null
      }
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
  },
  methods: {
    rowClick(row, event) {
      if (event.label == "Open") {
        this.$store.dispatch("getCurrentItem", row);
        this.$router.push(`/${row.id}`);
      } else if (event.label == "Edit") {
        this.currentEditing = { ...row };
      } else if (event.label == "") {
        this.$store.dispatch("sendData", this.currentEditing);
        this.currentEditing.id = "";
      }
    }
  }
};
</script>
<style lang="scss">
.el-table .cell,
.el-table th div {
  text-overflow: initial;
}
</style>