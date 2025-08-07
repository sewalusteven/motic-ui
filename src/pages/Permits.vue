<script setup lang="ts">
import {ref} from "vue";

const selectedType = ref('')
const selectedIndividualPermit = ref('')
const selectedBusinessPermit = ref('')
</script>

<template>
  <section id="permits-licenses" class="py-10 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center mb-6">
          <i class="fa-solid fa-id-card-clip text-uganda-red text-2xl mr-3"></i>
          <h1 class="text-3xl font-bold text-gray-800">Permits & Licenses</h1>
        </div>

        <div class="bg-light-gray p-6 rounded-lg mb-8">
          <h2 class="text-xl font-semibold mb-4">Application Information</h2>
          <p class="text-gray-600 mb-6">
            Please select whether you are applying as an individual or a business. The required documentation will be adjusted based on your selection.
          </p>

          <div id="application-type-section" class="mb-8">
            <label class="block text-gray-700 font-medium mb-2">Application Type</label>
            <div class="relative">
              <select v-model="selectedType" id="application-type" class="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red">
                <option value="" disabled selected>Select application type</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>

          <!-- Individual Form (Initially Hidden) -->
          <div v-if="selectedType === 'individual'" id="individual-form" class=" space-y-6">
            <h3 class="text-lg font-medium text-gray-800 mb-3">Personal Information</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-medium mb-2">First Name</label>
                <input type="text" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Your first name">
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Last Name</label>
                <input type="text" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Your last name">
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">National ID Number</label>
                <input type="text" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Your NIN">
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Date of Birth</label>
                <input type="date" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red">
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Your email address">
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input type="tel" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Your phone number">
              </div>
            </div>

            <div id="individual-license-section" class="mt-6">
              <label class="block text-gray-700 font-medium mb-2">Select License or Permit Type</label>
              <div class="relative">
                <select v-model="selectedIndividualPermit" id="individual-license-type" class="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <option value="" disabled selected>Select license type</option>
                  <option value="trade">Trading License</option>
                  <option value="hawker">Hawker's Permit</option>
                  <option value="professional">Professional Practice License</option>
                  <option value="transport">Transport Operator License</option>
                  <option value="food">Food Handling Permit</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>

            <!-- Trading License Requirements (Initially Hidden) -->
            <div v-if="selectedIndividualPermit === 'trade'" id="trade-requirements" class=" mt-6">
              <h3 class="text-lg font-medium text-gray-800 mb-3">Trading License Requirements</h3>
              <p class="text-gray-600 mb-4">Please upload the following documents:</p>

              <div class="space-y-4">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> National ID (Front and Back)
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Passport Photo (Recent)
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG. Max size: 2MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Proof of Trading Location (Tenancy Agreement/Ownership)
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>
              </div>
            </div>

            <!-- Hawker's Permit Requirements (Initially Hidden) -->
            <div v-if="selectedIndividualPermit === 'hawker'" id="hawker-requirements" class=" mt-6">
              <h3 class="text-lg font-medium text-gray-800 mb-3">Hawker's Permit Requirements</h3>
              <p class="text-gray-600 mb-4">Please upload the following documents:</p>

              <div class="space-y-4">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> National ID (Front and Back)
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Passport Photo (Recent)
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG. Max size: 2MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Letter from Local Council (LC1)
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Health Certificate (If applicable for food items)
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Form (Initially Hidden) -->
          <div v-if="selectedType === 'business'" id="business-form" class=" space-y-6">
            <div id="business-info-section">
              <h3 class="text-lg font-medium text-gray-800 mb-3">Business Information</h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">Business Name</label>
                  <input type="text" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Official registered name">
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">Business Registration Number (BRN)</label>
                  <input type="text" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="e.g., UG123456789">
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">Business Email</label>
                  <input type="email" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Your business email">
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">Business Phone</label>
                  <input type="tel" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Your business phone">
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">Business Type</label>
                  <div class="relative">
                    <select class="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red">
                      <option value="" disabled selected>Select business type</option>
                      <option value="sole">Sole Proprietorship</option>
                      <option value="partnership">Partnership</option>
                      <option value="llc">Limited Liability Company</option>
                      <option value="corporation">Corporation</option>
                      <option value="cooperative">Cooperative</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i class="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">Number of Employees</label>
                  <input type="number" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red" placeholder="Number of employees">
                </div>
              </div>

              <div class="mt-6">
                <label class="block text-gray-700 font-medium mb-2">Business Address</label>
                <input type="text" class="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-uganda-red mb-4" placeholder="Street address">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

            <div id="business-license-section" class="mt-6">
              <label class="block text-gray-700 font-medium mb-2">Select License or Permit Type</label>
              <div class="relative">
                <select v-model="selectedBusinessPermit" id="business-license-type" class="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <option value="" disabled selected>Select license type</option>
                  <option value="trade">Trading License</option>
                  <option value="manufacturing">Manufacturing License</option>
                  <option value="import">Import License</option>
                  <option value="export">Export License</option>
                  <option value="alcohol">Alcohol & Beverage License</option>
                  <option value="tourism">Tourism License</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>

            <!-- Business Trading License Requirements (Initially Hidden) -->
            <div v-if="selectedBusinessPermit === 'trade'" id="business-trade-requirements" class=" mt-6">
              <h3 class="text-lg font-medium text-gray-800 mb-3">Trading License Requirements</h3>
              <p class="text-gray-600 mb-4">Please upload the following documents:</p>

              <div class="space-y-4">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Certificate of Registration/Incorporation
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Proof of Business Premises (Tenancy Agreement/Ownership)
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Tax Identification Number (TIN) Certificate
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> ID of Business Owner/Director
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>
              </div>
            </div>

            <!-- Manufacturing License Requirements (Initially Hidden) -->
            <div v-if="selectedBusinessPermit === 'manufacturing'" id="manufacturing-requirements" class=" mt-6">
              <h3 class="text-lg font-medium text-gray-800 mb-3">Manufacturing License Requirements</h3>
              <p class="text-gray-600 mb-4">Please upload the following documents:</p>

              <div class="space-y-4">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Certificate of Registration/Incorporation
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Environmental Impact Assessment
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 10MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Tax Identification Number (TIN) Certificate
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Proof of Factory Premises
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>

                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    <span class="text-uganda-red">*</span> Health & Safety Compliance Certificate
                  </label>
                  <input type="file" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-uganda-red">
                  <p class="text-sm text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-gray-200">
            <button id="submit-application" class="bg-uganda-red hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition duration-300">
              Submit Application
            </button>
          </div>
        </div>

        <!-- License Types Information -->
        <div id="license-info-section" class="mb-8">
          <h2 class="text-xl font-semibold mb-4">License & Permit Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div id="license-card-1" class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div class="flex items-start">
                <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                  <i class="fa-solid fa-store text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-2">Trading License</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Required for all businesses engaged in buying and selling goods or services.
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <span class="mr-3"><i class="fa-regular fa-clock mr-1"></i> Processing: 5-7 days</span>
                    <span><i class="fa-solid fa-money-bill mr-1"></i> Fee: UGX 75,000 - 500,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="license-card-2" class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div class="flex items-start">
                <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                  <i class="fa-solid fa-industry text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-2">Manufacturing License</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Required for businesses that produce or transform raw materials into finished goods.
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <span class="mr-3"><i class="fa-regular fa-clock mr-1"></i> Processing: 14-21 days</span>
                    <span><i class="fa-solid fa-money-bill mr-1"></i> Fee: UGX 250,000 - 2,000,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="license-card-3" class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div class="flex items-start">
                <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                  <i class="fa-solid fa-person-walking text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-2">Hawker's Permit</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    For individuals selling goods while moving from place to place or in public spaces.
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <span class="mr-3"><i class="fa-regular fa-clock mr-1"></i> Processing: 3-5 days</span>
                    <span><i class="fa-solid fa-money-bill mr-1"></i> Fee: UGX 30,000 - 50,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="license-card-4" class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div class="flex items-start">
                <div class="bg-uganda-red/10 text-uganda-red rounded-full p-3 mr-4">
                  <i class="fa-solid fa-ship text-xl"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-2">Import/Export License</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Required for businesses engaged in international trade activities.
                  </p>
                  <div class="flex items-center text-sm text-gray-500">
                    <span class="mr-3"><i class="fa-regular fa-clock mr-1"></i> Processing: 10-14 days</span>
                    <span><i class="fa-solid fa-money-bill mr-1"></i> Fee: UGX 200,000 - 1,000,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Application Process Steps -->
        <div id="application-steps" class="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 class="text-xl font-semibold mb-4">Application Process</h2>
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div class="flex items-center mb-4 md:mb-0">
              <div class="bg-success-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <i class="fa-solid fa-check"></i>
              </div>
              <span class="text-gray-800">Application Details</span>
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
              <span class="text-gray-500">Approval & Issuance</span>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div id="faq-section" class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-xl font-semibold mb-4">Frequently Asked Questions</h2>

          <div class="space-y-4">
            <div id="faq-1" class="border-b border-gray-200 pb-4">
              <button class="flex justify-between items-center w-full text-left font-medium">
                <span>How long does it take to process a license application?</span>
                <i class="fa-solid fa-chevron-down text-uganda-red"></i>
              </button>
              <div class="mt-2 text-gray-600">
                Processing times vary by license type. Trading licenses typically take 5-7 business days, while manufacturing licenses may take 2-3 weeks. Import/export licenses usually take 10-14 business days.
              </div>
            </div>

            <div id="faq-2" class="border-b border-gray-200 pb-4">
              <button class="flex justify-between items-center w-full text-left font-medium">
                <span>What happens if my application is rejected?</span>
                <i class="fa-solid fa-chevron-down text-uganda-red"></i>
              </button>
              <div class="mt-2 text-gray-600">
                If your application is rejected, you will receive a notification explaining the reasons. You can address the issues and resubmit your application. There is no additional fee for the first resubmission.
              </div>
            </div>

            <div id="faq-3" class="border-b border-gray-200 pb-4">
              <button class="flex justify-between items-center w-full text-left font-medium">
                <span>Can I apply for multiple licenses at once?</span>
                <i class="fa-solid fa-chevron-down text-uganda-red"></i>
              </button>
              <div class="mt-2 text-gray-600">
                Yes, you can apply for multiple licenses simultaneously. However, each license requires a separate application and fee payment.
              </div>
            </div>

            <div id="faq-4" class="pb-2">
              <button class="flex justify-between items-center w-full text-left font-medium">
                <span>How do I renew my license?</span>
                <i class="fa-solid fa-chevron-down text-uganda-red"></i>
              </button>
              <div class="mt-2 text-gray-600">
                License renewals can be done through this portal. You'll need to log in to your account, select the license to renew, and follow the renewal process. Renewal applications should be submitted at least 30 days before expiration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>