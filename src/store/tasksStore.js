import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      tasks: [
        { id: 1, title: "Buy milk", isFav: false },
        { id: 2, title: "Buy eggs", isFav: true },
      ],
      name: "Elsayed",
    };
  },
  getters: {
    favs(state) {
      return state.tasks.filter((t) => t.isFav);
    },
    favCount(state) {
      return state.tasks.filter((t) => t.isFav).length;
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
  },
});
