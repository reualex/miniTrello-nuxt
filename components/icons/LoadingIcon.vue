<template>
  <div>
    <svg
      class="spinner"
      :width="`${size}px`"
      :height="`${size}px`"
      :viewBox="`0 0 ${size} ${size}`"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="path"
        fill="none"
        :stroke-width="borderWidth"
        stroke-linecap="round"
        :cx="halfSize"
        :cy="halfSize"
        :r="radius"
      ></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LoadingIcon',
  props: {
    size: {
      type: Number,
      required: false,
      default: 66,
    },
    borderWidth: {
      type: Number,
      required: false,
      default: 6,
    },
  },
  computed: {
    halfSize() {
      return this.size / 2
    },
    radius() {
      return this.halfSize - this.borderWidth / 2
    },
  },
}
</script>

<style lang="scss" scoped>
$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite,
    colors ($duration * 4) ease-in-out infinite;
}

@keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: 46;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>
