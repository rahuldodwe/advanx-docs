import { signal, effect } from "../../lib/advanx/runtime.ts";

export const splitPercent = signal("50");

effect(() => {
  const pct = Number(splitPercent.value);
  const reactEl = document.getElementById("panel-react") as HTMLElement | null;
  const advanxEl = document.getElementById("panel-advanx") as HTMLElement | null;
  if (reactEl) reactEl.style.flex = `0 0 ${pct}%`;
  if (advanxEl) advanxEl.style.flex = `0 0 ${100 - pct}%`;
});
