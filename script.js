var headerElement = document.createElement("header");
document.body.appendChild(headerElement);

var TitleElement = document.createElement("h1");
headerElement.appendChild(TitleElement);
TitleElement.innerHTML = "Jeu de dames";

var score1Element = document.createElement("span");
headerElement.appendChild(score1Element);
cptScore1 = 0;
score1Element.innerHTML = cptScore1;

var score2Element = document.createElement("span");
headerElement.appendChild(score2Element);
cptScore2 = 0;
score2Element.innerHTML = cptScore2;

var mainElement = document.createElement("main");
document.body.appendChild(mainElement);

ulElement = document.createElement("ul");
mainElement.appendChild(ulElement);

for (let j = 0; j < 5; j++){
    for (let i = 0; i < 10; i++){
        liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        liElement.style.width = "9.7%";
    
        if (i % 2 == 0){
            liElement.style.backgroundColor = "black";
            if (j < 2){
                var whitePion = document.createElement("div");
                liElement.appendChild(whitePion);
                whitePion.classList.add("whitePion");

                whitePion.addEventListener("click", function(){
                    var pion = this ;
                    this.classList.add("selected");
                    setTimeout(function(){
                        pion.classList.remove("selected");
                    }, 1000);
                })
            }
            else if (j > 2){
                var brownPion = document.createElement("div");
                liElement.appendChild(brownPion);
                brownPion.classList.add("brownPion");

                brownPion.addEventListener("click", function(){
                    var pion = this ;
                    this.classList.add("selected");
                    setTimeout(function(){
                        pion.classList.remove("selected");
                    }, 1000);
                })
            }
        }
        else{
            liElement.style.backgroundColor = "chocolate";
        }
    }
    for (let k = 0; k < 10; k++){
        liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        liElement.style.width = "9.7%";
    
        if (k % 2 == 0){
            liElement.style.backgroundColor = "chocolate";
        }
        else{
            liElement.style.backgroundColor = "black";
            if (j < 2){
                var whitePion = document.createElement("div");
                liElement.appendChild(whitePion);
                whitePion.classList.add("whitePion");

                whitePion.addEventListener("click", function(){
                    var pion = this ;
                    this.classList.add("selected");
                    setTimeout(function(){
                        pion.classList.remove("selected");
                    }, 1000);
                })
            }
            else if (j > 2){
                var brownPion = document.createElement("div");
                liElement.appendChild(brownPion);
                brownPion.classList.add("brownPion");

                brownPion.addEventListener("click", function(){
                    var pion = this ;
                    this.classList.add("selected");
                    setTimeout(function(){
                        pion.classList.remove("selected");
                    }, 1000);
                })
            }
        }
    }
}
