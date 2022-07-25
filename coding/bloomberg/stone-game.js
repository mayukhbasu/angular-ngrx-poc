    const winnerSquareGame = (n) => {
        const res = new Array(n + 1).fill(false);
        let k = 1;
        for(let i = 1; i <= n; i++) {
            if( k * k === i) {
                res[i] = true;
                k++;
                continue;
            }
            let aliceWins = false;
            for(let j = 1; j < k && j * j <= i; j++) {
                if(!res[i - j*j]) {
                    aliceWins = true;
                    break;
                }

            }
            res[i] = aliceWins;
        }
        return res[n];
    }

    console.log(winnerSquareGame(4))