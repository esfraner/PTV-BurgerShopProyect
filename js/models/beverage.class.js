function Beverage({
    name = "",
    centiliters = 33,
    isFizzy = true,
    alcoholVolume = 0.0,
    imagenSrc = "",
    price = 0,
    tax = 0,
    kcal = 0,
    stock = 0
}) {
    this.centiliters = centiliters;
    this.isFizzy = isFizzy;
    this.alcoholVolume = alcoholVolume;
    Item.call(this, name);
}

Beverage.prototype.getName = function () {
    return this.name;
}
Beverage.prototype.getCentiliters = function () {
    return this.centiliters;
}
Beverage.prototype.isFizzy = function () {
    return this.isFizzy;
}
Beverage.prototype.getAlcoholVolume = function () {
    return this.alcoholVolume;
}
Beverage.prototype.setName = function (_name) {
    this.name = _name;
}
Beverage.prototype.setFizzy = function (_isFizzy) {
    this.isFizzy = _isFizzy;
}
Beverage.prototype.setAlcoholVolume = function (_AlcoholVolume) {
    this._AlcoholVolume = _AlcoholVolume;
}


Beverage.prototype.getName = function () {
    return this.name;
}
Beverage.prototype.getPrice = function () {
    return this.price;
}
Beverage.prototype.getImagenSrc = function () {
    return this.imagenSrc;
}
Beverage.prototype.getTax = function () {
    return this.tax;
}
Beverage.prototype.getKcal = function () {
    return this.kcal;
}
Beverage.prototype.getStock = function () {
    return this.stock;


}

Beverage.prototype.setName = function (_name) {
    this.name = _name;
}
Beverage.prototype.setPrice = function (_price) {
    this.price = _price;
}

Beverage.prototype.setImagenSrc = function (_imagenSrc) {
    this.imagenSrc = _imagenSrc;
}
Beverage.prototype.setTax = function (_tax) {
    this.tax = _tax;
}
Beverage.prototype.setKcal = function (_kcal) {
    this.kcal = _kcal;
}
Beverage.prototype.setStock = function (_stock) {
    this.stock = _stock;
}