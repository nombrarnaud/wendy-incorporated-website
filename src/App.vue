
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import TranslatedCard from './components/TranslatedCard.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow pt-16 space-y-12">
      <router-view></router-view>
      <TranslatedCard />
    </main>
    <Footer />
  </div>
</template>
