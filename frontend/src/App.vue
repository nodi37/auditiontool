<script setup>
import TheBreadCumbs from './components/TheBreadCumbs.vue';
</script>

<template>
  <TheBreadCumbs />
  <router-view />
</template>

<style lang="scss">
@import "./assets/base.css";
// :root {
//   /*Variables here*/
// }

body {
  background-color: azure;
}

html {
  font-size: 62.5%;
  @media only screen and (max-width: 84.375em) { //1350px
    font-size: 50%;
  }
  @media only screen and (max-width: 62.5em) { //1000px
    font-size: 62.5%;
  }
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

.mobile {
  @media only screen and (min-width: 62.5em) { //1000px
    display: none !important;
  }
  @media only screen and (max-width: 62.5em) { //1000px
    display: unset;
  }
}

.desktop {
  @media only screen and (max-width: 62.5em) { //1000px
    display: none !important;
  }
}

#app {
  min-width: 100vw;
  min-height: 100vh;
  padding: 1rem;
  cursor: default;
}

#app button {
  cursor: pointer;
}
</style>
