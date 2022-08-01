class UndergroundSystem {
    customer = new Map();
    avg = new Map();

    checkin(id, time, stationName) {
        this.customer.set(id, {time, stationName});
    }

    checkout(id, time, stationName) {
        const {startStation, startTime} = this.customer.get(id);
        const key = `${startStation}-${stationName}`;
        const {sum, count} = this.avg.get(key) ?? {sum: 0, count: 0};
        this.avg.set(key, {sum: sum + (time - startTime), count: count + 1});
    }

    getAvg(startStation, endStation) {
        const {sum , count} = this.avg.get(`${startStation}-${endStation}`);
        return sum / count
    }
    // customer = new Map();
    // avg = new Map();

    // checkIn(id, stationName, time) {
    //     this.customer.set(id, {stationName, time});
    // }

    // checkOut(id, stationName, time) {
    //     const checkIn = this.customer.get(id);
    //     if(!checkIn) throw new Error(`Customer ${id} has not checked in`);
    //     const key = `${checkIn.stationName}-${stationName}`;
    //     const {sum , count} = this.avg.get(key) ?? {sum: 0, count: 0};
    //     this.avg.set(key, {sum: sum + (time - checkIn.time), count: count + 1});
    // }

    // getAvgTime(startStation , endStation) {
    //     const {sum , count} = this.avg.get(`${startStation}-${endStation}`) ?? {sum: 0, count: 0};
    //     return sum/count;
    // }
  //While practicing forgot about the checkout method where we needed to calculate the sum and count and using the nullish operator
}
