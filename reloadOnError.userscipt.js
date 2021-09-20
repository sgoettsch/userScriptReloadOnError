// ==UserScript==
// @name           Reload On Error
// @version        1.1
// @namespace      reloadOnError
// @description    Refreshes the page until target string is not found
// @include        http://*
// @include        https://*
// @grant          metadata
// @run-at         document-end
// @updateURL      https://raw.githubusercontent.com/sgoettsch/userScriptReloadOnError/master/reloadOnError.userscipt.js
// ==/UserScript==

var text = document.body.innerHTMl || document.body.textContent;
if (text.indexOf("503 Service Temporarily Unavailable") > 0) {
    setTimeout(function() {
        location.reload();
    }, 2000);
}

var button = document.getElementsByClassName("btn btn-primary g-recaptcha");
if(button[0]) {
    setTimeout(function() {
		button[0].click();
    }, 1000);
}