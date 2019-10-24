let gameState = newGame()


function dropAChip(x){
	for(let y=5;y>=0;y--){
		if(gameState.table[y][x] == 0){
			gameState.table[y][x] = playerNr
			if(playerNr == 1){
				playerNr = 2
			}else{
				playerNr = 1
			}
			break
		}
	}
}

function horizontal(y,x,player){
	for(let d=0;d<4;d++){
		if(!gameState.table[y-d] || gameState.table[y][x+d] !== player){
			return false
		}
	}
	return true
}

function vertical(y,x,player){
	for(let d=0;d<4;d++){
		if(!gameState.table[y-d] || gameState.table[y-d][x] !== player){
			return false
		}
	}
	return true
}

function diagonalRight(y,x,player){
	for(let d=0;d<4;d++){
		if(!gameState.table[y-d] || gameState.table[y-d][x+d] !== player){
			return false
		}
	}
	return true
}
function diagonalLeft(y,x,player){
	for(let d=0;d<4;d++){
		if(!gameState.table[y-d] || gameState.table[y-d][x-d] !== player){
			return false
		}
	}
	return true
}

function winCheck(player){
	for(let y=gameState.table.length-1;y>=0;y--){
		for(let x=0;x<gameState.table[0].length;x++){
			if(diagonalRight(y,x,player)
			|| diagonalLeft(y,x,player)
			|| horizontal(y,x,player)
			|| vertical(y,x,player)){
				return true
			}
		}
	}
}

function winner(){
	for(let i=1;i<3;i++){
		if(winCheck(i)){
			console.log(`Player ${i} won!`)
		}
	}
}

function newGame(){
	return {
		table: [[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0]],
		playerNr: 1,
	}
}

console.log(gameState.table)