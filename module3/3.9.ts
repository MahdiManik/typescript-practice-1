{
  // abstraction ===> 1. interface 2. abstract

  interface Vehicle1 {
    startEngin(): void;
    stopEngin(): void;
    move(): void;
  }
  //   const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: 2000,
  //   };

  class Car implements Vehicle1 {
    startEngin(): void {
      console.log("I am start engin the car");
    }
    stopEngin(): void {
      console.log("I am stop the engin");
    }
    move(): void {
      console.log("I am moving the car");
    }
    test() {
      console.log("I am just testing");
    }
  }

  abstract class Car2 {
    abstract startEngin(): void;
    abstract stopEngin(): void;
    abstract move(): void;
    test() {
      console.log("I am just testing");
    }
  }

  class ToyotaCar extends Car2 {
    startEngin(): void {
      console.log("I am start engin the car");
    }
    stopEngin(): void {
      console.log("I am stop the engin");
    }
    move(): void {
      console.log("I am moving the car");
    }
    test() {
      console.log("I am just testing");
    }
  }
  const toyotaCar = new ToyotaCar();
  toyotaCar.startEngin();
  toyotaCar.stopEngin();
  toyotaCar.move();
  toyotaCar.test();
}
