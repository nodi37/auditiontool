<script setup>
</script>

<template>
  <div class="content-table"> 
    <slot></slot>
  </div>
</template>

<style lang="scss">
.content-table {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;

  &__item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    column-gap: .5rem;
    border-bottom: 1px solid rgba(200, 200, 200, 0.455);
    font-size: 1.5rem;
  }
}
</style>
