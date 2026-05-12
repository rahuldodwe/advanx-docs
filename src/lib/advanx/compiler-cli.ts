import fs from "fs";
import path from "path";

async function compile(dir: string) {
  const componentName = path.basename(dir);
  const view = fs.readFileSync(path.join(dir, "view.html"), "utf-8");
  const logicPath = path.join(dir, "logic.ts");
  const style = fs.readFileSync(path.join(dir, "style.css"), "utf-8");

  const glue = `
    import * as logic from "../logic.ts";
    import { bootstrap } from "../../../lib/advanx/runtime.ts";
    bootstrap(${JSON.stringify(view)}, ${JSON.stringify(style)}, logic);
  `;

  const dist = path.join(dir, "dist");
  if (!fs.existsSync(dist)) fs.mkdirSync(dist);
  fs.writeFileSync(path.join(dist, "entry.ts"), glue);

  const result = await Bun.build({
    entrypoints: [path.join(dist, "entry.ts")],
    outdir: dist,
    naming: "bundle.js",
  });

  if (result.success) {
    console.log(`✔ Built ${componentName} successfully`);
  } else {
    console.error(`❌ Failed to build ${componentName}:`, result.logs);
    process.exit(1);
  }
}

const command = process.argv[2];
const target = process.argv[3];
if (command === "build" && target) {
  compile(path.resolve(target));
}
