<script setup lang="ts">
import { backgroundImage, sunImage } from "./assets";
import { CitySearch, ForecastGrid } from "./components";
import { useClock, useWeather } from "./composables";

const { currentTime } = useClock();
const { city, errorMessage, forecastDays, getData, isLoading } = useWeather(import.meta.env.VITE_OPENWEATHER_API_KEY);
</script>

<template>
  <main
    class="relative isolate min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-8 text-white sm:px-8 sm:py-10"
    :style="{ backgroundImage: `linear-gradient(135deg, rgb(15 23 42 / 90%), rgb(76 29 149 / 65%), rgb(15 23 42 / 82%)), url(${backgroundImage})` }"
  >
    <div class="pointer-events-none absolute inset-0 -z-10 bg-slate-950/20"></div>
    <div class="mx-auto h-28 w-28 bg-contain bg-center bg-no-repeat drop-shadow-[0_0_2rem_rgb(250_204_21_/_45%)]" :style="{ backgroundImage: `url(${sunImage})` }" aria-hidden="true"></div>
    <div class="text-center text-5xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-6xl" aria-live="polite">{{ currentTime }}</div>

    <CitySearch v-model:city="city" :is-loading="isLoading" @search="getData" />

    <p v-if="errorMessage" class="mx-auto mt-6 max-w-xl rounded-xl border border-red-200/20 bg-red-950/35 px-4 py-3 text-center text-sm text-red-100 shadow-lg" role="alert">{{ errorMessage }}</p>
    <ForecastGrid :items="forecastDays" />
  </main>
</template>
