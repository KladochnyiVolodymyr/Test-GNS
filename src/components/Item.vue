<template>
  <div class="item">
    <h1>{{getCurrentItem.name}}</h1>
    <p>Location: {{getCurrentItem.location}}</p>
    <p>Currency: {{getCurrentItem.currency}}</p>
    <p>ID: {{getCurrentItem.id}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    getCurrentItem() {
      return this.$store.state.currentItem;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>