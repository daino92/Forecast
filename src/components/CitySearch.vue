<script setup lang="ts">
defineProps<{
  city: string;
  isLoading: boolean;
}>();

const emit = defineEmits<{
  search: [];
  "update:city": [city: string];
}>();
</script>

<template>
  <form class="mx-auto mt-8 flex max-w-md justify-center" @submit.prevent="emit('search')">
    <label class="sr-only" for="city">City</label>
    <input
      id="city"
      :value="city"
      class="min-w-0 flex-1 rounded-l-md border-0 bg-white px-4 py-2 text-gray-900 shadow-sm outline-none ring-teal-300 placeholder:text-gray-500 focus:ring-2"
      type="search"
      placeholder="Search"
      @input="emit('update:city', ($event.target as HTMLInputElement).value)"
    />
    <button class="rounded-r-md bg-teal-400 px-5 py-2 font-semibold text-violet-950 transition hover:bg-teal-300 focus:outline-2 focus:outline-offset-2 focus:outline-teal-300 disabled:cursor-wait disabled:opacity-60" type="submit" :disabled="isLoading">
      {{ isLoading ? "Loading…" : "Go!" }}
    </button>
  </form>
</template>
