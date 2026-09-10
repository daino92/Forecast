<script setup lang="ts">
import {
  clearDayIcon,
  clearNightIcon,
  cloudyIcon,
  drizzleIcon,
  fogIcon,
  overcastIcon,
  partlyCloudyDayIcon,
  partlyCloudyNightIcon,
  rainIcon,
  snowIcon,
  thunderstormsDayIcon,
  thunderstormsNightIcon,
} from "../assets";
import type { ForecastItem } from "../types";

defineProps<{
  item: ForecastItem;
}>();

const formatDescription = (description: string) =>
  description.replace(/\w\S*/g, (word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`);

const getWeatherIcon = (weatherId: number, iconCode: string) => {
  const isNight = iconCode.endsWith("n");

  if (weatherId >= 200 && weatherId < 300) return isNight ? thunderstormsNightIcon : thunderstormsDayIcon;
  if (weatherId >= 300 && weatherId < 400) return drizzleIcon;
  if (weatherId >= 500 && weatherId < 600) return rainIcon;
  if (weatherId >= 600 && weatherId < 700) return snowIcon;
  if (weatherId >= 700 && weatherId < 800) return fogIcon;
  if (weatherId === 800) return isNight ? clearNightIcon : clearDayIcon;
  if (weatherId === 801) return isNight ? partlyCloudyNightIcon : partlyCloudyDayIcon;
  if (weatherId === 802) return cloudyIcon;
  return overcastIcon;
};
</script>

<template>
  <article class="rounded-2xl border border-white/15 bg-white/10 p-5 text-center shadow-xl shadow-slate-950/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15">
    <div class="text-sm font-semibold tracking-wide text-white/90">{{ formatDescription(item.weather[0].description) }}</div>
    <div class="flex justify-center">
      <img class="h-24 w-24 drop-shadow-md" :src="getWeatherIcon(item.weather[0].id, item.weather[0].icon)" :alt="item.weather[0].description" />
    </div>
    <div class="text-lg font-semibold tracking-tight">{{ Math.ceil(item.main.temp) }}°C <span class="text-white/50">·</span> {{ item.main.humidity }}%</div>
  </article>
</template>
