<script setup>
const props = defineProps(["isDisabled", "text", "disabledText"]);
</script>
<template>
  <button :disabled="props.isDisabled" class="full-width-btn">
    {{ props.isDisabled?props.disabledText:props.text }}
  </button>
</template>
<style lang="scss">
.full-width-btn {
  font-size: 1.6rem;
  color: white;
  width: 100%;
  padding: 1rem 0;
  border: none;
  border-radius: .5rem;
  background-color: rgb(77, 157, 159);
  transition: all .1s;

  &:hover {
    background-color: rgb(32, 104, 106);
  }

  &:active {
    opacity: .8;
  }

  &:disabled {
    opacity: .5;
    &:hover {
      background-color: rgb(77, 157, 159);
      opacity: .5 !important;
    }
  }
}
</style>
