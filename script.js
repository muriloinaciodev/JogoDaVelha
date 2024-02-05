const game = document.getElementById('game')
const xMark = document.getElementById('x')
const oMark = document.getElementById('o')

player = 'x'
jogadas = 0
board = [
	1,2,3,
	4,5,6,
	7,8,9
]

function patters(){
	conditions = [
		//Padrões de vitorias em horizontal
		(board[0] == board[1] && board[1] == board[2]),
		(board[3] == board[4] && board[4] == board[5]),
		(board[6] == board[7] && board[7] == board[8]),
		// Padroes de vitoria && em Vertical
		(board[0] == board[3] && board[3] == board[6]),
		(board[1] == board[4] && board[4] == board[7]),
		(board[2] == board[5] && board[5] == board[8]),
		// Padrões de vitoria && em Diagonal
		(board[0] == board[4] && board[4] == board[8]),
		(board[2] == board[4] && board[4] == board[6])
	]
	return conditions.some(valor => valor === true)
}


//Mark play on board
function toMark(event){
	pos = event.target.id[7]

	// Se o local clicado ja foi marcado
	if (!event.target.innerHTML == ''){
		console.log('Ja foi alterado')
		return
	} else {
		board[pos-1] = player		
	}
	
	console.log(board)

	// Mostrando x ou o no interface
	if (player == 'x'){
		event.target.appendChild(xMark.cloneNode(true))
	} else {
		event.target.appendChild(oMark.cloneNode(true))
	}

	if (patters()) {
		alert(`O jogador "${player}" ganhou`)
		return
	}
	jogadas += 1
	if(jogadas == 9){
		alert('Empate')
	}
	// Alterando player para proxima jogada
	player = player=='o' ? 'x' : 'o'
	

}

// Build the board
for (let i = 1; i < 10; i++){
	tempBtn = document.createElement('button')
	tempBtn.id = `square-${i}`
	tempBtn.classList.add('square')
	tempBtn.addEventListener('click', toMark)
	game.appendChild(tempBtn)
}
