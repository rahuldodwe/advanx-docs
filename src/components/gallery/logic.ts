import { signal } from "../../lib/advanx/runtime.ts";

export const isCopied = signal(false);

export function copyNavbar() { copy("navbar"); }
export function copyStats() { copy("stats"); }
export function copyDashboard() { /* COMING SOON */ }

function copy(slug: string) {
  navigator.clipboard.writeText(`advanx add ${slug}`).then(() => {
    isCopied.value = true;
    setTimeout(() => { isCopied.value = false; }, 1800);
  });
}
