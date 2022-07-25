function knightDialer(n) {
    let kMod = 1e9 + 7;
    const hop = new Array(10).fill(1);
    if(n == 1) return 10;
    for(let i = 2; i <= n ; i++) {
        const old = [...hop];
        hop[0] = (old[4] + old[6]) % kMod;
        hop[1] = (old[6] + old[8]) % kMod;
        hop[2] = (old[7] + old[9]) % kMod;
        hop[3] = (old[4] + old[8]) % kMod;
        hop[4] = (old[3] + old[9] + old[0]) % kMod;
        hop[5] = 0
        hop[6] = (old[1] + old[7] + old[0]) % kMod;
        hop[7] = (old[6] + old[2]) % kMod;
        hop[8] = (old[1] + old[3]) % kMod;
        hop[9] = (old[6] + old[8]) % kMod;
    }
    return hop.reduce((a, b) => a + b);
    
};
console.log(knightDialer(3))