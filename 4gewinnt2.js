let table = [[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,2,0,0,0,0,0],
			[0,0,2,0,0,0,0],
			[0,0,0,2,0,0,0],
			[0,0,0,0,2,0,0]]

let playerNr = 1
let winMark = 0



function dropAChip(x){
	for(let y=5;y>=0;y--){
		if(table[y][x] == 0){
			table[y][x] = playerNr
			if(playerNr == 1){
				playerNr = 2
			}else{
				playerNr = 1
			}
			break
		}
	}
}

function winCheckHorizontal(player){
	for(let y=table.length-1;y>=0;y--){
		for(let x=0;x<table[0].length;x++){
			if(table[y][x] == player){
				winMark++
			}else{
				winMark = 0
			}
			if(winMark == 4){
				return true
			}
		}
	}
}

function winCheckVertical(player){
	for(let x=0;x<table[0].length;x++){
		for(let y=table.length-1;y>=0;y--){
			if(table[y][x] == player){
				winMark++
			}else{
				winMark = 0
			}
			if(winMark == 4){
				return true
			}
		}
	}
}

function diagonalRight(y,x,player){
	for(let d=0;d<4;d++){
		if(table[y-d] && table[y-d][x+d] == player){
			winMark++
		}else{
			winMark = 0
		}
		if(winMark == 4){
			return true
		}
	}
}
function diagonalLeft(y,x,player){
	for(let d=0;d<4;d++){
		if(table[y-d] && table[y-d][x-d] == player){
			winMark++
		}else{
			winMark = 0
		}
		if(winMark == 4){
			return true
		}
	}
}

function winCheckDiagonal(player){
	for(let y=table.length-1;y>=0;y--){
		for(let x=0;x<table[0].length;x++){
			if(diagonalRight(y,x,player)
			|| diagonalLeft(y,x,player)){
				return true
			}
		}
	}
}


function winCheck(nr){
	return winCheckHorizontal(nr) ||
	winCheckVertical(nr) ||
	winCheckDiagonal(nr)
}

winCheck(1)
winCheck(2)

console.log(table)