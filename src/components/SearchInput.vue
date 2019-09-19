<template>
  <input @input="$emit('input', $event.target.value)" type="text" class="search-input" />
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.search-input {
  width: 100%;
  border-radius: 30px;
  border: 1px solid #ccc;
  outline: none;
  padding: 5px 10px;
}
</style>