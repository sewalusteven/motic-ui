<script setup lang="ts">

</script>

<template>
<div class="flex flex-col">
  <!-- Hero Section -->
  <section id="hero" class="bg-gradient-to-r to-uganda-yellow from-yellow-500 text-white h-[600px]">
    <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <div class="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Permits & Licenses
          </h1>
          <p class="text-lg md:text-xl mb-8 leading-relaxed">
            MOTIC simplifies access to government e-services for Micro, Small, and Medium Enterprises in Uganda. Register your business, apply for permits, and access essential services all in one place.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">

            <span class="bg-uganda-yellow text-black hover:bg-yellow-400 font-medium px-6 py-3 rounded-md text-center transition duration-300 cursor-pointer">
                            <i class="fa-solid fa-id-card mr-2"></i>Request Permit & License
                        </span>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <img class="rounded-lg shadow-2xl h-[400px] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1dfa4269e4-928da95bcf7054ceb65d.png" alt="Ugandan business people working together in a modern office with Uganda flag colors in the background, professional business setting" />
      </div>
    </div>
  </section>

  <section id="license-services" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Permits & Licenses Services</h2>
        <div class="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          The Cooperatives Portal offers comprehensive services to help establish and manage cooperative societies in Uganda.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div id="name-reservation" class="bg-light-gray p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-yellow-500">
          <div class="flex items-start">
            <div class="bg-yellow-500/10 text-yellow-500 rounded-full p-4 mr-4">
              <i class="fa-solid fa-signature text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">Individual Registration</h3>
              <p class="text-gray-600 mb-4">
                Reserve a unique name for your cooperative society before registration to ensure it's available.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-yellow-500 mr-2"></i>
                  <span>Name availability check</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-yellow-500 mr-2"></i>
                  <span>Name reservation certificate</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-yellow-500 mr-2"></i>
                  <span>Valid for 30 days</span>
                </li>
              </ul>
              <span class="inline-block bg-yellow-500 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 cursor-pointer">
                                Register
                            </span>
            </div>
          </div>
        </div>

        <div id="coop-registration" class="bg-light-gray p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-yellow-500">
          <div class="flex items-start">
            <div class="bg-yellow-500/10 text-yellow-500 rounded-full p-4 mr-4">
              <i class="fa-solid fa-file-signature text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">Business Registration</h3>
              <p class="text-gray-600 mb-4">
                Register your cooperative society and receive official recognition from the Ugandan government.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-yellow-500 mr-2"></i>
                  <span>Complete application process</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-yellow-500 mr-2"></i>
                  <span>Registration certificate</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-yellow-500 mr-2"></i>
                  <span>Legal entity status</span>
                </li>
              </ul>
              <span class="inline-block bg-yellow-500 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 cursor-pointer">
                                Register
                            </span>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="cta" class="py-16 bg-yellow-500 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Join thousands of Ugandan businesses already benefiting from MOTIC's streamlined government services.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
                <span class="bg-white text-yellow-500 hover:bg-gray-100 font-medium px-8 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
                    Register Now
                </span>
        <span class="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
                    Learn More
                </span>
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>

</style>