class LeaderBoard {
    constructor() {
        this.map = new Map();
    }

    addScore(playerId, score) {
        if(this.map.has(playerId)){
            this.map.set(playerId, this.map.get(playerId) + score);
        }
        this.map.set(playerId, score);
    }
    top(k) {
        const arr = Array.from(this.map.values()).sort((a , b) => a - b);
        let sum = 0;
        let idx = 0;
        while(k --) {
            sum += arr[idx++]
        }
        return sum;
    }
    reset(playerId) {
        this.map.delete(playerId);
    }
}