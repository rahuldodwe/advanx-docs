import { signal } from "../../lib/advanx/runtime.ts";

export const count = signal(0);

export function increment() {
  count.value++;
}
