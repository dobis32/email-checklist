<template>
  <div v-bind:class="{'is-checked': completed }"></div>
</template>

<script>
export default {
  name: "ItemCheckbox",
  props: ["completed"]
};
</script>

<style scoped>
div {
  width: 22px;
  height: 22px;
  padding: 0px;

  border-radius: 4px;
  vertical-align: center;
  transition: background-color 0.3s linear, border-color 0.3s linear;
  border: 2px solid #555;
  background-color: #fff;
}
.is-checked {
  transition: background-color 0.3s linear, border-color 0.3s linear;
  background-color: #0a4;
  border-color: #0a4;
}
</style>
