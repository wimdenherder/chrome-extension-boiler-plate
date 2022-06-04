async function getSetting(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get([key], function (result) {
      resolve(result[key]);
    });
  });
}
