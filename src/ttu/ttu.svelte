<script lang="ts">
  import type { TTUStorage } from "./ttu_storage.js";
  import StatBar from "../components/interface/stat_bar.svelte";

  interface Props {
    ttu_storage: TTUStorage;
  }

  let { ttu_storage }: Props = $props();

  let shown = $state(false);

  // Open the bar with a small delay
  // To sync up with the default bar
  // To avoid hide bar being called straight after
  const showBar = () => {
    setTimeout(() => {
      shown = true;
    }, 300);
  };

  const hideBar = () => {
    shown = false;
  };

  export const resetBarClickEvents = () => {
    document
      .querySelector("button.fixed:nth-child(1)")
      ?.addEventListener("click", showBar);
    document.body.addEventListener("click", hideBar);
  };
  document.addEventListener("ttsu:page.change", (event: CustomEvent) => {
    // Extract data
    const book_title = (event.target as Document).title.replace(
      / \| ッツ Ebook Reader$/,
      "",
    );
    if (["ッツ Ebook Reader", "Settings", "Book Manager"].includes(book_title))
      setTimeout(() => {
        resetBarClickEvents();
      }, 300);
  });
  resetBarClickEvents();

  document.body.addEventListener(
    "dblclick",
    ttu_storage.toggleActive.bind(ttu_storage),
  );

  document.addEventListener("status_active", () => {
    let content = document.querySelector<HTMLElement>(".book-content");
    if (content) content.style.setProperty("filter", "");
  });

  document.addEventListener("status_inactive", () => {
    let content = document.querySelector<HTMLElement>(".book-content");
    if (content) content.style.setProperty("filter", "blur(2px)");
  });
</script>

{#if shown}
  <div
    class="top-0 mx-auto h-12 w-min flex-none content-center items-end"
    style="color: #afb3b9;"
  >
    <StatBar media_storage={ttu_storage} show_lines={false} />
  </div>
{/if}

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
