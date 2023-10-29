class SmallBox {
  label: string;
  constructor(label: string) {
    this.label = label;
  }
  getLabel(): string {
    return this.label;
  }
}

class LargeBox {
  boxes: (SmallBox | LargeBox) [];
  constructor() {
    this.boxes = [];
  }
  addBox(box: SmallBox | LargeBox) {
    this.boxes.push(box);
  }
  getAllBoxes():(SmallBox | LargeBox) [] {
    return this.boxes;
  }

  getSmallBoxes(): SmallBox[] {
    let result: SmallBox[] = [];
    for(let box of this.boxes) {
      if(box instanceof SmallBox) {
        result.push(box);
      } else if(box instanceof LargeBox) {
        result = result.concat(box.getSmallBoxes())
      }
    }
    return result;
  }
  
} 
const smallBox1 = new SmallBox("Red");
const smallBox2 = new SmallBox("Blue");

const innerLargeBox = new LargeBox();
innerLargeBox.addBox(smallBox1);

const outerLargeBox = new LargeBox();
outerLargeBox.addBox(smallBox2);
outerLargeBox.addBox(innerLargeBox);

console.log(outerLargeBox.getAllBoxes()); 
 // [ SmallBox { label: 'Blue' }, LargeBox { contents: [ [SmallBox] ] } ]
 console.log(outerLargeBox.getSmallBoxes()); 