function Sides({
    name = "",
    units = 6,
    imagenSrc = "",
    price = 0,
    tax = 0,
    kcal = 0,
    stock = 0
}) {

    this.units = units;
    this.price = price;
    this.imagenSrc = imagenSrc;
    this.tax = tax;
    this.kcal = kcal;
    this.stock = stock;

    Item.call(this, name);
}

Sides.prototype.getName = function () {
    return this.name;
}
Sides.prototype.getPrice = function () {
    return this.price;
}
Sides.prototype.getImagenSrc = function () {
    return this.imagenSrc;
}
Sides.prototype.getTax = function () {
    return this.tax;
}
Sides.prototype.getKcal = function () {
    return this.kcal;
}
Sides.prototype.getStock = function () {
    return this.stock;


}
Sides.prototype.getUnits = function (units) {
    this.price = units;
}
Sides.prototype.setName = function (_name) {
    this.name = _name;
}
Sides.prototype.setPrice = function (_price) {
    this.price = _price;
}

Sides.prototype.setImagenSrc = function (_imagenSrc) {
    this.imagenSrc = _imagenSrc;
}
Sides.prototype.setTax = function (_tax) {
    this.tax = _tax;
}
Sides.prototype.setKcal = function (_kcal) {
    this.kcal = _kcal;
}
Sides.prototype.setStock = function (_stock) {
    this.stock = _stock;
}
Sides.prototype.setUnits = function (_units) {
    this.units = _units;
}