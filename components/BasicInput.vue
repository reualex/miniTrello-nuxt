<template>
  <div class="basic-input">
    <label class="mb-1.5" :for="name">{{ label }}</label>
    <input
      :placeholder="placeholder"
      :name="name"
      :type="type"
      :required="required"
      @input="$emit('input', $event.target.value)"
      class="pb-1 px-4"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: '' },
    name: { type: String, default: '' },
    type: { type: String, default: 'text' },
    required: { type: Boolean, default: true },
    placeholder: { type: String, default: '' },
    method: { type: Function, default: () => {} },
  },
}
</script>

<style lang="scss">
.basic-input {
  @apply w-full flex flex-col relative;
  height: 100%;

  label {
    font-size: 12px;
    color: rgb(184, 183, 183);
  }

  input {
    border-bottom: 1px gray solid;
  }
}
</style>
