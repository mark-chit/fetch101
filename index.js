/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
    const response = await fetch(url);
    const text = await response.text();
    elem.textContent = text; 
}

async function showList(elem, url) {
    const response = await fetch(url);
    const text = await response.json()
    
}
