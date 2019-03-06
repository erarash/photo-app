let contextMenuItem = {
  id: "savePic",
  title: "Save Picture!",
  contexts: ["image"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(info => {
  chrome.storage.sync.get(["images"], pics => {
    let imgArr = [];
    if (pics.images) {
      imgArr = pics.images;
    }
    imgArr.push(info.srcUrl);

    chrome.storage.sync.set({ images: imgArr }, () => {
      console.log("photo added!");
    });
  });
});
