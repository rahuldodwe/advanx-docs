import { signal } from "../../lib/advanx/runtime.ts";

export const heroTitle = signal("Agent-Native Frontend Framework");

export function explore() {
  window.location.href = "./CONSTITUTION.md";
}
