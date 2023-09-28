class Leaderboard {
    constructor() {
        this.scores = [];
    }

    // Add a new score
    addScore(playerName, score) {
        this.scores.push({ playerName, score });
        this.scores.sort((a, b) => b.score - a.score); // Sort scores in descending order
    }

    // Display the top n scores
    displayTop(n) {
        let topScores = this.scores.slice(0, n);
        for (let i = 0; i < topScores.length; i++) {
            console.log(`${i + 1}. ${topScores[i].playerName}: ${topScores[i].score}`);
        }
    }

    // Find and display a specific player's rank and score
    findPlayer(playerName) {
        for (let i = 0; i < this.scores.length; i++) {
            if (this.scores[i].playerName === playerName) {
                console.log(`Rank ${i + 1}: ${playerName} with score ${this.scores[i].score}`);
                return;
            }
        }
        console.log(`Player ${playerName} not found on the leaderboard.`);
    }
}

// Usage
const board = new Leaderboard();
board.addScore('Alice', 50);
board.addScore('Bob', 150);
board.addScore('Charlie', 100);

board.displayTop(3);  // Displays top 3 players
board.findPlayer('Charlie');  // Finds and displays Charlie's rank and score
