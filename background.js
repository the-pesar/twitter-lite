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
