<script setup lang="ts">
import logoUrl from '../../assets/logo.svg'
import {ref} from "vue";

const passType = ref('password')
const togglePassType = () => {
  passType.value = passType.value === 'password' ? 'text' : 'password'
}

</script>

<template>
  <div class="w-full max-w-md">
    <!-- Logo -->
    <div class="mb-10 text-center">
      <div class="flex items-center justify-center">
        <img :src="logoUrl" alt="logo" class="w-15" />
        <span class="ml-2 text-base text-gray-600">Ministry of Trade, Industry & Cooperatives</span>
      </div>
    </div>

    <!-- Login Form -->
    <div id="login-form" class="bg-white rounded-lg shadow-lg p-8 border-t-4 border-uganda-red">
      <div class="flex items-center mb-6">
        <div class="bg-uganda-red/10 p-2 rounded-full mr-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-uganda-red to-red-800 flex items-center justify-center text-white">
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
        <div>
          <h1 class="text-2xl font-semibold text-gray-800">
            Log in
          </h1>
          <p class="text-gray-600">
            to MOTIC Platform
          </p>
        </div>
      </div>

      <form class="mt-6">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-800 mb-1" for="email">
            Email
          </label>
          <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red"
                 id="email"
                 type="email"
                 placeholder="your.email@example.com" />
        </div>

        <div class="mb-6">
          <div class="flex items-center justify-between mb-1">
            <label class="block text-sm font-medium text-gray-800" for="password">
              Password
            </label>
            <span class="text-sm text-uganda-red hover:text-red-700 cursor-pointer">
                                Forgot password?
                            </span>
          </div>
          <div class="relative">
            <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red pr-10"
                   id="password"
                   :type="passType"
                   placeholder="Enter your password" />
            <button @click="togglePassType" class="absolute inset-y-0 right-0 pr-3 flex items-center" type="button">
              <i class="fa-regular fa-eye text-gray-500"></i>
            </button>
          </div>
        </div>

        <div class="flex items-center mb-6">
          <input id="remember-me" type="checkbox" class="h-4 w-4 text-uganda-red focus:ring-uganda-red border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm text-gray-700">
            Remember me for 30 days
          </label>
        </div>

        <button class="w-full bg-uganda-red text-white py-3 rounded-md hover:bg-red-700 transition duration-200 font-medium" type="submit">
          Log in
        </button>


      </form>
    </div>

    <!-- Registration Link -->
    <div class="text-center mt-6">
      <p class="text-gray-600">
        Don't have an account?
        <span class="text-uganda-red hover:text-red-700 font-medium cursor-pointer">Register now</span>
      </p>
    </div>

    <!-- Help Section -->
    <div class="mt-10 flex justify-center items-center text-sm">
                <span class="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer">
                    <i class="fa-solid fa-circle-question mr-1"></i> Help
                </span>
      <span class="text-gray-400">|</span>
      <span class="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer">
                    <i class="fa-solid fa-shield-halved mr-1"></i> Privacy Policy
                </span>
      <span class="text-gray-400">|</span>
      <span class="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer">
                    <i class="fa-solid fa-file-contract mr-1"></i> Terms of Service
                </span>
    </div>
  </div>
</template>

<style scoped>

</style>