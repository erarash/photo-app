let contextMenuItem = {
  id: "savePic",
  title: "SavePic",
  contexts: ["image"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(info => {
  //   alert(JSON.stringify(info));
  //   let imgURL = info.srcUrl; //new img to be added

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
