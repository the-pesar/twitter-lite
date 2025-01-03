chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!")
})

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("x.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    })
  } else {
    console.log("Not an X.com tab.")
  }
})

// chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     console.log(details);

//     if (details.type === 'image') {
//       return { cancel: true };
//     }
//   },
//   { urls: ["<all_urls>"] });