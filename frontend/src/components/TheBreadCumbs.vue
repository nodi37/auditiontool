<script setup></script>

<template>
  <div class="bread-cumbs">
    <router-link class="bread-cumbs__link" active-class="bread-cumbs__link--active" :to="{ name: 'EngagementsList' }">Engagements</router-link><span class="bread-cumbs__arrow">&rsaquo;</span> 
    <router-link class="bread-cumbs__link" active-class="bread-cumbs__link--active" :to="{ name: 'TaskList' }">Microsoft 2021</router-link><span class="bread-cumbs__arrow">&rsaquo;</span> 
    <router-link class="bread-cumbs__link" active-class="bread-cumbs__link--active" :to="{ name: 'ReviewNotes' }">Review Notes</router-link>
  </div>
</template>

<style lang="scss">
.bread-cumbs {
  font-size: 1.4rem;
  font-weight: bolder;
  margin-bottom: 4rem;

  &__arrow {
    font-size: 2rem;
    font-weight: bold;
    margin: 0 .3rem;
  }

  &__link,
  &__link:link,
  &__link:visited {
    text-decoration: none;
    color: black;
    padding: 0.3rem;
    border-radius: 0.3rem;
  }

  &__link--active,
  &__link--active:link,
  &__link--active:visited {
    color: white !important;
    background-color: rgb(252, 49, 49) !important;
  }
}
</style>
