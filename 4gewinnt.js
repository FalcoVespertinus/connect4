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
table.setAttribute("class","grid")

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

playAgain.addEventListener("click", function(){location.reload()})