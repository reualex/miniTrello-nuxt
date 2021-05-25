<template>
  <div class="task-form">
    <label :for="`newTask-${column.id}`" class="mr-4">Create new column:</label>
    <input
      :id="`newTask-${column.id}`"
      class="mr-4"
      v-model="taskName"
      placeholder="please, enter task name"
    />
    <v-btn @click="addTask(column.id)">Add</v-btn>
  </div>
</template>

<script>
export default {
  name: 'BoardTsk',
  props: {
    columnId: { type: String, default: '' },
  },
}
</script>
