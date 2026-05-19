import { signal } from "../../lib/advanx/runtime.ts";

export const features = signal([
  {
    title: "Agent-Native",
    description: "Designed from the ground up for AI agents to read, write, and reason about every component."
  },
  {
    title: "4KB Engine",
    description: "The entire runtime ships under 4KB gzipped. Zero virtual DOM. Direct signal-to-DOM updates."
  },
  {
    title: "Contract Validation",
    description: "Every binding is validated at build time against logic exports. Broken contracts fail the build."
  },
  {
    title: "SPA Routing",
    description: "File-based routing with zero config. Drop a file in src/pages and AdvanxJS wires the URL — no Router component, no boilerplate."
  },
  {
    title: "Built-in Dev Server",
    description: "advanx serve runs your bundled app with hot signal updates. No Vite, no Webpack — just bun, your bundle, and instant feedback."
  }
]);
