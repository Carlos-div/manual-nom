<template>
     <div :class="{ dark: isDarkMode }">   
  <div class="flex justify-center items-center">
    <RouterLink to="/" class="">    
      <button class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-montserrat group" type="button">
        <div class="bg-zinc-800 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
            <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
            <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000"></path>
          </svg>
        </div>
        <p class="translate-x-2">Regresar</p>
      </button>
    </RouterLink>
  </div>
        <!--Contenido :)-->
       <h1 class="font-montserrat mt-36 text-4xl dark:text-white text-gray-900">En preparación tutorial de videolecciones</h1>
   
        <!--Video Tutorial
        <div class="relative"> 
          <video src="/public/video.mp4" controls class="w-full h-screen mt-10 rounded-lg shadow-lg"></video> 
        </div>
        -->
      </div>

</template>

<script setup>
import { isDarkMode, toggleDarkMode } from '../darkMode';
</script>

<style lang="scss" scoped>

</style>