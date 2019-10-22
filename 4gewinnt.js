let title = document.createElement("h1")
title.innerHTML = "Connect 4"

let playAgain = document.createElement("input")
playAgain.setAttribute("type","button")
playAgain.setAttribute("value","Play Again")
playAgain.setAttribute("class","play-again")

let nowPlaying = document.createElement("p")
nowPlaying.innerHTML = "Starting"
nowPlaying.setAttribute("class","now-playing")
nowPlaying.style.backgroundColor = "red"

let board = document.createElement("div")
board.setAttribute("class","board")

let table = document.createElement("table")
table.setAttribute("class","table")

let playerColor = "red"

for(j=0;j<6;j++){
	let row = document.createElement("tr")
	row.setAttribute("class","row")
	for(i=0;i<7;i++){
		let column = document.createElement("td")
		column.setAttribute("class","column")
		row.appendChild(column)
	}
	table.appendChild(row)
}

document.body.appendChild(title)
document.body.appendChild(nowPlaying)
document.body.appendChild(board)
document.body.appendChild(playAgain)
board.appendChild(table)

playAgain.addEventListener("click", function(){
	location.reload()
})

function gameEnd(alertText){
	board.style.backgroundColor = "black"
	board.style.borderColor = "black"
	nowPlaying.innerHTML = "The End"
	nowPlaying.style.backgroundColor = "grey"
	tableClone = table.cloneNode(true)
	table.parentNode.replaceChild(tableClone,table)
	setTimeout(function(){ alert(alertText); }, 100);
}

function getColorOfCell(i,e){
	return table.childNodes[i].childNodes[e.target.cellIndex].style.backgroundColor
}

function getColorOfRow(j,i){
	return table.childNodes[j].childNodes[i].style.backgroundColor
}

function diagonalRight(j,i,color){
	return table.childNodes[j].childNodes[i].style.backgroundColor == color 
	&& table.childNodes[j-1].childNodes[i+1].style.backgroundColor == color 
	&& table.childNodes[j-2].childNodes[i+2].style.backgroundColor == color
	&& table.childNodes[j-3].childNodes[i+3].style.backgroundColor == color
}
function diagonalLeft(j,i,color){
	return table.childNodes[j].childNodes[i].style.backgroundColor == color 
	&& table.childNodes[j-1].childNodes[i-1].style.backgroundColor == color
	&& table.childNodes[j-2].childNodes[i-2].style.backgroundColor == color
	&& table.childNodes[j-3].childNodes[i-3].style.backgroundColor == color
}

let winningMarkRed = 0
let winningMarkYellow = 0





table.addEventListener("click",function dropCoin(e){
	for(i=5;i>=0;i--){
		let isRowOccupied = getColorOfCell(i,e) !== "red" && getColorOfCell(i,e) !== "yellow"
		if(isRowOccupied){
			table.childNodes[i].childNodes[e.target.cellIndex].style.backgroundColor = playerColor
			if(playerColor == "red"){
				playerColor = "yellow"
			} else {
				playerColor = "red"
			}
			nowPlaying.style.backgroundColor = playerColor
			nowPlaying.innerHTML = "Up next"
			break
		}
	}
})





table.addEventListener("click",function vertical(e){
	for(i=5;i>=0;i--){
		if(getColorOfCell(i,e) == "red"){
			winningMarkRed++
		} else{
			winningMarkRed = 0
		}
		if(getColorOfCell(i,e) == "yellow"){
			winningMarkYellow++
		} else{
			winningMarkYellow = 0
		}
		if(winningMarkRed==4){
			gameEnd("Red wins!")
		}
		if(winningMarkYellow==4){
			gameEnd("Yellow wins!")
		}
	}
})





table.addEventListener("click",function horizontal(e){
	for(j=5;j>=0;j--){
		for(i=0;i<7;i++){
			if(getColorOfRow(j,i) == "red"){
				winningMarkRed++
			} else{
				winningMarkRed = 0
			}
			if(getColorOfRow(j,i) == "yellow"){
				winningMarkYellow++
			} else{
				winningMarkYellow = 0
			}
			if(winningMarkRed==4){
				gameEnd("Red wins!")
			}
			if(winningMarkYellow==4){
				gameEnd("Yellow wins!")
			}
		}
	}
})





table.addEventListener("click",function diagonal(e){
	for(j=5;j>=0;j--){
		for(i=0;i<7;i++){
			if(diagonalRight(j,i,"red") || diagonalLeft(j,i,"red")){
				gameEnd("Red wins!")
			}
			if(diagonalRight(j,i,"yellow") || diagonalLeft(j,i,"yellow")){
				gameEnd("Yellow wins!")
			}
		}
	}
})





table.addEventListener("click",function draw(e){
	let drawNr = 0
	for(j=5;j>=0;j--){
		for(i=0;i<7;i++){
			if(getColorOfRow(j,i) == "red" || getColorOfRow(j,i) == "yellow"){
				drawNr++
				if(drawNr==42){
					gameEnd("Draw!")
				}
			}
		}
	}
})
