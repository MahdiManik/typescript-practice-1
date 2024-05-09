{
  // oop ===> class

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sounds: string
    ) {}

    makeSound() {
      console.log(`the ${this.name} says ${this.sounds}`);
    }
  }

  const dog = new Animal("Germen shepard", "dog", "gew gew");
  const cat = new Animal("biral chana", "biral", "mew mew");

  //
}
