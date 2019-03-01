let contextMenuItem = {
  id: "savePic",
  title: "SavePic",
  contexts: ["image"]
};
chrome.contextMenus.create(contextMenuItem);

// chrome.storage.sync.set({img: val }) //??????????

chrome.contextMenus.onClicked.addListener(clickData => {
  if (clickData.menuItemId === "savePic") {
    chrome.storage.sync.get("pics", image => {});
  }
});
