class ParkingSpot {
  id: number;
  isAvailable: boolean;

  constructor(id: number) {
    this.id = id;
    this.isAvailable = true;
  }

  park(): void {
    if(this.isAvailable) {
      this.isAvailable = false;
    } else {
      console.log(`Slot has already been taken`);
    }
  }

  unpark() {
    this.isAvailable = true;
  }
}

class ParkingLot {
  spots: ParkingSpot[];
  capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.spots = Array.from({ length: capacity }, (_, i) => new ParkingSpot(i));

  }

  park(): number {
    const spot = this.spots.find(spot => spot.isAvailable);
    if(!spot) throw new Error('No Parking lot available');
    spot.park();
    return spot.id;
  }

  unpark(spotId: number) : void {
    const spot = this.spots[spotId];
    if(!spot || spot.isAvailable) throw new Error(`Unparking unsuccessful`)
    spot.unpark();
  }

  availableSpots(): number {
    return this.spots.filter(spot => spot.isAvailable).length
  }
}

const myParkingLot = new ParkingLot(30);
const parkedCarSpotId = myParkingLot.park();
console.log(`Car parked in spot: ${parkedCarSpotId}`);
const parkedCarSpotId1 = myParkingLot.park();
myParkingLot.unpark(parkedCarSpotId);
console.log(`Available spots: ${myParkingLot.availableSpots()}`);