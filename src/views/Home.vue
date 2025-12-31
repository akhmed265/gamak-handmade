<template>
  <div class="home">
    <Hero />
    <Catalog />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Catalog from '@/components/Catalog.vue'
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>

