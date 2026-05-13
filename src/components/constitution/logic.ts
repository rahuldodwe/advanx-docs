import { signal } from "../../lib/advanx/runtime.ts";

export const articles = signal([
  {
    id: "ARTICLE I",
    title: "The Trinity of Separation (The Split-Brain)",
    body: "Every component MUST consist of exactly three files: logic.ts (Pure TypeScript/Signals logic), view.html (Pure semantic HTML with mustache bindings), and style.css (Pure scoped CSS). No logic in the View; No UI in the Logic.",
  },
  {
    id: "ARTICLE II",
    title: "The Signal Is Truth",
    body: "Reactivity is handled exclusively via Signals. There shall be no Hooks, Classes, or Life-cycle methods. If data changes, the Signal updates the DOM directly.",
  },
  {
    id: "ARTICLE III",
    title: "Static by Default",
    body: "The framework assumes a component is 100% Static HTML unless a binding or a directive (ax-if, ax-for) is detected. We ship the minimum JavaScript required.",
  },
  {
    id: "ARTICLE IV",
    title: "AI-Context Guarantee",
    body: "Every file must be small and modular. If a file exceeds 150 lines, it is a candidate for splitting. This ensures AI Agents never lose context.",
  },
  {
    id: "ARTICLE V",
    title: "No Magic, Only Contracts",
    body: "The compiler must validate that every variable used in view.html is explicitly exported in logic.ts. If the contract is broken, the build MUST fail with a clear explanation.",
  },
  {
    id: "ARTICLE VI",
    title: "Performance as a Constraint",
    body: "The core runtime must remain under 5KB (gzipped). Features that exceed this budget must be moved to the compiler layer or discarded.",
  },
  {
    id: "ARTICLE VII",
    title: "Intent over Behavior",
    body: "Prioritize declarative attributes (e.g., ax-api, ax-cache) over manual JavaScript execution. Describe what the data is, not how to fetch it.",
  },
  {
    id: "ARTICLE VIII",
    title: "Self-Mapping (Agent Discoverability)",
    body: "Every compiled component MUST emit a .advanx-meta.json sibling file enumerating its signals, actions, and view bindings. This artifact is the Agent's contract for reasoning about the component. If the metadata cannot be produced, the build MUST fail.",
  },
]);

export const isCopied = signal(false);

export function copyRules() {
  const text = [
    "THE ADVANXJS CONSTITUTION",
    "Any code that violates these laws is NOT AdvanxJS.\n",
    ...articles.value.map(
      (a) => `${a.id}: ${a.title.toUpperCase()}\n${a.body}`
    ),
    "\nFounder: Rahul Dodwe | Status: ACTIVE",
  ].join("\n\n");

  navigator.clipboard.writeText(text).then(() => {
    isCopied.value = true;
    setTimeout(() => { isCopied.value = false; }, 2500);
  });
}
