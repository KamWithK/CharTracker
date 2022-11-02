const esbuild = require("esbuild");
const sveltePlugin = require("esbuild-svelte");
const sveltePreprocess = require("svelte-preprocess");
const fs = require("fs")

fs.copyFileSync("manifest.json", "build/manifest.json")
fs.cpSync("docs", "build/docs/", { recursive: true })
fs.cpSync("fonts", "build/fonts/", { recursive: true })

esbuild
  .build({
    entryPoints: [
      "src/background.js",
      "src/vn/tracker_inject.ts",
      "src/mokuro/mokuro_inject.ts",
      "src/ttu/ttu_inject.ts",
      "src/stats/stats_inject.ts",
      "src/fonts.ts"
    ],
    mainFields: ["svelte", "browser", "module", "main"],
    bundle: true,
    minify: false,
    target: ["chrome102", "firefox102"],
    outdir: "build",
    plugins: [sveltePlugin({"preprocess": sveltePreprocess({postcss: true})})]
  })
  .catch(() => process.exit(1));
