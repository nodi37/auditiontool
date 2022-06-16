<script setup>
import { ref, watch } from "vue";

const props = defineProps(['name','options', 'values', 'active']);
const emit = defineEmits(['response']);
const choice = ref('')
watch(
    ()=>choice.value,
    ()=> emit('response', choice.value)
);
</script>

<template>
        <div class="select-button">
            <template v-for="(value, index) in props.values" :key="index">
                <input v-model="choice" type="radio" :name="props.name" :id="`${props.name}_${index}`" :value="value">
                <label class="label" :class="active==value?'label--active':''" :for="`${props.name}_${index}`"><span>{{props.options[index]}}</span></label>
            </template>
        </div>
</template>

<style lang="scss">
.select-button {
  display: flex;

  & input {
    display: none;
  }
}

.select-button .label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 100%;
  border: 1px solid black;
  font-weight: bolder;
  font-size: 1.4rem;
  cursor: pointer;

  &:not(:last-child){
    border-right: none;
  }
}

.select-button .label--active {
  background-color: rgb(173, 173, 246);
}

.select-button .label--active span {
  color: white;
  font-style: italic;
  transform: scale(1.1);
}
</style>

       
       
