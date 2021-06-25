<template>
  <div class="basic-input">
    <label class="mb-1.5" :for="inputId">{{ label }}</label>
    <input
      v-model="innerValue"
      :id="inputId"
      :placeholder="placeholder"
      :name="name"
      :type="type"
      :required="required"
      @input="setInput"
      class="pb-1 px-4"
    />
  </div>
</template>

<script>
/**
 *
 * [x] Add 'type' prop validation
 * [x] _uui uniq
 */
export default {
  name: 'BasicInput',
  props: {
    label: { type: String, default: '' },
    name: { type: String, default: '' },
    value: { type: String, default: '' },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'password', 'email', 'phone'].includes(value)
      },
    },
    required: { type: Boolean, default: true },
    placeholder: { type: String, default: '' },
    id: { type: String, default: '' },
  },
  created() {
    this.innerValue = this.value
  },
  data() {
    return {
      innerValue: '',
    }
  },
  watch: {
    value(val) {
      this.innerValue = val
    },
  },
  methods: {
    setInput() {
      this.$emit('input', this.innerValue)
    },
  },

  computed: {
    inputId() {
      return this.id || this.$uuid.v4()
    },
  },
}
</script>

<style lang="scss">
.basic-input {
  @apply w-full flex flex-col relative;

  label {
    font-size: 12px;
    color: rgb(184, 183, 183);
  }

  input {
    border-bottom: 1px gray solid;
  }
}
</style>
