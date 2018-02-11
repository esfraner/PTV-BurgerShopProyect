function Beverage({
    centiliters = 33,
    isFizzy = true,
    alcoholVolume = 0.0,
    name,
    imageSrc,
    netPrice,
    tax,
    kcal,
    stock,
}) {
    this.centiliters = centiliters;
    this.isFizzy = isFizzy;
    this.alcoholVolume = alcoholVolume;
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
Beverage.prototype = Object.create(Item.prototype);
Beverage.prototype.constructor = Beverage.constructor;

//GETTERS

Beverage.prototype.getCentiliters = function () {
    return this.centiliters;
}

Beverage.prototype.getFizzy = function () {
    return this.isFizzy;
}

Beverage.prototype.getAlcoholVolume = function () {
    return this.alcoholVolume;
}

//SETTERS

Beverage.prototype.setCentiliters = function (_centiliters) {
    this.centiliters=_centiliters;
}

Beverage.prototype.setFizzy = function (_isFizzy) {
    this.isFizzy = _isFizzy;
}

Beverage.prototype.setAlcoholVolume = function (_AlcoholVolume) {
    this._AlcoholVolume = _AlcoholVolume;
}
