<script setup lang="ts">

</script>

<template>
<div class="flex flex-col">
  <!-- Hero Section -->
  <section id="hero" class="bg-gradient-to-r from-gray-800 to-gray-600 text-white h-[500px]">
    <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <div class="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Cooperatives
          </h1>
          <p class="text-lg md:text-xl mb-8 leading-relaxed">
            Register your cooperative society, reserve names, and access resources to help your cooperative thrive in Uganda's economy.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
                        <span class="bg-white text-uganda-red hover:bg-gray-100 font-medium px-6 py-3 rounded-md text-center transition duration-300 cursor-pointer">
                            <i class="fa-solid fa-pen-to-square mr-2"></i>Reserve a Name
                        </span>
            <span class="bg-uganda-yellow text-black hover:bg-yellow-400 font-medium px-6 py-3 rounded-md text-center transition duration-300 cursor-pointer">
                            <i class="fa-solid fa-file-circle-plus mr-2"></i>Register Cooperative
                        </span>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <img class="rounded-lg shadow-2xl h-[350px] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7025d98783-1e3d530238cd36744ce5.png" alt="Ugandan farmers in a cooperative meeting, discussing agricultural plans, professional setting with Uganda flag colors in background" />
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="coop-services" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Cooperative Services</h2>
        <div class="w-20 h-1 bg-uganda-red mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          The Cooperatives Portal offers comprehensive services to help establish and manage cooperative societies in Uganda.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div id="name-reservation" class="bg-light-gray p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-uganda-red">
          <div class="flex items-start">
            <div class="bg-uganda-red/10 text-uganda-red rounded-full p-4 mr-4">
              <i class="fa-solid fa-signature text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">Name Reservation</h3>
              <p class="text-gray-600 mb-4">
                Reserve a unique name for your cooperative society before registration to ensure it's available.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Name availability check</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Name reservation certificate</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Valid for 30 days</span>
                </li>
              </ul>
              <span class="inline-block bg-uganda-red hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 cursor-pointer">
                                Reserve a Name
                            </span>
            </div>
          </div>
        </div>

        <div id="coop-registration" class="bg-light-gray p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-uganda-red">
          <div class="flex items-start">
            <div class="bg-uganda-red/10 text-uganda-red rounded-full p-4 mr-4">
              <i class="fa-solid fa-file-signature text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">Cooperative Registration</h3>
              <p class="text-gray-600 mb-4">
                Register your cooperative society and receive official recognition from the Ugandan government.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Complete application process</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Registration certificate</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Legal entity status</span>
                </li>
              </ul>
              <span class="inline-block bg-uganda-red hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 cursor-pointer">
                                Register Cooperative
                            </span>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>


  <!-- CTA Section -->
  <section id="cta" class="py-16 bg-gray-700 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Register Your Cooperative?</h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Join thousands of registered cooperatives in Uganda and contribute to economic development and community empowerment.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
                <span class="bg-white text-uganda-red hover:bg-gray-100 font-medium px-8 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
                    Reserve a Name
                </span>
        <span class="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
                    Register Cooperative
                </span>
      </div>
    </div>
  </section>

</div>
</template>

<style scoped>

</style>