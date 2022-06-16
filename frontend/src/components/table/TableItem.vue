<script setup>
import { ref } from '@vue/runtime-core';
import UserAvatar from '../ui/UserAvatar.vue';
import Badge from '../ui/Badge.vue';

const props = defineProps(['value', 'type', 'data', 'class']);

</script>

<template>
        <div v-if="props.type=='string'" :class="props.class" class="item-column"><slot></slot><p>{{props.value}}</p></div>
        <div v-if="props.type=='badge'" :class="props.class" class="item-column"><slot></slot><Badge :value="props.value" :colorGuide="props.data" /></div>
        <div v-if="props.type=='date'" :class="props.class" class="item-column"><slot></slot><p>{{new Date(props.value).toLocaleDateString('no', {day: 'numeric', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})}}</p></div>
        <div v-if="props.type=='link'" :class="props.class" class="item-column"><slot></slot><router-link class="table-item__link" :to="props.value">&#35;</router-link></div>
        <div v-if="props.type=='users'" :class="props.class" class="item-column">
            <slot></slot>
            <UserAvatar v-for="userId in props.value" :key="userId" :userId="userId"/>
        </div>
</template>

<style lang="scss">
    .item-column {
      display: flex;
      align-items: center;
      column-gap: .5rem;
    }

    .table-item__link,
    .table-item__link:link,
    .table-item__link:visited {
        font-size: 1.4rem;
        font-weight: 600;
        font-style: italic;
        text-decoration: none;
        color: black;
        padding: .3rem;
        border-radius: .3rem;
    }
</style>
