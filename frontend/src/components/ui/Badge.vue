<script setup>
import { ref } from "vue";

const props = defineProps(["value", "colorGuide"]);
const color = ref("grey");

if (props.value) {
  props.colorGuide.forEach((el) => {
    if (el[0].toLowerCase() == props.value.toLowerCase()) {
      color.value = el[1];
    }
  });
}

</script>

<template>
  <p v-if="props.value" :class="`table__badge--${color}`" class="table__badge">
    {{ props.value }}
  </p>
</template>

<style lang="scss">
.table__badge {
  display: block;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border: 2px solid black;
  border-radius: 3px;
  padding: 0.2rem 0.5rem;

  &--grey {
    background-color: grey;
  }
  &--blue {
    background-color: rgb(41, 41, 174);
  }
  &--red {
    background-color: darkred;
  }
  &--yellow {
    background-color: darkgoldenrod;
  }
  &--green {
    background-color: darkgreen;
  }
}
</style>
