<script setup lang="ts">

</script>

<template>
  <section id="business-registration" class="py-10 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center mb-6">
          <i class="fa-solid fa-building-user text-uganda-red text-2xl mr-3"></i>
          <h1 class="text-3xl font-bold text-gray-800">Business Registration</h1>
        </div>

        <div class="bg-light-gray p-6 rounded-lg mb-8">
          <h2 class="text-xl font-semibold mb-4">Business Information</h2>
          <div class="w-full bg-green-50 p-4 rounded-lg border mb-3 border-green-600 text-green-600  flex flex-col">
            <span class="font-bold">Success</span>
            <span class="text-sm">Your account has been successfully created. we have sent a verification link to your email josep**@gmail.com </span>
          </div>

          <p class="text-gray-600 mb-4">
            Please provide your business details below. This information will be used to verify your business and provide you with the appropriate services.
          </p>

          <div id="registration-form" class="space-y-6">
            <!-- Business Size Selection -->
            <div id="business-size-section">
              <label class="block text-gray-700 font-medium mb-2">Business Size</label>
              <div class="relative">
                <select id="business-size" class="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <option value="" disabled selected>Select your business size</option>
                  <option value="micro">Micro Enterprise (1-4 employees)</option>
                  <option value="small">Small Enterprise (5-49 employees)</option>
                  <option value="medium">Medium Enterprise (50-100 employees)</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <p class="text-sm text-gray-500 mt-1">
                Your business size determines the services and support available to you.
              </p>
            </div>

            <!-- Business Registration Number Section -->
            <div id="brn-section" class="relative">
              <label class="block text-gray-700 font-medium mb-2">Business Registration Number (BRN)</label>
              <div class="flex">
                <input id="brn-input" type="text" class="flex-grow bg-white border border-gray-300 rounded-l-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Enter your BRN (e.g., UG123456789)">
                <button id="verify-btn" class="bg-uganda-red hover:bg-red-700 text-white font-medium py-3 px-6 rounded-r-md transition duration-300">
                  Verify
                </button>
              </div>

              <!-- Verification Status (Initially Hidden) -->
              <div id="verification-pending" class="hidden mt-2 text-yellow-600">
                <i class="fa-solid fa-spinner fa-spin mr-2"></i>
                Verifying your business registration number...
              </div>

              <div id="verification-success" class="hidden mt-2 text-success-green">
                <i class="fa-solid fa-circle-check mr-2"></i>
                Business registration verified successfully!
              </div>

              <div id="verification-error" class="hidden mt-2 text-uganda-red">
                <i class="fa-solid fa-circle-exclamation mr-2"></i>
                We couldn't verify this BRN. Please check and try again.
              </div>

              <p class="text-sm text-gray-500 mt-1">
                Your BRN will be verified instantly with the Uganda Registration Services Bureau.
              </p>
            </div>

            <!-- Additional Business Information -->
            <div id="additional-info-section" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-medium mb-2">Business Name</label>
                <input type="text" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Official registered name">
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Trading Name (if different)</label>
                <input type="text" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Name you operate under">
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Business Email</label>
                <input type="email" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Your business email">
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Business Phone</label>
                <input type="tel" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Your business phone">
              </div>
            </div>

            <!-- Business Address -->
            <div id="address-section">
              <h3 class="text-lg font-medium text-gray-800 mb-3">Business Address</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2">
                  <label class="block text-gray-700 font-medium mb-2">Street Address</label>
                  <input type="text" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Street address">
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">City/Town</label>
                  <input type="text" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="City or town">
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">District</label>
                  <div class="relative">
                    <select class="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red">
                      <option value="" disabled selected>Select district</option>
                      <option value="kampala">Kampala</option>
                      <option value="wakiso">Wakiso</option>
                      <option value="jinja">Jinja</option>
                      <option value="mbarara">Mbarara</option>
                      <option value="gulu">Gulu</option>
                      <option value="other">Other</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i class="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <button id="continue-btn" class="bg-uganda-red hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                Continue Registration
              </button>
            </div>
          </div>
        </div>

        <!-- Available Services Section -->
        <div id="services-section" class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Available Services for Your Business</h2>
          <p class="text-gray-600 mb-6">
            Based on your business profile, the following services are available to you:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div id="service-card-1" class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div class="flex items-start">
                <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                  <i class="fa-solid fa-certificate text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-2">Business Certification</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Official certification for your business to operate legally in Uganda.
                  </p>
                  <span class="inline-block text-uganda-red text-sm font-medium cursor-pointer">
                                        Learn more <i class="fa-solid fa-arrow-right ml-1"></i>
                                    </span>
                </div>
              </div>
            </div>

            <div id="service-card-2" class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div class="flex items-start">
                <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                  <i class="fa-solid fa-hand-holding-dollar text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-2">MSME Financing</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Access to government-backed loans and financial support for your business.
                  </p>
                  <span class="inline-block text-uganda-red text-sm font-medium cursor-pointer">
                                        Learn more <i class="fa-solid fa-arrow-right ml-1"></i>
                                    </span>
                </div>
              </div>
            </div>

            <div id="service-card-3" class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div class="flex items-start">
                <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                  <i class="fa-solid fa-graduation-cap text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-2">Business Training</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Free training programs to help you grow and manage your business effectively.
                  </p>
                  <span class="inline-block text-uganda-red text-sm font-medium cursor-pointer">
                                        Learn more <i class="fa-solid fa-arrow-right ml-1"></i>
                                    </span>
                </div>
              </div>
            </div>

            <div id="service-card-4" class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div class="flex items-start">
                <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                  <i class="fa-solid fa-globe text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-2">Export Support</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Assistance with exporting your products to international markets.
                  </p>
                  <span class="inline-block text-uganda-red text-sm font-medium cursor-pointer">
                                        Learn more <i class="fa-solid fa-arrow-right ml-1"></i>
                                    </span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 text-center">
                        <span class="text-gray-600 text-sm">
                            More services will be available after completing your registration
                        </span>
          </div>
        </div>

        <!-- Registration Steps -->
        <div id="registration-steps" class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-xl font-semibold mb-4">Registration Process</h2>
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div class="flex items-center mb-4 md:mb-0">
              <div class="bg-success-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <i class="fa-solid fa-check"></i>
              </div>
              <span class="text-gray-800">Business Information</span>
            </div>

            <div class="hidden md:block text-gray-400">
              <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div class="flex items-center mb-4 md:mb-0">
              <div class="bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                2
              </div>
              <span class="text-gray-500">Document Upload</span>
            </div>

            <div class="hidden md:block text-gray-400">
              <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div class="flex items-center mb-4 md:mb-0">
              <div class="bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                3
              </div>
              <span class="text-gray-500">Review & Payment</span>
            </div>

            <div class="hidden md:block text-gray-400">
              <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div class="flex items-center">
              <div class="bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                4
              </div>
              <span class="text-gray-500">Confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>