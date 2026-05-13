import { signal } from "../../lib/advanx/runtime.ts";

export const isInstallCopied = signal(false);

export function copyInstall() {
  navigator.clipboard.writeText("npx advanxjs create my-app").then(() => {
    isInstallCopied.value = true;
    setTimeout(() => { isInstallCopied.value = false; }, 2000);
  });
}
