<template>
  <!-- Hero Section -->
  <div>
    <section class="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center" data-aos="fade-up">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {{ $t('contact.hero.title') }}
          </h1>
          <p class="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            {{ $t('contact.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <!-- Informations de contact -->
          <div data-aos="fade-right">
            <div class="lg:sticky lg:top-24">
              <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{{ $t('contact.info.title') }}</h2>
              <p class="text-gray-600 text-lg mb-8 sm:mb-12">
                {{ $t('contact.info.subtitle') }}
              </p>

              <div class="space-y-6 sm:space-y-8">
                <!-- Téléphone -->
                <div class="flex items-start space-x-4">
                  <div class="h-10 w-10 sm:h-12 sm:w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-semibold mb-1">{{ $t('contact.info.phone') }}</h3>
                    <a href="tel:+14182647068" class="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors">
                      +1 (418) 609-2403
                    </a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start space-x-4">
                  <div class="h-10 w-10 sm:h-12 sm:w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-semibold mb-1">{{ $t('contact.info.email') }}</h3>
                    <a href="mailto:info@wendync.com" class="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors">
                      info@wendync.com
                    </a>
                  </div>
                </div>

                <!-- Horaires -->
                <div class="flex items-start space-x-4">
                  <div class="h-10 w-10 sm:h-12 sm:w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-semibold mb-1">{{ $t('contact.info.hours.title') }}</h3>
                    <p class="text-sm sm:text-base text-gray-600">
                      {{ $t('contact.info.hours.weekdays') }}<br>
                      {{ $t('contact.info.hours.support') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div data-aos="fade-left">
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 class="text-xl sm:text-2xl font-bold mb-6">{{ $t('contact.form.title') }}</h2>
              <form class="space-y-4 sm:space-y-6">
                <!-- Nom -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('contact.form.name') }}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    class="input-primary"
                    :placeholder="$t('contact.form.namePlaceholder')"/>
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('contact.form.email') }}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    class="input-primary"
                    :placeholder="$t('contact.form.emailPlaceholder')"/>
                </div>

                <!-- Sujet -->
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('contact.form.subject') }}</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    class="select-primary">
                    <option value="">{{ $t('contact.form.subjectPlaceholder') }}</option>
                    <option value="cyber-security">{{ $t('services.support') }}</option>
                    <option value="web-development">{{ $t('services.development') }}</option>
                    <option value="graphic-design">{{ $t('services.graphicDesign') }}</option>
                    <option value="digital-marketing">{{ $t('services.digitalMarketing') }}</option>
                    <option value="other">{{ $t('contact.form.other') }}</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('contact.form.message') }}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    class="input-primary"
                    :placeholder="$t('contact.form.messagePlaceholder')">
                </textarea>
                </div>

                <!-- Bouton d'envoi -->
                <button 
                  type="submit" 
                  class="btn-primary w-full flex items-center justify-center space-x-2 text-sm sm:text-base py-3 sm:py-4">
                  <span>{{ $t('contact.form.send') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 
            class="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-600 mb-4" 
            data-aos="fade-up">
            {{ $t('contact.faq.title') }}
          </h2>
          <p 
            class="text-base sm:text-lg lg:text-xl text-gray-600 px-4" 
            data-aos="fade-up" 
            data-aos-delay="200">
            {{ $t('contact.faq.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div 
            v-for="(question, key) in faqQuestions" 
            :key="key"
            class="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="question.delay">
            <!-- Background Pattern -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Content -->
            <div class="relative">
              <div class="flex items-start space-x-4">
                <div class="h-10 w-10 sm:h-12 sm:w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <component 
                    :is="question.icon" 
                    class="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-orange-600 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 class="text-base sm:text-lg font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {{ $t(`contact.faq.questions.${key}.title`) }}
                  </h3>
                  <p class="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {{ $t(`contact.faq.questions.${key}.answer`) }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-tl-full transform translate-x-8 sm:translate-x-12 translate-y-8 sm:translate-y-12 group-hover:translate-x-6 sm:group-hover:translate-x-8 group-hover:translate-y-6 sm:group-hover:translate-y-8 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  QuestionMarkCircleIcon, 
  WrenchScrewdriverIcon 
} from '@heroicons/vue/24/outline'
import { ref } from 'vue';

const { t } = useI18n()

const formOriginalState = {
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  };

const form = ref(Object.assign({}, formOriginalState));
const send = async () => {

    try {
      const response = await $fetch(
        `${import.meta.env.VITE_APP_URL}/core-api/send/`,
        {
          method: "post",
          body: { message: JSON.stringify(form.value) },
        }
      );

      form.value = Object.assign({}, formOriginalState);
    } catch (e) {
    }
  }
const faqQuestions = {
  response: {
    icon: ClockIcon,
    delay: "100"
  },
  process: {
    icon: QuestionMarkCircleIcon,
    delay: "200"
  },
  pricing: {
    icon: CurrencyDollarIcon,
    delay: "300"
  },
  support: {
    icon: WrenchScrewdriverIcon,
    delay: "400"
  }
}
</script>

<style scoped>
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300;
}

.input-primary {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200;
}

.select-primary {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white;
}
</style>
