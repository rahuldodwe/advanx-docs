import { signal } from "../../lib/advanx/runtime.ts";

export const activeTab = signal<"home" | "docs" | "constitution">("home");

export function goHome() {
  activeTab.value = "home";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function goDocs() {
  activeTab.value = "docs";
  document.querySelector(".features")?.scrollIntoView({ behavior: "smooth" });
}

export function goConstitution() {
  activeTab.value = "constitution";
  window.location.href = "/constitution/";
}
