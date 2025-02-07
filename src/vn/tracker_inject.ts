console.log("Injected");

import * as browser from "webextension-polyfill";
import { VNStorage } from "./vn_storage";
import App from "./vn.svelte";
import { mount } from "svelte";

const setup = async () => {
  const vn_storage = await VNStorage.build(true);

  let port;
  const connectMessaging = () => {
    port = browser.runtime.connect({ name: "vn_lines" });
    port.onDisconnect.addListener(connectMessaging);

    port.onMessage.addListener(async (data) => {
      await vn_storage.changeInstance(undefined, data["process_path"]);
      await vn_storage.addLine(data["line"], data["date"], data["time"]);
    });
  };
  connectMessaging();

  mount(App, {
    target: document.documentElement,
    props: {
      vn_storage: vn_storage,
    },
  });
};
setup();
