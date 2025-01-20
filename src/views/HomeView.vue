<script setup>
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-12 z-10 w-192 h-192 md:w-192 md:h-192 lg:w-256 lg:h-256 xl:w-320 xl:h-320">
  

    <!--Asignaciones-->
    <RouterLink :to="{ path: 'asignaciones', hash: '#asignaciones' }" class="card transform hover:scale-110 transition duration-500 drop-shadow-2xl">
      <div class="responsive-card">
        Asignaciones
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class="absolute z-10 flex justify-center md:bottom-12 lg:bottom-20 xl:bottom-32" style="fill: rgba(0, 0, 0, 1);">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
        <path d="m9 17 8-5-8-5z"></path>
      </svg>
    </RouterLink>
  

  <!--Incidencias-->
  <RouterLink :to="{ path: 'incidencias', hash: '#incidencias'}" class="card transform hover:scale-110 transition duration-500">
    <div class="responsive-card">
      Incidencias
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class="absolute z-10 flex justify-center md:bottom-12 lg:bottom-20 xl:bottom-32" style="fill: rgba(0, 0, 0, 1);">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
      <path d="m9 17 8-5-8-5z"></path>
      </svg>
 </RouterLink>
 
  <!--tercer-->
  <div class="card transform hover:scale-110 transition duration-500 relative">
    <div class="responsive-card">
      Otros
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class="absolute z-10 flex justify-center md:bottom-12 lg:bottom-20 xl:bottom-32" style="fill: rgba(0, 0, 0, 1);">
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
</template>
