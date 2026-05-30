import { signal } from "../../lib/advanx/runtime.ts";

export const heading = signal("The SEO Engine");
export const isCopied = signal(false);

export function copyExport() {
  navigator.clipboard.writeText("advanx export src/pages --out dist").then(() => {
    isCopied.value = true;
    setTimeout(() => { isCopied.value = false; }, 2000);
  });
}
