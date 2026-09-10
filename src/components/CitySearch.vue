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
  <form class="mx-auto mt-10 flex max-w-lg gap-3" @submit.prevent="emit('search')">
    <label class="sr-only" for="city">City</label>
    <input
      id="city"
      :value="city"
      class="min-w-0 flex-1 rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-gray-900 shadow-xl shadow-slate-950/20 outline-none ring-teal-300 placeholder:text-gray-500 focus:ring-2"
      type="search"
      placeholder="Search"
      @input="emit('update:city', ($event.target as HTMLInputElement).value)"
    />
    <button class="inline-flex items-center gap-2 rounded-xl border border-teal-200/30 bg-slate-950/75 px-5 py-3 font-semibold text-teal-100 shadow-lg shadow-slate-950/20 backdrop-blur-sm transition hover:border-teal-200/60 hover:bg-slate-900 focus:outline-2 focus:outline-offset-2 focus:outline-teal-300 disabled:cursor-wait disabled:opacity-60" type="submit" :disabled="isLoading">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" />
        <path stroke-linecap="round" d="m16 16 4.5 4.5" />
      </svg>
      {{ isLoading ? "Loading…" : "Go!" }}
    </button>
  </form>
</template>
