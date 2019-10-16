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

playAgain.addEventListener("click", function(){location.reload()})





table.addEventListener("click",function(e){
	for(i=5;i>=0;i--){
		if(table.childNodes[i].childNodes[e.target.cellIndex].style.backgroundColor !== "red" && 
		table.childNodes[i].childNodes[e.target.cellIndex].style.backgroundColor !== "yellow"){
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





table.addEventListener("click",function(e){
	let winningMarkRed = 0
	for(i=5;i>=0;i--){
		if(table.childNodes[i].childNodes[e.target.cellIndex].style.backgroundColor == "red"){
			winningMarkRed++
		} else{
			winningMarkRed = 0
		}
		if(winningMarkRed==4){
			alert("Red wins!")
			board.style.backgroundColor = "black"
			board.style.borderColor = "black"
			nowPlaying.innerHTML = "The End"
			nowPlaying.style.backgroundColor = "grey"
			tableClone = table.cloneNode(true)
			table.parentNode.replaceChild(tableClone,table)
		}
	}
})
table.addEventListener("click",function(e){
	let winningMarkYellow = 0
	for(i=5;i>=0;i--){
		if(table.childNodes[i].childNodes[e.target.cellIndex].style.backgroundColor == "yellow"){
			winningMarkYellow++
		} else{
			winningMarkYellow = 0
		}
		if(winningMarkYellow==4){
			alert("Yellow wins!")
			board.style.backgroundColor = "black"
			board.style.borderColor = "black"
			nowPlaying.innerHTML = "The End"
			nowPlaying.style.backgroundColor = "grey"
			tableClone = table.cloneNode(true)
			table.parentNode.replaceChild(tableClone,table)
		}
	}
})





table.addEventListener("click",function(e){
	console.log(e)
	let winningMarkRed = 0
	for(j=5;j>=0;j--){
		for(i=0;i<7;i++){
			if(table.childNodes[j].childNodes[i].style.backgroundColor == "red"){
				winningMarkRed++
			} else{
				winningMarkRed = 0
			}
			if(winningMarkRed==4){
				alert("Red wins!")
				board.style.backgroundColor = "black"
				board.style.borderColor = "black"
				nowPlaying.innerHTML = "The End"
				nowPlaying.style.backgroundColor = "grey"
				tableClone = table.cloneNode(true)
				table.parentNode.replaceChild(tableClone,table)
					}
		}
	}
})
table.addEventListener("click",function(e){
	let winningMarkYellow = 0
	for(j=5;j>=0;j--){
		for(i=0;i<7;i++){
			if(table.childNodes[j].childNodes[i].style.backgroundColor == "yellow"){
				winningMarkYellow++
			} else{
				winningMarkYellow = 0
			}
			if(winningMarkYellow==4){
				alert("Yellow wins!")
				board.style.backgroundColor = "black"
				board.style.borderColor = "black"
				nowPlaying.innerHTML = "The End"
				nowPlaying.style.backgroundColor = "grey"
				tableClone = table.cloneNode(true)
				table.parentNode.replaceChild(tableClone,table)
					}
		}
	}
})





table.addEventListener("click",function(e){
	for(j=5;j>=0;j--){
		for(i=0;i<7;i++){
			if(table.childNodes[j].childNodes[i].style.backgroundColor == "red" 
			&& table.childNodes[j-1].childNodes[i+1].style.backgroundColor == "red" 
			&& table.childNodes[j-2].childNodes[i+2].style.backgroundColor == "red"
			&& table.childNodes[j-3].childNodes[i+3].style.backgroundColor == "red"){
				alert("Red wins!")
				board.style.backgroundColor = "black"
				board.style.borderColor = "black"
				nowPlaying.innerHTML = "The End"
				nowPlaying.style.backgroundColor = "grey"
				tableClone = table.cloneNode(true)
				table.parentNode.replaceChild(tableClone,table)
					}
		}
	}
})
table.addEventListener("click",function(e){
	for(j=5;j>=0;j--){
		for(i=0;i<7;i++){
			if(table.childNodes[j].childNodes[i].style.backgroundColor == "yellow" 
			&& table.childNodes[j-1].childNodes[i+1].style.backgroundColor == "yellow" 
			&& table.childNodes[j-2].childNodes[i+2].style.backgroundColor == "yellow"
			&& table.childNodes[j-3].childNodes[i+3].style.backgroundColor == "yellow"){
				alert("Yellow wins!")
				board.style.backgroundColor = "black"
				board.style.borderColor = "black"
				nowPlaying.innerHTML = "The End"
				nowPlaying.style.backgroundColor = "grey"
				tableClone = table.cloneNode(true)
				table.parentNode.replaceChild(tableClone,table)
					}
		}
	}
})
table.addEventListener("click",function(e){
	for(j=5;j>=0;j--){
		for(i=0;i<7;i++){
			if(table.childNodes[j].childNodes[i].style.backgroundColor == "red" 
			&& table.childNodes[j-1].childNodes[i-1].style.backgroundColor == "red" 
			&& table.childNodes[j-2].childNodes[i-2].style.backgroundColor == "red"
			&& table.childNodes[j-3].childNodes[i-3].style.backgroundColor == "red"){
				alert("Red wins!")
				board.style.backgroundColor = "black"
				board.style.borderColor = "black"
				nowPlaying.innerHTML = "The End"
				nowPlaying.style.backgroundColor = "grey"
				tableClone = table.cloneNode(true)
				table.parentNode.replaceChild(tableClone,table)
					}
		}
	}
})
table.addEventListener("click",function(e){
	for(j=5;j>=0;j--){
		for(i=0;i<7;i++){
			if(table.childNodes[j].childNodes[i].style.backgroundColor == "yellow" 
			&& table.childNodes[j-1].childNodes[i-1].style.backgroundColor == "yellow" 
			&& table.childNodes[j-2].childNodes[i-2].style.backgroundColor == "yellow"
			&& table.childNodes[j-3].childNodes[i-3].style.backgroundColor == "yellow"){
				alert("Yellow wins!")
				board.style.backgroundColor = "black"
				board.style.borderColor = "black"
				nowPlaying.innerHTML = "The End"
				nowPlaying.style.backgroundColor = "grey"
				tableClone = table.cloneNode(true)
				table.parentNode.replaceChild(tableClone,table)
					}
		}
	}
})





table.addEventListener("click",function(e){
	let drawNr = 0
	for(j=5;j>=0;j--){
		for(i=0;i<7;i++){
			if(table.childNodes[j].childNodes[i].style.backgroundColor == "red"
			|| table.childNodes[j].childNodes[i].style.backgroundColor == "yellow"){
				drawNr++
				console.log(drawNr)
				if(drawNr==42){
					alert("Draw!")
					board.style.backgroundColor = "black"
					board.style.borderColor = "black"
					nowPlaying.innerHTML = "The End"
					nowPlaying.style.backgroundColor = "grey"
					tableClone = table.cloneNode(true)
					table.parentNode.replaceChild(tableClone,table)
				}
			}
		}
	}
})
