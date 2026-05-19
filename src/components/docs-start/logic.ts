import { signal } from "../../lib/advanx/runtime.ts";

export const isStep1Copied = signal(false);
export const isStep2Copied = signal(false);
export const isStep3Copied = signal(false);
export const isStep4Copied = signal(false);
export const isStep5Copied = signal(false);

function copyTo(sig: { value: boolean }, cmd: string) {
  navigator.clipboard.writeText(cmd).then(() => {
    sig.value = true;
    setTimeout(() => { sig.value = false; }, 2000);
  });
}

export function copyStep1() { copyTo(isStep1Copied, "npx advanxjs create my-app"); }
export function copyStep2() { copyTo(isStep2Copied, "cd my-app && bun install"); }
export function copyStep3() { copyTo(isStep3Copied, "advanx add navbar"); }
export function copyStep4() { copyTo(isStep4Copied, "advanx build src/pages"); }
export function copyStep5() { copyTo(isStep5Copied, "advanx serve dist"); }
