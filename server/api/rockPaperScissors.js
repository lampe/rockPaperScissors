RoPaSc = new Restivus({
  prettyJson: true,
  defaultOptionsEndpoint: 'wrongPath'
});
RoPaSc.allowedMoves = ['rock', 'paper', 'scissors'];
RoPaSc.winningMoves = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};
RoPaSc.getRandomMove = () => RoPaSc.allowedMoves[Math.floor(Math.random() * RoPaSc.allowedMoves.length)];
RoPaSc.isValidMove = move => RoPaSc.allowedMoves.includes(move); // es7 polyfill
RoPaSc.wrongApiCall = () => {
  const error = {
    statusCode: 400,
    body: {
      error: 'Please us the api as follows: /api/move/rock'
    }
  };
  return error;
};
RoPaSc.getWinner = (move) => {
  if (RoPaSc.isValidMove(move.player) && RoPaSc.isValidMove(move.computer)) {
    if (move.player === move.computer) {
      return 'drawn';
    }
    if (move.computer === RoPaSc.winningMoves[move.player]) {
      return 'player';
    }
    return 'computer';
  }
  return RoPaSc.wrongApiCall();
};
RoPaSc.addRoute('move/:move', {
  get() {
    if (this.urlParams.move) {
      const move = {};
      move.player = this.urlParams.move.toString().toLowerCase();
      if (RoPaSc.isValidMove(move.player)) {
        move.computer = RoPaSc.getRandomMove();
        return {
          statusCode: 200,
          body: {
            move
          }
        };
      }
    }
    return RoPaSc.wrongApiCall();
  }
});
