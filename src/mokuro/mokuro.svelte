<script lang="ts">
  import type { MokuroStorage } from "./mokuro_storage.js";
  import StatBar from "../components/interface/stat_bar.svelte";

  interface Props {
    mokuro_storage: MokuroStorage;
  }

  let { mokuro_storage }: Props = $props();

  document.body.addEventListener(
    "dblclick",
    mokuro_storage.toggleActive.bind(mokuro_storage),
  );

  document.addEventListener("status_active", () => {
    document.getElementById("pagesContainer")?.style.setProperty("filter", "");
  });

  document.addEventListener("status_inactive", () => {
    document
      .getElementById("pagesContainer")
      ?.style.setProperty("filter", "blur(2px)");
  });
</script>

<div class="m-[5px] flex flex-col-reverse content-center items-end">
  <div
    class="z-50 h-10 grow rounded-[3px]"
    style="background: var(--color1); box-shadow: 0px 0px 8px 0px var(--color3a);"
  >
    <StatBar media_storage={mokuro_storage} />
  </div>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
