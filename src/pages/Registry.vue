<script setup lang="ts">

</script>

<template>
<div class="flex flex-col">
  <!-- Directory Hero Section -->
  <section id="directory-hero" class="bg-gradient-to-r from-uganda-red to-red-800 text-white h-[300px]">
    <div class="container mx-auto px-4 py-12 flex flex-col items-center justify-center h-full">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center">MSME Directory</h1>
      <p class="text-lg md:text-xl mb-6 text-center max-w-3xl">
        Browse and connect with registered Micro, Small, and Medium Enterprises across Uganda
      </p>
      <div class="relative w-full max-w-3xl">
        <input id="global-search" type="text" placeholder="Search by business name, sector, or location..."
               class="w-full px-5 py-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-uganda-yellow">
        <button class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-uganda-yellow hover:bg-yellow-400 text-black px-4 py-2 rounded-md transition">
          <i class="fa-solid fa-magnifying-glass mr-2"></i>Search
        </button>
      </div>
    </div>
  </section>

  <!-- Directory Main Section -->
  <section id="directory-main" class="py-10 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filters Sidebar -->
        <div id="filters-sidebar" class="lg:w-1/4 bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold">Filters</h2>
            <button id="clear-filters" class="text-uganda-red hover:text-red-700 text-sm font-medium">
              Clear All
            </button>
          </div>

          <!-- Business Category Filter -->
          <div id="category-filter" class="mb-6">
            <h3 class="font-medium mb-3">Business Category</h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <input type="checkbox" id="category-agriculture" class="mr-2">
                <label for="category-agriculture">Agriculture & Food</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="category-manufacturing" class="mr-2">
                <label for="category-manufacturing">Manufacturing</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="category-retail" class="mr-2">
                <label for="category-retail">Retail & Wholesale</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="category-services" class="mr-2">
                <label for="category-services">Services</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="category-ict" class="mr-2">
                <label for="category-ict">ICT & Technology</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="category-construction" class="mr-2">
                <label for="category-construction">Construction</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="category-tourism" class="mr-2">
                <label for="category-tourism">Tourism & Hospitality</label>
              </div>
            </div>
            <button class="text-uganda-red hover:underline text-sm mt-2">Show more</button>
          </div>

          <!-- Business Size Filter -->
          <div id="size-filter" class="mb-6">
            <h3 class="font-medium mb-3">Business Size</h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <input type="checkbox" id="size-micro" class="mr-2">
                <label for="size-micro">Micro (1-4 employees)</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="size-small" class="mr-2">
                <label for="size-small">Small (5-49 employees)</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="size-medium" class="mr-2">
                <label for="size-medium">Medium (50-100 employees)</label>
              </div>
            </div>
          </div>

          <!-- Location Filter -->
          <div id="location-filter" class="mb-6">
            <h3 class="font-medium mb-3">Location</h3>
            <select class="w-full p-2 border rounded-md mb-3">
              <option value="">All Regions</option>
              <option value="central">Central Region</option>
              <option value="eastern">Eastern Region</option>
              <option value="northern">Northern Region</option>
              <option value="western">Western Region</option>
            </select>
            <select class="w-full p-2 border rounded-md">
              <option value="">All Districts</option>
              <option value="kampala">Kampala</option>
              <option value="wakiso">Wakiso</option>
              <option value="jinja">Jinja</option>
              <option value="mbarara">Mbarara</option>
              <option value="gulu">Gulu</option>
              <option value="mbale">Mbale</option>
            </select>
          </div>

          <!-- Year Established Filter -->
          <div id="year-filter" class="mb-6">
            <h3 class="font-medium mb-3">Year Established</h3>
            <div class="flex items-center space-x-2">
              <input type="number" placeholder="From" class="w-1/2 p-2 border rounded-md">
              <input type="number" placeholder="To" class="w-1/2 p-2 border rounded-md">
            </div>
          </div>

          <!-- Verified Status Filter -->
          <div id="verified-filter" class="mb-6">
            <h3 class="font-medium mb-3">Verification Status</h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <input type="checkbox" id="verified-yes" class="mr-2">
                <label for="verified-yes">Verified Businesses</label>
              </div>
            </div>
          </div>

          <button class="w-full bg-uganda-red hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
            Apply Filters
          </button>
        </div>

        <!-- Directory Listings -->
        <div id="directory-listings" class="lg:w-3/4">
          <!-- Sorting Options -->
          <div id="sorting-options" class="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center mb-4 md:mb-0">
              <span class="text-gray-600 mr-2">Found:</span>
              <span class="font-semibold">1,248 businesses</span>
            </div>
            <div class="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
              <div class="flex items-center">
                <label class="text-gray-600 mr-2">Sort by:</label>
                <select class="p-2 border rounded-md">
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
              <div class="flex items-center space-x-2">
                <button class="p-2 bg-gray-100 rounded-md" title="Grid View">
                  <i class="fa-solid fa-grip"></i>
                </button>
                <button class="p-2 bg-white border rounded-md" title="List View">
                  <i class="fa-solid fa-list"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Business Listings -->
          <div id="business-list" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Business Card 1 -->
            <div id="business-1" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div class="h-40 bg-gradient-to-br from-uganda-red to-red-600 relative flex items-center justify-center">
                <i class="fa-solid fa-palette text-white text-6xl"></i>
                <div class="absolute top-3 right-3 bg-uganda-yellow text-black text-xs font-medium px-2 py-1 rounded-full">
                  Verified
                </div>
              </div>
              <div class="p-4">
                <div class="flex items-start justify-between">
                  <h3 class="font-semibold text-lg">Kampala Craft Cooperative</h3>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Medium</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-tag mr-1"></i>
                  <span>Handicrafts & Artisanal Products</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-location-dot mr-1"></i>
                  <span>Kampala, Central Region</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-calendar mr-1"></i>
                  <span>Established: 2015</span>
                </div>
                <p class="mt-3 text-sm text-gray-600 line-clamp-2">
                  Specializing in high-quality handmade crafts using traditional Ugandan techniques and materials. Products include baskets, jewelry, and home decor items.
                </p>
                <div class="mt-4 flex justify-between items-center">
                  <button class="bg-uganda-red hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm transition duration-300">
                    View Profile
                  </button>
                  <div class="flex space-x-2">
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Card 2 -->
            <div id="business-2" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div class="h-40 bg-gradient-to-br from-green-500 to-green-600 relative flex items-center justify-center">
                <i class="fa-solid fa-seedling text-white text-6xl"></i>
                <div class="absolute top-3 right-3 bg-uganda-yellow text-black text-xs font-medium px-2 py-1 rounded-full">
                  Verified
                </div>
              </div>
              <div class="p-4">
                <div class="flex items-start justify-between">
                  <h3 class="font-semibold text-lg">Entebbe Fresh Foods</h3>
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Small</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-tag mr-1"></i>
                  <span>Agriculture & Food Processing</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-location-dot mr-1"></i>
                  <span>Entebbe, Central Region</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-calendar mr-1"></i>
                  <span>Established: 2018</span>
                </div>
                <p class="mt-3 text-sm text-gray-600 line-clamp-2">
                  Supplying fresh, organic produce to hotels, restaurants, and supermarkets across Uganda. Specializing in vegetables, fruits, and herbs.
                </p>
                <div class="mt-4 flex justify-between items-center">
                  <button class="bg-uganda-red hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm transition duration-300">
                    View Profile
                  </button>
                  <div class="flex space-x-2">
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Card 3 -->
            <div id="business-3" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div class="h-40 bg-gradient-to-br from-blue-500 to-blue-600 relative flex items-center justify-center">
                <i class="fa-solid fa-laptop-code text-white text-6xl"></i>
                <div class="absolute top-3 right-3 bg-uganda-yellow text-black text-xs font-medium px-2 py-1 rounded-full">
                  Verified
                </div>
              </div>
              <div class="p-4">
                <div class="flex items-start justify-between">
                  <h3 class="font-semibold text-lg">Mbale Tech Solutions</h3>
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Small</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-tag mr-1"></i>
                  <span>ICT & Technology</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-location-dot mr-1"></i>
                  <span>Mbale, Eastern Region</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-calendar mr-1"></i>
                  <span>Established: 2019</span>
                </div>
                <p class="mt-3 text-sm text-gray-600 line-clamp-2">
                  Providing affordable IT solutions to businesses across Eastern Uganda. Services include web development, mobile apps, and IT consulting.
                </p>
                <div class="mt-4 flex justify-between items-center">
                  <button class="bg-uganda-red hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm transition duration-300">
                    View Profile
                  </button>
                  <div class="flex space-x-2">
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Card 4 -->
            <div id="business-4" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div class="h-40 bg-gradient-to-br from-yellow-500 to-yellow-600 relative flex items-center justify-center">
                <i class="fa-solid fa-cow text-white text-6xl"></i>
              </div>
              <div class="p-4">
                <div class="flex items-start justify-between">
                  <h3 class="font-semibold text-lg">Mbarara Dairy Cooperative</h3>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Medium</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-tag mr-1"></i>
                  <span>Agriculture & Dairy Processing</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-location-dot mr-1"></i>
                  <span>Mbarara, Western Region</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-calendar mr-1"></i>
                  <span>Established: 2010</span>
                </div>
                <p class="mt-3 text-sm text-gray-600 line-clamp-2">
                  A cooperative of dairy farmers producing milk, yogurt, cheese, and other dairy products. Supporting over 200 local farmers.
                </p>
                <div class="mt-4 flex justify-between items-center">
                  <button class="bg-uganda-red hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm transition duration-300">
                    View Profile
                  </button>
                  <div class="flex space-x-2">
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Card 5 -->
            <div id="business-5" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div class="h-40 bg-gradient-to-br from-purple-500 to-purple-600 relative flex items-center justify-center">
                <i class="fa-solid fa-shirt text-white text-6xl"></i>
              </div>
              <div class="p-4">
                <div class="flex items-start justify-between">
                  <h3 class="font-semibold text-lg">Gulu Fashion House</h3>
                  <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Micro</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-tag mr-1"></i>
                  <span>Textiles & Clothing</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-location-dot mr-1"></i>
                  <span>Gulu, Northern Region</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-calendar mr-1"></i>
                  <span>Established: 2020</span>
                </div>
                <p class="mt-3 text-sm text-gray-600 line-clamp-2">
                  Creating unique clothing designs that blend traditional Ugandan patterns with modern styles. Empowering local women through employment.
                </p>
                <div class="mt-4 flex justify-between items-center">
                  <button class="bg-uganda-red hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm transition duration-300">
                    View Profile
                  </button>
                  <div class="flex space-x-2">
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Card 6 -->
            <div id="business-6" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div class="h-40 bg-gradient-to-br from-teal-500 to-teal-600 relative flex items-center justify-center">
                <i class="fa-solid fa-mountain-sun text-white text-6xl"></i>
                <div class="absolute top-3 right-3 bg-uganda-yellow text-black text-xs font-medium px-2 py-1 rounded-full">
                  Verified
                </div>
              </div>
              <div class="p-4">
                <div class="flex items-start justify-between">
                  <h3 class="font-semibold text-lg">Jinja Eco Tours</h3>
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Small</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-tag mr-1"></i>
                  <span>Tourism & Hospitality</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-location-dot mr-1"></i>
                  <span>Jinja, Eastern Region</span>
                </div>
                <div class="text-gray-600 text-sm mt-1 flex items-center">
                  <i class="fa-solid fa-calendar mr-1"></i>
                  <span>Established: 2016</span>
                </div>
                <p class="mt-3 text-sm text-gray-600 line-clamp-2">
                  Offering sustainable tourism experiences around the source of the Nile. Specializing in rafting, hiking, and cultural immersion tours.
                </p>
                <div class="mt-4 flex justify-between items-center">
                  <button class="bg-uganda-red hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm transition duration-300">
                    View Profile
                  </button>
                  <div class="flex space-x-2">
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-heart"></i>
                    </button>
                    <button class="text-gray-500 hover:text-uganda-red">
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div id="pagination" class="mt-8 flex justify-center">
            <nav class="flex items-center space-x-1">
              <button class="px-3 py-2 rounded-md border text-gray-500 hover:bg-gray-50">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button class="px-4 py-2 rounded-md bg-uganda-red text-white">1</button>
              <button class="px-4 py-2 rounded-md border hover:bg-gray-50">2</button>
              <button class="px-4 py-2 rounded-md border hover:bg-gray-50">3</button>
              <button class="px-4 py-2 rounded-md border hover:bg-gray-50">4</button>
              <button class="px-4 py-2 rounded-md border hover:bg-gray-50">5</button>
              <span class="px-3 py-2">...</span>
              <button class="px-4 py-2 rounded-md border hover:bg-gray-50">42</button>
              <button class="px-3 py-2 rounded-md border text-gray-500 hover:bg-gray-50">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="directory-cta" class="py-12 bg-uganda-red text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Want to be listed in the MSME Directory?</h2>
      <p class="text-lg mb-8 max-w-3xl mx-auto">
        Register your business with MOTIC to be featured in our directory and connect with potential customers, partners, and investors.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
                <span class="bg-white text-uganda-red hover:bg-gray-100 font-medium px-8 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
                    Register Your MSME
                </span>
        <span class="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md text-lg transition duration-300 cursor-pointer">
                    Learn About Benefits
                </span>
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>

</style>