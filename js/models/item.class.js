let ID = 0;

function Item({
    name = "Dummy",
    imageSrc = "./",
    netPrice = 0.1,
    tax = 0,
    kcal = 1,
    stock = 0
} = {}) {
    this.id = ID++;
    this.name = name;
    this.imageSrc = imageSrc;
    this.netPrice = netPrice;
    this.tax = tax;
    this.kcal = kcal;
    this.stock = stock;
}

//GETTERS

Item.prototype.getName = function () {
    return this.name;
}

Item.prototype.getNetPrice = function () {
    return this.netPrice;
}

Item.prototype.getImagenSrc = function () {
    return this.imagenSrc;
}

Item.prototype.getTax = function () {
    return this.tax;
}

Item.prototype.getKcal = function () {
    return this.kcal;
}

Item.prototype.getStock = function () {
    return this.stock;
}


//SETTERS

Item.prototype.setName = function (_name) {
    this.name = _name;
}

Item.prototype.setNetPrice = function (_netPrice) {
    this.netPrice = _netPrice;
}

Item.prototype.setImagenSrc = function (_imagenSrc) {
    this.imagenSrc = _imagenSrc;
}

Item.prototype.setTax = function (_tax) {
    this.tax = _tax;
}

Item.prototype.setKcal = function (_kcal) {
    this.kcal = _kcal;
}

Item.prototype.setStock = function (_stock) {
    this.stock = _stock;
}

//TOSTRING

Item.prototype.toString = function () {
    return `Item: ${this.name}`;
}