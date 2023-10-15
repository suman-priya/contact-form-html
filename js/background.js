function handleCreated(downloadItem) {
    console.log(downloadItem);
 }
 browser.downloads.onChanged.addListener(handleCreated);