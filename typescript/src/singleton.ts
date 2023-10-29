class Singleton {
  private static instance: Singleton;

  public static getInstance() {
    if(!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  // private static instance: Singleton;
  // private constructor() {

  // }
  // public static getInstance(): Singleton {
  //   if(!Singleton.instance) {
  //     Singleton.instance = new Singleton();
  //   }
  //   return Singleton.instance;
  // }

}

const sing1 = Singleton.getInstance();
const sing2 = Singleton.getInstance();
console.log(sing1 === sing2);