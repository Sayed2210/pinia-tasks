<template>
  <form @submit.prevent="submitTask">
    <input type="text" name="title" v-model="titleVal" id="" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { useTasksStore } from "@/store/tasksStore";
import { mapActions } from "pinia";
export default {
  data() {
    return {
      titleVal: "",
    };
  },
  methods: {
    ...mapActions(useTasksStore, ["addTask"]),
    submitTask() {
      this.addTask({
        id: Math.floor(Math.random() * 1000),
        title: this.titleVal,
        isFav: false,
      });
      this.title = "";
    },
  },
};
</script>
