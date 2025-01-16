<template>
    <footer>
      <div :class="{ dark: isDarkMode }">
   <h1 class="flex justify-center border-t-8 p-12 mt-12 border-gray-600 z-10 font-montserrat text-xl dark:text-white text-gray-950">
     C U S A E M . 2 0 2 5
   </h1>
  </div>
  </footer>
</template>

<script setup>
import { isDarkMode} from '../darkMode';
</script>

<style lang="scss" scoped>

</style>