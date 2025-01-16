<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Tutoriales from './components/Tutoriales.vue';
import Footer from './components/Footer.vue';

</script>

<template>

  <div class="relative flex flex-col items-center min-h-screen">

    <header>
      <Header />
    </header>
   
   <!--Router de los 3 contenedores-->
   <RouterLink to="/">
      </RouterLink> 
         
      <RouterView />

    <Footer />
  </div>
 
 </template>
 

<style scoped>
body { 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
  }
</style>
