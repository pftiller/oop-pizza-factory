console.log('client.js sourced in.');

class BasicPizza {
    constructor(toppings=[], base='cheese') {
        this.base=base;
        this.toppings=toppings;
    }
    price() {
        return (this.toppings.length * 0.99) + 10;
    }
}


class ExtraCheese extends BasicPizza {
    constructor(toppings=['extra cheese']) { 
        super();
        this.toppings = toppings;

    }
}

class Mushroom extends BasicPizza {
    constructor(toppings=['mushrooms']) { 
        super();
        this.toppings = toppings;
    }
}

class Supreme extends Mushroom {
    constructor(toppings=[]) {
       super(toppings);
 
        }
        
    }
class Order {
    constructor(pizza) {
        this.pizza = pizza;
    }
    orderPrice() {

    }
}

let firstPizza = new BasicPizza();
let secondPizza = new ExtraCheese();
let thirdPizza = new Mushroom();
let fourthPizza = new Supreme(toppings=['olives', 'peppers', 'pepperoni', 'sausage']);


console.log(firstPizza);
console.log(firstPizza.price());
console.log(secondPizza);
console.log(thirdPizza);
console.log(fourthPizza);
console.log(fourthPizza.price());


let firstOrder = new Order(firstPizza);

console.log(firstOrder);

