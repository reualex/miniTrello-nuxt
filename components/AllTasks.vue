<template>
  <ul v-if="tasks.length" class="one-column-tasks">
    <li v-for="task in tasks" :key="task.id" class="mb-3 cursor-pointer">
      <v-card>
        {{ task.name }}
      </v-card>
    </li>
  </ul>
  <span v-else class="pt-4">Nothing tasks</span>
</template>

<script>
export default {
  name: 'AllTasks',
  props: {
    tasks: { type: Array, default: [] },
  },
}
</script>
