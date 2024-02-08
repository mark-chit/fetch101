/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

"use strict";

async function showMessage(elem, url) {
  const response = await fetch(url);
  const text = await response.text();
  elem.textContent = text;
}

async function showList(elem, url) {
  const response = await fetch(url);
  const text = await response.json();
  text.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    elem.appendChild(li);
  });
}

function startShowingMessage(elem, url) {
  setInterval(async function () {
    const response = await fetch(url);
    const text = await response.text();
    elem.textContent = text;
  }, 1000);
}

async function handleError(elem, url) {
  const response = await fetch(url);
  console.log(response);
  if (response.ok) {
    const data = await response.text();
    elem.textContent = data;
  } else {
    elem.textContent = "OH DEAR";
  }
}

// Create a function `drawBox', which accepts two parameters: a canvas element, and a URL which refers to a simple object with coordinates that you should fetch from a server. The function draws a 10x10 filled black box at the given coordinates. Your drawBox function should update the coordinates and redraw the box every 1 second.
function drawBox(canvas, url) {
  setInterval(async function () {
    const response = await fetch(url);
    const coOrdinates = await response.json();
    const ctx = canvas.getContext("2d");
    ctx.fillstyle = "black";
    ctx.fillRect(coOrdinates.x, coOrdinates.y, 10, 10);
  }, 1000);
}
