import { signal } from "../../lib/advanx/runtime.ts";

export const activeTab = signal<
  "home" | "features" | "docs" | "constitution" | "components"
>("home");

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
  if (window.location.pathname === "/") {
    document.querySelector(".docs-start")?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#docs-start";
  }
}

export function goConstitution() {
  activeTab.value = "constitution";
  window.location.href = "/constitution/";
}

export function goComponents() {
  activeTab.value = "components";
  window.location.href = "/components/";
}
