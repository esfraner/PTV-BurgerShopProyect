function Order() {
    this.burgers = [];

}

Order.prototype.addBurger = function (burger) {
    const burgerFound = this.burgers.find((_burger) => _burger.equals(burger));
    if (burgerFound) {
        throw new Error("Burger exists");
    }

    this.burgers.push(burger);
}

Order.prototype.toString = function () {
    return this.burgers.reduce((res, burger) => res = res + burger.toString(), "")
}

Order.prototype.findIndexBurger = function (burger) {
    return this.burgers.findIndex(_burger => _burger.equals(burger));
}

Order.prototype.removeBurger = function (burgerIndex) {
    this.burgers.splice(burgerIndex, 1);
}

//Pública
Order.prototype.deleteBurger = function (burger) { //futuro id
    const burgerIndex = this.findIndexBurger(burger);

    if (this.isBurger(burgerIndex)) {
        throw new Error("Burger doesn't exist");
    }

    this.removeBurger(burgerIndex);
}

//Privada
Order.prototype.isBurger = function (burgerIndex) {
    return burgerIndex === -1;
}

//Pública
Order.prototype.existsBurger = function (burger) {
    return this.burgers.some(_burger => _burger.equals(burger));
}

//Pública
Order.prototype.addExtraIngredient = function (burger, extraIngredient) {

    if (!this.existsBurger(burger)) {
        throw new Error("Burger doesn't exists");
    }
    burger.addExtraIngredient(burger, extraIngredient);
}

Order.prototype.deleteExtraIngredient = function (burger, extraIngredient) {
    // pues imagiante que estamos en order, bien, nos llegan dos parametros, burger y el ingrediente
    // order.deleteExtraIngredient(hamburguesa1, 'lechuga');

    if (!this.existsBurger(burger)) { //comprueba
        throw new Error("Burger doesn't exist");
    }

    burger.removeExtraIngredient(burger, extraIngredient);
    //y aqui le llega la funcion con los paramtros
    //no tiene nada complicado

}
Order.prototype.arrayOrderLong = function(){
    return this.burgers.length;
}