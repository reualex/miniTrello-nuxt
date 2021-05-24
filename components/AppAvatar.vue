<template>
  <div class="avatar">
    <img v-if="link" :src="link" />
    <div v-else>
      {{ getInitials(fullName || 'User') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAvatar',
  props: {
    link: { type: String, default: '' },
    fullName: { type: String, default: '' },
  },
  methods: {
    getInitials(name) {
      return name
        ?.split(' ')
        .map((el) => el[0])
        .join('')
        .toUpperCase()
    },
  },
}
</script>
