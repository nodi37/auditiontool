<script setup>
const { onMounted, ref }=require("@vue/runtime-core");

const props = defineProps(['userId']);
const user = ref('');

onMounted(()=>{
    fetchData();
});

async function fetchData() {
  await fetch(`http://127.0.0.1:3001/get/users?id=${props.userId}`)
  .then(res=>res.json())
  .then(data=> user.value=data[0]);
};

</script>

<template>
    <img v-bind:src="user.photo" v-bind:alt="user.name"/>
</template>

<style lang="scss">
    img {
        display: block;
        height: 4rem;
        width: 4rem;
        border-radius: 50%;

        &:not(:last-child) {
            margin-right: .2rem;
        }
    }
</style>
