<script setup>
import HorizontalDivider from '@/components/ui/HorizontalDivider.vue';
import FullWidthButton from '@/components/ui/FullWidthButton.vue';
import TheTable from '@/components/TheTable.vue';
import SelectButtons from '@/components/ui/SelectButtons.vue';
import Overlay from '@/components/ui/Overlay.vue';

import { ref, onMounted, watch, reactive } from 'vue';

document.title = 'Nextgen audit tool - Review notes';

const apiQuery = reactive({
  keyword: '',
  type: '',
  priority: ''
});
const notes = ref('');
const skip = ref('');
const limit = ref(3);
const buttonDisabled = ref(false);
const formVisible = ref(false);


watch(()=>apiQuery, async ()=>{
  skip.value=0;
  limit.value=3;
  notes.value='';
  fetchData();
}, {deep: true});

async function fetchData() {
  await fetch(`http://localhost:3001/get/reviewnotes?keyword=${apiQuery.keyword}&type=${apiQuery.type}&priority=${apiQuery.priority}&skip=${skip.value}&limit=${limit.value}`)
  .then(res=>res.json())
  .then(data=> {
    notes.value = [...notes.value, ...data];
    data.length<limit.value?buttonDisabled.value=true:buttonDisabled.value=false;
  });
};

function loadMore() {
  skip.value = notes.value.length;
  fetchData();
};

const clearFilters = () => {
  apiQuery.keyword='';
  apiQuery.priority='';
  apiQuery.type='';
}

onMounted(async ()=>{
  fetchData();
});

</script>

<template>
  <div class="review-notes">
    <div class="review-notes__head">
      <h1 class="review-notes__header">Reviev Notes</h1>
      <button class="new-note-btn" @click="()=> formVisible =! formVisible">New</button>
    </div>
    <HorizontalDivider />
    <div v-if="!formVisible" class="content">
      <div class="filter-bar">
        <input v-model="apiQuery.keyword" class="filter-bar__text-input" type="text" name="" id="" placeholder="Search..." />
        <SelectButtons @response="(value)=> apiQuery.type=value" :active="apiQuery.type" :name="'type'" :options="['All', 'Tasks', 'Notes']" :values="['','task','reviewnote']"/>
        <SelectButtons @response="(value)=> apiQuery.priority=value" :active="apiQuery.priority" :name="'priority'" :options="['All', 'Low', 'Medium', 'High']" :values="['','0','1','2']"/>
      </div>
      <button class="clear-filters-btn" @click="clearFilters">Clear filters</button>
      <TheTable :notes="notes"/>
      <FullWidthButton @click="loadMore" :text="'Load more'" :disabledText="'Nothing more to load...'" :isDisabled="buttonDisabled"/>
    </div>
    <Overlay v-else>
      <h1>Here will be the form to create a new review note</h1>
    </Overlay>
  </div>
</template>

<style lang="scss">
.filter-bar__text-input {
  font-size: 1.6rem;
}

.clear-filters-btn {
  font-size: 1.2rem;
  font-style: italic;
  color: black;
  margin-bottom: 1rem;
  padding: 0 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid currentColor;
  transition: all .2s;
  &:hover {
    color: gray;
  }

  &:active {
    color: black;
  }
}

.new-note-btn {
  padding: 0 1rem;
  border: none;
  color: white;
  font-weight: 600;
  font-style: italic;
  background-color: rgb(54, 54, 54);
  border-radius: 3px;
  transition: all .2s;
  
  &:hover {
    background-color: black;
  }

  &:active {
    opacity: .5;
  }
}

.filter-bar {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.content {
  padding: 1rem;
}

.review-notes {
  &__head {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  &__header {
    font-style: italic;
    letter-spacing: .5px;
  }
}
</style>
