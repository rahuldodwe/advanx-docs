import { signal } from "../../lib/advanx/runtime.ts";

export const email = signal("");
export const joined = signal(false);

export function submit() {
  joined.value = true;
}
