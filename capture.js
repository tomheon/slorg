var selection = document.getSelection();

var findTsMessage = function(elem) {
  if (elem.nodeName == "TS-MESSAGE") {
    return elem;
  } else {
    return findTsMessage(elem.parentElement);
  }
}

var tsMessage = findTsMessage(selection.anchorNode);

var linkDiv = tsMessage.querySelector("div[data-abs_permalink]")
var url = linkDiv.getAttribute("data-abs_permalink");

var orgUrl = "org-protocol://capture://"+encodeURIComponent(url)

window.open(orgUrl);
