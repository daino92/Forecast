import { computed, onMounted, ref } from "vue";

import type { ForecastItem } from "../types";

export const useWeather = (apiKey: string | undefined) => {
  const city = ref("Athens");
  const forecast = ref<ForecastItem[]>([]);
  const isLoading = ref(false);
  const errorMessage = ref("");
  const forecastDays = computed(() => forecast.value.filter((_, index) => index % 8 === 0));

  const getData = async () => {
    const requestedCity = city.value.trim();
    if (!requestedCity) {
      errorMessage.value = "Enter a city to search.";
      return;
    }

    if (!apiKey) {
      errorMessage.value = "Add VITE_OPENWEATHER_API_KEY to a local .env file to load forecasts.";
      return;
    }

    isLoading.value = true;
    errorMessage.value = "";

    try {
      const params = new URLSearchParams({ q: requestedCity, appid: apiKey, units: "metric", lang: "en" });
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?${params}`);
      if (!response.ok) throw new Error("City not found");
      const data: { list?: ForecastItem[] } = await response.json();
      forecast.value = data.list ?? [];
    } catch (error) {
      forecast.value = [];
      errorMessage.value = error instanceof Error ? error.message : "Unable to load the forecast.";
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(getData);

  return { city, errorMessage, forecastDays, getData, isLoading };
};
