var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Truck = /** @class */ (function () {
    function Truck(color) {
        this.maxLift = 0;
        this.color = color;
    }
    Truck.prototype.show = function () {
        return "I'm a ".concat(this.color, " truck");
    };
    Truck.prototype.lift = function () {
        return "I'm lifting under ".concat(this.maxLift);
    };
    Truck.prototype.setMaxLift = function (maxLift) {
        this.maxLift = maxLift;
    };
    return Truck;
}());
var Convertible = /** @class */ (function () {
    function Convertible(color) {
        this.hud = 'A hood';
        this.color = color;
    }
    Convertible.prototype.show = function () {
        return "I'm a ".concat(this.color, " truck");
    };
    Convertible.prototype.removeHud = function () {
        this.hud = '';
    };
    return Convertible;
}());
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    return CarFactory;
}());
var TruckFactory = /** @class */ (function (_super) {
    __extends(TruckFactory, _super);
    function TruckFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TruckFactory.prototype.createCar = function (color) {
        var truck = new Truck('red');
        truck.setMaxLift(25);
        return truck;
    };
    return TruckFactory;
}(CarFactory));
var ConvertibleFactory = /** @class */ (function (_super) {
    __extends(ConvertibleFactory, _super);
    function ConvertibleFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConvertibleFactory.prototype.createCar = function (color) {
        var convertible = new Convertible('white');
        return convertible;
    };
    return ConvertibleFactory;
}(CarFactory));
/* Using the factory */
var carFactories = {
    'truck': new TruckFactory(),
    'convertible': new ConvertibleFactory() //Singleton
};
var wishList = [
    { type: 'truck', color: 'red' },
    { type: 'convertible', color: 'green' },
    { type: 'truck', color: 'white' },
    { type: 'convertible', color: 'red' },
    { type: 'truck', color: 'blue' }
];
var cars = wishList.map(function (listItem) {
    return carFactories[listItem.type].buildCar(listItem.color);
});
console.log(cars);
