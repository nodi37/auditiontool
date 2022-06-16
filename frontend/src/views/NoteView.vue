<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const params = route.params;
const note = ref({});

onMounted(async ()=>{
    await fetch(`http://localhost:3001/get/reviewnotes?id=${params.id}`)
    .then(res=>res.json())
    .then(data=> note.value = data[0]);
    document.title = `Nextgen audit tool - Note ${note.value.title}`
});
</script>

<template>
    {{note}}
</template>




