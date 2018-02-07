function Dessert ({name = "", isDiabetic= false, imagenSrc= "", price=0, tax=0, kcal=0,stock=0 }) {
 
    this.isDiabetic=isDiabetic;
    this.price = price;
    this.imagenSrc=imagenSrc;
    this.tax= tax;
    this.kcal=kcal;
    this.stock = stock;

    Item.call(this, name);
}
Dessert.prototype.getName = function () {
    return this.name;
}
Dessert.prototype.getPrice = function () {
    return this.price;
}
Dessert.prototype.getImagenSrc = function () {
    return this.imagenSrc;
}
Dessert.prototype.getTax = function () {
    return this.tax;
}
Dessert.prototype.getKcal = function () {
    return this.kcal;
}
Dessert.prototype.getStock = function () {
    return this.stock;

   
}
Dessert.prototype.getIsDiabetic = function (isDiabetic) {
    this.isDiabetic = isDiabetic;
}
Dessert.prototype.setName = function (_name) {
    this.name = _name;
}
Dessert.prototype.setPrice = function (_price) {
    this.price = _price;
}

Dessert.prototype.setImagenSrc = function (_imagenSrc) {
    this.imagenSrc = _imagenSrc;
}
Dessert.prototype.setTax = function (_tax) {
    this.tax = _tax;
}
Dessert.prototype.setKcal = function (_kcal) {
    this.kcal = _kcal;
}
Dessert.prototype.setStock = function (_stock) {
    this.stock = _stock;
}
Dessert.prototype.setDiabetic = function (_isdiabetic) {
    this.isDiabetic = _isdiabetic;
}
