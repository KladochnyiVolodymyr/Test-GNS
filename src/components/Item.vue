<template>
  <div class="item">item {{id}}</div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$router.currentRoute.params["id"]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>