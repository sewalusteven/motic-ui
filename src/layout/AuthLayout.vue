<script setup lang="ts">

import AuthFooter from "./AuthFooter.vue";
</script>

<template>
  <div id="login-container" class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-uganda-red/10 to-white p-4">
    <RouterView />
    <AuthFooter />
  </div>
</template>

<style scoped>

</style>