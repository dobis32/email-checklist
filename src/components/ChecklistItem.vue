<template>
  <div @click="itemClicked" class="item-container">
    <div class="item-description">{{data.description}} | {{data.completed}}</div>
    <ItemCheckbox class="item-checkbox" v-bind:completed="data.completed"></ItemCheckbox>
  </div>
</template>

<script>
import ItemCheckbox from "./ItemCheckbox.vue";
export default {
  name: "ChecklistItem",
  components: { ItemCheckbox },
  props: ["data", "index"],
  methods: {
    itemClicked() {
      this.$emit("status-update", {
        index: this.index,
        status: !this.data.completed
      });
    }
  }
};
</script>


<style scoped>
.item-container {
  border: 2px solid black;
  margin: 10px;
  padding: 10px 7px;
}

.item-container:hover {
  cursor: pointer;
}

.item-description {
  display: inline-block;
  vertical-align: center;
}

.item-checkbox {
  position: relative;
  bottom: 4px;
  float: right;
}
</style>