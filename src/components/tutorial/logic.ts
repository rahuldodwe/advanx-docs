import { signal } from "../../lib/advanx/runtime.ts";

export const isStep1Copied = signal(false);
export const isStep2Copied = signal(false);
export const isStep3Copied = signal(false);
export const isStep4Copied = signal(false);

function copyTo(sig: { value: boolean }, cmd: string) {
  navigator.clipboard.writeText(cmd).then(() => {
    sig.value = true;
    setTimeout(() => { sig.value = false; }, 2000);
  });
}

export function copyStep1() { copyTo(isStep1Copied, "npx advanxjs create my-app"); }
export function copyStep2() {
  copyTo(isStep2Copied, 'import { signal } from "advanxjs";\n\nexport const tasks = signal(["Learn AdvanxJS"]);\nexport const draft = signal("");\n\nexport function addTask() {\n  if (!draft.value.trim()) return;\n  tasks.value = [...tasks.value, draft.value];\n  draft.value = "";\n}');
}
export function copyStep3() {
  copyTo(isStep3Copied, '<input ax-model="draft" placeholder="New task..." />\n<button ax-on:click="addTask">Add</button>\n\n<ul>\n  <li ax-for="task in tasks">{{ task }}</li>\n</ul>');
}
export function copyStep4() { copyTo(isStep4Copied, "advanx build src/pages"); }
