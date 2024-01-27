<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <FIcon :icon="['fas', 'heart']" class="icon" />
      <FIcon :icon="['fas', 'trash']" class="icon" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
};
</script>
