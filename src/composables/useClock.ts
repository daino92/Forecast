import { onMounted, onUnmounted, ref } from "vue";

export const useClock = () => {
  const currentTime = ref("");
  let timer: number | undefined;

  const updateCurrentTime = () => {
    currentTime.value = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  };

  onMounted(() => {
    updateCurrentTime();
    timer = window.setInterval(updateCurrentTime, 1000);
  });

  onUnmounted(() => {
    if (timer !== undefined) window.clearInterval(timer);
  });

  return { currentTime };
};
