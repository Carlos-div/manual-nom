<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div class="relative flex flex-col items-center min-h-screen">

   <img src="/public/fondo.jpg" alt="fondo de prueba" class="absolute inset-0 w-full h-full object-cover z-0">
   <h1 class="mt-10 text-4xl font-extrabold text-gray-700 z-10 ">Bienvenido al manual de ayuda para el sistema de Nómina en el SIPRE de los CUSAEM</h1>
   
   <div class="grid grid-cols-4 gap-4 mt-12 z-10 w-192 h-192 md:w-256 md:h-256 lg:w-320 lg:h-320">
     <!--carta-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>ASIGNACIONES</h2>
     </div>
     <!--segunda-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>INCIDENCIAS</h2>
     </div>
     <!--tercer-->
     <div class="card transform hover:scale-110 transition duration-500 relative">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="absolute z-10" style="fill: rgba(0, 0, 0, 1);">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
    <path d="m9 17 8-5-8-5z"></path>
  </svg>
</div>

     <!--cuarta-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>03</h2>
     </div>
     <!--quinta-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>04</h2>
     </div>
     <!--sexta-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>05</h2>
     </div>
     <!--séptima-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>06</h2>
     </div>
     <!--8-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>07</h2>
     </div>
     <!--9-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>08</h2>
     </div>
     <!--10-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>09</h2>
     </div>
     <!--1-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>10</h2>
     </div>
     <!--12-->
     <div class="card transform hover:scale-110 transition duration-500">
       <h2>11</h2>
     </div>
   </div>
 
  </div>
 
  <footer>
   <div class="flex justify-center border-t-8 p-12 mt-12 border-gray-600 z-10">
     CUSAEM 2025
   </div>
  </footer>
 </template>
 

<style scoped>
body { 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
  }
</style>
