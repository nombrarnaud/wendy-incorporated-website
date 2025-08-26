<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center py-12 sm:py-16 lg:py-0">
        <!-- Background with overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-blue-600">
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      </div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Content -->
          <div class="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <div class="space-y-4 lg:space-y-6">
              <h1 
                data-aos="fade-up" 
                class="text-4xl md:text-3xl text-transform: uppercase font-bold text-white mb-6">
                {{ t('models.hero.title') }}
              </h1>
              <p 
                data-aos="fade-up" 
                data-aos-delay="200"
                class="text-2xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto">
                {{ t('models.hero.subtitle') }}
              </p>
            </div>
          </div>
          
          <!-- Illustration -->
          <div class="relative">
            <div class="relative z-10">
              <div class="md:block" data-aos="fade-left">
                <div class="relative h-96 perspective-1000">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl"></div>
                  
                  <div class="absolute top-8 left-8 w-48 h-32 bg-white rounded-lg shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                    <div class="p-3 h-full">
                      <div class="h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded mb-2"></div>
                      <div class="space-y-1">
                        <div class="h-2 bg-gray-200 rounded w-full"></div>
                        <div class="h-2 bg-gray-200 rounded w-4/5"></div>
                        <div class="h-2 bg-gray-200 rounded w-3/5"></div>
                      </div>
                      <div class="mt-3 grid grid-cols-2 gap-1">
                        <div class="h-8 bg-gray-100 rounded"></div>
                        <div class="h-8 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div class="absolute top-4 right-12 w-52 h-36 bg-white rounded-lg shadow-2xl transform -rotate-2 hover:-rotate-6 transition-transform duration-500">
                    <div class="p-3 h-full">
                      <div class="h-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded mb-2"></div>
                      <div class="grid grid-cols-3 gap-1 mb-2">
                        <div class="h-6 bg-gray-200 rounded"></div>
                        <div class="h-6 bg-gray-200 rounded"></div>
                        <div class="h-6 bg-gray-200 rounded"></div>
                      </div>
                      <div class="space-y-1">
                        <div class="h-2 bg-gray-100 rounded"></div>
                        <div class="h-2 bg-gray-100 rounded w-4/5"></div>
                      </div>
                      <div class="mt-2 h-6 bg-gradient-to-r from-green-200 to-emerald-200 rounded"></div>
                    </div>
                  </div>

                  <div class="absolute bottom-8 left-16 w-44 h-28 bg-white rounded-lg shadow-2xl transform rotate-1 hover:rotate-3 transition-transform duration-500">
                    <div class="p-3 h-full">
                      <div class="h-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded mb-2"></div>
                      <div class="grid grid-cols-2 gap-1 mb-1">
                        <div class="h-8 bg-gray-200 rounded"></div>
                        <div class="h-8 bg-gray-200 rounded"></div>
                      </div>
                      <div class="h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>

                  <div class="absolute bottom-12 right-8 w-44 h-28 bg-white rounded-lg shadow-2xl transform -rotate-1 hover:-rotate-4 transition-transform duration-500">
                    <div class="p-3 h-full">
                      <div class="h-3 bg-gradient-to-r from-orange-400 to-red-600 rounded mb-2"></div>
                      <div class="grid grid-cols-2 gap-1 mb-2">
                        <div class="h-10 bg-gray-200 rounded"></div>
                        <div class="h-10 bg-gray-200 rounded"></div>
                      </div>
                      <div class="grid grid-cols-3 gap-1">
                        <div class="h-6 bg-gray-200 rounded"></div>
                        <div class="h-6 bg-gray-200 rounded"></div>
                        <div class="h-6 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-40 bg-white rounded-xl shadow-2xl border-2 border-gray-100">
                    <div class="p-4 h-full">
                      <div class="h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded mb-3"></div>
                      <div class="space-y-2 mb-3">
                        <div class="h-2 bg-gray-200 rounded"></div>
                        <div class="h-2 bg-gray-200 rounded w-5/6"></div>
                        <div class="h-2 bg-gray-200 rounded w-4/6"></div>
                      </div>
                      <div class="grid grid-cols-2 gap-2">
                        <div class="h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded"></div>
                        <div class="h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div class="absolute top-16 left-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  <div class="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                  <div class="absolute top-1/3 right-1/4 w-5 h-5 bg-pink-400 rounded-full animate-pulse delay-700"></div>
                </div>
                <div class="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl">
                  <div class="text-2xl font-bold text-primary">{{ models.length -1 }}+</div>
                  <div class="text-sm text-gray-600">{{ t('models.hero.templates') }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4" data-aos="fade-up" data-aos-delay="200">
            <router-link to="/contact" class="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2">
              <span>{{ t('models.hero.cta') }}</span>
              <ArrowRightIcon class="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </router-link>
            <button 
              @click="scrollToModels"
              class="px-6 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-10 text-white rounded-lg hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg">
              {{ t('models.hero.browse') }}
              <ChevronDownIcon class="h-5 w-5 animate-bounce group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Enhanced Categories Section -->
    <section ref="modelsSection" class="py-8 sm:py-12 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="group relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105"
            :class="[
              selectedCategory === category 
                ? 'bg-gradient-to-r from-primary to-orange-600 text-white shadow-xl shadow-primary/30' 
                : 'bg-white text-gray-600 hover:text-primary hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
            ]">
            <span class="relative z-10">{{ t(category) }}</span>
            <div 
              v-if="selectedCategory === category"
              class="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity duration-300"
            ></div>
          </button>
        </div>
      </div>
    </section>

    <!-- Enhanced Models Grid Section -->
    <section class="py-16 sm:py-20 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 sm:mb-6"
            data-aos="fade-up">
            {{ t('models.showcase.title') }}
          </h2>
          <p 
            class="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200">
            {{ t('models.showcase.subtitle') }}
          </p>
        </div>

        <TransitionGroup
          tag="div"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 scale-95 transform translate-y-8"
          enter-to-class="opacity-100 scale-100 transform translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 scale-100 transform translate-y-0"
          leave-to-class="opacity-0 scale-95 transform translate-y-8"
          move-class="transition-all duration-500 ease-in-out">
          <div 
            v-for="(model, index) in filteredModels" 
            :key="model.title"
            class="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 hover:border-primary/20 overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="index * 100">
            <!-- Enhanced Image Container -->
            <div class="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
              <img 
                :src="model.image" 
                :alt="model.title"
                class="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-700 group-hover:scale-110"
                loading="lazy"/>
              <!-- Enhanced Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <!-- Category Badge -->
              <div class="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1 sm:py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-primary shadow-lg border border-white/50 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {{ t(model.category) }}
              </div>

              <!-- Hover Preview Button -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button 
                  @click="openPreview(model)"
                  class="bg-white/90 backdrop-blur-sm text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <span>{{ t('models.preview.details') }}</span>
                  <ArrowTopRightOnSquareIcon class="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            <!-- Enhanced Content Container -->
            <div class="p-5 sm:p-6 lg:p-8">
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {{ t(model.title) }}
              </h3>
              <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                {{ t(model.description) }}
              </p>
              
              <!-- Enhanced Technologies -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span 
                  v-for="(tech, techIndex) in model.technologies.slice(0, 3)" 
                  :key="techIndex"
                  class="px-3 py-1 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-full text-xs sm:text-sm font-medium text-primary/80 hover:text-primary hover:scale-105 transition-all duration-300 border border-primary/20">
                  {{ tech }}
                </span>
                <span 
                  v-if="model.technologies.length > 3"
                  class="px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm font-medium text-gray-500">
                  +{{ model.technologies.length - 3 }}
                </span>
              </div>
              
              <!-- Enhanced Action Button -->
              <div class="pt-4 sm:pt-6 border-t border-gray-100">
                <button 
                  @click="openPreview(model)"
                  class="w-full group/btn relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary/10 hover:to-orange-500/10 text-gray-700 hover:text-primary rounded-xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 border border-gray-200 hover:border-primary/30 font-semibold text-sm sm:text-base">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    <span>{{ t('models.preview.details') }}</span>
                    <ArrowTopRightOnSquareIcon class="h-4 w-4 sm:h-5 sm:w-5 transform transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-500/5 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                </button>
              </div>
              <div class="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div class="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 class="text-xl text-transform: uppercase font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    {{ model.title }}
                  </h3>
                  <p class="text-gray-200 mb-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    {{ t(model.description)}}
                  </p>
                  <div class="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <span 
                      v-for="(tech, techIndex) in model.technologies" 
                      :key="techIndex"
                      class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Enhanced Decorative Elements -->
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </TransitionGroup>

        <!-- Enhanced Empty State -->
        <div v-if="filteredModels.length === 0" class="text-center py-16 sm:py-20">
          <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <svg class="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-1.01-6-2.709V16.5A1.5 1.5 0 007.5 18h9a1.5 1.5 0 001.5-1.5v-3.209z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Aucun modèle trouvé</h3>
          <p class="text-gray-600">Essayez une autre catégorie ou contactez-nous pour un modèle personnalisé.</p>
        </div>
      </div>
    </section>

    <!-- Enhanced Features Section -->
    <section class="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            {{ t('models.features.title') }}
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            {{ t('models.features.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 hover:border-primary/20"
            data-aos="fade-up"
            :data-aos-delay="index * 100">
            <div class="h-12 w-12 sm:h-16 sm:w-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <component :is="feature.icon" class="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-orange-600 transition-colors duration-300" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">{{ t(feature.title)}}</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ t(feature.description)}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section class="bg-gradient-to-r from-orange-500 to-blue-600 py-16">
      <div 
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up">
        <h2 class="text-3xl font-bold text-white mb-8">
          {{ t('models.cta.title') }}
        </h2>
        <router-link 
          to="/contact" 
          class="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
          {{ t('models.cta.button') }}
        </router-link>
      </div>
    </section>

    <!-- Enhanced Preview Modal -->
    <TransitionRoot appear :show="isPreviewOpen" as="template">
      <Dialog as="div" @close="closePreview" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel class="w-full max-w-6xl transform overflow-hidden rounded-3xl bg-white shadow-2xl transition-all">
                <div v-if="selectedModel" class="relative">
                  <!-- Enhanced Close Button -->
                  <button
                    @click="closePreview"
                    class="absolute right-4 sm:right-6 top-4 sm:top-6 z-20 p-2 sm:p-3 text-white bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 backdrop-blur-sm group">
                    <XMarkIcon class="h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <!-- Enhanced Image Header -->
                  <div class="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
                    <img 
                      :src="selectedModel.image" 
                      :alt="selectedModel.title"
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                      <div class="flex items-center gap-4 mb-4">
                        <span class="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-white text-sm sm:text-base font-semibold rounded-full">
                          {{ t(selectedModel.category) }}
                        </span>
                        <div class="flex space-x-1">
                          <div class="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                          <div class="w-2 h-2 bg-white/60 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                          <div class="w-2 h-2 bg-white/60 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                        </div>
                      </div>
                      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                        {{ t(selectedModel.title) }}
                      </h2>
                      <p class="text-base sm:text-lg text-gray-200 max-w-3xl">
                        {{ t(selectedModel.description) }}
                      </p>
                    </div>
                  </div>

                  <!-- Enhanced Content -->
                  <div class="p-6 sm:p-8 lg:p-10">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                      <!-- Main Content -->
                      <div class="lg:col-span-2 space-y-6 sm:space-y-8">
                        <div>
                          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                            <div class="w-1 h-8 bg-gradient-to-b from-primary to-orange-600 rounded-full"></div>
                            {{ t('models.preview.features') }}
                          </h3>
                          <ul class="space-y-3 sm:space-y-4">
                            <li v-for="(feature, index) in selectedModel.features" :key="index" class="flex items-start group">
                                <CheckCircleIcon class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span class="text-sm sm:text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{{ t(feature)}}</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                            <div class="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                            {{ t('models.preview.techno') }}
                          </h3>
                          <div class="flex flex-wrap gap-3">
                            <span 
                              v-for="tech in selectedModel.technologies" 
                              :key="tech"
                              class="group px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-primary/10 hover:to-orange-500/10 text-gray-700 hover:text-primary rounded-xl text-sm sm:text-base font-medium transition-all duration-300 border border-gray-200 hover:border-primary/30 hover:scale-105">
                              {{ tech }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- Enhanced Sidebar -->
                      <div class="space-y-6 sm:space-y-8">
                        <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
                          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{{ t('models.preview.info') }}</h3>
                          <dl class="space-y-4">
                            <div class="group">
                              <dt class="text-sm font-medium text-gray-500 mb-1">{{ t('models.preview.cat') }}</dt>
                              <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{{ t(selectedModel.category )}}</dd>
                            </div>
                            <div class="group">
                              <dt class="text-sm font-medium text-gray-500 mb-1">{{ t('models.preview.instal') }}</dt>
                              <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">6 {{ t('models.preview.day') }}</dd>
                            </div>
                            <div class="group">
                              <dt class="text-sm font-medium text-gray-500 mb-1">{{ t('models.preview.support') }}</dt>
                              <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">6 {{ t('models.preview.month') }}</dd>
                            </div>
                            <div class="group">
                              <dt class="text-sm font-medium text-gray-500 mb-1">{{ t('models.preview.perso') }}</dt>
                              <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{{ t('models.preview.complet') }}</dd>
                            </div>
                          </dl>
                        </div>

                        <div class="space-y-4">
                          <router-link 
                            to="/contact" 
                            class="group block w-full px-6 py-4 bg-gradient-to-r from-primary to-orange-600 text-white text-center font-bold rounded-xl hover:from-primary/90 hover:to-orange-600/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            <span class="flex items-center justify-center gap-2">
                              {{ t('models.contact') }}
                              <ArrowRightIcon class="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </router-link>

                          <button 
                            @click="closePreview"
                            class="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 font-semibold rounded-xl transition-all duration-300">
                            {{ t('models.preview.close') }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { 
  ArrowRightIcon, 
  ChevronDownIcon, 
  XMarkIcon, 
  ArrowTopRightOnSquareIcon,
  CubeIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'

const { t } = useI18n()
const modelsSection = ref<HTMLElement | null>(null)
const selectedCategory = ref('models.category.all')

const categories = ['models.category.all', 'models.category.ecom', 'models.category.corpo', 'models.category.port', 'models.category.blog']

const features = [
  {
    icon: CubeIcon,
    title: 'models.features.templates',
    description: 'models.features.templateDesc'
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'models.features.installation',
    description: 'models.features.installationDesc'
  },
  {
    icon: SparklesIcon,
    title: 'models.features.design',
    description: 'models.features.designDesc'
  }
]

const models = [
  {
    title: 'Muscle Monitoring',
    description: 'models.templates.monitoring.description',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'CSS3', 'JavaScript', 'MySQL'],
    category: 'models.category.corpo',
    features: [
      'models.templates.monitoring.features.one',
      'models.templates.monitoring.features.two',
      'models.templates.monitoring.features.three',
      'models.templates.monitoring.features.four',
      'models.templates.monitoring.features.five',
      'models.templates.monitoring.features.six'
    ]
  },
  {
    title: 'Condos à Montréal',
    description: 'models.templates.condo.description',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'Vue.js'],
    category: 'models.category.ecom',
    features: [
      'models.templates.condo.features.one',
      'models.templates.condo.features.two',
      'models.templates.condo.features.three',
      'models.templates.condo.features.four',
      'models.templates.condo.features.five',
      'models.templates.condo.features.six'
    ]
  },
  {
    title: 'Vallée CPA',
    description: 'models.templates.cpa.description',
    image: 'https://images.pexels.com/photos/7681098/pexels-photo-7681098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['WordPress', 'Bootstrap', 'jQuery', 'PHP'],
    category: 'models.category.corpo',
    features: [
      'models.templates.cpa.features.one',
      'models.templates.cpa.features.two',
      'models.templates.cpa.features.three',
      'models.templates.cpa.features.four',
      'models.templates.cpa.features.five',
      'models.templates.cpa.features.six'
    ]
  },
  {
    title: 'Simplicité Familiale',
    description: 'models.templates.famille.description',
    image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'Elementor', 'bbPress', 'PHP'],
    category: 'models.category.blog',
    features: [
      'models.templates.famille.features.one',
      'models.templates.famille.features.two',
      'models.templates.famille.features.three',
      'models.templates.famille.features.four',
      'models.templates.famille.features.five',
      'models.templates.famille.features.six'
    ]
  },
  {
    title: 'Énergie et Cie',
    description: 'models.templates.energie.description',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'SASS', 'JavaScript', 'D3.js'],
    category: 'models.category.corpo',
    features: [
      'models.templates.energie.features.one',
      'models.templates.energie.features.two',
      'models.templates.energie.features.three',
      'models.templates.energie.features.four',
      'models.templates.energie.features.five',
      'models.templates.energie.features.six'
    ]
  },
  {
    title: 'Native Music',
    description: 'models.templates.music.description',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'Web Audio API', 'React', 'Stripe'],
    category: 'models.category.port',
    features: [
      'models.templates.music.features.one',
      'models.templates.music.features.two',
      'models.templates.music.features.three',
      'models.templates.music.features.four',
      'models.templates.music.features.five',
      'models.templates.music.features.six'
    ]
  }
]

const filteredModels = computed(() => {
  if (selectedCategory.value === 'models.category.all') return models
  return models.filter(model => model.category === selectedCategory.value)
})

// Preview Modal
const isPreviewOpen = ref(false)
const selectedModel = ref(null)

const openPreview = (model) => {
  selectedModel.value = model
  isPreviewOpen.value = true
}

const closePreview = () => {
  isPreviewOpen.value = false
}

// Scroll to models section
const scrollToModels = () => {
  modelsSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300;
}

/* Enhanced line clamping */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth image loading with blur effect */
img {
  @apply transition-all duration-500;
}

img[loading] {
  filter: blur(2px);
}

img:not([loading]) {
  filter: blur(0);
}

/* Enhanced animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(237, 125, 50, 0.3); }
  50% { box-shadow: 0 0 30px rgba(237, 125, 50, 0.5); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

/* Custom scrollbar for modal */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #ed7d32;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #d35f1d;
}
</style>