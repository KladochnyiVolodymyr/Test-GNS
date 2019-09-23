<template>
  <div>
    <el-row type="flex" justify="space-between">
      <el-col :span="9">
        <SearchInput v-model="searchValue" />
      </el-col>
      <el-col :span="12">Total Currency: {{totalCurrency}}</el-col>
    </el-row>
    <el-table :data="filteredTable" :default-sort="{order: 'descending'}" @row-click="rowClick">
      <el-table-column
        label="Name"
        prop="name"
        sortable
        :sort-method="(a, b) => stringSort(a, b, 'name') "
      >
        <template slot-scope="scope">
          <span v-if="currentEditing.id !== scope.row.id">{{ scope.row.name }}</span>
          <div class="input" v-else>
            <input
              v-model="currentEditing.name"
              @blur="$v.currentEditing.name.$touch()"
              id="name"
              :class="{error: $v.currentEditing.name.$error}"
            />
            <p
              class="input__error-text"
              v-if="!$v.currentEditing.name.required"
            >Name field is required</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="Location"
        prop="location"
        sortable
        :sort-method="(a, b) => stringSort(a, b, 'location') "
      >
        <template slot-scope="scope">
          <span v-if="currentEditing.id !== scope.row.id">{{ scope.row.location }}</span>
          <div class="input" v-else>
            <input
              v-model="currentEditing.location"
              @blur="$v.currentEditing.location.$touch()"
              id="location"
              :class="{error: $v.currentEditing.location.$error}"
            />
            <p
              class="input__error-text"
              v-if="!$v.currentEditing.location.required"
            >Location field is required</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Currency" prop="currency" sortable>
        <template slot-scope="scope">
          <span v-if="currentEditing.id !== scope.row.id">{{ scope.row.currency }}</span>
          <div class="input" v-else>
            <input
              v-model="currentEditing.currency"
              @blur="$v.currentEditing.currency.$touch()"
              id="currency"
              :class="{error: $v.currentEditing.currency.$error}"
            />
            <p
              class="input__error-text"
              v-if="!$v.currentEditing.currency.required"
            >Currency field is required</p>
            <p
              class="input__error-text"
              v-if="!$v.currentEditing.currency.numeric"
            >Currency field should be a number</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column label width="100">
        <template slot-scope="scope">
          <el-button
            type="success"
            icon="el-icon-check"
            circle
            v-if="currentEditing.id == scope.row.id"
            :disabled="$v.$invalid"
          ></el-button>
        </template>
      </el-table-column>
      <el-table-column label="Open" width="100">
        <el-button type="primary" icon="el-icon-open" circle></el-button>
      </el-table-column>
      <el-table-column label="Edit" width="100">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
      </el-table-column>
      <template slot="empty">Your search did not match any results</template>
    </el-table>
    <div class="loading" v-if="loading">Loading...</div>
  </div>
</template>
<script>
import SearchInput from "./SearchInput";
import { required, numeric } from "vuelidate/lib/validators";

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
  validations: {
    currentEditing: {
      name: {
        required
      },
      location: {
        required
      },
      currency: {
        required,
        numeric
      }
    }
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  computed: {
    getDataTable() {
      return this.$store.state.dataTable;
    },
    loading() {
      return this.$store.state.loading;
    },
    filteredTable() {
      return this.getDataTable.filter(item => {
        return item.name.toLowerCase().includes(this.searchValue.toLowerCase());
      });
    },
    totalCurrency() {
      return this.filteredTable.reduce(function(sum, current) {
        return sum + +current.currency;
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
        if (!this.$v.$invalid) {
          this.currentEditing.currency = +this.currentEditing.currency;
          this.$store.dispatch("sendData", this.currentEditing);
          this.currentEditing.id = "";
        }
      }
    },
    stringSort(a, b, prop) {
      let pa = a[prop].toLowerCase();
      let pb = b[prop].toLowerCase();
      return pa > pb ? -1 : pb > pa ? 1 : 0;
    },
    numberSort(a, b, prop) {
      return +a[prop] - +b[prop];
    }
  }
};
</script>
<style lang="scss">
.el-table .cell,
.el-table th div {
  text-overflow: initial;
}
.input {
  input {
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
    padding: 5px 10px;
    &.error {
      border-color: red;
    }
  }
  &__error-text {
    color: red;
    font-size: 12px;
    margin: 0;
    position: absolute;
  }
}
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
</style>