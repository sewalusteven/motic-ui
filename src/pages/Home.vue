<script setup lang="ts">

</script>

<template>
<div class="flex flex-col">
  <!-- Hero Section -->
  <section id="hero" class="bg-gradient-to-r from-uganda-red to-red-800 text-white h-[600px]">
    <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <div class="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Empowering Ugandan Businesses
          </h1>
          <p class="text-lg md:text-xl mb-8 leading-relaxed">
            MOTIC simplifies access to government e-services for Micro, Small, and Medium Enterprises in Uganda. Register your business, apply for permits, and access essential services all in one place.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
                        <router-link :to="{ name: 'business-registration' }" class="bg-white text-uganda-red hover:bg-gray-100 font-medium px-6 py-3 rounded-md text-center transition duration-300 cursor-pointer">
                            <i class="fa-solid fa-building-user mr-2"></i>MSME Registration
                        </router-link>
            <span class="bg-uganda-yellow text-black hover:bg-yellow-400 font-medium px-6 py-3 rounded-md text-center transition duration-300 cursor-pointer">
                            <i class="fa-solid fa-id-card mr-2"></i>Permits & Licenses
                        </span>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <img class="rounded-lg shadow-2xl h-[400px] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1dfa4269e4-928da95bcf7054ceb65d.png" alt="Ugandan business people working together in a modern office with Uganda flag colors in the background, professional business setting" />
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">About MOTIC</h2>
        <div class="w-20 h-1 bg-uganda-red mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          The Ministry of Trade, Industry & Cooperatives (MOTIC) platform simplifies government interactions for Ugandan businesses, enabling seamless access to essential services.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div id="card-vision" class="bg-light-gray p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div class="bg-uganda-red text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <i class="fa-solid fa-eye text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold mb-3">Our Vision</h3>
          <p class="text-gray-600">
            To create a streamlined, accessible platform that empowers every Ugandan business to thrive through simplified government service access.
          </p>
        </div>

        <div id="card-mission" class="bg-light-gray p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div class="bg-uganda-red text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <i class="fa-solid fa-bullseye text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold mb-3">Our Mission</h3>
          <p class="text-gray-600">
            To facilitate business growth in Uganda by reducing bureaucratic barriers and providing efficient digital solutions for regulatory compliance.
          </p>
        </div>

        <div id="card-values" class="bg-light-gray p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div class="bg-uganda-red text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <i class="fa-solid fa-handshake text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold mb-3">Our Values</h3>
          <p class="text-gray-600">
            Transparency, efficiency, inclusivity, and innovation guide our commitment to serving Ugandan businesses of all sizes.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-16 bg-light-gray">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <div class="w-20 h-1 bg-uganda-red mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          MOTIC provides comprehensive e-government services designed specifically for Ugandan businesses and entrepreneurs.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div id="msme-registration" class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-uganda-red">
          <div class="flex items-start">
            <div class="bg-uganda-red/10 text-uganda-red rounded-full p-4 mr-4">
              <i class="fa-solid fa-building-user text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">MSME Registration</h3>
              <p class="text-gray-600 mb-4">
                Register your Micro, Small, or Medium Enterprise quickly and efficiently. Get official recognition and access to government support programs.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Business name registration</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Tax identification number</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Access to support programs</span>
                </li>
              </ul>
              <span class="inline-block bg-uganda-red hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 cursor-pointer">
                                Register Your MSME
                            </span>
            </div>
          </div>
        </div>

        <div id="permits-licenses" class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-uganda-red">
          <div class="flex items-start">
            <div class="bg-uganda-red/10 text-uganda-red rounded-full p-4 mr-4">
              <i class="fa-solid fa-id-card text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">Permits & Licenses</h3>
              <p class="text-gray-600 mb-4">
                Apply for and renew business permits and licenses online. Streamlined processes save you time and reduce paperwork.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Trading licenses</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Health and safety permits</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Import/export documentation</span>
                </li>
              </ul>
              <span class="inline-block bg-uganda-red hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 cursor-pointer">
                                Apply for Permits & Licenses
                            </span>
            </div>
          </div>
        </div>

        <div id="business-advisory" class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-uganda-red">
          <div class="flex items-start">
            <div class="bg-uganda-red/10 text-uganda-red rounded-full p-4 mr-4">
              <i class="fa-solid fa-lightbulb text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">Business Advisory</h3>
              <p class="text-gray-600 mb-4">
                Access guidance and resources to help your business grow and succeed in the Ugandan market.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Market information</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Business planning resources</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Access to funding opportunities</span>
                </li>
              </ul>
              <span class="inline-block bg-uganda-red hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 cursor-pointer">
                                Explore Advisory Services
                            </span>
            </div>
          </div>
        </div>

        <div id="e-payments" class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-uganda-red">
          <div class="flex items-start">
            <div class="bg-uganda-red/10 text-uganda-red rounded-full p-4 mr-4">
              <i class="fa-solid fa-credit-card text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">E-Payments</h3>
              <p class="text-gray-600 mb-4">
                Make secure online payments for government services, fees, and taxes directly through the platform.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Secure payment gateway</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Multiple payment methods</span>
                </li>
                <li class="flex items-center">
                  <i class="fa-solid fa-check text-uganda-red mr-2"></i>
                  <span>Instant payment confirmation</span>
                </li>
              </ul>
              <span class="inline-block bg-uganda-red hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 cursor-pointer">
                                Access E-Payment Services
                            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section id="how-it-works" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
        <div class="w-20 h-1 bg-uganda-red mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Getting started with MOTIC is simple. Follow these steps to access our services.
        </p>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4">
          <div class="bg-uganda-red text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
            1
          </div>
          <h3 class="text-xl font-semibold mb-2">Create Account</h3>
          <p class="text-gray-600">
            Register for a MOTIC account with your basic information
          </p>
        </div>

        <div class="hidden md:block text-uganda-red">
          <i class="fa-solid fa-arrow-right text-3xl"></i>
        </div>

        <div class="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4">
          <div class="bg-uganda-red text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
            2
          </div>
          <h3 class="text-xl font-semibold mb-2">Select Service</h3>
          <p class="text-gray-600">
            Choose the service you need from our comprehensive offerings
          </p>
        </div>

        <div class="hidden md:block text-uganda-red">
          <i class="fa-solid fa-arrow-right text-3xl"></i>
        </div>

        <div class="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4">
          <div class="bg-uganda-red text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
            3
          </div>
          <h3 class="text-xl font-semibold mb-2">Submit Application</h3>
          <p class="text-gray-600">
            Complete and submit your application with required documents
          </p>
        </div>

        <div class="hidden md:block text-uganda-red">
          <i class="fa-solid fa-arrow-right text-3xl"></i>
        </div>

        <div class="flex flex-col items-center text-center md:w-1/4">
          <div class="bg-uganda-red text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
            4
          </div>
          <h3 class="text-xl font-semibold mb-2">Track Progress</h3>
          <p class="text-gray-600">
            Monitor your application status and receive updates
          </p>
        </div>
      </div>

      <div class="text-center mt-12">
                <span class="bg-uganda-red hover:bg-red-700 text-white px-8 py-3 rounded-md transition duration-300 text-lg font-medium cursor-pointer">
                    Get Started Now
                </span>
      </div>
    </div>
  </section>


  <!-- CTA Section -->
  <section id="cta" class="py-16 bg-uganda-red text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Join thousands of Ugandan businesses already benefiting from MOTIC's streamlined government services.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
                <span class="bg-white text-uganda-red hover:bg-gray-100 font-medium px-8 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
                    Register Now
                </span>
        <span class="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
                    Learn More
                </span>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <div class="w-20 h-1 bg-uganda-red mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions about MOTIC services? Our team is here to help.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div id="contact-info">
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">Get in Touch</h3>
            <p class="text-gray-600 mb-6">
              Our support team is available to assist you with any questions or concerns about MOTIC services.
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
          <form class="bg-light-gray p-8 rounded-lg">
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