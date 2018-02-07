const PRICE_EXTRA_INGREDIENTS = 0.30;

function Burger({
    name = "Sola",
    price = 1,
    ingredients = [],
    extraIngredients = []
} = {}) {
    this.price = price;
    this.ingredients = ingredients;
    this.extraIngredients = extraIngredients;
    Item.call(this, name);
}

//item
Burger.prototype = Object.create(Item.prototype);
Burger.prototype.constructor = Burger.constructor;


//getters and setters
//getters
Burger.prototype.getName = function () {
    return this.name;
}
Burger.prototype.getPrice = function () {
    return this.price;
}
Burger.prototype.getIngredients = function () {
    return this.ingredients;
}
Burger.prototype.getExtraIngredients = function () {
    return this.extraIngredients;
}
//setters

Burger.prototype.setName = function (_name) {
    this.name = _name;
}
Burger.prototype.setPrice = function (_price) {
    this.price = _price;
}
Burger.prototype.setIngredients = function (_ingredients) {

    this.ingredients = _ingredients;
}
Burger.prototype.setExtraIngredients = function (_extraIngredients) {
    this.extraIngredients = _extraIngredients;
}





Burger.prototype.toString = function () {
    return `${Item.prototype.toString.call(this)}, price: ${this.price}`;
}

Burger.prototype.equals = function (burger) {
    if (!burger) {
        throw new BurgerException("Burger doesn't exist");
    }
    return this.id === burger.id;
}

Burger.prototype.addExtraIngredient = function (extraIngredient) {
    this.extraIngredients.push(extraIngredient);
    this.price += PRICE_EXTRA_INGREDIENTS;
}



// ten en cuenta que va a haber una funcion dentro de la clase burger que es la que ava a acceder a los ingredientes
// y otra en order que te elija la hamburgesa y te haga la funcion de la clase burger


Burger.prototype.isExtraIngredient = function (extraIngredient) {
    return this.extraIngredients.some(_extraIngredient => _extraIngredient === extraIngredient);
}


Burger.prototype.removeExtraIngredient = function (extraIngredient) {
    if (!this.isExtraIngredient(extraIngredient)) {
        throw new BurgerException("Ingredient extra doesn't found")
    }
    const indexExtraIngredient = this.extraIngredients.findIndex(_burger => _burger === extraIngredient);
    this.extraIngredients.splice(indexExtraIngredient, 1);
    this.price -= PRICE_EXTRA_INGREDIENTS;
}

Burger.prototype.numExtraIngredients = function () {
    return this.extraIngredients.length;
}