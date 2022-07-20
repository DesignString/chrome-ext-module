import browser from "webextension-polyfill";

browser.windows.getCurrent().then((window) => {
    console.log("window current data: ", window);
});

try {
    console.log("content loaded");
} catch (e) {
    console.error(e);
}
