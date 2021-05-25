<template>
  <div>{{ currentBoard.name }}</div>
</template>

<script>
export default {
  data() {
    return {
      boardId: this.$route.params.id,
    }
  },
  computed: {
    currentBoard() {
      return this.$store.getters['boards/getCurrentBoard'](this.boardId)
    },
  },
  mounted() {
    console.log(
      'getters: ',
      this.$store.getters['boards/getCurrentBoard'](this.boardId)
    )
  },
}
</script>
