{
  // instanceof guard ===> class

  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log(`I am making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, specie: string) {
      super(name, specie);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, specie: string) {
      super(name, specie);
    }
    makeMew() {
      console.log("I am mewing");
    }
  }

  // handle this by smart way with function

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    }
    if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Germen shepard", "dog");
  const cat = new Cat("biral chana", "cat");

  getAnimal(dog);

  //
}
