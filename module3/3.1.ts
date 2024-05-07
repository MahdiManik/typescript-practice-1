{

    // oop ===> class 

    class Animal {
        

        constructor(public name: string, public species: string, public sounds: string) {
            // this.name = name;
            // this.species = species;
            // this.sounds = sounds;
        }

        makeSound() {
            console.log(`the ${this.name} says ${this.sounds}`);
        }

    }

    const dog = new Animal('Germen shepard', 'dog', 'gew gew')
    const cat = new Animal('biral chana', 'biral', 'mew mew')

    //
}