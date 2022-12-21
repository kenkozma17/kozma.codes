<template>
  <div :class="wrapperSize" class="mx-auto">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "normal",
    },
  },
  computed: {
    wrapperSize() {
      let size = this.size;
      switch (size) {
        case "normal":
          size = "max-w-screen-2xl md:px-28 px-12";
          break;
        case "large":
          size = "max-w-screen-lg md:px-28 px-12";
          break;
        case "large-extended":
          size = "max-w-screen-2xl xl:px-28 lg:px-10 md:px-8";
          break;
      }
      return size;
    },
  },
};
</script>
