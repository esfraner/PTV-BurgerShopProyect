const PRICE_EXTRA_INGREDIENTS = 0.30;
//const burgerTest= new Burger({ingredients:["ingredientsTest"],name:"nameTest",netPrice:123});
function Burger({
    name,
    imageSrc,
    netPrice,
    tax,
    kcal,
    stock,
    ingredients = [],
    extraIngredients = []
} = {}) {
    this.ingredients = ingredients;
    this.extraIngredients = extraIngredients;
    Item.call(this, {
        name: name,
        imageSrc: imageSrc,
        netPrice: netPrice,
        tax: tax,
        kcal: kcal,
        stock: stock
    });
}

//ITEM
Burger.prototype = Object.create(Item.prototype);
Burger.prototype.constructor = Burger.constructor;


//GETTERS

Burger.prototype.getIngredients = function () {
    return this.ingredients;
}
Burger.prototype.getExtraIngredients = function () {
    return this.extraIngredients;
}

//SETTERS

Burger.prototype.setIngredients = function (_ingredients) {

    this.ingredients = _ingredients;
}
Burger.prototype.setExtraIngredients = function (_extraIngredients) {
    this.extraIngredients = _extraIngredients;
}

//TOSTRING

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