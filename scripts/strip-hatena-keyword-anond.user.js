// ==UserScript==
// @name        Strip Hatena Keyword links - anond.hatelabo.jp
// @namespace   https://github.com/sudofox/hatena-userscripts
// @match       https://anond.hatelabo.jp/*
// @grant       none
// @version     1.0
// @author      id:austinburk
// @description 12/19/2022, 1:30:37 PM
// ==/UserScript==


(function() {
  'use strict';

  // Find all <a> elements with the class "keyword"
  var elements = document.querySelectorAll('a.keyword');

  // Loop through the elements
  elements.forEach(function(element) {
    // Get the text of the link
    var text = element.textContent;

    // Create a new text node with the link text
    var textNode = document.createTextNode(text);

    // Replace the link with the text node
    element.replaceWith(textNode);
  });
})();
