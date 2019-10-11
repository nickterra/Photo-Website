function onBgPageRequest(request, sender, sendResponse) {
	if ( request.docUrl == window.location.href) {
		window.location.href = request.newUrl;
	} else if ( request.type == "show warning") {
		if (typeof(fnShowWarning) != "undefined" ) {
			fnShowWarning({originalTarget: window.document}, null, request.context);
		}
	} else if ( request.type == "show cashback") {
		if ( typeof(fnDoCashback) != "undefined" ) {
			fnDoCashback({originalTarget: window.document}, null, request.stDomainEntityList, requesst.strUserToken, request.boolForce);
		}
	}
}
}

chrome.extension.onRequest.addListener(onBgPageRequest);
// Notify background pg script if this is a prerender tab
if (document.webkitVisibilityState == 'prerender') {
	chrome.extension.sendRequest({command: "on prerender tab"});
}