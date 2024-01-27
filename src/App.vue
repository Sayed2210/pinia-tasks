<template>
  <main>
    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
      <h1>{{ name }}</h1>
    </header>
    <!-- new task form -->
    <div class="new-task-form">
      <taskForm />
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>
    <div class="task-list" v-if="filter === 'all'">
      <h2>You have {{ totalCount }} tasks</h2>
      <div v-for="task in tasks" :key="task.id">
        <!-- <p>{{ task.title }}</p> -->
        <taskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <h2>You have {{ favCount }} fav tasks</h2>
      <div v-for="task in favs" :key="task.id">
        <!-- <p>{{ task.title }}</p> -->
        <taskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { useTasksStore } from "@/store/tasksStore.js";
import { mapState } from "pinia";
import taskDetails from "@/components/taskDetails.vue";
import taskForm from "./components/taskForm.vue";
export default {
  components: { taskDetails, taskForm },
  computed: {
    ...mapState(useTasksStore, [
      "name",
      "tasks",
      "favs",
      "favCount",
      "totalCount",
    ]),
  },
  data() {
    return {
      filter: "all",
    };
  },
};
</script>
