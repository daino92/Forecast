<script setup lang="ts">
import ForecastCard from "./ForecastCard.vue";
import type { ForecastItem } from "../types";

defineProps<{
  items: ForecastItem[];
}>();
</script>

<template>
  <section id="forecast" class="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5" aria-label="Weather forecast">
    <ForecastCard v-for="item in items" :key="item.dt" :item="item" />
  </section>
</template>
