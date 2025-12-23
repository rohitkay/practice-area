const container = document.querySelector("#container");

const redPara = document.createElement("p");
redPara.textContent = "Hey I'm red";
redPara.style.cssText = "color:red;";

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!"
blueH3.style.cssText = "color:blue;"

const div1 = document.createElement("div");
div1.style.cssText = "border:solid 2px black; background-color:pink;"

const h1ForDiv = document.createElement("h1");
h1ForDiv.textContent = "I'm in a div"

const pForDiv = document.createElement("p");
pForDiv.textContent = "ME TOO!";

div1.appendChild(h1ForDiv);
div1.appendChild(pForDiv);

container.appendChild(redPara);
container.appendChild(blueH3);
container.appendChild(div1);

