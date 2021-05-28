<template>
  <div class="avatar">
    <img v-if="link" :src="link" />
    <div v-else>
      {{ getInitials(fullName) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAvatar',
  props: {
    link: { type: String, default: '' },
    fullName: { type: String, default: 'User' },
  },
  methods: {
    getInitials(name) {
      return name
        ?.split(' ')
        .map(el => el[0])
        .join('')
        .toUpperCase()
    },
  },
}
</script>

<style lang="scss">
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #8bc4f7;
  cursor: pointer;
  position: relative;

  &_sm {
    width: 32px;
    height: 32px;
  }

  img {
    border-radius: 50%;
  }

  div {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
