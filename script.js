//Button setup and styles
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);
const squareButton = document.createElement("button");
squareButton.style.margin = "auto";
squareButton.style.display = "block";
squareButton.appendChild(document.createTextNode("Add Square"));
newDiv.appendChild(squareButton);

//global variables
idnum = 1;
let colorArr = ["red", "blue", "green", "yellow", "black", "purple", "orange", "pink"];
let currentColor = "";

//Button event listener and square div creation and styling
squareButton.addEventListener("click", function(){
    const sqDiv = document.createElement("div");
    sqDiv.style.backgroundColor = "black";
    sqDiv.style.width = "50px";
    sqDiv.style.height = "50px";
    sqDiv.style.margin = "1rem";
    sqDiv.style.float = "left";
    sqDiv.style.display = "flex";
    sqDiv.style.justifyContent = "center";
    sqDiv.style.alignItems = "center";
    sqDiv.className = "squares";
    sqDiv.id = "" + idnum;
    sqDiv.addEventListener("click", randomColor);
    sqDiv.addEventListener("dblclick", squareDelete);
    sqDiv.addEventListener("mouseenter", squareHoverOn);
    sqDiv.addEventListener("mouseleave", squareHoverOff);
    document.body.appendChild(sqDiv);
    idnum++;

})

//Selects a random color out of an array and sets the square's background
function randomColor() {
    event.target.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)];
}

//Deletes a square depending on the id
function squareDelete() {
    let whatID = event.target.id;
    let idIndex = 0;
    let squaresArr = document.getElementsByClassName("squares");
    console.log(squaresArr);
    for (i=0; i<squaresArr.length; i++) {
        if (squaresArr[i].id === whatID) {
            idIndex = i;
        }
    }
    //Deletes the succeeding square if the ID is even
    if (parseInt(whatID)%2 === 0) {
        if (idIndex+1 != squaresArr.length) {
            squaresArr[idIndex+1].remove();
        } else {
            alert("Could not delete the sqaure after the selection. Try again!")
        }
    //Deletes the preceding square if the ID is odd
    } else if (parseInt(whatID)%2 != 0) {
        if (idIndex != 0) {
            squaresArr[idIndex-1].remove();
        } else {
            alert("Could not delete the sqaure before the selection. Try again!")
        }
    } else {
        console.log("Uh, are you sure the ID is a number?")
    }
}

//Displays square ID whenever the square is moused over
function squareHoverOn() {
    currentColor = event.target.style.backgroundColor;
    event.target.textContent = event.target.id;
    event.target.style.color = "white";
    event.target.style.textShadow = "1px 1px 1px black";
}

//Removes square ID whenever the mouse leaves the square
function squareHoverOff() {
    event.target.textContent = "";
}
