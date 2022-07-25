var reachingPoints = function(sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        if (tx == ty) break;
        
        if (tx > ty) {
            if (ty > sy) tx %= ty;
            else return (tx - sx) % ty == 0;
        } else {
            if (tx > sx) ty %= tx;
            else return (ty - sy) % tx == 0;
        }
    }
    
    return (tx == sx && ty == sy);
};
sx = 1, sy = 2, tx = 3, ty = 2
console.log(reachingPoints(sx, sy, tx, ty));
