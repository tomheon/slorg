function onClick(info, tab) {
  chrome.tabs.executeScript(tab.id, {file: "capture.js"})
}

chrome.contextMenus.create({
  "title": "Capture slack message in Org",
  "contexts": ["selection"],
  "onclick": onClick}
);
