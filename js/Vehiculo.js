"use strict";
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
var vehiculos;
(function (vehiculos) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(i, mar, mod, pre) {
            this.id = 0;
            this.marca = "";
            this.modelo = "";
            this.precio = 0;
            this.id = i;
            this.marca = mar;
            this.modelo = mod;
            this.precio = pre;
        }
        return Vehiculo;
    }());
    vehiculos.Vehiculo = Vehiculo;
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(i, mar, mod, pre, cPuertas) {
            var _this = _super.call(this, i, mar, mod, pre) || this;
            _this.cantidadPuertas = 2;
            _this.cantidadPuertas = cPuertas;
            return _this;
        }
        return Auto;
    }(Vehiculo));
    vehiculos.Auto = Auto;
    var Camioneta = /** @class */ (function (_super) {
        __extends(Camioneta, _super);
        function Camioneta(i, mar, mod, pre, cuatro) {
            var _this = _super.call(this, i, mar, mod, pre) || this;
            _this.cuatroXcuatro = false;
            _this.cuatroXcuatro = cuatro;
            return _this;
        }
        return Camioneta;
    }(Vehiculo));
    vehiculos.Camioneta = Camioneta;
})(vehiculos || (vehiculos = {}));
