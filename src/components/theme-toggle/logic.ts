import { signal, computed } from "../../lib/advanx/runtime.ts";

const initial = (document.documentElement.dataset.theme === "dark" ? "dark" : "light") as "light" | "dark";

export const theme = signal<"light" | "dark">(initial);

export const themeLabel = computed(() => (theme.value === "dark" ? "DARK" : "LIGHT"));

export function toggle() {
  const next = theme.value === "dark" ? "light" : "dark";
  theme.value = next;
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("advanx-theme", next); } catch (_) {}
}
