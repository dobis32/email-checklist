<template>
  <div id="checklist-container">
    <h1 id="checklist-heading">This is the email checklist</h1>
    <ChecklistItem
      v-bind:key="index"
      v-for="(item, index) in checklistItems"
      v-bind:data="item"
      v-bind:index="index"
      v-on:status-update="updateItem"
    ></ChecklistItem>
  </div>
</template>

<script>
import ChecklistItem from "./ChecklistItem.vue";

export default {
  name: "Checklist",
  components: {
    ChecklistItem
  },
  data: () => {
    return {
      checklistItems: [
        { completed: false, description: "something to do" },
        { completed: false, description: "something else to do" },
        { completed: true, description: "something you already did" }
      ]
    };
  },
  methods: {
    updateItem(args) {
      const { index, status } = args;
      console.log(index, status);
      this.checklistItems[index].completed = status;
    }
  }
};
</script>

<style scoped>
#checklist-container {
  border: 3px solid #a0f;
  width: 600px;
  margin: auto;
  padding: 0px 20px 20px 20px;
}

#checklist-heading {
  text-align: center;
}
</style>