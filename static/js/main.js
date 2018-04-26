function makeExternalLinkOpenInNewWindow() {
	  for(var elems = document.getElementsByTagName("a"), i = 0;i < elems.length;i++) {
	    var e = elems[i];
	    e.getAttribute("href") && e.hostname !== location.hostname && (e.target = "_blank")
	  }
};
makeExternalLinkOpenInNewWindow();

