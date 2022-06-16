<script setup>
const props = defineProps(['headers']);
</script>

<template>
    <div class="content-table__item table-header">
      <div v-for="header in props.headers" :key="header">{{header}}</div>
    </div>
</template>

<style lang="scss">
.table-header {
  font-weight: bold;
  border-bottom: none !important;
}
</style>
