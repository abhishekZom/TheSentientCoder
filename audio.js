function playCoinCollision() {
  let coinCollision = new Audio('./assets/audio/coin.mp3')
  coinCollision.play()
}
function playLavaCollision() {
  let lavaCollision = new Audio('./assets/audio/lava.mp3')
  lavaCollision.volume = 0.2
  lavaCollision.play()
}
function playGameLost() {
  let gameLost = new Audio('./assets/audio/game_lost.mp3')
  gameLost.volume = 0.3
  gameLost.play()
}
function playGameWon() {
  let gameWon = new Audio('./assets/audio/game_over.mp3')
  gameWon.play()
}

