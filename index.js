const container = document.querySelector('#container');
const content = document.querySelector('.content');
const redP = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");

redP.style.color = "red";
redP.textContent = "Hey I'm red!";

h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
h1.textContent = "I'm in a div";
p.textContent = "ME TOO!";

content.appendChild(redP);
content.appendChild(h3);

div.style.cssText = "border:black 4px solid; background-color:pink;";
div.appendChild (h1);
div.appendChild (p);

container.appendChild (div);

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.