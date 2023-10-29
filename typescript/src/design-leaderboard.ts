interface Score {
  playerName: string;
  score: number;
}

class LeaderBoard {
  scores: Score[];
  constructor() {
    this.scores = [];
  }

  addScore(playerName: string, score: number): void {
    this.scores.push({playerName, score});
    this.scores.sort((a, b) => b.score - a.score);
  }

  displayTop(n: number) {
    let topScores = this.scores.slice(0, n);
    for(let i = 0; i < topScores.length; i++) {
      console.log(`${i + 1} ${topScores[i].playerName} ${topScores[i].score}`)
    }
  }

  searchPlayer(playerName: string) {
    for(let i = 0; i < this.scores.length; i++) {
      if(this.scores[i].playerName === playerName) {
        console.log(`${i + 1} ${this.scores[i].playerName} ${this.scores[i].score}`);
        return;
      }
    }
    console.log(`Player not found`);
  }
}
const leaderboard = new LeaderBoard();
const board = new LeaderBoard();
board.addScore('Alice', 50);
board.addScore('Bob', 150);
board.addScore('Charlie', 100);

board.displayTop(3);  // Displays top 3 players
board.searchPlayer('Charlie');