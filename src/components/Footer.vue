<template>
  <footer class="bg-gray-900 text-white pt-8 sm:pt-12 pb-6 sm:pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <h3 class="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Wendy</h3>
          <p class="text-sm sm:text-base text-gray-400 leading-relaxed">
            {{ t('contact.info.subtitle') }}
          </p>
        </div>
        
        <div>
          <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{{ t('footer.services') }}</h4>
          <ul class="space-y-2">
            <li><router-link to="/technical-support" class="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">{{ t('services.support') }}</router-link></li>
            <li><router-link to="/app-development" class="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">{{ t('services.development') }}</router-link></li>
            <li><router-link to="/graphic-design" class="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">{{ t('services.graphicDesign') }}</router-link></li>
            <li><router-link to="/digital-marketing" class="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">{{ t('services.digitalMarketing') }}</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{{ t('footer.contact') }}</h4>
          <ul class="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <span class="block sm:inline">{{ t('contact.info.phone') }}: </span>
              <a href="tel:+14182647068" class="text-gray-400 hover:text-primary transition-colors">+1 (418) 609-2403</a>
            </li>
            <li>
              <span class="block sm:inline">{{ t('contact.info.email') }}: </span>
              <a href="mailto:info@wendync.com" class="text-gray-400 hover:text-primary transition-colors">info@wendync.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400">
        <p class="text-sm sm:text-base">&copy; {{ new Date().getFullYear() }} Wendy Inc. {{ t('footer.rights') }}.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>