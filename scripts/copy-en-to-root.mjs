import { cpSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", "out");
const enDir = resolve(outDir, "en");

if (!existsSync(enDir)) {
  console.error("out/en/ not found — skipping copy");
  process.exit(0);
}

cpSync(enDir, outDir, { recursive: true, force: true });
console.log("Copied out/en/* to out/");
