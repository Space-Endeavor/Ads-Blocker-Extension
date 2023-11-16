chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Block this link:", details.url)
        return {cancel: true}
    },
    {urls: blocked_sites_v2},
    ["blocking"]
)

const images = document.querySelectorAll('img');

images.forEach(image => {
  const src = image.src.toLowerCase(); 
  if (src.endsWith('.gif')) {
    image.src = '';
  }
});

const flashElements = document.querySelectorAll('object, embed');

flashElements.forEach(element => {
  const type = element.type.toLowerCase();
  if (type === 'application/x-shockwave-flash') {
    element.remove();
  }
});