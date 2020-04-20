var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");
var gameBoard = document.querySelector("#gameBoard");
var ques = document.querySelector("#ques");
var bg = document.querySelector("#bg");
var reset = document.querySelector("#playAgain");


var n = 6;





var color = chooseColor(n);
var pickColor = pickAColor();
ques.textContent = pickColor;

	
	var sqr = document.getElementsByClassName("sqr");
	
	for(var i=0;i<sqr.length;i++)
		{
			sqr[i].style.backgroundColor = color[i];
			
			
			
			
			sqr[i].addEventListener("click", function(){
				
				var clickColor = this.style.backgroundColor;
					
					if(clickColor === pickColor){
						
						if(n===6){
							for(var k=0;k<sqr.length ;k++)
							{
								sqr[k].style.backgroundColor = pickColor;
								gameBoard.textContent = "Winner";
								bg.style.backgroundColor = pickColor;
								reset.textContent = "Play Again?";
								
							}
						}
						else{
							for(var k=0;k<3 ;k++)
							{
								sqr[k].style.backgroundColor = pickColor;
								gameBoard.textContent = "Winner";
								bg.style.backgroundColor = pickColor;
								reset.textContent = "Play Again?";
								
							}
						}
						
					}
					else{
						this.style.backgroundColor = "black";
						gameBoard.textContent = "Try Again";
					}
				});
		}	





function pickAColor(){
	var random = Math.floor(Math.random() * color.length );
	
	return color[random];
	}

function chooseColor(num){
	
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(createColor())
	}
	
	return arr;
}

function createColor(){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

reset.addEventListener("click", resetFunction);



function resetFunction(){
	bg.style.backgroundColor = "#6385c9";
	color = chooseColor(n);
	pickColor = pickAColor();
	gameBoard.textContent = "     ";
	ques.textContent = pickColor;
	for(var i=0;i<sqr.length;i++)
		{
			sqr[i].style.backgroundColor = color[i];
			
		}
	reset.textContent = "CHANGE COLOR";
}

easy.addEventListener("click", function(){
	n = 3;
	resetFunction();
	easy.classList.add("selected");
	hard.classList.remove("selected");
	for(var i=3;i<sqr.length;i++){
		sqr[i].style.backgroundColor = "black";
		
	}
});

hard.addEventListener("click", function(){
	n = 6;
	resetFunction();
	hard.classList.add("selected");
	easy.classList.remove("selected");
});
