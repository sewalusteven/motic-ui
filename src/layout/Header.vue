<script setup lang="ts">
import {computed} from "vue";

import logoUrl from '../assets/logo.svg'
import {useRouter} from "vue-router";
const router = useRouter()

</script>

<template>
  <header id="header" class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center">
                <span @click="router.push('/')" class=" flex items-center cursor-pointer">
                    <img :src="logoUrl" alt="logo" class="w-10 h-10" />
                    <span class="ml-2 text-sm text-gray-600 hidden md:inline">Ministry of Trade, Industry & Cooperatives</span>
                </span>
      </div>

      <nav class="hidden md:flex space-x-8">
<!--        <span class="text-gray-700 hover:text-uganda-red font-medium cursor-pointer">BDSPs</span>-->
<!--        <span class="text-gray-700 hover:text-uganda-red font-medium cursor-pointer">Market Place</span>-->
<!--        <span class="text-gray-700 hover:text-uganda-red font-medium cursor-pointer">Cooperatives</span>-->
<!--        <span class="text-gray-700 hover:text-uganda-red font-medium cursor-pointer">Contact</span>-->
      </nav>

      <div class="flex items-center space-x-4">
                <span class="hidden md:inline-block text-gray-700 hover:text-uganda-red cursor-pointer">
                    <i class="fa-solid fa-circle-question mr-1"></i>
                    Help
                </span>
        <span @click="router.push({ name: 'login' })" class="bg-uganda-red hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer">
                    Login
                </span>
<!--        <button class="md:hidden text-gray-700">-->
<!--          <i class="fa-solid fa-bars text-xl"></i>-->
<!--        </button>-->
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>