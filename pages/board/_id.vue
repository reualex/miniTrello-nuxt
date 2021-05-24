<template>
  <div>222</div>
</template>

<script>
export default {
  data() {
    return {
      boardId: this.$route.params.id,
      //   board: this.$store.getters[('boards/getCurrentBoard', this.boardId)],
    }
  },
  mounted() {
    console.log(
      'getters: ',
      this.$store.getters[('boards/getCurrentBoard', boardId)]
    )
  },
}
</script>
