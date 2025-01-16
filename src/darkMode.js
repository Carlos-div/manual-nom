// darkMode.js
import { ref } from 'vue';

export const isDarkMode = ref(false);

export function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
}
