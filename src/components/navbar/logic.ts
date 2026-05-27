import { signal, computed } from "../../lib/advanx/runtime.ts";

const _path = window.location.pathname;
const _initialTab = _path.startsWith("/docs") ? "docs"
  : _path.startsWith("/constitution") ? "constitution"
  : _path.startsWith("/components") ? "components"
  : "home";

export const activeTab = signal<
  "home" | "features" | "docs" | "constitution" | "components"
>(_initialTab as any);

const initial = (document.documentElement.dataset.theme === "dark" ? "dark" : "light") as "light" | "dark";
export const theme = signal<"light" | "dark">(initial);
export const themeLabel = computed(() => (theme.value === "dark" ? "DARK" : "LIGHT"));

export function toggle() {
  const next = theme.value === "dark" ? "light" : "dark";
  theme.value = next;
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("advanx-theme", next); } catch (_) {}
}

export function goHome() {
  activeTab.value = "home";
  if (window.location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.location.href = "/";
  }
}

export function goFeatures() {
  activeTab.value = "features";
  if (window.location.pathname === "/") {
    document.querySelector(".features")?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#features";
  }
}

export function goDocs() {
  activeTab.value = "docs";
  window.location.href = "/docs/";
}

export function goConstitution() {
  activeTab.value = "constitution";
  window.location.href = "/constitution/";
}

export function goComponents() {
  activeTab.value = "components";
  window.location.href = "/components/";
}
