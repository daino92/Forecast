<script setup lang="ts">
import { backgroundImage, sunImage } from "./assets";
import { CitySearch, ForecastGrid } from "./components";
import { useClock, useWeather } from "./composables";

const { currentTime } = useClock();
const { city, errorMessage, forecastDays, getData, isLoading } = useWeather(import.meta.env.VITE_OPENWEATHER_API_KEY);
</script>

<template>
  <main
    class="min-h-screen bg-cover bg-center bg-no-repeat px-5 py-6 text-white"
    :style="{ backgroundImage: `linear-gradient(rgb(126 93 180 / 38%), rgb(126 93 180 / 38%)), url(${backgroundImage})` }"
  >
    <div class="mx-auto h-24 w-24 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${sunImage})` }" aria-hidden="true"></div>
    <div class="text-center text-4xl font-bold text-white drop-shadow-lg" aria-live="polite">{{ currentTime }}</div>

    <CitySearch v-model:city="city" :is-loading="isLoading" @search="getData" />

    <p v-if="errorMessage" class="mx-auto mt-6 max-w-xl text-center drop-shadow" role="alert">{{ errorMessage }}</p>
    <ForecastGrid :items="forecastDays" />
  </main>
</template>
