(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
      (function(global2, factory) {
        if (typeof define === "function" && define.amd) {
          define("webextension-polyfill", ["module"], factory);
        } else if (typeof exports !== "undefined") {
          factory(module);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod);
          global2.browser = mod.exports;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(module2) {
        "use strict";
        if (typeof globalThis != "object" || typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(req, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            });
            let loggedSendResponseDeprecationWarning = false;
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    if (!loggedSendResponseDeprecationWarning) {
                      console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                      loggedSendResponseDeprecationWarning = true;
                    }
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = globalThis.browser;
        }
      });
    }
  });

  // node_modules/date-fns/esm/_lib/requiredArgs/index.js
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }

  // node_modules/date-fns/esm/toDate/index.js
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
        console.warn(new Error().stack);
      }
      return new Date(NaN);
    }
  }

  // node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
  function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
      output = "0" + output;
    }
    return sign + output;
  }

  // node_modules/date-fns/esm/formatISO/index.js
  function formatISO(date, options) {
    requiredArgs(1, arguments);
    var originalDate = toDate(date);
    if (isNaN(originalDate.getTime())) {
      throw new RangeError("Invalid time value");
    }
    var format = !(options !== null && options !== void 0 && options.format) ? "extended" : String(options.format);
    var representation = !(options !== null && options !== void 0 && options.representation) ? "complete" : String(options.representation);
    if (format !== "extended" && format !== "basic") {
      throw new RangeError("format must be 'extended' or 'basic'");
    }
    if (representation !== "date" && representation !== "time" && representation !== "complete") {
      throw new RangeError("representation must be 'date', 'time', or 'complete'");
    }
    var result = "";
    var tzOffset = "";
    var dateDelimiter = format === "extended" ? "-" : "";
    var timeDelimiter = format === "extended" ? ":" : "";
    if (representation !== "time") {
      var day = addLeadingZeros(originalDate.getDate(), 2);
      var month = addLeadingZeros(originalDate.getMonth() + 1, 2);
      var year = addLeadingZeros(originalDate.getFullYear(), 4);
      result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
    }
    if (representation !== "date") {
      var offset = originalDate.getTimezoneOffset();
      if (offset !== 0) {
        var absoluteOffset = Math.abs(offset);
        var hourOffset = addLeadingZeros(Math.floor(absoluteOffset / 60), 2);
        var minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
        var sign = offset < 0 ? "+" : "-";
        tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
      } else {
        tzOffset = "Z";
      }
      var hour = addLeadingZeros(originalDate.getHours(), 2);
      var minute = addLeadingZeros(originalDate.getMinutes(), 2);
      var second = addLeadingZeros(originalDate.getSeconds(), 2);
      var separator = result === "" ? "" : "T";
      var time = [hour, minute, second].join(timeDelimiter);
      result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
    }
    return result;
  }

  // src/calculations.js
  var IGNORE = /[〔〕《》〖〗〘〙〚〛【】「」［］『』｛｝\[\]()（）｟｠〈〉≪≫。、.,※＊'：！?？‥…―─ｰ〽～→♪♪ ♫ ♬ ♩\"　\t\n]/g;
  var SPLIT = /[\n。.！?？]/g;
  function charsInLine(line) {
    return line.replaceAll(IGNORE, "").length;
  }
  function lineSplitCount(line) {
    return line.split(SPLIT).filter((value) => value.replaceAll(IGNORE, "") != "").length;
  }
  function dateNowString() {
    rn = new Date();
    return formatISO(rn, { "representation": "date" });
  }
  function timeNowSeconds() {
    let rn2 = new Date();
    return rn2.getTime() / 1e3;
  }

  // node_modules/async-mutex/index.mjs
  var E_TIMEOUT = new Error("timeout while waiting for mutex to become available");
  var E_ALREADY_LOCKED = new Error("mutex already locked");
  var E_CANCELED = new Error("request for lock canceled");
  var __awaiter$2 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var Semaphore = class {
    constructor(_maxConcurrency, _cancelError = E_CANCELED) {
      this._maxConcurrency = _maxConcurrency;
      this._cancelError = _cancelError;
      this._queue = [];
      this._waiters = [];
      if (_maxConcurrency <= 0) {
        throw new Error("semaphore must be initialized to a positive value");
      }
      this._value = _maxConcurrency;
    }
    acquire() {
      const locked = this.isLocked();
      const ticketPromise = new Promise((resolve, reject) => this._queue.push({ resolve, reject }));
      if (!locked)
        this._dispatch();
      return ticketPromise;
    }
    runExclusive(callback) {
      return __awaiter$2(this, void 0, void 0, function* () {
        const [value, release] = yield this.acquire();
        try {
          return yield callback(value);
        } finally {
          release();
        }
      });
    }
    waitForUnlock() {
      return __awaiter$2(this, void 0, void 0, function* () {
        if (!this.isLocked()) {
          return Promise.resolve();
        }
        const waitPromise = new Promise((resolve) => this._waiters.push({ resolve }));
        return waitPromise;
      });
    }
    isLocked() {
      return this._value <= 0;
    }
    release() {
      if (this._maxConcurrency > 1) {
        throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
      }
      if (this._currentReleaser) {
        const releaser = this._currentReleaser;
        this._currentReleaser = void 0;
        releaser();
      }
    }
    cancel() {
      this._queue.forEach((ticket) => ticket.reject(this._cancelError));
      this._queue = [];
    }
    _dispatch() {
      const nextTicket = this._queue.shift();
      if (!nextTicket)
        return;
      let released = false;
      this._currentReleaser = () => {
        if (released)
          return;
        released = true;
        this._value++;
        this._resolveWaiters();
        this._dispatch();
      };
      nextTicket.resolve([this._value--, this._currentReleaser]);
    }
    _resolveWaiters() {
      this._waiters.forEach((waiter) => waiter.resolve());
      this._waiters = [];
    }
  };
  var __awaiter$1 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var Mutex = class {
    constructor(cancelError) {
      this._semaphore = new Semaphore(1, cancelError);
    }
    acquire() {
      return __awaiter$1(this, void 0, void 0, function* () {
        const [, releaser] = yield this._semaphore.acquire();
        return releaser;
      });
    }
    runExclusive(callback) {
      return this._semaphore.runExclusive(() => callback());
    }
    isLocked() {
      return this._semaphore.isLocked();
    }
    waitForUnlock() {
      return this._semaphore.waitForUnlock();
    }
    release() {
      this._semaphore.release();
    }
    cancel() {
      return this._semaphore.cancel();
    }
  };

  // src/storage/instance_storage.js
  var browser = require_browser_polyfill();
  var InstanceStorage = class {
    constructor(uuid) {
      this.uuid = uuid;
      this.mutex = new Mutex();
    }
    async setup() {
      this.details = (await browser.storage.local.get(this.uuid))[this.uuid];
      const uuid_date_key = JSON.stringify([this.uuid, dateNowString()]);
      this.today_stats = (await browser.storage.local.get(uuid_date_key))[uuid_date_key];
    }
    async updateDetails(details) {
      Object.assign(this.details, details);
      let detail_entries = {};
      detail_entries[this.uuid] = this.details;
      await browser.storage.local.set(detail_entries);
    }
    async setDailyStats(date, values) {
      const uuid_date_key = JSON.stringify([this.uuid, date]);
      let daily_stats_entry = await browser.storage.local.get(uuid_date_key);
      daily_stats_entry[uuid_date_key] = values;
      if (date == dateNowString()) {
        this.today_stats = daily_stats_entry[uuid_date_key];
      }
      await browser.storage.local.set(daily_stats_entry);
    }
    async addStats(date_stat_adds, multiple = 1) {
      return this.mutex.runExclusive(async () => this.#addStats(date_stat_adds, multiple));
    }
    async #addStats(date_stat_adds, multiple = 1) {
      const date_keys = Object.keys(date_stat_adds).map((date) => JSON.stringify([this.uuid, date]));
      let date_stats = await browser.storage.local.get(date_keys);
      date_keys.forEach((key) => {
        let date = JSON.parse(key)[1];
        if (!date_stats.hasOwnProperty(key)) {
          date_stats[key] = {};
        }
        Object.entries(date_stat_adds[date]).forEach(([stat, value]) => {
          if (!date_stats[key].hasOwnProperty(stat)) {
            date_stats[key][stat] = 0;
          }
          date_stats[key][stat] += value * multiple;
        });
        if (date == dateNowString()) {
          this.today_stats = date_stats[key];
        }
      });
      await browser.storage.local.set(date_stats);
    }
    async addDailyStats(date, values, multiple = 1) {
      let date_stat_adds = {};
      date_stat_adds[date] = values;
      await this.addStats(date_stat_adds, multiple);
    }
    async subStats(date_stat_adds, multiple = 1) {
      await this.addStats(date_stat_adds, -1 * multiple);
    }
    async subDailyStats(date, values, multiple = 1) {
      await this.addDailyStats(date, values, -1 * multiple);
    }
    async insertLine(line, time) {
      const line_key = JSON.stringify([this.uuid, this.details["last_line_added"] + 1]);
      let line_entry = {};
      line_entry[line_key] = [line, time];
      await this.updateDetails({
        "last_line_added": this.details["last_line_added"] + 1,
        "last_active_at": time
      });
      await browser.storage.local.set(line_entry);
    }
    async deleteLine(line_id) {
      await browser.storage.local.remove(JSON.stringify([this.uuid, line_id]));
    }
    async deleteLines(line_ids) {
      await browser.storage.local.remove(line_ids.map((line_id) => JSON.stringify([this.uuid, line_id])));
    }
    async getLines(max_lines = void 0) {
      if (!this.details.hasOwnProperty("last_line_added")) {
        return;
      }
      const max_line_id = this.details["last_line_added"];
      const min_line_id = max_lines <= 0 | max_lines === void 0 | isNaN(max_lines) ? 0 : Math.max(0, this.details["last_line_added"] - max_lines + 1);
      const id_queries = [...Array(max_line_id - min_line_id + 1).keys()].map((index) => JSON.stringify([this.uuid, min_line_id + index]));
      const lines = await browser.storage.local.get(id_queries);
      return Object.entries(lines).map(([key, line_data]) => {
        let line = typeof line_data === "string" ? line_data : line_data[0];
        let time = typeof line_data === "string" ? void 0 : line_data[1];
        let [uuid, id] = JSON.parse(key);
        return [uuid, id, line, time];
      });
    }
    async addToDates(date) {
      let day_entries = await browser.storage.local.get("immersion_dates");
      if (!day_entries.hasOwnProperty("immersion_dates")) {
        day_entries["immersion_dates"] = [];
      }
      if (!day_entries["immersion_dates"].includes(date)) {
        day_entries["immersion_dates"].push(date);
        await browser.storage.local.set(day_entries);
      }
    }
    async addToDate(date) {
      let day_entries = await browser.storage.local.get(date);
      if (!day_entries.hasOwnProperty(date)) {
        day_entries[date] = [];
      }
      if (!day_entries[date].includes(this.uuid)) {
        day_entries[date].push(this.uuid);
        await browser.storage.local.set(day_entries);
      }
    }
  };

  // src/storage/type_storage.js
  var browser2 = require_browser_polyfill();
  var TypeStorage = class {
    constructor(type) {
      this.type = type;
    }
    async setup() {
      let types_list = await browser2.storage.local.get("types");
      if (!types_list.hasOwnProperty("types")) {
        types_list["types"] = [];
      }
      if (!types_list["types"].includes(this.type)) {
        types_list["types"].push(this.type);
      }
      await browser2.storage.local.set(types_list);
      let type_dict = await browser2.storage.local.get(this.type);
      if (!type_dict.hasOwnProperty(this.type)) {
        type_dict[this.type] = {};
      }
      this.properties = type_dict[this.type];
      await browser2.storage.local.set(type_dict);
    }
    async updateProperties(properties) {
      Object.assign(this.properties, properties);
      let properties_entry = {};
      properties_entry[this.type] = this.properties;
      await browser2.storage.local.set(properties_entry);
    }
    async getMedia(given_identifier) {
      const media_entries = await browser2.storage.local.get("media");
      const media_key = JSON.stringify([given_identifier, this.type]);
      if (media_entries.hasOwnProperty("media") && media_entries["media"].hasOwnProperty(media_key)) {
        return media_entries["media"][media_key];
      } else {
        return this.addMedia(given_identifier);
      }
    }
    async addMedia(given_identifier, uuid = void 0) {
      let media_entries = await browser2.storage.local.get("media");
      if (!media_entries.hasOwnProperty("media")) {
        media_entries["media"] = {};
      }
      const media_key = JSON.stringify([given_identifier, this.type]);
      if (!media_entries["media"].hasOwnProperty(media_key)) {
        let new_uuid = uuid !== void 0 ? uuid : crypto.randomUUID();
        media_entries["media"][media_key] = new_uuid;
        const details_entry = await browser2.storage.local.get(new_uuid);
        if (!details_entry.hasOwnProperty(new_uuid)) {
          media_entries[new_uuid] = {
            "name": given_identifier,
            "given_identifier": given_identifier,
            "type": this.type,
            "last_line_added": -1
          };
        }
        await browser2.storage.local.set(media_entries);
      }
      return media_entries["media"][media_key];
    }
  };

  // src/storage/media_storage.js
  var REFRESH_STATS_INTERVAL = 1e3;
  var MediaStorage = class {
    constructor(type_storage, instance_storage, live_stat_update = false) {
      this.type_storage = type_storage;
      this.instance_storage = instance_storage;
      this.properties = this.type_storage.properties;
      if (this.instance_storage !== void 0) {
        this.details = this.instance_storage.details;
        this.uuid = this.properties["previous_uuid"];
        this.logLines();
      }
      if (live_stat_update) {
        this.stop_ticker(false);
        setInterval(this.#ticker.bind(this), REFRESH_STATS_INTERVAL);
      }
    }
    static async build(type) {
      const type_storage = new TypeStorage(type);
      await type_storage.setup();
      let instance_storage;
      if (type_storage.properties.hasOwnProperty("previous_uuid")) {
        instance_storage = new InstanceStorage(type_storage.properties["previous_uuid"]);
        await instance_storage.setup();
      } else {
        instance_storage = void 0;
      }
      return [type_storage, instance_storage];
    }
    async changeInstance(new_uuid, given_identifier = void 0) {
      if (new_uuid == void 0 && given_identifier !== void 0) {
        new_uuid = await this.type_storage.getMedia(given_identifier);
      }
      if (this.uuid == new_uuid) {
        return;
      }
      if (this.properties["previous_uuid"] != new_uuid) {
        this.type_storage.updateProperties({ "previous_uuid": new_uuid });
      }
      this.instance_storage = new InstanceStorage(new_uuid);
      await this.instance_storage.setup();
      this.uuid = this.instance_storage.uuid;
      this.details = this.instance_storage.details;
      await this.logLines();
    }
    async logLines() {
      const event = new CustomEvent("media_changed", {
        "detail": {
          "uuid": this.uuid,
          "name": this.details["name"]
        }
      });
      document.dispatchEvent(event);
    }
    start_ticker(event = true) {
      if (this.previous_time == void 0) {
        this.previous_time = timeNowSeconds();
      }
      if (event) {
        const event2 = new Event("status_active");
        document.dispatchEvent(event2);
      }
    }
    stop_ticker(event = true) {
      this.previous_time = void 0;
      if (event) {
        const event2 = new Event("status_inactive");
        document.dispatchEvent(event2);
      }
    }
    async #ticker() {
      const time_now = timeNowSeconds();
      if (this.instance_storage == void 0 || this.previous_time == void 0) {
        return;
      }
      const time_between_lines = this.details["last_active_at"] !== void 0 ? time_now - this.details["last_active_at"] : 0;
      const time_between_ticks = time_now - this.previous_time;
      this.previous_time = time_now;
      if (time_between_lines <= this.properties["afk_max_time"]) {
        await this.instance_storage.addDailyStats(dateNowString(), {
          "time_read": time_between_ticks
        });
        this.start_ticker();
      } else {
        this.stop_ticker();
      }
    }
  };

  // src/mokuro/mokuro_storage.js
  var browser3 = require_browser_polyfill();
  var MokuroStorage = class extends MediaStorage {
    static async build(live_stat_update = false) {
      const [type_storage, instance_storage] = await super.build("mokuro");
      await MokuroStorage.setPages(instance_storage);
      await type_storage.updateProperties({ "afk_max_time": 60 });
      return new MokuroStorage(type_storage, instance_storage, live_stat_update);
    }
    static async setPages(instance_storage) {
      if (instance_storage === void 0)
        return;
      let details = {};
      if (instance_storage.details["last_page_read"] === void 0) {
        details["last_page_read"] = 0;
      }
      await instance_storage.updateDetails(details);
    }
    async setDetails(series, page_count) {
      if (this.details["series"] === void 0) {
        this.instance_storage.updateDetails({ "series": series });
      }
      if (this.details["page_count"] !== page_count) {
        this.instance_storage.updateDetails({ "page_count": page_count });
      }
    }
    async changeInstance(new_uuid, given_identifier = void 0) {
      await super.changeInstance(new_uuid, given_identifier);
      await MokuroStorage.setPages(this.instance_storage);
    }
    async processPage(page_num, lines, date) {
      let stats = {};
      stats["chars_read"] = lines.reduce((total, line) => total + charsInLine(line), 0);
      stats["lines_read"] = lines.reduce((total, line) => total + lineSplitCount(line), 0);
      stats["pages_read"] = Math.abs(page_num - this.details["last_page_read"]);
      if (page_num > this.details["last_page_read"]) {
        await this.instance_storage.addDailyStats(date, stats);
        this.start_ticker(false);
      } else if (page_num < this.details["last_page_read"]) {
        await this.instance_storage.subDailyStats(date, stats);
        this.stop_ticker();
      }
      await this.instance_storage.updateDetails({ "last_page_read": page_num });
      await this.instance_storage.addToDates(date);
      await this.instance_storage.addToDate(date);
    }
  };

  // src/messaging/socket_actions.js
  var browser4 = require_browser_polyfill();
  var SPLIT_PATH = /\\|\//g;

  // node_modules/svelte/internal/index.mjs
  function noop() {
  }
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return tar;
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      const lets = definition[2](fn(dirty));
      if ($$scope.dirty === void 0) {
        return lets;
      }
      if (typeof lets === "object") {
        const merged = [];
        const len = Math.max($$scope.dirty.length, lets.length);
        for (let i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }
        return merged;
      }
      return $$scope.dirty | lets;
    }
    return $$scope.dirty;
  }
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      const dirty = [];
      const length = $$scope.ctx.length / 32;
      for (let i = 0; i < length; i++) {
        dirty[i] = -1;
      }
      return dirty;
    }
    return -1;
  }
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    node.parentNode.removeChild(node);
  }
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.wholeText !== data)
      text2.data = data;
  }
  function set_style(node, key, value, important) {
    if (value === null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, important ? "important" : "");
    }
  }
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    const saved_component = current_component;
    do {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  var outroing = /* @__PURE__ */ new Set();
  var outros;
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance3, create_fragment3, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: null,
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance3 ? instance3(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment3 ? create_fragment3($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };

  // src/components/stat_bar.svelte
  function create_else_block(ctx) {
    let t;
    return {
      c() {
        t = text("bedtime");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block(ctx) {
    let t;
    return {
      c() {
        t = text("hourglass_bottom");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_fragment(ctx) {
    let div8;
    let div0;
    let t0;
    let t1;
    let div1;
    let t3;
    let span0;
    let t5;
    let div2;
    let t6;
    let t7;
    let div3;
    let t9;
    let span1;
    let t11;
    let div4;
    let t12;
    let t13;
    let div5;
    let t15;
    let span2;
    let t17;
    let div6;
    let t18;
    let t19;
    let div7;
    let t21;
    let span3;
    let t22;
    let current;
    function select_block_type(ctx2, dirty) {
      if (ctx2[0])
        return create_if_block;
      return create_else_block;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    const default_slot_template = ctx[7].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
    return {
      c() {
        div8 = element("div");
        div0 = element("div");
        t0 = text(ctx[1]);
        t1 = space();
        div1 = element("div");
        div1.textContent = "Chars";
        t3 = space();
        span0 = element("span");
        span0.textContent = "auto_stories";
        t5 = space();
        div2 = element("div");
        t6 = text(ctx[2]);
        t7 = space();
        div3 = element("div");
        div3.textContent = "Lines";
        t9 = space();
        span1 = element("span");
        span1.textContent = "drive_file_rename_outline";
        t11 = space();
        div4 = element("div");
        t12 = text(ctx[3]);
        t13 = space();
        div5 = element("div");
        div5.textContent = "Elapsed";
        t15 = space();
        span2 = element("span");
        span2.textContent = "timer";
        t17 = space();
        div6 = element("div");
        t18 = text(ctx[4]);
        t19 = space();
        div7 = element("div");
        div7.textContent = "Chars / Hour";
        t21 = space();
        span3 = element("span");
        if_block.c();
        t22 = space();
        if (default_slot)
          default_slot.c();
        attr(div0, "id", "chars_read");
        attr(div0, "class", "stat-numbers svelte-1127kl9");
        attr(div1, "class", "stat-annotation svelte-1127kl9");
        attr(span0, "class", "material-icons");
        attr(div2, "id", "lines_read");
        attr(div2, "class", "stat-numbers svelte-1127kl9");
        attr(div3, "class", "stat-annotation svelte-1127kl9");
        attr(span1, "class", "material-icons");
        attr(div4, "id", "elapsed_time");
        attr(div4, "class", "stat-numbers svelte-1127kl9");
        attr(div5, "class", "stat-annotation svelte-1127kl9");
        attr(span2, "class", "material-icons");
        attr(div6, "id", "chars_per_hour");
        attr(div6, "class", "stat-numbers svelte-1127kl9");
        attr(div7, "class", "stat-annotation svelte-1127kl9");
        attr(span3, "id", "activity_symbol");
        attr(span3, "class", "material-icons");
        attr(div8, "class", "flex flex-row menu-bar h-full p-3 gap-3 items-center");
      },
      m(target, anchor) {
        insert(target, div8, anchor);
        append(div8, div0);
        append(div0, t0);
        append(div8, t1);
        append(div8, div1);
        append(div8, t3);
        append(div8, span0);
        append(div8, t5);
        append(div8, div2);
        append(div2, t6);
        append(div8, t7);
        append(div8, div3);
        append(div8, t9);
        append(div8, span1);
        append(div8, t11);
        append(div8, div4);
        append(div4, t12);
        append(div8, t13);
        append(div8, div5);
        append(div8, t15);
        append(div8, span2);
        append(div8, t17);
        append(div8, div6);
        append(div6, t18);
        append(div8, t19);
        append(div8, div7);
        append(div8, t21);
        append(div8, span3);
        if_block.m(span3, null);
        append(div8, t22);
        if (default_slot) {
          default_slot.m(div8, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & 2)
          set_data(t0, ctx2[1]);
        if (!current || dirty & 4)
          set_data(t6, ctx2[2]);
        if (!current || dirty & 8)
          set_data(t12, ctx2[3]);
        if (!current || dirty & 16)
          set_data(t18, ctx2[4]);
        if (current_block_type !== (current_block_type = select_block_type(ctx2, dirty))) {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(span3, null);
          }
        }
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 64)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div8);
        if_block.d();
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let SECS_TO_HOURS = 60 * 60;
    let { media_storage } = $$props;
    let { active = false } = $$props;
    let chars, lines, time, speed;
    const statsExist = (media_storage2) => media_storage2.instance_storage != void 0 ? media_storage2.instance_storage.today_stats : void 0;
    const getStat = (daily_stats, stat_key) => daily_stats != void 0 && daily_stats.hasOwnProperty(stat_key) ? daily_stats[stat_key] : 0;
    const getTime = (time_secs) => {
      const date = new Date(0);
      date.setSeconds(Math.round(time_secs));
      return date.toISOString().substring(11, 19);
    };
    const getSpeed = (chars2, time_secs) => chars2 === void 0 || time_secs === void 0 || isNaN(chars2) || isNaN(time_secs) || chars2 === 0 || time_secs === 0 ? 0 .toLocaleString() : (chars2 / time_secs * SECS_TO_HOURS).toLocaleString();
    const calculateStats = () => {
      const daily_stats = statsExist(media_storage);
      const char_count = getStat(daily_stats, "chars_read");
      const line_count = getStat(daily_stats, "lines_read");
      const time_secs = getStat(daily_stats, "time_read");
      $$invalidate(1, chars = char_count.toLocaleString());
      $$invalidate(2, lines = line_count.toLocaleString());
      $$invalidate(3, time = getTime(time_secs));
      $$invalidate(4, speed = getSpeed(char_count, time_secs));
    };
    calculateStats();
    document.addEventListener("status_active", calculateStats);
    document.addEventListener("status_inactive", calculateStats);
    $$self.$$set = ($$props2) => {
      if ("media_storage" in $$props2)
        $$invalidate(5, media_storage = $$props2.media_storage);
      if ("active" in $$props2)
        $$invalidate(0, active = $$props2.active);
      if ("$$scope" in $$props2)
        $$invalidate(6, $$scope = $$props2.$$scope);
    };
    return [active, chars, lines, time, speed, media_storage, $$scope, slots];
  }
  var Stat_bar = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, { media_storage: 5, active: 0 });
    }
  };
  var stat_bar_default = Stat_bar;

  // src/external/tailwindcss.js
  (() => {
    var wy = Object.create;
    var Xr = Object.defineProperty;
    var yy = Object.getOwnPropertyDescriptor;
    var by = Object.getOwnPropertyNames;
    var xy = Object.getPrototypeOf, vy = Object.prototype.hasOwnProperty;
    var Ol = (r) => Xr(r, "__esModule", { value: true });
    var Ts = (r) => {
      if (typeof __require != "undefined")
        return __require(r);
      throw new Error('Dynamic require of "' + r + '" is not supported');
    };
    var C = (r, e) => () => (r && (e = r(r = 0)), e);
    var y = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), de = (r, e) => {
      Ol(r);
      for (var t in e)
        Xr(r, t, { get: e[t], enumerable: true });
    }, ky = (r, e, t) => {
      if (e && typeof e == "object" || typeof e == "function")
        for (let i of by(e))
          !vy.call(r, i) && i !== "default" && Xr(r, i, { get: () => e[i], enumerable: !(t = yy(e, i)) || t.enumerable });
      return r;
    }, Y = (r) => ky(Ol(Xr(r != null ? wy(xy(r)) : {}, "default", r && r.__esModule && "default" in r ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r);
    var m, l = C(() => {
      m = { platform: "", env: {}, versions: { node: "14.17.6" } };
    });
    var Sy, ve, dt = C(() => {
      l();
      Sy = 0, ve = { readFileSync: (r) => self[r] || "", statSync: () => ({ mtimeMs: Sy++ }) };
    });
    var Tl = {};
    de(Tl, { default: () => ie });
    var ie, it = C(() => {
      l();
      ie = { resolve: (r) => r, extname: (r) => "." + r.split(".").pop() };
    });
    var Pl, Dl = C(() => {
      l();
      Pl = { sync: (r) => [].concat(r) };
    });
    var Ps = y((uE, Il) => {
      l();
      "use strict";
      var ql = class {
        constructor(e = {}) {
          if (!(e.maxSize && e.maxSize > 0))
            throw new TypeError("`maxSize` must be a number greater than 0");
          this.maxSize = e.maxSize, this.onEviction = e.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
        }
        _set(e, t) {
          if (this.cache.set(e, t), this._size++, this._size >= this.maxSize) {
            if (this._size = 0, typeof this.onEviction == "function")
              for (let [i, s] of this.oldCache.entries())
                this.onEviction(i, s);
            this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map();
          }
        }
        get(e) {
          if (this.cache.has(e))
            return this.cache.get(e);
          if (this.oldCache.has(e)) {
            let t = this.oldCache.get(e);
            return this.oldCache.delete(e), this._set(e, t), t;
          }
        }
        set(e, t) {
          return this.cache.has(e) ? this.cache.set(e, t) : this._set(e, t), this;
        }
        has(e) {
          return this.cache.has(e) || this.oldCache.has(e);
        }
        peek(e) {
          if (this.cache.has(e))
            return this.cache.get(e);
          if (this.oldCache.has(e))
            return this.oldCache.get(e);
        }
        delete(e) {
          let t = this.cache.delete(e);
          return t && this._size--, this.oldCache.delete(e) || t;
        }
        clear() {
          this.cache.clear(), this.oldCache.clear(), this._size = 0;
        }
        *keys() {
          for (let [e] of this)
            yield e;
        }
        *values() {
          for (let [, e] of this)
            yield e;
        }
        *[Symbol.iterator]() {
          for (let e of this.cache)
            yield e;
          for (let e of this.oldCache) {
            let [t] = e;
            this.cache.has(t) || (yield e);
          }
        }
        get size() {
          let e = 0;
          for (let t of this.oldCache.keys())
            this.cache.has(t) || e++;
          return Math.min(this._size + e, this.maxSize);
        }
      };
      Il.exports = ql;
    });
    var Rl, Ml = C(() => {
      l();
      Rl = (r) => r;
    });
    var Ll, Fl = C(() => {
      l();
      Ll = (r) => r && r._hash;
    });
    function Kr(r) {
      return Ll(r, { ignoreUnknown: true });
    }
    var Nl = C(() => {
      l();
      Fl();
    });
    var ht, Zr = C(() => {
      l();
      ht = {};
    });
    function Bl(r) {
      let e = ve.readFileSync(r, "utf-8"), t = ht(e);
      return { file: r, requires: t };
    }
    function Ds(r) {
      let t = [Bl(r)];
      for (let i of t)
        i.requires.filter((s) => s.startsWith("./") || s.startsWith("../")).forEach((s) => {
          try {
            let n = ie.dirname(i.file), o = ht.sync(s, { basedir: n }), a = Bl(o);
            t.push(a);
          } catch (n) {
          }
        });
      return t;
    }
    var zl = C(() => {
      l();
      dt();
      it();
      Zr();
      Zr();
    });
    function st(r) {
      if (r = `${r}`, r === "0")
        return "0";
      if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(r))
        return r.replace(/^[+-]?/, (e) => e === "-" ? "" : "-");
      if (r.includes("var(") || r.includes("calc("))
        return `calc(${r} * -1)`;
    }
    var ei = C(() => {
      l();
    });
    var $l, jl = C(() => {
      l();
      $l = ["preflight", "container", "accessibility", "pointerEvents", "visibility", "position", "inset", "isolation", "zIndex", "order", "gridColumn", "gridColumnStart", "gridColumnEnd", "gridRow", "gridRowStart", "gridRowEnd", "float", "clear", "margin", "boxSizing", "display", "aspectRatio", "height", "maxHeight", "minHeight", "width", "minWidth", "maxWidth", "flex", "flexShrink", "flexGrow", "flexBasis", "tableLayout", "borderCollapse", "borderSpacing", "transformOrigin", "translate", "rotate", "skew", "scale", "transform", "animation", "cursor", "touchAction", "userSelect", "resize", "scrollSnapType", "scrollSnapAlign", "scrollSnapStop", "scrollMargin", "scrollPadding", "listStylePosition", "listStyleType", "appearance", "columns", "breakBefore", "breakInside", "breakAfter", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateColumns", "gridTemplateRows", "flexDirection", "flexWrap", "placeContent", "placeItems", "alignContent", "alignItems", "justifyContent", "justifyItems", "gap", "space", "divideWidth", "divideStyle", "divideColor", "divideOpacity", "placeSelf", "alignSelf", "justifySelf", "overflow", "overscrollBehavior", "scrollBehavior", "textOverflow", "whitespace", "wordBreak", "borderRadius", "borderWidth", "borderStyle", "borderColor", "borderOpacity", "backgroundColor", "backgroundOpacity", "backgroundImage", "gradientColorStops", "boxDecorationBreak", "backgroundSize", "backgroundAttachment", "backgroundClip", "backgroundPosition", "backgroundRepeat", "backgroundOrigin", "fill", "stroke", "strokeWidth", "objectFit", "objectPosition", "padding", "textAlign", "textIndent", "verticalAlign", "fontFamily", "fontSize", "fontWeight", "textTransform", "fontStyle", "fontVariantNumeric", "lineHeight", "letterSpacing", "textColor", "textOpacity", "textDecoration", "textDecorationColor", "textDecorationStyle", "textDecorationThickness", "textUnderlineOffset", "fontSmoothing", "placeholderColor", "placeholderOpacity", "caretColor", "accentColor", "opacity", "backgroundBlendMode", "mixBlendMode", "boxShadow", "boxShadowColor", "outlineStyle", "outlineWidth", "outlineOffset", "outlineColor", "ringWidth", "ringColor", "ringOpacity", "ringOffsetWidth", "ringOffsetColor", "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia", "filter", "backdropBlur", "backdropBrightness", "backdropContrast", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia", "backdropFilter", "transitionProperty", "transitionDelay", "transitionDuration", "transitionTimingFunction", "willChange", "content"];
    });
    function Ul(r, e) {
      return r === void 0 ? e : Array.isArray(r) ? r : [...new Set(e.filter((i) => r !== false && r[i] !== false).concat(Object.keys(r).filter((i) => r[i] !== false)))];
    }
    var Vl = C(() => {
      l();
    });
    var Jt = y((SE, Wl) => {
      l();
      Wl.exports = { content: [], presets: [], darkMode: "media", theme: { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: ({ colors: r }) => ({ inherit: r.inherit, current: r.current, transparent: r.transparent, black: r.black, white: r.white, slate: r.slate, gray: r.gray, zinc: r.zinc, neutral: r.neutral, stone: r.stone, red: r.red, orange: r.orange, amber: r.amber, yellow: r.yellow, lime: r.lime, green: r.green, emerald: r.emerald, teal: r.teal, cyan: r.cyan, sky: r.sky, blue: r.blue, indigo: r.indigo, violet: r.violet, purple: r.purple, fuchsia: r.fuchsia, pink: r.pink, rose: r.rose }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" }, backdropBlur: ({ theme: r }) => r("blur"), backdropBrightness: ({ theme: r }) => r("brightness"), backdropContrast: ({ theme: r }) => r("contrast"), backdropGrayscale: ({ theme: r }) => r("grayscale"), backdropHueRotate: ({ theme: r }) => r("hueRotate"), backdropInvert: ({ theme: r }) => r("invert"), backdropOpacity: ({ theme: r }) => r("opacity"), backdropSaturate: ({ theme: r }) => r("saturate"), backdropSepia: ({ theme: r }) => r("sepia"), backgroundColor: ({ theme: r }) => r("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: r }) => r("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2" }, borderColor: ({ theme: r }) => ({ ...r("colors"), DEFAULT: r("colors.gray.200", "currentColor") }), borderOpacity: ({ theme: r }) => r("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: r }) => ({ ...r("spacing") }), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px" }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: r }) => r("colors"), caretColor: ({ theme: r }) => r("colors"), accentColor: ({ theme: r }) => ({ ...r("colors"), auto: "auto" }), contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2" }, container: {}, content: { none: "none" }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: r }) => r("borderColor"), divideOpacity: ({ theme: r }) => r("borderOpacity"), divideWidth: ({ theme: r }) => r("borderWidth"), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: r }) => r("colors"), grayscale: { 0: "0", DEFAULT: "100%" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { 0: "0", DEFAULT: "100%" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: r }) => ({ auto: "auto", ...r("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%" }), flexGrow: { 0: "0", DEFAULT: "1" }, flexShrink: { 0: "0", DEFAULT: "1" }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: r }) => r("spacing"), gradientColorStops: ({ theme: r }) => r("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-full": "1 / -1" }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" }, gridTemplateColumns: { none: "none", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))" }, gridTemplateRows: { none: "none", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))" }, height: ({ theme: r }) => ({ auto: "auto", ...r("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }), inset: ({ theme: r }) => ({ auto: "auto", ...r("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, margin: ({ theme: r }) => ({ auto: "auto", ...r("spacing") }), maxHeight: ({ theme: r }) => ({ ...r("spacing"), full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }), maxWidth: ({ theme: r, breakpoints: e }) => ({ none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...e(r("screens")) }), minHeight: { 0: "0px", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 20: "0.2", 25: "0.25", 30: "0.3", 40: "0.4", 50: "0.5", 60: "0.6", 70: "0.7", 75: "0.75", 80: "0.8", 90: "0.9", 95: "0.95", 100: "1" }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12" }, padding: ({ theme: r }) => r("spacing"), placeholderColor: ({ theme: r }) => r("colors"), placeholderOpacity: ({ theme: r }) => r("opacity"), outlineColor: ({ theme: r }) => r("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, ringColor: ({ theme: r }) => ({ DEFAULT: r("colors.blue.500", "#3b82f6"), ...r("colors") }), ringOffsetColor: ({ theme: r }) => r("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, ringOpacity: ({ theme: r }) => ({ DEFAULT: "0.5", ...r("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg" }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5" }, scrollMargin: ({ theme: r }) => ({ ...r("spacing") }), scrollPadding: ({ theme: r }) => r("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg" }, space: ({ theme: r }) => ({ ...r("spacing") }), stroke: ({ theme: r }) => r("colors"), strokeWidth: { 0: "0", 1: "1", 2: "2" }, textColor: ({ theme: r }) => r("colors"), textDecorationColor: ({ theme: r }) => r("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, textIndent: ({ theme: r }) => ({ ...r("spacing") }), textOpacity: ({ theme: r }) => r("opacity"), transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionDuration: { DEFAULT: "150ms", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: r }) => ({ ...r("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), width: ({ theme: r }) => ({ auto: "auto", ...r("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", min: "min-content", max: "max-content", fit: "fit-content" }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50" } }, variantOrder: ["first", "last", "odd", "even", "visited", "checked", "empty", "read-only", "group-hover", "group-focus", "focus-within", "hover", "focus", "focus-visible", "active", "disabled"], plugins: [] };
    });
    var Gl = {};
    de(Gl, { default: () => he });
    var he, ti = C(() => {
      l();
      he = new Proxy({}, { get: () => String });
    });
    function qs(r, e, t) {
      typeof m != "undefined" && m.env.JEST_WORKER_ID || t && Hl.has(t) || (t && Hl.add(t), console.warn(""), e.forEach((i) => console.warn(r, "-", i)));
    }
    function Is(r) {
      return he.dim(r);
    }
    var Hl, W, ke = C(() => {
      l();
      ti();
      Hl = /* @__PURE__ */ new Set();
      W = { info(r, e) {
        qs(he.bold(he.cyan("info")), ...Array.isArray(r) ? [r] : [e, r]);
      }, warn(r, e) {
        qs(he.bold(he.yellow("warn")), ...Array.isArray(r) ? [r] : [e, r]);
      }, risk(r, e) {
        qs(he.bold(he.magenta("risk")), ...Array.isArray(r) ? [r] : [e, r]);
      } };
    });
    var Ms = {};
    de(Ms, { default: () => Rs });
    function Xt({ version: r, from: e, to: t }) {
      W.warn(`${e}-color-renamed`, [`As of Tailwind CSS ${r}, \`${e}\` has been renamed to \`${t}\`.`, "Update your configuration file to silence this warning."]);
    }
    var Rs, ri = C(() => {
      l();
      ke();
      Rs = { inherit: "inherit", current: "currentColor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, get lightBlue() {
        return Xt({ version: "v2.2", from: "lightBlue", to: "sky" }), this.sky;
      }, get warmGray() {
        return Xt({ version: "v3.0", from: "warmGray", to: "stone" }), this.stone;
      }, get trueGray() {
        return Xt({ version: "v3.0", from: "trueGray", to: "neutral" }), this.neutral;
      }, get coolGray() {
        return Xt({ version: "v3.0", from: "coolGray", to: "gray" }), this.gray;
      }, get blueGray() {
        return Xt({ version: "v3.0", from: "blueGray", to: "slate" }), this.slate;
      } };
    });
    function Ls(r, ...e) {
      for (let t of e) {
        for (let i in t)
          r?.hasOwnProperty?.(i) || (r[i] = t[i]);
        for (let i of Object.getOwnPropertySymbols(t))
          r?.hasOwnProperty?.(i) || (r[i] = t[i]);
      }
      return r;
    }
    var Yl = C(() => {
      l();
    });
    function $e(r) {
      if (Array.isArray(r))
        return r;
      let e = r.split("[").length - 1, t = r.split("]").length - 1;
      if (e !== t)
        throw new Error(`Path is invalid. Has unbalanced brackets: ${r}`);
      return r.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
    }
    var ii = C(() => {
      l();
    });
    function Ql(r) {
      (() => {
        if (r.purge || !r.content || !Array.isArray(r.content) && !(typeof r.content == "object" && r.content !== null))
          return false;
        if (Array.isArray(r.content))
          return r.content.every((t) => typeof t == "string" ? true : !(typeof t?.raw != "string" || t?.extension && typeof t?.extension != "string"));
        if (typeof r.content == "object" && r.content !== null) {
          if (Object.keys(r.content).some((t) => !["files", "extract", "transform"].includes(t)))
            return false;
          if (Array.isArray(r.content.files)) {
            if (!r.content.files.every((t) => typeof t == "string" ? true : !(typeof t?.raw != "string" || t?.extension && typeof t?.extension != "string")))
              return false;
            if (typeof r.content.extract == "object") {
              for (let t of Object.values(r.content.extract))
                if (typeof t != "function")
                  return false;
            } else if (!(r.content.extract === void 0 || typeof r.content.extract == "function"))
              return false;
            if (typeof r.content.transform == "object") {
              for (let t of Object.values(r.content.transform))
                if (typeof t != "function")
                  return false;
            } else if (!(r.content.transform === void 0 || typeof r.content.transform == "function"))
              return false;
          }
          return true;
        }
        return false;
      })() || W.warn("purge-deprecation", ["The `purge`/`content` options have changed in Tailwind CSS v3.0.", "Update your configuration file to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"]), r.safelist = (() => {
        let { content: t, purge: i, safelist: s } = r;
        return Array.isArray(s) ? s : Array.isArray(t?.safelist) ? t.safelist : Array.isArray(i?.safelist) ? i.safelist : Array.isArray(i?.options?.safelist) ? i.options.safelist : [];
      })(), typeof r.prefix == "function" ? (W.warn("prefix-function", ["As of Tailwind CSS v3.0, `prefix` cannot be a function.", "Update `prefix` in your configuration to be a string to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"]), r.prefix = "") : r.prefix = r.prefix ?? "", r.content = { files: (() => {
        let { content: t, purge: i } = r;
        return Array.isArray(i) ? i : Array.isArray(i?.content) ? i.content : Array.isArray(t) ? t : Array.isArray(t?.content) ? t.content : Array.isArray(t?.files) ? t.files : [];
      })(), extract: (() => {
        let t = (() => r.purge?.extract ? r.purge.extract : r.content?.extract ? r.content.extract : r.purge?.extract?.DEFAULT ? r.purge.extract.DEFAULT : r.content?.extract?.DEFAULT ? r.content.extract.DEFAULT : r.purge?.options?.extractors ? r.purge.options.extractors : r.content?.options?.extractors ? r.content.options.extractors : {})(), i = {}, s = (() => {
          if (r.purge?.options?.defaultExtractor)
            return r.purge.options.defaultExtractor;
          if (r.content?.options?.defaultExtractor)
            return r.content.options.defaultExtractor;
        })();
        if (s !== void 0 && (i.DEFAULT = s), typeof t == "function")
          i.DEFAULT = t;
        else if (Array.isArray(t))
          for (let { extensions: n, extractor: o } of t ?? [])
            for (let a of n)
              i[a] = o;
        else
          typeof t == "object" && t !== null && Object.assign(i, t);
        return i;
      })(), transform: (() => {
        let t = (() => r.purge?.transform ? r.purge.transform : r.content?.transform ? r.content.transform : r.purge?.transform?.DEFAULT ? r.purge.transform.DEFAULT : r.content?.transform?.DEFAULT ? r.content.transform.DEFAULT : {})(), i = {};
        return typeof t == "function" && (i.DEFAULT = t), typeof t == "object" && t !== null && Object.assign(i, t), i;
      })() };
      for (let t of r.content.files)
        if (typeof t == "string" && /{([^,]*?)}/g.test(t)) {
          W.warn("invalid-glob-braces", [`The glob pattern ${Is(t)} in your Tailwind CSS configuration is invalid.`, `Update it to ${Is(t.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`]);
          break;
        }
      return r;
    }
    var Jl = C(() => {
      l();
      ke();
    });
    function De(r) {
      if (Object.prototype.toString.call(r) !== "[object Object]")
        return false;
      let e = Object.getPrototypeOf(r);
      return e === null || e === Object.prototype;
    }
    var Kt = C(() => {
      l();
    });
    function je(r) {
      return Array.isArray(r) ? r.map((e) => je(e)) : typeof r == "object" && r !== null ? Object.fromEntries(Object.entries(r).map(([e, t]) => [e, je(t)])) : r;
    }
    var si = C(() => {
      l();
    });
    var oi = y((ni, Xl) => {
      l();
      "use strict";
      ni.__esModule = true;
      ni.default = Ay;
      function Cy(r) {
        for (var e = r.toLowerCase(), t = "", i = false, s = 0; s < 6 && e[s] !== void 0; s++) {
          var n = e.charCodeAt(s), o = n >= 97 && n <= 102 || n >= 48 && n <= 57;
          if (i = n === 32, !o)
            break;
          t += e[s];
        }
        if (t.length !== 0) {
          var a = parseInt(t, 16), u = a >= 55296 && a <= 57343;
          return u || a === 0 || a > 1114111 ? ["\uFFFD", t.length + (i ? 1 : 0)] : [String.fromCodePoint(a), t.length + (i ? 1 : 0)];
        }
      }
      var _y = /\\/;
      function Ay(r) {
        var e = _y.test(r);
        if (!e)
          return r;
        for (var t = "", i = 0; i < r.length; i++) {
          if (r[i] === "\\") {
            var s = Cy(r.slice(i + 1, i + 7));
            if (s !== void 0) {
              t += s[0], i += s[1];
              continue;
            }
            if (r[i + 1] === "\\") {
              t += "\\", i++;
              continue;
            }
            r.length === i + 1 && (t += r[i]);
            continue;
          }
          t += r[i];
        }
        return t;
      }
      Xl.exports = ni.default;
    });
    var Zl = y((ai, Kl) => {
      l();
      "use strict";
      ai.__esModule = true;
      ai.default = Ey;
      function Ey(r) {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
          t[i - 1] = arguments[i];
        for (; t.length > 0; ) {
          var s = t.shift();
          if (!r[s])
            return;
          r = r[s];
        }
        return r;
      }
      Kl.exports = ai.default;
    });
    var tu = y((li, eu) => {
      l();
      "use strict";
      li.__esModule = true;
      li.default = Oy;
      function Oy(r) {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
          t[i - 1] = arguments[i];
        for (; t.length > 0; ) {
          var s = t.shift();
          r[s] || (r[s] = {}), r = r[s];
        }
      }
      eu.exports = li.default;
    });
    var iu = y((ui, ru) => {
      l();
      "use strict";
      ui.__esModule = true;
      ui.default = Ty;
      function Ty(r) {
        for (var e = "", t = r.indexOf("/*"), i = 0; t >= 0; ) {
          e = e + r.slice(i, t);
          var s = r.indexOf("*/", t + 2);
          if (s < 0)
            return e;
          i = s + 2, t = r.indexOf("/*", i);
        }
        return e = e + r.slice(i), e;
      }
      ru.exports = ui.default;
    });
    var Zt = y((Se) => {
      l();
      "use strict";
      Se.__esModule = true;
      Se.stripComments = Se.ensureObject = Se.getProp = Se.unesc = void 0;
      var Py = fi(oi());
      Se.unesc = Py.default;
      var Dy = fi(Zl());
      Se.getProp = Dy.default;
      var qy = fi(tu());
      Se.ensureObject = qy.default;
      var Iy = fi(iu());
      Se.stripComments = Iy.default;
      function fi(r) {
        return r && r.__esModule ? r : { default: r };
      }
    });
    var qe = y((er, ou) => {
      l();
      "use strict";
      er.__esModule = true;
      er.default = void 0;
      var su = Zt();
      function nu(r, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(r, i.key, i);
        }
      }
      function Ry(r, e, t) {
        return e && nu(r.prototype, e), t && nu(r, t), r;
      }
      var My = function r(e, t) {
        if (typeof e != "object" || e === null)
          return e;
        var i = new e.constructor();
        for (var s in e)
          if (!!e.hasOwnProperty(s)) {
            var n = e[s], o = typeof n;
            s === "parent" && o === "object" ? t && (i[s] = t) : n instanceof Array ? i[s] = n.map(function(a) {
              return r(a, i);
            }) : i[s] = r(n, i);
          }
        return i;
      }, Ly = function() {
        function r(t) {
          t === void 0 && (t = {}), Object.assign(this, t), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || "", this.spaces.after = this.spaces.after || "";
        }
        var e = r.prototype;
        return e.remove = function() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
        }, e.replaceWith = function() {
          if (this.parent) {
            for (var i in arguments)
              this.parent.insertBefore(this, arguments[i]);
            this.remove();
          }
          return this;
        }, e.next = function() {
          return this.parent.at(this.parent.index(this) + 1);
        }, e.prev = function() {
          return this.parent.at(this.parent.index(this) - 1);
        }, e.clone = function(i) {
          i === void 0 && (i = {});
          var s = My(this);
          for (var n in i)
            s[n] = i[n];
          return s;
        }, e.appendToPropertyAndEscape = function(i, s, n) {
          this.raws || (this.raws = {});
          var o = this[i], a = this.raws[i];
          this[i] = o + s, a || n !== s ? this.raws[i] = (a || o) + n : delete this.raws[i];
        }, e.setPropertyAndEscape = function(i, s, n) {
          this.raws || (this.raws = {}), this[i] = s, this.raws[i] = n;
        }, e.setPropertyWithoutEscape = function(i, s) {
          this[i] = s, this.raws && delete this.raws[i];
        }, e.isAtPosition = function(i, s) {
          if (this.source && this.source.start && this.source.end)
            return !(this.source.start.line > i || this.source.end.line < i || this.source.start.line === i && this.source.start.column > s || this.source.end.line === i && this.source.end.column < s);
        }, e.stringifyProperty = function(i) {
          return this.raws && this.raws[i] || this[i];
        }, e.valueToString = function() {
          return String(this.stringifyProperty("value"));
        }, e.toString = function() {
          return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join("");
        }, Ry(r, [{ key: "rawSpaceBefore", get: function() {
          var i = this.raws && this.raws.spaces && this.raws.spaces.before;
          return i === void 0 && (i = this.spaces && this.spaces.before), i || "";
        }, set: function(i) {
          (0, su.ensureObject)(this, "raws", "spaces"), this.raws.spaces.before = i;
        } }, { key: "rawSpaceAfter", get: function() {
          var i = this.raws && this.raws.spaces && this.raws.spaces.after;
          return i === void 0 && (i = this.spaces.after), i || "";
        }, set: function(i) {
          (0, su.ensureObject)(this, "raws", "spaces"), this.raws.spaces.after = i;
        } }]), r;
      }();
      er.default = Ly;
      ou.exports = er.default;
    });
    var X = y((z) => {
      l();
      "use strict";
      z.__esModule = true;
      z.UNIVERSAL = z.ATTRIBUTE = z.CLASS = z.COMBINATOR = z.COMMENT = z.ID = z.NESTING = z.PSEUDO = z.ROOT = z.SELECTOR = z.STRING = z.TAG = void 0;
      var Fy = "tag";
      z.TAG = Fy;
      var Ny = "string";
      z.STRING = Ny;
      var By = "selector";
      z.SELECTOR = By;
      var zy = "root";
      z.ROOT = zy;
      var $y = "pseudo";
      z.PSEUDO = $y;
      var jy = "nesting";
      z.NESTING = jy;
      var Uy = "id";
      z.ID = Uy;
      var Vy = "comment";
      z.COMMENT = Vy;
      var Wy = "combinator";
      z.COMBINATOR = Wy;
      var Gy = "class";
      z.CLASS = Gy;
      var Hy = "attribute";
      z.ATTRIBUTE = Hy;
      var Yy = "universal";
      z.UNIVERSAL = Yy;
    });
    var ci = y((tr, fu) => {
      l();
      "use strict";
      tr.__esModule = true;
      tr.default = void 0;
      var Qy = Xy(qe()), Ie = Jy(X());
      function au() {
        if (typeof WeakMap != "function")
          return null;
        var r = /* @__PURE__ */ new WeakMap();
        return au = function() {
          return r;
        }, r;
      }
      function Jy(r) {
        if (r && r.__esModule)
          return r;
        if (r === null || typeof r != "object" && typeof r != "function")
          return { default: r };
        var e = au();
        if (e && e.has(r))
          return e.get(r);
        var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in r)
          if (Object.prototype.hasOwnProperty.call(r, s)) {
            var n = i ? Object.getOwnPropertyDescriptor(r, s) : null;
            n && (n.get || n.set) ? Object.defineProperty(t, s, n) : t[s] = r[s];
          }
        return t.default = r, e && e.set(r, t), t;
      }
      function Xy(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function Ky(r, e) {
        var t;
        if (typeof Symbol == "undefined" || r[Symbol.iterator] == null) {
          if (Array.isArray(r) || (t = Zy(r)) || e && r && typeof r.length == "number") {
            t && (r = t);
            var i = 0;
            return function() {
              return i >= r.length ? { done: true } : { done: false, value: r[i++] };
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        return t = r[Symbol.iterator](), t.next.bind(t);
      }
      function Zy(r, e) {
        if (!!r) {
          if (typeof r == "string")
            return lu(r, e);
          var t = Object.prototype.toString.call(r).slice(8, -1);
          if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
            return Array.from(r);
          if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
            return lu(r, e);
        }
      }
      function lu(r, e) {
        (e == null || e > r.length) && (e = r.length);
        for (var t = 0, i = new Array(e); t < e; t++)
          i[t] = r[t];
        return i;
      }
      function uu(r, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(r, i.key, i);
        }
      }
      function eb(r, e, t) {
        return e && uu(r.prototype, e), t && uu(r, t), r;
      }
      function tb(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Fs(r, e);
      }
      function Fs(r, e) {
        return Fs = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, Fs(r, e);
      }
      var rb = function(r) {
        tb(e, r);
        function e(i) {
          var s;
          return s = r.call(this, i) || this, s.nodes || (s.nodes = []), s;
        }
        var t = e.prototype;
        return t.append = function(s) {
          return s.parent = this, this.nodes.push(s), this;
        }, t.prepend = function(s) {
          return s.parent = this, this.nodes.unshift(s), this;
        }, t.at = function(s) {
          return this.nodes[s];
        }, t.index = function(s) {
          return typeof s == "number" ? s : this.nodes.indexOf(s);
        }, t.removeChild = function(s) {
          s = this.index(s), this.at(s).parent = void 0, this.nodes.splice(s, 1);
          var n;
          for (var o in this.indexes)
            n = this.indexes[o], n >= s && (this.indexes[o] = n - 1);
          return this;
        }, t.removeAll = function() {
          for (var s = Ky(this.nodes), n; !(n = s()).done; ) {
            var o = n.value;
            o.parent = void 0;
          }
          return this.nodes = [], this;
        }, t.empty = function() {
          return this.removeAll();
        }, t.insertAfter = function(s, n) {
          n.parent = this;
          var o = this.index(s);
          this.nodes.splice(o + 1, 0, n), n.parent = this;
          var a;
          for (var u in this.indexes)
            a = this.indexes[u], o <= a && (this.indexes[u] = a + 1);
          return this;
        }, t.insertBefore = function(s, n) {
          n.parent = this;
          var o = this.index(s);
          this.nodes.splice(o, 0, n), n.parent = this;
          var a;
          for (var u in this.indexes)
            a = this.indexes[u], a <= o && (this.indexes[u] = a + 1);
          return this;
        }, t._findChildAtPosition = function(s, n) {
          var o = void 0;
          return this.each(function(a) {
            if (a.atPosition) {
              var u = a.atPosition(s, n);
              if (u)
                return o = u, false;
            } else if (a.isAtPosition(s, n))
              return o = a, false;
          }), o;
        }, t.atPosition = function(s, n) {
          if (this.isAtPosition(s, n))
            return this._findChildAtPosition(s, n) || this;
        }, t._inferEndPosition = function() {
          this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
        }, t.each = function(s) {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
          var n = this.lastEach;
          if (this.indexes[n] = 0, !!this.length) {
            for (var o, a; this.indexes[n] < this.length && (o = this.indexes[n], a = s(this.at(o), o), a !== false); )
              this.indexes[n] += 1;
            if (delete this.indexes[n], a === false)
              return false;
          }
        }, t.walk = function(s) {
          return this.each(function(n, o) {
            var a = s(n, o);
            if (a !== false && n.length && (a = n.walk(s)), a === false)
              return false;
          });
        }, t.walkAttributes = function(s) {
          var n = this;
          return this.walk(function(o) {
            if (o.type === Ie.ATTRIBUTE)
              return s.call(n, o);
          });
        }, t.walkClasses = function(s) {
          var n = this;
          return this.walk(function(o) {
            if (o.type === Ie.CLASS)
              return s.call(n, o);
          });
        }, t.walkCombinators = function(s) {
          var n = this;
          return this.walk(function(o) {
            if (o.type === Ie.COMBINATOR)
              return s.call(n, o);
          });
        }, t.walkComments = function(s) {
          var n = this;
          return this.walk(function(o) {
            if (o.type === Ie.COMMENT)
              return s.call(n, o);
          });
        }, t.walkIds = function(s) {
          var n = this;
          return this.walk(function(o) {
            if (o.type === Ie.ID)
              return s.call(n, o);
          });
        }, t.walkNesting = function(s) {
          var n = this;
          return this.walk(function(o) {
            if (o.type === Ie.NESTING)
              return s.call(n, o);
          });
        }, t.walkPseudos = function(s) {
          var n = this;
          return this.walk(function(o) {
            if (o.type === Ie.PSEUDO)
              return s.call(n, o);
          });
        }, t.walkTags = function(s) {
          var n = this;
          return this.walk(function(o) {
            if (o.type === Ie.TAG)
              return s.call(n, o);
          });
        }, t.walkUniversals = function(s) {
          var n = this;
          return this.walk(function(o) {
            if (o.type === Ie.UNIVERSAL)
              return s.call(n, o);
          });
        }, t.split = function(s) {
          var n = this, o = [];
          return this.reduce(function(a, u, f) {
            var c = s.call(n, u);
            return o.push(u), c ? (a.push(o), o = []) : f === n.length - 1 && a.push(o), a;
          }, []);
        }, t.map = function(s) {
          return this.nodes.map(s);
        }, t.reduce = function(s, n) {
          return this.nodes.reduce(s, n);
        }, t.every = function(s) {
          return this.nodes.every(s);
        }, t.some = function(s) {
          return this.nodes.some(s);
        }, t.filter = function(s) {
          return this.nodes.filter(s);
        }, t.sort = function(s) {
          return this.nodes.sort(s);
        }, t.toString = function() {
          return this.map(String).join("");
        }, eb(e, [{ key: "first", get: function() {
          return this.at(0);
        } }, { key: "last", get: function() {
          return this.at(this.length - 1);
        } }, { key: "length", get: function() {
          return this.nodes.length;
        } }]), e;
      }(Qy.default);
      tr.default = rb;
      fu.exports = tr.default;
    });
    var Bs = y((rr, pu) => {
      l();
      "use strict";
      rr.__esModule = true;
      rr.default = void 0;
      var ib = nb(ci()), sb = X();
      function nb(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function cu(r, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(r, i.key, i);
        }
      }
      function ob(r, e, t) {
        return e && cu(r.prototype, e), t && cu(r, t), r;
      }
      function ab(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Ns(r, e);
      }
      function Ns(r, e) {
        return Ns = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, Ns(r, e);
      }
      var lb = function(r) {
        ab(e, r);
        function e(i) {
          var s;
          return s = r.call(this, i) || this, s.type = sb.ROOT, s;
        }
        var t = e.prototype;
        return t.toString = function() {
          var s = this.reduce(function(n, o) {
            return n.push(String(o)), n;
          }, []).join(",");
          return this.trailingComma ? s + "," : s;
        }, t.error = function(s, n) {
          return this._error ? this._error(s, n) : new Error(s);
        }, ob(e, [{ key: "errorGenerator", set: function(s) {
          this._error = s;
        } }]), e;
      }(ib.default);
      rr.default = lb;
      pu.exports = rr.default;
    });
    var $s = y((ir, du) => {
      l();
      "use strict";
      ir.__esModule = true;
      ir.default = void 0;
      var ub = cb(ci()), fb = X();
      function cb(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function pb(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, zs(r, e);
      }
      function zs(r, e) {
        return zs = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, zs(r, e);
      }
      var db = function(r) {
        pb(e, r);
        function e(t) {
          var i;
          return i = r.call(this, t) || this, i.type = fb.SELECTOR, i;
        }
        return e;
      }(ub.default);
      ir.default = db;
      du.exports = ir.default;
    });
    var pi = y((ME, hu) => {
      l();
      "use strict";
      var hb = {}, mb = hb.hasOwnProperty, gb = function(e, t) {
        if (!e)
          return t;
        var i = {};
        for (var s in t)
          i[s] = mb.call(e, s) ? e[s] : t[s];
        return i;
      }, wb = /[ -,\.\/:-@\[-\^`\{-~]/, yb = /[ -,\.\/:-@\[\]\^`\{-~]/, bb = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, js = function r(e, t) {
        t = gb(t, r.options), t.quotes != "single" && t.quotes != "double" && (t.quotes = "single");
        for (var i = t.quotes == "double" ? '"' : "'", s = t.isIdentifier, n = e.charAt(0), o = "", a = 0, u = e.length; a < u; ) {
          var f = e.charAt(a++), c = f.charCodeAt(), d = void 0;
          if (c < 32 || c > 126) {
            if (c >= 55296 && c <= 56319 && a < u) {
              var p = e.charCodeAt(a++);
              (p & 64512) == 56320 ? c = ((c & 1023) << 10) + (p & 1023) + 65536 : a--;
            }
            d = "\\" + c.toString(16).toUpperCase() + " ";
          } else
            t.escapeEverything ? wb.test(f) ? d = "\\" + f : d = "\\" + c.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(f) ? d = "\\" + c.toString(16).toUpperCase() + " " : f == "\\" || !s && (f == '"' && i == f || f == "'" && i == f) || s && yb.test(f) ? d = "\\" + f : d = f;
          o += d;
        }
        return s && (/^-[-\d]/.test(o) ? o = "\\-" + o.slice(1) : /\d/.test(n) && (o = "\\3" + n + " " + o.slice(1))), o = o.replace(bb, function(h, w, v) {
          return w && w.length % 2 ? h : (w || "") + v;
        }), !s && t.wrap ? i + o + i : o;
      };
      js.options = { escapeEverything: false, isIdentifier: false, quotes: "single", wrap: false };
      js.version = "3.0.0";
      hu.exports = js;
    });
    var Vs = y((sr, wu) => {
      l();
      "use strict";
      sr.__esModule = true;
      sr.default = void 0;
      var xb = mu(pi()), vb = Zt(), kb = mu(qe()), Sb = X();
      function mu(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function gu(r, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(r, i.key, i);
        }
      }
      function Cb(r, e, t) {
        return e && gu(r.prototype, e), t && gu(r, t), r;
      }
      function _b(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Us(r, e);
      }
      function Us(r, e) {
        return Us = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, Us(r, e);
      }
      var Ab = function(r) {
        _b(e, r);
        function e(i) {
          var s;
          return s = r.call(this, i) || this, s.type = Sb.CLASS, s._constructed = true, s;
        }
        var t = e.prototype;
        return t.valueToString = function() {
          return "." + r.prototype.valueToString.call(this);
        }, Cb(e, [{ key: "value", get: function() {
          return this._value;
        }, set: function(s) {
          if (this._constructed) {
            var n = (0, xb.default)(s, { isIdentifier: true });
            n !== s ? ((0, vb.ensureObject)(this, "raws"), this.raws.value = n) : this.raws && delete this.raws.value;
          }
          this._value = s;
        } }]), e;
      }(kb.default);
      sr.default = Ab;
      wu.exports = sr.default;
    });
    var Gs = y((nr, yu) => {
      l();
      "use strict";
      nr.__esModule = true;
      nr.default = void 0;
      var Eb = Tb(qe()), Ob = X();
      function Tb(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function Pb(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Ws(r, e);
      }
      function Ws(r, e) {
        return Ws = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, Ws(r, e);
      }
      var Db = function(r) {
        Pb(e, r);
        function e(t) {
          var i;
          return i = r.call(this, t) || this, i.type = Ob.COMMENT, i;
        }
        return e;
      }(Eb.default);
      nr.default = Db;
      yu.exports = nr.default;
    });
    var Ys = y((or, bu) => {
      l();
      "use strict";
      or.__esModule = true;
      or.default = void 0;
      var qb = Rb(qe()), Ib = X();
      function Rb(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function Mb(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Hs(r, e);
      }
      function Hs(r, e) {
        return Hs = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, Hs(r, e);
      }
      var Lb = function(r) {
        Mb(e, r);
        function e(i) {
          var s;
          return s = r.call(this, i) || this, s.type = Ib.ID, s;
        }
        var t = e.prototype;
        return t.valueToString = function() {
          return "#" + r.prototype.valueToString.call(this);
        }, e;
      }(qb.default);
      or.default = Lb;
      bu.exports = or.default;
    });
    var di = y((ar, ku) => {
      l();
      "use strict";
      ar.__esModule = true;
      ar.default = void 0;
      var Fb = xu(pi()), Nb = Zt(), Bb = xu(qe());
      function xu(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function vu(r, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(r, i.key, i);
        }
      }
      function zb(r, e, t) {
        return e && vu(r.prototype, e), t && vu(r, t), r;
      }
      function $b(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Qs(r, e);
      }
      function Qs(r, e) {
        return Qs = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, Qs(r, e);
      }
      var jb = function(r) {
        $b(e, r);
        function e() {
          return r.apply(this, arguments) || this;
        }
        var t = e.prototype;
        return t.qualifiedName = function(s) {
          return this.namespace ? this.namespaceString + "|" + s : s;
        }, t.valueToString = function() {
          return this.qualifiedName(r.prototype.valueToString.call(this));
        }, zb(e, [{ key: "namespace", get: function() {
          return this._namespace;
        }, set: function(s) {
          if (s === true || s === "*" || s === "&") {
            this._namespace = s, this.raws && delete this.raws.namespace;
            return;
          }
          var n = (0, Fb.default)(s, { isIdentifier: true });
          this._namespace = s, n !== s ? ((0, Nb.ensureObject)(this, "raws"), this.raws.namespace = n) : this.raws && delete this.raws.namespace;
        } }, { key: "ns", get: function() {
          return this._namespace;
        }, set: function(s) {
          this.namespace = s;
        } }, { key: "namespaceString", get: function() {
          if (this.namespace) {
            var s = this.stringifyProperty("namespace");
            return s === true ? "" : s;
          } else
            return "";
        } }]), e;
      }(Bb.default);
      ar.default = jb;
      ku.exports = ar.default;
    });
    var Xs = y((lr, Su) => {
      l();
      "use strict";
      lr.__esModule = true;
      lr.default = void 0;
      var Ub = Wb(di()), Vb = X();
      function Wb(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function Gb(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Js(r, e);
      }
      function Js(r, e) {
        return Js = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, Js(r, e);
      }
      var Hb = function(r) {
        Gb(e, r);
        function e(t) {
          var i;
          return i = r.call(this, t) || this, i.type = Vb.TAG, i;
        }
        return e;
      }(Ub.default);
      lr.default = Hb;
      Su.exports = lr.default;
    });
    var Zs = y((ur, Cu) => {
      l();
      "use strict";
      ur.__esModule = true;
      ur.default = void 0;
      var Yb = Jb(qe()), Qb = X();
      function Jb(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function Xb(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Ks(r, e);
      }
      function Ks(r, e) {
        return Ks = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, Ks(r, e);
      }
      var Kb = function(r) {
        Xb(e, r);
        function e(t) {
          var i;
          return i = r.call(this, t) || this, i.type = Qb.STRING, i;
        }
        return e;
      }(Yb.default);
      ur.default = Kb;
      Cu.exports = ur.default;
    });
    var tn = y((fr, _u) => {
      l();
      "use strict";
      fr.__esModule = true;
      fr.default = void 0;
      var Zb = t0(ci()), e0 = X();
      function t0(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function r0(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, en(r, e);
      }
      function en(r, e) {
        return en = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, en(r, e);
      }
      var i0 = function(r) {
        r0(e, r);
        function e(i) {
          var s;
          return s = r.call(this, i) || this, s.type = e0.PSEUDO, s;
        }
        var t = e.prototype;
        return t.toString = function() {
          var s = this.length ? "(" + this.map(String).join(",") + ")" : "";
          return [this.rawSpaceBefore, this.stringifyProperty("value"), s, this.rawSpaceAfter].join("");
        }, e;
      }(Zb.default);
      fr.default = i0;
      _u.exports = fr.default;
    });
    var Au = {};
    de(Au, { deprecate: () => s0 });
    function s0(r) {
      return r;
    }
    var Eu = C(() => {
      l();
    });
    var Tu = y((LE, Ou) => {
      l();
      Ou.exports = (Eu(), Au).deprecate;
    });
    var ln = y((dr) => {
      l();
      "use strict";
      dr.__esModule = true;
      dr.unescapeValue = on;
      dr.default = void 0;
      var cr = sn(pi()), n0 = sn(oi()), o0 = sn(di()), a0 = X(), rn2;
      function sn(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function Pu(r, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(r, i.key, i);
        }
      }
      function l0(r, e, t) {
        return e && Pu(r.prototype, e), t && Pu(r, t), r;
      }
      function u0(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, nn(r, e);
      }
      function nn(r, e) {
        return nn = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, nn(r, e);
      }
      var pr = Tu(), f0 = /^('|")([^]*)\1$/, c0 = pr(function() {
      }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."), p0 = pr(function() {
      }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."), d0 = pr(function() {
      }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
      function on(r) {
        var e = false, t = null, i = r, s = i.match(f0);
        return s && (t = s[1], i = s[2]), i = (0, n0.default)(i), i !== r && (e = true), { deprecatedUsage: e, unescaped: i, quoteMark: t };
      }
      function h0(r) {
        if (r.quoteMark !== void 0 || r.value === void 0)
          return r;
        d0();
        var e = on(r.value), t = e.quoteMark, i = e.unescaped;
        return r.raws || (r.raws = {}), r.raws.value === void 0 && (r.raws.value = r.value), r.value = i, r.quoteMark = t, r;
      }
      var hi = function(r) {
        u0(e, r);
        function e(i) {
          var s;
          return i === void 0 && (i = {}), s = r.call(this, h0(i)) || this, s.type = a0.ATTRIBUTE, s.raws = s.raws || {}, Object.defineProperty(s.raws, "unquoted", { get: pr(function() {
            return s.value;
          }, "attr.raws.unquoted is deprecated. Call attr.value instead."), set: pr(function() {
            return s.value;
          }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.") }), s._constructed = true, s;
        }
        var t = e.prototype;
        return t.getQuotedValue = function(s) {
          s === void 0 && (s = {});
          var n = this._determineQuoteMark(s), o = an[n], a = (0, cr.default)(this._value, o);
          return a;
        }, t._determineQuoteMark = function(s) {
          return s.smart ? this.smartQuoteMark(s) : this.preferredQuoteMark(s);
        }, t.setValue = function(s, n) {
          n === void 0 && (n = {}), this._value = s, this._quoteMark = this._determineQuoteMark(n), this._syncRawValue();
        }, t.smartQuoteMark = function(s) {
          var n = this.value, o = n.replace(/[^']/g, "").length, a = n.replace(/[^"]/g, "").length;
          if (o + a === 0) {
            var u = (0, cr.default)(n, { isIdentifier: true });
            if (u === n)
              return e.NO_QUOTE;
            var f = this.preferredQuoteMark(s);
            if (f === e.NO_QUOTE) {
              var c = this.quoteMark || s.quoteMark || e.DOUBLE_QUOTE, d = an[c], p = (0, cr.default)(n, d);
              if (p.length < u.length)
                return c;
            }
            return f;
          } else
            return a === o ? this.preferredQuoteMark(s) : a < o ? e.DOUBLE_QUOTE : e.SINGLE_QUOTE;
        }, t.preferredQuoteMark = function(s) {
          var n = s.preferCurrentQuoteMark ? this.quoteMark : s.quoteMark;
          return n === void 0 && (n = s.preferCurrentQuoteMark ? s.quoteMark : this.quoteMark), n === void 0 && (n = e.DOUBLE_QUOTE), n;
        }, t._syncRawValue = function() {
          var s = (0, cr.default)(this._value, an[this.quoteMark]);
          s === this._value ? this.raws && delete this.raws.value : this.raws.value = s;
        }, t._handleEscapes = function(s, n) {
          if (this._constructed) {
            var o = (0, cr.default)(n, { isIdentifier: true });
            o !== n ? this.raws[s] = o : delete this.raws[s];
          }
        }, t._spacesFor = function(s) {
          var n = { before: "", after: "" }, o = this.spaces[s] || {}, a = this.raws.spaces && this.raws.spaces[s] || {};
          return Object.assign(n, o, a);
        }, t._stringFor = function(s, n, o) {
          n === void 0 && (n = s), o === void 0 && (o = Du);
          var a = this._spacesFor(n);
          return o(this.stringifyProperty(s), a);
        }, t.offsetOf = function(s) {
          var n = 1, o = this._spacesFor("attribute");
          if (n += o.before.length, s === "namespace" || s === "ns")
            return this.namespace ? n : -1;
          if (s === "attributeNS" || (n += this.namespaceString.length, this.namespace && (n += 1), s === "attribute"))
            return n;
          n += this.stringifyProperty("attribute").length, n += o.after.length;
          var a = this._spacesFor("operator");
          n += a.before.length;
          var u = this.stringifyProperty("operator");
          if (s === "operator")
            return u ? n : -1;
          n += u.length, n += a.after.length;
          var f = this._spacesFor("value");
          n += f.before.length;
          var c = this.stringifyProperty("value");
          if (s === "value")
            return c ? n : -1;
          n += c.length, n += f.after.length;
          var d = this._spacesFor("insensitive");
          return n += d.before.length, s === "insensitive" && this.insensitive ? n : -1;
        }, t.toString = function() {
          var s = this, n = [this.rawSpaceBefore, "["];
          return n.push(this._stringFor("qualifiedAttribute", "attribute")), this.operator && (this.value || this.value === "") && (n.push(this._stringFor("operator")), n.push(this._stringFor("value")), n.push(this._stringFor("insensitiveFlag", "insensitive", function(o, a) {
            return o.length > 0 && !s.quoted && a.before.length === 0 && !(s.spaces.value && s.spaces.value.after) && (a.before = " "), Du(o, a);
          }))), n.push("]"), n.push(this.rawSpaceAfter), n.join("");
        }, l0(e, [{ key: "quoted", get: function() {
          var s = this.quoteMark;
          return s === "'" || s === '"';
        }, set: function(s) {
          p0();
        } }, { key: "quoteMark", get: function() {
          return this._quoteMark;
        }, set: function(s) {
          if (!this._constructed) {
            this._quoteMark = s;
            return;
          }
          this._quoteMark !== s && (this._quoteMark = s, this._syncRawValue());
        } }, { key: "qualifiedAttribute", get: function() {
          return this.qualifiedName(this.raws.attribute || this.attribute);
        } }, { key: "insensitiveFlag", get: function() {
          return this.insensitive ? "i" : "";
        } }, { key: "value", get: function() {
          return this._value;
        }, set: function(s) {
          if (this._constructed) {
            var n = on(s), o = n.deprecatedUsage, a = n.unescaped, u = n.quoteMark;
            if (o && c0(), a === this._value && u === this._quoteMark)
              return;
            this._value = a, this._quoteMark = u, this._syncRawValue();
          } else
            this._value = s;
        } }, { key: "attribute", get: function() {
          return this._attribute;
        }, set: function(s) {
          this._handleEscapes("attribute", s), this._attribute = s;
        } }]), e;
      }(o0.default);
      dr.default = hi;
      hi.NO_QUOTE = null;
      hi.SINGLE_QUOTE = "'";
      hi.DOUBLE_QUOTE = '"';
      var an = (rn2 = { "'": { quotes: "single", wrap: true }, '"': { quotes: "double", wrap: true } }, rn2[null] = { isIdentifier: true }, rn2);
      function Du(r, e) {
        return "" + e.before + r + e.after;
      }
    });
    var fn = y((hr, qu) => {
      l();
      "use strict";
      hr.__esModule = true;
      hr.default = void 0;
      var m0 = w0(di()), g0 = X();
      function w0(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function y0(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, un(r, e);
      }
      function un(r, e) {
        return un = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, un(r, e);
      }
      var b0 = function(r) {
        y0(e, r);
        function e(t) {
          var i;
          return i = r.call(this, t) || this, i.type = g0.UNIVERSAL, i.value = "*", i;
        }
        return e;
      }(m0.default);
      hr.default = b0;
      qu.exports = hr.default;
    });
    var pn = y((mr, Iu) => {
      l();
      "use strict";
      mr.__esModule = true;
      mr.default = void 0;
      var x0 = k0(qe()), v0 = X();
      function k0(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function S0(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, cn(r, e);
      }
      function cn(r, e) {
        return cn = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, cn(r, e);
      }
      var C0 = function(r) {
        S0(e, r);
        function e(t) {
          var i;
          return i = r.call(this, t) || this, i.type = v0.COMBINATOR, i;
        }
        return e;
      }(x0.default);
      mr.default = C0;
      Iu.exports = mr.default;
    });
    var hn = y((gr, Ru) => {
      l();
      "use strict";
      gr.__esModule = true;
      gr.default = void 0;
      var _0 = E0(qe()), A0 = X();
      function E0(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function O0(r, e) {
        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, dn(r, e);
      }
      function dn(r, e) {
        return dn = Object.setPrototypeOf || function(i, s) {
          return i.__proto__ = s, i;
        }, dn(r, e);
      }
      var T0 = function(r) {
        O0(e, r);
        function e(t) {
          var i;
          return i = r.call(this, t) || this, i.type = A0.NESTING, i.value = "&", i;
        }
        return e;
      }(_0.default);
      gr.default = T0;
      Ru.exports = gr.default;
    });
    var Lu = y((mi, Mu) => {
      l();
      "use strict";
      mi.__esModule = true;
      mi.default = P0;
      function P0(r) {
        return r.sort(function(e, t) {
          return e - t;
        });
      }
      Mu.exports = mi.default;
    });
    var mn = y((O) => {
      l();
      "use strict";
      O.__esModule = true;
      O.combinator = O.word = O.comment = O.str = O.tab = O.newline = O.feed = O.cr = O.backslash = O.bang = O.slash = O.doubleQuote = O.singleQuote = O.space = O.greaterThan = O.pipe = O.equals = O.plus = O.caret = O.tilde = O.dollar = O.closeSquare = O.openSquare = O.closeParenthesis = O.openParenthesis = O.semicolon = O.colon = O.comma = O.at = O.asterisk = O.ampersand = void 0;
      var D0 = 38;
      O.ampersand = D0;
      var q0 = 42;
      O.asterisk = q0;
      var I0 = 64;
      O.at = I0;
      var R0 = 44;
      O.comma = R0;
      var M0 = 58;
      O.colon = M0;
      var L0 = 59;
      O.semicolon = L0;
      var F0 = 40;
      O.openParenthesis = F0;
      var N0 = 41;
      O.closeParenthesis = N0;
      var B0 = 91;
      O.openSquare = B0;
      var z0 = 93;
      O.closeSquare = z0;
      var $0 = 36;
      O.dollar = $0;
      var j0 = 126;
      O.tilde = j0;
      var U0 = 94;
      O.caret = U0;
      var V0 = 43;
      O.plus = V0;
      var W0 = 61;
      O.equals = W0;
      var G0 = 124;
      O.pipe = G0;
      var H0 = 62;
      O.greaterThan = H0;
      var Y0 = 32;
      O.space = Y0;
      var Fu = 39;
      O.singleQuote = Fu;
      var Q0 = 34;
      O.doubleQuote = Q0;
      var J0 = 47;
      O.slash = J0;
      var X0 = 33;
      O.bang = X0;
      var K0 = 92;
      O.backslash = K0;
      var Z0 = 13;
      O.cr = Z0;
      var ex = 12;
      O.feed = ex;
      var tx = 10;
      O.newline = tx;
      var rx = 9;
      O.tab = rx;
      var ix = Fu;
      O.str = ix;
      var sx = -1;
      O.comment = sx;
      var nx = -2;
      O.word = nx;
      var ox = -3;
      O.combinator = ox;
    });
    var zu = y((wr) => {
      l();
      "use strict";
      wr.__esModule = true;
      wr.default = dx;
      wr.FIELDS = void 0;
      var _ = ax(mn()), mt, B;
      function Nu() {
        if (typeof WeakMap != "function")
          return null;
        var r = /* @__PURE__ */ new WeakMap();
        return Nu = function() {
          return r;
        }, r;
      }
      function ax(r) {
        if (r && r.__esModule)
          return r;
        if (r === null || typeof r != "object" && typeof r != "function")
          return { default: r };
        var e = Nu();
        if (e && e.has(r))
          return e.get(r);
        var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in r)
          if (Object.prototype.hasOwnProperty.call(r, s)) {
            var n = i ? Object.getOwnPropertyDescriptor(r, s) : null;
            n && (n.get || n.set) ? Object.defineProperty(t, s, n) : t[s] = r[s];
          }
        return t.default = r, e && e.set(r, t), t;
      }
      var lx = (mt = {}, mt[_.tab] = true, mt[_.newline] = true, mt[_.cr] = true, mt[_.feed] = true, mt), ux = (B = {}, B[_.space] = true, B[_.tab] = true, B[_.newline] = true, B[_.cr] = true, B[_.feed] = true, B[_.ampersand] = true, B[_.asterisk] = true, B[_.bang] = true, B[_.comma] = true, B[_.colon] = true, B[_.semicolon] = true, B[_.openParenthesis] = true, B[_.closeParenthesis] = true, B[_.openSquare] = true, B[_.closeSquare] = true, B[_.singleQuote] = true, B[_.doubleQuote] = true, B[_.plus] = true, B[_.pipe] = true, B[_.tilde] = true, B[_.greaterThan] = true, B[_.equals] = true, B[_.dollar] = true, B[_.caret] = true, B[_.slash] = true, B), gn = {}, Bu = "0123456789abcdefABCDEF";
      for (gi = 0; gi < Bu.length; gi++)
        gn[Bu.charCodeAt(gi)] = true;
      var gi;
      function fx(r, e) {
        var t = e, i;
        do {
          if (i = r.charCodeAt(t), ux[i])
            return t - 1;
          i === _.backslash ? t = cx(r, t) + 1 : t++;
        } while (t < r.length);
        return t - 1;
      }
      function cx(r, e) {
        var t = e, i = r.charCodeAt(t + 1);
        if (!lx[i])
          if (gn[i]) {
            var s = 0;
            do
              t++, s++, i = r.charCodeAt(t + 1);
            while (gn[i] && s < 6);
            s < 6 && i === _.space && t++;
          } else
            t++;
        return t;
      }
      var px = { TYPE: 0, START_LINE: 1, START_COL: 2, END_LINE: 3, END_COL: 4, START_POS: 5, END_POS: 6 };
      wr.FIELDS = px;
      function dx(r) {
        var e = [], t = r.css.valueOf(), i = t, s = i.length, n = -1, o = 1, a = 0, u = 0, f, c, d, p, h, w, v, b, x, k, T, P, I;
        function V(L, R) {
          if (r.safe)
            t += R, x = t.length - 1;
          else
            throw r.error("Unclosed " + L, o, a - n, a);
        }
        for (; a < s; ) {
          switch (f = t.charCodeAt(a), f === _.newline && (n = a, o += 1), f) {
            case _.space:
            case _.tab:
            case _.newline:
            case _.cr:
            case _.feed:
              x = a;
              do
                x += 1, f = t.charCodeAt(x), f === _.newline && (n = x, o += 1);
              while (f === _.space || f === _.newline || f === _.tab || f === _.cr || f === _.feed);
              I = _.space, p = o, d = x - n - 1, u = x;
              break;
            case _.plus:
            case _.greaterThan:
            case _.tilde:
            case _.pipe:
              x = a;
              do
                x += 1, f = t.charCodeAt(x);
              while (f === _.plus || f === _.greaterThan || f === _.tilde || f === _.pipe);
              I = _.combinator, p = o, d = a - n, u = x;
              break;
            case _.asterisk:
            case _.ampersand:
            case _.bang:
            case _.comma:
            case _.equals:
            case _.dollar:
            case _.caret:
            case _.openSquare:
            case _.closeSquare:
            case _.colon:
            case _.semicolon:
            case _.openParenthesis:
            case _.closeParenthesis:
              x = a, I = f, p = o, d = a - n, u = x + 1;
              break;
            case _.singleQuote:
            case _.doubleQuote:
              P = f === _.singleQuote ? "'" : '"', x = a;
              do
                for (h = false, x = t.indexOf(P, x + 1), x === -1 && V("quote", P), w = x; t.charCodeAt(w - 1) === _.backslash; )
                  w -= 1, h = !h;
              while (h);
              I = _.str, p = o, d = a - n, u = x + 1;
              break;
            default:
              f === _.slash && t.charCodeAt(a + 1) === _.asterisk ? (x = t.indexOf("*/", a + 2) + 1, x === 0 && V("comment", "*/"), c = t.slice(a, x + 1), b = c.split(`
`), v = b.length - 1, v > 0 ? (k = o + v, T = x - b[v].length) : (k = o, T = n), I = _.comment, o = k, p = k, d = x - T) : f === _.slash ? (x = a, I = f, p = o, d = a - n, u = x + 1) : (x = fx(t, a), I = _.word, p = o, d = x - n), u = x + 1;
              break;
          }
          e.push([I, o, a - n, p, d, a, u]), T && (n = T, T = null), a = u;
        }
        return e;
      }
    });
    var Yu = y((yr, Hu) => {
      l();
      "use strict";
      yr.__esModule = true;
      yr.default = void 0;
      var hx = se(Bs()), wn = se($s()), mx = se(Vs()), $u = se(Gs()), gx = se(Ys()), wx = se(Xs()), yn = se(Zs()), yx = se(tn()), ju = wi(ln()), bx = se(fn()), bn = se(pn()), xx = se(hn()), vx = se(Lu()), S = wi(zu()), A = wi(mn()), kx = wi(X()), G = Zt(), nt, xn;
      function Uu() {
        if (typeof WeakMap != "function")
          return null;
        var r = /* @__PURE__ */ new WeakMap();
        return Uu = function() {
          return r;
        }, r;
      }
      function wi(r) {
        if (r && r.__esModule)
          return r;
        if (r === null || typeof r != "object" && typeof r != "function")
          return { default: r };
        var e = Uu();
        if (e && e.has(r))
          return e.get(r);
        var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in r)
          if (Object.prototype.hasOwnProperty.call(r, s)) {
            var n = i ? Object.getOwnPropertyDescriptor(r, s) : null;
            n && (n.get || n.set) ? Object.defineProperty(t, s, n) : t[s] = r[s];
          }
        return t.default = r, e && e.set(r, t), t;
      }
      function se(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function Vu(r, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(r, i.key, i);
        }
      }
      function Sx(r, e, t) {
        return e && Vu(r.prototype, e), t && Vu(r, t), r;
      }
      var vn = (nt = {}, nt[A.space] = true, nt[A.cr] = true, nt[A.feed] = true, nt[A.newline] = true, nt[A.tab] = true, nt), Cx = Object.assign({}, vn, (xn = {}, xn[A.comment] = true, xn));
      function Wu(r) {
        return { line: r[S.FIELDS.START_LINE], column: r[S.FIELDS.START_COL] };
      }
      function Gu(r) {
        return { line: r[S.FIELDS.END_LINE], column: r[S.FIELDS.END_COL] };
      }
      function ot(r, e, t, i) {
        return { start: { line: r, column: e }, end: { line: t, column: i } };
      }
      function gt(r) {
        return ot(r[S.FIELDS.START_LINE], r[S.FIELDS.START_COL], r[S.FIELDS.END_LINE], r[S.FIELDS.END_COL]);
      }
      function kn(r, e) {
        if (!!r)
          return ot(r[S.FIELDS.START_LINE], r[S.FIELDS.START_COL], e[S.FIELDS.END_LINE], e[S.FIELDS.END_COL]);
      }
      function wt(r, e) {
        var t = r[e];
        if (typeof t == "string")
          return t.indexOf("\\") !== -1 && ((0, G.ensureObject)(r, "raws"), r[e] = (0, G.unesc)(t), r.raws[e] === void 0 && (r.raws[e] = t)), r;
      }
      function Sn(r, e) {
        for (var t = -1, i = []; (t = r.indexOf(e, t + 1)) !== -1; )
          i.push(t);
        return i;
      }
      function _x() {
        var r = Array.prototype.concat.apply([], arguments);
        return r.filter(function(e, t) {
          return t === r.indexOf(e);
        });
      }
      var Ax = function() {
        function r(t, i) {
          i === void 0 && (i = {}), this.rule = t, this.options = Object.assign({ lossy: false, safe: false }, i), this.position = 0, this.css = typeof this.rule == "string" ? this.rule : this.rule.selector, this.tokens = (0, S.default)({ css: this.css, error: this._errorGenerator(), safe: this.options.safe });
          var s = kn(this.tokens[0], this.tokens[this.tokens.length - 1]);
          this.root = new hx.default({ source: s }), this.root.errorGenerator = this._errorGenerator();
          var n = new wn.default({ source: { start: { line: 1, column: 1 } } });
          this.root.append(n), this.current = n, this.loop();
        }
        var e = r.prototype;
        return e._errorGenerator = function() {
          var i = this;
          return function(s, n) {
            return typeof i.rule == "string" ? new Error(s) : i.rule.error(s, n);
          };
        }, e.attribute = function() {
          var i = [], s = this.currToken;
          for (this.position++; this.position < this.tokens.length && this.currToken[S.FIELDS.TYPE] !== A.closeSquare; )
            i.push(this.currToken), this.position++;
          if (this.currToken[S.FIELDS.TYPE] !== A.closeSquare)
            return this.expected("closing square bracket", this.currToken[S.FIELDS.START_POS]);
          var n = i.length, o = { source: ot(s[1], s[2], this.currToken[3], this.currToken[4]), sourceIndex: s[S.FIELDS.START_POS] };
          if (n === 1 && !~[A.word].indexOf(i[0][S.FIELDS.TYPE]))
            return this.expected("attribute", i[0][S.FIELDS.START_POS]);
          for (var a = 0, u = "", f = "", c = null, d = false; a < n; ) {
            var p = i[a], h = this.content(p), w = i[a + 1];
            switch (p[S.FIELDS.TYPE]) {
              case A.space:
                if (d = true, this.options.lossy)
                  break;
                if (c) {
                  (0, G.ensureObject)(o, "spaces", c);
                  var v = o.spaces[c].after || "";
                  o.spaces[c].after = v + h;
                  var b = (0, G.getProp)(o, "raws", "spaces", c, "after") || null;
                  b && (o.raws.spaces[c].after = b + h);
                } else
                  u = u + h, f = f + h;
                break;
              case A.asterisk:
                if (w[S.FIELDS.TYPE] === A.equals)
                  o.operator = h, c = "operator";
                else if ((!o.namespace || c === "namespace" && !d) && w) {
                  u && ((0, G.ensureObject)(o, "spaces", "attribute"), o.spaces.attribute.before = u, u = ""), f && ((0, G.ensureObject)(o, "raws", "spaces", "attribute"), o.raws.spaces.attribute.before = u, f = ""), o.namespace = (o.namespace || "") + h;
                  var x = (0, G.getProp)(o, "raws", "namespace") || null;
                  x && (o.raws.namespace += h), c = "namespace";
                }
                d = false;
                break;
              case A.dollar:
                if (c === "value") {
                  var k = (0, G.getProp)(o, "raws", "value");
                  o.value += "$", k && (o.raws.value = k + "$");
                  break;
                }
              case A.caret:
                w[S.FIELDS.TYPE] === A.equals && (o.operator = h, c = "operator"), d = false;
                break;
              case A.combinator:
                if (h === "~" && w[S.FIELDS.TYPE] === A.equals && (o.operator = h, c = "operator"), h !== "|") {
                  d = false;
                  break;
                }
                w[S.FIELDS.TYPE] === A.equals ? (o.operator = h, c = "operator") : !o.namespace && !o.attribute && (o.namespace = true), d = false;
                break;
              case A.word:
                if (w && this.content(w) === "|" && i[a + 2] && i[a + 2][S.FIELDS.TYPE] !== A.equals && !o.operator && !o.namespace)
                  o.namespace = h, c = "namespace";
                else if (!o.attribute || c === "attribute" && !d) {
                  u && ((0, G.ensureObject)(o, "spaces", "attribute"), o.spaces.attribute.before = u, u = ""), f && ((0, G.ensureObject)(o, "raws", "spaces", "attribute"), o.raws.spaces.attribute.before = f, f = ""), o.attribute = (o.attribute || "") + h;
                  var T = (0, G.getProp)(o, "raws", "attribute") || null;
                  T && (o.raws.attribute += h), c = "attribute";
                } else if (!o.value && o.value !== "" || c === "value" && !d) {
                  var P = (0, G.unesc)(h), I = (0, G.getProp)(o, "raws", "value") || "", V = o.value || "";
                  o.value = V + P, o.quoteMark = null, (P !== h || I) && ((0, G.ensureObject)(o, "raws"), o.raws.value = (I || V) + h), c = "value";
                } else {
                  var L = h === "i" || h === "I";
                  (o.value || o.value === "") && (o.quoteMark || d) ? (o.insensitive = L, (!L || h === "I") && ((0, G.ensureObject)(o, "raws"), o.raws.insensitiveFlag = h), c = "insensitive", u && ((0, G.ensureObject)(o, "spaces", "insensitive"), o.spaces.insensitive.before = u, u = ""), f && ((0, G.ensureObject)(o, "raws", "spaces", "insensitive"), o.raws.spaces.insensitive.before = f, f = "")) : (o.value || o.value === "") && (c = "value", o.value += h, o.raws.value && (o.raws.value += h));
                }
                d = false;
                break;
              case A.str:
                if (!o.attribute || !o.operator)
                  return this.error("Expected an attribute followed by an operator preceding the string.", { index: p[S.FIELDS.START_POS] });
                var R = (0, ju.unescapeValue)(h), Q = R.unescaped, rt = R.quoteMark;
                o.value = Q, o.quoteMark = rt, c = "value", (0, G.ensureObject)(o, "raws"), o.raws.value = h, d = false;
                break;
              case A.equals:
                if (!o.attribute)
                  return this.expected("attribute", p[S.FIELDS.START_POS], h);
                if (o.value)
                  return this.error('Unexpected "=" found; an operator was already defined.', { index: p[S.FIELDS.START_POS] });
                o.operator = o.operator ? o.operator + h : h, c = "operator", d = false;
                break;
              case A.comment:
                if (c)
                  if (d || w && w[S.FIELDS.TYPE] === A.space || c === "insensitive") {
                    var ze = (0, G.getProp)(o, "spaces", c, "after") || "", Qt = (0, G.getProp)(o, "raws", "spaces", c, "after") || ze;
                    (0, G.ensureObject)(o, "raws", "spaces", c), o.raws.spaces[c].after = Qt + h;
                  } else {
                    var my = o[c] || "", gy = (0, G.getProp)(o, "raws", c) || my;
                    (0, G.ensureObject)(o, "raws"), o.raws[c] = gy + h;
                  }
                else
                  f = f + h;
                break;
              default:
                return this.error('Unexpected "' + h + '" found.', { index: p[S.FIELDS.START_POS] });
            }
            a++;
          }
          wt(o, "attribute"), wt(o, "namespace"), this.newNode(new ju.default(o)), this.position++;
        }, e.parseWhitespaceEquivalentTokens = function(i) {
          i < 0 && (i = this.tokens.length);
          var s = this.position, n = [], o = "", a = void 0;
          do
            if (vn[this.currToken[S.FIELDS.TYPE]])
              this.options.lossy || (o += this.content());
            else if (this.currToken[S.FIELDS.TYPE] === A.comment) {
              var u = {};
              o && (u.before = o, o = ""), a = new $u.default({ value: this.content(), source: gt(this.currToken), sourceIndex: this.currToken[S.FIELDS.START_POS], spaces: u }), n.push(a);
            }
          while (++this.position < i);
          if (o) {
            if (a)
              a.spaces.after = o;
            else if (!this.options.lossy) {
              var f = this.tokens[s], c = this.tokens[this.position - 1];
              n.push(new yn.default({ value: "", source: ot(f[S.FIELDS.START_LINE], f[S.FIELDS.START_COL], c[S.FIELDS.END_LINE], c[S.FIELDS.END_COL]), sourceIndex: f[S.FIELDS.START_POS], spaces: { before: o, after: "" } }));
            }
          }
          return n;
        }, e.convertWhitespaceNodesToSpace = function(i, s) {
          var n = this;
          s === void 0 && (s = false);
          var o = "", a = "";
          i.forEach(function(f) {
            var c = n.lossySpace(f.spaces.before, s), d = n.lossySpace(f.rawSpaceBefore, s);
            o += c + n.lossySpace(f.spaces.after, s && c.length === 0), a += c + f.value + n.lossySpace(f.rawSpaceAfter, s && d.length === 0);
          }), a === o && (a = void 0);
          var u = { space: o, rawSpace: a };
          return u;
        }, e.isNamedCombinator = function(i) {
          return i === void 0 && (i = this.position), this.tokens[i + 0] && this.tokens[i + 0][S.FIELDS.TYPE] === A.slash && this.tokens[i + 1] && this.tokens[i + 1][S.FIELDS.TYPE] === A.word && this.tokens[i + 2] && this.tokens[i + 2][S.FIELDS.TYPE] === A.slash;
        }, e.namedCombinator = function() {
          if (this.isNamedCombinator()) {
            var i = this.content(this.tokens[this.position + 1]), s = (0, G.unesc)(i).toLowerCase(), n = {};
            s !== i && (n.value = "/" + i + "/");
            var o = new bn.default({ value: "/" + s + "/", source: ot(this.currToken[S.FIELDS.START_LINE], this.currToken[S.FIELDS.START_COL], this.tokens[this.position + 2][S.FIELDS.END_LINE], this.tokens[this.position + 2][S.FIELDS.END_COL]), sourceIndex: this.currToken[S.FIELDS.START_POS], raws: n });
            return this.position = this.position + 3, o;
          } else
            this.unexpected();
        }, e.combinator = function() {
          var i = this;
          if (this.content() === "|")
            return this.namespace();
          var s = this.locateNextMeaningfulToken(this.position);
          if (s < 0 || this.tokens[s][S.FIELDS.TYPE] === A.comma) {
            var n = this.parseWhitespaceEquivalentTokens(s);
            if (n.length > 0) {
              var o = this.current.last;
              if (o) {
                var a = this.convertWhitespaceNodesToSpace(n), u = a.space, f = a.rawSpace;
                f !== void 0 && (o.rawSpaceAfter += f), o.spaces.after += u;
              } else
                n.forEach(function(I) {
                  return i.newNode(I);
                });
            }
            return;
          }
          var c = this.currToken, d = void 0;
          s > this.position && (d = this.parseWhitespaceEquivalentTokens(s));
          var p;
          if (this.isNamedCombinator() ? p = this.namedCombinator() : this.currToken[S.FIELDS.TYPE] === A.combinator ? (p = new bn.default({ value: this.content(), source: gt(this.currToken), sourceIndex: this.currToken[S.FIELDS.START_POS] }), this.position++) : vn[this.currToken[S.FIELDS.TYPE]] || d || this.unexpected(), p) {
            if (d) {
              var h = this.convertWhitespaceNodesToSpace(d), w = h.space, v = h.rawSpace;
              p.spaces.before = w, p.rawSpaceBefore = v;
            }
          } else {
            var b = this.convertWhitespaceNodesToSpace(d, true), x = b.space, k = b.rawSpace;
            k || (k = x);
            var T = {}, P = { spaces: {} };
            x.endsWith(" ") && k.endsWith(" ") ? (T.before = x.slice(0, x.length - 1), P.spaces.before = k.slice(0, k.length - 1)) : x.startsWith(" ") && k.startsWith(" ") ? (T.after = x.slice(1), P.spaces.after = k.slice(1)) : P.value = k, p = new bn.default({ value: " ", source: kn(c, this.tokens[this.position - 1]), sourceIndex: c[S.FIELDS.START_POS], spaces: T, raws: P });
          }
          return this.currToken && this.currToken[S.FIELDS.TYPE] === A.space && (p.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(p);
        }, e.comma = function() {
          if (this.position === this.tokens.length - 1) {
            this.root.trailingComma = true, this.position++;
            return;
          }
          this.current._inferEndPosition();
          var i = new wn.default({ source: { start: Wu(this.tokens[this.position + 1]) } });
          this.current.parent.append(i), this.current = i, this.position++;
        }, e.comment = function() {
          var i = this.currToken;
          this.newNode(new $u.default({ value: this.content(), source: gt(i), sourceIndex: i[S.FIELDS.START_POS] })), this.position++;
        }, e.error = function(i, s) {
          throw this.root.error(i, s);
        }, e.missingBackslash = function() {
          return this.error("Expected a backslash preceding the semicolon.", { index: this.currToken[S.FIELDS.START_POS] });
        }, e.missingParenthesis = function() {
          return this.expected("opening parenthesis", this.currToken[S.FIELDS.START_POS]);
        }, e.missingSquareBracket = function() {
          return this.expected("opening square bracket", this.currToken[S.FIELDS.START_POS]);
        }, e.unexpected = function() {
          return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[S.FIELDS.START_POS]);
        }, e.namespace = function() {
          var i = this.prevToken && this.content(this.prevToken) || true;
          if (this.nextToken[S.FIELDS.TYPE] === A.word)
            return this.position++, this.word(i);
          if (this.nextToken[S.FIELDS.TYPE] === A.asterisk)
            return this.position++, this.universal(i);
        }, e.nesting = function() {
          if (this.nextToken) {
            var i = this.content(this.nextToken);
            if (i === "|") {
              this.position++;
              return;
            }
          }
          var s = this.currToken;
          this.newNode(new xx.default({ value: this.content(), source: gt(s), sourceIndex: s[S.FIELDS.START_POS] })), this.position++;
        }, e.parentheses = function() {
          var i = this.current.last, s = 1;
          if (this.position++, i && i.type === kx.PSEUDO) {
            var n = new wn.default({ source: { start: Wu(this.tokens[this.position - 1]) } }), o = this.current;
            for (i.append(n), this.current = n; this.position < this.tokens.length && s; )
              this.currToken[S.FIELDS.TYPE] === A.openParenthesis && s++, this.currToken[S.FIELDS.TYPE] === A.closeParenthesis && s--, s ? this.parse() : (this.current.source.end = Gu(this.currToken), this.current.parent.source.end = Gu(this.currToken), this.position++);
            this.current = o;
          } else {
            for (var a = this.currToken, u = "(", f; this.position < this.tokens.length && s; )
              this.currToken[S.FIELDS.TYPE] === A.openParenthesis && s++, this.currToken[S.FIELDS.TYPE] === A.closeParenthesis && s--, f = this.currToken, u += this.parseParenthesisToken(this.currToken), this.position++;
            i ? i.appendToPropertyAndEscape("value", u, u) : this.newNode(new yn.default({ value: u, source: ot(a[S.FIELDS.START_LINE], a[S.FIELDS.START_COL], f[S.FIELDS.END_LINE], f[S.FIELDS.END_COL]), sourceIndex: a[S.FIELDS.START_POS] }));
          }
          if (s)
            return this.expected("closing parenthesis", this.currToken[S.FIELDS.START_POS]);
        }, e.pseudo = function() {
          for (var i = this, s = "", n = this.currToken; this.currToken && this.currToken[S.FIELDS.TYPE] === A.colon; )
            s += this.content(), this.position++;
          if (!this.currToken)
            return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
          if (this.currToken[S.FIELDS.TYPE] === A.word)
            this.splitWord(false, function(o, a) {
              s += o, i.newNode(new yx.default({ value: s, source: kn(n, i.currToken), sourceIndex: n[S.FIELDS.START_POS] })), a > 1 && i.nextToken && i.nextToken[S.FIELDS.TYPE] === A.openParenthesis && i.error("Misplaced parenthesis.", { index: i.nextToken[S.FIELDS.START_POS] });
            });
          else
            return this.expected(["pseudo-class", "pseudo-element"], this.currToken[S.FIELDS.START_POS]);
        }, e.space = function() {
          var i = this.content();
          this.position === 0 || this.prevToken[S.FIELDS.TYPE] === A.comma || this.prevToken[S.FIELDS.TYPE] === A.openParenthesis || this.current.nodes.every(function(s) {
            return s.type === "comment";
          }) ? (this.spaces = this.optionalSpace(i), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[S.FIELDS.TYPE] === A.comma || this.nextToken[S.FIELDS.TYPE] === A.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(i), this.position++) : this.combinator();
        }, e.string = function() {
          var i = this.currToken;
          this.newNode(new yn.default({ value: this.content(), source: gt(i), sourceIndex: i[S.FIELDS.START_POS] })), this.position++;
        }, e.universal = function(i) {
          var s = this.nextToken;
          if (s && this.content(s) === "|")
            return this.position++, this.namespace();
          var n = this.currToken;
          this.newNode(new bx.default({ value: this.content(), source: gt(n), sourceIndex: n[S.FIELDS.START_POS] }), i), this.position++;
        }, e.splitWord = function(i, s) {
          for (var n = this, o = this.nextToken, a = this.content(); o && ~[A.dollar, A.caret, A.equals, A.word].indexOf(o[S.FIELDS.TYPE]); ) {
            this.position++;
            var u = this.content();
            if (a += u, u.lastIndexOf("\\") === u.length - 1) {
              var f = this.nextToken;
              f && f[S.FIELDS.TYPE] === A.space && (a += this.requiredSpace(this.content(f)), this.position++);
            }
            o = this.nextToken;
          }
          var c = Sn(a, ".").filter(function(w) {
            var v = a[w - 1] === "\\", b = /^\d+\.\d+%$/.test(a);
            return !v && !b;
          }), d = Sn(a, "#").filter(function(w) {
            return a[w - 1] !== "\\";
          }), p = Sn(a, "#{");
          p.length && (d = d.filter(function(w) {
            return !~p.indexOf(w);
          }));
          var h = (0, vx.default)(_x([0].concat(c, d)));
          h.forEach(function(w, v) {
            var b = h[v + 1] || a.length, x = a.slice(w, b);
            if (v === 0 && s)
              return s.call(n, x, h.length);
            var k, T = n.currToken, P = T[S.FIELDS.START_POS] + h[v], I = ot(T[1], T[2] + w, T[3], T[2] + (b - 1));
            if (~c.indexOf(w)) {
              var V = { value: x.slice(1), source: I, sourceIndex: P };
              k = new mx.default(wt(V, "value"));
            } else if (~d.indexOf(w)) {
              var L = { value: x.slice(1), source: I, sourceIndex: P };
              k = new gx.default(wt(L, "value"));
            } else {
              var R = { value: x, source: I, sourceIndex: P };
              wt(R, "value"), k = new wx.default(R);
            }
            n.newNode(k, i), i = null;
          }), this.position++;
        }, e.word = function(i) {
          var s = this.nextToken;
          return s && this.content(s) === "|" ? (this.position++, this.namespace()) : this.splitWord(i);
        }, e.loop = function() {
          for (; this.position < this.tokens.length; )
            this.parse(true);
          return this.current._inferEndPosition(), this.root;
        }, e.parse = function(i) {
          switch (this.currToken[S.FIELDS.TYPE]) {
            case A.space:
              this.space();
              break;
            case A.comment:
              this.comment();
              break;
            case A.openParenthesis:
              this.parentheses();
              break;
            case A.closeParenthesis:
              i && this.missingParenthesis();
              break;
            case A.openSquare:
              this.attribute();
              break;
            case A.dollar:
            case A.caret:
            case A.equals:
            case A.word:
              this.word();
              break;
            case A.colon:
              this.pseudo();
              break;
            case A.comma:
              this.comma();
              break;
            case A.asterisk:
              this.universal();
              break;
            case A.ampersand:
              this.nesting();
              break;
            case A.slash:
            case A.combinator:
              this.combinator();
              break;
            case A.str:
              this.string();
              break;
            case A.closeSquare:
              this.missingSquareBracket();
            case A.semicolon:
              this.missingBackslash();
            default:
              this.unexpected();
          }
        }, e.expected = function(i, s, n) {
          if (Array.isArray(i)) {
            var o = i.pop();
            i = i.join(", ") + " or " + o;
          }
          var a = /^[aeiou]/.test(i[0]) ? "an" : "a";
          return n ? this.error("Expected " + a + " " + i + ', found "' + n + '" instead.', { index: s }) : this.error("Expected " + a + " " + i + ".", { index: s });
        }, e.requiredSpace = function(i) {
          return this.options.lossy ? " " : i;
        }, e.optionalSpace = function(i) {
          return this.options.lossy ? "" : i;
        }, e.lossySpace = function(i, s) {
          return this.options.lossy ? s ? " " : "" : i;
        }, e.parseParenthesisToken = function(i) {
          var s = this.content(i);
          return i[S.FIELDS.TYPE] === A.space ? this.requiredSpace(s) : s;
        }, e.newNode = function(i, s) {
          return s && (/^ +$/.test(s) && (this.options.lossy || (this.spaces = (this.spaces || "") + s), s = true), i.namespace = s, wt(i, "namespace")), this.spaces && (i.spaces.before = this.spaces, this.spaces = ""), this.current.append(i);
        }, e.content = function(i) {
          return i === void 0 && (i = this.currToken), this.css.slice(i[S.FIELDS.START_POS], i[S.FIELDS.END_POS]);
        }, e.locateNextMeaningfulToken = function(i) {
          i === void 0 && (i = this.position + 1);
          for (var s = i; s < this.tokens.length; )
            if (Cx[this.tokens[s][S.FIELDS.TYPE]]) {
              s++;
              continue;
            } else
              return s;
          return -1;
        }, Sx(r, [{ key: "currToken", get: function() {
          return this.tokens[this.position];
        } }, { key: "nextToken", get: function() {
          return this.tokens[this.position + 1];
        } }, { key: "prevToken", get: function() {
          return this.tokens[this.position - 1];
        } }]), r;
      }();
      yr.default = Ax;
      Hu.exports = yr.default;
    });
    var Ju = y((br, Qu) => {
      l();
      "use strict";
      br.__esModule = true;
      br.default = void 0;
      var Ex = Ox(Yu());
      function Ox(r) {
        return r && r.__esModule ? r : { default: r };
      }
      var Tx = function() {
        function r(t, i) {
          this.func = t || function() {
          }, this.funcRes = null, this.options = i;
        }
        var e = r.prototype;
        return e._shouldUpdateSelector = function(i, s) {
          s === void 0 && (s = {});
          var n = Object.assign({}, this.options, s);
          return n.updateSelector === false ? false : typeof i != "string";
        }, e._isLossy = function(i) {
          i === void 0 && (i = {});
          var s = Object.assign({}, this.options, i);
          return s.lossless === false;
        }, e._root = function(i, s) {
          s === void 0 && (s = {});
          var n = new Ex.default(i, this._parseOptions(s));
          return n.root;
        }, e._parseOptions = function(i) {
          return { lossy: this._isLossy(i) };
        }, e._run = function(i, s) {
          var n = this;
          return s === void 0 && (s = {}), new Promise(function(o, a) {
            try {
              var u = n._root(i, s);
              Promise.resolve(n.func(u)).then(function(f) {
                var c = void 0;
                return n._shouldUpdateSelector(i, s) && (c = u.toString(), i.selector = c), { transform: f, root: u, string: c };
              }).then(o, a);
            } catch (f) {
              a(f);
              return;
            }
          });
        }, e._runSync = function(i, s) {
          s === void 0 && (s = {});
          var n = this._root(i, s), o = this.func(n);
          if (o && typeof o.then == "function")
            throw new Error("Selector processor returned a promise to a synchronous call.");
          var a = void 0;
          return s.updateSelector && typeof i != "string" && (a = n.toString(), i.selector = a), { transform: o, root: n, string: a };
        }, e.ast = function(i, s) {
          return this._run(i, s).then(function(n) {
            return n.root;
          });
        }, e.astSync = function(i, s) {
          return this._runSync(i, s).root;
        }, e.transform = function(i, s) {
          return this._run(i, s).then(function(n) {
            return n.transform;
          });
        }, e.transformSync = function(i, s) {
          return this._runSync(i, s).transform;
        }, e.process = function(i, s) {
          return this._run(i, s).then(function(n) {
            return n.string || n.root.toString();
          });
        }, e.processSync = function(i, s) {
          var n = this._runSync(i, s);
          return n.string || n.root.toString();
        }, r;
      }();
      br.default = Tx;
      Qu.exports = br.default;
    });
    var Xu = y(($) => {
      l();
      "use strict";
      $.__esModule = true;
      $.universal = $.tag = $.string = $.selector = $.root = $.pseudo = $.nesting = $.id = $.comment = $.combinator = $.className = $.attribute = void 0;
      var Px = ne(ln()), Dx = ne(Vs()), qx = ne(pn()), Ix = ne(Gs()), Rx = ne(Ys()), Mx = ne(hn()), Lx = ne(tn()), Fx = ne(Bs()), Nx = ne($s()), Bx = ne(Zs()), zx = ne(Xs()), $x = ne(fn());
      function ne(r) {
        return r && r.__esModule ? r : { default: r };
      }
      var jx = function(e) {
        return new Px.default(e);
      };
      $.attribute = jx;
      var Ux = function(e) {
        return new Dx.default(e);
      };
      $.className = Ux;
      var Vx = function(e) {
        return new qx.default(e);
      };
      $.combinator = Vx;
      var Wx = function(e) {
        return new Ix.default(e);
      };
      $.comment = Wx;
      var Gx = function(e) {
        return new Rx.default(e);
      };
      $.id = Gx;
      var Hx = function(e) {
        return new Mx.default(e);
      };
      $.nesting = Hx;
      var Yx = function(e) {
        return new Lx.default(e);
      };
      $.pseudo = Yx;
      var Qx = function(e) {
        return new Fx.default(e);
      };
      $.root = Qx;
      var Jx = function(e) {
        return new Nx.default(e);
      };
      $.selector = Jx;
      var Xx = function(e) {
        return new Bx.default(e);
      };
      $.string = Xx;
      var Kx = function(e) {
        return new zx.default(e);
      };
      $.tag = Kx;
      var Zx = function(e) {
        return new $x.default(e);
      };
      $.universal = Zx;
    });
    var tf = y((M) => {
      l();
      "use strict";
      M.__esModule = true;
      M.isNode = Cn;
      M.isPseudoElement = ef;
      M.isPseudoClass = fv;
      M.isContainer = cv;
      M.isNamespace = pv;
      M.isUniversal = M.isTag = M.isString = M.isSelector = M.isRoot = M.isPseudo = M.isNesting = M.isIdentifier = M.isComment = M.isCombinator = M.isClassName = M.isAttribute = void 0;
      var H = X(), ee, ev = (ee = {}, ee[H.ATTRIBUTE] = true, ee[H.CLASS] = true, ee[H.COMBINATOR] = true, ee[H.COMMENT] = true, ee[H.ID] = true, ee[H.NESTING] = true, ee[H.PSEUDO] = true, ee[H.ROOT] = true, ee[H.SELECTOR] = true, ee[H.STRING] = true, ee[H.TAG] = true, ee[H.UNIVERSAL] = true, ee);
      function Cn(r) {
        return typeof r == "object" && ev[r.type];
      }
      function oe(r, e) {
        return Cn(e) && e.type === r;
      }
      var Ku = oe.bind(null, H.ATTRIBUTE);
      M.isAttribute = Ku;
      var tv = oe.bind(null, H.CLASS);
      M.isClassName = tv;
      var rv = oe.bind(null, H.COMBINATOR);
      M.isCombinator = rv;
      var iv = oe.bind(null, H.COMMENT);
      M.isComment = iv;
      var sv = oe.bind(null, H.ID);
      M.isIdentifier = sv;
      var nv = oe.bind(null, H.NESTING);
      M.isNesting = nv;
      var _n = oe.bind(null, H.PSEUDO);
      M.isPseudo = _n;
      var ov = oe.bind(null, H.ROOT);
      M.isRoot = ov;
      var av = oe.bind(null, H.SELECTOR);
      M.isSelector = av;
      var lv = oe.bind(null, H.STRING);
      M.isString = lv;
      var Zu = oe.bind(null, H.TAG);
      M.isTag = Zu;
      var uv = oe.bind(null, H.UNIVERSAL);
      M.isUniversal = uv;
      function ef(r) {
        return _n(r) && r.value && (r.value.startsWith("::") || r.value.toLowerCase() === ":before" || r.value.toLowerCase() === ":after" || r.value.toLowerCase() === ":first-letter" || r.value.toLowerCase() === ":first-line");
      }
      function fv(r) {
        return _n(r) && !ef(r);
      }
      function cv(r) {
        return !!(Cn(r) && r.walk);
      }
      function pv(r) {
        return Ku(r) || Zu(r);
      }
    });
    var rf = y((me) => {
      l();
      "use strict";
      me.__esModule = true;
      var An = X();
      Object.keys(An).forEach(function(r) {
        r === "default" || r === "__esModule" || r in me && me[r] === An[r] || (me[r] = An[r]);
      });
      var En = Xu();
      Object.keys(En).forEach(function(r) {
        r === "default" || r === "__esModule" || r in me && me[r] === En[r] || (me[r] = En[r]);
      });
      var On = tf();
      Object.keys(On).forEach(function(r) {
        r === "default" || r === "__esModule" || r in me && me[r] === On[r] || (me[r] = On[r]);
      });
    });
    var Ce = y((xr, nf) => {
      l();
      "use strict";
      xr.__esModule = true;
      xr.default = void 0;
      var dv = gv(Ju()), hv = mv(rf());
      function sf() {
        if (typeof WeakMap != "function")
          return null;
        var r = /* @__PURE__ */ new WeakMap();
        return sf = function() {
          return r;
        }, r;
      }
      function mv(r) {
        if (r && r.__esModule)
          return r;
        if (r === null || typeof r != "object" && typeof r != "function")
          return { default: r };
        var e = sf();
        if (e && e.has(r))
          return e.get(r);
        var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in r)
          if (Object.prototype.hasOwnProperty.call(r, s)) {
            var n = i ? Object.getOwnPropertyDescriptor(r, s) : null;
            n && (n.get || n.set) ? Object.defineProperty(t, s, n) : t[s] = r[s];
          }
        return t.default = r, e && e.set(r, t), t;
      }
      function gv(r) {
        return r && r.__esModule ? r : { default: r };
      }
      var Tn = function(e) {
        return new dv.default(e);
      };
      Object.assign(Tn, hv);
      delete Tn.__esModule;
      var wv = Tn;
      xr.default = wv;
      nf.exports = xr.default;
    });
    function at(r) {
      return r.replace(/\\,/g, "\\2c ");
    }
    var yi = C(() => {
      l();
    });
    var af = y((VE, of) => {
      l();
      "use strict";
      of.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    });
    function vr(r, { loose: e = false } = {}) {
      if (typeof r != "string")
        return null;
      if (r = r.trim(), r === "transparent")
        return { mode: "rgb", color: ["0", "0", "0"], alpha: "0" };
      if (r in Pn.default)
        return { mode: "rgb", color: Pn.default[r].map((n) => n.toString()) };
      let t = r.replace(bv, (n, o, a, u, f) => ["#", o, o, a, a, u, u, f ? f + f : ""].join("")).match(yv);
      if (t !== null)
        return { mode: "rgb", color: [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)].map((n) => n.toString()), alpha: t[4] ? (parseInt(t[4], 16) / 255).toString() : void 0 };
      let i = r.match(xv) ?? r.match(vv);
      if (i === null)
        return null;
      let s = [i[2], i[3], i[4]].filter(Boolean).map((n) => n.toString());
      return !e && s.length !== 3 || s.length < 3 && !s.some((n) => /^var\(.*?\)$/.test(n)) ? null : { mode: i[1], color: s, alpha: i[5]?.toString?.() };
    }
    function Dn({ mode: r, color: e, alpha: t }) {
      let i = t !== void 0;
      return `${r}(${e.join(" ")}${i ? ` / ${t}` : ""})`;
    }
    var Pn, yv, bv, Ue, bi, lf, Ve, xv, vv, qn = C(() => {
      l();
      Pn = Y(af()), yv = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, bv = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, Ue = /(?:\d+|\d*\.\d+)%?/, bi = /(?:\s*,\s*|\s+)/, lf = /\s*[,/]\s*/, Ve = /var\(--(?:[^ )]*?)\)/, xv = new RegExp(`^(rgb)a?\\(\\s*(${Ue.source}|${Ve.source})(?:${bi.source}(${Ue.source}|${Ve.source}))?(?:${bi.source}(${Ue.source}|${Ve.source}))?(?:${lf.source}(${Ue.source}|${Ve.source}))?\\s*\\)$`), vv = new RegExp(`^(hsl)a?\\(\\s*((?:${Ue.source})(?:deg|rad|grad|turn)?|${Ve.source})(?:${bi.source}(${Ue.source}|${Ve.source}))?(?:${bi.source}(${Ue.source}|${Ve.source}))?(?:${lf.source}(${Ue.source}|${Ve.source}))?\\s*\\)$`);
    });
    function _e(r, e, t) {
      if (typeof r == "function")
        return r({ opacityValue: e });
      let i = vr(r, { loose: true });
      return i === null ? t : Dn({ ...i, alpha: e });
    }
    function te({ color: r, property: e, variable: t }) {
      let i = [].concat(e);
      if (typeof r == "function")
        return { [t]: "1", ...Object.fromEntries(i.map((n) => [n, r({ opacityVariable: t, opacityValue: `var(${t})` })])) };
      let s = vr(r);
      return s === null ? Object.fromEntries(i.map((n) => [n, r])) : s.alpha !== void 0 ? Object.fromEntries(i.map((n) => [n, r])) : { [t]: "1", ...Object.fromEntries(i.map((n) => [n, Dn({ ...s, alpha: `var(${t})` })])) };
    }
    var kr = C(() => {
      l();
      qn();
    });
    function xi(r) {
      return r = Array.isArray(r) ? r : [r], r = r.map((e) => e instanceof RegExp ? e.source : e), r.join("");
    }
    function ge(r) {
      return new RegExp(xi(r), "g");
    }
    function yt(r) {
      return `(?:${r.map(xi).join("|")})`;
    }
    function In(r) {
      return `(?:${xi(r)})?`;
    }
    function ff(r) {
      return `(?:${xi(r)})*`;
    }
    function vi(r) {
      return r && kv.test(r) ? r.replace(uf, "\\$&") : r || "";
    }
    var uf, kv, Rn = C(() => {
      l();
      uf = /[\\^$.*+?()[\]{}|]/g, kv = RegExp(uf.source);
    });
    function* Sr(r, e) {
      let t = new RegExp(`[(){}\\[\\]${vi(e)}]`, "g"), i = 0, s = 0, n = false, o = 0, a = 0, u = e.length;
      for (let f of r.matchAll(t)) {
        let c = f[0] === e[o], d = o === u - 1, p = c && d;
        f[0] === "(" && i++, f[0] === ")" && i--, f[0] === "[" && i++, f[0] === "]" && i--, f[0] === "{" && i++, f[0] === "}" && i--, c && i === 0 && (a === 0 && (a = f.index), o++), p && i === 0 && (n = true, yield r.substring(s, a), s = a + u), o === u && (o = 0, a = 0);
      }
      n ? yield r.substring(s) : yield r;
    }
    var Mn = C(() => {
      l();
      Rn();
    });
    function ki(r) {
      return Array.from(Sr(r, ",")).map((t) => {
        let i = t.trim(), s = { raw: i }, n = i.split(Cv), o = /* @__PURE__ */ new Set();
        for (let a of n)
          cf.lastIndex = 0, !o.has("KEYWORD") && Sv.has(a) ? (s.keyword = a, o.add("KEYWORD")) : cf.test(a) ? o.has("X") ? o.has("Y") ? o.has("BLUR") ? o.has("SPREAD") || (s.spread = a, o.add("SPREAD")) : (s.blur = a, o.add("BLUR")) : (s.y = a, o.add("Y")) : (s.x = a, o.add("X")) : s.color ? (s.unknown || (s.unknown = []), s.unknown.push(a)) : s.color = a;
        return s.valid = s.x !== void 0 && s.y !== void 0, s;
      });
    }
    function pf(r) {
      return r.map((e) => e.valid ? [e.keyword, e.x, e.y, e.blur, e.spread, e.color].filter(Boolean).join(" ") : e.raw).join(", ");
    }
    var Sv, Cv, cf, Ln = C(() => {
      l();
      Mn();
      Sv = /* @__PURE__ */ new Set(["inset", "inherit", "initial", "revert", "unset"]), Cv = /\ +(?![^(]*\))/g, cf = /^-?(\d+|\.\d+)(.*?)$/g;
    });
    function ae(r, e = true) {
      return r.includes("url(") ? r.split(/(url\(.*?\))/g).filter(Boolean).map((t) => /^url\(.*?\)$/.test(t) ? t : ae(t, false)).join("") : (r = r.replace(/([^\\])_+/g, (t, i) => i + " ".repeat(t.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), e && (r = r.trim()), r = r.replace(/(calc|min|max|clamp)\(.+\)/g, (t) => t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ")), r);
    }
    function Nn(r) {
      return r.startsWith("url(");
    }
    function hf(r) {
      return !isNaN(Number(r)) || Fn.some((e) => new RegExp(`^${e}\\(.+?`).test(r));
    }
    function Bn(r) {
      return r.split(Si).every((e) => /%$/g.test(e) || Fn.some((t) => new RegExp(`^${t}\\(.+?%`).test(e)));
    }
    function zn(r) {
      return r.split(Si).every((e) => e === "0" || new RegExp(`${mf}$`).test(e) || Fn.some((t) => new RegExp(`^${t}\\(.+?${mf}`).test(e)));
    }
    function gf(r) {
      return Av.has(r);
    }
    function wf(r) {
      let e = ki(ae(r));
      for (let t of e)
        if (!t.valid)
          return false;
      return true;
    }
    function yf(r) {
      let e = 0;
      return r.split(Si).every((i) => (i = ae(i), i.startsWith("var(") ? true : vr(i, { loose: true }) !== null ? (e++, true) : false)) ? e > 0 : false;
    }
    function bf(r) {
      let e = 0;
      return r.split(df).every((i) => (i = ae(i), i.startsWith("var(") ? true : Nn(i) || Ov(i) || ["element(", "image(", "cross-fade(", "image-set("].some((s) => i.startsWith(s)) ? (e++, true) : false)) ? e > 0 : false;
    }
    function Ov(r) {
      r = ae(r);
      for (let e of Ev)
        if (r.startsWith(`${e}(`))
          return true;
      return false;
    }
    function xf(r) {
      let e = 0;
      return r.split(Si).every((i) => (i = ae(i), i.startsWith("var(") ? true : Tv.has(i) || zn(i) || Bn(i) ? (e++, true) : false)) ? e > 0 : false;
    }
    function vf(r) {
      let e = 0;
      return r.split(df).every((i) => (i = ae(i), i.startsWith("var(") ? true : i.includes(" ") && !/(['"])([^"']+)\1/g.test(i) || /^\d/g.test(i) ? false : (e++, true))) ? e > 0 : false;
    }
    function kf(r) {
      return Pv.has(r);
    }
    function Sf(r) {
      return Dv.has(r);
    }
    function Cf(r) {
      return qv.has(r);
    }
    var Fn, df, Si, _v, mf, Av, Ev, Tv, Pv, Dv, qv, $n = C(() => {
      l();
      qn();
      Ln();
      Fn = ["min", "max", "clamp", "calc"], df = /,(?![^(]*\))/g, Si = /_(?![^(]*\))/g;
      _v = ["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "vw", "vh", "vmin", "vmax"], mf = `(?:${_v.join("|")})`;
      Av = /* @__PURE__ */ new Set(["thin", "medium", "thick"]);
      Ev = /* @__PURE__ */ new Set(["linear-gradient", "radial-gradient", "repeating-linear-gradient", "repeating-radial-gradient", "conic-gradient"]);
      Tv = /* @__PURE__ */ new Set(["center", "top", "right", "bottom", "left"]);
      Pv = /* @__PURE__ */ new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji", "fangsong"]);
      Dv = /* @__PURE__ */ new Set(["xx-small", "x-small", "small", "medium", "large", "x-large", "x-large", "xxx-large"]);
      qv = /* @__PURE__ */ new Set(["larger", "smaller"]);
    });
    function Af(r, e) {
      return (0, _f.default)((s) => {
        s.walkClasses((n) => {
          let o = e(n.value);
          n.value = o, n.raws && n.raws.value && (n.raws.value = at(n.raws.value));
        });
      }).processSync(r);
    }
    function Ef(r, e) {
      if (!Cr(r))
        return;
      let t = r.slice(1, -1);
      if (!!e(t))
        return ae(t);
    }
    function Iv(r, e = {}, t) {
      let i = e[r];
      if (i !== void 0)
        return st(i);
      if (Cr(r)) {
        let s = Ef(r, t);
        return s === void 0 ? void 0 : st(s);
      }
    }
    function Ci(r, e = {}, { validate: t = () => true } = {}) {
      let i = e.values?.[r];
      return i !== void 0 ? i : e.supportsNegativeValues && r.startsWith("-") ? Iv(r.slice(1), e.values, t) : Ef(r, t);
    }
    function Cr(r) {
      return r.startsWith("[") && r.endsWith("]");
    }
    function Rv(r) {
      let e = r.lastIndexOf("/");
      return e === -1 || e === r.length - 1 ? [r] : [r.slice(0, e), r.slice(e + 1)];
    }
    function bt(r) {
      if (typeof r == "string" && r.includes("<alpha-value>")) {
        let e = r;
        return ({ opacityValue: t = 1 }) => e.replace("<alpha-value>", t);
      }
      return r;
    }
    function Mv(r, e = {}, { tailwindConfig: t = {} } = {}) {
      if (e.values?.[r] !== void 0)
        return bt(e.values?.[r]);
      let [i, s] = Rv(r);
      if (s !== void 0) {
        let n = e.values?.[i] ?? (Cr(i) ? i.slice(1, -1) : void 0);
        return n === void 0 ? void 0 : (n = bt(n), Cr(s) ? _e(n, s.slice(1, -1)) : t.theme?.opacity?.[s] === void 0 ? void 0 : _e(n, t.theme.opacity[s]));
      }
      return Ci(r, e, { validate: yf });
    }
    function Lv(r, e = {}) {
      return e.values?.[r];
    }
    function le(r) {
      return (e, t) => Ci(e, t, { validate: r });
    }
    function Fv(r, e) {
      let t = r.indexOf(e);
      return t === -1 ? [void 0, r] : [r.slice(0, t), r.slice(t + 1)];
    }
    function jn(r, e, t, i) {
      if (Cr(e)) {
        let s = e.slice(1, -1), [n, o] = Fv(s, ":");
        if (!/^[\w-_]+$/g.test(n))
          o = s;
        else if (n !== void 0 && !Tf.includes(n))
          return [];
        if (o.length > 0 && Tf.includes(n))
          return [Ci(`[${o}]`, t), n];
      }
      for (let s of [].concat(r)) {
        let n = Of[s](e, t, { tailwindConfig: i });
        if (n !== void 0)
          return [n, s];
      }
      return [];
    }
    var _f, Of, Tf, _r = C(() => {
      l();
      _f = Y(Ce());
      yi();
      kr();
      $n();
      ei();
      Of = { any: Ci, color: Mv, url: le(Nn), image: le(bf), length: le(zn), percentage: le(Bn), position: le(xf), lookup: Lv, "generic-name": le(kf), "family-name": le(vf), number: le(hf), "line-width": le(gf), "absolute-size": le(Sf), "relative-size": le(Cf), shadow: le(wf) }, Tf = Object.keys(Of);
    });
    function F(r) {
      return typeof r == "function" ? r({}) : r;
    }
    var Un = C(() => {
      l();
    });
    function xt(r) {
      return typeof r == "function";
    }
    function Ar(r) {
      return typeof r == "object" && r !== null;
    }
    function Er(r, ...e) {
      let t = e.pop();
      for (let i of e)
        for (let s in i) {
          let n = t(r[s], i[s]);
          n === void 0 ? Ar(r[s]) && Ar(i[s]) ? r[s] = Er(r[s], i[s], t) : r[s] = i[s] : r[s] = n;
        }
      return r;
    }
    function Nv(r, ...e) {
      return xt(r) ? r(...e) : r;
    }
    function Bv(r) {
      return r.reduce((e, { extend: t }) => Er(e, t, (i, s) => i === void 0 ? [s] : Array.isArray(i) ? [s, ...i] : [s, i]), {});
    }
    function zv(r) {
      return { ...r.reduce((e, t) => Ls(e, t), {}), extend: Bv(r) };
    }
    function Df(r, e) {
      if (Array.isArray(r) && Ar(r[0]))
        return r.concat(e);
      if (Array.isArray(e) && Ar(e[0]) && Ar(r))
        return [r, ...e];
      if (Array.isArray(e))
        return e;
    }
    function $v({ extend: r, ...e }) {
      return Er(e, r, (t, i) => !xt(t) && !i.some(xt) ? Er({}, t, ...i, Df) : (s, n) => Er({}, ...[t, ...i].map((o) => Nv(o, s, n)), Df));
    }
    function* jv(r) {
      let e = $e(r);
      if (e.length === 0 || (yield e, Array.isArray(r)))
        return;
      let t = /^(.*?)\s*\/\s*([^/]+)$/, i = r.match(t);
      if (i !== null) {
        let [, s, n] = i, o = $e(s);
        o.alpha = n, yield o;
      }
    }
    function Uv(r) {
      let e = (t, i) => {
        for (let s of jv(t)) {
          let n = 0, o = r;
          for (; o != null && n < s.length; )
            o = o[s[n++]], o = xt(o) && (s.alpha === void 0 || n <= s.length - 1) ? o(e, Vn) : o;
          if (o !== void 0) {
            if (s.alpha !== void 0) {
              let a = bt(o);
              return _e(a, s.alpha, F(a));
            }
            return De(o) ? je(o) : o;
          }
        }
        return i;
      };
      return Object.assign(e, { theme: e, ...Vn }), Object.keys(r).reduce((t, i) => (t[i] = xt(r[i]) ? r[i](e, Vn) : r[i], t), {});
    }
    function qf(r) {
      let e = [];
      return r.forEach((t) => {
        e = [...e, t];
        let i = t?.plugins ?? [];
        i.length !== 0 && i.forEach((s) => {
          s.__isOptionsFunction && (s = s()), e = [...e, ...qf([s?.config ?? {}])];
        });
      }), e;
    }
    function Vv(r) {
      return [...r].reduceRight((t, i) => xt(i) ? i({ corePlugins: t }) : Ul(i, t), $l);
    }
    function Wv(r) {
      return [...r].reduceRight((t, i) => [...t, ...i], []);
    }
    function Wn(r) {
      let e = [...qf(r), { prefix: "", important: false, separator: ":", variantOrder: Pf.default.variantOrder }];
      return Ql(Ls({ theme: Uv($v(zv(e.map((t) => t?.theme ?? {})))), corePlugins: Vv(e.map((t) => t.corePlugins)), plugins: Wv(r.map((t) => t?.plugins ?? [])) }, ...e));
    }
    var Pf, Vn, If = C(() => {
      l();
      ei();
      jl();
      Vl();
      Pf = Y(Jt());
      ri();
      Yl();
      ii();
      Jl();
      Kt();
      si();
      _r();
      kr();
      Un();
      Vn = { colors: Rs, negative(r) {
        return Object.keys(r).filter((e) => r[e] !== "0").reduce((e, t) => {
          let i = st(r[t]);
          return i !== void 0 && (e[`-${t}`] = i), e;
        }, {});
      }, breakpoints(r) {
        return Object.keys(r).filter((e) => typeof r[e] == "string").reduce((e, t) => ({ ...e, [`screen-${t}`]: r[t] }), {});
      } };
    });
    function K(r, e) {
      return _i.future.includes(e) ? r.future === "all" || (r?.future?.[e] ?? Rf[e] ?? false) : _i.experimental.includes(e) ? r.experimental === "all" || (r?.experimental?.[e] ?? Rf[e] ?? false) : false;
    }
    function Mf(r) {
      return r.experimental === "all" ? _i.experimental : Object.keys(r?.experimental ?? {}).filter((e) => _i.experimental.includes(e) && r.experimental[e]);
    }
    function Lf(r) {
      if (m.env.JEST_WORKER_ID === void 0 && Mf(r).length > 0) {
        let e = Mf(r).map((t) => he.yellow(t)).join(", ");
        W.warn("experimental-flags-enabled", [`You have enabled experimental features: ${e}`, "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."]);
      }
    }
    var Rf, _i, We = C(() => {
      l();
      ti();
      ke();
      Rf = { optimizeUniversalDefaults: false }, _i = { future: ["hoverOnlyWhenSupported", "respectDefaultRingColorOpacity"], experimental: ["optimizeUniversalDefaults", "matchVariant"] };
    });
    function Ai(r) {
      let e = (r?.presets ?? [Ff.default]).slice().reverse().flatMap((s) => Ai(s instanceof Function ? s() : s)), t = { respectDefaultRingColorOpacity: { theme: { ringColor: { DEFAULT: "#3b82f67f" } } } }, i = Object.keys(t).filter((s) => K(r, s)).map((s) => t[s]);
      return [r, ...i, ...e];
    }
    var Ff, Nf = C(() => {
      l();
      Ff = Y(Jt());
      We();
    });
    var Bf = {};
    de(Bf, { default: () => Or });
    function Or(...r) {
      let [, ...e] = Ai(r[0]);
      return Wn([...r, ...e]);
    }
    var Gn = C(() => {
      l();
      If();
      Nf();
    });
    function Ei(r) {
      return typeof r == "object" && r !== null;
    }
    function Gv(r) {
      return Object.keys(r).length === 0;
    }
    function zf(r) {
      return typeof r == "string" || r instanceof String;
    }
    function Hn(r) {
      if (Ei(r) && r.config === void 0 && !Gv(r))
        return null;
      if (Ei(r) && r.config !== void 0 && zf(r.config))
        return ie.resolve(r.config);
      if (Ei(r) && r.config !== void 0 && Ei(r.config))
        return null;
      if (zf(r))
        return ie.resolve(r);
      for (let e of ["./tailwind.config.js", "./tailwind.config.cjs"])
        try {
          let t = ie.resolve(e);
          return ve.accessSync(t), t;
        } catch (t) {
        }
      return null;
    }
    var $f = C(() => {
      l();
      dt();
      it();
    });
    function Hv(r) {
      if (r === void 0)
        return false;
      if (r === "true" || r === "1")
        return true;
      if (r === "false" || r === "0")
        return false;
      if (r === "*")
        return true;
      let e = r.split(",").map((t) => t.split(":")[0]);
      return e.includes("-tailwindcss") ? false : !!e.includes("tailwindcss");
    }
    var we, jf, Uf, Oi, Yn, Re, Ge = C(() => {
      l();
      we = { NODE_ENV: "production", DEBUG: Hv(m.env.DEBUG) }, jf = /* @__PURE__ */ new Map(), Uf = /* @__PURE__ */ new Map(), Oi = /* @__PURE__ */ new Map(), Yn = /* @__PURE__ */ new Map(), Re = new String("*");
    });
    var Vf = {};
    de(Vf, { default: () => Qn });
    var Qn, Jn = C(() => {
      l();
      Qn = { parse: (r) => ({ href: r }) };
    });
    var Xn = y(() => {
      l();
    });
    var Ti = y((RO, Hf) => {
      l();
      "use strict";
      var Wf = (ti(), Gl), Gf = Xn(), vt = class extends Error {
        constructor(e, t, i, s, n, o) {
          super(e);
          this.name = "CssSyntaxError", this.reason = e, n && (this.file = n), s && (this.source = s), o && (this.plugin = o), typeof t != "undefined" && typeof i != "undefined" && (typeof t == "number" ? (this.line = t, this.column = i) : (this.line = t.line, this.column = t.column, this.endLine = i.line, this.endColumn = i.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, vt);
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line != "undefined" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
        }
        showSourceCode(e) {
          if (!this.source)
            return "";
          let t = this.source;
          e == null && (e = Wf.isColorSupported), Gf && e && (t = Gf(t));
          let i = t.split(/\r?\n/), s = Math.max(this.line - 3, 0), n = Math.min(this.line + 2, i.length), o = String(n).length, a, u;
          if (e) {
            let { bold: f, red: c, gray: d } = Wf.createColors(true);
            a = (p) => f(c(p)), u = (p) => d(p);
          } else
            a = u = (f) => f;
          return i.slice(s, n).map((f, c) => {
            let d = s + 1 + c, p = " " + (" " + d).slice(-o) + " | ";
            if (d === this.line) {
              let h = u(p.replace(/\d/g, " ")) + f.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return a(">") + u(p) + f + `
 ` + h + a("^");
            }
            return " " + u(p) + f;
          }).join(`
`);
        }
        toString() {
          let e = this.showSourceCode();
          return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
        }
      };
      Hf.exports = vt;
      vt.default = vt;
    });
    var Pi = y((MO, Kn) => {
      l();
      "use strict";
      Kn.exports.isClean = Symbol("isClean");
      Kn.exports.my = Symbol("my");
    });
    var Zn = y((LO, Qf) => {
      l();
      "use strict";
      var Yf = { colon: ": ", indent: "    ", beforeDecl: `
`, beforeRule: `
`, beforeOpen: " ", beforeClose: `
`, beforeComment: `
`, after: `
`, emptyBody: "", commentLeft: " ", commentRight: " ", semicolon: false };
      function Yv(r) {
        return r[0].toUpperCase() + r.slice(1);
      }
      var Di = class {
        constructor(e) {
          this.builder = e;
        }
        stringify(e, t) {
          if (!this[e.type])
            throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
          this[e.type](e, t);
        }
        document(e) {
          this.body(e);
        }
        root(e) {
          this.body(e), e.raws.after && this.builder(e.raws.after);
        }
        comment(e) {
          let t = this.raw(e, "left", "commentLeft"), i = this.raw(e, "right", "commentRight");
          this.builder("/*" + t + e.text + i + "*/", e);
        }
        decl(e, t) {
          let i = this.raw(e, "between", "colon"), s = e.prop + i + this.rawValue(e, "value");
          e.important && (s += e.raws.important || " !important"), t && (s += ";"), this.builder(s, e);
        }
        rule(e) {
          this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
        }
        atrule(e, t) {
          let i = "@" + e.name, s = e.params ? this.rawValue(e, "params") : "";
          if (typeof e.raws.afterName != "undefined" ? i += e.raws.afterName : s && (i += " "), e.nodes)
            this.block(e, i + s);
          else {
            let n = (e.raws.between || "") + (t ? ";" : "");
            this.builder(i + s + n, e);
          }
        }
        body(e) {
          let t = e.nodes.length - 1;
          for (; t > 0 && e.nodes[t].type === "comment"; )
            t -= 1;
          let i = this.raw(e, "semicolon");
          for (let s = 0; s < e.nodes.length; s++) {
            let n = e.nodes[s], o = this.raw(n, "before");
            o && this.builder(o), this.stringify(n, t !== s || i);
          }
        }
        block(e, t) {
          let i = this.raw(e, "between", "beforeOpen");
          this.builder(t + i + "{", e, "start");
          let s;
          e.nodes && e.nodes.length ? (this.body(e), s = this.raw(e, "after")) : s = this.raw(e, "after", "emptyBody"), s && this.builder(s), this.builder("}", e, "end");
        }
        raw(e, t, i) {
          let s;
          if (i || (i = t), t && (s = e.raws[t], typeof s != "undefined"))
            return s;
          let n = e.parent;
          if (i === "before" && (!n || n.type === "root" && n.first === e || n && n.type === "document"))
            return "";
          if (!n)
            return Yf[i];
          let o = e.root();
          if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[i] != "undefined")
            return o.rawCache[i];
          if (i === "before" || i === "after")
            return this.beforeAfter(e, i);
          {
            let a = "raw" + Yv(i);
            this[a] ? s = this[a](o, e) : o.walk((u) => {
              if (s = u.raws[t], typeof s != "undefined")
                return false;
            });
          }
          return typeof s == "undefined" && (s = Yf[i]), o.rawCache[i] = s, s;
        }
        rawSemicolon(e) {
          let t;
          return e.walk((i) => {
            if (i.nodes && i.nodes.length && i.last.type === "decl" && (t = i.raws.semicolon, typeof t != "undefined"))
              return false;
          }), t;
        }
        rawEmptyBody(e) {
          let t;
          return e.walk((i) => {
            if (i.nodes && i.nodes.length === 0 && (t = i.raws.after, typeof t != "undefined"))
              return false;
          }), t;
        }
        rawIndent(e) {
          if (e.raws.indent)
            return e.raws.indent;
          let t;
          return e.walk((i) => {
            let s = i.parent;
            if (s && s !== e && s.parent && s.parent === e && typeof i.raws.before != "undefined") {
              let n = i.raws.before.split(`
`);
              return t = n[n.length - 1], t = t.replace(/\S/g, ""), false;
            }
          }), t;
        }
        rawBeforeComment(e, t) {
          let i;
          return e.walkComments((s) => {
            if (typeof s.raws.before != "undefined")
              return i = s.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), false;
          }), typeof i == "undefined" ? i = this.raw(t, null, "beforeDecl") : i && (i = i.replace(/\S/g, "")), i;
        }
        rawBeforeDecl(e, t) {
          let i;
          return e.walkDecls((s) => {
            if (typeof s.raws.before != "undefined")
              return i = s.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), false;
          }), typeof i == "undefined" ? i = this.raw(t, null, "beforeRule") : i && (i = i.replace(/\S/g, "")), i;
        }
        rawBeforeRule(e) {
          let t;
          return e.walk((i) => {
            if (i.nodes && (i.parent !== e || e.first !== i) && typeof i.raws.before != "undefined")
              return t = i.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), false;
          }), t && (t = t.replace(/\S/g, "")), t;
        }
        rawBeforeClose(e) {
          let t;
          return e.walk((i) => {
            if (i.nodes && i.nodes.length > 0 && typeof i.raws.after != "undefined")
              return t = i.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), false;
          }), t && (t = t.replace(/\S/g, "")), t;
        }
        rawBeforeOpen(e) {
          let t;
          return e.walk((i) => {
            if (i.type !== "decl" && (t = i.raws.between, typeof t != "undefined"))
              return false;
          }), t;
        }
        rawColon(e) {
          let t;
          return e.walkDecls((i) => {
            if (typeof i.raws.between != "undefined")
              return t = i.raws.between.replace(/[^\s:]/g, ""), false;
          }), t;
        }
        beforeAfter(e, t) {
          let i;
          e.type === "decl" ? i = this.raw(e, null, "beforeDecl") : e.type === "comment" ? i = this.raw(e, null, "beforeComment") : t === "before" ? i = this.raw(e, null, "beforeRule") : i = this.raw(e, null, "beforeClose");
          let s = e.parent, n = 0;
          for (; s && s.type !== "root"; )
            n += 1, s = s.parent;
          if (i.includes(`
`)) {
            let o = this.raw(e, null, "indent");
            if (o.length)
              for (let a = 0; a < n; a++)
                i += o;
          }
          return i;
        }
        rawValue(e, t) {
          let i = e[t], s = e.raws[t];
          return s && s.value === i ? s.raw : i;
        }
      };
      Qf.exports = Di;
      Di.default = Di;
    });
    var Tr = y((FO, Jf) => {
      l();
      "use strict";
      var Qv = Zn();
      function eo(r, e) {
        new Qv(e).stringify(r);
      }
      Jf.exports = eo;
      eo.default = eo;
    });
    var Pr = y((NO, Xf) => {
      l();
      "use strict";
      var { isClean: qi, my: Jv } = Pi(), Xv = Ti(), Kv = Zn(), Zv = Tr();
      function to(r, e) {
        let t = new r.constructor();
        for (let i in r) {
          if (!Object.prototype.hasOwnProperty.call(r, i) || i === "proxyCache")
            continue;
          let s = r[i], n = typeof s;
          i === "parent" && n === "object" ? e && (t[i] = e) : i === "source" ? t[i] = s : Array.isArray(s) ? t[i] = s.map((o) => to(o, t)) : (n === "object" && s !== null && (s = to(s)), t[i] = s);
        }
        return t;
      }
      var Ii = class {
        constructor(e = {}) {
          this.raws = {}, this[qi] = false, this[Jv] = true;
          for (let t in e)
            if (t === "nodes") {
              this.nodes = [];
              for (let i of e[t])
                typeof i.clone == "function" ? this.append(i.clone()) : this.append(i);
            } else
              this[t] = e[t];
        }
        error(e, t = {}) {
          if (this.source) {
            let { start: i, end: s } = this.rangeBy(t);
            return this.source.input.error(e, { line: i.line, column: i.column }, { line: s.line, column: s.column }, t);
          }
          return new Xv(e);
        }
        warn(e, t, i) {
          let s = { node: this };
          for (let n in i)
            s[n] = i[n];
          return e.warn(t, s);
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
        }
        toString(e = Zv) {
          e.stringify && (e = e.stringify);
          let t = "";
          return e(this, (i) => {
            t += i;
          }), t;
        }
        assign(e = {}) {
          for (let t in e)
            this[t] = e[t];
          return this;
        }
        clone(e = {}) {
          let t = to(this);
          for (let i in e)
            t[i] = e[i];
          return t;
        }
        cloneBefore(e = {}) {
          let t = this.clone(e);
          return this.parent.insertBefore(this, t), t;
        }
        cloneAfter(e = {}) {
          let t = this.clone(e);
          return this.parent.insertAfter(this, t), t;
        }
        replaceWith(...e) {
          if (this.parent) {
            let t = this, i = false;
            for (let s of e)
              s === this ? i = true : i ? (this.parent.insertAfter(t, s), t = s) : this.parent.insertBefore(t, s);
            i || this.remove();
          }
          return this;
        }
        next() {
          if (!this.parent)
            return;
          let e = this.parent.index(this);
          return this.parent.nodes[e + 1];
        }
        prev() {
          if (!this.parent)
            return;
          let e = this.parent.index(this);
          return this.parent.nodes[e - 1];
        }
        before(e) {
          return this.parent.insertBefore(this, e), this;
        }
        after(e) {
          return this.parent.insertAfter(this, e), this;
        }
        root() {
          let e = this;
          for (; e.parent && e.parent.type !== "document"; )
            e = e.parent;
          return e;
        }
        raw(e, t) {
          return new Kv().raw(this, e, t);
        }
        cleanRaws(e) {
          delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
        }
        toJSON(e, t) {
          let i = {}, s = t == null;
          t = t || /* @__PURE__ */ new Map();
          let n = 0;
          for (let o in this) {
            if (!Object.prototype.hasOwnProperty.call(this, o) || o === "parent" || o === "proxyCache")
              continue;
            let a = this[o];
            if (Array.isArray(a))
              i[o] = a.map((u) => typeof u == "object" && u.toJSON ? u.toJSON(null, t) : u);
            else if (typeof a == "object" && a.toJSON)
              i[o] = a.toJSON(null, t);
            else if (o === "source") {
              let u = t.get(a.input);
              u == null && (u = n, t.set(a.input, n), n++), i[o] = { inputId: u, start: a.start, end: a.end };
            } else
              i[o] = a;
          }
          return s && (i.inputs = [...t.keys()].map((o) => o.toJSON())), i;
        }
        positionInside(e) {
          let t = this.toString(), i = this.source.start.column, s = this.source.start.line;
          for (let n = 0; n < e; n++)
            t[n] === `
` ? (i = 1, s += 1) : i += 1;
          return { line: s, column: i };
        }
        positionBy(e) {
          let t = this.source.start;
          if (e.index)
            t = this.positionInside(e.index);
          else if (e.word) {
            let i = this.toString().indexOf(e.word);
            i !== -1 && (t = this.positionInside(i));
          }
          return t;
        }
        rangeBy(e) {
          let t = { line: this.source.start.line, column: this.source.start.column }, i = this.source.end ? { line: this.source.end.line, column: this.source.end.column + 1 } : { line: t.line, column: t.column + 1 };
          if (e.word) {
            let s = this.toString().indexOf(e.word);
            s !== -1 && (t = this.positionInside(s), i = this.positionInside(s + e.word.length));
          } else
            e.start ? t = { line: e.start.line, column: e.start.column } : e.index && (t = this.positionInside(e.index)), e.end ? i = { line: e.end.line, column: e.end.column } : e.endIndex ? i = this.positionInside(e.endIndex) : e.index && (i = this.positionInside(e.index + 1));
          return (i.line < t.line || i.line === t.line && i.column <= t.column) && (i = { line: t.line, column: t.column + 1 }), { start: t, end: i };
        }
        getProxyProcessor() {
          return { set(e, t, i) {
            return e[t] === i || (e[t] = i, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || t === "text") && e.markDirty()), true;
          }, get(e, t) {
            return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t];
          } };
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
        }
        addToError(e) {
          if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
            let t = this.source;
            e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`);
          }
          return e;
        }
        markDirty() {
          if (this[qi]) {
            this[qi] = false;
            let e = this;
            for (; e = e.parent; )
              e[qi] = false;
          }
        }
        get proxyOf() {
          return this;
        }
      };
      Xf.exports = Ii;
      Ii.default = Ii;
    });
    var Dr = y((BO, Kf) => {
      l();
      "use strict";
      var e1 = Pr(), Ri = class extends e1 {
        constructor(e) {
          e && typeof e.value != "undefined" && typeof e.value != "string" && (e = { ...e, value: String(e.value) });
          super(e);
          this.type = "decl";
        }
        get variable() {
          return this.prop.startsWith("--") || this.prop[0] === "$";
        }
      };
      Kf.exports = Ri;
      Ri.default = Ri;
    });
    var ro = y((zO, Zf) => {
      l();
      Zf.exports = function(r, e) {
        return { generate: () => {
          let t = "";
          return r(e, (i) => {
            t += i;
          }), [t];
        } };
      };
    });
    var qr = y(($O, ec) => {
      l();
      "use strict";
      var t1 = Pr(), Mi = class extends t1 {
        constructor(e) {
          super(e);
          this.type = "comment";
        }
      };
      ec.exports = Mi;
      Mi.default = Mi;
    });
    var He = y((jO, lc) => {
      l();
      "use strict";
      var { isClean: tc, my: rc } = Pi(), ic = Dr(), sc = qr(), r1 = Pr(), nc, io, so;
      function oc(r) {
        return r.map((e) => (e.nodes && (e.nodes = oc(e.nodes)), delete e.source, e));
      }
      function ac(r) {
        if (r[tc] = false, r.proxyOf.nodes)
          for (let e of r.proxyOf.nodes)
            ac(e);
      }
      var ye = class extends r1 {
        push(e) {
          return e.parent = this, this.proxyOf.nodes.push(e), this;
        }
        each(e) {
          if (!this.proxyOf.nodes)
            return;
          let t = this.getIterator(), i, s;
          for (; this.indexes[t] < this.proxyOf.nodes.length && (i = this.indexes[t], s = e(this.proxyOf.nodes[i], i), s !== false); )
            this.indexes[t] += 1;
          return delete this.indexes[t], s;
        }
        walk(e) {
          return this.each((t, i) => {
            let s;
            try {
              s = e(t, i);
            } catch (n) {
              throw t.addToError(n);
            }
            return s !== false && t.walk && (s = t.walk(e)), s;
          });
        }
        walkDecls(e, t) {
          return t ? e instanceof RegExp ? this.walk((i, s) => {
            if (i.type === "decl" && e.test(i.prop))
              return t(i, s);
          }) : this.walk((i, s) => {
            if (i.type === "decl" && i.prop === e)
              return t(i, s);
          }) : (t = e, this.walk((i, s) => {
            if (i.type === "decl")
              return t(i, s);
          }));
        }
        walkRules(e, t) {
          return t ? e instanceof RegExp ? this.walk((i, s) => {
            if (i.type === "rule" && e.test(i.selector))
              return t(i, s);
          }) : this.walk((i, s) => {
            if (i.type === "rule" && i.selector === e)
              return t(i, s);
          }) : (t = e, this.walk((i, s) => {
            if (i.type === "rule")
              return t(i, s);
          }));
        }
        walkAtRules(e, t) {
          return t ? e instanceof RegExp ? this.walk((i, s) => {
            if (i.type === "atrule" && e.test(i.name))
              return t(i, s);
          }) : this.walk((i, s) => {
            if (i.type === "atrule" && i.name === e)
              return t(i, s);
          }) : (t = e, this.walk((i, s) => {
            if (i.type === "atrule")
              return t(i, s);
          }));
        }
        walkComments(e) {
          return this.walk((t, i) => {
            if (t.type === "comment")
              return e(t, i);
          });
        }
        append(...e) {
          for (let t of e) {
            let i = this.normalize(t, this.last);
            for (let s of i)
              this.proxyOf.nodes.push(s);
          }
          return this.markDirty(), this;
        }
        prepend(...e) {
          e = e.reverse();
          for (let t of e) {
            let i = this.normalize(t, this.first, "prepend").reverse();
            for (let s of i)
              this.proxyOf.nodes.unshift(s);
            for (let s in this.indexes)
              this.indexes[s] = this.indexes[s] + i.length;
          }
          return this.markDirty(), this;
        }
        cleanRaws(e) {
          if (super.cleanRaws(e), this.nodes)
            for (let t of this.nodes)
              t.cleanRaws(e);
        }
        insertBefore(e, t) {
          e = this.index(e);
          let i = e === 0 ? "prepend" : false, s = this.normalize(t, this.proxyOf.nodes[e], i).reverse();
          for (let o of s)
            this.proxyOf.nodes.splice(e, 0, o);
          let n;
          for (let o in this.indexes)
            n = this.indexes[o], e <= n && (this.indexes[o] = n + s.length);
          return this.markDirty(), this;
        }
        insertAfter(e, t) {
          e = this.index(e);
          let i = this.normalize(t, this.proxyOf.nodes[e]).reverse();
          for (let n of i)
            this.proxyOf.nodes.splice(e + 1, 0, n);
          let s;
          for (let n in this.indexes)
            s = this.indexes[n], e < s && (this.indexes[n] = s + i.length);
          return this.markDirty(), this;
        }
        removeChild(e) {
          e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
          let t;
          for (let i in this.indexes)
            t = this.indexes[i], t >= e && (this.indexes[i] = t - 1);
          return this.markDirty(), this;
        }
        removeAll() {
          for (let e of this.proxyOf.nodes)
            e.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this;
        }
        replaceValues(e, t, i) {
          return i || (i = t, t = {}), this.walkDecls((s) => {
            t.props && !t.props.includes(s.prop) || t.fast && !s.value.includes(t.fast) || (s.value = s.value.replace(e, i));
          }), this.markDirty(), this;
        }
        every(e) {
          return this.nodes.every(e);
        }
        some(e) {
          return this.nodes.some(e);
        }
        index(e) {
          return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
        }
        get first() {
          if (!!this.proxyOf.nodes)
            return this.proxyOf.nodes[0];
        }
        get last() {
          if (!!this.proxyOf.nodes)
            return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
        }
        normalize(e, t) {
          if (typeof e == "string")
            e = oc(nc(e).nodes);
          else if (Array.isArray(e)) {
            e = e.slice(0);
            for (let s of e)
              s.parent && s.parent.removeChild(s, "ignore");
          } else if (e.type === "root" && this.type !== "document") {
            e = e.nodes.slice(0);
            for (let s of e)
              s.parent && s.parent.removeChild(s, "ignore");
          } else if (e.type)
            e = [e];
          else if (e.prop) {
            if (typeof e.value == "undefined")
              throw new Error("Value field is missed in node creation");
            typeof e.value != "string" && (e.value = String(e.value)), e = [new ic(e)];
          } else if (e.selector)
            e = [new io(e)];
          else if (e.name)
            e = [new so(e)];
          else if (e.text)
            e = [new sc(e)];
          else
            throw new Error("Unknown node type in node creation");
          return e.map((s) => (s[rc] || ye.rebuild(s), s = s.proxyOf, s.parent && s.parent.removeChild(s), s[tc] && ac(s), typeof s.raws.before == "undefined" && t && typeof t.raws.before != "undefined" && (s.raws.before = t.raws.before.replace(/\S/g, "")), s.parent = this.proxyOf, s));
        }
        getProxyProcessor() {
          return { set(e, t, i) {
            return e[t] === i || (e[t] = i, (t === "name" || t === "params" || t === "selector") && e.markDirty()), true;
          }, get(e, t) {
            return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...i) => e[t](...i.map((s) => typeof s == "function" ? (n, o) => s(n.toProxy(), o) : s)) : t === "every" || t === "some" ? (i) => e[t]((s, ...n) => i(s.toProxy(), ...n)) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map((i) => i.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
          } };
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let e = this.lastEach;
          return this.indexes[e] = 0, e;
        }
      };
      ye.registerParse = (r) => {
        nc = r;
      };
      ye.registerRule = (r) => {
        io = r;
      };
      ye.registerAtRule = (r) => {
        so = r;
      };
      lc.exports = ye;
      ye.default = ye;
      ye.rebuild = (r) => {
        r.type === "atrule" ? Object.setPrototypeOf(r, so.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, io.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, ic.prototype) : r.type === "comment" && Object.setPrototypeOf(r, sc.prototype), r[rc] = true, r.nodes && r.nodes.forEach((e) => {
          ye.rebuild(e);
        });
      };
    });
    var Li = y((UO, cc) => {
      l();
      "use strict";
      var i1 = He(), uc, fc, kt = class extends i1 {
        constructor(e) {
          super({ type: "document", ...e });
          this.nodes || (this.nodes = []);
        }
        toResult(e = {}) {
          return new uc(new fc(), this, e).stringify();
        }
      };
      kt.registerLazyResult = (r) => {
        uc = r;
      };
      kt.registerProcessor = (r) => {
        fc = r;
      };
      cc.exports = kt;
      kt.default = kt;
    });
    var no = y((VO, dc) => {
      l();
      "use strict";
      var pc = {};
      dc.exports = function(e) {
        pc[e] || (pc[e] = true, typeof console != "undefined" && console.warn && console.warn(e));
      };
    });
    var oo = y((WO, hc) => {
      l();
      "use strict";
      var Fi = class {
        constructor(e, t = {}) {
          if (this.type = "warning", this.text = e, t.node && t.node.source) {
            let i = t.node.rangeBy(t);
            this.line = i.start.line, this.column = i.start.column, this.endLine = i.end.line, this.endColumn = i.end.column;
          }
          for (let i in t)
            this[i] = t[i];
        }
        toString() {
          return this.node ? this.node.error(this.text, { plugin: this.plugin, index: this.index, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
        }
      };
      hc.exports = Fi;
      Fi.default = Fi;
    });
    var Bi = y((GO, mc) => {
      l();
      "use strict";
      var s1 = oo(), Ni = class {
        constructor(e, t, i) {
          this.processor = e, this.messages = [], this.root = t, this.opts = i, this.css = void 0, this.map = void 0;
        }
        toString() {
          return this.css;
        }
        warn(e, t = {}) {
          t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
          let i = new s1(e, t);
          return this.messages.push(i), i;
        }
        warnings() {
          return this.messages.filter((e) => e.type === "warning");
        }
        get content() {
          return this.css;
        }
      };
      mc.exports = Ni;
      Ni.default = Ni;
    });
    var xc = y((HO, bc) => {
      l();
      "use strict";
      var ao = "'".charCodeAt(0), gc = '"'.charCodeAt(0), zi = "\\".charCodeAt(0), wc = "/".charCodeAt(0), $i = `
`.charCodeAt(0), Ir = " ".charCodeAt(0), ji = "\f".charCodeAt(0), Ui = "	".charCodeAt(0), Vi = "\r".charCodeAt(0), n1 = "[".charCodeAt(0), o1 = "]".charCodeAt(0), a1 = "(".charCodeAt(0), l1 = ")".charCodeAt(0), u1 = "{".charCodeAt(0), f1 = "}".charCodeAt(0), c1 = ";".charCodeAt(0), p1 = "*".charCodeAt(0), d1 = ":".charCodeAt(0), h1 = "@".charCodeAt(0), Wi = /[\t\n\f\r "#'()/;[\\\]{}]/g, Gi = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, m1 = /.[\n"'(/\\]/, yc = /[\da-f]/i;
      bc.exports = function(e, t = {}) {
        let i = e.css.valueOf(), s = t.ignoreErrors, n, o, a, u, f, c, d, p, h, w, v = i.length, b = 0, x = [], k = [];
        function T() {
          return b;
        }
        function P(R) {
          throw e.error("Unclosed " + R, b);
        }
        function I() {
          return k.length === 0 && b >= v;
        }
        function V(R) {
          if (k.length)
            return k.pop();
          if (b >= v)
            return;
          let Q = R ? R.ignoreUnclosed : false;
          switch (n = i.charCodeAt(b), n) {
            case $i:
            case Ir:
            case Ui:
            case Vi:
            case ji: {
              o = b;
              do
                o += 1, n = i.charCodeAt(o);
              while (n === Ir || n === $i || n === Ui || n === Vi || n === ji);
              w = ["space", i.slice(b, o)], b = o - 1;
              break;
            }
            case n1:
            case o1:
            case u1:
            case f1:
            case d1:
            case c1:
            case l1: {
              let rt = String.fromCharCode(n);
              w = [rt, rt, b];
              break;
            }
            case a1: {
              if (p = x.length ? x.pop()[1] : "", h = i.charCodeAt(b + 1), p === "url" && h !== ao && h !== gc && h !== Ir && h !== $i && h !== Ui && h !== ji && h !== Vi) {
                o = b;
                do {
                  if (c = false, o = i.indexOf(")", o + 1), o === -1)
                    if (s || Q) {
                      o = b;
                      break;
                    } else
                      P("bracket");
                  for (d = o; i.charCodeAt(d - 1) === zi; )
                    d -= 1, c = !c;
                } while (c);
                w = ["brackets", i.slice(b, o + 1), b, o], b = o;
              } else
                o = i.indexOf(")", b + 1), u = i.slice(b, o + 1), o === -1 || m1.test(u) ? w = ["(", "(", b] : (w = ["brackets", u, b, o], b = o);
              break;
            }
            case ao:
            case gc: {
              a = n === ao ? "'" : '"', o = b;
              do {
                if (c = false, o = i.indexOf(a, o + 1), o === -1)
                  if (s || Q) {
                    o = b + 1;
                    break;
                  } else
                    P("string");
                for (d = o; i.charCodeAt(d - 1) === zi; )
                  d -= 1, c = !c;
              } while (c);
              w = ["string", i.slice(b, o + 1), b, o], b = o;
              break;
            }
            case h1: {
              Wi.lastIndex = b + 1, Wi.test(i), Wi.lastIndex === 0 ? o = i.length - 1 : o = Wi.lastIndex - 2, w = ["at-word", i.slice(b, o + 1), b, o], b = o;
              break;
            }
            case zi: {
              for (o = b, f = true; i.charCodeAt(o + 1) === zi; )
                o += 1, f = !f;
              if (n = i.charCodeAt(o + 1), f && n !== wc && n !== Ir && n !== $i && n !== Ui && n !== Vi && n !== ji && (o += 1, yc.test(i.charAt(o)))) {
                for (; yc.test(i.charAt(o + 1)); )
                  o += 1;
                i.charCodeAt(o + 1) === Ir && (o += 1);
              }
              w = ["word", i.slice(b, o + 1), b, o], b = o;
              break;
            }
            default: {
              n === wc && i.charCodeAt(b + 1) === p1 ? (o = i.indexOf("*/", b + 2) + 1, o === 0 && (s || Q ? o = i.length : P("comment")), w = ["comment", i.slice(b, o + 1), b, o], b = o) : (Gi.lastIndex = b + 1, Gi.test(i), Gi.lastIndex === 0 ? o = i.length - 1 : o = Gi.lastIndex - 2, w = ["word", i.slice(b, o + 1), b, o], x.push(w), b = o);
              break;
            }
          }
          return b++, w;
        }
        function L(R) {
          k.push(R);
        }
        return { back: L, nextToken: V, endOfFile: I, position: T };
      };
    });
    var Hi = y((YO, kc) => {
      l();
      "use strict";
      var vc = He(), Rr = class extends vc {
        constructor(e) {
          super(e);
          this.type = "atrule";
        }
        append(...e) {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
        }
        prepend(...e) {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
        }
      };
      kc.exports = Rr;
      Rr.default = Rr;
      vc.registerAtRule(Rr);
    });
    var Ct = y((QO, _c) => {
      l();
      "use strict";
      var g1 = He(), Sc, Cc, St = class extends g1 {
        constructor(e) {
          super(e);
          this.type = "root", this.nodes || (this.nodes = []);
        }
        removeChild(e, t) {
          let i = this.index(e);
          return !t && i === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[i].raws.before), super.removeChild(e);
        }
        normalize(e, t, i) {
          let s = super.normalize(e);
          if (t) {
            if (i === "prepend")
              this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
            else if (this.first !== t)
              for (let n of s)
                n.raws.before = t.raws.before;
          }
          return s;
        }
        toResult(e = {}) {
          return new Sc(new Cc(), this, e).stringify();
        }
      };
      St.registerLazyResult = (r) => {
        Sc = r;
      };
      St.registerProcessor = (r) => {
        Cc = r;
      };
      _c.exports = St;
      St.default = St;
    });
    var lo = y((JO, Ac) => {
      l();
      "use strict";
      var Mr = { split(r, e, t) {
        let i = [], s = "", n = false, o = 0, a = false, u = false;
        for (let f of r)
          u ? u = false : f === "\\" ? u = true : a ? f === a && (a = false) : f === '"' || f === "'" ? a = f : f === "(" ? o += 1 : f === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(f) && (n = true), n ? (s !== "" && i.push(s.trim()), s = "", n = false) : s += f;
        return (t || s !== "") && i.push(s.trim()), i;
      }, space(r) {
        let e = [" ", `
`, "	"];
        return Mr.split(r, e);
      }, comma(r) {
        return Mr.split(r, [","], true);
      } };
      Ac.exports = Mr;
      Mr.default = Mr;
    });
    var Yi = y((XO, Oc) => {
      l();
      "use strict";
      var Ec = He(), w1 = lo(), Lr = class extends Ec {
        constructor(e) {
          super(e);
          this.type = "rule", this.nodes || (this.nodes = []);
        }
        get selectors() {
          return w1.comma(this.selector);
        }
        set selectors(e) {
          let t = this.selector ? this.selector.match(/,\s*/) : null, i = t ? t[0] : "," + this.raw("between", "beforeOpen");
          this.selector = e.join(i);
        }
      };
      Oc.exports = Lr;
      Lr.default = Lr;
      Ec.registerRule(Lr);
    });
    var Ic = y((KO, qc) => {
      l();
      "use strict";
      var y1 = Dr(), b1 = xc(), x1 = qr(), v1 = Hi(), k1 = Ct(), Tc = Yi(), Pc = { empty: true, space: true };
      function S1(r) {
        for (let e = r.length - 1; e >= 0; e--) {
          let t = r[e], i = t[3] || t[2];
          if (i)
            return i;
        }
      }
      var Dc = class {
        constructor(e) {
          this.input = e, this.root = new k1(), this.current = this.root, this.spaces = "", this.semicolon = false, this.customProperty = false, this.createTokenizer(), this.root.source = { input: e, start: { offset: 0, line: 1, column: 1 } };
        }
        createTokenizer() {
          this.tokenizer = b1(this.input);
        }
        parse() {
          let e;
          for (; !this.tokenizer.endOfFile(); )
            switch (e = this.tokenizer.nextToken(), e[0]) {
              case "space":
                this.spaces += e[1];
                break;
              case ";":
                this.freeSemicolon(e);
                break;
              case "}":
                this.end(e);
                break;
              case "comment":
                this.comment(e);
                break;
              case "at-word":
                this.atrule(e);
                break;
              case "{":
                this.emptyRule(e);
                break;
              default:
                this.other(e);
                break;
            }
          this.endFile();
        }
        comment(e) {
          let t = new x1();
          this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]);
          let i = e[1].slice(2, -2);
          if (/^\s*$/.test(i))
            t.text = "", t.raws.left = i, t.raws.right = "";
          else {
            let s = i.match(/^(\s*)([^]*\S)(\s*)$/);
            t.text = s[2], t.raws.left = s[1], t.raws.right = s[3];
          }
        }
        emptyRule(e) {
          let t = new Tc();
          this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t;
        }
        other(e) {
          let t = false, i = null, s = false, n = null, o = [], a = e[1].startsWith("--"), u = [], f = e;
          for (; f; ) {
            if (i = f[0], u.push(f), i === "(" || i === "[")
              n || (n = f), o.push(i === "(" ? ")" : "]");
            else if (a && s && i === "{")
              n || (n = f), o.push("}");
            else if (o.length === 0)
              if (i === ";")
                if (s) {
                  this.decl(u, a);
                  return;
                } else
                  break;
              else if (i === "{") {
                this.rule(u);
                return;
              } else if (i === "}") {
                this.tokenizer.back(u.pop()), t = true;
                break;
              } else
                i === ":" && (s = true);
            else
              i === o[o.length - 1] && (o.pop(), o.length === 0 && (n = null));
            f = this.tokenizer.nextToken();
          }
          if (this.tokenizer.endOfFile() && (t = true), o.length > 0 && this.unclosedBracket(n), t && s) {
            if (!a)
              for (; u.length && (f = u[u.length - 1][0], !(f !== "space" && f !== "comment")); )
                this.tokenizer.back(u.pop());
            this.decl(u, a);
          } else
            this.unknownWord(u);
        }
        rule(e) {
          e.pop();
          let t = new Tc();
          this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
        }
        decl(e, t) {
          let i = new y1();
          this.init(i, e[0][2]);
          let s = e[e.length - 1];
          for (s[0] === ";" && (this.semicolon = true, e.pop()), i.source.end = this.getPosition(s[3] || s[2] || S1(e)); e[0][0] !== "word"; )
            e.length === 1 && this.unknownWord(e), i.raws.before += e.shift()[1];
          for (i.source.start = this.getPosition(e[0][2]), i.prop = ""; e.length; ) {
            let f = e[0][0];
            if (f === ":" || f === "space" || f === "comment")
              break;
            i.prop += e.shift()[1];
          }
          i.raws.between = "";
          let n;
          for (; e.length; )
            if (n = e.shift(), n[0] === ":") {
              i.raws.between += n[1];
              break;
            } else
              n[0] === "word" && /\w/.test(n[1]) && this.unknownWord([n]), i.raws.between += n[1];
          (i.prop[0] === "_" || i.prop[0] === "*") && (i.raws.before += i.prop[0], i.prop = i.prop.slice(1));
          let o = [], a;
          for (; e.length && (a = e[0][0], !(a !== "space" && a !== "comment")); )
            o.push(e.shift());
          this.precheckMissedSemicolon(e);
          for (let f = e.length - 1; f >= 0; f--) {
            if (n = e[f], n[1].toLowerCase() === "!important") {
              i.important = true;
              let c = this.stringFrom(e, f);
              c = this.spacesFromEnd(e) + c, c !== " !important" && (i.raws.important = c);
              break;
            } else if (n[1].toLowerCase() === "important") {
              let c = e.slice(0), d = "";
              for (let p = f; p > 0; p--) {
                let h = c[p][0];
                if (d.trim().indexOf("!") === 0 && h !== "space")
                  break;
                d = c.pop()[1] + d;
              }
              d.trim().indexOf("!") === 0 && (i.important = true, i.raws.important = d, e = c);
            }
            if (n[0] !== "space" && n[0] !== "comment")
              break;
          }
          e.some((f) => f[0] !== "space" && f[0] !== "comment") && (i.raws.between += o.map((f) => f[1]).join(""), o = []), this.raw(i, "value", o.concat(e), t), i.value.includes(":") && !t && this.checkMissedSemicolon(e);
        }
        atrule(e) {
          let t = new v1();
          t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
          let i, s, n, o = false, a = false, u = [], f = [];
          for (; !this.tokenizer.endOfFile(); ) {
            if (e = this.tokenizer.nextToken(), i = e[0], i === "(" || i === "[" ? f.push(i === "(" ? ")" : "]") : i === "{" && f.length > 0 ? f.push("}") : i === f[f.length - 1] && f.pop(), f.length === 0)
              if (i === ";") {
                t.source.end = this.getPosition(e[2]), this.semicolon = true;
                break;
              } else if (i === "{") {
                a = true;
                break;
              } else if (i === "}") {
                if (u.length > 0) {
                  for (n = u.length - 1, s = u[n]; s && s[0] === "space"; )
                    s = u[--n];
                  s && (t.source.end = this.getPosition(s[3] || s[2]));
                }
                this.end(e);
                break;
              } else
                u.push(e);
            else
              u.push(e);
            if (this.tokenizer.endOfFile()) {
              o = true;
              break;
            }
          }
          t.raws.between = this.spacesAndCommentsFromEnd(u), u.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(u), this.raw(t, "params", u), o && (e = u[u.length - 1], t.source.end = this.getPosition(e[3] || e[2]), this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), a && (t.nodes = [], this.current = t);
        }
        end(e) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current = this.current.parent) : this.unexpectedClose(e);
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        }
        freeSemicolon(e) {
          if (this.spaces += e[1], this.current.nodes) {
            let t = this.current.nodes[this.current.nodes.length - 1];
            t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "");
          }
        }
        getPosition(e) {
          let t = this.input.fromOffset(e);
          return { offset: e, line: t.line, column: t.col };
        }
        init(e, t) {
          this.current.push(e), e.source = { start: this.getPosition(t), input: this.input }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = false);
        }
        raw(e, t, i, s) {
          let n, o, a = i.length, u = "", f = true, c, d;
          for (let p = 0; p < a; p += 1)
            n = i[p], o = n[0], o === "space" && p === a - 1 && !s ? f = false : o === "comment" ? (d = i[p - 1] ? i[p - 1][0] : "empty", c = i[p + 1] ? i[p + 1][0] : "empty", !Pc[d] && !Pc[c] ? u.slice(-1) === "," ? f = false : u += n[1] : f = false) : u += n[1];
          if (!f) {
            let p = i.reduce((h, w) => h + w[1], "");
            e.raws[t] = { value: u, raw: p };
          }
          e[t] = u;
        }
        spacesAndCommentsFromEnd(e) {
          let t, i = "";
          for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment")); )
            i = e.pop()[1] + i;
          return i;
        }
        spacesAndCommentsFromStart(e) {
          let t, i = "";
          for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment")); )
            i += e.shift()[1];
          return i;
        }
        spacesFromEnd(e) {
          let t, i = "";
          for (; e.length && (t = e[e.length - 1][0], t === "space"); )
            i = e.pop()[1] + i;
          return i;
        }
        stringFrom(e, t) {
          let i = "";
          for (let s = t; s < e.length; s++)
            i += e[s][1];
          return e.splice(t, e.length - t), i;
        }
        colon(e) {
          let t = 0, i, s, n;
          for (let [o, a] of e.entries()) {
            if (i = a, s = i[0], s === "(" && (t += 1), s === ")" && (t -= 1), t === 0 && s === ":")
              if (!n)
                this.doubleColon(i);
              else {
                if (n[0] === "word" && n[1] === "progid")
                  continue;
                return o;
              }
            n = i;
          }
          return false;
        }
        unclosedBracket(e) {
          throw this.input.error("Unclosed bracket", { offset: e[2] }, { offset: e[2] + 1 });
        }
        unknownWord(e) {
          throw this.input.error("Unknown word", { offset: e[0][2] }, { offset: e[0][2] + e[0][1].length });
        }
        unexpectedClose(e) {
          throw this.input.error("Unexpected }", { offset: e[2] }, { offset: e[2] + 1 });
        }
        unclosedBlock() {
          let e = this.current.source.start;
          throw this.input.error("Unclosed block", e.line, e.column);
        }
        doubleColon(e) {
          throw this.input.error("Double colon", { offset: e[2] }, { offset: e[2] + e[1].length });
        }
        unnamedAtrule(e, t) {
          throw this.input.error("At-rule without name", { offset: t[2] }, { offset: t[2] + t[1].length });
        }
        precheckMissedSemicolon() {
        }
        checkMissedSemicolon(e) {
          let t = this.colon(e);
          if (t === false)
            return;
          let i = 0, s;
          for (let n = t - 1; n >= 0 && (s = e[n], !(s[0] !== "space" && (i += 1, i === 2))); n--)
            ;
          throw this.input.error("Missed semicolon", s[0] === "word" ? s[3] + 1 : s[2]);
        }
      };
      qc.exports = Dc;
    });
    var Rc = y(() => {
      l();
    });
    var Lc = y((t5, Mc) => {
      l();
      var C1 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", _1 = (r, e = 21) => (t = e) => {
        let i = "", s = t;
        for (; s--; )
          i += r[Math.random() * r.length | 0];
        return i;
      }, A1 = (r = 21) => {
        let e = "", t = r;
        for (; t--; )
          e += C1[Math.random() * 64 | 0];
        return e;
      };
      Mc.exports = { nanoid: A1, customAlphabet: _1 };
    });
    var uo = y((r5, Fc) => {
      l();
      Fc.exports = {};
    });
    var Ji = y((i5, $c) => {
      l();
      "use strict";
      var { SourceMapConsumer: E1, SourceMapGenerator: O1 } = Rc(), { fileURLToPath: Nc, pathToFileURL: Qi } = (Jn(), Vf), { resolve: fo, isAbsolute: co } = (it(), Tl), { nanoid: T1 } = Lc(), po = Xn(), Bc = Ti(), P1 = uo(), ho = Symbol("fromOffsetCache"), D1 = Boolean(E1 && O1), zc = Boolean(fo && co), Fr = class {
        constructor(e, t = {}) {
          if (e === null || typeof e == "undefined" || typeof e == "object" && !e.toString)
            throw new Error(`PostCSS received ${e} instead of CSS string`);
          if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE" ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, t.from && (!zc || /^\w+:\/\//.test(t.from) || co(t.from) ? this.file = t.from : this.file = fo(t.from)), zc && D1) {
            let i = new P1(this.css, t);
            if (i.text) {
              this.map = i;
              let s = i.consumer().file;
              !this.file && s && (this.file = this.mapResolve(s));
            }
          }
          this.file || (this.id = "<input css " + T1(6) + ">"), this.map && (this.map.file = this.from);
        }
        fromOffset(e) {
          let t, i;
          if (this[ho])
            i = this[ho];
          else {
            let n = this.css.split(`
`);
            i = new Array(n.length);
            let o = 0;
            for (let a = 0, u = n.length; a < u; a++)
              i[a] = o, o += n[a].length + 1;
            this[ho] = i;
          }
          t = i[i.length - 1];
          let s = 0;
          if (e >= t)
            s = i.length - 1;
          else {
            let n = i.length - 2, o;
            for (; s < n; )
              if (o = s + (n - s >> 1), e < i[o])
                n = o - 1;
              else if (e >= i[o + 1])
                s = o + 1;
              else {
                s = o;
                break;
              }
          }
          return { line: s + 1, col: e - i[s] + 1 };
        }
        error(e, t, i, s = {}) {
          let n, o, a;
          if (t && typeof t == "object") {
            let f = t, c = i;
            if (typeof t.offset == "number") {
              let d = this.fromOffset(f.offset);
              t = d.line, i = d.col;
            } else
              t = f.line, i = f.column;
            if (typeof c.offset == "number") {
              let d = this.fromOffset(c.offset);
              o = d.line, a = d.col;
            } else
              o = c.line, a = c.column;
          } else if (!i) {
            let f = this.fromOffset(t);
            t = f.line, i = f.col;
          }
          let u = this.origin(t, i, o, a);
          return u ? n = new Bc(e, u.endLine === void 0 ? u.line : { line: u.line, column: u.column }, u.endLine === void 0 ? u.column : { line: u.endLine, column: u.endColumn }, u.source, u.file, s.plugin) : n = new Bc(e, o === void 0 ? t : { line: t, column: i }, o === void 0 ? i : { line: o, column: a }, this.css, this.file, s.plugin), n.input = { line: t, column: i, endLine: o, endColumn: a, source: this.css }, this.file && (Qi && (n.input.url = Qi(this.file).toString()), n.input.file = this.file), n;
        }
        origin(e, t, i, s) {
          if (!this.map)
            return false;
          let n = this.map.consumer(), o = n.originalPositionFor({ line: e, column: t });
          if (!o.source)
            return false;
          let a;
          typeof i == "number" && (a = n.originalPositionFor({ line: i, column: s }));
          let u;
          co(o.source) ? u = Qi(o.source) : u = new URL(o.source, this.map.consumer().sourceRoot || Qi(this.map.mapFile));
          let f = { url: u.toString(), line: o.line, column: o.column, endLine: a && a.line, endColumn: a && a.column };
          if (u.protocol === "file:")
            if (Nc)
              f.file = Nc(u);
            else
              throw new Error("file: protocol is not available in this PostCSS build");
          let c = n.sourceContentFor(o.source);
          return c && (f.source = c), f;
        }
        mapResolve(e) {
          return /^\w+:\/\//.test(e) ? e : fo(this.map.consumer().sourceRoot || this.map.root || ".", e);
        }
        get from() {
          return this.file || this.id;
        }
        toJSON() {
          let e = {};
          for (let t of ["hasBOM", "css", "file", "id"])
            this[t] != null && (e[t] = this[t]);
          return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
        }
      };
      $c.exports = Fr;
      Fr.default = Fr;
      po && po.registerInput && po.registerInput(Fr);
    });
    var Ki = y((s5, jc) => {
      l();
      "use strict";
      var q1 = He(), I1 = Ic(), R1 = Ji();
      function Xi(r, e) {
        let t = new R1(r, e), i = new I1(t);
        try {
          i.parse();
        } catch (s) {
          throw s;
        }
        return i.root;
      }
      jc.exports = Xi;
      Xi.default = Xi;
      q1.registerParse(Xi);
    });
    var wo = y((o5, Gc) => {
      l();
      "use strict";
      var { isClean: Ae, my: M1 } = Pi(), L1 = ro(), F1 = Tr(), N1 = He(), B1 = Li(), n5 = no(), Uc = Bi(), z1 = Ki(), $1 = Ct(), j1 = { document: "Document", root: "Root", atrule: "AtRule", rule: "Rule", decl: "Declaration", comment: "Comment" }, U1 = { postcssPlugin: true, prepare: true, Once: true, Document: true, Root: true, Declaration: true, Rule: true, AtRule: true, Comment: true, DeclarationExit: true, RuleExit: true, AtRuleExit: true, CommentExit: true, RootExit: true, DocumentExit: true, OnceExit: true }, V1 = { postcssPlugin: true, prepare: true, Once: true }, _t = 0;
      function Nr(r) {
        return typeof r == "object" && typeof r.then == "function";
      }
      function Vc(r) {
        let e = false, t = j1[r.type];
        return r.type === "decl" ? e = r.prop.toLowerCase() : r.type === "atrule" && (e = r.name.toLowerCase()), e && r.append ? [t, t + "-" + e, _t, t + "Exit", t + "Exit-" + e] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : r.append ? [t, _t, t + "Exit"] : [t, t + "Exit"];
      }
      function Wc(r) {
        let e;
        return r.type === "document" ? e = ["Document", _t, "DocumentExit"] : r.type === "root" ? e = ["Root", _t, "RootExit"] : e = Vc(r), { node: r, events: e, eventIndex: 0, visitors: [], visitorIndex: 0, iterator: 0 };
      }
      function mo(r) {
        return r[Ae] = false, r.nodes && r.nodes.forEach((e) => mo(e)), r;
      }
      var go = {}, Me = class {
        constructor(e, t, i) {
          this.stringified = false, this.processed = false;
          let s;
          if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
            s = mo(t);
          else if (t instanceof Me || t instanceof Uc)
            s = mo(t.root), t.map && (typeof i.map == "undefined" && (i.map = {}), i.map.inline || (i.map.inline = false), i.map.prev = t.map);
          else {
            let n = z1;
            i.syntax && (n = i.syntax.parse), i.parser && (n = i.parser), n.parse && (n = n.parse);
            try {
              s = n(t, i);
            } catch (o) {
              this.processed = true, this.error = o;
            }
            s && !s[M1] && N1.rebuild(s);
          }
          this.result = new Uc(e, s, i), this.helpers = { ...go, result: this.result, postcss: go }, this.plugins = this.processor.plugins.map((n) => typeof n == "object" && n.prepare ? { ...n, ...n.prepare(this.result) } : n);
        }
        get [Symbol.toStringTag]() {
          return "LazyResult";
        }
        get processor() {
          return this.result.processor;
        }
        get opts() {
          return this.result.opts;
        }
        get css() {
          return this.stringify().css;
        }
        get content() {
          return this.stringify().content;
        }
        get map() {
          return this.stringify().map;
        }
        get root() {
          return this.sync().root;
        }
        get messages() {
          return this.sync().messages;
        }
        warnings() {
          return this.sync().warnings();
        }
        toString() {
          return this.css;
        }
        then(e, t) {
          return this.async().then(e, t);
        }
        catch(e) {
          return this.async().catch(e);
        }
        finally(e) {
          return this.async().then(e, e);
        }
        async() {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
        }
        sync() {
          if (this.error)
            throw this.error;
          if (this.processed)
            return this.result;
          if (this.processed = true, this.processing)
            throw this.getAsyncError();
          for (let e of this.plugins) {
            let t = this.runOnRoot(e);
            if (Nr(t))
              throw this.getAsyncError();
          }
          if (this.prepareVisitors(), this.hasListener) {
            let e = this.result.root;
            for (; !e[Ae]; )
              e[Ae] = true, this.walkSync(e);
            if (this.listeners.OnceExit)
              if (e.type === "document")
                for (let t of e.nodes)
                  this.visitSync(this.listeners.OnceExit, t);
              else
                this.visitSync(this.listeners.OnceExit, e);
          }
          return this.result;
        }
        stringify() {
          if (this.error)
            throw this.error;
          if (this.stringified)
            return this.result;
          this.stringified = true, this.sync();
          let e = this.result.opts, t = F1;
          e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
          let s = new L1(t, this.result.root, this.result.opts).generate();
          return this.result.css = s[0], this.result.map = s[1], this.result;
        }
        walkSync(e) {
          e[Ae] = true;
          let t = Vc(e);
          for (let i of t)
            if (i === _t)
              e.nodes && e.each((s) => {
                s[Ae] || this.walkSync(s);
              });
            else {
              let s = this.listeners[i];
              if (s && this.visitSync(s, e.toProxy()))
                return;
            }
        }
        visitSync(e, t) {
          for (let [i, s] of e) {
            this.result.lastPlugin = i;
            let n;
            try {
              n = s(t, this.helpers);
            } catch (o) {
              throw this.handleError(o, t.proxyOf);
            }
            if (t.type !== "root" && t.type !== "document" && !t.parent)
              return true;
            if (Nr(n))
              throw this.getAsyncError();
          }
        }
        runOnRoot(e) {
          this.result.lastPlugin = e;
          try {
            if (typeof e == "object" && e.Once) {
              if (this.result.root.type === "document") {
                let t = this.result.root.nodes.map((i) => e.Once(i, this.helpers));
                return Nr(t[0]) ? Promise.all(t) : t;
              }
              return e.Once(this.result.root, this.helpers);
            } else if (typeof e == "function")
              return e(this.result.root, this.result);
          } catch (t) {
            throw this.handleError(t);
          }
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins");
        }
        handleError(e, t) {
          let i = this.result.lastPlugin;
          try {
            t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin ? (e.plugin = i.postcssPlugin, e.setMessage()) : i.postcssVersion;
          } catch (s) {
            console && console.error && console.error(s);
          }
          return e;
        }
        async runAsync() {
          this.plugin = 0;
          for (let e = 0; e < this.plugins.length; e++) {
            let t = this.plugins[e], i = this.runOnRoot(t);
            if (Nr(i))
              try {
                await i;
              } catch (s) {
                throw this.handleError(s);
              }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let e = this.result.root;
            for (; !e[Ae]; ) {
              e[Ae] = true;
              let t = [Wc(e)];
              for (; t.length > 0; ) {
                let i = this.visitTick(t);
                if (Nr(i))
                  try {
                    await i;
                  } catch (s) {
                    let n = t[t.length - 1].node;
                    throw this.handleError(s, n);
                  }
              }
            }
            if (this.listeners.OnceExit)
              for (let [t, i] of this.listeners.OnceExit) {
                this.result.lastPlugin = t;
                try {
                  if (e.type === "document") {
                    let s = e.nodes.map((n) => i(n, this.helpers));
                    await Promise.all(s);
                  } else
                    await i(e, this.helpers);
                } catch (s) {
                  throw this.handleError(s);
                }
              }
          }
          return this.processed = true, this.stringify();
        }
        prepareVisitors() {
          this.listeners = {};
          let e = (t, i, s) => {
            this.listeners[i] || (this.listeners[i] = []), this.listeners[i].push([t, s]);
          };
          for (let t of this.plugins)
            if (typeof t == "object")
              for (let i in t) {
                if (!U1[i] && /^[A-Z]/.test(i))
                  throw new Error(`Unknown event ${i} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!V1[i])
                  if (typeof t[i] == "object")
                    for (let s in t[i])
                      s === "*" ? e(t, i, t[i][s]) : e(t, i + "-" + s.toLowerCase(), t[i][s]);
                  else
                    typeof t[i] == "function" && e(t, i, t[i]);
              }
          this.hasListener = Object.keys(this.listeners).length > 0;
        }
        visitTick(e) {
          let t = e[e.length - 1], { node: i, visitors: s } = t;
          if (i.type !== "root" && i.type !== "document" && !i.parent) {
            e.pop();
            return;
          }
          if (s.length > 0 && t.visitorIndex < s.length) {
            let [o, a] = s[t.visitorIndex];
            t.visitorIndex += 1, t.visitorIndex === s.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = o;
            try {
              return a(i.toProxy(), this.helpers);
            } catch (u) {
              throw this.handleError(u, i);
            }
          }
          if (t.iterator !== 0) {
            let o = t.iterator, a;
            for (; a = i.nodes[i.indexes[o]]; )
              if (i.indexes[o] += 1, !a[Ae]) {
                a[Ae] = true, e.push(Wc(a));
                return;
              }
            t.iterator = 0, delete i.indexes[o];
          }
          let n = t.events;
          for (; t.eventIndex < n.length; ) {
            let o = n[t.eventIndex];
            if (t.eventIndex += 1, o === _t) {
              i.nodes && i.nodes.length && (i[Ae] = true, t.iterator = i.getIterator());
              return;
            } else if (this.listeners[o]) {
              t.visitors = this.listeners[o];
              return;
            }
          }
          e.pop();
        }
      };
      Me.registerPostcss = (r) => {
        go = r;
      };
      Gc.exports = Me;
      Me.default = Me;
      $1.registerLazyResult(Me);
      B1.registerLazyResult(Me);
    });
    var Yc = y((l5, Hc) => {
      l();
      "use strict";
      var W1 = ro(), G1 = Tr(), a5 = no(), H1 = Ki(), Y1 = Bi(), Zi = class {
        constructor(e, t, i) {
          t = t.toString(), this.stringified = false, this._processor = e, this._css = t, this._opts = i, this._map = void 0;
          let s, n = G1;
          this.result = new Y1(this._processor, s, this._opts), this.result.css = t;
          let o = this;
          Object.defineProperty(this.result, "root", { get() {
            return o.root;
          } });
          let a = new W1(n, s, this._opts, t);
          if (a.isMap()) {
            let [u, f] = a.generate();
            u && (this.result.css = u), f && (this.result.map = f);
          }
        }
        get [Symbol.toStringTag]() {
          return "NoWorkResult";
        }
        get processor() {
          return this.result.processor;
        }
        get opts() {
          return this.result.opts;
        }
        get css() {
          return this.result.css;
        }
        get content() {
          return this.result.css;
        }
        get map() {
          return this.result.map;
        }
        get root() {
          if (this._root)
            return this._root;
          let e, t = H1;
          try {
            e = t(this._css, this._opts);
          } catch (i) {
            this.error = i;
          }
          if (this.error)
            throw this.error;
          return this._root = e, e;
        }
        get messages() {
          return [];
        }
        warnings() {
          return [];
        }
        toString() {
          return this._css;
        }
        then(e, t) {
          return this.async().then(e, t);
        }
        catch(e) {
          return this.async().catch(e);
        }
        finally(e) {
          return this.async().then(e, e);
        }
        async() {
          return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
        }
        sync() {
          if (this.error)
            throw this.error;
          return this.result;
        }
      };
      Hc.exports = Zi;
      Zi.default = Zi;
    });
    var Jc = y((u5, Qc) => {
      l();
      "use strict";
      var Q1 = Yc(), J1 = wo(), X1 = Li(), K1 = Ct(), At = class {
        constructor(e = []) {
          this.version = "8.4.14", this.plugins = this.normalize(e);
        }
        use(e) {
          return this.plugins = this.plugins.concat(this.normalize([e])), this;
        }
        process(e, t = {}) {
          return this.plugins.length === 0 && typeof t.parser == "undefined" && typeof t.stringifier == "undefined" && typeof t.syntax == "undefined" ? new Q1(this, e, t) : new J1(this, e, t);
        }
        normalize(e) {
          let t = [];
          for (let i of e)
            if (i.postcss === true ? i = i() : i.postcss && (i = i.postcss), typeof i == "object" && Array.isArray(i.plugins))
              t = t.concat(i.plugins);
            else if (typeof i == "object" && i.postcssPlugin)
              t.push(i);
            else if (typeof i == "function")
              t.push(i);
            else if (!(typeof i == "object" && (i.parse || i.stringify)))
              throw new Error(i + " is not a PostCSS plugin");
          return t;
        }
      };
      Qc.exports = At;
      At.default = At;
      K1.registerProcessor(At);
      X1.registerProcessor(At);
    });
    var Kc = y((f5, Xc) => {
      l();
      "use strict";
      var Z1 = Dr(), ek = uo(), tk = qr(), rk = Hi(), ik = Ji(), sk = Ct(), nk = Yi();
      function Br(r, e) {
        if (Array.isArray(r))
          return r.map((s) => Br(s));
        let { inputs: t, ...i } = r;
        if (t) {
          e = [];
          for (let s of t) {
            let n = { ...s, __proto__: ik.prototype };
            n.map && (n.map = { ...n.map, __proto__: ek.prototype }), e.push(n);
          }
        }
        if (i.nodes && (i.nodes = r.nodes.map((s) => Br(s, e))), i.source) {
          let { inputId: s, ...n } = i.source;
          i.source = n, s != null && (i.source.input = e[s]);
        }
        if (i.type === "root")
          return new sk(i);
        if (i.type === "decl")
          return new Z1(i);
        if (i.type === "rule")
          return new nk(i);
        if (i.type === "comment")
          return new tk(i);
        if (i.type === "atrule")
          return new rk(i);
        throw new Error("Unknown node type: " + r.type);
      }
      Xc.exports = Br;
      Br.default = Br;
    });
    var ue = y((c5, np) => {
      l();
      "use strict";
      var ok = Ti(), Zc = Dr(), ak = wo(), lk = He(), yo = Jc(), uk = Tr(), fk = Kc(), ep = Li(), ck = oo(), tp = qr(), rp = Hi(), pk = Bi(), dk = Ji(), hk = Ki(), mk = lo(), ip = Yi(), sp = Ct(), gk = Pr();
      function N(...r) {
        return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new yo(r);
      }
      N.plugin = function(e, t) {
        let i = false;
        function s(...o) {
          console && console.warn && !i && (i = true, console.warn(e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), m.env.LANG && m.env.LANG.startsWith("cn") && console.warn(e + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
          let a = t(...o);
          return a.postcssPlugin = e, a.postcssVersion = new yo().version, a;
        }
        let n;
        return Object.defineProperty(s, "postcss", { get() {
          return n || (n = s()), n;
        } }), s.process = function(o, a, u) {
          return N([s(u)]).process(o, a);
        }, s;
      };
      N.stringify = uk;
      N.parse = hk;
      N.fromJSON = fk;
      N.list = mk;
      N.comment = (r) => new tp(r);
      N.atRule = (r) => new rp(r);
      N.decl = (r) => new Zc(r);
      N.rule = (r) => new ip(r);
      N.root = (r) => new sp(r);
      N.document = (r) => new ep(r);
      N.CssSyntaxError = ok;
      N.Declaration = Zc;
      N.Container = lk;
      N.Processor = yo;
      N.Document = ep;
      N.Comment = tp;
      N.Warning = ck;
      N.AtRule = rp;
      N.Result = pk;
      N.Input = dk;
      N.Rule = ip;
      N.Root = sp;
      N.Node = gk;
      ak.registerPostcss(N);
      np.exports = N;
      N.default = N;
    });
    var j, U, p5, d5, h5, m5, g5, w5, y5, b5, x5, v5, k5, S5, C5, _5, A5, E5, O5, T5, P5, D5, q5, I5, R5, M5, Ye = C(() => {
      l();
      j = Y(ue()), U = j.default, p5 = j.default.stringify, d5 = j.default.fromJSON, h5 = j.default.plugin, m5 = j.default.parse, g5 = j.default.list, w5 = j.default.document, y5 = j.default.comment, b5 = j.default.atRule, x5 = j.default.rule, v5 = j.default.decl, k5 = j.default.root, S5 = j.default.CssSyntaxError, C5 = j.default.Declaration, _5 = j.default.Container, A5 = j.default.Processor, E5 = j.default.Document, O5 = j.default.Comment, T5 = j.default.Warning, P5 = j.default.AtRule, D5 = j.default.Result, q5 = j.default.Input, I5 = j.default.Rule, R5 = j.default.Root, M5 = j.default.Node;
    });
    var bo = y((F5, op) => {
      l();
      op.exports = function(r, e, t, i, s) {
        for (e = e.split ? e.split(".") : e, i = 0; i < e.length; i++)
          r = r ? r[e[i]] : s;
        return r === s ? t : r;
      };
    });
    function Le(r) {
      return ["fontSize", "outline"].includes(r) ? (e) => (typeof e == "function" && (e = e({})), Array.isArray(e) && (e = e[0]), e) : ["fontFamily", "boxShadow", "transitionProperty", "transitionDuration", "transitionDelay", "transitionTimingFunction", "backgroundImage", "backgroundSize", "backgroundColor", "cursor", "animation"].includes(r) ? (e) => (typeof e == "function" && (e = e({})), Array.isArray(e) && (e = e.join(", ")), e) : ["gridTemplateColumns", "gridTemplateRows", "objectPosition"].includes(r) ? (e) => (typeof e == "function" && (e = e({})), typeof e == "string" && (e = U.list.comma(e).join(" ")), e) : (e, t = {}) => (typeof e == "function" && (e = e(t)), e);
    }
    var zr = C(() => {
      l();
      Ye();
    });
    var cp = y((z5, So) => {
      l();
      var ap = Ce();
      function xo(r, e) {
        let t, i = ap((s) => {
          t = s;
        });
        try {
          i.processSync(r);
        } catch (s) {
          throw r.includes(":") ? e ? e.error("Missed semicolon") : s : e ? e.error(s.message) : s;
        }
        return t.at(0);
      }
      function lp(r, e) {
        let t = false;
        return r.each((i) => {
          if (i.type === "nesting") {
            let s = e.clone();
            i.value !== "&" ? i.replaceWith(xo(i.value.replace("&", s.toString()))) : i.replaceWith(s), t = true;
          } else
            i.nodes && lp(i, e) && (t = true);
        }), t;
      }
      function up(r, e) {
        let t = [];
        return r.selectors.forEach((i) => {
          let s = xo(i, r);
          e.selectors.forEach((n) => {
            if (n.length) {
              let o = xo(n, e);
              lp(o, s) || (o.prepend(ap.combinator({ value: " " })), o.prepend(s.clone())), t.push(o.toString());
            }
          });
        }), t;
      }
      function vo(r, e) {
        return r && r.type === "comment" ? (e.after(r), r) : e;
      }
      function wk(r) {
        return function e(t, i, s) {
          let n = [];
          if (i.each((o) => {
            o.type === "comment" || o.type === "decl" ? n.push(o) : o.type === "rule" && s ? o.selectors = up(t, o) : o.type === "atrule" && (o.nodes && r[o.name] ? e(t, o, true) : n.push(o));
          }), s && n.length) {
            let o = t.clone({ nodes: [] });
            for (let a of n)
              o.append(a);
            i.prepend(o);
          }
        };
      }
      function ko(r, e, t, i) {
        let s = new i({ selector: r, nodes: [] });
        for (let n of e)
          s.append(n);
        return t.after(s), s;
      }
      function fp(r, e) {
        let t = {};
        for (let i of r)
          t[i] = true;
        if (e)
          for (let i of e) {
            let s = i.replace(/^@/, "");
            t[s] = true;
          }
        return t;
      }
      So.exports = (r = {}) => {
        let e = fp(["media", "supports"], r.bubble), t = wk(e), i = fp(["document", "font-face", "keyframes", "-webkit-keyframes", "-moz-keyframes"], r.unwrap), s = r.preserveEmpty;
        return { postcssPlugin: "postcss-nested", Rule(n, { Rule: o }) {
          let a = false, u = n, f = false, c = [];
          n.each((d) => {
            if (d.type === "rule")
              c.length && (u = ko(n.selector, c, u, o), c = []), f = true, a = true, d.selectors = up(n, d), u = vo(d.prev(), u), u.after(d), u = d;
            else if (d.type === "atrule")
              if (c.length && (u = ko(n.selector, c, u, o), c = []), d.name === "at-root") {
                a = true, t(n, d, false);
                let p = d.nodes;
                d.params && (p = new o({ selector: d.params, nodes: p })), u.after(p), u = p, d.remove();
              } else
                e[d.name] ? (f = true, a = true, t(n, d, true), u = vo(d.prev(), u), u.after(d), u = d) : i[d.name] ? (f = true, a = true, t(n, d, false), u = vo(d.prev(), u), u.after(d), u = d) : f && c.push(d);
            else
              d.type === "decl" && f && c.push(d);
          }), c.length && (u = ko(n.selector, c, u, o)), a && s !== true && (n.raws.semicolon = true, n.nodes.length === 0 && n.remove());
        } };
      };
      So.exports.postcss = true;
    });
    var mp = y(($5, hp) => {
      l();
      "use strict";
      var pp = /-(\w|$)/g, dp = (r, e) => e.toUpperCase(), yk = (r) => (r = r.toLowerCase(), r === "float" ? "cssFloat" : r.startsWith("-ms-") ? r.substr(1).replace(pp, dp) : r.replace(pp, dp));
      hp.exports = yk;
    });
    var Ao = y((j5, gp) => {
      l();
      var bk = mp(), xk = { boxFlex: true, boxFlexGroup: true, columnCount: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, strokeDashoffset: true, strokeOpacity: true, strokeWidth: true };
      function Co(r) {
        return typeof r.nodes == "undefined" ? true : _o(r);
      }
      function _o(r) {
        let e, t = {};
        return r.each((i) => {
          if (i.type === "atrule")
            e = "@" + i.name, i.params && (e += " " + i.params), typeof t[e] == "undefined" ? t[e] = Co(i) : Array.isArray(t[e]) ? t[e].push(Co(i)) : t[e] = [t[e], Co(i)];
          else if (i.type === "rule") {
            let s = _o(i);
            if (t[i.selector])
              for (let n in s)
                t[i.selector][n] = s[n];
            else
              t[i.selector] = s;
          } else if (i.type === "decl") {
            i.prop[0] === "-" && i.prop[1] === "-" ? e = i.prop : e = bk(i.prop);
            let s = i.value;
            !isNaN(i.value) && xk[e] && (s = parseFloat(i.value)), i.important && (s += " !important"), typeof t[e] == "undefined" ? t[e] = s : Array.isArray(t[e]) ? t[e].push(s) : t[e] = [t[e], s];
          }
        }), t;
      }
      gp.exports = _o;
    });
    var es = y((U5, xp) => {
      l();
      var $r = ue(), wp = /\s*!important\s*$/i, vk = { "box-flex": true, "box-flex-group": true, "column-count": true, flex: true, "flex-grow": true, "flex-positive": true, "flex-shrink": true, "flex-negative": true, "font-weight": true, "line-clamp": true, "line-height": true, opacity: true, order: true, orphans: true, "tab-size": true, widows: true, "z-index": true, zoom: true, "fill-opacity": true, "stroke-dashoffset": true, "stroke-opacity": true, "stroke-width": true };
      function kk(r) {
        return r.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase();
      }
      function yp(r, e, t) {
        t === false || t === null || (e.startsWith("--") || (e = kk(e)), typeof t == "number" && (t === 0 || vk[e] ? t = t.toString() : t += "px"), e === "css-float" && (e = "float"), wp.test(t) ? (t = t.replace(wp, ""), r.push($r.decl({ prop: e, value: t, important: true }))) : r.push($r.decl({ prop: e, value: t })));
      }
      function bp(r, e, t) {
        let i = $r.atRule({ name: e[1], params: e[3] || "" });
        typeof t == "object" && (i.nodes = [], Eo(t, i)), r.push(i);
      }
      function Eo(r, e) {
        let t, i, s;
        for (t in r)
          if (i = r[t], !(i === null || typeof i == "undefined"))
            if (t[0] === "@") {
              let n = t.match(/@(\S+)(\s+([\W\w]*)\s*)?/);
              if (Array.isArray(i))
                for (let o of i)
                  bp(e, n, o);
              else
                bp(e, n, i);
            } else if (Array.isArray(i))
              for (let n of i)
                yp(e, t, n);
            else
              typeof i == "object" ? (s = $r.rule({ selector: t }), Eo(i, s), e.push(s)) : yp(e, t, i);
      }
      xp.exports = function(r) {
        let e = $r.root();
        return Eo(r, e), e;
      };
    });
    var Oo = y((V5, vp) => {
      l();
      var Sk = Ao();
      vp.exports = function(e) {
        return console && console.warn && e.warnings().forEach((t) => {
          let i = t.plugin || "PostCSS";
          console.warn(i + ": " + t.text);
        }), Sk(e.root);
      };
    });
    var Sp = y((W5, kp) => {
      l();
      var Ck = ue(), _k = Oo(), Ak = es();
      kp.exports = function(e) {
        let t = Ck(e);
        return async (i) => {
          let s = await t.process(i, { parser: Ak, from: void 0 });
          return _k(s);
        };
      };
    });
    var _p = y((G5, Cp) => {
      l();
      var Ek = ue(), Ok = Oo(), Tk = es();
      Cp.exports = function(r) {
        let e = Ek(r);
        return (t) => {
          let i = e.process(t, { parser: Tk, from: void 0 });
          return Ok(i);
        };
      };
    });
    var Ep = y((H5, Ap) => {
      l();
      var Pk = Ao(), Dk = es(), qk = Sp(), Ik = _p();
      Ap.exports = { objectify: Pk, parse: Dk, async: qk, sync: Ik };
    });
    var Et, Op, Y5, Q5, J5, X5, Tp = C(() => {
      l();
      Et = Y(Ep()), Op = Et.default, Y5 = Et.default.objectify, Q5 = Et.default.parse, J5 = Et.default.async, X5 = Et.default.sync;
    });
    function Ot(r) {
      return Array.isArray(r) ? r.flatMap((e) => U([(0, Pp.default)({ bubble: ["screen"] })]).process(e, { parser: Op }).root.nodes) : Ot([r]);
    }
    var Pp, To = C(() => {
      l();
      Ye();
      Pp = Y(cp());
      Tp();
    });
    function Tt(r, e, t = false) {
      return (0, Dp.default)((i) => {
        i.walkClasses((s) => {
          let n = s.value, o = t && n.startsWith("-");
          s.value = o ? `-${r}${n.slice(1)}` : `${r}${n}`;
        });
      }).processSync(e);
    }
    var Dp, ts = C(() => {
      l();
      Dp = Y(Ce());
    });
    function fe(r) {
      let e = qp.default.className();
      return e.value = r, at(e?.raws?.value ?? e.value);
    }
    var qp, Pt = C(() => {
      l();
      qp = Y(Ce());
      yi();
    });
    function Po(r) {
      return at(`.${fe(r)}`);
    }
    function rs(r, e) {
      return Po(jr(r, e));
    }
    function jr(r, e) {
      return e === "DEFAULT" ? r : e === "-" || e === "-DEFAULT" ? `-${r}` : e.startsWith("-") ? `-${r}${e}` : `${r}-${e}`;
    }
    var Do = C(() => {
      l();
      Pt();
      yi();
    });
    function lt(r) {
      return (r > 0n) - (r < 0n);
    }
    var is = C(() => {
      l();
    });
    function E(r, e = [[r, [r]]], { filterDefault: t = false, ...i } = {}) {
      let s = Le(r);
      return function({ matchUtilities: n, theme: o }) {
        for (let a of e) {
          let u = Array.isArray(a[0]) ? a : [a];
          n(u.reduce((f, [c, d]) => Object.assign(f, { [c]: (p) => d.reduce((h, w) => Array.isArray(w) ? Object.assign(h, { [w[0]]: w[1] }) : Object.assign(h, { [w]: s(p) }), {}) }), {}), { ...i, values: t ? Object.fromEntries(Object.entries(o(r) ?? {}).filter(([f]) => f !== "DEFAULT")) : o(r) });
        }
      };
    }
    var Ip = C(() => {
      l();
      zr();
    });
    function ut(r) {
      return r = Array.isArray(r) ? r : [r], r.map((e) => e.values.map((t) => t.raw !== void 0 ? t.raw : [t.min && `(min-width: ${t.min})`, t.max && `(max-width: ${t.max})`].filter(Boolean).join(" and "))).join(", ");
    }
    var ss = C(() => {
      l();
    });
    function qo(r) {
      return r.split(zk).map((t) => {
        let i = t.trim(), s = { value: i }, n = i.split($k), o = /* @__PURE__ */ new Set();
        for (let a of n)
          !o.has("DIRECTIONS") && Rk.has(a) ? (s.direction = a, o.add("DIRECTIONS")) : !o.has("PLAY_STATES") && Mk.has(a) ? (s.playState = a, o.add("PLAY_STATES")) : !o.has("FILL_MODES") && Lk.has(a) ? (s.fillMode = a, o.add("FILL_MODES")) : !o.has("ITERATION_COUNTS") && (Fk.has(a) || jk.test(a)) ? (s.iterationCount = a, o.add("ITERATION_COUNTS")) : !o.has("TIMING_FUNCTION") && Nk.has(a) || !o.has("TIMING_FUNCTION") && Bk.some((u) => a.startsWith(`${u}(`)) ? (s.timingFunction = a, o.add("TIMING_FUNCTION")) : !o.has("DURATION") && Rp.test(a) ? (s.duration = a, o.add("DURATION")) : !o.has("DELAY") && Rp.test(a) ? (s.delay = a, o.add("DELAY")) : o.has("NAME") ? (s.unknown || (s.unknown = []), s.unknown.push(a)) : (s.name = a, o.add("NAME"));
        return s;
      });
    }
    var Rk, Mk, Lk, Fk, Nk, Bk, zk, $k, Rp, jk, Mp = C(() => {
      l();
      Rk = /* @__PURE__ */ new Set(["normal", "reverse", "alternate", "alternate-reverse"]), Mk = /* @__PURE__ */ new Set(["running", "paused"]), Lk = /* @__PURE__ */ new Set(["none", "forwards", "backwards", "both"]), Fk = /* @__PURE__ */ new Set(["infinite"]), Nk = /* @__PURE__ */ new Set(["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"]), Bk = ["cubic-bezier", "steps"], zk = /\,(?![^(]*\))/g, $k = /\ +(?![^(]*\))/g, Rp = /^(-?[\d.]+m?s)$/, jk = /^(\d+)$/;
    });
    var Lp, J, Fp = C(() => {
      l();
      Lp = (r) => Object.assign({}, ...Object.entries(r ?? {}).flatMap(([e, t]) => typeof t == "object" ? Object.entries(Lp(t)).map(([i, s]) => ({ [e + (i === "DEFAULT" ? "" : `-${i}`)]: s })) : [{ [`${e}`]: t }])), J = Lp;
    });
    var Bp, Np = C(() => {
      Bp = "3.1.8";
    });
    function Qe(r, e = true) {
      return Array.isArray(r) ? r.map((t) => {
        if (e && Array.isArray(t))
          throw new Error("The tuple syntax is not supported for `screens`.");
        if (typeof t == "string")
          return { name: t.toString(), values: [{ min: t, max: void 0 }] };
        let [i, s] = t;
        return i = i.toString(), typeof s == "string" ? { name: i, values: [{ min: s, max: void 0 }] } : Array.isArray(s) ? { name: i, values: s.map((n) => zp(n)) } : { name: i, values: [zp(s)] };
      }) : Qe(Object.entries(r ?? {}), false);
    }
    function zp({ "min-width": r, min: e = r, max: t, raw: i } = {}) {
      return { min: e, max: t, raw: i };
    }
    var ns = C(() => {
      l();
    });
    function os(r, e) {
      r.walkDecls((t) => {
        if (e.includes(t.prop)) {
          t.remove();
          return;
        }
        for (let i of e)
          t.value.includes(`/ var(${i})`) && (t.value = t.value.replace(`/ var(${i})`, ""));
      });
    }
    var $p = C(() => {
      l();
    });
    var be, xe, Ee, Oe, jp, Up = C(() => {
      l();
      dt();
      it();
      Ye();
      Ip();
      ss();
      Pt();
      Mp();
      Fp();
      kr();
      Un();
      Kt();
      zr();
      Np();
      ke();
      ns();
      Ln();
      $p();
      We();
      be = { pseudoElementVariants: ({ addVariant: r }) => {
        r("first-letter", "&::first-letter"), r("first-line", "&::first-line"), r("marker", [({ container: e }) => (os(e, ["--tw-text-opacity"]), "& *::marker"), ({ container: e }) => (os(e, ["--tw-text-opacity"]), "&::marker")]), r("selection", ["& *::selection", "&::selection"]), r("file", "&::file-selector-button"), r("placeholder", "&::placeholder"), r("backdrop", "&::backdrop"), r("before", ({ container: e }) => (e.walkRules((t) => {
          let i = false;
          t.walkDecls("content", () => {
            i = true;
          }), i || t.prepend(U.decl({ prop: "content", value: "var(--tw-content)" }));
        }), "&::before")), r("after", ({ container: e }) => (e.walkRules((t) => {
          let i = false;
          t.walkDecls("content", () => {
            i = true;
          }), i || t.prepend(U.decl({ prop: "content", value: "var(--tw-content)" }));
        }), "&::after"));
      }, pseudoClassVariants: ({ addVariant: r, config: e }) => {
        let t = [["first", "&:first-child"], ["last", "&:last-child"], ["only", "&:only-child"], ["odd", "&:nth-child(odd)"], ["even", "&:nth-child(even)"], "first-of-type", "last-of-type", "only-of-type", ["visited", ({ container: i }) => (os(i, ["--tw-text-opacity", "--tw-border-opacity", "--tw-bg-opacity"]), "&:visited")], "target", ["open", "&[open]"], "default", "checked", "indeterminate", "placeholder-shown", "autofill", "optional", "required", "valid", "invalid", "in-range", "out-of-range", "read-only", "empty", "focus-within", ["hover", K(e(), "hoverOnlyWhenSupported") ? "@media (hover: hover) and (pointer: fine) { &:hover }" : "&:hover"], "focus", "focus-visible", "active", "enabled", "disabled"].map((i) => Array.isArray(i) ? i : [i, `&:${i}`]);
        for (let [i, s] of t)
          r(i, (n) => typeof s == "function" ? s(n) : s);
        for (let [i, s] of t)
          r(`group-${i}`, (n) => (typeof s == "function" ? s(n) : s).replace(/&(\S+)/, ":merge(.group)$1 &"));
        for (let [i, s] of t)
          r(`peer-${i}`, (n) => (typeof s == "function" ? s(n) : s).replace(/&(\S+)/, ":merge(.peer)$1 ~ &"));
      }, directionVariants: ({ addVariant: r }) => {
        r("ltr", () => (W.warn("rtl-experimental", ["The RTL features in Tailwind CSS are currently in preview.", "Preview features are not covered by semver, and may be improved in breaking ways at any time."]), '[dir="ltr"] &')), r("rtl", () => (W.warn("rtl-experimental", ["The RTL features in Tailwind CSS are currently in preview.", "Preview features are not covered by semver, and may be improved in breaking ways at any time."]), '[dir="rtl"] &'));
      }, reducedMotionVariants: ({ addVariant: r }) => {
        r("motion-safe", "@media (prefers-reduced-motion: no-preference)"), r("motion-reduce", "@media (prefers-reduced-motion: reduce)");
      }, darkVariants: ({ config: r, addVariant: e }) => {
        let [t, i = ".dark"] = [].concat(r("darkMode", "media"));
        t === false && (t = "media", W.warn("darkmode-false", ["The `darkMode` option in your Tailwind CSS configuration is set to `false`, which now behaves the same as `media`.", "Change `darkMode` to `media` or remove it entirely.", "https://tailwindcss.com/docs/upgrade-guide#remove-dark-mode-configuration"])), t === "class" ? e("dark", `${i} &`) : t === "media" && e("dark", "@media (prefers-color-scheme: dark)");
      }, printVariant: ({ addVariant: r }) => {
        r("print", "@media print");
      }, screenVariants: ({ theme: r, addVariant: e }) => {
        for (let t of Qe(r("screens"))) {
          let i = ut(t);
          e(t.name, `@media ${i}`);
        }
      }, orientationVariants: ({ addVariant: r }) => {
        r("portrait", "@media (orientation: portrait)"), r("landscape", "@media (orientation: landscape)");
      }, prefersContrastVariants: ({ addVariant: r }) => {
        r("contrast-more", "@media (prefers-contrast: more)"), r("contrast-less", "@media (prefers-contrast: less)");
      } }, xe = ["translate(var(--tw-translate-x), var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" "), Ee = ["var(--tw-blur)", "var(--tw-brightness)", "var(--tw-contrast)", "var(--tw-grayscale)", "var(--tw-hue-rotate)", "var(--tw-invert)", "var(--tw-saturate)", "var(--tw-sepia)", "var(--tw-drop-shadow)"].join(" "), Oe = ["var(--tw-backdrop-blur)", "var(--tw-backdrop-brightness)", "var(--tw-backdrop-contrast)", "var(--tw-backdrop-grayscale)", "var(--tw-backdrop-hue-rotate)", "var(--tw-backdrop-invert)", "var(--tw-backdrop-opacity)", "var(--tw-backdrop-saturate)", "var(--tw-backdrop-sepia)"].join(" "), jp = { preflight: ({ addBase: r }) => {
        let e = U.parse(`*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:theme('borderColor.DEFAULT', currentColor)}::after,::before{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:theme('colors.gray.4', #9ca3af)}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}`);
        r([U.comment({ text: `! tailwindcss v${Bp} | MIT License | https://tailwindcss.com` }), ...e.nodes]);
      }, container: (() => {
        function r(t = []) {
          return t.flatMap((i) => i.values.map((s) => s.min)).filter((i) => i !== void 0);
        }
        function e(t, i, s) {
          if (typeof s == "undefined")
            return [];
          if (!(typeof s == "object" && s !== null))
            return [{ screen: "DEFAULT", minWidth: 0, padding: s }];
          let n = [];
          s.DEFAULT && n.push({ screen: "DEFAULT", minWidth: 0, padding: s.DEFAULT });
          for (let o of t)
            for (let a of i)
              for (let { min: u } of a.values)
                u === o && n.push({ minWidth: o, padding: s[a.name] });
          return n;
        }
        return function({ addComponents: t, theme: i }) {
          let s = Qe(i("container.screens", i("screens"))), n = r(s), o = e(n, s, i("container.padding")), a = (f) => {
            let c = o.find((d) => d.minWidth === f);
            return c ? { paddingRight: c.padding, paddingLeft: c.padding } : {};
          }, u = Array.from(new Set(n.slice().sort((f, c) => parseInt(f) - parseInt(c)))).map((f) => ({ [`@media (min-width: ${f})`]: { ".container": { "max-width": f, ...a(f) } } }));
          t([{ ".container": Object.assign({ width: "100%" }, i("container.center", false) ? { marginRight: "auto", marginLeft: "auto" } : {}, a(0)) }, ...u]);
        };
      })(), accessibility: ({ addUtilities: r }) => {
        r({ ".sr-only": { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" }, ".not-sr-only": { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", clip: "auto", whiteSpace: "normal" } });
      }, pointerEvents: ({ addUtilities: r }) => {
        r({ ".pointer-events-none": { "pointer-events": "none" }, ".pointer-events-auto": { "pointer-events": "auto" } });
      }, visibility: ({ addUtilities: r }) => {
        r({ ".visible": { visibility: "visible" }, ".invisible": { visibility: "hidden" } });
      }, position: ({ addUtilities: r }) => {
        r({ ".static": { position: "static" }, ".fixed": { position: "fixed" }, ".absolute": { position: "absolute" }, ".relative": { position: "relative" }, ".sticky": { position: "sticky" } });
      }, inset: E("inset", [["inset", ["top", "right", "bottom", "left"]], [["inset-x", ["left", "right"]], ["inset-y", ["top", "bottom"]]], [["top", ["top"]], ["right", ["right"]], ["bottom", ["bottom"]], ["left", ["left"]]]], { supportsNegativeValues: true }), isolation: ({ addUtilities: r }) => {
        r({ ".isolate": { isolation: "isolate" }, ".isolation-auto": { isolation: "auto" } });
      }, zIndex: E("zIndex", [["z", ["zIndex"]]], { supportsNegativeValues: true }), order: E("order", void 0, { supportsNegativeValues: true }), gridColumn: E("gridColumn", [["col", ["gridColumn"]]]), gridColumnStart: E("gridColumnStart", [["col-start", ["gridColumnStart"]]]), gridColumnEnd: E("gridColumnEnd", [["col-end", ["gridColumnEnd"]]]), gridRow: E("gridRow", [["row", ["gridRow"]]]), gridRowStart: E("gridRowStart", [["row-start", ["gridRowStart"]]]), gridRowEnd: E("gridRowEnd", [["row-end", ["gridRowEnd"]]]), float: ({ addUtilities: r }) => {
        r({ ".float-right": { float: "right" }, ".float-left": { float: "left" }, ".float-none": { float: "none" } });
      }, clear: ({ addUtilities: r }) => {
        r({ ".clear-left": { clear: "left" }, ".clear-right": { clear: "right" }, ".clear-both": { clear: "both" }, ".clear-none": { clear: "none" } });
      }, margin: E("margin", [["m", ["margin"]], [["mx", ["margin-left", "margin-right"]], ["my", ["margin-top", "margin-bottom"]]], [["mt", ["margin-top"]], ["mr", ["margin-right"]], ["mb", ["margin-bottom"]], ["ml", ["margin-left"]]]], { supportsNegativeValues: true }), boxSizing: ({ addUtilities: r }) => {
        r({ ".box-border": { "box-sizing": "border-box" }, ".box-content": { "box-sizing": "content-box" } });
      }, display: ({ addUtilities: r }) => {
        r({ ".block": { display: "block" }, ".inline-block": { display: "inline-block" }, ".inline": { display: "inline" }, ".flex": { display: "flex" }, ".inline-flex": { display: "inline-flex" }, ".table": { display: "table" }, ".inline-table": { display: "inline-table" }, ".table-caption": { display: "table-caption" }, ".table-cell": { display: "table-cell" }, ".table-column": { display: "table-column" }, ".table-column-group": { display: "table-column-group" }, ".table-footer-group": { display: "table-footer-group" }, ".table-header-group": { display: "table-header-group" }, ".table-row-group": { display: "table-row-group" }, ".table-row": { display: "table-row" }, ".flow-root": { display: "flow-root" }, ".grid": { display: "grid" }, ".inline-grid": { display: "inline-grid" }, ".contents": { display: "contents" }, ".list-item": { display: "list-item" }, ".hidden": { display: "none" } });
      }, aspectRatio: E("aspectRatio", [["aspect", ["aspect-ratio"]]]), height: E("height", [["h", ["height"]]]), maxHeight: E("maxHeight", [["max-h", ["maxHeight"]]]), minHeight: E("minHeight", [["min-h", ["minHeight"]]]), width: E("width", [["w", ["width"]]]), minWidth: E("minWidth", [["min-w", ["minWidth"]]]), maxWidth: E("maxWidth", [["max-w", ["maxWidth"]]]), flex: E("flex"), flexShrink: E("flexShrink", [["flex-shrink", ["flex-shrink"]], ["shrink", ["flex-shrink"]]]), flexGrow: E("flexGrow", [["flex-grow", ["flex-grow"]], ["grow", ["flex-grow"]]]), flexBasis: E("flexBasis", [["basis", ["flex-basis"]]]), tableLayout: ({ addUtilities: r }) => {
        r({ ".table-auto": { "table-layout": "auto" }, ".table-fixed": { "table-layout": "fixed" } });
      }, borderCollapse: ({ addUtilities: r }) => {
        r({ ".border-collapse": { "border-collapse": "collapse" }, ".border-separate": { "border-collapse": "separate" } });
      }, borderSpacing: ({ addDefaults: r, matchUtilities: e, theme: t }) => {
        r("border-spacing", { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 }), e({ "border-spacing": (i) => ({ "--tw-border-spacing-x": i, "--tw-border-spacing-y": i, "@defaults border-spacing": {}, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" }), "border-spacing-x": (i) => ({ "--tw-border-spacing-x": i, "@defaults border-spacing": {}, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" }), "border-spacing-y": (i) => ({ "--tw-border-spacing-y": i, "@defaults border-spacing": {}, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" }) }, { values: t("borderSpacing") });
      }, transformOrigin: E("transformOrigin", [["origin", ["transformOrigin"]]]), translate: E("translate", [[["translate-x", [["@defaults transform", {}], "--tw-translate-x", ["transform", xe]]], ["translate-y", [["@defaults transform", {}], "--tw-translate-y", ["transform", xe]]]]], { supportsNegativeValues: true }), rotate: E("rotate", [["rotate", [["@defaults transform", {}], "--tw-rotate", ["transform", xe]]]], { supportsNegativeValues: true }), skew: E("skew", [[["skew-x", [["@defaults transform", {}], "--tw-skew-x", ["transform", xe]]], ["skew-y", [["@defaults transform", {}], "--tw-skew-y", ["transform", xe]]]]], { supportsNegativeValues: true }), scale: E("scale", [["scale", [["@defaults transform", {}], "--tw-scale-x", "--tw-scale-y", ["transform", xe]]], [["scale-x", [["@defaults transform", {}], "--tw-scale-x", ["transform", xe]]], ["scale-y", [["@defaults transform", {}], "--tw-scale-y", ["transform", xe]]]]], { supportsNegativeValues: true }), transform: ({ addDefaults: r, addUtilities: e }) => {
        r("transform", { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1" }), e({ ".transform": { "@defaults transform": {}, transform: xe }, ".transform-cpu": { transform: xe }, ".transform-gpu": { transform: xe.replace("translate(var(--tw-translate-x), var(--tw-translate-y))", "translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)") }, ".transform-none": { transform: "none" } });
      }, animation: ({ matchUtilities: r, theme: e, config: t }) => {
        let i = (n) => `${t("prefix")}${fe(n)}`, s = Object.fromEntries(Object.entries(e("keyframes") ?? {}).map(([n, o]) => [n, { [`@keyframes ${i(n)}`]: o }]));
        r({ animate: (n) => {
          let o = qo(n);
          return [...o.flatMap((a) => s[a.name]), { animation: o.map(({ name: a, value: u }) => a === void 0 || s[a] === void 0 ? u : u.replace(a, i(a))).join(", ") }];
        } }, { values: e("animation") });
      }, cursor: E("cursor"), touchAction: ({ addDefaults: r, addUtilities: e }) => {
        r("touch-action", { "--tw-pan-x": " ", "--tw-pan-y": " ", "--tw-pinch-zoom": " " });
        let t = "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)";
        e({ ".touch-auto": { "touch-action": "auto" }, ".touch-none": { "touch-action": "none" }, ".touch-pan-x": { "@defaults touch-action": {}, "--tw-pan-x": "pan-x", "touch-action": t }, ".touch-pan-left": { "@defaults touch-action": {}, "--tw-pan-x": "pan-left", "touch-action": t }, ".touch-pan-right": { "@defaults touch-action": {}, "--tw-pan-x": "pan-right", "touch-action": t }, ".touch-pan-y": { "@defaults touch-action": {}, "--tw-pan-y": "pan-y", "touch-action": t }, ".touch-pan-up": { "@defaults touch-action": {}, "--tw-pan-y": "pan-up", "touch-action": t }, ".touch-pan-down": { "@defaults touch-action": {}, "--tw-pan-y": "pan-down", "touch-action": t }, ".touch-pinch-zoom": { "@defaults touch-action": {}, "--tw-pinch-zoom": "pinch-zoom", "touch-action": t }, ".touch-manipulation": { "touch-action": "manipulation" } });
      }, userSelect: ({ addUtilities: r }) => {
        r({ ".select-none": { "user-select": "none" }, ".select-text": { "user-select": "text" }, ".select-all": { "user-select": "all" }, ".select-auto": { "user-select": "auto" } });
      }, resize: ({ addUtilities: r }) => {
        r({ ".resize-none": { resize: "none" }, ".resize-y": { resize: "vertical" }, ".resize-x": { resize: "horizontal" }, ".resize": { resize: "both" } });
      }, scrollSnapType: ({ addDefaults: r, addUtilities: e }) => {
        r("scroll-snap-type", { "--tw-scroll-snap-strictness": "proximity" }), e({ ".snap-none": { "scroll-snap-type": "none" }, ".snap-x": { "@defaults scroll-snap-type": {}, "scroll-snap-type": "x var(--tw-scroll-snap-strictness)" }, ".snap-y": { "@defaults scroll-snap-type": {}, "scroll-snap-type": "y var(--tw-scroll-snap-strictness)" }, ".snap-both": { "@defaults scroll-snap-type": {}, "scroll-snap-type": "both var(--tw-scroll-snap-strictness)" }, ".snap-mandatory": { "--tw-scroll-snap-strictness": "mandatory" }, ".snap-proximity": { "--tw-scroll-snap-strictness": "proximity" } });
      }, scrollSnapAlign: ({ addUtilities: r }) => {
        r({ ".snap-start": { "scroll-snap-align": "start" }, ".snap-end": { "scroll-snap-align": "end" }, ".snap-center": { "scroll-snap-align": "center" }, ".snap-align-none": { "scroll-snap-align": "none" } });
      }, scrollSnapStop: ({ addUtilities: r }) => {
        r({ ".snap-normal": { "scroll-snap-stop": "normal" }, ".snap-always": { "scroll-snap-stop": "always" } });
      }, scrollMargin: E("scrollMargin", [["scroll-m", ["scroll-margin"]], [["scroll-mx", ["scroll-margin-left", "scroll-margin-right"]], ["scroll-my", ["scroll-margin-top", "scroll-margin-bottom"]]], [["scroll-mt", ["scroll-margin-top"]], ["scroll-mr", ["scroll-margin-right"]], ["scroll-mb", ["scroll-margin-bottom"]], ["scroll-ml", ["scroll-margin-left"]]]], { supportsNegativeValues: true }), scrollPadding: E("scrollPadding", [["scroll-p", ["scroll-padding"]], [["scroll-px", ["scroll-padding-left", "scroll-padding-right"]], ["scroll-py", ["scroll-padding-top", "scroll-padding-bottom"]]], [["scroll-pt", ["scroll-padding-top"]], ["scroll-pr", ["scroll-padding-right"]], ["scroll-pb", ["scroll-padding-bottom"]], ["scroll-pl", ["scroll-padding-left"]]]]), listStylePosition: ({ addUtilities: r }) => {
        r({ ".list-inside": { "list-style-position": "inside" }, ".list-outside": { "list-style-position": "outside" } });
      }, listStyleType: E("listStyleType", [["list", ["listStyleType"]]]), appearance: ({ addUtilities: r }) => {
        r({ ".appearance-none": { appearance: "none" } });
      }, columns: E("columns", [["columns", ["columns"]]]), breakBefore: ({ addUtilities: r }) => {
        r({ ".break-before-auto": { "break-before": "auto" }, ".break-before-avoid": { "break-before": "avoid" }, ".break-before-all": { "break-before": "all" }, ".break-before-avoid-page": { "break-before": "avoid-page" }, ".break-before-page": { "break-before": "page" }, ".break-before-left": { "break-before": "left" }, ".break-before-right": { "break-before": "right" }, ".break-before-column": { "break-before": "column" } });
      }, breakInside: ({ addUtilities: r }) => {
        r({ ".break-inside-auto": { "break-inside": "auto" }, ".break-inside-avoid": { "break-inside": "avoid" }, ".break-inside-avoid-page": { "break-inside": "avoid-page" }, ".break-inside-avoid-column": { "break-inside": "avoid-column" } });
      }, breakAfter: ({ addUtilities: r }) => {
        r({ ".break-after-auto": { "break-after": "auto" }, ".break-after-avoid": { "break-after": "avoid" }, ".break-after-all": { "break-after": "all" }, ".break-after-avoid-page": { "break-after": "avoid-page" }, ".break-after-page": { "break-after": "page" }, ".break-after-left": { "break-after": "left" }, ".break-after-right": { "break-after": "right" }, ".break-after-column": { "break-after": "column" } });
      }, gridAutoColumns: E("gridAutoColumns", [["auto-cols", ["gridAutoColumns"]]]), gridAutoFlow: ({ addUtilities: r }) => {
        r({ ".grid-flow-row": { gridAutoFlow: "row" }, ".grid-flow-col": { gridAutoFlow: "column" }, ".grid-flow-dense": { gridAutoFlow: "dense" }, ".grid-flow-row-dense": { gridAutoFlow: "row dense" }, ".grid-flow-col-dense": { gridAutoFlow: "column dense" } });
      }, gridAutoRows: E("gridAutoRows", [["auto-rows", ["gridAutoRows"]]]), gridTemplateColumns: E("gridTemplateColumns", [["grid-cols", ["gridTemplateColumns"]]]), gridTemplateRows: E("gridTemplateRows", [["grid-rows", ["gridTemplateRows"]]]), flexDirection: ({ addUtilities: r }) => {
        r({ ".flex-row": { "flex-direction": "row" }, ".flex-row-reverse": { "flex-direction": "row-reverse" }, ".flex-col": { "flex-direction": "column" }, ".flex-col-reverse": { "flex-direction": "column-reverse" } });
      }, flexWrap: ({ addUtilities: r }) => {
        r({ ".flex-wrap": { "flex-wrap": "wrap" }, ".flex-wrap-reverse": { "flex-wrap": "wrap-reverse" }, ".flex-nowrap": { "flex-wrap": "nowrap" } });
      }, placeContent: ({ addUtilities: r }) => {
        r({ ".place-content-center": { "place-content": "center" }, ".place-content-start": { "place-content": "start" }, ".place-content-end": { "place-content": "end" }, ".place-content-between": { "place-content": "space-between" }, ".place-content-around": { "place-content": "space-around" }, ".place-content-evenly": { "place-content": "space-evenly" }, ".place-content-stretch": { "place-content": "stretch" } });
      }, placeItems: ({ addUtilities: r }) => {
        r({ ".place-items-start": { "place-items": "start" }, ".place-items-end": { "place-items": "end" }, ".place-items-center": { "place-items": "center" }, ".place-items-stretch": { "place-items": "stretch" } });
      }, alignContent: ({ addUtilities: r }) => {
        r({ ".content-center": { "align-content": "center" }, ".content-start": { "align-content": "flex-start" }, ".content-end": { "align-content": "flex-end" }, ".content-between": { "align-content": "space-between" }, ".content-around": { "align-content": "space-around" }, ".content-evenly": { "align-content": "space-evenly" } });
      }, alignItems: ({ addUtilities: r }) => {
        r({ ".items-start": { "align-items": "flex-start" }, ".items-end": { "align-items": "flex-end" }, ".items-center": { "align-items": "center" }, ".items-baseline": { "align-items": "baseline" }, ".items-stretch": { "align-items": "stretch" } });
      }, justifyContent: ({ addUtilities: r }) => {
        r({ ".justify-start": { "justify-content": "flex-start" }, ".justify-end": { "justify-content": "flex-end" }, ".justify-center": { "justify-content": "center" }, ".justify-between": { "justify-content": "space-between" }, ".justify-around": { "justify-content": "space-around" }, ".justify-evenly": { "justify-content": "space-evenly" } });
      }, justifyItems: ({ addUtilities: r }) => {
        r({ ".justify-items-start": { "justify-items": "start" }, ".justify-items-end": { "justify-items": "end" }, ".justify-items-center": { "justify-items": "center" }, ".justify-items-stretch": { "justify-items": "stretch" } });
      }, gap: E("gap", [["gap", ["gap"]], [["gap-x", ["columnGap"]], ["gap-y", ["rowGap"]]]]), space: ({ matchUtilities: r, addUtilities: e, theme: t }) => {
        r({ "space-x": (i) => (i = i === "0" ? "0px" : i, { "& > :not([hidden]) ~ :not([hidden])": { "--tw-space-x-reverse": "0", "margin-right": `calc(${i} * var(--tw-space-x-reverse))`, "margin-left": `calc(${i} * calc(1 - var(--tw-space-x-reverse)))` } }), "space-y": (i) => (i = i === "0" ? "0px" : i, { "& > :not([hidden]) ~ :not([hidden])": { "--tw-space-y-reverse": "0", "margin-top": `calc(${i} * calc(1 - var(--tw-space-y-reverse)))`, "margin-bottom": `calc(${i} * var(--tw-space-y-reverse))` } }) }, { values: t("space"), supportsNegativeValues: true }), e({ ".space-y-reverse > :not([hidden]) ~ :not([hidden])": { "--tw-space-y-reverse": "1" }, ".space-x-reverse > :not([hidden]) ~ :not([hidden])": { "--tw-space-x-reverse": "1" } });
      }, divideWidth: ({ matchUtilities: r, addUtilities: e, theme: t }) => {
        r({ "divide-x": (i) => (i = i === "0" ? "0px" : i, { "& > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-x-reverse": "0", "border-right-width": `calc(${i} * var(--tw-divide-x-reverse))`, "border-left-width": `calc(${i} * calc(1 - var(--tw-divide-x-reverse)))` } }), "divide-y": (i) => (i = i === "0" ? "0px" : i, { "& > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-y-reverse": "0", "border-top-width": `calc(${i} * calc(1 - var(--tw-divide-y-reverse)))`, "border-bottom-width": `calc(${i} * var(--tw-divide-y-reverse))` } }) }, { values: t("divideWidth"), type: ["line-width", "length"] }), e({ ".divide-y-reverse > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-y-reverse": "1" }, ".divide-x-reverse > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-x-reverse": "1" } });
      }, divideStyle: ({ addUtilities: r }) => {
        r({ ".divide-solid > :not([hidden]) ~ :not([hidden])": { "border-style": "solid" }, ".divide-dashed > :not([hidden]) ~ :not([hidden])": { "border-style": "dashed" }, ".divide-dotted > :not([hidden]) ~ :not([hidden])": { "border-style": "dotted" }, ".divide-double > :not([hidden]) ~ :not([hidden])": { "border-style": "double" }, ".divide-none > :not([hidden]) ~ :not([hidden])": { "border-style": "none" } });
      }, divideColor: ({ matchUtilities: r, theme: e, corePlugins: t }) => {
        r({ divide: (i) => t("divideOpacity") ? { ["& > :not([hidden]) ~ :not([hidden])"]: te({ color: i, property: "border-color", variable: "--tw-divide-opacity" }) } : { ["& > :not([hidden]) ~ :not([hidden])"]: { "border-color": F(i) } } }, { values: (({ DEFAULT: i, ...s }) => s)(J(e("divideColor"))), type: "color" });
      }, divideOpacity: ({ matchUtilities: r, theme: e }) => {
        r({ "divide-opacity": (t) => ({ ["& > :not([hidden]) ~ :not([hidden])"]: { "--tw-divide-opacity": t } }) }, { values: e("divideOpacity") });
      }, placeSelf: ({ addUtilities: r }) => {
        r({ ".place-self-auto": { "place-self": "auto" }, ".place-self-start": { "place-self": "start" }, ".place-self-end": { "place-self": "end" }, ".place-self-center": { "place-self": "center" }, ".place-self-stretch": { "place-self": "stretch" } });
      }, alignSelf: ({ addUtilities: r }) => {
        r({ ".self-auto": { "align-self": "auto" }, ".self-start": { "align-self": "flex-start" }, ".self-end": { "align-self": "flex-end" }, ".self-center": { "align-self": "center" }, ".self-stretch": { "align-self": "stretch" }, ".self-baseline": { "align-self": "baseline" } });
      }, justifySelf: ({ addUtilities: r }) => {
        r({ ".justify-self-auto": { "justify-self": "auto" }, ".justify-self-start": { "justify-self": "start" }, ".justify-self-end": { "justify-self": "end" }, ".justify-self-center": { "justify-self": "center" }, ".justify-self-stretch": { "justify-self": "stretch" } });
      }, overflow: ({ addUtilities: r }) => {
        r({ ".overflow-auto": { overflow: "auto" }, ".overflow-hidden": { overflow: "hidden" }, ".overflow-clip": { overflow: "clip" }, ".overflow-visible": { overflow: "visible" }, ".overflow-scroll": { overflow: "scroll" }, ".overflow-x-auto": { "overflow-x": "auto" }, ".overflow-y-auto": { "overflow-y": "auto" }, ".overflow-x-hidden": { "overflow-x": "hidden" }, ".overflow-y-hidden": { "overflow-y": "hidden" }, ".overflow-x-clip": { "overflow-x": "clip" }, ".overflow-y-clip": { "overflow-y": "clip" }, ".overflow-x-visible": { "overflow-x": "visible" }, ".overflow-y-visible": { "overflow-y": "visible" }, ".overflow-x-scroll": { "overflow-x": "scroll" }, ".overflow-y-scroll": { "overflow-y": "scroll" } });
      }, overscrollBehavior: ({ addUtilities: r }) => {
        r({ ".overscroll-auto": { "overscroll-behavior": "auto" }, ".overscroll-contain": { "overscroll-behavior": "contain" }, ".overscroll-none": { "overscroll-behavior": "none" }, ".overscroll-y-auto": { "overscroll-behavior-y": "auto" }, ".overscroll-y-contain": { "overscroll-behavior-y": "contain" }, ".overscroll-y-none": { "overscroll-behavior-y": "none" }, ".overscroll-x-auto": { "overscroll-behavior-x": "auto" }, ".overscroll-x-contain": { "overscroll-behavior-x": "contain" }, ".overscroll-x-none": { "overscroll-behavior-x": "none" } });
      }, scrollBehavior: ({ addUtilities: r }) => {
        r({ ".scroll-auto": { "scroll-behavior": "auto" }, ".scroll-smooth": { "scroll-behavior": "smooth" } });
      }, textOverflow: ({ addUtilities: r }) => {
        r({ ".truncate": { overflow: "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" }, ".overflow-ellipsis": { "text-overflow": "ellipsis" }, ".text-ellipsis": { "text-overflow": "ellipsis" }, ".text-clip": { "text-overflow": "clip" } });
      }, whitespace: ({ addUtilities: r }) => {
        r({ ".whitespace-normal": { "white-space": "normal" }, ".whitespace-nowrap": { "white-space": "nowrap" }, ".whitespace-pre": { "white-space": "pre" }, ".whitespace-pre-line": { "white-space": "pre-line" }, ".whitespace-pre-wrap": { "white-space": "pre-wrap" } });
      }, wordBreak: ({ addUtilities: r }) => {
        r({ ".break-normal": { "overflow-wrap": "normal", "word-break": "normal" }, ".break-words": { "overflow-wrap": "break-word" }, ".break-all": { "word-break": "break-all" } });
      }, borderRadius: E("borderRadius", [["rounded", ["border-radius"]], [["rounded-t", ["border-top-left-radius", "border-top-right-radius"]], ["rounded-r", ["border-top-right-radius", "border-bottom-right-radius"]], ["rounded-b", ["border-bottom-right-radius", "border-bottom-left-radius"]], ["rounded-l", ["border-top-left-radius", "border-bottom-left-radius"]]], [["rounded-tl", ["border-top-left-radius"]], ["rounded-tr", ["border-top-right-radius"]], ["rounded-br", ["border-bottom-right-radius"]], ["rounded-bl", ["border-bottom-left-radius"]]]]), borderWidth: E("borderWidth", [["border", [["@defaults border-width", {}], "border-width"]], [["border-x", [["@defaults border-width", {}], "border-left-width", "border-right-width"]], ["border-y", [["@defaults border-width", {}], "border-top-width", "border-bottom-width"]]], [["border-t", [["@defaults border-width", {}], "border-top-width"]], ["border-r", [["@defaults border-width", {}], "border-right-width"]], ["border-b", [["@defaults border-width", {}], "border-bottom-width"]], ["border-l", [["@defaults border-width", {}], "border-left-width"]]]], { type: ["line-width", "length"] }), borderStyle: ({ addUtilities: r }) => {
        r({ ".border-solid": { "border-style": "solid" }, ".border-dashed": { "border-style": "dashed" }, ".border-dotted": { "border-style": "dotted" }, ".border-double": { "border-style": "double" }, ".border-hidden": { "border-style": "hidden" }, ".border-none": { "border-style": "none" } });
      }, borderColor: ({ matchUtilities: r, theme: e, corePlugins: t }) => {
        r({ border: (i) => t("borderOpacity") ? te({ color: i, property: "border-color", variable: "--tw-border-opacity" }) : { "border-color": F(i) } }, { values: (({ DEFAULT: i, ...s }) => s)(J(e("borderColor"))), type: ["color"] }), r({ "border-x": (i) => t("borderOpacity") ? te({ color: i, property: ["border-left-color", "border-right-color"], variable: "--tw-border-opacity" }) : { "border-left-color": F(i), "border-right-color": F(i) }, "border-y": (i) => t("borderOpacity") ? te({ color: i, property: ["border-top-color", "border-bottom-color"], variable: "--tw-border-opacity" }) : { "border-top-color": F(i), "border-bottom-color": F(i) } }, { values: (({ DEFAULT: i, ...s }) => s)(J(e("borderColor"))), type: "color" }), r({ "border-t": (i) => t("borderOpacity") ? te({ color: i, property: "border-top-color", variable: "--tw-border-opacity" }) : { "border-top-color": F(i) }, "border-r": (i) => t("borderOpacity") ? te({ color: i, property: "border-right-color", variable: "--tw-border-opacity" }) : { "border-right-color": F(i) }, "border-b": (i) => t("borderOpacity") ? te({ color: i, property: "border-bottom-color", variable: "--tw-border-opacity" }) : { "border-bottom-color": F(i) }, "border-l": (i) => t("borderOpacity") ? te({ color: i, property: "border-left-color", variable: "--tw-border-opacity" }) : { "border-left-color": F(i) } }, { values: (({ DEFAULT: i, ...s }) => s)(J(e("borderColor"))), type: "color" });
      }, borderOpacity: E("borderOpacity", [["border-opacity", ["--tw-border-opacity"]]]), backgroundColor: ({ matchUtilities: r, theme: e, corePlugins: t }) => {
        r({ bg: (i) => t("backgroundOpacity") ? te({ color: i, property: "background-color", variable: "--tw-bg-opacity" }) : { "background-color": F(i) } }, { values: J(e("backgroundColor")), type: "color" });
      }, backgroundOpacity: E("backgroundOpacity", [["bg-opacity", ["--tw-bg-opacity"]]]), backgroundImage: E("backgroundImage", [["bg", ["background-image"]]], { type: ["lookup", "image", "url"] }), gradientColorStops: (() => {
        function r(e) {
          return _e(e, 0, "rgb(255 255 255 / 0)");
        }
        return function({ matchUtilities: e, theme: t }) {
          let i = { values: J(t("gradientColorStops")), type: ["color", "any"] };
          e({ from: (s) => {
            let n = r(s);
            return { "--tw-gradient-from": F(s, "from"), "--tw-gradient-to": n, "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)" };
          } }, i), e({ via: (s) => ({ "--tw-gradient-to": r(s), "--tw-gradient-stops": `var(--tw-gradient-from), ${F(s, "via")}, var(--tw-gradient-to)` }) }, i), e({ to: (s) => ({ "--tw-gradient-to": F(s, "to") }) }, i);
        };
      })(), boxDecorationBreak: ({ addUtilities: r }) => {
        r({ ".decoration-slice": { "box-decoration-break": "slice" }, ".decoration-clone": { "box-decoration-break": "clone" }, ".box-decoration-slice": { "box-decoration-break": "slice" }, ".box-decoration-clone": { "box-decoration-break": "clone" } });
      }, backgroundSize: E("backgroundSize", [["bg", ["background-size"]]], { type: ["lookup", "length", "percentage"] }), backgroundAttachment: ({ addUtilities: r }) => {
        r({ ".bg-fixed": { "background-attachment": "fixed" }, ".bg-local": { "background-attachment": "local" }, ".bg-scroll": { "background-attachment": "scroll" } });
      }, backgroundClip: ({ addUtilities: r }) => {
        r({ ".bg-clip-border": { "background-clip": "border-box" }, ".bg-clip-padding": { "background-clip": "padding-box" }, ".bg-clip-content": { "background-clip": "content-box" }, ".bg-clip-text": { "background-clip": "text" } });
      }, backgroundPosition: E("backgroundPosition", [["bg", ["background-position"]]], { type: ["lookup", "position"] }), backgroundRepeat: ({ addUtilities: r }) => {
        r({ ".bg-repeat": { "background-repeat": "repeat" }, ".bg-no-repeat": { "background-repeat": "no-repeat" }, ".bg-repeat-x": { "background-repeat": "repeat-x" }, ".bg-repeat-y": { "background-repeat": "repeat-y" }, ".bg-repeat-round": { "background-repeat": "round" }, ".bg-repeat-space": { "background-repeat": "space" } });
      }, backgroundOrigin: ({ addUtilities: r }) => {
        r({ ".bg-origin-border": { "background-origin": "border-box" }, ".bg-origin-padding": { "background-origin": "padding-box" }, ".bg-origin-content": { "background-origin": "content-box" } });
      }, fill: ({ matchUtilities: r, theme: e }) => {
        r({ fill: (t) => ({ fill: F(t) }) }, { values: J(e("fill")), type: ["color", "any"] });
      }, stroke: ({ matchUtilities: r, theme: e }) => {
        r({ stroke: (t) => ({ stroke: F(t) }) }, { values: J(e("stroke")), type: ["color", "url"] });
      }, strokeWidth: E("strokeWidth", [["stroke", ["stroke-width"]]], { type: ["length", "number", "percentage"] }), objectFit: ({ addUtilities: r }) => {
        r({ ".object-contain": { "object-fit": "contain" }, ".object-cover": { "object-fit": "cover" }, ".object-fill": { "object-fit": "fill" }, ".object-none": { "object-fit": "none" }, ".object-scale-down": { "object-fit": "scale-down" } });
      }, objectPosition: E("objectPosition", [["object", ["object-position"]]]), padding: E("padding", [["p", ["padding"]], [["px", ["padding-left", "padding-right"]], ["py", ["padding-top", "padding-bottom"]]], [["pt", ["padding-top"]], ["pr", ["padding-right"]], ["pb", ["padding-bottom"]], ["pl", ["padding-left"]]]]), textAlign: ({ addUtilities: r }) => {
        r({ ".text-left": { "text-align": "left" }, ".text-center": { "text-align": "center" }, ".text-right": { "text-align": "right" }, ".text-justify": { "text-align": "justify" }, ".text-start": { "text-align": "start" }, ".text-end": { "text-align": "end" } });
      }, textIndent: E("textIndent", [["indent", ["text-indent"]]], { supportsNegativeValues: true }), verticalAlign: ({ addUtilities: r, matchUtilities: e }) => {
        r({ ".align-baseline": { "vertical-align": "baseline" }, ".align-top": { "vertical-align": "top" }, ".align-middle": { "vertical-align": "middle" }, ".align-bottom": { "vertical-align": "bottom" }, ".align-text-top": { "vertical-align": "text-top" }, ".align-text-bottom": { "vertical-align": "text-bottom" }, ".align-sub": { "vertical-align": "sub" }, ".align-super": { "vertical-align": "super" } }), e({ align: (t) => ({ "vertical-align": t }) });
      }, fontFamily: E("fontFamily", [["font", ["fontFamily"]]], { type: ["lookup", "generic-name", "family-name"] }), fontSize: ({ matchUtilities: r, theme: e }) => {
        r({ text: (t) => {
          let [i, s] = Array.isArray(t) ? t : [t], { lineHeight: n, letterSpacing: o, fontWeight: a } = De(s) ? s : { lineHeight: s };
          return { "font-size": i, ...n === void 0 ? {} : { "line-height": n }, ...o === void 0 ? {} : { "letter-spacing": o }, ...a === void 0 ? {} : { "font-weight": a } };
        } }, { values: e("fontSize"), type: ["absolute-size", "relative-size", "length", "percentage"] });
      }, fontWeight: E("fontWeight", [["font", ["fontWeight"]]], { type: ["lookup", "number"] }), textTransform: ({ addUtilities: r }) => {
        r({ ".uppercase": { "text-transform": "uppercase" }, ".lowercase": { "text-transform": "lowercase" }, ".capitalize": { "text-transform": "capitalize" }, ".normal-case": { "text-transform": "none" } });
      }, fontStyle: ({ addUtilities: r }) => {
        r({ ".italic": { "font-style": "italic" }, ".not-italic": { "font-style": "normal" } });
      }, fontVariantNumeric: ({ addDefaults: r, addUtilities: e }) => {
        let t = "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)";
        r("font-variant-numeric", { "--tw-ordinal": " ", "--tw-slashed-zero": " ", "--tw-numeric-figure": " ", "--tw-numeric-spacing": " ", "--tw-numeric-fraction": " " }), e({ ".normal-nums": { "font-variant-numeric": "normal" }, ".ordinal": { "@defaults font-variant-numeric": {}, "--tw-ordinal": "ordinal", "font-variant-numeric": t }, ".slashed-zero": { "@defaults font-variant-numeric": {}, "--tw-slashed-zero": "slashed-zero", "font-variant-numeric": t }, ".lining-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-figure": "lining-nums", "font-variant-numeric": t }, ".oldstyle-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-figure": "oldstyle-nums", "font-variant-numeric": t }, ".proportional-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-spacing": "proportional-nums", "font-variant-numeric": t }, ".tabular-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-spacing": "tabular-nums", "font-variant-numeric": t }, ".diagonal-fractions": { "@defaults font-variant-numeric": {}, "--tw-numeric-fraction": "diagonal-fractions", "font-variant-numeric": t }, ".stacked-fractions": { "@defaults font-variant-numeric": {}, "--tw-numeric-fraction": "stacked-fractions", "font-variant-numeric": t } });
      }, lineHeight: E("lineHeight", [["leading", ["lineHeight"]]]), letterSpacing: E("letterSpacing", [["tracking", ["letterSpacing"]]], { supportsNegativeValues: true }), textColor: ({ matchUtilities: r, theme: e, corePlugins: t }) => {
        r({ text: (i) => t("textOpacity") ? te({ color: i, property: "color", variable: "--tw-text-opacity" }) : { color: F(i) } }, { values: J(e("textColor")), type: "color" });
      }, textOpacity: E("textOpacity", [["text-opacity", ["--tw-text-opacity"]]]), textDecoration: ({ addUtilities: r }) => {
        r({ ".underline": { "text-decoration-line": "underline" }, ".overline": { "text-decoration-line": "overline" }, ".line-through": { "text-decoration-line": "line-through" }, ".no-underline": { "text-decoration-line": "none" } });
      }, textDecorationColor: ({ matchUtilities: r, theme: e }) => {
        r({ decoration: (t) => ({ "text-decoration-color": F(t) }) }, { values: J(e("textDecorationColor")), type: ["color"] });
      }, textDecorationStyle: ({ addUtilities: r }) => {
        r({ ".decoration-solid": { "text-decoration-style": "solid" }, ".decoration-double": { "text-decoration-style": "double" }, ".decoration-dotted": { "text-decoration-style": "dotted" }, ".decoration-dashed": { "text-decoration-style": "dashed" }, ".decoration-wavy": { "text-decoration-style": "wavy" } });
      }, textDecorationThickness: E("textDecorationThickness", [["decoration", ["text-decoration-thickness"]]], { type: ["length", "percentage"] }), textUnderlineOffset: E("textUnderlineOffset", [["underline-offset", ["text-underline-offset"]]], { type: ["length", "percentage"] }), fontSmoothing: ({ addUtilities: r }) => {
        r({ ".antialiased": { "-webkit-font-smoothing": "antialiased", "-moz-osx-font-smoothing": "grayscale" }, ".subpixel-antialiased": { "-webkit-font-smoothing": "auto", "-moz-osx-font-smoothing": "auto" } });
      }, placeholderColor: ({ matchUtilities: r, theme: e, corePlugins: t }) => {
        r({ placeholder: (i) => t("placeholderOpacity") ? { "&::placeholder": te({ color: i, property: "color", variable: "--tw-placeholder-opacity" }) } : { "&::placeholder": { color: F(i) } } }, { values: J(e("placeholderColor")), type: ["color", "any"] });
      }, placeholderOpacity: ({ matchUtilities: r, theme: e }) => {
        r({ "placeholder-opacity": (t) => ({ ["&::placeholder"]: { "--tw-placeholder-opacity": t } }) }, { values: e("placeholderOpacity") });
      }, caretColor: ({ matchUtilities: r, theme: e }) => {
        r({ caret: (t) => ({ "caret-color": F(t) }) }, { values: J(e("caretColor")), type: ["color", "any"] });
      }, accentColor: ({ matchUtilities: r, theme: e }) => {
        r({ accent: (t) => ({ "accent-color": F(t) }) }, { values: J(e("accentColor")), type: ["color", "any"] });
      }, opacity: E("opacity", [["opacity", ["opacity"]]]), backgroundBlendMode: ({ addUtilities: r }) => {
        r({ ".bg-blend-normal": { "background-blend-mode": "normal" }, ".bg-blend-multiply": { "background-blend-mode": "multiply" }, ".bg-blend-screen": { "background-blend-mode": "screen" }, ".bg-blend-overlay": { "background-blend-mode": "overlay" }, ".bg-blend-darken": { "background-blend-mode": "darken" }, ".bg-blend-lighten": { "background-blend-mode": "lighten" }, ".bg-blend-color-dodge": { "background-blend-mode": "color-dodge" }, ".bg-blend-color-burn": { "background-blend-mode": "color-burn" }, ".bg-blend-hard-light": { "background-blend-mode": "hard-light" }, ".bg-blend-soft-light": { "background-blend-mode": "soft-light" }, ".bg-blend-difference": { "background-blend-mode": "difference" }, ".bg-blend-exclusion": { "background-blend-mode": "exclusion" }, ".bg-blend-hue": { "background-blend-mode": "hue" }, ".bg-blend-saturation": { "background-blend-mode": "saturation" }, ".bg-blend-color": { "background-blend-mode": "color" }, ".bg-blend-luminosity": { "background-blend-mode": "luminosity" } });
      }, mixBlendMode: ({ addUtilities: r }) => {
        r({ ".mix-blend-normal": { "mix-blend-mode": "normal" }, ".mix-blend-multiply": { "mix-blend-mode": "multiply" }, ".mix-blend-screen": { "mix-blend-mode": "screen" }, ".mix-blend-overlay": { "mix-blend-mode": "overlay" }, ".mix-blend-darken": { "mix-blend-mode": "darken" }, ".mix-blend-lighten": { "mix-blend-mode": "lighten" }, ".mix-blend-color-dodge": { "mix-blend-mode": "color-dodge" }, ".mix-blend-color-burn": { "mix-blend-mode": "color-burn" }, ".mix-blend-hard-light": { "mix-blend-mode": "hard-light" }, ".mix-blend-soft-light": { "mix-blend-mode": "soft-light" }, ".mix-blend-difference": { "mix-blend-mode": "difference" }, ".mix-blend-exclusion": { "mix-blend-mode": "exclusion" }, ".mix-blend-hue": { "mix-blend-mode": "hue" }, ".mix-blend-saturation": { "mix-blend-mode": "saturation" }, ".mix-blend-color": { "mix-blend-mode": "color" }, ".mix-blend-luminosity": { "mix-blend-mode": "luminosity" }, ".mix-blend-plus-lighter": { "mix-blend-mode": "plus-lighter" } });
      }, boxShadow: (() => {
        let r = Le("boxShadow"), e = ["var(--tw-ring-offset-shadow, 0 0 #0000)", "var(--tw-ring-shadow, 0 0 #0000)", "var(--tw-shadow)"].join(", ");
        return function({ matchUtilities: t, addDefaults: i, theme: s }) {
          i(" box-shadow", { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" }), t({ shadow: (n) => {
            n = r(n);
            let o = ki(n);
            for (let a of o)
              !a.valid || (a.color = "var(--tw-shadow-color)");
            return { "@defaults box-shadow": {}, "--tw-shadow": n === "none" ? "0 0 #0000" : n, "--tw-shadow-colored": n === "none" ? "0 0 #0000" : pf(o), "box-shadow": e };
          } }, { values: s("boxShadow"), type: ["shadow"] });
        };
      })(), boxShadowColor: ({ matchUtilities: r, theme: e }) => {
        r({ shadow: (t) => ({ "--tw-shadow-color": F(t), "--tw-shadow": "var(--tw-shadow-colored)" }) }, { values: J(e("boxShadowColor")), type: ["color"] });
      }, outlineStyle: ({ addUtilities: r }) => {
        r({ ".outline-none": { outline: "2px solid transparent", "outline-offset": "2px" }, ".outline": { "outline-style": "solid" }, ".outline-dashed": { "outline-style": "dashed" }, ".outline-dotted": { "outline-style": "dotted" }, ".outline-double": { "outline-style": "double" }, ".outline-hidden": { "outline-style": "hidden" } });
      }, outlineWidth: E("outlineWidth", [["outline", ["outline-width"]]], { type: ["length", "number", "percentage"] }), outlineOffset: E("outlineOffset", [["outline-offset", ["outline-offset"]]], { type: ["length", "number", "percentage"] }), outlineColor: ({ matchUtilities: r, theme: e }) => {
        r({ outline: (t) => ({ "outline-color": F(t) }) }, { values: J(e("outlineColor")), type: ["color"] });
      }, ringWidth: ({ matchUtilities: r, addDefaults: e, addUtilities: t, theme: i, config: s }) => {
        let n = (() => {
          if (K(s(), "respectDefaultRingColorOpacity"))
            return i("ringColor.DEFAULT");
          let o = i("ringOpacity.DEFAULT", "0.5");
          return i("ringColor")?.DEFAULT ? _e(i("ringColor")?.DEFAULT, o, `rgb(147 197 253 / ${o})`) : `rgb(147 197 253 / ${o})`;
        })();
        e("ring-width", { "--tw-ring-inset": " ", "--tw-ring-offset-width": i("ringOffsetWidth.DEFAULT", "0px"), "--tw-ring-offset-color": i("ringOffsetColor.DEFAULT", "#fff"), "--tw-ring-color": n, "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" }), r({ ring: (o) => ({ "@defaults ring-width": {}, "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${o} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, "box-shadow": ["var(--tw-ring-offset-shadow)", "var(--tw-ring-shadow)", "var(--tw-shadow, 0 0 #0000)"].join(", ") }) }, { values: i("ringWidth"), type: "length" }), t({ ".ring-inset": { "@defaults ring-width": {}, "--tw-ring-inset": "inset" } });
      }, ringColor: ({ matchUtilities: r, theme: e, corePlugins: t }) => {
        r({ ring: (i) => t("ringOpacity") ? te({ color: i, property: "--tw-ring-color", variable: "--tw-ring-opacity" }) : { "--tw-ring-color": F(i) } }, { values: Object.fromEntries(Object.entries(J(e("ringColor"))).filter(([i]) => i !== "DEFAULT")), type: "color" });
      }, ringOpacity: (r) => {
        let { config: e } = r;
        return E("ringOpacity", [["ring-opacity", ["--tw-ring-opacity"]]], { filterDefault: !K(e(), "respectDefaultRingColorOpacity") })(r);
      }, ringOffsetWidth: E("ringOffsetWidth", [["ring-offset", ["--tw-ring-offset-width"]]], { type: "length" }), ringOffsetColor: ({ matchUtilities: r, theme: e }) => {
        r({ "ring-offset": (t) => ({ "--tw-ring-offset-color": F(t) }) }, { values: J(e("ringOffsetColor")), type: "color" });
      }, blur: ({ matchUtilities: r, theme: e }) => {
        r({ blur: (t) => ({ "--tw-blur": `blur(${t})`, "@defaults filter": {}, filter: Ee }) }, { values: e("blur") });
      }, brightness: ({ matchUtilities: r, theme: e }) => {
        r({ brightness: (t) => ({ "--tw-brightness": `brightness(${t})`, "@defaults filter": {}, filter: Ee }) }, { values: e("brightness") });
      }, contrast: ({ matchUtilities: r, theme: e }) => {
        r({ contrast: (t) => ({ "--tw-contrast": `contrast(${t})`, "@defaults filter": {}, filter: Ee }) }, { values: e("contrast") });
      }, dropShadow: ({ matchUtilities: r, theme: e }) => {
        r({ "drop-shadow": (t) => ({ "--tw-drop-shadow": Array.isArray(t) ? t.map((i) => `drop-shadow(${i})`).join(" ") : `drop-shadow(${t})`, "@defaults filter": {}, filter: Ee }) }, { values: e("dropShadow") });
      }, grayscale: ({ matchUtilities: r, theme: e }) => {
        r({ grayscale: (t) => ({ "--tw-grayscale": `grayscale(${t})`, "@defaults filter": {}, filter: Ee }) }, { values: e("grayscale") });
      }, hueRotate: ({ matchUtilities: r, theme: e }) => {
        r({ "hue-rotate": (t) => ({ "--tw-hue-rotate": `hue-rotate(${t})`, "@defaults filter": {}, filter: Ee }) }, { values: e("hueRotate"), supportsNegativeValues: true });
      }, invert: ({ matchUtilities: r, theme: e }) => {
        r({ invert: (t) => ({ "--tw-invert": `invert(${t})`, "@defaults filter": {}, filter: Ee }) }, { values: e("invert") });
      }, saturate: ({ matchUtilities: r, theme: e }) => {
        r({ saturate: (t) => ({ "--tw-saturate": `saturate(${t})`, "@defaults filter": {}, filter: Ee }) }, { values: e("saturate") });
      }, sepia: ({ matchUtilities: r, theme: e }) => {
        r({ sepia: (t) => ({ "--tw-sepia": `sepia(${t})`, "@defaults filter": {}, filter: Ee }) }, { values: e("sepia") });
      }, filter: ({ addDefaults: r, addUtilities: e }) => {
        r("filter", { "--tw-blur": " ", "--tw-brightness": " ", "--tw-contrast": " ", "--tw-grayscale": " ", "--tw-hue-rotate": " ", "--tw-invert": " ", "--tw-saturate": " ", "--tw-sepia": " ", "--tw-drop-shadow": " " }), e({ ".filter": { "@defaults filter": {}, filter: Ee }, ".filter-none": { filter: "none" } });
      }, backdropBlur: ({ matchUtilities: r, theme: e }) => {
        r({ "backdrop-blur": (t) => ({ "--tw-backdrop-blur": `blur(${t})`, "@defaults backdrop-filter": {}, "backdrop-filter": Oe }) }, { values: e("backdropBlur") });
      }, backdropBrightness: ({ matchUtilities: r, theme: e }) => {
        r({ "backdrop-brightness": (t) => ({ "--tw-backdrop-brightness": `brightness(${t})`, "@defaults backdrop-filter": {}, "backdrop-filter": Oe }) }, { values: e("backdropBrightness") });
      }, backdropContrast: ({ matchUtilities: r, theme: e }) => {
        r({ "backdrop-contrast": (t) => ({ "--tw-backdrop-contrast": `contrast(${t})`, "@defaults backdrop-filter": {}, "backdrop-filter": Oe }) }, { values: e("backdropContrast") });
      }, backdropGrayscale: ({ matchUtilities: r, theme: e }) => {
        r({ "backdrop-grayscale": (t) => ({ "--tw-backdrop-grayscale": `grayscale(${t})`, "@defaults backdrop-filter": {}, "backdrop-filter": Oe }) }, { values: e("backdropGrayscale") });
      }, backdropHueRotate: ({ matchUtilities: r, theme: e }) => {
        r({ "backdrop-hue-rotate": (t) => ({ "--tw-backdrop-hue-rotate": `hue-rotate(${t})`, "@defaults backdrop-filter": {}, "backdrop-filter": Oe }) }, { values: e("backdropHueRotate"), supportsNegativeValues: true });
      }, backdropInvert: ({ matchUtilities: r, theme: e }) => {
        r({ "backdrop-invert": (t) => ({ "--tw-backdrop-invert": `invert(${t})`, "@defaults backdrop-filter": {}, "backdrop-filter": Oe }) }, { values: e("backdropInvert") });
      }, backdropOpacity: ({ matchUtilities: r, theme: e }) => {
        r({ "backdrop-opacity": (t) => ({ "--tw-backdrop-opacity": `opacity(${t})`, "@defaults backdrop-filter": {}, "backdrop-filter": Oe }) }, { values: e("backdropOpacity") });
      }, backdropSaturate: ({ matchUtilities: r, theme: e }) => {
        r({ "backdrop-saturate": (t) => ({ "--tw-backdrop-saturate": `saturate(${t})`, "@defaults backdrop-filter": {}, "backdrop-filter": Oe }) }, { values: e("backdropSaturate") });
      }, backdropSepia: ({ matchUtilities: r, theme: e }) => {
        r({ "backdrop-sepia": (t) => ({ "--tw-backdrop-sepia": `sepia(${t})`, "@defaults backdrop-filter": {}, "backdrop-filter": Oe }) }, { values: e("backdropSepia") });
      }, backdropFilter: ({ addDefaults: r, addUtilities: e }) => {
        r("backdrop-filter", { "--tw-backdrop-blur": " ", "--tw-backdrop-brightness": " ", "--tw-backdrop-contrast": " ", "--tw-backdrop-grayscale": " ", "--tw-backdrop-hue-rotate": " ", "--tw-backdrop-invert": " ", "--tw-backdrop-opacity": " ", "--tw-backdrop-saturate": " ", "--tw-backdrop-sepia": " " }), e({ ".backdrop-filter": { "@defaults backdrop-filter": {}, "backdrop-filter": Oe }, ".backdrop-filter-none": { "backdrop-filter": "none" } });
      }, transitionProperty: ({ matchUtilities: r, theme: e }) => {
        let t = e("transitionTimingFunction.DEFAULT"), i = e("transitionDuration.DEFAULT");
        r({ transition: (s) => ({ "transition-property": s, ...s === "none" ? {} : { "transition-timing-function": t, "transition-duration": i } }) }, { values: e("transitionProperty") });
      }, transitionDelay: E("transitionDelay", [["delay", ["transitionDelay"]]]), transitionDuration: E("transitionDuration", [["duration", ["transitionDuration"]]], { filterDefault: true }), transitionTimingFunction: E("transitionTimingFunction", [["ease", ["transitionTimingFunction"]]], { filterDefault: true }), willChange: E("willChange", [["will-change", ["will-change"]]]), content: E("content", [["content", ["--tw-content", ["content", "var(--tw-content)"]]]]) };
    });
    function Dt(r) {
      let e = [], t = false;
      for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s === ":" && !t && e.length === 0)
          return false;
        if (Vk.has(s) && r[i - 1] !== "\\" && (t = !t), !t && r[i - 1] !== "\\") {
          if (Vp.has(s))
            e.push(s);
          else if (Wp.has(s)) {
            let n = Wp.get(s);
            if (e.length <= 0 || e.pop() !== n)
              return false;
          }
        }
      }
      return !(e.length > 0);
    }
    var Vp, Wp, Vk, Io = C(() => {
      l();
      Vp = /* @__PURE__ */ new Map([["{", "}"], ["[", "]"], ["(", ")"]]), Wp = new Map(Array.from(Vp.entries()).map(([r, e]) => [e, r])), Vk = /* @__PURE__ */ new Set(['"', "'", "`"]);
    });
    function Yp(r, ...e) {
      for (let t of e) {
        let i = Jp(t, as);
        if (i !== null && Jp(r, as, i) !== null) {
          let n = `${as}(${i})`, o = t.indexOf(n), a = t.slice(o + n.length).split(" ")[0];
          r = r.replace(n, n + a);
          continue;
        }
        r = t.replace(Hp, r);
      }
      return r;
    }
    function Qp(r, { selector: e, candidate: t, context: i, isArbitraryVariant: s, base: n = t.split(new RegExp(`\\${i?.tailwindConfig?.separator ?? ":"}(?![^[]*\\])`)).pop() }) {
      let o = (0, Ro.default)().astSync(e);
      i?.tailwindConfig?.prefix && !s && (r = Tt(i.tailwindConfig.prefix, r)), r = r.replace(Hp, `.${fe(t)}`);
      let a = (0, Ro.default)().astSync(r);
      o.each((f) => {
        f.some((d) => d.type === "class" && d.value === n) || f.remove();
      }), o.walkClasses((f) => {
        f.raws && f.value.includes(n) && (f.raws.value = fe((0, Gp.default)(f.raws.value)));
      }), o.walkClasses((f) => {
        f.value === n && f.replaceWith(...a.nodes);
      });
      function u(f) {
        let c = [];
        for (let d of f.nodes)
          Mo(d) && (c.push(d), f.removeChild(d)), d?.nodes && c.push(...u(d));
        return c;
      }
      return o.each((f) => {
        f.walkPseudos((d) => {
          Wk.has(d.value) && d.replaceWith(d.nodes);
        });
        let c = u(f);
        c.length > 0 && f.nodes.push(c.sort(Yk));
      }), o.toString();
    }
    function Yk(r, e) {
      return r.type !== "pseudo" && e.type !== "pseudo" || r.type === "combinator" ^ e.type === "combinator" ? 0 : r.type === "pseudo" ^ e.type === "pseudo" ? (r.type === "pseudo") - (e.type === "pseudo") : Mo(r) - Mo(e);
    }
    function Mo(r) {
      return r.type !== "pseudo" || Hk.includes(r.value) ? false : r.value.startsWith("::") || Gk.includes(r.value);
    }
    function Jp(r, e, t) {
      let i = r.indexOf(t ? `${e}(${t})` : e);
      if (i === -1)
        return null;
      i += e.length + 1;
      let s = "", n = 0;
      for (let o of r.slice(i))
        if (o !== "(" && o !== ")")
          s += o;
        else if (o === "(")
          s += o, n++;
        else if (o === ")") {
          if (--n < 0)
            break;
          s += o;
        }
      return s;
    }
    var Ro, Gp, as, Hp, Wk, Gk, Hk, Xp = C(() => {
      l();
      Ro = Y(Ce()), Gp = Y(oi());
      Pt();
      ts();
      as = ":merge", Hp = "&", Wk = /* @__PURE__ */ new Set([as]);
      Gk = [":before", ":after", ":first-line", ":first-letter"], Hk = ["::file-selector-button"];
    });
    function Jk(r) {
      return Qk.transformSync(r);
    }
    function* Xk(r) {
      let e = 1 / 0;
      for (; e >= 0; ) {
        let t;
        if (e === 1 / 0 && r.endsWith("]")) {
          let n = r.indexOf("[");
          t = ["-", "/"].includes(r[n - 1]) ? n - 1 : -1;
        } else
          t = r.lastIndexOf("-", e);
        if (t < 0)
          break;
        let i = r.slice(0, t), s = r.slice(t + 1);
        yield [i, s], e = t - 1;
      }
    }
    function Kk(r, e) {
      if (r.length === 0 || e.tailwindConfig.prefix === "")
        return r;
      for (let t of r) {
        let [i] = t;
        if (i.options.respectPrefix) {
          let s = U.root({ nodes: [t[1].clone()] }), n = t[1].raws.tailwind.classCandidate;
          s.walkRules((o) => {
            let a = n.startsWith("-");
            o.selector = Tt(e.tailwindConfig.prefix, o.selector, a);
          }), t[1] = s.nodes[0];
        }
      }
      return r;
    }
    function Zk(r, e) {
      if (r.length === 0)
        return r;
      let t = [];
      for (let [i, s] of r) {
        let n = U.root({ nodes: [s.clone()] });
        n.walkRules((o) => {
          o.selector = Af(o.selector, (a) => a === e ? `!${a}` : a), o.walkDecls((a) => a.important = true);
        }), t.push([{ ...i, important: true }, n.nodes[0]]);
      }
      return t;
    }
    function eS(r, e, t) {
      if (e.length === 0)
        return e;
      let i;
      if (r.endsWith("]") && !r.startsWith("[") && (i = r.slice(r.lastIndexOf("[") + 1, -1), r = r.slice(0, r.indexOf(i) - 1 - 1)), Bo(r) && !t.variantMap.has(r)) {
        let s = ae(r.slice(1, -1));
        if (!cs(s))
          return [];
        let n = Ur(s), o = Array.from(t.variantOrder.values()).pop() << 1n;
        t.variantMap.set(r, [[o, n]]), t.variantOrder.set(r, o);
      }
      if (t.variantMap.has(r)) {
        let s = t.variantMap.get(r).slice(), n = [];
        for (let [o, a] of e) {
          if (o.layer === "user")
            continue;
          let u = U.root({ nodes: [a.clone()] });
          for (let [f, c, d] of s) {
            let w = function() {
              p.raws.neededBackup || (p.raws.neededBackup = true, p.walkRules((k) => k.raws.originalSelector = k.selector));
            }, v = function(k) {
              return w(), p.each((T) => {
                T.type === "rule" && (T.selectors = T.selectors.map((P) => k({ get className() {
                  return Jk(P);
                }, selector: P })));
              }), p;
            }, p = d ?? u.clone(), h = [], b = c({ get container() {
              return w(), p;
            }, separator: t.tailwindConfig.separator, modifySelectors: v, wrap(k) {
              let T = p.nodes;
              p.removeAll(), k.append(T), p.append(k);
            }, format(k) {
              h.push(k);
            }, args: i });
            if (Array.isArray(b)) {
              for (let [k, T] of b.entries())
                s.push([f | BigInt(k << b.length), T, p.clone()]);
              continue;
            }
            if (typeof b == "string" && h.push(b), b === null)
              continue;
            p.raws.neededBackup && (delete p.raws.neededBackup, p.walkRules((k) => {
              let T = k.raws.originalSelector;
              if (!T || (delete k.raws.originalSelector, T === k.selector))
                return;
              let P = k.selector, I = (0, Lo.default)((V) => {
                V.walkClasses((L) => {
                  L.value = `${r}${t.tailwindConfig.separator}${L.value}`;
                });
              }).processSync(T);
              h.push(P.replace(I, "&")), k.selector = T;
            })), p.nodes[0].raws.tailwind = { ...p.nodes[0].raws.tailwind, parentLayer: o.layer };
            let x = [{ ...o, sort: f | o.sort, collectedFormats: (o.collectedFormats ?? []).concat(h), isArbitraryVariant: Bo(r) }, p.nodes[0]];
            n.push(x);
          }
        }
        return n;
      }
      return [];
    }
    function Fo(r, e, t = {}) {
      return !De(r) && !Array.isArray(r) ? [[r], t] : Array.isArray(r) ? Fo(r[0], e, r[1]) : (e.has(r) || e.set(r, Ot(r)), [e.get(r), t]);
    }
    function rS(r) {
      return tS.test(r);
    }
    function iS(r) {
      if (!r.includes("://"))
        return false;
      try {
        let e = new URL(r);
        return e.scheme !== "" && e.host !== "";
      } catch (e) {
        return false;
      }
    }
    function sS(r) {
      let e = true;
      return r.walkDecls((t) => {
        if (!Kp(t.name, t.value))
          return e = false, false;
      }), e;
    }
    function Kp(r, e) {
      if (iS(`${r}:${e}`))
        return false;
      try {
        return U.parse(`a{${r}:${e}}`).toResult(), true;
      } catch (t) {
        return false;
      }
    }
    function nS(r, e) {
      let [, t, i] = r.match(/^\[([a-zA-Z0-9-_]+):(\S+)\]$/) ?? [];
      if (i === void 0 || !rS(t) || !Dt(i))
        return null;
      let s = ae(i);
      return Kp(t, s) ? [[{ sort: e.arbitraryPropertiesSort, layer: "utilities" }, () => ({ [Po(r)]: { [t]: s } })]] : null;
    }
    function* oS(r, e) {
      e.candidateRuleMap.has(r) && (yield [e.candidateRuleMap.get(r), "DEFAULT"]), yield* function* (a) {
        a !== null && (yield [a, "DEFAULT"]);
      }(nS(r, e));
      let t = r, i = false, s = e.tailwindConfig.prefix, n = s.length, o = t.startsWith(s) || t.startsWith(`-${s}`);
      t[n] === "-" && o && (i = true, t = s + t.slice(n + 1)), i && e.candidateRuleMap.has(t) && (yield [e.candidateRuleMap.get(t), "-DEFAULT"]);
      for (let [a, u] of Xk(t))
        e.candidateRuleMap.has(a) && (yield [e.candidateRuleMap.get(a), i ? `-${u}` : u]);
    }
    function aS(r, e) {
      return r === Re ? [Re] : Array.from(Sr(r, e));
    }
    function* lS(r, e) {
      for (let t of r)
        t[1].raws.tailwind = { ...t[1].raws.tailwind, classCandidate: e, preserveSource: t[0].options?.preserveSource ?? false }, yield t;
    }
    function* ls(r, e, t = r) {
      let i = e.tailwindConfig.separator, [s, ...n] = aS(r, i).reverse(), o = false;
      if (s.startsWith("!") && (o = true, s = s.slice(1)), K(e.tailwindConfig, "variantGrouping") && s.startsWith("(") && s.endsWith(")")) {
        let a = n.slice().reverse().join(i);
        for (let u of Sr(s.slice(1, -1), ","))
          yield* ls(a + i + u, e, t);
      }
      for (let a of oS(s, e)) {
        let u = [], f = /* @__PURE__ */ new Map(), [c, d] = a, p = c.length === 1;
        for (let [h, w] of c) {
          let v = [];
          if (typeof w == "function")
            for (let b of [].concat(w(d, { isOnlyPlugin: p }))) {
              let [x, k] = Fo(b, e.postCssNodeCache);
              for (let T of x)
                v.push([{ ...h, options: { ...h.options, ...k } }, T]);
            }
          else if (d === "DEFAULT" || d === "-DEFAULT") {
            let b = w, [x, k] = Fo(b, e.postCssNodeCache);
            for (let T of x)
              v.push([{ ...h, options: { ...h.options, ...k } }, T]);
          }
          v.length > 0 && (f.set(v, h.options?.type), u.push(v));
        }
        if (Bo(d)) {
          if (u.length > 1) {
            let h = u.map((v) => /* @__PURE__ */ new Set([...f.get(v) ?? []]));
            for (let v of h)
              for (let b of v) {
                let x = false;
                for (let k of h)
                  v !== k && k.has(b) && (k.delete(b), x = true);
                x && v.delete(b);
              }
            let w = [];
            for (let [v, b] of h.entries())
              for (let x of b) {
                let k = u[v].map(([, T]) => T).flat().map((T) => T.toString().split(`
`).slice(1, -1).map((P) => P.trim()).map((P) => `      ${P}`).join(`
`)).join(`

`);
                w.push(`  Use \`${r.replace("[", `[${x}:`)}\` for \`${k.trim()}\``);
                break;
              }
            W.warn([`The class \`${r}\` is ambiguous and matches multiple utilities.`, ...w, `If this is content and not a class, replace it with \`${r.replace("[", "&lsqb;").replace("]", "&rsqb;")}\` to silence this warning.`]);
            continue;
          }
          u = u.map((h) => h.filter((w) => sS(w[1])));
        }
        u = u.flat(), u = Array.from(lS(u, s)), u = Kk(u, e), o && (u = Zk(u, s));
        for (let h of n)
          u = eS(h, u, e);
        for (let h of u) {
          if (h[1].raws.tailwind = { ...h[1].raws.tailwind, candidate: r }, h[0].collectedFormats) {
            let w = Yp("&", ...h[0].collectedFormats), v = U.root({ nodes: [h[1].clone()] });
            v.walkRules((b) => {
              No(b) || (b.selector = Qp(w, { selector: b.selector, candidate: t, base: r.split(new RegExp(`\\${e?.tailwindConfig?.separator ?? ":"}(?![^[]*\\])`)).pop(), isArbitraryVariant: h[0].isArbitraryVariant, context: e }));
            }), h[1] = v.nodes[0];
          }
          yield h;
        }
      }
    }
    function No(r) {
      return r.parent && r.parent.type === "atrule" && r.parent.name === "keyframes";
    }
    function us(r, e) {
      let t = [];
      for (let s of r) {
        if (e.notClassCache.has(s))
          continue;
        if (e.classCache.has(s)) {
          t.push(e.classCache.get(s));
          continue;
        }
        let n = Array.from(ls(s, e));
        if (n.length === 0) {
          e.notClassCache.add(s);
          continue;
        }
        e.classCache.set(s, n), t.push(n);
      }
      let i = ((s) => {
        if (s === true)
          return (n) => {
            n.walkDecls((o) => {
              o.parent.type === "rule" && !No(o.parent) && (o.important = true);
            });
          };
        if (typeof s == "string")
          return (n) => {
            n.selectors = n.selectors.map((o) => `${s} ${o}`);
          };
      })(e.tailwindConfig.important);
      return t.flat(1).map(([{ sort: s, layer: n, options: o }, a]) => {
        if (o.respectImportant && i) {
          let u = U.root({ nodes: [a.clone()] });
          u.walkRules((f) => {
            No(f) || i(f);
          }), a = u.nodes[0];
        }
        return [s | e.layerOrder[n], a];
      });
    }
    function Bo(r) {
      return r.startsWith("[") && r.endsWith("]");
    }
    var Lo, Qk, tS, fs = C(() => {
      l();
      Ye();
      Lo = Y(Ce());
      To();
      Kt();
      ts();
      _r();
      ke();
      Ge();
      Xp();
      Do();
      $n();
      ps();
      Io();
      Mn();
      We();
      Qk = (0, Lo.default)((r) => r.first.filter(({ type: e }) => e === "class").pop().value);
      tS = /^[a-z_-]/;
    });
    function uS(r) {
      try {
        return ht.createHash("md5").update(r, "utf-8").digest("binary");
      } catch (e) {
        return "";
      }
    }
    function Zp(r, e) {
      let t = e.toString();
      if (!t.includes("@tailwind"))
        return false;
      let i = Yn.get(r), s = uS(t), n = i !== s;
      return Yn.set(r, s), n;
    }
    var ed = C(() => {
      l();
      Zr();
      Ge();
    });
    function sd(r, e) {
      let t = r.tailwindConfig.prefix;
      return typeof t == "function" ? t(e) : t + e;
    }
    function nd(r) {
      if (r.includes("{")) {
        if (!fS(r))
          throw new Error("Your { and } are unbalanced.");
        return r.split(/{(.*)}/gim).flatMap((e) => nd(e)).filter(Boolean);
      }
      return [r.trim()];
    }
    function fS(r) {
      let e = 0;
      for (let t of r)
        if (t === "{")
          e++;
        else if (t === "}" && --e < 0)
          return false;
      return e === 0;
    }
    function cS(r, e, { before: t = [] } = {}) {
      if (t = [].concat(t), t.length <= 0) {
        r.push(e);
        return;
      }
      let i = r.length - 1;
      for (let s of t) {
        let n = r.indexOf(s);
        n !== -1 && (i = Math.min(i, n));
      }
      r.splice(i, 0, e);
    }
    function od(r) {
      return Array.isArray(r) ? r.flatMap((e) => !Array.isArray(e) && !De(e) ? e : Ot(e)) : od([r]);
    }
    function ad(r, e) {
      return (0, rd.default)((i) => {
        let s = [];
        return e && e(i), i.walkClasses((n) => {
          s.push(n.value);
        }), s;
      }).transformSync(r);
    }
    function pS(r, e = { containsNonOnDemandable: false }, t = 0) {
      let i = [];
      if (r.type === "rule") {
        let s = function(n) {
          n.walkPseudos((o) => {
            o.value === ":not" && o.remove();
          });
        };
        for (let n of r.selectors) {
          let o = ad(n, s);
          o.length === 0 && (e.containsNonOnDemandable = true);
          for (let a of o)
            i.push(a);
        }
      } else
        r.type === "atrule" && r.walkRules((s) => {
          for (let n of s.selectors.flatMap((o) => ad(o)))
            i.push(n);
        });
      return t === 0 ? [e.containsNonOnDemandable || i.length === 0, i] : i;
    }
    function ds(r) {
      return od(r).flatMap((e) => {
        let t = /* @__PURE__ */ new Map(), [i, s] = pS(e);
        return i && s.unshift(Re), s.map((n) => (t.has(e) || t.set(e, e), [n, t.get(e)]));
      });
    }
    function cs(r) {
      return r.startsWith("@") || r.includes("&");
    }
    function Ur(r) {
      r = r.replace(/\n+/g, "").replace(/\s{1,}/g, " ").trim();
      let e = nd(r).map((t) => {
        if (!t.startsWith("@"))
          return ({ format: n }) => n(t);
        let [, i, s] = /@(.*?)( .+|[({].*)/g.exec(t);
        return ({ wrap: n }) => n(U.atRule({ name: i, params: s.trim() }));
      }).reverse();
      return (t) => {
        for (let i of e)
          i(t);
      };
    }
    function dS(r, e, { variantList: t, variantMap: i, offsets: s, classList: n }) {
      function o(p, h) {
        return p ? (0, td.default)(r, p, h) : r;
      }
      function a(p) {
        return Tt(r.prefix, p);
      }
      function u(p, h) {
        return p === Re ? Re : h.respectPrefix ? e.tailwindConfig.prefix + p : p;
      }
      function f(p, h, w = {}) {
        let [v, ...b] = $e(p), x = o(["theme", v, ...b], h);
        return Le(v)(x, w);
      }
      let c = Object.assign((p, h = void 0) => f(p, h), { withAlpha: (p, h) => f(p, void 0, { opacityValue: h }) }), d = { postcss: U, prefix: a, e: fe, config: o, theme: c, corePlugins: (p) => Array.isArray(r.corePlugins) ? r.corePlugins.includes(p) : o(["corePlugins", p], true), variants: () => [], addBase(p) {
        for (let [h, w] of ds(p)) {
          let v = u(h, {}), b = s.base++;
          e.candidateRuleMap.has(v) || e.candidateRuleMap.set(v, []), e.candidateRuleMap.get(v).push([{ sort: b, layer: "base" }, w]);
        }
      }, addDefaults(p, h) {
        let w = { [`@defaults ${p}`]: h };
        for (let [v, b] of ds(w)) {
          let x = u(v, {});
          e.candidateRuleMap.has(x) || e.candidateRuleMap.set(x, []), e.candidateRuleMap.get(x).push([{ sort: s.base++, layer: "defaults" }, b]);
        }
      }, addComponents(p, h) {
        h = Object.assign({}, { preserveSource: false, respectPrefix: true, respectImportant: false }, Array.isArray(h) ? {} : h);
        for (let [v, b] of ds(p)) {
          let x = u(v, h);
          n.add(x), e.candidateRuleMap.has(x) || e.candidateRuleMap.set(x, []), e.candidateRuleMap.get(x).push([{ sort: s.components++, layer: "components", options: h }, b]);
        }
      }, addUtilities(p, h) {
        h = Object.assign({}, { preserveSource: false, respectPrefix: true, respectImportant: true }, Array.isArray(h) ? {} : h);
        for (let [v, b] of ds(p)) {
          let x = u(v, h);
          n.add(x), e.candidateRuleMap.has(x) || e.candidateRuleMap.set(x, []), e.candidateRuleMap.get(x).push([{ sort: s.utilities++, layer: "utilities", options: h }, b]);
        }
      }, matchUtilities: function(p, h) {
        h = { ...{ respectPrefix: true, respectImportant: true }, ...h };
        let v = s.utilities++;
        for (let b in p) {
          let T = function(I, { isOnlyPlugin: V }) {
            let { type: L = "any" } = h;
            L = [].concat(L);
            let [R, Q] = jn(L, I, h, r);
            return R === void 0 ? [] : !L.includes(Q) && !V ? [] : Dt(R) ? [].concat(k(R)).filter(Boolean).map((ze) => ({ [rs(b, I)]: ze })) : [];
          }, x = u(b, h), k = p[b];
          n.add([x, h]);
          let P = [{ sort: v, layer: "utilities", options: h }, T];
          e.candidateRuleMap.has(x) || e.candidateRuleMap.set(x, []), e.candidateRuleMap.get(x).push(P);
        }
      }, matchComponents: function(p, h) {
        h = { ...{ respectPrefix: true, respectImportant: false }, ...h };
        let v = s.components++;
        for (let b in p) {
          let T = function(I, { isOnlyPlugin: V }) {
            let { type: L = "any" } = h;
            L = [].concat(L);
            let [R, Q] = jn(L, I, h, r);
            if (R === void 0)
              return [];
            if (!L.includes(Q))
              if (V)
                W.warn([`Unnecessary typehint \`${Q}\` in \`${b}-${I}\`.`, `You can safely update it to \`${b}-${I.replace(Q + ":", "")}\`.`]);
              else
                return [];
            return Dt(R) ? [].concat(k(R)).filter(Boolean).map((ze) => ({ [rs(b, I)]: ze })) : [];
          }, x = u(b, h), k = p[b];
          n.add([x, h]);
          let P = [{ sort: v, layer: "components", options: h }, T];
          e.candidateRuleMap.has(x) || e.candidateRuleMap.set(x, []), e.candidateRuleMap.get(x).push(P);
        }
      }, addVariant(p, h, w = {}) {
        h = [].concat(h).map((v) => {
          if (typeof v != "string")
            return (b) => {
              let { args: x, modifySelectors: k, container: T, separator: P, wrap: I, format: V } = b, L = v(Object.assign({ modifySelectors: k, container: T, separator: P }, v[id] && { args: x, wrap: I, format: V }));
              if (typeof L == "string" && !cs(L))
                throw new Error(`Your custom variant \`${p}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
              return Array.isArray(L) ? L.filter((R) => typeof R == "string").map((R) => Ur(R)) : L && typeof L == "string" && Ur(L)(b);
            };
          if (!cs(v))
            throw new Error(`Your custom variant \`${p}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
          return Ur(v);
        }), cS(t, p, w), i.set(p, h);
      } };
      return K(r, "matchVariant") && (d.matchVariant = function(p, h) {
        for (let w in p) {
          for (let [v, b] of Object.entries(h?.values ?? {}))
            d.addVariant(`${w}-${v}`, p[w](b));
          d.addVariant(w, Object.assign(({ args: v }) => p[w](v), { [id]: true }), h);
        }
      }), d;
    }
    function hs(r) {
      return zo.has(r) || zo.set(r, /* @__PURE__ */ new Map()), zo.get(r);
    }
    function ld(r, e) {
      let t = false;
      for (let i of r) {
        if (!i)
          continue;
        let s = Qn.parse(i), n = s.hash ? s.href.replace(s.hash, "") : s.href;
        n = s.search ? n.replace(s.search, "") : n;
        let o = ve.statSync(decodeURIComponent(n), { throwIfNoEntry: false })?.mtimeMs;
        !o || ((!e.has(i) || o > e.get(i)) && (t = true), e.set(i, o));
      }
      return t;
    }
    function ud(r) {
      r.walkAtRules((e) => {
        ["responsive", "variants"].includes(e.name) && (ud(e), e.before(e.nodes), e.remove());
      });
    }
    function hS(r) {
      let e = [];
      return r.each((t) => {
        t.type === "atrule" && ["responsive", "variants"].includes(t.name) && (t.name = "layer", t.params = "utilities");
      }), r.walkAtRules("layer", (t) => {
        if (ud(t), t.params === "base") {
          for (let i of t.nodes)
            e.push(function({ addBase: s }) {
              s(i, { respectPrefix: false });
            });
          t.remove();
        } else if (t.params === "components") {
          for (let i of t.nodes)
            e.push(function({ addComponents: s }) {
              s(i, { respectPrefix: false, preserveSource: true });
            });
          t.remove();
        } else if (t.params === "utilities") {
          for (let i of t.nodes)
            e.push(function({ addUtilities: s }) {
              s(i, { respectPrefix: false, preserveSource: true });
            });
          t.remove();
        }
      }), e;
    }
    function mS(r, e) {
      let t = Object.entries({ ...be, ...jp }).map(([a, u]) => r.tailwindConfig.corePlugins.includes(a) ? u : null).filter(Boolean), i = r.tailwindConfig.plugins.map((a) => (a.__isOptionsFunction && (a = a()), typeof a == "function" ? a : a.handler)), s = hS(e), n = [be.pseudoElementVariants, be.pseudoClassVariants], o = [be.directionVariants, be.reducedMotionVariants, be.prefersContrastVariants, be.darkVariants, be.printVariant, be.screenVariants, be.orientationVariants];
      return [...t, ...n, ...i, ...o, ...s];
    }
    function gS(r, e) {
      let t = [], i = /* @__PURE__ */ new Map(), s = { defaults: 0n, base: 0n, components: 0n, utilities: 0n, user: 0n }, n = /* @__PURE__ */ new Set(), o = dS(e.tailwindConfig, e, { variantList: t, variantMap: i, offsets: s, classList: n });
      for (let p of r)
        if (Array.isArray(p))
          for (let h of p)
            h(o);
        else
          p?.(o);
      let a = ((p) => p.reduce((h, w) => w > h ? w : h))([s.base, s.defaults, s.components, s.utilities, s.user]), u = BigInt(a.toString(2).length);
      e.arbitraryPropertiesSort = (1n << u << 0n) - 1n, e.layerOrder = { defaults: 1n << u << 0n, base: 1n << u << 1n, components: 1n << u << 2n, utilities: 1n << u << 3n, user: 1n << u << 4n }, u += 5n;
      let f = 0;
      e.variantOrder = new Map(t.map((p, h) => {
        let w = i.get(p).length, v = 1n << BigInt(h + f) << u;
        return f += w - 1, [p, v];
      }).sort(([, p], [, h]) => lt(p - h))), e.minimumScreen = [...e.variantOrder.values()].shift();
      for (let [p, h] of i.entries()) {
        let w = e.variantOrder.get(p);
        e.variantMap.set(p, h.map((v, b) => [w << BigInt(b), v]));
      }
      let c = (e.tailwindConfig.safelist ?? []).filter(Boolean);
      if (c.length > 0) {
        let p = [];
        for (let h of c) {
          if (typeof h == "string") {
            e.changedContent.push({ content: h, extension: "html" });
            continue;
          }
          if (h instanceof RegExp) {
            W.warn("root-regex", ["Regular expressions in `safelist` work differently in Tailwind CSS v3.0.", "Update your `safelist` configuration to eliminate this warning.", "https://tailwindcss.com/docs/content-configuration#safelisting-classes"]);
            continue;
          }
          p.push(h);
        }
        if (p.length > 0) {
          let h = /* @__PURE__ */ new Map(), w = e.tailwindConfig.prefix.length;
          for (let v of n) {
            let b = Array.isArray(v) ? (() => {
              let [x, k] = v, P = Object.keys(k?.values ?? {}).map((I) => jr(x, I));
              return k?.supportsNegativeValues && (P = [...P, ...P.map((I) => "-" + I)], P = [...P, ...P.map((I) => I.slice(0, w) + "-" + I.slice(w))]), [].concat(k?.type).includes("color") && (P = [...P, ...P.flatMap((I) => Object.keys(e.tailwindConfig.theme.opacity).map((V) => `${I}/${V}`))]), P;
            })() : [v];
            for (let x of b)
              for (let { pattern: k, variants: T = [] } of p)
                if (k.lastIndex = 0, h.has(k) || h.set(k, 0), !!k.test(x)) {
                  h.set(k, h.get(k) + 1), e.changedContent.push({ content: x, extension: "html" });
                  for (let P of T)
                    e.changedContent.push({ content: P + e.tailwindConfig.separator + x, extension: "html" });
                }
          }
          for (let [v, b] of h.entries())
            b === 0 && W.warn([`The safelist pattern \`${v}\` doesn't match any Tailwind CSS classes.`, "Fix this pattern or remove it from your `safelist` configuration.", "https://tailwindcss.com/docs/content-configuration#safelisting-classes"]);
        }
      }
      let d = /* @__PURE__ */ new Set([sd(e, "group"), sd(e, "peer")]);
      e.getClassOrder = function(h) {
        let w = /* @__PURE__ */ new Map();
        for (let [v, b] of us(new Set(h), e))
          w.has(b.raws.tailwind.candidate) || w.set(b.raws.tailwind.candidate, v);
        return h.map((v) => {
          let b = w.get(v) ?? null;
          return b === null && d.has(v) && (b = e.layerOrder.components), [v, b];
        });
      }, e.getClassList = function() {
        let h = [];
        for (let w of n)
          if (Array.isArray(w)) {
            let [v, b] = w, x = [];
            for (let [k, T] of Object.entries(b?.values ?? {}))
              h.push(jr(v, k)), b?.supportsNegativeValues && st(T) && x.push(jr(v, `-${k}`));
            h.push(...x);
          } else
            h.push(w);
        return h;
      };
    }
    function $o(r, e = [], t = U.root()) {
      let i = { disposables: [], ruleCache: /* @__PURE__ */ new Set(), classCache: /* @__PURE__ */ new Map(), applyClassCache: /* @__PURE__ */ new Map(), notClassCache: /* @__PURE__ */ new Set(), postCssNodeCache: /* @__PURE__ */ new Map(), candidateRuleMap: /* @__PURE__ */ new Map(), tailwindConfig: r, changedContent: e, variantMap: /* @__PURE__ */ new Map(), stylesheetCache: null }, s = mS(i, t);
      return gS(s, i), i;
    }
    function fd(r, e, t, i, s, n) {
      let o = e.opts.from, a = i !== null;
      we.DEBUG && console.log("Source path:", o);
      let u;
      if (a && qt.has(o))
        u = qt.get(o);
      else if (Vr.has(s)) {
        let d = Vr.get(s);
        Je.get(d).add(o), qt.set(o, d), u = d;
      }
      let f = Zp(o, r);
      if (u && !ld([...n], hs(u)) && !f)
        return [u, false];
      if (qt.has(o)) {
        let d = qt.get(o);
        if (Je.has(d) && (Je.get(d).delete(o), Je.get(d).size === 0)) {
          Je.delete(d);
          for (let [p, h] of Vr)
            h === d && Vr.delete(p);
          for (let p of d.disposables.splice(0))
            p(d);
        }
      }
      we.DEBUG && console.log("Setting up new context...");
      let c = $o(t, [], r);
      return ld([...n], hs(c)), Vr.set(s, c), qt.set(o, c), Je.has(c) || Je.set(c, /* @__PURE__ */ new Set()), Je.get(c).add(o), [c, true];
    }
    var td, rd, id, zo, qt, Vr, Je, ps = C(() => {
      l();
      dt();
      Jn();
      Ye();
      td = Y(bo()), rd = Y(Ce());
      We();
      zr();
      To();
      ts();
      Kt();
      Pt();
      Do();
      _r();
      is();
      Up();
      Ge();
      Ge();
      ii();
      ke();
      ei();
      Io();
      fs();
      ed();
      id = Symbol();
      zo = /* @__PURE__ */ new WeakMap();
      qt = jf, Vr = Uf, Je = Oi;
    });
    var cd, pd = C(() => {
      l();
      cd = () => false;
    });
    var dd, hd = C(() => {
      l();
      dd = () => "";
    });
    function wS(r) {
      let e = r, t = dd(r);
      return t !== "." && (e = r.substr(t.length), e.charAt(0) === "/" && (e = e.substr(1))), e.substr(0, 2) === "./" && (e = e.substr(2)), e.charAt(0) === "/" && (e = e.substr(1)), { base: t, glob: e };
    }
    function jo(r) {
      if (r.startsWith("!"))
        return null;
      let e;
      if (cd(r)) {
        let { base: t, glob: i } = wS(r);
        e = { type: "dir-dependency", dir: ie.resolve(t), glob: i };
      } else
        e = { type: "dependency", file: ie.resolve(r) };
      return e.type === "dir-dependency" && m.env.ROLLUP_WATCH === "true" && (e = { type: "dependency", file: e.dir }), e;
    }
    var md = C(() => {
      l();
      pd();
      hd();
      it();
    });
    function Uo(r) {
      return r.content.files.length === 0 && W.warn("content-problems", ["The `content` option in your Tailwind CSS configuration is missing or empty.", "Configure your content sources or your generated CSS will be missing styles.", "https://tailwindcss.com/docs/content-configuration"]), r;
    }
    var gd = C(() => {
      l();
      ke();
    });
    function yS(r, e) {
      if (Vo.has(r))
        return Vo.get(r);
      let t = e.content.files.filter((i) => typeof i == "string").map((i) => Rl(i));
      return Vo.set(r, t).get(r);
    }
    function bS(r) {
      let e = Hn(r);
      if (e !== null) {
        let [i, s, n, o] = yd.get(e) || [], a = Ds(e).map((p) => p.file), u = false, f = /* @__PURE__ */ new Map();
        for (let p of a) {
          let h = ve.statSync(p).mtimeMs;
          f.set(p, h), (!o || !o.has(p) || h > o.get(p)) && (u = true);
        }
        if (!u)
          return [i, e, s, n];
        for (let p of a)
          delete Ts.cache[p];
        let c = Or(Ts(e));
        c = Uo(c);
        let d = Kr(c);
        return yd.set(e, [c, d, a, f]), [c, e, d, a];
      }
      let t = Or(r.config === void 0 ? r : r.config);
      return t = Uo(t), [t, null, Kr(t), []];
    }
    function xS(r, e, t) {
      let i = r.tailwindConfig.content.files.filter((s) => typeof s.raw == "string").map(({ raw: s, extension: n = "html" }) => ({ content: s, extension: n }));
      for (let s of vS(e, t)) {
        let n = ve.readFileSync(s, "utf8"), o = ie.extname(s).slice(1);
        i.push({ content: n, extension: o });
      }
      return i;
    }
    function vS(r, e) {
      let t = /* @__PURE__ */ new Set();
      we.DEBUG && console.time("Finding changed files");
      let i = Pl.sync(r);
      for (let s of i) {
        let n = e.has(s) ? e.get(s) : -1 / 0, o = ve.statSync(s).mtimeMs;
        o > n && (t.add(s), e.set(s, o));
      }
      return we.DEBUG && console.timeEnd("Finding changed files"), t;
    }
    function Wo(r) {
      return ({ tailwindDirectives: e, registerDependency: t }) => (i, s) => {
        let [n, o, a, u] = bS(r), f = new Set(u);
        if (e.size > 0) {
          f.add(s.opts.from);
          for (let p of s.messages)
            p.type === "dependency" && f.add(p.file);
        }
        let [c] = fd(i, s, n, o, a, f), d = yS(c, n);
        if (e.size > 0) {
          let p = hs(c);
          for (let h of d) {
            let w = jo(h);
            w && t(w);
          }
          for (let h of xS(c, d, p))
            c.changedContent.push(h);
        }
        for (let p of u)
          t({ type: "dependency", file: p });
        return c;
      };
    }
    var wd, yd, Vo, bd = C(() => {
      l();
      dt();
      it();
      Dl();
      wd = Y(Ps());
      Ml();
      Nl();
      zl();
      Gn();
      $f();
      Ge();
      ps();
      md();
      gd();
      yd = new wd.default({ maxSize: 100 }), Vo = /* @__PURE__ */ new WeakMap();
    });
    function Go(r) {
      let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
      if (r.walkAtRules((s) => {
        s.name === "apply" && i.add(s), s.name === "import" && (s.params === '"tailwindcss/base"' || s.params === "'tailwindcss/base'" ? (s.name = "tailwind", s.params = "base") : s.params === '"tailwindcss/components"' || s.params === "'tailwindcss/components'" ? (s.name = "tailwind", s.params = "components") : s.params === '"tailwindcss/utilities"' || s.params === "'tailwindcss/utilities'" ? (s.name = "tailwind", s.params = "utilities") : (s.params === '"tailwindcss/screens"' || s.params === "'tailwindcss/screens'" || s.params === '"tailwindcss/variants"' || s.params === "'tailwindcss/variants'") && (s.name = "tailwind", s.params = "variants")), s.name === "tailwind" && (s.params === "screens" && (s.params = "variants"), e.add(s.params)), ["layer", "responsive", "variants"].includes(s.name) && (["responsive", "variants"].includes(s.name) && W.warn(`${s.name}-at-rule-deprecated`, [`The \`@${s.name}\` directive has been deprecated in Tailwind CSS v3.0.`, "Use `@layer utilities` or `@layer components` instead.", "https://tailwindcss.com/docs/upgrade-guide#replace-variants-with-layer"]), t.add(s));
      }), !e.has("base") || !e.has("components") || !e.has("utilities")) {
        for (let s of t)
          if (s.name === "layer" && ["base", "components", "utilities"].includes(s.params)) {
            if (!e.has(s.params))
              throw s.error(`\`@layer ${s.params}\` is used but no matching \`@tailwind ${s.params}\` directive is present.`);
          } else if (s.name === "responsive") {
            if (!e.has("utilities"))
              throw s.error("`@responsive` is used but `@tailwind utilities` is missing.");
          } else if (s.name === "variants" && !e.has("utilities"))
            throw s.error("`@variants` is used but `@tailwind utilities` is missing.");
      }
      return { tailwindDirectives: e, applyDirectives: i };
    }
    var xd = C(() => {
      l();
      ke();
    });
    function ft(r, e = void 0, t = void 0) {
      return r.map((i) => {
        let s = i.clone(), n = i.raws.tailwind?.preserveSource !== true || !s.source;
        return e !== void 0 && n && (s.source = e, "walk" in s && s.walk((o) => {
          o.source = e;
        })), t !== void 0 && (s.raws.tailwind = { ...s.raws.tailwind, ...t }), s;
      });
    }
    var vd = C(() => {
      l();
    });
    function kd(r) {
      let e = Array.from(kS(r));
      return (t) => {
        let i = [];
        for (let s of e)
          i = [...i, ...t.match(s) ?? []];
        return i.filter((s) => s !== void 0).map(_S);
      };
    }
    function* kS(r) {
      let e = r.tailwindConfig.separator, t = K(r.tailwindConfig, "variantGrouping"), i = r.tailwindConfig.prefix !== "" ? In(ge([/-?/, vi(r.tailwindConfig.prefix)])) : "", s = yt([/\[[^\s:'"`]+:[^\s\]]+\]/, ge([/-?(?:\w+)/, In(yt([ge([/-(?:\w+-)*\[[^\s:]+\]/, /(?![{([]])/, /(?:\/[^\s'"`\\><$]*)?/]), ge([/-(?:\w+-)*\[[^\s]+\]/, /(?![{([]])/, /(?:\/[^\s'"`\\$]*)?/]), /[-\/][^\s'"`\\$={><]*/]))])]), n = [yt([ge([/([^\s"'`\[\\]+-)?\[[^\s"'`]+\]/, e]), ge([/[^\s"'`\[\\]+/, e])]), yt([ge([/([^\s"'`\[\\]+-)?\[[^\s`]+\]/, e]), ge([/[^\s`\[\\]+/, e])])];
      for (let o of n)
        yield ge(["((?=((", o, ")+))\\2)?", /!?/, i, t ? yt([ge([/\(/, s, ff([/,/, s]), /\)/]), s]) : s]);
      yield /[^<>"'`\s.(){}[\]#=%$]*[^<>"'`\s.(){}[\]#=%:$]/g;
    }
    function _S(r) {
      if (!r.includes("-["))
        return r;
      let e = 0, t = [], i = r.matchAll(SS);
      i = Array.from(i).flatMap((s) => {
        let [, ...n] = s;
        return n.map((o, a) => Object.assign([], s, { index: s.index + a, 0: o }));
      });
      for (let s of i) {
        let n = s[0], o = t[t.length - 1];
        if (n === o ? t.pop() : (n === "'" || n === '"' || n === "`") && t.push(n), !o) {
          if (n === "[") {
            e++;
            continue;
          } else if (n === "]") {
            e--;
            continue;
          }
          if (e < 0 || e === 0 && !CS.test(n))
            return r.substring(0, s.index);
        }
      }
      return r;
    }
    var SS, CS, Sd = C(() => {
      l();
      We();
      Rn();
      SS = /([\[\]'"`])([^\[\]'"`])?/g, CS = /[^"'`\s<>\]]+/;
    });
    function AS(r, e) {
      let t = r.tailwindConfig.content.extract;
      return t[e] || t.DEFAULT || _d[e] || _d.DEFAULT(r);
    }
    function ES(r, e) {
      let t = r.content.transform;
      return t[e] || t.DEFAULT || Ad[e] || Ad.DEFAULT;
    }
    function OS(r, e, t, i) {
      Wr.has(e) || Wr.set(e, new Cd.default({ maxSize: 25e3 }));
      for (let s of r.split(`
`))
        if (s = s.trim(), !i.has(s))
          if (i.add(s), Wr.get(e).has(s))
            for (let n of Wr.get(e).get(s))
              t.add(n);
          else {
            let n = e(s).filter((a) => a !== "!*"), o = new Set(n);
            for (let a of o)
              t.add(a);
            Wr.get(e).set(s, o);
          }
    }
    function TS(r, e) {
      let t = r.sort(([s], [n]) => lt(s - n)), i = { base: /* @__PURE__ */ new Set(), defaults: /* @__PURE__ */ new Set(), components: /* @__PURE__ */ new Set(), utilities: /* @__PURE__ */ new Set(), variants: /* @__PURE__ */ new Set(), user: /* @__PURE__ */ new Set() };
      for (let [s, n] of t) {
        if (s >= e.minimumScreen) {
          i.variants.add(n);
          continue;
        }
        if (s & e.layerOrder.base) {
          i.base.add(n);
          continue;
        }
        if (s & e.layerOrder.defaults) {
          i.defaults.add(n);
          continue;
        }
        if (s & e.layerOrder.components) {
          i.components.add(n);
          continue;
        }
        if (s & e.layerOrder.utilities) {
          i.utilities.add(n);
          continue;
        }
        if (s & e.layerOrder.user) {
          i.user.add(n);
          continue;
        }
      }
      return i;
    }
    function Ho(r) {
      return (e) => {
        let t = { base: null, components: null, utilities: null, variants: null };
        if (e.walkAtRules((w) => {
          w.name === "tailwind" && Object.keys(t).includes(w.params) && (t[w.params] = w);
        }), Object.values(t).every((w) => w === null))
          return e;
        let i = /* @__PURE__ */ new Set([Re]), s = /* @__PURE__ */ new Set();
        ct.DEBUG && console.time("Reading changed files");
        for (let { content: w, extension: v } of r.changedContent) {
          let b = ES(r.tailwindConfig, v), x = AS(r, v);
          OS(b(w), x, i, s);
        }
        ct.DEBUG && console.timeEnd("Reading changed files");
        let n = r.classCache.size;
        ct.DEBUG && console.time("Generate rules");
        let o = us(i, r);
        if (ct.DEBUG && console.timeEnd("Generate rules"), ct.DEBUG && console.time("Build stylesheet"), r.stylesheetCache === null || r.classCache.size !== n) {
          for (let w of o)
            r.ruleCache.add(w);
          r.stylesheetCache = TS([...r.ruleCache], r);
        }
        ct.DEBUG && console.timeEnd("Build stylesheet");
        let { defaults: a, base: u, components: f, utilities: c, variants: d } = r.stylesheetCache;
        t.base && (t.base.before(ft([...u, ...a], t.base.source, { layer: "base" })), t.base.remove()), t.components && (t.components.before(ft([...f], t.components.source, { layer: "components" })), t.components.remove()), t.utilities && (t.utilities.before(ft([...c], t.utilities.source, { layer: "utilities" })), t.utilities.remove());
        let p = Array.from(d).filter((w) => {
          let v = w.raws.tailwind?.parentLayer;
          return v === "components" ? t.components !== null : v === "utilities" ? t.utilities !== null : true;
        });
        t.variants ? (t.variants.before(ft(p, t.variants.source, { layer: "variants" })), t.variants.remove()) : p.length > 0 && e.append(ft(p, e.source, { layer: "variants" }));
        let h = p.some((w) => w.raws.tailwind?.parentLayer === "utilities");
        t.utilities && c.size === 0 && !h && W.warn("content-problems", ["No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.", "https://tailwindcss.com/docs/content-configuration"]), ct.DEBUG && (console.log("Potential classes: ", i.size), console.log("Active contexts: ", Oi.size)), r.changedContent = [], e.walkAtRules("layer", (w) => {
          Object.keys(t).includes(w.params) && w.remove();
        });
      };
    }
    var Cd, ct, _d, Ad, Wr, Ed = C(() => {
      l();
      Cd = Y(Ps());
      Ge();
      fs();
      is();
      ke();
      vd();
      Sd();
      ct = we, _d = { DEFAULT: kd }, Ad = { DEFAULT: (r) => r, svelte: (r) => r.replace(/(?:^|\s)class:/g, " ") };
      Wr = /* @__PURE__ */ new WeakMap();
    });
    function ms(r) {
      let e = /* @__PURE__ */ new Map();
      U.root({ nodes: [r.clone()] }).walkRules((n) => {
        (0, Yo.default)((o) => {
          o.walkClasses((a) => {
            let u = a.parent.toString(), f = e.get(u);
            f || e.set(u, f = /* @__PURE__ */ new Set()), f.add(a.value);
          });
        }).processSync(n.selector);
      });
      let i = Array.from(e.values(), (n) => Array.from(n)), s = i.flat();
      return Object.assign(s, { groups: i });
    }
    function Od(r) {
      return PS.transformSync(r);
    }
    function Td(r, e) {
      let t = /* @__PURE__ */ new Set();
      for (let i of r)
        t.add(i.split(e).pop());
      return Array.from(t);
    }
    function Pd(r, e) {
      let t = r.tailwindConfig.prefix;
      return typeof t == "function" ? t(e) : t + e;
    }
    function* Dd(r) {
      for (yield r; r.parent; )
        yield r.parent, r = r.parent;
    }
    function DS(r, e = {}) {
      let t = r.nodes;
      r.nodes = [];
      let i = r.clone(e);
      return r.nodes = t, i;
    }
    function qS(r) {
      for (let e of Dd(r))
        if (r !== e) {
          if (e.type === "root")
            break;
          r = DS(e, { nodes: [r] });
        }
      return r;
    }
    function IS(r, e) {
      let t = /* @__PURE__ */ new Map(), i = e.layerOrder.user >> 4n;
      return r.walkRules((s, n) => {
        for (let a of Dd(s))
          if (a.raws.tailwind?.layer !== void 0)
            return;
        let o = qS(s);
        for (let a of ms(s)) {
          let u = t.get(a) || [];
          t.set(a, u), u.push([{ layer: "user", sort: BigInt(n) + i, important: false }, o]);
        }
      }), t;
    }
    function RS(r, e) {
      for (let t of r) {
        if (e.notClassCache.has(t) || e.applyClassCache.has(t))
          continue;
        if (e.classCache.has(t)) {
          e.applyClassCache.set(t, e.classCache.get(t).map(([s, n]) => [s, n.clone()]));
          continue;
        }
        let i = Array.from(ls(t, e));
        if (i.length === 0) {
          e.notClassCache.add(t);
          continue;
        }
        e.applyClassCache.set(t, i);
      }
      return e.applyClassCache;
    }
    function MS(r) {
      let e = null;
      return { get: (t) => (e = e || r(), e.get(t)), has: (t) => (e = e || r(), e.has(t)) };
    }
    function LS(r) {
      return { get: (e) => r.flatMap((t) => t.get(e) || []), has: (e) => r.some((t) => t.has(e)) };
    }
    function qd(r) {
      let e = r.split(/[\s\t\n]+/g);
      return e[e.length - 1] === "!important" ? [e.slice(0, -1), true] : [e, false];
    }
    function Id(r, e, t) {
      let i = /* @__PURE__ */ new Set(), s = [];
      if (r.walkAtRules("apply", (u) => {
        let [f] = qd(u.params);
        for (let c of f)
          i.add(c);
        s.push(u);
      }), s.length === 0)
        return;
      let n = LS([t, RS(i, e)]);
      function o(u, f, c) {
        let d = `.${fe(c)}`, p = [.../* @__PURE__ */ new Set([d, d.replace(/\\2c /g, "\\,")])], h = Od(f);
        return Od(u).map((w) => {
          let v = [];
          for (let b of h) {
            let x = b;
            for (let k of p)
              x = x.replace(k, w);
            x !== b && v.push(x);
          }
          return v.join(", ");
        }).join(", ");
      }
      let a = /* @__PURE__ */ new Map();
      for (let u of s) {
        let [f] = a.get(u.parent) || [[], u.source];
        a.set(u.parent, [f, u.source]);
        let [c, d] = qd(u.params);
        if (u.parent.type === "atrule") {
          if (u.parent.name === "screen") {
            let p = u.parent.params;
            throw u.error(`@apply is not supported within nested at-rules like @screen. We suggest you write this as @apply ${c.map((h) => `${p}:${h}`).join(" ")} instead.`);
          }
          throw u.error(`@apply is not supported within nested at-rules like @${u.parent.name}. You can fix this by un-nesting @${u.parent.name}.`);
        }
        for (let p of c) {
          if ([Pd(e, "group"), Pd(e, "peer")].includes(p))
            throw u.error(`@apply should not be used with the '${p}' utility`);
          if (!n.has(p))
            throw u.error(`The \`${p}\` class does not exist. If \`${p}\` is a custom class, make sure it is defined within a \`@layer\` directive.`);
          let h = n.get(p);
          f.push([p, d, h]);
        }
      }
      for (let [u, [f, c]] of a) {
        let d = [];
        for (let [h, w, v] of f) {
          let b = [h, ...Td([h], e.tailwindConfig.separator)];
          for (let [x, k] of v) {
            let T = ms(u), P = ms(k);
            if (P = P.groups.filter((R) => R.some((Q) => b.includes(Q))).flat(), P = P.concat(Td(P, e.tailwindConfig.separator)), T.some((R) => P.includes(R)))
              throw k.error(`You cannot \`@apply\` the \`${h}\` utility here because it creates a circular dependency.`);
            let V = U.root({ nodes: [k.clone()] });
            V.walk((R) => {
              R.source = c;
            }), (k.type !== "atrule" || k.type === "atrule" && k.name !== "keyframes") && V.walkRules((R) => {
              if (!ms(R).some((Qt) => Qt === h)) {
                R.remove();
                return;
              }
              let Q = typeof e.tailwindConfig.important == "string" ? e.tailwindConfig.important : null, ze = u.raws.tailwind !== void 0 && Q && u.selector.indexOf(Q) === 0 ? u.selector.slice(Q.length) : u.selector;
              R.selector = o(ze, R.selector, h), Q && ze !== u.selector && (R.selector = `${Q} ${R.selector}`), R.walkDecls((Qt) => {
                Qt.important = x.important || w;
              });
            }), !!V.nodes[0] && d.push([{ ...x, sort: x.sort | e.layerOrder[x.layer] }, V.nodes[0]]);
          }
        }
        let p = d.sort(([h], [w]) => lt(h.sort - w.sort)).map((h) => h[1]);
        u.after(p);
      }
      for (let u of s)
        u.parent.nodes.length > 1 ? u.remove() : u.parent.remove();
      Id(r, e, t);
    }
    function Qo(r) {
      return (e) => {
        let t = MS(() => IS(e, r));
        Id(e, r, t);
      };
    }
    var Yo, PS, Rd = C(() => {
      l();
      Ye();
      Yo = Y(Ce());
      fs();
      is();
      Pt();
      PS = (0, Yo.default)((r) => r.nodes.map((e) => e.toString()));
    });
    var Md = y((pP, gs) => {
      l();
      (function() {
        "use strict";
        function r(i, s, n) {
          if (!i)
            return null;
          r.caseSensitive || (i = i.toLowerCase());
          var o = r.threshold === null ? null : r.threshold * i.length, a = r.thresholdAbsolute, u;
          o !== null && a !== null ? u = Math.min(o, a) : o !== null ? u = o : a !== null ? u = a : u = null;
          var f, c, d, p, h, w = s.length;
          for (h = 0; h < w; h++)
            if (c = s[h], n && (c = c[n]), !!c && (r.caseSensitive ? d = c : d = c.toLowerCase(), p = t(i, d, u), (u === null || p < u) && (u = p, n && r.returnWinningObject ? f = s[h] : f = c, r.returnFirstMatch)))
              return f;
          return f || r.nullResultValue;
        }
        r.threshold = 0.4, r.thresholdAbsolute = 20, r.caseSensitive = false, r.nullResultValue = null, r.returnWinningObject = null, r.returnFirstMatch = false, typeof gs != "undefined" && gs.exports ? gs.exports = r : window.didYouMean = r;
        var e = Math.pow(2, 32) - 1;
        function t(i, s, n) {
          n = n || n === 0 ? n : e;
          var o = i.length, a = s.length;
          if (o === 0)
            return Math.min(n + 1, a);
          if (a === 0)
            return Math.min(n + 1, o);
          if (Math.abs(o - a) > n)
            return n + 1;
          var u = [], f, c, d, p, h;
          for (f = 0; f <= a; f++)
            u[f] = [f];
          for (c = 0; c <= o; c++)
            u[0][c] = c;
          for (f = 1; f <= a; f++) {
            for (d = e, p = 1, f > n && (p = f - n), h = a + 1, h > n + f && (h = n + f), c = 1; c <= o; c++)
              c < p || c > h ? u[f][c] = n + 1 : s.charAt(f - 1) === i.charAt(c - 1) ? u[f][c] = u[f - 1][c - 1] : u[f][c] = Math.min(u[f - 1][c - 1] + 1, Math.min(u[f][c - 1] + 1, u[f - 1][c] + 1)), u[f][c] < d && (d = u[f][c]);
            if (d > n)
              return n + 1;
          }
          return u[a][o];
        }
      })();
    });
    var Fd = y((dP, Ld) => {
      l();
      var Jo = "(".charCodeAt(0), Xo = ")".charCodeAt(0), ws = "'".charCodeAt(0), Ko = '"'.charCodeAt(0), Zo = "\\".charCodeAt(0), It = "/".charCodeAt(0), ea = ",".charCodeAt(0), ta = ":".charCodeAt(0), ys = "*".charCodeAt(0), FS = "u".charCodeAt(0), NS = "U".charCodeAt(0), BS = "+".charCodeAt(0), zS = /^[a-f0-9?-]+$/i;
      Ld.exports = function(r) {
        for (var e = [], t = r, i, s, n, o, a, u, f, c, d = 0, p = t.charCodeAt(d), h = t.length, w = [{ nodes: e }], v = 0, b, x = "", k = "", T = ""; d < h; )
          if (p <= 32) {
            i = d;
            do
              i += 1, p = t.charCodeAt(i);
            while (p <= 32);
            o = t.slice(d, i), n = e[e.length - 1], p === Xo && v ? T = o : n && n.type === "div" ? (n.after = o, n.sourceEndIndex += o.length) : p === ea || p === ta || p === It && t.charCodeAt(i + 1) !== ys && (!b || b && b.type === "function" && b.value !== "calc") ? k = o : e.push({ type: "space", sourceIndex: d, sourceEndIndex: i, value: o }), d = i;
          } else if (p === ws || p === Ko) {
            i = d, s = p === ws ? "'" : '"', o = { type: "string", sourceIndex: d, quote: s };
            do
              if (a = false, i = t.indexOf(s, i + 1), ~i)
                for (u = i; t.charCodeAt(u - 1) === Zo; )
                  u -= 1, a = !a;
              else
                t += s, i = t.length - 1, o.unclosed = true;
            while (a);
            o.value = t.slice(d + 1, i), o.sourceEndIndex = o.unclosed ? i : i + 1, e.push(o), d = i + 1, p = t.charCodeAt(d);
          } else if (p === It && t.charCodeAt(d + 1) === ys)
            i = t.indexOf("*/", d), o = { type: "comment", sourceIndex: d, sourceEndIndex: i + 2 }, i === -1 && (o.unclosed = true, i = t.length, o.sourceEndIndex = i), o.value = t.slice(d + 2, i), e.push(o), d = i + 2, p = t.charCodeAt(d);
          else if ((p === It || p === ys) && b && b.type === "function" && b.value === "calc")
            o = t[d], e.push({ type: "word", sourceIndex: d - k.length, sourceEndIndex: d + o.length, value: o }), d += 1, p = t.charCodeAt(d);
          else if (p === It || p === ea || p === ta)
            o = t[d], e.push({ type: "div", sourceIndex: d - k.length, sourceEndIndex: d + o.length, value: o, before: k, after: "" }), k = "", d += 1, p = t.charCodeAt(d);
          else if (Jo === p) {
            i = d;
            do
              i += 1, p = t.charCodeAt(i);
            while (p <= 32);
            if (c = d, o = { type: "function", sourceIndex: d - x.length, value: x, before: t.slice(c + 1, i) }, d = i, x === "url" && p !== ws && p !== Ko) {
              i -= 1;
              do
                if (a = false, i = t.indexOf(")", i + 1), ~i)
                  for (u = i; t.charCodeAt(u - 1) === Zo; )
                    u -= 1, a = !a;
                else
                  t += ")", i = t.length - 1, o.unclosed = true;
              while (a);
              f = i;
              do
                f -= 1, p = t.charCodeAt(f);
              while (p <= 32);
              c < f ? (d !== f + 1 ? o.nodes = [{ type: "word", sourceIndex: d, sourceEndIndex: f + 1, value: t.slice(d, f + 1) }] : o.nodes = [], o.unclosed && f + 1 !== i ? (o.after = "", o.nodes.push({ type: "space", sourceIndex: f + 1, sourceEndIndex: i, value: t.slice(f + 1, i) })) : (o.after = t.slice(f + 1, i), o.sourceEndIndex = i)) : (o.after = "", o.nodes = []), d = i + 1, o.sourceEndIndex = o.unclosed ? i : d, p = t.charCodeAt(d), e.push(o);
            } else
              v += 1, o.after = "", o.sourceEndIndex = d + 1, e.push(o), w.push(o), e = o.nodes = [], b = o;
            x = "";
          } else if (Xo === p && v)
            d += 1, p = t.charCodeAt(d), b.after = T, b.sourceEndIndex += T.length, T = "", v -= 1, w[w.length - 1].sourceEndIndex = d, w.pop(), b = w[v], e = b.nodes;
          else {
            i = d;
            do
              p === Zo && (i += 1), i += 1, p = t.charCodeAt(i);
            while (i < h && !(p <= 32 || p === ws || p === Ko || p === ea || p === ta || p === It || p === Jo || p === ys && b && b.type === "function" && b.value === "calc" || p === It && b.type === "function" && b.value === "calc" || p === Xo && v));
            o = t.slice(d, i), Jo === p ? x = o : (FS === o.charCodeAt(0) || NS === o.charCodeAt(0)) && BS === o.charCodeAt(1) && zS.test(o.slice(2)) ? e.push({ type: "unicode-range", sourceIndex: d, sourceEndIndex: i, value: o }) : e.push({ type: "word", sourceIndex: d, sourceEndIndex: i, value: o }), d = i;
          }
        for (d = w.length - 1; d; d -= 1)
          w[d].unclosed = true, w[d].sourceEndIndex = t.length;
        return w[0].nodes;
      };
    });
    var Bd = y((hP, Nd) => {
      l();
      Nd.exports = function r(e, t, i) {
        var s, n, o, a;
        for (s = 0, n = e.length; s < n; s += 1)
          o = e[s], i || (a = t(o, s, e)), a !== false && o.type === "function" && Array.isArray(o.nodes) && r(o.nodes, t, i), i && t(o, s, e);
      };
    });
    var Ud = y((mP, jd) => {
      l();
      function zd(r, e) {
        var t = r.type, i = r.value, s, n;
        return e && (n = e(r)) !== void 0 ? n : t === "word" || t === "space" ? i : t === "string" ? (s = r.quote || "", s + i + (r.unclosed ? "" : s)) : t === "comment" ? "/*" + i + (r.unclosed ? "" : "*/") : t === "div" ? (r.before || "") + i + (r.after || "") : Array.isArray(r.nodes) ? (s = $d(r.nodes, e), t !== "function" ? s : i + "(" + (r.before || "") + s + (r.after || "") + (r.unclosed ? "" : ")")) : i;
      }
      function $d(r, e) {
        var t, i;
        if (Array.isArray(r)) {
          for (t = "", i = r.length - 1; ~i; i -= 1)
            t = zd(r[i], e) + t;
          return t;
        }
        return zd(r, e);
      }
      jd.exports = $d;
    });
    var Wd = y((gP, Vd) => {
      l();
      var bs = "-".charCodeAt(0), xs = "+".charCodeAt(0), ra = ".".charCodeAt(0), $S = "e".charCodeAt(0), jS = "E".charCodeAt(0);
      function US(r) {
        var e = r.charCodeAt(0), t;
        if (e === xs || e === bs) {
          if (t = r.charCodeAt(1), t >= 48 && t <= 57)
            return true;
          var i = r.charCodeAt(2);
          return t === ra && i >= 48 && i <= 57;
        }
        return e === ra ? (t = r.charCodeAt(1), t >= 48 && t <= 57) : e >= 48 && e <= 57;
      }
      Vd.exports = function(r) {
        var e = 0, t = r.length, i, s, n;
        if (t === 0 || !US(r))
          return false;
        for (i = r.charCodeAt(e), (i === xs || i === bs) && e++; e < t && (i = r.charCodeAt(e), !(i < 48 || i > 57)); )
          e += 1;
        if (i = r.charCodeAt(e), s = r.charCodeAt(e + 1), i === ra && s >= 48 && s <= 57)
          for (e += 2; e < t && (i = r.charCodeAt(e), !(i < 48 || i > 57)); )
            e += 1;
        if (i = r.charCodeAt(e), s = r.charCodeAt(e + 1), n = r.charCodeAt(e + 2), (i === $S || i === jS) && (s >= 48 && s <= 57 || (s === xs || s === bs) && n >= 48 && n <= 57))
          for (e += s === xs || s === bs ? 3 : 2; e < t && (i = r.charCodeAt(e), !(i < 48 || i > 57)); )
            e += 1;
        return { number: r.slice(0, e), unit: r.slice(e) };
      };
    });
    var Gr = y((wP, Yd) => {
      l();
      var VS = Fd(), Gd = Bd(), Hd = Ud();
      function Xe(r) {
        return this instanceof Xe ? (this.nodes = VS(r), this) : new Xe(r);
      }
      Xe.prototype.toString = function() {
        return Array.isArray(this.nodes) ? Hd(this.nodes) : "";
      };
      Xe.prototype.walk = function(r, e) {
        return Gd(this.nodes, r, e), this;
      };
      Xe.unit = Wd();
      Xe.walk = Gd;
      Xe.stringify = Hd;
      Yd.exports = Xe;
    });
    function sa(r) {
      return typeof r == "object" && r !== null;
    }
    function WS(r, e) {
      let t = $e(e);
      do
        if (t.pop(), (0, Hr.default)(r, t) !== void 0)
          break;
      while (t.length);
      return t.length ? t : void 0;
    }
    function Rt(r) {
      return typeof r == "string" ? r : r.reduce((e, t, i) => t.includes(".") ? `${e}[${t}]` : i === 0 ? t : `${e}.${t}`, "");
    }
    function Jd(r) {
      return r.map((e) => `'${e}'`).join(", ");
    }
    function Xd(r) {
      return Jd(Object.keys(r));
    }
    function na(r, e, t, i = {}) {
      let s = Array.isArray(e) ? Rt(e) : e.replace(/^['"]+|['"]+$/g, ""), n = Array.isArray(e) ? e : $e(s), o = (0, Hr.default)(r.theme, n, t);
      if (o === void 0) {
        let u = `'${s}' does not exist in your theme config.`, f = n.slice(0, -1), c = (0, Hr.default)(r.theme, f);
        if (sa(c)) {
          let d = Object.keys(c).filter((h) => na(r, [...f, h]).isValid), p = (0, Qd.default)(n[n.length - 1], d);
          p ? u += ` Did you mean '${Rt([...f, p])}'?` : d.length > 0 && (u += ` '${Rt(f)}' has the following valid keys: ${Jd(d)}`);
        } else {
          let d = WS(r.theme, s);
          if (d) {
            let p = (0, Hr.default)(r.theme, d);
            sa(p) ? u += ` '${Rt(d)}' has the following keys: ${Xd(p)}` : u += ` '${Rt(d)}' is not an object.`;
          } else
            u += ` Your theme has the following top-level keys: ${Xd(r.theme)}`;
        }
        return { isValid: false, error: u };
      }
      if (!(typeof o == "string" || typeof o == "number" || typeof o == "function" || o instanceof String || o instanceof Number || Array.isArray(o))) {
        let u = `'${s}' was found but does not resolve to a string.`;
        if (sa(o)) {
          let f = Object.keys(o).filter((c) => na(r, [...n, c]).isValid);
          f.length && (u += ` Did you mean something like '${Rt([...n, f[0]])}'?`);
        }
        return { isValid: false, error: u };
      }
      let [a] = n;
      return { isValid: true, value: Le(a)(o, i) };
    }
    function GS(r, e, t) {
      e = e.map((s) => Kd(r, s, t));
      let i = [""];
      for (let s of e)
        s.type === "div" && s.value === "," ? i.push("") : i[i.length - 1] += ia.default.stringify(s);
      return i;
    }
    function Kd(r, e, t) {
      if (e.type === "function" && t[e.value] !== void 0) {
        let i = GS(r, e.nodes, t);
        e.type = "word", e.value = t[e.value](r, ...i);
      }
      return e;
    }
    function HS(r, e, t) {
      return (0, ia.default)(e).walk((i) => {
        Kd(r, i, t);
      }).toString();
    }
    function* QS(r) {
      r = r.replace(/^['"]+|['"]+$/g, "");
      let e = r.match(/^([^\s]+)(?![^\[]*\])(?:\s*\/\s*([^\/\s]+))$/), t;
      yield [r, void 0], e && (r = e[1], t = e[2], yield [r, t]);
    }
    function JS(r, e, t) {
      let i = Array.from(QS(e)).map(([s, n]) => Object.assign(na(r, s, t, { opacityValue: n }), { resolvedPath: s, alpha: n }));
      return i.find((s) => s.isValid) ?? i[0];
    }
    function Zd({ tailwindConfig: r }) {
      let e = { theme: (t, i, ...s) => {
        let { isValid: n, value: o, error: a, alpha: u } = JS(r, i, s.length ? s : void 0);
        if (!n)
          throw t.error(a);
        let f = bt(o), c = f !== void 0 && typeof f == "function";
        return (u !== void 0 || c) && (u === void 0 && (u = 1), o = _e(f, u, f)), o;
      }, screen: (t, i) => {
        i = i.replace(/^['"]+/g, "").replace(/['"]+$/g, "");
        let n = Qe(r.theme.screens).find(({ name: o }) => o === i);
        if (!n)
          throw t.error(`The '${i}' screen does not exist in your theme.`);
        return ut(n);
      } };
      return (t) => {
        t.walk((i) => {
          let s = YS[i.type];
          s !== void 0 && (i[s] = HS(i, i[s], e));
        });
      };
    }
    var Hr, Qd, ia, YS, eh = C(() => {
      l();
      Hr = Y(bo()), Qd = Y(Md());
      zr();
      ia = Y(Gr());
      ns();
      ss();
      ii();
      kr();
      _r();
      YS = { atrule: "params", decl: "value" };
    });
    function th({ tailwindConfig: { theme: r } }) {
      return function(e) {
        e.walkAtRules("screen", (t) => {
          let i = t.params, n = Qe(r.screens).find(({ name: o }) => o === i);
          if (!n)
            throw t.error(`No \`${i}\` screen found.`);
          t.name = "media", t.params = ut(n);
        });
      };
    }
    var rh = C(() => {
      l();
      ns();
      ss();
    });
    function XS(r) {
      let e = r.filter((a) => a.type !== "pseudo" || a.nodes.length > 0 ? true : a.value.startsWith("::") || [":before", ":after", ":first-line", ":first-letter"].includes(a.value)).reverse(), t = /* @__PURE__ */ new Set(["tag", "class", "id", "attribute"]), i = e.findIndex((a) => t.has(a.type));
      if (i === -1)
        return e.reverse().join("").trim();
      let s = e[i], n = ih[s.type] ? ih[s.type](s) : s;
      e = e.slice(0, i);
      let o = e.findIndex((a) => a.type === "combinator" && a.value === ">");
      return o !== -1 && (e.splice(0, o), e.unshift(vs.default.universal())), [n, ...e.reverse()].join("").trim();
    }
    function ZS(r) {
      return oa.has(r) || oa.set(r, KS.transformSync(r)), oa.get(r);
    }
    function aa({ tailwindConfig: r }) {
      return (e) => {
        let t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
        if (e.walkAtRules("defaults", (s) => {
          if (s.nodes && s.nodes.length > 0) {
            i.add(s);
            return;
          }
          let n = s.params;
          t.has(n) || t.set(n, /* @__PURE__ */ new Set()), t.get(n).add(s.parent), s.remove();
        }), K(r, "optimizeUniversalDefaults"))
          for (let s of i) {
            let n = /* @__PURE__ */ new Map(), o = t.get(s.params) ?? [];
            for (let a of o)
              for (let u of ZS(a.selector)) {
                let f = u.includes(":-") || u.includes("::-") ? u : "__DEFAULT__", c = n.get(f) ?? /* @__PURE__ */ new Set();
                n.set(f, c), c.add(u);
              }
            if (K(r, "optimizeUniversalDefaults")) {
              if (n.size === 0) {
                s.remove();
                continue;
              }
              for (let [, a] of n) {
                let u = U.rule({ source: s.source });
                u.selectors = [...a], u.append(s.nodes.map((f) => f.clone())), s.before(u);
              }
            }
            s.remove();
          }
        else if (i.size) {
          let s = U.rule({ selectors: ["*", "::before", "::after"] });
          for (let o of i)
            s.append(o.nodes), s.parent || o.before(s), s.source || (s.source = o.source), o.remove();
          let n = s.clone({ selectors: ["::backdrop"] });
          s.after(n);
        }
      };
    }
    var vs, ih, KS, oa, sh = C(() => {
      l();
      Ye();
      vs = Y(Ce());
      We();
      ih = { id(r) {
        return vs.default.attribute({ attribute: "id", operator: "=", value: r.value, quoteMark: '"' });
      } };
      KS = (0, vs.default)((r) => r.map((e) => {
        let t = e.split((i) => i.type === "combinator" && i.value === " ").pop();
        return XS(t);
      })), oa = /* @__PURE__ */ new Map();
    });
    function la() {
      function r(e) {
        let t = null;
        e.each((i) => {
          if (!e2.has(i.type)) {
            t = null;
            return;
          }
          if (t === null) {
            t = i;
            return;
          }
          let s = nh[i.type];
          i.type === "atrule" && i.name === "font-face" ? t = i : s.every((n) => (i[n] ?? "").replace(/\s+/g, " ") === (t[n] ?? "").replace(/\s+/g, " ")) ? (i.nodes && t.append(i.nodes), i.remove()) : t = i;
        }), e.each((i) => {
          i.type === "atrule" && r(i);
        });
      }
      return (e) => {
        r(e);
      };
    }
    var nh, e2, oh = C(() => {
      l();
      nh = { atrule: ["name", "params"], rule: ["selector"] }, e2 = new Set(Object.keys(nh));
    });
    function ua() {
      return (r) => {
        r.walkRules((e) => {
          let t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set([]), s = /* @__PURE__ */ new Map();
          e.walkDecls((n) => {
            if (n.parent === e) {
              if (t.has(n.prop)) {
                if (t.get(n.prop).value === n.value) {
                  i.add(t.get(n.prop)), t.set(n.prop, n);
                  return;
                }
                s.has(n.prop) || s.set(n.prop, /* @__PURE__ */ new Set()), s.get(n.prop).add(t.get(n.prop)), s.get(n.prop).add(n);
              }
              t.set(n.prop, n);
            }
          });
          for (let n of i)
            n.remove();
          for (let n of s.values()) {
            let o = /* @__PURE__ */ new Map();
            for (let a of n) {
              let u = r2(a.value);
              u !== null && (o.has(u) || o.set(u, /* @__PURE__ */ new Set()), o.get(u).add(a));
            }
            for (let a of o.values()) {
              let u = Array.from(a).slice(0, -1);
              for (let f of u)
                f.remove();
            }
          }
        });
      };
    }
    function r2(r) {
      let e = /^-?\d*.?\d+([\w%]+)?$/g.exec(r);
      return e ? e[1] ?? t2 : null;
    }
    var t2, ah = C(() => {
      l();
      t2 = Symbol("unitless-number");
    });
    function i2(r) {
      if (!r.walkAtRules)
        return;
      let e = /* @__PURE__ */ new Set();
      if (r.walkAtRules("apply", (t) => {
        e.add(t.parent);
      }), e.size !== 0)
        for (let t of e) {
          let i = [], s = [];
          for (let n of t.nodes)
            n.type === "atrule" && n.name === "apply" ? (s.length > 0 && (i.push(s), s = []), i.push([n])) : s.push(n);
          if (s.length > 0 && i.push(s), i.length !== 1) {
            for (let n of [...i].reverse()) {
              let o = t.clone({ nodes: [] });
              o.append(n), t.after(o);
            }
            t.remove();
          }
        }
    }
    function ks() {
      return (r) => {
        i2(r);
      };
    }
    var lh = C(() => {
      l();
    });
    function uh(r) {
      return (e, t) => {
        let i = false;
        e.walkAtRules("tailwind", (s) => {
          if (i)
            return false;
          if (s.parent && s.parent.type !== "root")
            return i = true, s.warn(t, ["Nested @tailwind rules were detected, but are not supported.", "Consider using a prefix to scope Tailwind's classes: https://tailwindcss.com/docs/configuration#prefix", "Alternatively, use the important selector strategy: https://tailwindcss.com/docs/configuration#selector-strategy"].join(`
`)), false;
        }), e.walkRules((s) => {
          if (i)
            return false;
          s.walkRules((n) => (i = true, n.warn(t, ["Nested CSS was detected, but CSS nesting has not been configured correctly.", "Please enable a CSS nesting plugin *before* Tailwind in your configuration.", "See how here: https://tailwindcss.com/docs/using-with-preprocessors#nesting"].join(`
`)), false));
        });
      };
    }
    var fh = C(() => {
      l();
    });
    function Ss(r) {
      return function(e, t) {
        let { tailwindDirectives: i, applyDirectives: s } = Go(e);
        uh()(e, t), ks()(e, t);
        let n = r({ tailwindDirectives: i, applyDirectives: s, registerDependency(o) {
          t.messages.push({ plugin: "tailwindcss", parent: t.opts.from, ...o });
        }, createContext(o, a) {
          return $o(o, a, e);
        } })(e, t);
        if (n.tailwindConfig.separator === "-")
          throw new Error("The '-' character cannot be used as a custom separator in JIT mode due to parsing ambiguity. Please use another character like '_' instead.");
        Lf(n.tailwindConfig), Ho(n)(e, t), ks()(e, t), Qo(n)(e, t), Zd(n)(e, t), th(n)(e, t), aa(n)(e, t), la(n)(e, t), ua(n)(e, t);
      };
    }
    var ch = C(() => {
      l();
      xd();
      Ed();
      Rd();
      eh();
      rh();
      sh();
      oh();
      ah();
      lh();
      fh();
      ps();
      We();
    });
    var ph = y((XP, fa) => {
      l();
      bd();
      ch();
      Ge();
      fa.exports = function(e) {
        return { postcssPlugin: "tailwindcss", plugins: [we.DEBUG && function(t) {
          return console.log(`
`), console.time("JIT TOTAL"), t;
        }, function(t, i) {
          let s = Wo(e);
          if (t.type === "document") {
            let n = t.nodes.filter((o) => o.type === "root");
            for (let o of n)
              o.type === "root" && Ss(s)(o, i);
            return;
          }
          Ss(s)(t, i);
        }, we.DEBUG && function(t) {
          return console.timeEnd("JIT TOTAL"), console.log(`
`), t;
        }].filter(Boolean) };
      };
      fa.exports.postcss = true;
    });
    var ca = y((KP, dh) => {
      l();
      dh.exports = () => ["and_chr 92", "and_uc 12.12", "chrome 92", "chrome 91", "edge 91", "firefox 89", "ios_saf 14.5-14.7", "ios_saf 14.0-14.4", "safari 14.1", "samsung 14.0"];
    });
    var Cs = {};
    de(Cs, { agents: () => s2, feature: () => n2 });
    function n2() {
      return { status: "cr", title: "CSS Feature Queries", stats: { ie: { "6": "n", "7": "n", "8": "n", "9": "n", "10": "n", "11": "n", "5.5": "n" }, edge: { "12": "y", "13": "y", "14": "y", "15": "y", "16": "y", "17": "y", "18": "y", "79": "y", "80": "y", "81": "y", "83": "y", "84": "y", "85": "y", "86": "y", "87": "y", "88": "y", "89": "y", "90": "y", "91": "y", "92": "y" }, firefox: { "2": "n", "3": "n", "4": "n", "5": "n", "6": "n", "7": "n", "8": "n", "9": "n", "10": "n", "11": "n", "12": "n", "13": "n", "14": "n", "15": "n", "16": "n", "17": "n", "18": "n", "19": "n", "20": "n", "21": "n", "22": "y", "23": "y", "24": "y", "25": "y", "26": "y", "27": "y", "28": "y", "29": "y", "30": "y", "31": "y", "32": "y", "33": "y", "34": "y", "35": "y", "36": "y", "37": "y", "38": "y", "39": "y", "40": "y", "41": "y", "42": "y", "43": "y", "44": "y", "45": "y", "46": "y", "47": "y", "48": "y", "49": "y", "50": "y", "51": "y", "52": "y", "53": "y", "54": "y", "55": "y", "56": "y", "57": "y", "58": "y", "59": "y", "60": "y", "61": "y", "62": "y", "63": "y", "64": "y", "65": "y", "66": "y", "67": "y", "68": "y", "69": "y", "70": "y", "71": "y", "72": "y", "73": "y", "74": "y", "75": "y", "76": "y", "77": "y", "78": "y", "79": "y", "80": "y", "81": "y", "82": "y", "83": "y", "84": "y", "85": "y", "86": "y", "87": "y", "88": "y", "89": "y", "90": "y", "91": "y", "92": "y", "93": "y", "3.5": "n", "3.6": "n" }, chrome: { "4": "n", "5": "n", "6": "n", "7": "n", "8": "n", "9": "n", "10": "n", "11": "n", "12": "n", "13": "n", "14": "n", "15": "n", "16": "n", "17": "n", "18": "n", "19": "n", "20": "n", "21": "n", "22": "n", "23": "n", "24": "n", "25": "n", "26": "n", "27": "n", "28": "y", "29": "y", "30": "y", "31": "y", "32": "y", "33": "y", "34": "y", "35": "y", "36": "y", "37": "y", "38": "y", "39": "y", "40": "y", "41": "y", "42": "y", "43": "y", "44": "y", "45": "y", "46": "y", "47": "y", "48": "y", "49": "y", "50": "y", "51": "y", "52": "y", "53": "y", "54": "y", "55": "y", "56": "y", "57": "y", "58": "y", "59": "y", "60": "y", "61": "y", "62": "y", "63": "y", "64": "y", "65": "y", "66": "y", "67": "y", "68": "y", "69": "y", "70": "y", "71": "y", "72": "y", "73": "y", "74": "y", "75": "y", "76": "y", "77": "y", "78": "y", "79": "y", "80": "y", "81": "y", "83": "y", "84": "y", "85": "y", "86": "y", "87": "y", "88": "y", "89": "y", "90": "y", "91": "y", "92": "y", "93": "y", "94": "y", "95": "y" }, safari: { "4": "n", "5": "n", "6": "n", "7": "n", "8": "n", "9": "y", "10": "y", "11": "y", "12": "y", "13": "y", "14": "y", "15": "y", "9.1": "y", "10.1": "y", "11.1": "y", "12.1": "y", "13.1": "y", "14.1": "y", TP: "y", "3.1": "n", "3.2": "n", "5.1": "n", "6.1": "n", "7.1": "n" }, opera: { "9": "n", "11": "n", "12": "n", "15": "y", "16": "y", "17": "y", "18": "y", "19": "y", "20": "y", "21": "y", "22": "y", "23": "y", "24": "y", "25": "y", "26": "y", "27": "y", "28": "y", "29": "y", "30": "y", "31": "y", "32": "y", "33": "y", "34": "y", "35": "y", "36": "y", "37": "y", "38": "y", "39": "y", "40": "y", "41": "y", "42": "y", "43": "y", "44": "y", "45": "y", "46": "y", "47": "y", "48": "y", "49": "y", "50": "y", "51": "y", "52": "y", "53": "y", "54": "y", "55": "y", "56": "y", "57": "y", "58": "y", "60": "y", "62": "y", "63": "y", "64": "y", "65": "y", "66": "y", "67": "y", "68": "y", "69": "y", "70": "y", "71": "y", "72": "y", "73": "y", "74": "y", "75": "y", "76": "y", "77": "y", "78": "y", "12.1": "y", "9.5-9.6": "n", "10.0-10.1": "n", "10.5": "n", "10.6": "n", "11.1": "n", "11.5": "n", "11.6": "n" }, ios_saf: { "8": "n", "9.0-9.2": "y", "9.3": "y", "10.0-10.2": "y", "10.3": "y", "11.0-11.2": "y", "11.3-11.4": "y", "12.0-12.1": "y", "12.2-12.4": "y", "13.0-13.1": "y", "13.2": "y", "13.3": "y", "13.4-13.7": "y", "14.0-14.4": "y", "14.5-14.7": "y", "3.2": "n", "4.0-4.1": "n", "4.2-4.3": "n", "5.0-5.1": "n", "6.0-6.1": "n", "7.0-7.1": "n", "8.1-8.4": "n" }, op_mini: { all: "y" }, android: { "3": "n", "4": "n", "92": "y", "4.4": "y", "4.4.3-4.4.4": "y", "2.1": "n", "2.2": "n", "2.3": "n", "4.1": "n", "4.2-4.3": "n" }, bb: { "7": "n", "10": "n" }, op_mob: { "10": "n", "11": "n", "12": "n", "64": "y", "11.1": "n", "11.5": "n", "12.1": "n" }, and_chr: { "92": "y" }, and_ff: { "90": "y" }, ie_mob: { "10": "n", "11": "n" }, and_uc: { "12.12": "y" }, samsung: { "4": "y", "5.0-5.4": "y", "6.2-6.4": "y", "7.2-7.4": "y", "8.2": "y", "9.2": "y", "10.1": "y", "11.1-11.2": "y", "12.0": "y", "13.0": "y", "14.0": "y" }, and_qq: { "10.4": "y" }, baidu: { "7.12": "y" }, kaios: { "2.5": "y" } } };
    }
    var s2, _s = C(() => {
      l();
      s2 = { ie: { prefix: "ms" }, edge: { prefix: "webkit", prefix_exceptions: { "12": "ms", "13": "ms", "14": "ms", "15": "ms", "16": "ms", "17": "ms", "18": "ms" } }, firefox: { prefix: "moz" }, chrome: { prefix: "webkit" }, safari: { prefix: "webkit" }, opera: { prefix: "webkit", prefix_exceptions: { "9": "o", "11": "o", "12": "o", "9.5-9.6": "o", "10.0-10.1": "o", "10.5": "o", "10.6": "o", "11.1": "o", "11.5": "o", "11.6": "o", "12.1": "o" } }, ios_saf: { prefix: "webkit" }, op_mini: { prefix: "o" }, android: { prefix: "webkit" }, bb: { prefix: "webkit" }, op_mob: { prefix: "o", prefix_exceptions: { "64": "webkit" } }, and_chr: { prefix: "webkit" }, and_ff: { prefix: "moz" }, ie_mob: { prefix: "ms" }, and_uc: { prefix: "webkit", prefix_exceptions: { "12.12": "webkit" } }, samsung: { prefix: "webkit" }, and_qq: { prefix: "webkit" }, baidu: { prefix: "webkit" }, kaios: { prefix: "moz" } };
    });
    var hh = y(() => {
      l();
    });
    var Z = y((t3, Ke) => {
      l();
      var { list: pa } = ue();
      Ke.exports.error = function(r) {
        let e = new Error(r);
        throw e.autoprefixer = true, e;
      };
      Ke.exports.uniq = function(r) {
        return [...new Set(r)];
      };
      Ke.exports.removeNote = function(r) {
        return r.includes(" ") ? r.split(" ")[0] : r;
      };
      Ke.exports.escapeRegexp = function(r) {
        return r.replace(/[$()*+-.?[\\\]^{|}]/g, "\\$&");
      };
      Ke.exports.regexp = function(r, e = true) {
        return e && (r = this.escapeRegexp(r)), new RegExp(`(^|[\\s,(])(${r}($|[\\s(,]))`, "gi");
      };
      Ke.exports.editList = function(r, e) {
        let t = pa.comma(r), i = e(t, []);
        if (t === i)
          return r;
        let s = r.match(/,\s*/);
        return s = s ? s[0] : ", ", i.join(s);
      };
      Ke.exports.splitSelector = function(r) {
        return pa.comma(r).map((e) => pa.space(e).map((t) => t.split(/(?=\.|#)/g)));
      };
    });
    var Ze = y((r3, wh) => {
      l();
      var o2 = ca(), mh = (_s(), Cs).agents, a2 = Z(), gh = class {
        static prefixes() {
          if (this.prefixesCache)
            return this.prefixesCache;
          this.prefixesCache = [];
          for (let e in mh)
            this.prefixesCache.push(`-${mh[e].prefix}-`);
          return this.prefixesCache = a2.uniq(this.prefixesCache).sort((e, t) => t.length - e.length), this.prefixesCache;
        }
        static withPrefix(e) {
          return this.prefixesRegexp || (this.prefixesRegexp = new RegExp(this.prefixes().join("|"))), this.prefixesRegexp.test(e);
        }
        constructor(e, t, i, s) {
          this.data = e, this.options = i || {}, this.browserslistOpts = s || {}, this.selected = this.parse(t);
        }
        parse(e) {
          let t = {};
          for (let i in this.browserslistOpts)
            t[i] = this.browserslistOpts[i];
          return t.path = this.options.from, o2(e, t);
        }
        prefix(e) {
          let [t, i] = e.split(" "), s = this.data[t], n = s.prefix_exceptions && s.prefix_exceptions[i];
          return n || (n = s.prefix), `-${n}-`;
        }
        isSelected(e) {
          return this.selected.includes(e);
        }
      };
      wh.exports = gh;
    });
    var Yr = y((i3, yh) => {
      l();
      yh.exports = { prefix(r) {
        let e = r.match(/^(-\w+-)/);
        return e ? e[0] : "";
      }, unprefixed(r) {
        return r.replace(/^-\w+-/, "");
      } };
    });
    var Mt = y((s3, xh) => {
      l();
      var l2 = Ze(), bh = Yr(), u2 = Z();
      function da(r, e) {
        let t = new r.constructor();
        for (let i of Object.keys(r || {})) {
          let s = r[i];
          i === "parent" && typeof s == "object" ? e && (t[i] = e) : i === "source" || i === null ? t[i] = s : Array.isArray(s) ? t[i] = s.map((n) => da(n, t)) : i !== "_autoprefixerPrefix" && i !== "_autoprefixerValues" && i !== "proxyCache" && (typeof s == "object" && s !== null && (s = da(s, t)), t[i] = s);
        }
        return t;
      }
      var As = class {
        static hack(e) {
          return this.hacks || (this.hacks = {}), e.names.map((t) => (this.hacks[t] = e, this.hacks[t]));
        }
        static load(e, t, i) {
          let s = this.hacks && this.hacks[e];
          return s ? new s(e, t, i) : new this(e, t, i);
        }
        static clone(e, t) {
          let i = da(e);
          for (let s in t)
            i[s] = t[s];
          return i;
        }
        constructor(e, t, i) {
          this.prefixes = t, this.name = e, this.all = i;
        }
        parentPrefix(e) {
          let t;
          return typeof e._autoprefixerPrefix != "undefined" ? t = e._autoprefixerPrefix : e.type === "decl" && e.prop[0] === "-" ? t = bh.prefix(e.prop) : e.type === "root" ? t = false : e.type === "rule" && e.selector.includes(":-") && /:(-\w+-)/.test(e.selector) ? t = e.selector.match(/:(-\w+-)/)[1] : e.type === "atrule" && e.name[0] === "-" ? t = bh.prefix(e.name) : t = this.parentPrefix(e.parent), l2.prefixes().includes(t) || (t = false), e._autoprefixerPrefix = t, e._autoprefixerPrefix;
        }
        process(e, t) {
          if (!this.check(e))
            return;
          let i = this.parentPrefix(e), s = this.prefixes.filter((o) => !i || i === u2.removeNote(o)), n = [];
          for (let o of s)
            this.add(e, o, n.concat([o]), t) && n.push(o);
          return n;
        }
        clone(e, t) {
          return As.clone(e, t);
        }
      };
      xh.exports = As;
    });
    var D = y((n3, Sh) => {
      l();
      var f2 = Mt(), c2 = Ze(), vh = Z(), kh = class extends f2 {
        check() {
          return true;
        }
        prefixed(e, t) {
          return t + e;
        }
        normalize(e) {
          return e;
        }
        otherPrefixes(e, t) {
          for (let i of c2.prefixes())
            if (i !== t && e.includes(i))
              return true;
          return false;
        }
        set(e, t) {
          return e.prop = this.prefixed(e.prop, t), e;
        }
        needCascade(e) {
          return e._autoprefixerCascade || (e._autoprefixerCascade = this.all.options.cascade !== false && e.raw("before").includes(`
`)), e._autoprefixerCascade;
        }
        maxPrefixed(e, t) {
          if (t._autoprefixerMax)
            return t._autoprefixerMax;
          let i = 0;
          for (let s of e)
            s = vh.removeNote(s), s.length > i && (i = s.length);
          return t._autoprefixerMax = i, t._autoprefixerMax;
        }
        calcBefore(e, t, i = "") {
          let n = this.maxPrefixed(e, t) - vh.removeNote(i).length, o = t.raw("before");
          return n > 0 && (o += Array(n).fill(" ").join("")), o;
        }
        restoreBefore(e) {
          let t = e.raw("before").split(`
`), i = t[t.length - 1];
          this.all.group(e).up((s) => {
            let n = s.raw("before").split(`
`), o = n[n.length - 1];
            o.length < i.length && (i = o);
          }), t[t.length - 1] = i, e.raws.before = t.join(`
`);
        }
        insert(e, t, i) {
          let s = this.set(this.clone(e), t);
          if (!(!s || e.parent.some((o) => o.prop === s.prop && o.value === s.value)))
            return this.needCascade(e) && (s.raws.before = this.calcBefore(i, e, t)), e.parent.insertBefore(e, s);
        }
        isAlready(e, t) {
          let i = this.all.group(e).up((s) => s.prop === t);
          return i || (i = this.all.group(e).down((s) => s.prop === t)), i;
        }
        add(e, t, i, s) {
          let n = this.prefixed(e.prop, t);
          if (!(this.isAlready(e, n) || this.otherPrefixes(e.value, t)))
            return this.insert(e, t, i, s);
        }
        process(e, t) {
          if (!this.needCascade(e)) {
            super.process(e, t);
            return;
          }
          let i = super.process(e, t);
          !i || !i.length || (this.restoreBefore(e), e.raws.before = this.calcBefore(i, e));
        }
        old(e, t) {
          return [this.prefixed(e, t)];
        }
      };
      Sh.exports = kh;
    });
    var _h = y((o3, Ch) => {
      l();
      Ch.exports = function r(e) {
        return { mul: (t) => new r(e * t), div: (t) => new r(e / t), simplify: () => new r(e), toString: () => e.toString() };
      };
    });
    var Oh = y((a3, Eh) => {
      l();
      var p2 = _h(), d2 = Mt(), ha = Z(), h2 = /(min|max)-resolution\s*:\s*\d*\.?\d+(dppx|dpcm|dpi|x)/gi, m2 = /(min|max)-resolution(\s*:\s*)(\d*\.?\d+)(dppx|dpcm|dpi|x)/i, Ah = class extends d2 {
        prefixName(e, t) {
          return e === "-moz-" ? t + "--moz-device-pixel-ratio" : e + t + "-device-pixel-ratio";
        }
        prefixQuery(e, t, i, s, n) {
          return s = new p2(s), n === "dpi" ? s = s.div(96) : n === "dpcm" && (s = s.mul(2.54).div(96)), s = s.simplify(), e === "-o-" && (s = s.n + "/" + s.d), this.prefixName(e, t) + i + s;
        }
        clean(e) {
          if (!this.bad) {
            this.bad = [];
            for (let t of this.prefixes)
              this.bad.push(this.prefixName(t, "min")), this.bad.push(this.prefixName(t, "max"));
          }
          e.params = ha.editList(e.params, (t) => t.filter((i) => this.bad.every((s) => !i.includes(s))));
        }
        process(e) {
          let t = this.parentPrefix(e), i = t ? [t] : this.prefixes;
          e.params = ha.editList(e.params, (s, n) => {
            for (let o of s) {
              if (!o.includes("min-resolution") && !o.includes("max-resolution")) {
                n.push(o);
                continue;
              }
              for (let a of i) {
                let u = o.replace(h2, (f) => {
                  let c = f.match(m2);
                  return this.prefixQuery(a, c[1], c[2], c[3], c[4]);
                });
                n.push(u);
              }
              n.push(o);
            }
            return ha.uniq(n);
          });
        }
      };
      Eh.exports = Ah;
    });
    var Ih = y((l3, qh) => {
      l();
      var { list: g2 } = ue(), Th = Gr(), w2 = Ze(), Ph = Yr(), Dh = class {
        constructor(e) {
          this.props = ["transition", "transition-property"], this.prefixes = e;
        }
        add(e, t) {
          let i, s, n = this.prefixes.add[e.prop], o = this.ruleVendorPrefixes(e), a = o || n && n.prefixes || [], u = this.parse(e.value), f = u.map((h) => this.findProp(h)), c = [];
          if (f.some((h) => h[0] === "-"))
            return;
          for (let h of u) {
            if (s = this.findProp(h), s[0] === "-")
              continue;
            let w = this.prefixes.add[s];
            if (!(!w || !w.prefixes))
              for (i of w.prefixes) {
                if (o && !o.some((b) => i.includes(b)))
                  continue;
                let v = this.prefixes.prefixed(s, i);
                v !== "-ms-transform" && !f.includes(v) && (this.disabled(s, i) || c.push(this.clone(s, v, h)));
              }
          }
          u = u.concat(c);
          let d = this.stringify(u), p = this.stringify(this.cleanFromUnprefixed(u, "-webkit-"));
          if (a.includes("-webkit-") && this.cloneBefore(e, `-webkit-${e.prop}`, p), this.cloneBefore(e, e.prop, p), a.includes("-o-")) {
            let h = this.stringify(this.cleanFromUnprefixed(u, "-o-"));
            this.cloneBefore(e, `-o-${e.prop}`, h);
          }
          for (i of a)
            if (i !== "-webkit-" && i !== "-o-") {
              let h = this.stringify(this.cleanOtherPrefixes(u, i));
              this.cloneBefore(e, i + e.prop, h);
            }
          d !== e.value && !this.already(e, e.prop, d) && (this.checkForWarning(t, e), e.cloneBefore(), e.value = d);
        }
        findProp(e) {
          let t = e[0].value;
          if (/^\d/.test(t)) {
            for (let [i, s] of e.entries())
              if (i !== 0 && s.type === "word")
                return s.value;
          }
          return t;
        }
        already(e, t, i) {
          return e.parent.some((s) => s.prop === t && s.value === i);
        }
        cloneBefore(e, t, i) {
          this.already(e, t, i) || e.cloneBefore({ prop: t, value: i });
        }
        checkForWarning(e, t) {
          if (t.prop !== "transition-property")
            return;
          let i = false, s = false;
          t.parent.each((n) => {
            if (n.type !== "decl" || n.prop.indexOf("transition-") !== 0)
              return;
            let o = g2.comma(n.value);
            if (n.prop === "transition-property") {
              o.forEach((a) => {
                let u = this.prefixes.add[a];
                u && u.prefixes && u.prefixes.length > 0 && (i = true);
              });
              return;
            }
            return s = s || o.length > 1, false;
          }), i && s && t.warn(e, "Replace transition-property to transition, because Autoprefixer could not support any cases of transition-property and other transition-*");
        }
        remove(e) {
          let t = this.parse(e.value);
          t = t.filter((o) => {
            let a = this.prefixes.remove[this.findProp(o)];
            return !a || !a.remove;
          });
          let i = this.stringify(t);
          if (e.value === i)
            return;
          if (t.length === 0) {
            e.remove();
            return;
          }
          let s = e.parent.some((o) => o.prop === e.prop && o.value === i), n = e.parent.some((o) => o !== e && o.prop === e.prop && o.value.length > i.length);
          if (s || n) {
            e.remove();
            return;
          }
          e.value = i;
        }
        parse(e) {
          let t = Th(e), i = [], s = [];
          for (let n of t.nodes)
            s.push(n), n.type === "div" && n.value === "," && (i.push(s), s = []);
          return i.push(s), i.filter((n) => n.length > 0);
        }
        stringify(e) {
          if (e.length === 0)
            return "";
          let t = [];
          for (let i of e)
            i[i.length - 1].type !== "div" && i.push(this.div(e)), t = t.concat(i);
          return t[0].type === "div" && (t = t.slice(1)), t[t.length - 1].type === "div" && (t = t.slice(0, -2 + 1 || void 0)), Th.stringify({ nodes: t });
        }
        clone(e, t, i) {
          let s = [], n = false;
          for (let o of i)
            !n && o.type === "word" && o.value === e ? (s.push({ type: "word", value: t }), n = true) : s.push(o);
          return s;
        }
        div(e) {
          for (let t of e)
            for (let i of t)
              if (i.type === "div" && i.value === ",")
                return i;
          return { type: "div", value: ",", after: " " };
        }
        cleanOtherPrefixes(e, t) {
          return e.filter((i) => {
            let s = Ph.prefix(this.findProp(i));
            return s === "" || s === t;
          });
        }
        cleanFromUnprefixed(e, t) {
          let i = e.map((n) => this.findProp(n)).filter((n) => n.slice(0, t.length) === t).map((n) => this.prefixes.unprefixed(n)), s = [];
          for (let n of e) {
            let o = this.findProp(n), a = Ph.prefix(o);
            !i.includes(o) && (a === t || a === "") && s.push(n);
          }
          return s;
        }
        disabled(e, t) {
          let i = ["order", "justify-content", "align-self", "align-content"];
          if (e.includes("flex") || i.includes(e)) {
            if (this.prefixes.options.flexbox === false)
              return true;
            if (this.prefixes.options.flexbox === "no-2009")
              return t.includes("2009");
          }
        }
        ruleVendorPrefixes(e) {
          let { parent: t } = e;
          if (t.type !== "rule")
            return false;
          if (!t.selector.includes(":-"))
            return false;
          let i = w2.prefixes().filter((s) => t.selector.includes(":" + s));
          return i.length > 0 ? i : false;
        }
      };
      qh.exports = Dh;
    });
    var Lt = y((u3, Mh) => {
      l();
      var y2 = Z(), Rh = class {
        constructor(e, t, i, s) {
          this.unprefixed = e, this.prefixed = t, this.string = i || t, this.regexp = s || y2.regexp(t);
        }
        check(e) {
          return e.includes(this.string) ? !!e.match(this.regexp) : false;
        }
      };
      Mh.exports = Rh;
    });
    var ce = y((f3, Fh) => {
      l();
      var b2 = Mt(), x2 = Lt(), v2 = Yr(), k2 = Z(), Lh = class extends b2 {
        static save(e, t) {
          let i = t.prop, s = [];
          for (let n in t._autoprefixerValues) {
            let o = t._autoprefixerValues[n];
            if (o === t.value)
              continue;
            let a, u = v2.prefix(i);
            if (u === "-pie-")
              continue;
            if (u === n) {
              a = t.value = o, s.push(a);
              continue;
            }
            let f = e.prefixed(i, n), c = t.parent;
            if (!c.every((w) => w.prop !== f)) {
              s.push(a);
              continue;
            }
            let d = o.replace(/\s+/, " ");
            if (c.some((w) => w.prop === t.prop && w.value.replace(/\s+/, " ") === d)) {
              s.push(a);
              continue;
            }
            let h = this.clone(t, { value: o });
            a = t.parent.insertBefore(t, h), s.push(a);
          }
          return s;
        }
        check(e) {
          let t = e.value;
          return t.includes(this.name) ? !!t.match(this.regexp()) : false;
        }
        regexp() {
          return this.regexpCache || (this.regexpCache = k2.regexp(this.name));
        }
        replace(e, t) {
          return e.replace(this.regexp(), `$1${t}$2`);
        }
        value(e) {
          return e.raws.value && e.raws.value.value === e.value ? e.raws.value.raw : e.value;
        }
        add(e, t) {
          e._autoprefixerValues || (e._autoprefixerValues = {});
          let i = e._autoprefixerValues[t] || this.value(e), s;
          do
            if (s = i, i = this.replace(i, t), i === false)
              return;
          while (i !== s);
          e._autoprefixerValues[t] = i;
        }
        old(e) {
          return new x2(this.name, e + this.name);
        }
      };
      Fh.exports = Lh;
    });
    var et = y((c3, Nh) => {
      l();
      Nh.exports = {};
    });
    var ga = y((p3, $h) => {
      l();
      var Bh = Gr(), S2 = ce(), C2 = et().insertAreas, _2 = /(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i, A2 = /(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i, E2 = /(!\s*)?autoprefixer:\s*ignore\s+next/i, O2 = /(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i, T2 = ["width", "height", "min-width", "max-width", "min-height", "max-height", "inline-size", "min-inline-size", "max-inline-size", "block-size", "min-block-size", "max-block-size"];
      function ma(r) {
        return r.parent.some((e) => e.prop === "grid-template" || e.prop === "grid-template-areas");
      }
      function P2(r) {
        let e = r.parent.some((i) => i.prop === "grid-template-rows"), t = r.parent.some((i) => i.prop === "grid-template-columns");
        return e && t;
      }
      var zh = class {
        constructor(e) {
          this.prefixes = e;
        }
        add(e, t) {
          let i = this.prefixes.add["@resolution"], s = this.prefixes.add["@keyframes"], n = this.prefixes.add["@viewport"], o = this.prefixes.add["@supports"];
          e.walkAtRules((c) => {
            if (c.name === "keyframes") {
              if (!this.disabled(c, t))
                return s && s.process(c);
            } else if (c.name === "viewport") {
              if (!this.disabled(c, t))
                return n && n.process(c);
            } else if (c.name === "supports") {
              if (this.prefixes.options.supports !== false && !this.disabled(c, t))
                return o.process(c);
            } else if (c.name === "media" && c.params.includes("-resolution") && !this.disabled(c, t))
              return i && i.process(c);
          }), e.walkRules((c) => {
            if (!this.disabled(c, t))
              return this.prefixes.add.selectors.map((d) => d.process(c, t));
          });
          function a(c) {
            return c.parent.nodes.some((d) => {
              if (d.type !== "decl")
                return false;
              let p = d.prop === "display" && /(inline-)?grid/.test(d.value), h = d.prop.startsWith("grid-template"), w = /^grid-([A-z]+-)?gap/.test(d.prop);
              return p || h || w;
            });
          }
          function u(c) {
            return c.parent.some((d) => d.prop === "display" && /(inline-)?flex/.test(d.value));
          }
          let f = this.gridStatus(e, t) && this.prefixes.add["grid-area"] && this.prefixes.add["grid-area"].prefixes;
          return e.walkDecls((c) => {
            if (this.disabledDecl(c, t))
              return;
            let d = c.parent, p = c.prop, h = c.value;
            if (p === "grid-row-span") {
              t.warn("grid-row-span is not part of final Grid Layout. Use grid-row.", { node: c });
              return;
            } else if (p === "grid-column-span") {
              t.warn("grid-column-span is not part of final Grid Layout. Use grid-column.", { node: c });
              return;
            } else if (p === "display" && h === "box") {
              t.warn("You should write display: flex by final spec instead of display: box", { node: c });
              return;
            } else if (p === "text-emphasis-position")
              (h === "under" || h === "over") && t.warn("You should use 2 values for text-emphasis-position For example, `under left` instead of just `under`.", { node: c });
            else if (/^(align|justify|place)-(items|content)$/.test(p) && u(c))
              (h === "start" || h === "end") && t.warn(`${h} value has mixed support, consider using flex-${h} instead`, { node: c });
            else if (p === "text-decoration-skip" && h === "ink")
              t.warn("Replace text-decoration-skip: ink to text-decoration-skip-ink: auto, because spec had been changed", { node: c });
            else {
              if (f && this.gridStatus(c, t))
                if (c.value === "subgrid" && t.warn("IE does not support subgrid", { node: c }), /^(align|justify|place)-items$/.test(p) && a(c)) {
                  let v = p.replace("-items", "-self");
                  t.warn(`IE does not support ${p} on grid containers. Try using ${v} on child elements instead: ${c.parent.selector} > * { ${v}: ${c.value} }`, { node: c });
                } else if (/^(align|justify|place)-content$/.test(p) && a(c))
                  t.warn(`IE does not support ${c.prop} on grid containers`, { node: c });
                else if (p === "display" && c.value === "contents") {
                  t.warn("Please do not use display: contents; if you have grid setting enabled", { node: c });
                  return;
                } else if (c.prop === "grid-gap") {
                  let v = this.gridStatus(c, t);
                  v === "autoplace" && !P2(c) && !ma(c) ? t.warn("grid-gap only works if grid-template(-areas) is being used or both rows and columns have been declared and cells have not been manually placed inside the explicit grid", { node: c }) : (v === true || v === "no-autoplace") && !ma(c) && t.warn("grid-gap only works if grid-template(-areas) is being used", { node: c });
                } else if (p === "grid-auto-columns") {
                  t.warn("grid-auto-columns is not supported by IE", { node: c });
                  return;
                } else if (p === "grid-auto-rows") {
                  t.warn("grid-auto-rows is not supported by IE", { node: c });
                  return;
                } else if (p === "grid-auto-flow") {
                  let v = d.some((x) => x.prop === "grid-template-rows"), b = d.some((x) => x.prop === "grid-template-columns");
                  ma(c) ? t.warn("grid-auto-flow is not supported by IE", { node: c }) : h.includes("dense") ? t.warn("grid-auto-flow: dense is not supported by IE", { node: c }) : !v && !b && t.warn("grid-auto-flow works only if grid-template-rows and grid-template-columns are present in the same rule", { node: c });
                  return;
                } else if (h.includes("auto-fit")) {
                  t.warn("auto-fit value is not supported by IE", { node: c, word: "auto-fit" });
                  return;
                } else if (h.includes("auto-fill")) {
                  t.warn("auto-fill value is not supported by IE", { node: c, word: "auto-fill" });
                  return;
                } else
                  p.startsWith("grid-template") && h.includes("[") && t.warn("Autoprefixer currently does not support line names. Try using grid-template-areas instead.", { node: c, word: "[" });
              if (h.includes("radial-gradient"))
                if (A2.test(c.value))
                  t.warn("Gradient has outdated direction syntax. New syntax is like `closest-side at 0 0` instead of `0 0, closest-side`.", { node: c });
                else {
                  let v = Bh(h);
                  for (let b of v.nodes)
                    if (b.type === "function" && b.value === "radial-gradient")
                      for (let x of b.nodes)
                        x.type === "word" && (x.value === "cover" ? t.warn("Gradient has outdated direction syntax. Replace `cover` to `farthest-corner`.", { node: c }) : x.value === "contain" && t.warn("Gradient has outdated direction syntax. Replace `contain` to `closest-side`.", { node: c }));
                }
              h.includes("linear-gradient") && _2.test(h) && t.warn("Gradient has outdated direction syntax. New syntax is like `to left` instead of `right`.", { node: c });
            }
            T2.includes(c.prop) && (c.value.includes("-fill-available") || (c.value.includes("fill-available") ? t.warn("Replace fill-available to stretch, because spec had been changed", { node: c }) : c.value.includes("fill") && Bh(h).nodes.some((b) => b.type === "word" && b.value === "fill") && t.warn("Replace fill to stretch, because spec had been changed", { node: c })));
            let w;
            if (c.prop === "transition" || c.prop === "transition-property")
              return this.prefixes.transition.add(c, t);
            if (c.prop === "align-self") {
              if (this.displayType(c) !== "grid" && this.prefixes.options.flexbox !== false && (w = this.prefixes.add["align-self"], w && w.prefixes && w.process(c)), this.gridStatus(c, t) !== false && (w = this.prefixes.add["grid-row-align"], w && w.prefixes))
                return w.process(c, t);
            } else if (c.prop === "justify-self") {
              if (this.gridStatus(c, t) !== false && (w = this.prefixes.add["grid-column-align"], w && w.prefixes))
                return w.process(c, t);
            } else if (c.prop === "place-self") {
              if (w = this.prefixes.add["place-self"], w && w.prefixes && this.gridStatus(c, t) !== false)
                return w.process(c, t);
            } else if (w = this.prefixes.add[c.prop], w && w.prefixes)
              return w.process(c, t);
          }), this.gridStatus(e, t) && C2(e, this.disabled), e.walkDecls((c) => {
            if (this.disabledValue(c, t))
              return;
            let d = this.prefixes.unprefixed(c.prop), p = this.prefixes.values("add", d);
            if (Array.isArray(p))
              for (let h of p)
                h.process && h.process(c, t);
            S2.save(this.prefixes, c);
          });
        }
        remove(e, t) {
          let i = this.prefixes.remove["@resolution"];
          e.walkAtRules((s, n) => {
            this.prefixes.remove[`@${s.name}`] ? this.disabled(s, t) || s.parent.removeChild(n) : s.name === "media" && s.params.includes("-resolution") && i && i.clean(s);
          });
          for (let s of this.prefixes.remove.selectors)
            e.walkRules((n, o) => {
              s.check(n) && (this.disabled(n, t) || n.parent.removeChild(o));
            });
          return e.walkDecls((s, n) => {
            if (this.disabled(s, t))
              return;
            let o = s.parent, a = this.prefixes.unprefixed(s.prop);
            if ((s.prop === "transition" || s.prop === "transition-property") && this.prefixes.transition.remove(s), this.prefixes.remove[s.prop] && this.prefixes.remove[s.prop].remove) {
              let u = this.prefixes.group(s).down((f) => this.prefixes.normalize(f.prop) === a);
              if (a === "flex-flow" && (u = true), s.prop === "-webkit-box-orient") {
                let f = { "flex-direction": true, "flex-flow": true };
                if (!s.parent.some((c) => f[c.prop]))
                  return;
              }
              if (u && !this.withHackValue(s)) {
                s.raw("before").includes(`
`) && this.reduceSpaces(s), o.removeChild(n);
                return;
              }
            }
            for (let u of this.prefixes.values("remove", a)) {
              if (!u.check || !u.check(s.value))
                continue;
              if (a = u.unprefixed, this.prefixes.group(s).down((c) => c.value.includes(a))) {
                o.removeChild(n);
                return;
              }
            }
          });
        }
        withHackValue(e) {
          return e.prop === "-webkit-background-clip" && e.value === "text";
        }
        disabledValue(e, t) {
          return this.gridStatus(e, t) === false && e.type === "decl" && e.prop === "display" && e.value.includes("grid") || this.prefixes.options.flexbox === false && e.type === "decl" && e.prop === "display" && e.value.includes("flex") || e.type === "decl" && e.prop === "content" ? true : this.disabled(e, t);
        }
        disabledDecl(e, t) {
          if (this.gridStatus(e, t) === false && e.type === "decl" && (e.prop.includes("grid") || e.prop === "justify-items"))
            return true;
          if (this.prefixes.options.flexbox === false && e.type === "decl") {
            let i = ["order", "justify-content", "align-items", "align-content"];
            if (e.prop.includes("flex") || i.includes(e.prop))
              return true;
          }
          return this.disabled(e, t);
        }
        disabled(e, t) {
          if (!e)
            return false;
          if (e._autoprefixerDisabled !== void 0)
            return e._autoprefixerDisabled;
          if (e.parent) {
            let s = e.prev();
            if (s && s.type === "comment" && E2.test(s.text))
              return e._autoprefixerDisabled = true, e._autoprefixerSelfDisabled = true, true;
          }
          let i = null;
          if (e.nodes) {
            let s;
            e.each((n) => {
              n.type === "comment" && /(!\s*)?autoprefixer:\s*(off|on)/i.test(n.text) && (typeof s != "undefined" ? t.warn("Second Autoprefixer control comment was ignored. Autoprefixer applies control comment to whole block, not to next rules.", { node: n }) : s = /on/i.test(n.text));
            }), s !== void 0 && (i = !s);
          }
          if (!e.nodes || i === null)
            if (e.parent) {
              let s = this.disabled(e.parent, t);
              e.parent._autoprefixerSelfDisabled === true ? i = false : i = s;
            } else
              i = false;
          return e._autoprefixerDisabled = i, i;
        }
        reduceSpaces(e) {
          let t = false;
          if (this.prefixes.group(e).up(() => (t = true, true)), t)
            return;
          let i = e.raw("before").split(`
`), s = i[i.length - 1].length, n = false;
          this.prefixes.group(e).down((o) => {
            i = o.raw("before").split(`
`);
            let a = i.length - 1;
            i[a].length > s && (n === false && (n = i[a].length - s), i[a] = i[a].slice(0, -n), o.raws.before = i.join(`
`));
          });
        }
        displayType(e) {
          for (let t of e.parent.nodes)
            if (t.prop === "display") {
              if (t.value.includes("flex"))
                return "flex";
              if (t.value.includes("grid"))
                return "grid";
            }
          return false;
        }
        gridStatus(e, t) {
          if (!e)
            return false;
          if (e._autoprefixerGridStatus !== void 0)
            return e._autoprefixerGridStatus;
          let i = null;
          if (e.nodes) {
            let s;
            e.each((n) => {
              if (n.type === "comment" && O2.test(n.text)) {
                let o = /:\s*autoplace/i.test(n.text), a = /no-autoplace/i.test(n.text);
                typeof s != "undefined" ? t.warn("Second Autoprefixer grid control comment was ignored. Autoprefixer applies control comments to the whole block, not to the next rules.", { node: n }) : o ? s = "autoplace" : a ? s = true : s = /on/i.test(n.text);
              }
            }), s !== void 0 && (i = s);
          }
          if (e.type === "atrule" && e.name === "supports") {
            let s = e.params;
            s.includes("grid") && s.includes("auto") && (i = false);
          }
          if (!e.nodes || i === null)
            if (e.parent) {
              let s = this.gridStatus(e.parent, t);
              e.parent._autoprefixerSelfDisabled === true ? i = false : i = s;
            } else
              typeof this.prefixes.options.grid != "undefined" ? i = this.prefixes.options.grid : typeof m.env.AUTOPREFIXER_GRID != "undefined" ? m.env.AUTOPREFIXER_GRID === "autoplace" ? i = "autoplace" : i = true : i = false;
          return e._autoprefixerGridStatus = i, i;
        }
      };
      $h.exports = zh;
    });
    var Uh = y((d3, jh) => {
      l();
      jh.exports = { A: { A: { "2": "J D E F A B iB" }, B: { "1": "C K L G M N O R S T U V W X Y Z a P b H" }, C: { "1": "0 1 2 3 4 5 6 7 8 9 g h i j k l m n o p q r s t u v w x y z AB BB CB DB EB FB GB bB HB cB IB JB Q KB LB MB NB OB PB QB RB SB TB UB VB WB XB R S T kB U V W X Y Z a P b H dB", "2": "jB aB I c J D E F A B C K L G M N O d e f lB mB" }, D: { "1": "0 1 2 3 4 5 6 7 8 9 m n o p q r s t u v w x y z AB BB CB DB EB FB GB bB HB cB IB JB Q KB LB MB NB OB PB QB RB SB TB UB VB WB XB R S T U V W X Y Z a P b H dB nB oB", "2": "I c J D E F A B C K L G M N O d e f g h i j k l" }, E: { "1": "F A B C K L G tB fB YB ZB uB vB wB", "2": "I c J D E pB eB qB rB sB" }, F: { "1": "0 1 2 3 4 5 6 7 8 9 G M N O d e f g h i j k l m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB Q KB LB MB NB OB PB QB RB SB TB UB VB WB XB ZB", "2": "F B C xB yB zB 0B YB gB 1B" }, G: { "1": "7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC", "2": "E eB 2B hB 3B 4B 5B 6B" }, H: { "1": "LC" }, I: { "1": "H QC RC", "2": "aB I MC NC OC PC hB" }, J: { "2": "D A" }, K: { "1": "Q", "2": "A B C YB gB ZB" }, L: { "1": "H" }, M: { "1": "P" }, N: { "2": "A B" }, O: { "1": "SC" }, P: { "1": "I TC UC VC WC XC fB YC ZC aC bC" }, Q: { "1": "cC" }, R: { "1": "dC" }, S: { "1": "eC" } }, B: 4, C: "CSS Feature Queries" };
    });
    var Hh = y((h3, Gh) => {
      l();
      function Vh(r) {
        return r[r.length - 1];
      }
      var Wh = { parse(r) {
        let e = [""], t = [e];
        for (let i of r) {
          if (i === "(") {
            e = [""], Vh(t).push(e), t.push(e);
            continue;
          }
          if (i === ")") {
            t.pop(), e = Vh(t), e.push("");
            continue;
          }
          e[e.length - 1] += i;
        }
        return t[0];
      }, stringify(r) {
        let e = "";
        for (let t of r) {
          if (typeof t == "object") {
            e += `(${Wh.stringify(t)})`;
            continue;
          }
          e += t;
        }
        return e;
      } };
      Gh.exports = Wh;
    });
    var Kh = y((m3, Xh) => {
      l();
      var D2 = Uh(), { feature: q2 } = (_s(), Cs), { parse: I2 } = ue(), R2 = Ze(), wa = Hh(), M2 = ce(), L2 = Z(), Yh = q2(D2), Qh = [];
      for (let r in Yh.stats) {
        let e = Yh.stats[r];
        for (let t in e) {
          let i = e[t];
          /y/.test(i) && Qh.push(r + " " + t);
        }
      }
      var Jh = class {
        constructor(e, t) {
          this.Prefixes = e, this.all = t;
        }
        prefixer() {
          if (this.prefixerCache)
            return this.prefixerCache;
          let e = this.all.browsers.selected.filter((i) => Qh.includes(i)), t = new R2(this.all.browsers.data, e, this.all.options);
          return this.prefixerCache = new this.Prefixes(this.all.data, t, this.all.options), this.prefixerCache;
        }
        parse(e) {
          let t = e.split(":"), i = t[0], s = t[1];
          return s || (s = ""), [i.trim(), s.trim()];
        }
        virtual(e) {
          let [t, i] = this.parse(e), s = I2("a{}").first;
          return s.append({ prop: t, value: i, raws: { before: "" } }), s;
        }
        prefixed(e) {
          let t = this.virtual(e);
          if (this.disabled(t.first))
            return t.nodes;
          let i = { warn: () => null }, s = this.prefixer().add[t.first.prop];
          s && s.process && s.process(t.first, i);
          for (let n of t.nodes) {
            for (let o of this.prefixer().values("add", t.first.prop))
              o.process(n);
            M2.save(this.all, n);
          }
          return t.nodes;
        }
        isNot(e) {
          return typeof e == "string" && /not\s*/i.test(e);
        }
        isOr(e) {
          return typeof e == "string" && /\s*or\s*/i.test(e);
        }
        isProp(e) {
          return typeof e == "object" && e.length === 1 && typeof e[0] == "string";
        }
        isHack(e, t) {
          return !new RegExp(`(\\(|\\s)${L2.escapeRegexp(t)}:`).test(e);
        }
        toRemove(e, t) {
          let [i, s] = this.parse(e), n = this.all.unprefixed(i), o = this.all.cleaner();
          if (o.remove[i] && o.remove[i].remove && !this.isHack(t, n))
            return true;
          for (let a of o.values("remove", n))
            if (a.check(s))
              return true;
          return false;
        }
        remove(e, t) {
          let i = 0;
          for (; i < e.length; ) {
            if (!this.isNot(e[i - 1]) && this.isProp(e[i]) && this.isOr(e[i + 1])) {
              if (this.toRemove(e[i][0], t)) {
                e.splice(i, 2);
                continue;
              }
              i += 2;
              continue;
            }
            typeof e[i] == "object" && (e[i] = this.remove(e[i], t)), i += 1;
          }
          return e;
        }
        cleanBrackets(e) {
          return e.map((t) => typeof t != "object" ? t : t.length === 1 && typeof t[0] == "object" ? this.cleanBrackets(t[0]) : this.cleanBrackets(t));
        }
        convert(e) {
          let t = [""];
          for (let i of e)
            t.push([`${i.prop}: ${i.value}`]), t.push(" or ");
          return t[t.length - 1] = "", t;
        }
        normalize(e) {
          if (typeof e != "object")
            return e;
          if (e = e.filter((t) => t !== ""), typeof e[0] == "string") {
            let t = e[0].trim();
            if (t.includes(":") || t === "selector" || t === "not selector")
              return [wa.stringify(e)];
          }
          return e.map((t) => this.normalize(t));
        }
        add(e, t) {
          return e.map((i) => {
            if (this.isProp(i)) {
              let s = this.prefixed(i[0]);
              return s.length > 1 ? this.convert(s) : i;
            }
            return typeof i == "object" ? this.add(i, t) : i;
          });
        }
        process(e) {
          let t = wa.parse(e.params);
          t = this.normalize(t), t = this.remove(t, e.params), t = this.add(t, e.params), t = this.cleanBrackets(t), e.params = wa.stringify(t);
        }
        disabled(e) {
          if (!this.all.options.grid && (e.prop === "display" && e.value.includes("grid") || e.prop.includes("grid") || e.prop === "justify-items"))
            return true;
          if (this.all.options.flexbox === false) {
            if (e.prop === "display" && e.value.includes("flex"))
              return true;
            let t = ["order", "justify-content", "align-items", "align-content"];
            if (e.prop.includes("flex") || t.includes(e.prop))
              return true;
          }
          return false;
        }
      };
      Xh.exports = Jh;
    });
    var tm = y((g3, em) => {
      l();
      var Zh = class {
        constructor(e, t) {
          this.prefix = t, this.prefixed = e.prefixed(this.prefix), this.regexp = e.regexp(this.prefix), this.prefixeds = e.possible().map((i) => [e.prefixed(i), e.regexp(i)]), this.unprefixed = e.name, this.nameRegexp = e.regexp();
        }
        isHack(e) {
          let t = e.parent.index(e) + 1, i = e.parent.nodes;
          for (; t < i.length; ) {
            let s = i[t].selector;
            if (!s)
              return true;
            if (s.includes(this.unprefixed) && s.match(this.nameRegexp))
              return false;
            let n = false;
            for (let [o, a] of this.prefixeds)
              if (s.includes(o) && s.match(a)) {
                n = true;
                break;
              }
            if (!n)
              return true;
            t += 1;
          }
          return true;
        }
        check(e) {
          return !(!e.selector.includes(this.prefixed) || !e.selector.match(this.regexp) || this.isHack(e));
        }
      };
      em.exports = Zh;
    });
    var Ft = y((w3, im) => {
      l();
      var { list: F2 } = ue(), N2 = tm(), B2 = Mt(), z2 = Ze(), $2 = Z(), rm = class extends B2 {
        constructor(e, t, i) {
          super(e, t, i);
          this.regexpCache = /* @__PURE__ */ new Map();
        }
        check(e) {
          return e.selector.includes(this.name) ? !!e.selector.match(this.regexp()) : false;
        }
        prefixed(e) {
          return this.name.replace(/^(\W*)/, `$1${e}`);
        }
        regexp(e) {
          if (!this.regexpCache.has(e)) {
            let t = e ? this.prefixed(e) : this.name;
            this.regexpCache.set(e, new RegExp(`(^|[^:"'=])${$2.escapeRegexp(t)}`, "gi"));
          }
          return this.regexpCache.get(e);
        }
        possible() {
          return z2.prefixes();
        }
        prefixeds(e) {
          if (e._autoprefixerPrefixeds) {
            if (e._autoprefixerPrefixeds[this.name])
              return e._autoprefixerPrefixeds;
          } else
            e._autoprefixerPrefixeds = {};
          let t = {};
          if (e.selector.includes(",")) {
            let s = F2.comma(e.selector).filter((n) => n.includes(this.name));
            for (let n of this.possible())
              t[n] = s.map((o) => this.replace(o, n)).join(", ");
          } else
            for (let i of this.possible())
              t[i] = this.replace(e.selector, i);
          return e._autoprefixerPrefixeds[this.name] = t, e._autoprefixerPrefixeds;
        }
        already(e, t, i) {
          let s = e.parent.index(e) - 1;
          for (; s >= 0; ) {
            let n = e.parent.nodes[s];
            if (n.type !== "rule")
              return false;
            let o = false;
            for (let a in t[this.name]) {
              let u = t[this.name][a];
              if (n.selector === u) {
                if (i === a)
                  return true;
                o = true;
                break;
              }
            }
            if (!o)
              return false;
            s -= 1;
          }
          return false;
        }
        replace(e, t) {
          return e.replace(this.regexp(), `$1${this.prefixed(t)}`);
        }
        add(e, t) {
          let i = this.prefixeds(e);
          if (this.already(e, i, t))
            return;
          let s = this.clone(e, { selector: i[this.name][t] });
          e.parent.insertBefore(e, s);
        }
        old(e) {
          return new N2(this, e);
        }
      };
      im.exports = rm;
    });
    var om = y((y3, nm) => {
      l();
      var j2 = Mt(), sm = class extends j2 {
        add(e, t) {
          let i = t + e.name;
          if (e.parent.some((o) => o.name === i && o.params === e.params))
            return;
          let n = this.clone(e, { name: i });
          return e.parent.insertBefore(e, n);
        }
        process(e) {
          let t = this.parentPrefix(e);
          for (let i of this.prefixes)
            (!t || t === i) && this.add(e, i);
        }
      };
      nm.exports = sm;
    });
    var lm = y((b3, am) => {
      l();
      var U2 = Ft(), ya = class extends U2 {
        prefixed(e) {
          return e === "-webkit-" ? ":-webkit-full-screen" : e === "-moz-" ? ":-moz-full-screen" : `:${e}fullscreen`;
        }
      };
      ya.names = [":fullscreen"];
      am.exports = ya;
    });
    var fm = y((x3, um) => {
      l();
      var V2 = Ft(), ba = class extends V2 {
        possible() {
          return super.possible().concat(["-moz- old", "-ms- old"]);
        }
        prefixed(e) {
          return e === "-webkit-" ? "::-webkit-input-placeholder" : e === "-ms-" ? "::-ms-input-placeholder" : e === "-ms- old" ? ":-ms-input-placeholder" : e === "-moz- old" ? ":-moz-placeholder" : `::${e}placeholder`;
        }
      };
      ba.names = ["::placeholder"];
      um.exports = ba;
    });
    var pm = y((v3, cm) => {
      l();
      var W2 = Ft(), xa = class extends W2 {
        prefixed(e) {
          return e === "-ms-" ? ":-ms-input-placeholder" : `:${e}placeholder-shown`;
        }
      };
      xa.names = [":placeholder-shown"];
      cm.exports = xa;
    });
    var hm = y((k3, dm) => {
      l();
      var G2 = Ft(), H2 = Z(), va = class extends G2 {
        constructor(e, t, i) {
          super(e, t, i);
          this.prefixes && (this.prefixes = H2.uniq(this.prefixes.map((s) => "-webkit-")));
        }
        prefixed(e) {
          return e === "-webkit-" ? "::-webkit-file-upload-button" : `::${e}file-selector-button`;
        }
      };
      va.names = ["::file-selector-button"];
      dm.exports = va;
    });
    var re = y((S3, mm) => {
      l();
      mm.exports = function(r) {
        let e;
        return r === "-webkit- 2009" || r === "-moz-" ? e = 2009 : r === "-ms-" ? e = 2012 : r === "-webkit-" && (e = "final"), r === "-webkit- 2009" && (r = "-webkit-"), [e, r];
      };
    });
    var bm = y((C3, ym) => {
      l();
      var gm = ue().list, wm = re(), Y2 = D(), Nt = class extends Y2 {
        prefixed(e, t) {
          let i;
          return [i, t] = wm(t), i === 2009 ? t + "box-flex" : super.prefixed(e, t);
        }
        normalize() {
          return "flex";
        }
        set(e, t) {
          let i = wm(t)[0];
          if (i === 2009)
            return e.value = gm.space(e.value)[0], e.value = Nt.oldValues[e.value] || e.value, super.set(e, t);
          if (i === 2012) {
            let s = gm.space(e.value);
            s.length === 3 && s[2] === "0" && (e.value = s.slice(0, 2).concat("0px").join(" "));
          }
          return super.set(e, t);
        }
      };
      Nt.names = ["flex", "box-flex"];
      Nt.oldValues = { auto: "1", none: "0" };
      ym.exports = Nt;
    });
    var km = y((_3, vm) => {
      l();
      var xm = re(), Q2 = D(), ka = class extends Q2 {
        prefixed(e, t) {
          let i;
          return [i, t] = xm(t), i === 2009 ? t + "box-ordinal-group" : i === 2012 ? t + "flex-order" : super.prefixed(e, t);
        }
        normalize() {
          return "order";
        }
        set(e, t) {
          return xm(t)[0] === 2009 && /\d/.test(e.value) ? (e.value = (parseInt(e.value) + 1).toString(), super.set(e, t)) : super.set(e, t);
        }
      };
      ka.names = ["order", "flex-order", "box-ordinal-group"];
      vm.exports = ka;
    });
    var Cm = y((A3, Sm) => {
      l();
      var J2 = D(), Sa = class extends J2 {
        check(e) {
          let t = e.value;
          return !t.toLowerCase().includes("alpha(") && !t.includes("DXImageTransform.Microsoft") && !t.includes("data:image/svg+xml");
        }
      };
      Sa.names = ["filter"];
      Sm.exports = Sa;
    });
    var Am = y((E3, _m) => {
      l();
      var X2 = D(), Ca = class extends X2 {
        insert(e, t, i, s) {
          if (t !== "-ms-")
            return super.insert(e, t, i);
          let n = this.clone(e), o = e.prop.replace(/end$/, "start"), a = t + e.prop.replace(/end$/, "span");
          if (!e.parent.some((u) => u.prop === a)) {
            if (n.prop = a, e.value.includes("span"))
              n.value = e.value.replace(/span\s/i, "");
            else {
              let u;
              if (e.parent.walkDecls(o, (f) => {
                u = f;
              }), u) {
                let f = Number(e.value) - Number(u.value) + "";
                n.value = f;
              } else
                e.warn(s, `Can not prefix ${e.prop} (${o} is not found)`);
            }
            e.cloneBefore(n);
          }
        }
      };
      Ca.names = ["grid-row-end", "grid-column-end"];
      _m.exports = Ca;
    });
    var Om = y((O3, Em) => {
      l();
      var K2 = D(), _a = class extends K2 {
        check(e) {
          return !e.value.split(/\s+/).some((t) => {
            let i = t.toLowerCase();
            return i === "reverse" || i === "alternate-reverse";
          });
        }
      };
      _a.names = ["animation", "animation-direction"];
      Em.exports = _a;
    });
    var Pm = y((T3, Tm) => {
      l();
      var Z2 = re(), eC = D(), Aa = class extends eC {
        insert(e, t, i) {
          let s;
          if ([s, t] = Z2(t), s !== 2009)
            return super.insert(e, t, i);
          let n = e.value.split(/\s+/).filter((d) => d !== "wrap" && d !== "nowrap" && "wrap-reverse");
          if (n.length === 0 || e.parent.some((d) => d.prop === t + "box-orient" || d.prop === t + "box-direction"))
            return;
          let a = n[0], u = a.includes("row") ? "horizontal" : "vertical", f = a.includes("reverse") ? "reverse" : "normal", c = this.clone(e);
          return c.prop = t + "box-orient", c.value = u, this.needCascade(e) && (c.raws.before = this.calcBefore(i, e, t)), e.parent.insertBefore(e, c), c = this.clone(e), c.prop = t + "box-direction", c.value = f, this.needCascade(e) && (c.raws.before = this.calcBefore(i, e, t)), e.parent.insertBefore(e, c);
        }
      };
      Aa.names = ["flex-flow", "box-direction", "box-orient"];
      Tm.exports = Aa;
    });
    var qm = y((P3, Dm) => {
      l();
      var tC = re(), rC = D(), Ea = class extends rC {
        normalize() {
          return "flex";
        }
        prefixed(e, t) {
          let i;
          return [i, t] = tC(t), i === 2009 ? t + "box-flex" : i === 2012 ? t + "flex-positive" : super.prefixed(e, t);
        }
      };
      Ea.names = ["flex-grow", "flex-positive"];
      Dm.exports = Ea;
    });
    var Rm = y((D3, Im) => {
      l();
      var iC = re(), sC = D(), Oa = class extends sC {
        set(e, t) {
          if (iC(t)[0] !== 2009)
            return super.set(e, t);
        }
      };
      Oa.names = ["flex-wrap"];
      Im.exports = Oa;
    });
    var Lm = y((q3, Mm) => {
      l();
      var nC = D(), Bt = et(), Ta = class extends nC {
        insert(e, t, i, s) {
          if (t !== "-ms-")
            return super.insert(e, t, i);
          let n = Bt.parse(e), [o, a] = Bt.translate(n, 0, 2), [u, f] = Bt.translate(n, 1, 3);
          [["grid-row", o], ["grid-row-span", a], ["grid-column", u], ["grid-column-span", f]].forEach(([c, d]) => {
            Bt.insertDecl(e, c, d);
          }), Bt.warnTemplateSelectorNotFound(e, s), Bt.warnIfGridRowColumnExists(e, s);
        }
      };
      Ta.names = ["grid-area"];
      Mm.exports = Ta;
    });
    var Nm = y((I3, Fm) => {
      l();
      var oC = D(), Qr = et(), Pa = class extends oC {
        insert(e, t, i) {
          if (t !== "-ms-")
            return super.insert(e, t, i);
          if (e.parent.some((o) => o.prop === "-ms-grid-row-align"))
            return;
          let [[s, n]] = Qr.parse(e);
          n ? (Qr.insertDecl(e, "grid-row-align", s), Qr.insertDecl(e, "grid-column-align", n)) : (Qr.insertDecl(e, "grid-row-align", s), Qr.insertDecl(e, "grid-column-align", s));
        }
      };
      Pa.names = ["place-self"];
      Fm.exports = Pa;
    });
    var zm = y((R3, Bm) => {
      l();
      var aC = D(), Da = class extends aC {
        check(e) {
          let t = e.value;
          return !t.includes("/") || t.includes("span");
        }
        normalize(e) {
          return e.replace("-start", "");
        }
        prefixed(e, t) {
          let i = super.prefixed(e, t);
          return t === "-ms-" && (i = i.replace("-start", "")), i;
        }
      };
      Da.names = ["grid-row-start", "grid-column-start"];
      Bm.exports = Da;
    });
    var Um = y((M3, jm) => {
      l();
      var $m = re(), lC = D(), zt = class extends lC {
        check(e) {
          return e.parent && !e.parent.some((t) => t.prop && t.prop.startsWith("grid-"));
        }
        prefixed(e, t) {
          let i;
          return [i, t] = $m(t), i === 2012 ? t + "flex-item-align" : super.prefixed(e, t);
        }
        normalize() {
          return "align-self";
        }
        set(e, t) {
          let i = $m(t)[0];
          if (i === 2012)
            return e.value = zt.oldValues[e.value] || e.value, super.set(e, t);
          if (i === "final")
            return super.set(e, t);
        }
      };
      zt.names = ["align-self", "flex-item-align"];
      zt.oldValues = { "flex-end": "end", "flex-start": "start" };
      jm.exports = zt;
    });
    var Wm = y((L3, Vm) => {
      l();
      var uC = D(), fC = Z(), qa = class extends uC {
        constructor(e, t, i) {
          super(e, t, i);
          this.prefixes && (this.prefixes = fC.uniq(this.prefixes.map((s) => s === "-ms-" ? "-webkit-" : s)));
        }
      };
      qa.names = ["appearance"];
      Vm.exports = qa;
    });
    var Ym = y((F3, Hm) => {
      l();
      var Gm = re(), cC = D(), Ia = class extends cC {
        normalize() {
          return "flex-basis";
        }
        prefixed(e, t) {
          let i;
          return [i, t] = Gm(t), i === 2012 ? t + "flex-preferred-size" : super.prefixed(e, t);
        }
        set(e, t) {
          let i;
          if ([i, t] = Gm(t), i === 2012 || i === "final")
            return super.set(e, t);
        }
      };
      Ia.names = ["flex-basis", "flex-preferred-size"];
      Hm.exports = Ia;
    });
    var Jm = y((N3, Qm) => {
      l();
      var pC = D(), Ra = class extends pC {
        normalize() {
          return this.name.replace("box-image", "border");
        }
        prefixed(e, t) {
          let i = super.prefixed(e, t);
          return t === "-webkit-" && (i = i.replace("border", "box-image")), i;
        }
      };
      Ra.names = ["mask-border", "mask-border-source", "mask-border-slice", "mask-border-width", "mask-border-outset", "mask-border-repeat", "mask-box-image", "mask-box-image-source", "mask-box-image-slice", "mask-box-image-width", "mask-box-image-outset", "mask-box-image-repeat"];
      Qm.exports = Ra;
    });
    var Km = y((B3, Xm) => {
      l();
      var dC = D(), Te = class extends dC {
        insert(e, t, i) {
          let s = e.prop === "mask-composite", n;
          s ? n = e.value.split(",") : n = e.value.match(Te.regexp) || [], n = n.map((f) => f.trim()).filter((f) => f);
          let o = n.length, a;
          if (o && (a = this.clone(e), a.value = n.map((f) => Te.oldValues[f] || f).join(", "), n.includes("intersect") && (a.value += ", xor"), a.prop = t + "mask-composite"), s)
            return o ? (this.needCascade(e) && (a.raws.before = this.calcBefore(i, e, t)), e.parent.insertBefore(e, a)) : void 0;
          let u = this.clone(e);
          return u.prop = t + u.prop, o && (u.value = u.value.replace(Te.regexp, "")), this.needCascade(e) && (u.raws.before = this.calcBefore(i, e, t)), e.parent.insertBefore(e, u), o ? (this.needCascade(e) && (a.raws.before = this.calcBefore(i, e, t)), e.parent.insertBefore(e, a)) : e;
        }
      };
      Te.names = ["mask", "mask-composite"];
      Te.oldValues = { add: "source-over", subtract: "source-out", intersect: "source-in", exclude: "xor" };
      Te.regexp = new RegExp(`\\s+(${Object.keys(Te.oldValues).join("|")})\\b(?!\\))\\s*(?=[,])`, "ig");
      Xm.exports = Te;
    });
    var tg = y((z3, eg) => {
      l();
      var Zm = re(), hC = D(), $t = class extends hC {
        prefixed(e, t) {
          let i;
          return [i, t] = Zm(t), i === 2009 ? t + "box-align" : i === 2012 ? t + "flex-align" : super.prefixed(e, t);
        }
        normalize() {
          return "align-items";
        }
        set(e, t) {
          let i = Zm(t)[0];
          return (i === 2009 || i === 2012) && (e.value = $t.oldValues[e.value] || e.value), super.set(e, t);
        }
      };
      $t.names = ["align-items", "flex-align", "box-align"];
      $t.oldValues = { "flex-end": "end", "flex-start": "start" };
      eg.exports = $t;
    });
    var ig = y(($3, rg) => {
      l();
      var mC = D(), Ma = class extends mC {
        set(e, t) {
          return t === "-ms-" && e.value === "contain" && (e.value = "element"), super.set(e, t);
        }
        insert(e, t, i) {
          if (!(e.value === "all" && t === "-ms-"))
            return super.insert(e, t, i);
        }
      };
      Ma.names = ["user-select"];
      rg.exports = Ma;
    });
    var og = y((j3, ng) => {
      l();
      var sg = re(), gC = D(), La = class extends gC {
        normalize() {
          return "flex-shrink";
        }
        prefixed(e, t) {
          let i;
          return [i, t] = sg(t), i === 2012 ? t + "flex-negative" : super.prefixed(e, t);
        }
        set(e, t) {
          let i;
          if ([i, t] = sg(t), i === 2012 || i === "final")
            return super.set(e, t);
        }
      };
      La.names = ["flex-shrink", "flex-negative"];
      ng.exports = La;
    });
    var lg = y((U3, ag) => {
      l();
      var wC = D(), Fa = class extends wC {
        prefixed(e, t) {
          return `${t}column-${e}`;
        }
        normalize(e) {
          return e.includes("inside") ? "break-inside" : e.includes("before") ? "break-before" : "break-after";
        }
        set(e, t) {
          return (e.prop === "break-inside" && e.value === "avoid-column" || e.value === "avoid-page") && (e.value = "avoid"), super.set(e, t);
        }
        insert(e, t, i) {
          if (e.prop !== "break-inside")
            return super.insert(e, t, i);
          if (!(/region/i.test(e.value) || /page/i.test(e.value)))
            return super.insert(e, t, i);
        }
      };
      Fa.names = ["break-inside", "page-break-inside", "column-break-inside", "break-before", "page-break-before", "column-break-before", "break-after", "page-break-after", "column-break-after"];
      ag.exports = Fa;
    });
    var fg = y((V3, ug) => {
      l();
      var yC = D(), Na = class extends yC {
        prefixed(e, t) {
          return t + "print-color-adjust";
        }
        normalize() {
          return "color-adjust";
        }
      };
      Na.names = ["color-adjust", "print-color-adjust"];
      ug.exports = Na;
    });
    var pg = y((W3, cg) => {
      l();
      var bC = D(), jt = class extends bC {
        insert(e, t, i) {
          if (t === "-ms-") {
            let s = this.set(this.clone(e), t);
            this.needCascade(e) && (s.raws.before = this.calcBefore(i, e, t));
            let n = "ltr";
            return e.parent.nodes.forEach((o) => {
              o.prop === "direction" && (o.value === "rtl" || o.value === "ltr") && (n = o.value);
            }), s.value = jt.msValues[n][e.value] || e.value, e.parent.insertBefore(e, s);
          }
          return super.insert(e, t, i);
        }
      };
      jt.names = ["writing-mode"];
      jt.msValues = { ltr: { "horizontal-tb": "lr-tb", "vertical-rl": "tb-rl", "vertical-lr": "tb-lr" }, rtl: { "horizontal-tb": "rl-tb", "vertical-rl": "bt-rl", "vertical-lr": "bt-lr" } };
      cg.exports = jt;
    });
    var hg = y((G3, dg) => {
      l();
      var xC = D(), Ba = class extends xC {
        set(e, t) {
          return e.value = e.value.replace(/\s+fill(\s)/, "$1"), super.set(e, t);
        }
      };
      Ba.names = ["border-image"];
      dg.exports = Ba;
    });
    var wg = y((H3, gg) => {
      l();
      var mg = re(), vC = D(), Ut = class extends vC {
        prefixed(e, t) {
          let i;
          return [i, t] = mg(t), i === 2012 ? t + "flex-line-pack" : super.prefixed(e, t);
        }
        normalize() {
          return "align-content";
        }
        set(e, t) {
          let i = mg(t)[0];
          if (i === 2012)
            return e.value = Ut.oldValues[e.value] || e.value, super.set(e, t);
          if (i === "final")
            return super.set(e, t);
        }
      };
      Ut.names = ["align-content", "flex-line-pack"];
      Ut.oldValues = { "flex-end": "end", "flex-start": "start", "space-between": "justify", "space-around": "distribute" };
      gg.exports = Ut;
    });
    var bg = y((Y3, yg) => {
      l();
      var kC = D(), pe = class extends kC {
        prefixed(e, t) {
          return t === "-moz-" ? t + (pe.toMozilla[e] || e) : super.prefixed(e, t);
        }
        normalize(e) {
          return pe.toNormal[e] || e;
        }
      };
      pe.names = ["border-radius"];
      pe.toMozilla = {};
      pe.toNormal = {};
      for (let r of ["top", "bottom"])
        for (let e of ["left", "right"]) {
          let t = `border-${r}-${e}-radius`, i = `border-radius-${r}${e}`;
          pe.names.push(t), pe.names.push(i), pe.toMozilla[t] = i, pe.toNormal[i] = t;
        }
      yg.exports = pe;
    });
    var vg = y((Q3, xg) => {
      l();
      var SC = D(), za = class extends SC {
        prefixed(e, t) {
          return e.includes("-start") ? t + e.replace("-block-start", "-before") : t + e.replace("-block-end", "-after");
        }
        normalize(e) {
          return e.includes("-before") ? e.replace("-before", "-block-start") : e.replace("-after", "-block-end");
        }
      };
      za.names = ["border-block-start", "border-block-end", "margin-block-start", "margin-block-end", "padding-block-start", "padding-block-end", "border-before", "border-after", "margin-before", "margin-after", "padding-before", "padding-after"];
      xg.exports = za;
    });
    var Sg = y((J3, kg) => {
      l();
      var CC = D(), { parseTemplate: _C, warnMissedAreas: AC, getGridGap: EC, warnGridGap: OC, inheritGridGap: TC } = et(), $a = class extends CC {
        insert(e, t, i, s) {
          if (t !== "-ms-")
            return super.insert(e, t, i);
          if (e.parent.some((h) => h.prop === "-ms-grid-rows"))
            return;
          let n = EC(e), o = TC(e, n), { rows: a, columns: u, areas: f } = _C({ decl: e, gap: o || n }), c = Object.keys(f).length > 0, d = Boolean(a), p = Boolean(u);
          return OC({ gap: n, hasColumns: p, decl: e, result: s }), AC(f, e, s), (d && p || c) && e.cloneBefore({ prop: "-ms-grid-rows", value: a, raws: {} }), p && e.cloneBefore({ prop: "-ms-grid-columns", value: u, raws: {} }), e;
        }
      };
      $a.names = ["grid-template"];
      kg.exports = $a;
    });
    var _g = y((X3, Cg) => {
      l();
      var PC = D(), ja = class extends PC {
        prefixed(e, t) {
          return t + e.replace("-inline", "");
        }
        normalize(e) {
          return e.replace(/(margin|padding|border)-(start|end)/, "$1-inline-$2");
        }
      };
      ja.names = ["border-inline-start", "border-inline-end", "margin-inline-start", "margin-inline-end", "padding-inline-start", "padding-inline-end", "border-start", "border-end", "margin-start", "margin-end", "padding-start", "padding-end"];
      Cg.exports = ja;
    });
    var Eg = y((K3, Ag) => {
      l();
      var DC = D(), Ua = class extends DC {
        check(e) {
          return !e.value.includes("flex-") && e.value !== "baseline";
        }
        prefixed(e, t) {
          return t + "grid-row-align";
        }
        normalize() {
          return "align-self";
        }
      };
      Ua.names = ["grid-row-align"];
      Ag.exports = Ua;
    });
    var Tg = y((Z3, Og) => {
      l();
      var qC = D(), Vt = class extends qC {
        keyframeParents(e) {
          let { parent: t } = e;
          for (; t; ) {
            if (t.type === "atrule" && t.name === "keyframes")
              return true;
            ({ parent: t } = t);
          }
          return false;
        }
        contain3d(e) {
          if (e.prop === "transform-origin")
            return false;
          for (let t of Vt.functions3d)
            if (e.value.includes(`${t}(`))
              return true;
          return false;
        }
        set(e, t) {
          return e = super.set(e, t), t === "-ms-" && (e.value = e.value.replace(/rotatez/gi, "rotate")), e;
        }
        insert(e, t, i) {
          if (t === "-ms-") {
            if (!this.contain3d(e) && !this.keyframeParents(e))
              return super.insert(e, t, i);
          } else if (t === "-o-") {
            if (!this.contain3d(e))
              return super.insert(e, t, i);
          } else
            return super.insert(e, t, i);
        }
      };
      Vt.names = ["transform", "transform-origin"];
      Vt.functions3d = ["matrix3d", "translate3d", "translateZ", "scale3d", "scaleZ", "rotate3d", "rotateX", "rotateY", "perspective"];
      Og.exports = Vt;
    });
    var qg = y((eD, Dg) => {
      l();
      var Pg = re(), IC = D(), Va = class extends IC {
        normalize() {
          return "flex-direction";
        }
        insert(e, t, i) {
          let s;
          if ([s, t] = Pg(t), s !== 2009)
            return super.insert(e, t, i);
          if (e.parent.some((c) => c.prop === t + "box-orient" || c.prop === t + "box-direction"))
            return;
          let o = e.value, a, u;
          o === "inherit" || o === "initial" || o === "unset" ? (a = o, u = o) : (a = o.includes("row") ? "horizontal" : "vertical", u = o.includes("reverse") ? "reverse" : "normal");
          let f = this.clone(e);
          return f.prop = t + "box-orient", f.value = a, this.needCascade(e) && (f.raws.before = this.calcBefore(i, e, t)), e.parent.insertBefore(e, f), f = this.clone(e), f.prop = t + "box-direction", f.value = u, this.needCascade(e) && (f.raws.before = this.calcBefore(i, e, t)), e.parent.insertBefore(e, f);
        }
        old(e, t) {
          let i;
          return [i, t] = Pg(t), i === 2009 ? [t + "box-orient", t + "box-direction"] : super.old(e, t);
        }
      };
      Va.names = ["flex-direction", "box-direction", "box-orient"];
      Dg.exports = Va;
    });
    var Rg = y((tD, Ig) => {
      l();
      var RC = D(), Wa = class extends RC {
        check(e) {
          return e.value === "pixelated";
        }
        prefixed(e, t) {
          return t === "-ms-" ? "-ms-interpolation-mode" : super.prefixed(e, t);
        }
        set(e, t) {
          return t !== "-ms-" ? super.set(e, t) : (e.prop = "-ms-interpolation-mode", e.value = "nearest-neighbor", e);
        }
        normalize() {
          return "image-rendering";
        }
        process(e, t) {
          return super.process(e, t);
        }
      };
      Wa.names = ["image-rendering", "interpolation-mode"];
      Ig.exports = Wa;
    });
    var Lg = y((rD, Mg) => {
      l();
      var MC = D(), LC = Z(), Ga = class extends MC {
        constructor(e, t, i) {
          super(e, t, i);
          this.prefixes && (this.prefixes = LC.uniq(this.prefixes.map((s) => s === "-ms-" ? "-webkit-" : s)));
        }
      };
      Ga.names = ["backdrop-filter"];
      Mg.exports = Ga;
    });
    var Ng = y((iD, Fg) => {
      l();
      var FC = D(), NC = Z(), Ha = class extends FC {
        constructor(e, t, i) {
          super(e, t, i);
          this.prefixes && (this.prefixes = NC.uniq(this.prefixes.map((s) => s === "-ms-" ? "-webkit-" : s)));
        }
        check(e) {
          return e.value.toLowerCase() === "text";
        }
      };
      Ha.names = ["background-clip"];
      Fg.exports = Ha;
    });
    var zg = y((sD, Bg) => {
      l();
      var BC = D(), zC = ["none", "underline", "overline", "line-through", "blink", "inherit", "initial", "unset"], Ya = class extends BC {
        check(e) {
          return e.value.split(/\s+/).some((t) => !zC.includes(t));
        }
      };
      Ya.names = ["text-decoration"];
      Bg.exports = Ya;
    });
    var Ug = y((nD, jg) => {
      l();
      var $g = re(), $C = D(), Wt = class extends $C {
        prefixed(e, t) {
          let i;
          return [i, t] = $g(t), i === 2009 ? t + "box-pack" : i === 2012 ? t + "flex-pack" : super.prefixed(e, t);
        }
        normalize() {
          return "justify-content";
        }
        set(e, t) {
          let i = $g(t)[0];
          if (i === 2009 || i === 2012) {
            let s = Wt.oldValues[e.value] || e.value;
            if (e.value = s, i !== 2009 || s !== "distribute")
              return super.set(e, t);
          } else if (i === "final")
            return super.set(e, t);
        }
      };
      Wt.names = ["justify-content", "flex-pack", "box-pack"];
      Wt.oldValues = { "flex-end": "end", "flex-start": "start", "space-between": "justify", "space-around": "distribute" };
      jg.exports = Wt;
    });
    var Wg = y((oD, Vg) => {
      l();
      var jC = D(), Qa = class extends jC {
        set(e, t) {
          let i = e.value.toLowerCase();
          return t === "-webkit-" && !i.includes(" ") && i !== "contain" && i !== "cover" && (e.value = e.value + " " + e.value), super.set(e, t);
        }
      };
      Qa.names = ["background-size"];
      Vg.exports = Qa;
    });
    var Hg = y((aD, Gg) => {
      l();
      var UC = D(), Ja = et(), Xa = class extends UC {
        insert(e, t, i) {
          if (t !== "-ms-")
            return super.insert(e, t, i);
          let s = Ja.parse(e), [n, o] = Ja.translate(s, 0, 1);
          s[0] && s[0].includes("span") && (o = s[0].join("").replace(/\D/g, "")), [[e.prop, n], [`${e.prop}-span`, o]].forEach(([u, f]) => {
            Ja.insertDecl(e, u, f);
          });
        }
      };
      Xa.names = ["grid-row", "grid-column"];
      Gg.exports = Xa;
    });
    var Jg = y((lD, Qg) => {
      l();
      var VC = D(), { prefixTrackProp: Yg, prefixTrackValue: WC, autoplaceGridItems: GC, getGridGap: HC, inheritGridGap: YC } = et(), QC = ga(), Ka = class extends VC {
        prefixed(e, t) {
          return t === "-ms-" ? Yg({ prop: e, prefix: t }) : super.prefixed(e, t);
        }
        normalize(e) {
          return e.replace(/^grid-(rows|columns)/, "grid-template-$1");
        }
        insert(e, t, i, s) {
          if (t !== "-ms-")
            return super.insert(e, t, i);
          let { parent: n, prop: o, value: a } = e, u = o.includes("rows"), f = o.includes("columns"), c = n.some((k) => k.prop === "grid-template" || k.prop === "grid-template-areas");
          if (c && u)
            return false;
          let d = new QC({ options: {} }), p = d.gridStatus(n, s), h = HC(e);
          h = YC(e, h) || h;
          let w = u ? h.row : h.column;
          (p === "no-autoplace" || p === true) && !c && (w = null);
          let v = WC({ value: a, gap: w });
          e.cloneBefore({ prop: Yg({ prop: o, prefix: t }), value: v });
          let b = n.nodes.find((k) => k.prop === "grid-auto-flow"), x = "row";
          if (b && !d.disabled(b, s) && (x = b.value.trim()), p === "autoplace") {
            let k = n.nodes.find((P) => P.prop === "grid-template-rows");
            if (!k && c)
              return;
            if (!k && !c) {
              e.warn(s, "Autoplacement does not work without grid-template-rows property");
              return;
            }
            !n.nodes.find((P) => P.prop === "grid-template-columns") && !c && e.warn(s, "Autoplacement does not work without grid-template-columns property"), f && !c && GC(e, s, h, x);
          }
        }
      };
      Ka.names = ["grid-template-rows", "grid-template-columns", "grid-rows", "grid-columns"];
      Qg.exports = Ka;
    });
    var Kg = y((uD, Xg) => {
      l();
      var JC = D(), Za = class extends JC {
        check(e) {
          return !e.value.includes("flex-") && e.value !== "baseline";
        }
        prefixed(e, t) {
          return t + "grid-column-align";
        }
        normalize() {
          return "justify-self";
        }
      };
      Za.names = ["grid-column-align"];
      Xg.exports = Za;
    });
    var ew = y((fD, Zg) => {
      l();
      var XC = D(), el = class extends XC {
        prefixed(e, t) {
          return t + "scroll-chaining";
        }
        normalize() {
          return "overscroll-behavior";
        }
        set(e, t) {
          return e.value === "auto" ? e.value = "chained" : (e.value === "none" || e.value === "contain") && (e.value = "none"), super.set(e, t);
        }
      };
      el.names = ["overscroll-behavior", "scroll-chaining"];
      Zg.exports = el;
    });
    var iw = y((cD, rw) => {
      l();
      var KC = D(), { parseGridAreas: ZC, warnMissedAreas: e_, prefixTrackProp: t_, prefixTrackValue: tw, getGridGap: r_, warnGridGap: i_, inheritGridGap: s_ } = et();
      function n_(r) {
        return r.trim().slice(1, -1).split(/["']\s*["']?/g);
      }
      var tl = class extends KC {
        insert(e, t, i, s) {
          if (t !== "-ms-")
            return super.insert(e, t, i);
          let n = false, o = false, a = e.parent, u = r_(e);
          u = s_(e, u) || u, a.walkDecls(/-ms-grid-rows/, (d) => d.remove()), a.walkDecls(/grid-template-(rows|columns)/, (d) => {
            if (d.prop === "grid-template-rows") {
              o = true;
              let { prop: p, value: h } = d;
              d.cloneBefore({ prop: t_({ prop: p, prefix: t }), value: tw({ value: h, gap: u.row }) });
            } else
              n = true;
          });
          let f = n_(e.value);
          n && !o && u.row && f.length > 1 && e.cloneBefore({ prop: "-ms-grid-rows", value: tw({ value: `repeat(${f.length}, auto)`, gap: u.row }), raws: {} }), i_({ gap: u, hasColumns: n, decl: e, result: s });
          let c = ZC({ rows: f, gap: u });
          return e_(c, e, s), e;
        }
      };
      tl.names = ["grid-template-areas"];
      rw.exports = tl;
    });
    var nw = y((pD, sw) => {
      l();
      var o_ = D(), rl = class extends o_ {
        set(e, t) {
          return t === "-webkit-" && (e.value = e.value.replace(/\s*(right|left)\s*/i, "")), super.set(e, t);
        }
      };
      rl.names = ["text-emphasis-position"];
      sw.exports = rl;
    });
    var aw = y((dD, ow) => {
      l();
      var a_ = D(), il = class extends a_ {
        set(e, t) {
          return e.prop === "text-decoration-skip-ink" && e.value === "auto" ? (e.prop = t + "text-decoration-skip", e.value = "ink", e) : super.set(e, t);
        }
      };
      il.names = ["text-decoration-skip-ink", "text-decoration-skip"];
      ow.exports = il;
    });
    var dw = y((hD, pw) => {
      l();
      "use strict";
      pw.exports = { wrap: lw, limit: uw, validate: fw, test: sl, curry: l_, name: cw };
      function lw(r, e, t) {
        var i = e - r;
        return ((t - r) % i + i) % i + r;
      }
      function uw(r, e, t) {
        return Math.max(r, Math.min(e, t));
      }
      function fw(r, e, t, i, s) {
        if (!sl(r, e, t, i, s))
          throw new Error(t + " is outside of range [" + r + "," + e + ")");
        return t;
      }
      function sl(r, e, t, i, s) {
        return !(t < r || t > e || s && t === e || i && t === r);
      }
      function cw(r, e, t, i) {
        return (t ? "(" : "[") + r + "," + e + (i ? ")" : "]");
      }
      function l_(r, e, t, i) {
        var s = cw.bind(null, r, e, t, i);
        return { wrap: lw.bind(null, r, e), limit: uw.bind(null, r, e), validate: function(n) {
          return fw(r, e, n, t, i);
        }, test: function(n) {
          return sl(r, e, n, t, i);
        }, toString: s, name: s };
      }
    });
    var gw = y((mD, mw) => {
      l();
      var nl = Gr(), u_ = dw(), f_ = Lt(), c_ = ce(), p_ = Z(), hw = /top|left|right|bottom/gi, Fe = class extends c_ {
        replace(e, t) {
          let i = nl(e);
          for (let s of i.nodes)
            if (s.type === "function" && s.value === this.name)
              if (s.nodes = this.newDirection(s.nodes), s.nodes = this.normalize(s.nodes), t === "-webkit- old") {
                if (!this.oldWebkit(s))
                  return false;
              } else
                s.nodes = this.convertDirection(s.nodes), s.value = t + s.value;
          return i.toString();
        }
        replaceFirst(e, ...t) {
          return t.map((s) => s === " " ? { type: "space", value: s } : { type: "word", value: s }).concat(e.slice(1));
        }
        normalizeUnit(e, t) {
          return `${parseFloat(e) / t * 360}deg`;
        }
        normalize(e) {
          if (!e[0])
            return e;
          if (/-?\d+(.\d+)?grad/.test(e[0].value))
            e[0].value = this.normalizeUnit(e[0].value, 400);
          else if (/-?\d+(.\d+)?rad/.test(e[0].value))
            e[0].value = this.normalizeUnit(e[0].value, 2 * Math.PI);
          else if (/-?\d+(.\d+)?turn/.test(e[0].value))
            e[0].value = this.normalizeUnit(e[0].value, 1);
          else if (e[0].value.includes("deg")) {
            let t = parseFloat(e[0].value);
            t = u_.wrap(0, 360, t), e[0].value = `${t}deg`;
          }
          return e[0].value === "0deg" ? e = this.replaceFirst(e, "to", " ", "top") : e[0].value === "90deg" ? e = this.replaceFirst(e, "to", " ", "right") : e[0].value === "180deg" ? e = this.replaceFirst(e, "to", " ", "bottom") : e[0].value === "270deg" && (e = this.replaceFirst(e, "to", " ", "left")), e;
        }
        newDirection(e) {
          if (e[0].value === "to" || (hw.lastIndex = 0, !hw.test(e[0].value)))
            return e;
          e.unshift({ type: "word", value: "to" }, { type: "space", value: " " });
          for (let t = 2; t < e.length && e[t].type !== "div"; t++)
            e[t].type === "word" && (e[t].value = this.revertDirection(e[t].value));
          return e;
        }
        isRadial(e) {
          let t = "before";
          for (let i of e)
            if (t === "before" && i.type === "space")
              t = "at";
            else if (t === "at" && i.value === "at")
              t = "after";
            else {
              if (t === "after" && i.type === "space")
                return true;
              if (i.type === "div")
                break;
              t = "before";
            }
          return false;
        }
        convertDirection(e) {
          return e.length > 0 && (e[0].value === "to" ? this.fixDirection(e) : e[0].value.includes("deg") ? this.fixAngle(e) : this.isRadial(e) && this.fixRadial(e)), e;
        }
        fixDirection(e) {
          e.splice(0, 2);
          for (let t of e) {
            if (t.type === "div")
              break;
            t.type === "word" && (t.value = this.revertDirection(t.value));
          }
        }
        fixAngle(e) {
          let t = e[0].value;
          t = parseFloat(t), t = Math.abs(450 - t) % 360, t = this.roundFloat(t, 3), e[0].value = `${t}deg`;
        }
        fixRadial(e) {
          let t = [], i = [], s, n, o, a, u;
          for (a = 0; a < e.length - 2; a++)
            if (s = e[a], n = e[a + 1], o = e[a + 2], s.type === "space" && n.value === "at" && o.type === "space") {
              u = a + 3;
              break;
            } else
              t.push(s);
          let f;
          for (a = u; a < e.length; a++)
            if (e[a].type === "div") {
              f = e[a];
              break;
            } else
              i.push(e[a]);
          e.splice(0, a, ...i, f, ...t);
        }
        revertDirection(e) {
          return Fe.directions[e.toLowerCase()] || e;
        }
        roundFloat(e, t) {
          return parseFloat(e.toFixed(t));
        }
        oldWebkit(e) {
          let { nodes: t } = e, i = nl.stringify(e.nodes);
          if (this.name !== "linear-gradient" || t[0] && t[0].value.includes("deg") || i.includes("px") || i.includes("-corner") || i.includes("-side"))
            return false;
          let s = [[]];
          for (let n of t)
            s[s.length - 1].push(n), n.type === "div" && n.value === "," && s.push([]);
          this.oldDirection(s), this.colorStops(s), e.nodes = [];
          for (let n of s)
            e.nodes = e.nodes.concat(n);
          return e.nodes.unshift({ type: "word", value: "linear" }, this.cloneDiv(e.nodes)), e.value = "-webkit-gradient", true;
        }
        oldDirection(e) {
          let t = this.cloneDiv(e[0]);
          if (e[0][0].value !== "to")
            return e.unshift([{ type: "word", value: Fe.oldDirections.bottom }, t]);
          {
            let i = [];
            for (let n of e[0].slice(2))
              n.type === "word" && i.push(n.value.toLowerCase());
            i = i.join(" ");
            let s = Fe.oldDirections[i] || i;
            return e[0] = [{ type: "word", value: s }, t], e[0];
          }
        }
        cloneDiv(e) {
          for (let t of e)
            if (t.type === "div" && t.value === ",")
              return t;
          return { type: "div", value: ",", after: " " };
        }
        colorStops(e) {
          let t = [];
          for (let i = 0; i < e.length; i++) {
            let s, n = e[i], o;
            if (i === 0)
              continue;
            let a = nl.stringify(n[0]);
            n[1] && n[1].type === "word" ? s = n[1].value : n[2] && n[2].type === "word" && (s = n[2].value);
            let u;
            i === 1 && (!s || s === "0%") ? u = `from(${a})` : i === e.length - 1 && (!s || s === "100%") ? u = `to(${a})` : s ? u = `color-stop(${s}, ${a})` : u = `color-stop(${a})`;
            let f = n[n.length - 1];
            e[i] = [{ type: "word", value: u }], f.type === "div" && f.value === "," && (o = e[i].push(f)), t.push(o);
          }
          return t;
        }
        old(e) {
          if (e === "-webkit-") {
            let t = this.name === "linear-gradient" ? "linear" : "radial", i = "-gradient", s = p_.regexp(`-webkit-(${t}-gradient|gradient\\(\\s*${t})`, false);
            return new f_(this.name, e + this.name, i, s);
          } else
            return super.old(e);
        }
        add(e, t) {
          let i = e.prop;
          if (i.includes("mask")) {
            if (t === "-webkit-" || t === "-webkit- old")
              return super.add(e, t);
          } else if (i === "list-style" || i === "list-style-image" || i === "content") {
            if (t === "-webkit-" || t === "-webkit- old")
              return super.add(e, t);
          } else
            return super.add(e, t);
        }
      };
      Fe.names = ["linear-gradient", "repeating-linear-gradient", "radial-gradient", "repeating-radial-gradient"];
      Fe.directions = { top: "bottom", left: "right", bottom: "top", right: "left" };
      Fe.oldDirections = { top: "left bottom, left top", left: "right top, left top", bottom: "left top, left bottom", right: "left top, right top", "top right": "left bottom, right top", "top left": "right bottom, left top", "right top": "left bottom, right top", "right bottom": "left top, right bottom", "bottom right": "left top, right bottom", "bottom left": "right top, left bottom", "left top": "right bottom, left top", "left bottom": "right top, left bottom" };
      mw.exports = Fe;
    });
    var bw = y((gD, yw) => {
      l();
      var d_ = Lt(), h_ = ce();
      function ww(r) {
        return new RegExp(`(^|[\\s,(])(${r}($|[\\s),]))`, "gi");
      }
      var ol = class extends h_ {
        regexp() {
          return this.regexpCache || (this.regexpCache = ww(this.name)), this.regexpCache;
        }
        isStretch() {
          return this.name === "stretch" || this.name === "fill" || this.name === "fill-available";
        }
        replace(e, t) {
          return t === "-moz-" && this.isStretch() ? e.replace(this.regexp(), "$1-moz-available$3") : t === "-webkit-" && this.isStretch() ? e.replace(this.regexp(), "$1-webkit-fill-available$3") : super.replace(e, t);
        }
        old(e) {
          let t = e + this.name;
          return this.isStretch() && (e === "-moz-" ? t = "-moz-available" : e === "-webkit-" && (t = "-webkit-fill-available")), new d_(this.name, t, t, ww(t));
        }
        add(e, t) {
          if (!(e.prop.includes("grid") && t !== "-webkit-"))
            return super.add(e, t);
        }
      };
      ol.names = ["max-content", "min-content", "fit-content", "fill", "fill-available", "stretch"];
      yw.exports = ol;
    });
    var kw = y((wD, vw) => {
      l();
      var xw = Lt(), m_ = ce(), al = class extends m_ {
        replace(e, t) {
          return t === "-webkit-" ? e.replace(this.regexp(), "$1-webkit-optimize-contrast") : t === "-moz-" ? e.replace(this.regexp(), "$1-moz-crisp-edges") : super.replace(e, t);
        }
        old(e) {
          return e === "-webkit-" ? new xw(this.name, "-webkit-optimize-contrast") : e === "-moz-" ? new xw(this.name, "-moz-crisp-edges") : super.old(e);
        }
      };
      al.names = ["pixelated"];
      vw.exports = al;
    });
    var Cw = y((yD, Sw) => {
      l();
      var g_ = ce(), ll = class extends g_ {
        replace(e, t) {
          let i = super.replace(e, t);
          return t === "-webkit-" && (i = i.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi, "url($1)$2")), i;
        }
      };
      ll.names = ["image-set"];
      Sw.exports = ll;
    });
    var Aw = y((bD, _w) => {
      l();
      var w_ = ue().list, y_ = ce(), ul = class extends y_ {
        replace(e, t) {
          return w_.space(e).map((i) => {
            if (i.slice(0, +this.name.length + 1) !== this.name + "(")
              return i;
            let s = i.lastIndexOf(")"), n = i.slice(s + 1), o = i.slice(this.name.length + 1, s);
            if (t === "-webkit-") {
              let a = o.match(/\d*.?\d+%?/);
              a ? (o = o.slice(a[0].length).trim(), o += `, ${a[0]}`) : o += ", 0.5";
            }
            return t + this.name + "(" + o + ")" + n;
          }).join(" ");
        }
      };
      ul.names = ["cross-fade"];
      _w.exports = ul;
    });
    var Ow = y((xD, Ew) => {
      l();
      var b_ = re(), x_ = Lt(), v_ = ce(), fl = class extends v_ {
        constructor(e, t) {
          super(e, t);
          e === "display-flex" && (this.name = "flex");
        }
        check(e) {
          return e.prop === "display" && e.value === this.name;
        }
        prefixed(e) {
          let t, i;
          return [t, e] = b_(e), t === 2009 ? this.name === "flex" ? i = "box" : i = "inline-box" : t === 2012 ? this.name === "flex" ? i = "flexbox" : i = "inline-flexbox" : t === "final" && (i = this.name), e + i;
        }
        replace(e, t) {
          return this.prefixed(t);
        }
        old(e) {
          let t = this.prefixed(e);
          if (!!t)
            return new x_(this.name, t);
        }
      };
      fl.names = ["display-flex", "inline-flex"];
      Ew.exports = fl;
    });
    var Pw = y((vD, Tw) => {
      l();
      var k_ = ce(), cl = class extends k_ {
        constructor(e, t) {
          super(e, t);
          e === "display-grid" && (this.name = "grid");
        }
        check(e) {
          return e.prop === "display" && e.value === this.name;
        }
      };
      cl.names = ["display-grid", "inline-grid"];
      Tw.exports = cl;
    });
    var qw = y((kD, Dw) => {
      l();
      var S_ = ce(), pl = class extends S_ {
        constructor(e, t) {
          super(e, t);
          e === "filter-function" && (this.name = "filter");
        }
      };
      pl.names = ["filter", "filter-function"];
      Dw.exports = pl;
    });
    var Lw = y((SD, Mw) => {
      l();
      var Iw = Yr(), q = D(), Rw = Oh(), C_ = Ih(), __ = ga(), A_ = Kh(), dl = Ze(), Gt = Ft(), E_ = om(), Pe = ce(), Ht = Z(), O_ = lm(), T_ = fm(), P_ = pm(), D_ = hm(), q_ = bm(), I_ = km(), R_ = Cm(), M_ = Am(), L_ = Om(), F_ = Pm(), N_ = qm(), B_ = Rm(), z_ = Lm(), $_ = Nm(), j_ = zm(), U_ = Um(), V_ = Wm(), W_ = Ym(), G_ = Jm(), H_ = Km(), Y_ = tg(), Q_ = ig(), J_ = og(), X_ = lg(), K_ = fg(), Z_ = pg(), eA = hg(), tA = wg(), rA = bg(), iA = vg(), sA = Sg(), nA = _g(), oA = Eg(), aA = Tg(), lA = qg(), uA = Rg(), fA = Lg(), cA = Ng(), pA = zg(), dA = Ug(), hA = Wg(), mA = Hg(), gA = Jg(), wA = Kg(), yA = ew(), bA = iw(), xA = nw(), vA = aw(), kA = gw(), SA = bw(), CA = kw(), _A = Cw(), AA = Aw(), EA = Ow(), OA = Pw(), TA = qw();
      Gt.hack(O_);
      Gt.hack(T_);
      Gt.hack(P_);
      Gt.hack(D_);
      q.hack(q_);
      q.hack(I_);
      q.hack(R_);
      q.hack(M_);
      q.hack(L_);
      q.hack(F_);
      q.hack(N_);
      q.hack(B_);
      q.hack(z_);
      q.hack($_);
      q.hack(j_);
      q.hack(U_);
      q.hack(V_);
      q.hack(W_);
      q.hack(G_);
      q.hack(H_);
      q.hack(Y_);
      q.hack(Q_);
      q.hack(J_);
      q.hack(X_);
      q.hack(K_);
      q.hack(Z_);
      q.hack(eA);
      q.hack(tA);
      q.hack(rA);
      q.hack(iA);
      q.hack(sA);
      q.hack(nA);
      q.hack(oA);
      q.hack(aA);
      q.hack(lA);
      q.hack(uA);
      q.hack(fA);
      q.hack(cA);
      q.hack(pA);
      q.hack(dA);
      q.hack(hA);
      q.hack(mA);
      q.hack(gA);
      q.hack(wA);
      q.hack(yA);
      q.hack(bA);
      q.hack(xA);
      q.hack(vA);
      Pe.hack(kA);
      Pe.hack(SA);
      Pe.hack(CA);
      Pe.hack(_A);
      Pe.hack(AA);
      Pe.hack(EA);
      Pe.hack(OA);
      Pe.hack(TA);
      var hl = /* @__PURE__ */ new Map(), Jr = class {
        constructor(e, t, i = {}) {
          this.data = e, this.browsers = t, this.options = i, [this.add, this.remove] = this.preprocess(this.select(this.data)), this.transition = new C_(this), this.processor = new __(this);
        }
        cleaner() {
          if (this.cleanerCache)
            return this.cleanerCache;
          if (this.browsers.selected.length) {
            let e = new dl(this.browsers.data, []);
            this.cleanerCache = new Jr(this.data, e, this.options);
          } else
            return this;
          return this.cleanerCache;
        }
        select(e) {
          let t = { add: {}, remove: {} };
          for (let i in e) {
            let s = e[i], n = s.browsers.map((u) => {
              let f = u.split(" ");
              return { browser: `${f[0]} ${f[1]}`, note: f[2] };
            }), o = n.filter((u) => u.note).map((u) => `${this.browsers.prefix(u.browser)} ${u.note}`);
            o = Ht.uniq(o), n = n.filter((u) => this.browsers.isSelected(u.browser)).map((u) => {
              let f = this.browsers.prefix(u.browser);
              return u.note ? `${f} ${u.note}` : f;
            }), n = this.sort(Ht.uniq(n)), this.options.flexbox === "no-2009" && (n = n.filter((u) => !u.includes("2009")));
            let a = s.browsers.map((u) => this.browsers.prefix(u));
            s.mistakes && (a = a.concat(s.mistakes)), a = a.concat(o), a = Ht.uniq(a), n.length ? (t.add[i] = n, n.length < a.length && (t.remove[i] = a.filter((u) => !n.includes(u)))) : t.remove[i] = a;
          }
          return t;
        }
        sort(e) {
          return e.sort((t, i) => {
            let s = Ht.removeNote(t).length, n = Ht.removeNote(i).length;
            return s === n ? i.length - t.length : n - s;
          });
        }
        preprocess(e) {
          let t = { selectors: [], "@supports": new A_(Jr, this) };
          for (let s in e.add) {
            let n = e.add[s];
            if (s === "@keyframes" || s === "@viewport")
              t[s] = new E_(s, n, this);
            else if (s === "@resolution")
              t[s] = new Rw(s, n, this);
            else if (this.data[s].selector)
              t.selectors.push(Gt.load(s, n, this));
            else {
              let o = this.data[s].props;
              if (o) {
                let a = Pe.load(s, n, this);
                for (let u of o)
                  t[u] || (t[u] = { values: [] }), t[u].values.push(a);
              } else {
                let a = t[s] && t[s].values || [];
                t[s] = q.load(s, n, this), t[s].values = a;
              }
            }
          }
          let i = { selectors: [] };
          for (let s in e.remove) {
            let n = e.remove[s];
            if (this.data[s].selector) {
              let o = Gt.load(s, n);
              for (let a of n)
                i.selectors.push(o.old(a));
            } else if (s === "@keyframes" || s === "@viewport")
              for (let o of n) {
                let a = `@${o}${s.slice(1)}`;
                i[a] = { remove: true };
              }
            else if (s === "@resolution")
              i[s] = new Rw(s, n, this);
            else {
              let o = this.data[s].props;
              if (o) {
                let a = Pe.load(s, [], this);
                for (let u of n) {
                  let f = a.old(u);
                  if (f)
                    for (let c of o)
                      i[c] || (i[c] = {}), i[c].values || (i[c].values = []), i[c].values.push(f);
                }
              } else
                for (let a of n) {
                  let u = this.decl(s).old(s, a);
                  if (s === "align-self") {
                    let f = t[s] && t[s].prefixes;
                    if (f) {
                      if (a === "-webkit- 2009" && f.includes("-webkit-"))
                        continue;
                      if (a === "-webkit-" && f.includes("-webkit- 2009"))
                        continue;
                    }
                  }
                  for (let f of u)
                    i[f] || (i[f] = {}), i[f].remove = true;
                }
            }
          }
          return [t, i];
        }
        decl(e) {
          return hl.has(e) || hl.set(e, q.load(e)), hl.get(e);
        }
        unprefixed(e) {
          let t = this.normalize(Iw.unprefixed(e));
          return t === "flex-direction" && (t = "flex-flow"), t;
        }
        normalize(e) {
          return this.decl(e).normalize(e);
        }
        prefixed(e, t) {
          return e = Iw.unprefixed(e), this.decl(e).prefixed(e, t);
        }
        values(e, t) {
          let i = this[e], s = i["*"] && i["*"].values, n = i[t] && i[t].values;
          return s && n ? Ht.uniq(s.concat(n)) : s || n || [];
        }
        group(e) {
          let t = e.parent, i = t.index(e), { length: s } = t.nodes, n = this.unprefixed(e.prop), o = (a, u) => {
            for (i += a; i >= 0 && i < s; ) {
              let f = t.nodes[i];
              if (f.type === "decl") {
                if (a === -1 && f.prop === n && !dl.withPrefix(f.value) || this.unprefixed(f.prop) !== n)
                  break;
                if (u(f) === true)
                  return true;
                if (a === 1 && f.prop === n && !dl.withPrefix(f.value))
                  break;
              }
              i += a;
            }
            return false;
          };
          return { up(a) {
            return o(-1, a);
          }, down(a) {
            return o(1, a);
          } };
        }
      };
      Mw.exports = Jr;
    });
    var Nw = y((CD, Fw) => {
      l();
      Fw.exports = { "backface-visibility": { mistakes: ["-ms-", "-o-"], feature: "transforms3d", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"] }, "backdrop-filter": { feature: "css-backdrop-filter", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"] }, element: { props: ["background", "background-image", "border-image", "mask", "list-style", "list-style-image", "content", "mask-image"], feature: "css-element-function", browsers: ["firefox 89"] }, "user-select": { mistakes: ["-khtml-"], feature: "user-select-none", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"] }, "background-clip": { feature: "background-clip-text", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, hyphens: { feature: "css-hyphens", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"] }, ":fullscreen": { selector: true, feature: "fullscreen", browsers: ["and_chr 92", "and_uc 12.12", "safari 14.1"] }, "::backdrop": { selector: true, feature: "fullscreen", browsers: ["and_chr 92", "and_uc 12.12", "safari 14.1"] }, "::file-selector-button": { selector: true, feature: "fullscreen", browsers: ["safari 14.1"] }, "tab-size": { feature: "css3-tabsize", browsers: ["firefox 89"] }, fill: { props: ["width", "min-width", "max-width", "height", "min-height", "max-height", "inline-size", "min-inline-size", "max-inline-size", "block-size", "min-block-size", "max-block-size", "grid", "grid-template", "grid-template-rows", "grid-template-columns", "grid-auto-columns", "grid-auto-rows"], feature: "intrinsic-width", browsers: ["and_chr 92", "chrome 91", "chrome 92", "edge 91", "samsung 14.0"] }, "fill-available": { props: ["width", "min-width", "max-width", "height", "min-height", "max-height", "inline-size", "min-inline-size", "max-inline-size", "block-size", "min-block-size", "max-block-size", "grid", "grid-template", "grid-template-rows", "grid-template-columns", "grid-auto-columns", "grid-auto-rows"], feature: "intrinsic-width", browsers: ["and_chr 92", "chrome 91", "chrome 92", "edge 91", "samsung 14.0"] }, stretch: { props: ["width", "min-width", "max-width", "height", "min-height", "max-height", "inline-size", "min-inline-size", "max-inline-size", "block-size", "min-block-size", "max-block-size", "grid", "grid-template", "grid-template-rows", "grid-template-columns", "grid-auto-columns", "grid-auto-rows"], feature: "intrinsic-width", browsers: ["firefox 89"] }, "fit-content": { props: ["width", "min-width", "max-width", "height", "min-height", "max-height", "inline-size", "min-inline-size", "max-inline-size", "block-size", "min-block-size", "max-block-size", "grid", "grid-template", "grid-template-rows", "grid-template-columns", "grid-auto-columns", "grid-auto-rows"], feature: "intrinsic-width", browsers: ["firefox 89"] }, "text-decoration-style": { feature: "text-decoration", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"] }, "text-decoration-color": { feature: "text-decoration", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"] }, "text-decoration-line": { feature: "text-decoration", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"] }, "text-decoration": { feature: "text-decoration", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"] }, "text-decoration-skip": { feature: "text-decoration", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"] }, "text-decoration-skip-ink": { feature: "text-decoration", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"] }, "text-size-adjust": { feature: "text-size-adjust", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"] }, "mask-clip": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-composite": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-image": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-origin": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-repeat": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-border-repeat": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-border-source": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, mask: { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-position": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-size": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-border": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-border-outset": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-border-width": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "mask-border-slice": { feature: "css-masks", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "clip-path": { feature: "css-clip-path", browsers: ["and_uc 12.12", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "box-decoration-break": { feature: "css-boxdecorationbreak", browsers: ["and_chr 92", "chrome 91", "chrome 92", "edge 91", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "@resolution": { feature: "css-media-resolution", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"] }, "border-inline-start": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "border-inline-end": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "margin-inline-start": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "margin-inline-end": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "padding-inline-start": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "padding-inline-end": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "border-block-start": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "border-block-end": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "margin-block-start": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "margin-block-end": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "padding-block-start": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, "padding-block-end": { feature: "css-logical-props", browsers: ["and_uc 12.12"] }, appearance: { feature: "css-appearance", browsers: ["and_uc 12.12", "ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1", "samsung 14.0"] }, "image-set": { props: ["background", "background-image", "border-image", "cursor", "mask", "mask-image", "list-style", "list-style-image", "content"], feature: "css-image-set", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "samsung 14.0"] }, "cross-fade": { props: ["background", "background-image", "border-image", "mask", "list-style", "list-style-image", "content", "mask-image"], feature: "css-cross-fade", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "samsung 14.0"] }, "text-emphasis": { feature: "text-emphasis", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "samsung 14.0"] }, "text-emphasis-position": { feature: "text-emphasis", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "samsung 14.0"] }, "text-emphasis-style": { feature: "text-emphasis", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "samsung 14.0"] }, "text-emphasis-color": { feature: "text-emphasis", browsers: ["and_chr 92", "and_uc 12.12", "chrome 91", "chrome 92", "edge 91", "samsung 14.0"] }, ":any-link": { selector: true, feature: "css-any-link", browsers: ["and_uc 12.12"] }, isolate: { props: ["unicode-bidi"], feature: "css-unicode-bidi", browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"] }, "color-adjust": { feature: "css-color-adjust", browsers: ["chrome 91", "chrome 92", "edge 91", "safari 14.1"] } };
    });
    var zw = y((_D, Bw) => {
      l();
      Bw.exports = {};
    });
    var Vw = y((AD, Uw) => {
      l();
      var PA = ca(), { agents: DA } = (_s(), Cs), ml = hh(), qA = Ze(), IA = Lw(), RA = Nw(), MA = zw(), $w = { browsers: DA, prefixes: RA }, jw = `
  Replace Autoprefixer \`browsers\` option to Browserslist config.
  Use \`browserslist\` key in \`package.json\` or \`.browserslistrc\` file.

  Using \`browsers\` option can cause errors. Browserslist config can
  be used for Babel, Autoprefixer, postcss-normalize and other tools.

  If you really need to use option, rename it to \`overrideBrowserslist\`.

  Learn more at:
  https://github.com/browserslist/browserslist#readme
  https://twitter.com/browserslist

`;
      function LA(r) {
        return Object.prototype.toString.apply(r) === "[object Object]";
      }
      var gl = /* @__PURE__ */ new Map();
      function FA(r, e) {
        e.browsers.selected.length !== 0 && (e.add.selectors.length > 0 || Object.keys(e.add).length > 2 || r.warn(`Autoprefixer target browsers do not need any prefixes.You do not need Autoprefixer anymore.
Check your Browserslist config to be sure that your targets are set up correctly.

  Learn more at:
  https://github.com/postcss/autoprefixer#readme
  https://github.com/browserslist/browserslist#readme

`));
      }
      Uw.exports = Yt;
      function Yt(...r) {
        let e;
        if (r.length === 1 && LA(r[0]) ? (e = r[0], r = void 0) : r.length === 0 || r.length === 1 && !r[0] ? r = void 0 : r.length <= 2 && (Array.isArray(r[0]) || !r[0]) ? (e = r[1], r = r[0]) : typeof r[r.length - 1] == "object" && (e = r.pop()), e || (e = {}), e.browser)
          throw new Error("Change `browser` option to `overrideBrowserslist` in Autoprefixer");
        if (e.browserslist)
          throw new Error("Change `browserslist` option to `overrideBrowserslist` in Autoprefixer");
        e.overrideBrowserslist ? r = e.overrideBrowserslist : e.browsers && (typeof console != "undefined" && console.warn && (ml.red ? console.warn(ml.red(jw.replace(/`[^`]+`/g, (s) => ml.yellow(s.slice(1, -1))))) : console.warn(jw)), r = e.browsers);
        let t = { ignoreUnknownVersions: e.ignoreUnknownVersions, stats: e.stats, env: e.env };
        function i(s) {
          let n = $w, o = new qA(n.browsers, r, s, t), a = o.selected.join(", ") + JSON.stringify(e);
          return gl.has(a) || gl.set(a, new IA(n.prefixes, o, e)), gl.get(a);
        }
        return { postcssPlugin: "autoprefixer", prepare(s) {
          let n = i({ from: s.opts.from, env: e.env });
          return { OnceExit(o) {
            FA(s, n), e.remove !== false && n.processor.remove(o, s), e.add !== false && n.processor.add(o, s);
          } };
        }, info(s) {
          return s = s || {}, s.from = s.from || m.cwd(), MA(i(s));
        }, options: e, browsers: r };
      }
      Yt.postcss = true;
      Yt.data = $w;
      Yt.defaults = PA.defaults;
      Yt.info = () => Yt().info();
    });
    var Gw = y((ED, Ww) => {
      l();
      Ww.exports = { aqua: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi, azure: /#f0ffff(ff)?(?!\w)/gi, beige: /#f5f5dc(ff)?(?!\w)/gi, bisque: /#ffe4c4(ff)?(?!\w)/gi, black: /#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi, blue: /#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi, brown: /#a52a2a(ff)?(?!\w)/gi, coral: /#ff7f50(ff)?(?!\w)/gi, cornsilk: /#fff8dc(ff)?(?!\w)/gi, crimson: /#dc143c(ff)?(?!\w)/gi, cyan: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi, darkblue: /#00008b(ff)?(?!\w)/gi, darkcyan: /#008b8b(ff)?(?!\w)/gi, darkgrey: /#a9a9a9(ff)?(?!\w)/gi, darkred: /#8b0000(ff)?(?!\w)/gi, deeppink: /#ff1493(ff)?(?!\w)/gi, dimgrey: /#696969(ff)?(?!\w)/gi, gold: /#ffd700(ff)?(?!\w)/gi, green: /#008000(ff)?(?!\w)/gi, grey: /#808080(ff)?(?!\w)/gi, honeydew: /#f0fff0(ff)?(?!\w)/gi, hotpink: /#ff69b4(ff)?(?!\w)/gi, indigo: /#4b0082(ff)?(?!\w)/gi, ivory: /#fffff0(ff)?(?!\w)/gi, khaki: /#f0e68c(ff)?(?!\w)/gi, lavender: /#e6e6fa(ff)?(?!\w)/gi, lime: /#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi, linen: /#faf0e6(ff)?(?!\w)/gi, maroon: /#800000(ff)?(?!\w)/gi, moccasin: /#ffe4b5(ff)?(?!\w)/gi, navy: /#000080(ff)?(?!\w)/gi, oldlace: /#fdf5e6(ff)?(?!\w)/gi, olive: /#808000(ff)?(?!\w)/gi, orange: /#ffa500(ff)?(?!\w)/gi, orchid: /#da70d6(ff)?(?!\w)/gi, peru: /#cd853f(ff)?(?!\w)/gi, pink: /#ffc0cb(ff)?(?!\w)/gi, plum: /#dda0dd(ff)?(?!\w)/gi, purple: /#800080(ff)?(?!\w)/gi, red: /#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi, salmon: /#fa8072(ff)?(?!\w)/gi, seagreen: /#2e8b57(ff)?(?!\w)/gi, seashell: /#fff5ee(ff)?(?!\w)/gi, sienna: /#a0522d(ff)?(?!\w)/gi, silver: /#c0c0c0(ff)?(?!\w)/gi, skyblue: /#87ceeb(ff)?(?!\w)/gi, snow: /#fffafa(ff)?(?!\w)/gi, tan: /#d2b48c(ff)?(?!\w)/gi, teal: /#008080(ff)?(?!\w)/gi, thistle: /#d8bfd8(ff)?(?!\w)/gi, tomato: /#ff6347(ff)?(?!\w)/gi, violet: /#ee82ee(ff)?(?!\w)/gi, wheat: /#f5deb3(ff)?(?!\w)/gi, white: /#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi };
    });
    var Yw = y((OD, Hw) => {
      l();
      var wl = Gw(), yl = { whitespace: /\s+/g, urlHexPairs: /%[\dA-F]{2}/g, quotes: /"/g };
      function NA(r) {
        return r.trim().replace(yl.whitespace, " ");
      }
      function BA(r) {
        return encodeURIComponent(r).replace(yl.urlHexPairs, $A);
      }
      function zA(r) {
        return Object.keys(wl).forEach(function(e) {
          wl[e].test(r) && (r = r.replace(wl[e], e));
        }), r;
      }
      function $A(r) {
        switch (r) {
          case "%20":
            return " ";
          case "%3D":
            return "=";
          case "%3A":
            return ":";
          case "%2F":
            return "/";
          default:
            return r.toLowerCase();
        }
      }
      function bl(r) {
        if (typeof r != "string")
          throw new TypeError("Expected a string, but received " + typeof r);
        r.charCodeAt(0) === 65279 && (r = r.slice(1));
        var e = zA(NA(r)).replace(yl.quotes, "'");
        return "data:image/svg+xml," + BA(e);
      }
      bl.toSrcset = function(e) {
        return bl(e).replace(/ /g, "%20");
      };
      Hw.exports = bl;
    });
    function Qw(r, e) {
      return { handler: r, config: e };
    }
    var Jw, Xw = C(() => {
      l();
      Qw.withOptions = function(r, e = () => ({})) {
        let t = function(i) {
          return { __options: i, handler: r(i), config: e(i) };
        };
        return t.__isOptionsFunction = true, t.__pluginFunction = r, t.__configFunction = e, t;
      };
      Jw = Qw;
    });
    var xl = {};
    de(xl, { default: () => jA });
    var jA, vl = C(() => {
      l();
      Xw();
      jA = Jw;
    });
    var kl = {};
    de(kl, { default: () => UA });
    var Kw, UA, Sl = C(() => {
      l();
      si();
      Kw = Y(Jt()), UA = je(Kw.default.theme);
    });
    var iy = y((qD, ry) => {
      l();
      var Es = Yw(), VA = (vl(), xl).default, Zw = (Sl(), kl).default, tt = (ri(), Ms).default, [WA, { lineHeight: GA }] = Zw.fontSize.base, { spacing: Ne, borderWidth: ey, borderRadius: ty } = Zw, HA = VA.withOptions(function(r = { strategy: void 0 }) {
        return function({ addBase: e, addComponents: t, theme: i }) {
          let s = r.strategy === void 0 ? ["base", "class"] : [r.strategy], n = [{ base: ["[type='text']", "[type='email']", "[type='url']", "[type='password']", "[type='number']", "[type='date']", "[type='datetime-local']", "[type='month']", "[type='search']", "[type='tel']", "[type='time']", "[type='week']", "[multiple]", "textarea", "select"], class: [".form-input", ".form-textarea", ".form-select", ".form-multiselect"], styles: { appearance: "none", "background-color": "#fff", "border-color": i("colors.gray.500", tt.gray[500]), "border-width": ey.DEFAULT, "border-radius": ty.none, "padding-top": Ne[2], "padding-right": Ne[3], "padding-bottom": Ne[2], "padding-left": Ne[3], "font-size": WA, "line-height": GA, "--tw-shadow": "0 0 #0000", "&:focus": { outline: "2px solid transparent", "outline-offset": "2px", "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": "0px", "--tw-ring-offset-color": "#fff", "--tw-ring-color": i("colors.blue.600", tt.blue[600]), "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)", "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)", "border-color": i("colors.blue.600", tt.blue[600]) } } }, { base: ["input::placeholder", "textarea::placeholder"], class: [".form-input::placeholder", ".form-textarea::placeholder"], styles: { color: i("colors.gray.500", tt.gray[500]), opacity: "1" } }, { base: ["::-webkit-datetime-edit-fields-wrapper"], class: [".form-input::-webkit-datetime-edit-fields-wrapper"], styles: { padding: "0" } }, { base: ["::-webkit-date-and-time-value"], class: [".form-input::-webkit-date-and-time-value"], styles: { "min-height": "1.5em" } }, { base: ["::-webkit-datetime-edit", "::-webkit-datetime-edit-year-field", "::-webkit-datetime-edit-month-field", "::-webkit-datetime-edit-day-field", "::-webkit-datetime-edit-hour-field", "::-webkit-datetime-edit-minute-field", "::-webkit-datetime-edit-second-field", "::-webkit-datetime-edit-millisecond-field", "::-webkit-datetime-edit-meridiem-field"], class: [".form-input::-webkit-datetime-edit", ".form-input::-webkit-datetime-edit-year-field", ".form-input::-webkit-datetime-edit-month-field", ".form-input::-webkit-datetime-edit-day-field", ".form-input::-webkit-datetime-edit-hour-field", ".form-input::-webkit-datetime-edit-minute-field", ".form-input::-webkit-datetime-edit-second-field", ".form-input::-webkit-datetime-edit-millisecond-field", ".form-input::-webkit-datetime-edit-meridiem-field"], styles: { "padding-top": 0, "padding-bottom": 0 } }, { base: ["select"], class: [".form-select"], styles: { "background-image": `url("${Es(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${i("colors.gray.500", tt.gray[500])}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`)}")`, "background-position": `right ${Ne[2]} center`, "background-repeat": "no-repeat", "background-size": "1.5em 1.5em", "padding-right": Ne[10], "print-color-adjust": "exact" } }, { base: ["[multiple]"], class: null, styles: { "background-image": "initial", "background-position": "initial", "background-repeat": "unset", "background-size": "initial", "padding-right": Ne[3], "print-color-adjust": "unset" } }, { base: ["[type='checkbox']", "[type='radio']"], class: [".form-checkbox", ".form-radio"], styles: { appearance: "none", padding: "0", "print-color-adjust": "exact", display: "inline-block", "vertical-align": "middle", "background-origin": "border-box", "user-select": "none", "flex-shrink": "0", height: Ne[4], width: Ne[4], color: i("colors.blue.600", tt.blue[600]), "background-color": "#fff", "border-color": i("colors.gray.500", tt.gray[500]), "border-width": ey.DEFAULT, "--tw-shadow": "0 0 #0000" } }, { base: ["[type='checkbox']"], class: [".form-checkbox"], styles: { "border-radius": ty.none } }, { base: ["[type='radio']"], class: [".form-radio"], styles: { "border-radius": "100%" } }, { base: ["[type='checkbox']:focus", "[type='radio']:focus"], class: [".form-checkbox:focus", ".form-radio:focus"], styles: { outline: "2px solid transparent", "outline-offset": "2px", "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": "2px", "--tw-ring-offset-color": "#fff", "--tw-ring-color": i("colors.blue.600", tt.blue[600]), "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)", "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)" } }, { base: ["[type='checkbox']:checked", "[type='radio']:checked"], class: [".form-checkbox:checked", ".form-radio:checked"], styles: { "border-color": "transparent", "background-color": "currentColor", "background-size": "100% 100%", "background-position": "center", "background-repeat": "no-repeat" } }, { base: ["[type='checkbox']:checked"], class: [".form-checkbox:checked"], styles: { "background-image": `url("${Es('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>')}")` } }, { base: ["[type='radio']:checked"], class: [".form-radio:checked"], styles: { "background-image": `url("${Es('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>')}")` } }, { base: ["[type='checkbox']:checked:hover", "[type='checkbox']:checked:focus", "[type='radio']:checked:hover", "[type='radio']:checked:focus"], class: [".form-checkbox:checked:hover", ".form-checkbox:checked:focus", ".form-radio:checked:hover", ".form-radio:checked:focus"], styles: { "border-color": "transparent", "background-color": "currentColor" } }, { base: ["[type='checkbox']:indeterminate"], class: [".form-checkbox:indeterminate"], styles: { "background-image": `url("${Es('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>')}")`, "border-color": "transparent", "background-color": "currentColor", "background-size": "100% 100%", "background-position": "center", "background-repeat": "no-repeat" } }, { base: ["[type='checkbox']:indeterminate:hover", "[type='checkbox']:indeterminate:focus"], class: [".form-checkbox:indeterminate:hover", ".form-checkbox:indeterminate:focus"], styles: { "border-color": "transparent", "background-color": "currentColor" } }, { base: ["[type='file']"], class: null, styles: { background: "unset", "border-color": "inherit", "border-width": "0", "border-radius": "0", padding: "0", "font-size": "unset", "line-height": "inherit" } }, { base: ["[type='file']:focus"], class: null, styles: { outline: ["1px solid ButtonText", "1px auto -webkit-focus-ring-color"] } }], o = (a) => n.map((u) => u[a] === null ? null : { [u[a]]: u.styles }).filter(Boolean);
          s.includes("base") && e(o("base")), s.includes("class") && t(o("class"));
        };
      });
      ry.exports = HA;
    });
    var sy = {};
    de(sy, { default: () => YA });
    var YA, ny = C(() => {
      l();
      YA = [iy()];
    });
    var ay = {};
    de(ay, { default: () => QA });
    var oy, QA, ly = C(() => {
      l();
      si();
      oy = Y(Jt()), QA = je(oy.default);
    });
    l();
    "use strict";
    var JA = Be(ph()), XA = Be(ue()), KA = Be(Vw()), ZA = Be((ny(), sy)), eE = Be((Sl(), kl)), tE = Be((ly(), ay)), rE = Be((ri(), Ms)), iE = Be((vl(), xl)), sE = Be((Gn(), Bf));
    function Be(r) {
      return r && r.__esModule ? r : { default: r };
    }
    console.warn("cdn.tailwindcss.com should not be used in production. To use Tailwind CSS in production, install it as a PostCSS plugin or use the Tailwind CLI: https://tailwindcss.com/docs/installation");
    var Os = "tailwind", Cl = "text/tailwindcss", uy = "/template.html", pt, fy = true, cy = 0, _l = /* @__PURE__ */ new Set(), Al, py = "", dy = (r = false) => ({ get(e, t) {
      return (!r || t === "config") && typeof e[t] == "object" && e[t] !== null ? new Proxy(e[t], dy()) : e[t];
    }, set(e, t, i) {
      return e[t] = i, (!r || t === "config") && El(true), true;
    } });
    window[Os] = new Proxy({ config: {}, defaultTheme: eE.default, defaultConfig: tE.default, colors: rE.default, plugin: iE.default, resolveConfig: sE.default }, dy(true));
    function hy(r) {
      Al.observe(r, { attributes: true, attributeFilter: ["type"], characterData: true, subtree: true, childList: true });
    }
    new MutationObserver(async (r) => {
      let e = false;
      if (!Al) {
        Al = new MutationObserver(async () => await El(true));
        for (let t of document.querySelectorAll(`style[type="${Cl}"]`))
          hy(t);
      }
      for (let t of r)
        for (let i of t.addedNodes)
          i.nodeType === 1 && i.tagName === "STYLE" && i.getAttribute("type") === Cl && (hy(i), e = true);
      await El(e);
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"], childList: true, subtree: true });
    async function El(r = false) {
      r && (cy++, _l.clear());
      let e = "";
      for (let i of document.querySelectorAll(`style[type="${Cl}"]`))
        e += i.textContent;
      let t = /* @__PURE__ */ new Set();
      for (let i of document.querySelectorAll("[class]"))
        for (let s of i.classList)
          _l.has(s) || t.add(s);
      if (document.body && (fy || t.size > 0 || e !== py || !pt || !pt.isConnected)) {
        for (let s of t)
          _l.add(s);
        fy = false, py = e, self[uy] = Array.from(t).join(" ");
        let i = (0, XA.default)([(0, JA.default)({ ...window[Os].config, _hash: cy, content: [uy], plugins: [...ZA.default, ...Array.isArray(window[Os].config.plugins) ? window[Os].config.plugins : []] }), (0, KA.default)({ remove: false })]).process(`@tailwind base;@tailwind components;@tailwind utilities;${e}`).css;
        (!pt || !pt.isConnected) && (pt = document.createElement("style"), document.head.append(pt)), pt.textContent = i;
      }
    }
  })();

  // src/mokuro/mokuro.svelte
  function create_fragment2(ctx) {
    let div1;
    let div0;
    let statbar;
    let current;
    statbar = new stat_bar_default({
      props: { media_storage: ctx[0] }
    });
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        create_component(statbar.$$.fragment);
        attr(div0, "class", "h-10 grow rounded-[3px] z-50");
        set_style(div0, "background", "var(--color1)");
        set_style(div0, "box-shadow", "0px 0px 8px 0px var(--color3a)");
        attr(div1, "class", "flex flex-col-reverse items-end content-center m-[5px]");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        mount_component(statbar, div0, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        const statbar_changes = {};
        if (dirty & 1)
          statbar_changes.media_storage = ctx2[0];
        statbar.$set(statbar_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(statbar.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(statbar.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        destroy_component(statbar);
      }
    };
  }
  function instance2($$self, $$props, $$invalidate) {
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    let { mokuro_storage: mokuro_storage2 } = $$props;
    const userActive = () => __awaiter(void 0, void 0, void 0, function* () {
      const time = timeNowSeconds();
      if (mokuro_storage2.instance_storage === void 0)
        return;
      if (mokuro_storage2.previous_time === void 0) {
        yield mokuro_storage2.instance_storage.updateDetails({ "last_active_at": time });
        mokuro_storage2.start_ticker();
      } else {
        mokuro_storage2.stop_ticker();
      }
    });
    document.getElementById("pagesContainer").addEventListener("dblclick", userActive);
    $$self.$$set = ($$props2) => {
      if ("mokuro_storage" in $$props2)
        $$invalidate(0, mokuro_storage2 = $$props2.mokuro_storage);
    };
    return [mokuro_storage2];
  }
  var Mokuro = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment2, safe_not_equal, { mokuro_storage: 0 });
    }
  };
  var mokuro_default = Mokuro;

  // src/mokuro/mokuro_inject.ts
  var browser5 = require_browser_polyfill();
  var material_cdn = document.createElement("link");
  material_cdn.href = browser5.extension.getURL("build/external/material_icons.css");
  material_cdn.rel = "stylesheet";
  document.head.appendChild(material_cdn);
  console.log("Injected");
  var mokuro_storage;
  function getVolumeSeries() {
    const paths = decodeURI(window.location.href).split(SPLIT_PATH);
    const volume = paths[paths.length - 1].replace(/\.html.*$/, "");
    const series = paths[paths.length - 2];
    return [volume, series];
  }
  function getPage() {
    const [current_page, total_pages] = document.getElementById("pageIdxDisplay").innerText.split("/");
    return [Number.parseInt(current_page) - 1, Number.parseInt(total_pages)];
  }
  var getGivenID = (series, volume) => JSON.stringify([series, volume]);
  async function setup() {
    mokuro_storage = await MokuroStorage.build(true);
    const [volume, series] = getVolumeSeries();
    const [current_page, total_pages] = getPage();
    await mokuro_storage.changeInstance(void 0, getGivenID(series, volume));
    await mokuro_storage.setDetails(series, total_pages);
    await mokuro_storage.instance_storage.updateDetails({ "last_page_read": current_page });
    const svelte_div = document.createElement("div");
    document.body.insertBefore(svelte_div, document.getElementById("showMenuA"));
    new mokuro_default({
      target: svelte_div,
      props: {
        mokuro_storage
      }
    });
  }
  setup();
  var observer = new MutationObserver(async (_) => {
    const [volume, series] = getVolumeSeries();
    const [current_page, total_pages] = getPage();
    const get_page = current_page > mokuro_storage.details["last_page_read"] ? current_page - 1 : current_page;
    const lines = Array.from(document.getElementById(`page${get_page}`).firstChild.childNodes).map((element2) => Array.from(element2.childNodes).reduce((so_far, node) => `${so_far}${node.textContent}`, ""));
    await mokuro_storage.changeInstance(void 0, getGivenID(series, volume));
    await mokuro_storage.setDetails(series, total_pages);
    await mokuro_storage.processPage(current_page, lines, dateNowString());
  });
  observer.observe(document.getElementById("pageIdxDisplay"), { "childList": true, "subtree": true });
})();
/*! https://mths.be/cssesc v3.0.0 by @mathias */
