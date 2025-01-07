let div = document.createElement("div");

div.style.width = "500px";
div.style.height = "500px";
div.style.backgroundColor= "lightblue";


let body = document.querySelector("body");
body.style.backgroundColor = "gray";
body.appendChild(div);
for(let i = 1; i<=9; i++){
   let divs = document.createElement("div");
    divs.setAttribute("class", "box");
    div.appendChild(divs);
}




