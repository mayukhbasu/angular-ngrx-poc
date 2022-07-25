const findAngle = (hour , min) => {
    if(hour < 0 || hour > 24 || min >60 || min < 0){
        return -1;
    }
    if(min === 60){
        hour = hour + 1;
        if(hour >= 12) {
            hour = hour - 12;
        }
    }
    let hourAngle = 0.5 * (60 * hour + min);
    let minAngle = 6 * min;
    let angleDiff = Math.abs(hourAngle - minAngle);
    angleDiff = Math.min(360 - angleDiff, angleDiff);
    return angleDiff;
    
    
}

console.log(findAngle(3, 30));