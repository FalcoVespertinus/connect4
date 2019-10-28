export function dropAChip(x,gameState){
	for(let y=5;y>=0;y--){
		if(gameState.table[y][x] == 0){
			gameState.table[y][x] = gameState.playerNr
			if(winCheck(gameState.playerNr,gameState)){
				gameState.winner = gameState.playerNr
			}
			if(gameState.playerNr == 1){
				gameState.playerNr = 2
			}else{
				gameState.playerNr = 1
			}
			break
		}
	}
}

function horizontal(y,x,player,gameState){
	for(let d=0;d<4;d++){
		if(!gameState.table[y-d] || gameState.table[y][x+d] !== player){
			return false
		}
	}
	return true
}

function vertical(y,x,player,gameState){
	for(let d=0;d<4;d++){
		if(!gameState.table[y-d] || gameState.table[y-d][x] !== player){
			return false
		}
	}
	return true
}

function diagonalRight(y,x,player,gameState){
	for(let d=0;d<4;d++){
		if(!gameState.table[y-d] || gameState.table[y-d][x+d] !== player){
			return false
		}
	}
	return true
}

function diagonalLeft({x,y,gameState,player}){
	for(let d=0;d<4;d++){
		if(!gameState.table[y-d] || gameState.table[y-d][x-d] !== player){
			return false
		}
	}
	return true
}

function winCheck(player,gameState){
	for(let y=gameState.table.length-1;y>=0;y--){
		for(let x=0;x<gameState.table[0].length;x++){
			if(diagonalRight(y,x,player,gameState)
			|| diagonalLeft({y,x,player,gameState})
			|| horizontal(y,x,player,gameState)
			|| vertical(y,x,player,gameState)){
				return true
			}
		}
	}
}


export function newGame(){
	return {
		table: [[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0]],
		playerNr: 1,
		winner: 0
	}
}
