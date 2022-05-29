const findAngle = (hour , min) => {
    if(hour < 0 || min > 60 || min < 0){
        return - 1;
    }
    if(min === 60){
        hour = hour + 1;
        if(hour > 12){
            hour = hour - 12
        }
    }
    let hourAngle = 0.5 * (hour * 60 + min);
    let minAngle = 6 * min;
    let calcAngle = Math.abs(hourAngle - minAngle);
    calcAngle = Math.min(360 - calcAngle, calcAngle);
    return calcAngle;
    // if(min > 60 || hour < 0 || min < 0){
    //     console.log("wrong input");
    // }
    // if(hour === 12) hour = 0;
    // if(min === 60){
    //     hour += 1;
    //     if(hour > 12){
    //         hour = hour - 12;
    //     }
    // }
    // let hour_angle = 0.5 *  (hour * 60 + min);
    // let min_angle = 6 * min;
    // let angle = Math.abs(hour_angle - min_angle);
    // angle = Math.min(360 - angle, angle);
    // return angle;
}

console.log(findAngle(3, 30));