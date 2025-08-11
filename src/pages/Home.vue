<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <div class="flex flex-col">
<!--    <section id="hero" class="bg-gradient-to-r from-uganda-red to-red-800 text-white h-[600px]">-->
<!--      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">-->
<!--        <div class="md:w-1/2 mb-10 md:mb-0">-->
<!--          <div class="bg-black/20 p-8 rounded-lg backdrop-blur-sm">-->
<!--            <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">-->
<!--              Ministry of Trade, Industry & Cooperatives Portal-->
<!--            </h1>-->
<!--            <p class="text-lg md:text-xl mb-8 leading-relaxed">-->
<!--              Your gateway to essential business services in Uganda. Register MSMEs, apply for permits and licenses, or register cooperatives - all in one place.-->
<!--            </p>-->
<!--            <div class="flex flex-col sm:flex-row gap-4">-->
<!--                        <span class="bg-white text-uganda-red hover:bg-gray-100 font-medium px-6 py-3 rounded-md text-center transition duration-300 cursor-pointer">-->
<!--                            <i class="fa-solid fa-magnifying-glass mr-2"></i>Explore Services-->
<!--                        </span>-->

<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="md:w-1/2 flex justify-center">-->
<!--          <img class="rounded-lg shadow-2xl h-[400px] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/be35100441-ac7d1e60eea250fd0ea0.png" alt="Ugandan business people in professional setting with Uganda flag colors in background, government officials helping citizens at service desk" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <!-- Portal Entry Section -->
    <section id="portal-entry" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Our eServices</h2>
          <div class="w-20 h-1 bg-uganda-red mx-auto mb-6"></div>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Access specialized services through our dedicated portals designed to meet your business needs.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div id="cooperatives-portal" class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-uganda-black relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-gray-200"></div>
            <div class="relative z-10">
              <div class="bg-gray-100 text-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i class="fa-solid fa-handshake text-3xl"></i>
              </div>
              <h3 class="text-2xl font-semibold mb-4">Cooperatives </h3>
              <p class="text-gray-600 mb-6">
                Register your cooperative society, reserve names, and access cooperative development resources all in one place.
              </p>
              <ul class="space-y-2 mb-8">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-gray-800 mr-2"></i>
                  <span>Name reservation</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-gray-800 mr-2"></i>
                  <span>Cooperative registration</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-gray-800 mr-2"></i>
                  <span>Management resources</span>
                </li>
              </ul>
              <span @click="router.push({name: 'cooperatives'})" class="inline-block bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-md transition duration-300 cursor-pointer">
                            Enter Cooperatives
                            <i class="fa-solid fa-arrow-right ml-2"></i>
                        </span>
            </div>
          </div>


          <div id="permits-portal" class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-uganda-yellow relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-uganda-yellow/10 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-uganda-yellow/20"></div>
            <div class="relative z-10">
              <div class="bg-uganda-yellow/10 text-uganda-yellow rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i class="fa-solid fa-id-card text-3xl"></i>
              </div>
              <h3 class="text-2xl font-semibold mb-4">Permits & Licenses</h3>
              <p class="text-gray-600 mb-6">
                Apply for and renew business permits and licenses online. Streamlined processes save you time and reduce paperwork.
              </p>
              <ul class="space-y-2 mb-8">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-yellow mr-2"></i>
                  <span>Trading licenses</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-yellow mr-2"></i>
                  <span>Health permits</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-yellow mr-2"></i>
                  <span>Import/export documents</span>
                </li>
              </ul>
              <span @click="router.push({name: 'licenses'})" class="inline-block bg-uganda-yellow hover:bg-yellow-500 text-black px-6 py-3 rounded-md transition duration-300 cursor-pointer">
                            Enter Permits & Licenses
                            <i class="fa-solid fa-arrow-right ml-2"></i>
                        </span>
            </div>
          </div>

          <div id="msme-portal" class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-uganda-red relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-uganda-red/10 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-uganda-red/20"></div>
            <div class="relative z-10">
              <div class="bg-uganda-red/10 text-uganda-red rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i class="fa-solid fa-building-user text-3xl"></i>
              </div>
              <h3 class="text-2xl font-semibold mb-4">MSME </h3>
              <p class="text-gray-600 mb-6">
                Register your Micro, Small, or Medium Enterprise quickly and efficiently. Get official recognition and access to government support programs.
              </p>
              <ul class="space-y-2 mb-8">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Business registration</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Tax identification</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Support programs</span>
                </li>
              </ul>
              <span @click="router.push({name: 'msme'})" class="inline-block bg-uganda-red hover:bg-red-700 text-white px-6 py-3 rounded-md transition duration-300 cursor-pointer">
                            Enter MSMEs
                            <i class="fa-solid fa-arrow-right ml-2"></i>
                        </span>
            </div>
          </div>

        </div>
      </div>
    </section>



    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-light-gray">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div class="w-20 h-1 bg-uganda-red mx-auto mb-6"></div>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our services? Our team is here to help.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div id="contact-info">
            <div class="mb-8">
              <h3 class="text-xl font-semibold mb-4">Get in Touch</h3>
              <p class="text-gray-600 mb-6">
                Our support team is available to assist you with any questions or concerns about our services.
              </p>

              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 class="font-medium">Address</h4>
                    <p class="text-gray-600">Ministry of Trade, Industry & Cooperatives, Farmers House, Plot 6/8 Parliament Avenue, Kampala, Uganda</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 class="font-medium">Email</h4>
                    <p class="text-gray-600">info@motic.go.ug</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 class="font-medium">Phone</h4>
                    <p class="text-gray-600">+256 414 314 000</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                    <i class="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <h4 class="font-medium">Working Hours</h4>
                    <p class="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                            <span class="bg-uganda-red text-white rounded-full p-3 hover:bg-red-700 transition duration-300 cursor-pointer">
                                <i class="fa-brands fa-facebook-f"></i>
                            </span>
                <span class="bg-uganda-red text-white rounded-full p-3 hover:bg-red-700 transition duration-300 cursor-pointer">
                                <i class="fa-brands fa-twitter"></i>
                            </span>
                <span class="bg-uganda-red text-white rounded-full p-3 hover:bg-red-700 transition duration-300 cursor-pointer">
                                <i class="fa-brands fa-instagram"></i>
                            </span>
                <span class="bg-uganda-red text-white rounded-full p-3 hover:bg-red-700 transition duration-300 cursor-pointer">
                                <i class="fa-brands fa-youtube"></i>
                            </span>
              </div>
            </div>
          </div>

          <div id="contact-form">
            <form class="bg-white p-8 rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold mb-6">Send us a Message</h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-gray-700 mb-2" for="name">Full Name</label>
                  <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red">
                </div>

                <div>
                  <label class="block text-gray-700 mb-2" for="email">Email Address</label>
                  <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red">
                </div>
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 mb-2" for="subject">Subject</label>
                <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red">
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 mb-2" for="message">Message</label>
                <textarea id="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red"></textarea>
              </div>

              <button type="submit" class="w-full bg-uganda-red hover:bg-red-700 text-white font-medium py-3 rounded-md transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>