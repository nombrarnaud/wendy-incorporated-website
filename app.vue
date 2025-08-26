<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow pt-16 space-y-12">
      <NuxtPage />
      <TranslatedCard />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Auto-imported components in Nuxt don't need explicit imports
</script>
