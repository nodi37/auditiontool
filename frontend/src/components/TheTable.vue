<script setup>
import TableWrapper from '@/components/table/TableWrapper.vue';
import TableRow from '@/components/table/TableRow.vue';
import TableItem from '@/components/table/TableItem.vue';
import TableHeader from './table/TableHeader.vue';

const props = defineProps(['notes']);

function getSection(val) {
  if(val){
    const section = val.replaceAll('app-','').replaceAll('-',' ');
    const sectionCap = section.charAt(0).toUpperCase() + section.slice(1);
    return sectionCap;
  }
}

function getUsers(val) {
const usersArr = JSON.parse(JSON.stringify(val));
const usersIdsArr = usersArr.map((obj)=>obj.$oid);
return usersIdsArr;
}

const typeColorGuide = [['reviewnote','yellow'], ['task', 'blue']];
const statusColorGuide = [['In progress','blue'], ['Addressed', 'green'], ['Not started', 'red'], ['Closed', 'grey'], ['Pending documentation', 'yellow']];
const priorityColorGuide = [['Low','green'], ['Medium', 'yellow'],['High', 'red']];
const sectionColorGuide = [['Independence','yellow'], ['Engagement information', 'blue'], ['Scope', 'green']];

</script>
<template>
      <TableWrapper>
        <TableHeader class="desktop" :headers="['Title', 'Type', 'State','Priority','Due date', 'Assignees', 'Reporter', 'Section', 'Created', 'Updated', 'Link']"/>
        <TableHeader class="mobile" :headers="['Title','Priority','Due date', 'Link']"/>
        <TableRow v-for="note in props.notes" :key="note._id.$oid">
          <TableItem :value="note.title" type="string"><input type="checkbox"></TableItem>
          <TableItem :class="'desktop'" :value="note.type" :data="typeColorGuide" type="badge"/>
          <TableItem :class="'desktop'" :value="note.status" :data="statusColorGuide" type="badge"/>
          <TableItem :value="note.priority.text" :data="priorityColorGuide" type="badge"/>
          <TableItem :value="note.dueDate" type="string"/>
          <TableItem :class="'desktop'" :value="getUsers(note.assignees)" type="users"/>
          <TableItem :class="'desktop'" :value="getUsers([note.reporterId])" type="users"/>
          <TableItem :class="'desktop'" :value="getSection(note.sectionRef)" :data="sectionColorGuide" type="badge"/>
          <TableItem :class="'desktop'" :value="note.createdAt.$date" type="date"/>
          <TableItem :class="'desktop'" :value="note.updatedAt.$date" type="date"/>
          <TableItem :value="note._id.$oid" type="link"/>
        </TableRow>
      </TableWrapper>
</template>

<style lang="scss">
  .content-table__item {
    grid-template-columns: 6fr 2fr 2fr 2fr 2fr 3fr 2fr 4fr 2fr 2fr 1fr;
    @media only screen and (max-width: 62.5em) { //1000px
      grid-template-columns: 6fr 2fr 2fr 1fr;
    }
  }
</style>
