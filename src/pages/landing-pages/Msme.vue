<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
<div class="flex flex-col">
  <!-- Hero Section -->
  <section id="msme-hero" class="bg-gradient-to-r from-uganda-red to-red-800 text-white h-[500px]">
    <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <div class="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            MSME
          </h1>
          <p class="text-lg md:text-xl mb-8 leading-relaxed">
            Register your Micro, Small, or Medium Enterprise, access the marketplace, and connect with business development service providers.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
                        <span @click="router.push({name: 'business-registration'})" class="bg-white text-uganda-red hover:bg-gray-100 font-medium px-6 py-3 rounded-md text-center transition duration-300 cursor-pointer">
                            <i class="fa-solid fa-user-plus mr-2"></i>Register MSME
                        </span>
            <span @click="router.push({name: 'registry'})" class="bg-uganda-yellow text-black hover:bg-yellow-400 font-medium px-6 py-3 rounded-md text-center transition duration-300 cursor-pointer">
                            <i class="fa-solid fa-magnifying-glass mr-2"></i>Find MSMEs
                        </span>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <img class="rounded-lg shadow-2xl h-[350px] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1dfa4269e4-928da95bcf7054ceb65d.png" alt="Ugandan business people working together in a modern office with Uganda flag colors in the background" />
      </div>
    </div>
  </section>

  <!-- MSME Portal Services Section -->
  <section id="msme-services" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">MSME eServices</h2>
        <div class="w-20 h-1 bg-uganda-red mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Access comprehensive services designed to support your Micro, Small, or Medium Enterprise in Uganda.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div id="msme-registration" class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-uganda-red relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-32 h-32 bg-uganda-red/10 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-uganda-red/20"></div>
          <div class="relative z-10">
            <div class="bg-uganda-red/10 text-uganda-red rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i class="fa-solid fa-file-signature text-3xl"></i>
            </div>
            <h3 class="text-2xl font-semibold mb-4">MSME Registration</h3>
            <p class="text-gray-600 mb-6">
              Register your business officially with the government to access benefits, support programs, and formal recognition.
            </p>
            <ul class="space-y-2 mb-8">
              <li class="flex items-center">
                <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                <span>Official business recognition</span>
              </li>
              <li class="flex items-center">
                <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                <span>Tax identification number</span>
              </li>
              <li class="flex items-center">
                <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                <span>Access to government support</span>
              </li>
            </ul>
            <span @click="router.push({name: 'business-registration'})"  class="inline-block bg-uganda-red hover:bg-red-700 text-white px-6 py-3 rounded-md transition duration-300 cursor-pointer">
                            Register Now
                            <i class="fa-solid fa-arrow-right ml-2"></i>
                        </span>
          </div>
        </div>
        <div id="marketplace" class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-uganda-black relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-gray-200"></div>
          <div class="relative z-10">
            <div class="bg-gray-100 text-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i class="fa-solid fa-store text-3xl"></i>
            </div>
            <h3 class="text-2xl font-semibold mb-4">MSME Marketplace</h3>
            <p class="text-gray-600 mb-6">
              Access a digital marketplace where registered MSMEs can showcase products and services to potential customers.
            </p>
            <ul class="space-y-2 mb-8">
              <li class="flex items-center">
                <i class="fa-solid fa-check text-gray-800 mr-2"></i>
                <span>List your products/services</span>
              </li>
              <li class="flex items-center">
                <i class="fa-solid fa-check text-gray-800 mr-2"></i>
                <span>Find local suppliers</span>
              </li>
              <li class="flex items-center">
                <i class="fa-solid fa-check text-gray-800 mr-2"></i>
                <span>Connect with customers</span>
              </li>
            </ul>
            <span class="inline-block bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-md transition duration-300 cursor-pointer">
                            Visit Marketplace
                            <i class="fa-solid fa-arrow-right ml-2"></i>
                        </span>
          </div>
        </div>

        <div id="msme-directory" class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-uganda-red relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-32 h-32 bg-uganda-red/10 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-uganda-yellow/20"></div>
          <div class="relative z-10">
            <div class="bg-uganda-red/10 text-uganda-red rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i class="fa-solid fa-list-ul text-3xl"></i>
            </div>
            <h3 class="text-2xl font-semibold mb-4">MSME Registry</h3>
            <p class="text-gray-600 mb-6">
              Browse the comprehensive listing of all registered MSMEs in Uganda to find potential partners, suppliers, or competitors.
            </p>
            <ul class="space-y-2 mb-8">
              <li class="flex items-center">
                <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                <span>Search by sector or location</span>
              </li>
              <li class="flex items-center">
                <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                <span>View business profiles</span>
              </li>
              <li class="flex items-center">
                <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                <span>Connect with businesses</span>
              </li>
            </ul>
            <span @click="router.push({name: 'registry'})" class="inline-block bg-uganda-red hover:bg-red-500 text-white px-6 py-3 rounded-md transition duration-300 cursor-pointer">
                            Browse Directory
                            <i class="fa-solid fa-arrow-right ml-2"></i>
                        </span>
          </div>
        </div>

        <div id="business-development" class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-uganda-black relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-gray/20"></div>
          <div class="relative z-10">
            <div class="bg-gray-100 text-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i class="fa-solid fa-chart-line text-3xl"></i>
            </div>
            <h3 class="text-2xl font-semibold mb-4">Business Development</h3>
            <p class="text-gray-600 mb-6">
              Connect with service providers who can help your business grow through consulting, training, and other support services.
            </p>
            <ul class="space-y-2 mb-8">
              <li class="flex items-center">
                <i class="fa-solid fa-check text-gray-800 mr-2"></i>
                <span>Business consultants</span>
              </li>
              <li class="flex items-center">
                <i class="fa-solid fa-check text-gray-800  mr-2"></i>
                <span>Training programs</span>
              </li>
              <li class="flex items-center">
                <i class="fa-solid fa-check text-gray-800  mr-2"></i>
                <span>Financial advisors</span>
              </li>
            </ul>
            <span class="inline-block bg-gray-800 hover:bg-grau-700 text-white px-6 py-3 rounded-md transition duration-300 cursor-pointer">
                            Find Service Providers
                            <i class="fa-solid fa-arrow-right ml-2"></i>
                        </span>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- CTA Section -->
  <section id="cta" class="py-16 bg-uganda-red text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Register Your MSME?</h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Join thousands of Ugandan businesses already benefiting from official registration and our comprehensive support services.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
                <span class="bg-white text-uganda-red hover:bg-gray-100 font-medium px-8 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
                    Register Your MSME
                </span>
        <span class="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
                    Explore Marketplace
                </span>
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>

</style>