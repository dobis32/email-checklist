<template>
  <div id="app">
    <Checklist />
  </div>
</template>

<script>
import Checklist from "./components/Checklist.vue";

export default {
  name: "App",
  components: {
    Checklist
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
