<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const { t, locale, setLocale } = useI18n()
const isOpen = ref(false)

const navigation = [
  { name: 'nav.accueil', path: '/' },
  { name: 'nav.models', path: '/models' },
]

const services = [
  { name: 'services.support', path: '/technical-support' },
  { name: 'services.development', path: '/app-development' },
  { name: 'services.graphicDesign', path: '/graphic-design' },
  { name: 'services.digitalMarketing', path: '/digital-marketing' },
]

const toggleLanguage = () => {
  const newLocale = locale.value === 'fr' ? 'en' : 'fr'
  setLocale(newLocale)
}

const closeMenuAndNavigate = (path: string) => {
  isOpen.value = false
  navigateTo(path)
}
</script>

<template>
  <nav 
    class="bg-white/90 backdrop-blur-lg shadow-md fixed w-full z-50 transition-all duration-300"
    :class="{ 'shadow-lg': isOpen }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <div class="flex items-center">
          <NuxtLink 
            to="/" 
            class="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600 hover:opacity-90 transition-opacity duration-200">
            <img src="../assets/images/logo_transparent.png" class="w-8 h-8 sm:w-12 sm:h-12 object-contain" alt="Wendy Logo">
            Wendy
          </NuxtLink>
        </div>
        
        <!-- Desktop menu -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="nav-link relative group py-2 text-sm xl:text-base"
            active-class="text-primary font-semibold">
            {{ $t(item.name) }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </NuxtLink>

          <!-- Services Dropdown -->
          <Menu as="div" class="relative">
            <MenuButton class="nav-link inline-flex items-center group text-sm xl:text-base">
              {{ $t('nav.services') }}
              <ChevronDownIcon class="ml-2 h-5 w-5 transform group-hover:rotate-180 transition-transform duration-300" />
            </MenuButton>

            <transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <MenuItems class="absolute right-0 mt-3 w-64 xl:w-72 origin-top-right rounded-2xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none p-2">
                <MenuItem v-for="service in services" :key="service.name">
                  <NuxtLink
                    :to="service.path"
                    class="group flex items-center px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    @click="isOpen = false">
                    <span class="text-xs xl:text-sm font-medium group-hover:text-primary transition-colors">{{ $t(service.name) }}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-200" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <!-- Language Toggle -->
          <button 
            @click="toggleLanguage"
            class="px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-gray-600 hover:text-primary border border-gray-200 rounded-full hover:border-primary transition-all duration-200"
          >
            {{ locale === 'fr' ? 'En' : 'Fr' }}
          </button>

          <!-- Contact Button -->
          <NuxtLink 
            to="/contact" 
            class="px-4 xl:px-6 py-2 xl:py-3 bg-gradient-to-r from-primary to-orange-600 text-white rounded-full font-semibold text-xs xl:text-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            {{ $t('nav.contactUs') }}
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center lg:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-primary hover:bg-gray-100 transition-all duration-200"
            aria-label="Toggle mobile menu">
            <Bars3Icon v-if="!isOpen" class="h-7 w-7" />
            <XMarkIcon v-else class="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2">
      <div v-if="isOpen" class="lg:hidden bg-white shadow-lg border-t border-gray-100">
        <div class="pt-4 pb-6 px-4 sm:px-5 space-y-2 max-w-7xl mx-auto">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="block px-4 py-3 text-base font-semibold rounded-lg hover:bg-gray-50 hover:text-primary transition-all duration-200 text-gray-900"
            active-class="text-primary bg-gray-50"
            @click="closeMenuAndNavigate(item.path)">
            {{ $t(item.name) }}
          </NuxtLink>

          <!-- Services section in mobile menu -->
          <div class="px-4 py-3">
            <div class="text-base font-semibold text-gray-500 mb-3">{{ $t('nav.services') }}</div>
            <div class="space-y-1 ml-4">
              <NuxtLink
                v-for="service in services"
                :key="service.name"
                :to="service.path"
                class="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 hover:text-primary transition-all duration-200 text-gray-700"
                active-class="text-primary bg-gray-50"
                @click="closeMenuAndNavigate(service.path)">
                {{ $t(service.name) }}
              </NuxtLink>
            </div>
          </div>

          <!-- Language Toggle -->
          <button 
            @click="toggleLanguage"
            class="w-full text-left px-4 py-3 text-sm font-semibold text-gray-600 hover:text-primary rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200">
            🌐 {{ locale === 'fr' ? 'English' : 'Français' }}
          </button>

          <!-- Mobile Contact Button -->
          <NuxtLink 
            to="/contact" 
            class="block px-6 py-3 mt-4 bg-gradient-to-r from-primary to-orange-600 text-white rounded-xl font-semibold text-center hover:opacity-90 transition-all duration-200 text-base"
            @click="closeMenuAndNavigate('/contact')">
            {{ $t('nav.contactUs') }}
          </NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-primary transition-colors duration-300 font-semibold;
}

.nav-link.active {
  @apply text-primary font-bold;
}
</style>
