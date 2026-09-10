<script setup lang="ts">
import type { ForecastItem } from "../types";

defineProps<{
  item: ForecastItem;
}>();

const formatDescription = (description: string) =>
  description.replace(/\w\S*/g, (word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`);
</script>

<template>
  <article class="rounded-xl bg-black/10 p-4 text-center backdrop-blur-sm">
    <div class="font-semibold">{{ formatDescription(item.weather[0].description) }}</div>
    <div class="flex justify-center">
      <img class="h-20 w-20" :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`" :alt="item.weather[0].description" />
    </div>
    <div class="font-semibold">{{ Math.ceil(item.main.temp) }}°C · {{ item.main.humidity }}%</div>
  </article>
</template>
