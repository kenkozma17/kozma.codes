<template>
  <div
    class="z-50 rounded-full md:py-4 py-1.5 md:px-2 px-1 bg-white border border-ken-light-gray fixed lg:bottom-auto bottom-4 left-1/2 transform shadow-lg -translate-x-1/2"
  >
    <div class="w-full space-x-2">
      <NuxtLink
        to="/"
        :class="{ 'bg-gray-300 font-semibold ': currentPage === 'index' }"
        class="md:text-sm text-xs md:py-4 py-2 md:px-8 px-4 rounded-full transform transition-all"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/about"
        :class="{ 'bg-gray-300 font-semibold': currentPage === 'about' }"
        class="md:text-sm text-xs md:py-4 py-2 md:px-8 px-4 hover:bg-gray-300 rounded-full transform transition-all"
        >About</NuxtLink
      >
      <NuxtLink
        to="/resume"
        :class="{ 'bg-gray-300 font-semibold': currentPage === 'resume' }"
        class="md:text-sm text-xs md:py-4 py-2 md:px-8 px-4 hover:bg-gray-300 rounded-full transform transition-all"
        >Resume</NuxtLink
      >
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    currentPage() {
      return this.$route.name
    },
  },
}
</script>
