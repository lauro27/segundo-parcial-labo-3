"use strict";
window.addEventListener("load", prepareSite);
function $(id) { return document.getElementById(id); }
function prepareSite() {
    var main = new Main();
    var addbtn = $("addButton");
    addbtn.addEventListener("click", function () { main.mostrarVentana(addbtn); });
    var checkId = $("idCheck");
    var checkMarca = $("MarcaCheck");
    var checkModelo = $("ModeloCheck");
    var checkPrecio = $("PrecioCheck");
    checkId.addEventListener("change", function () { main.mostrarOcultarColumna("id"); });
    var txtMarca = $("txtMarca");
    var txtModelo = $("txtModelo");
    var numPrecio = $("numPrecio");
    var selectTipo = $("selectorTipo");
    var vData = [{
            "id": 1,
            "marca": "Mitsubishi",
            "modelo": "3000GT",
            "precio": 115673.7,
            "cuatroXcuatro": false
        }, {
            "id": 2,
            "marca": "Mercury",
            "modelo": "Montego",
            "precio": 318354.06,
            "cuatroXcuatro": false
        }, {
            "id": 3,
            "marca": "Mazda",
            "modelo": "MX-6",
            "precio": 583343.73,
            "cuatroXcuatro": false
        }, {
            "id": 4,
            "marca": "Mercedes-Benz",
            "modelo": "CLK-Class",
            "precio": 520144.68,
            "cuatroXcuatro": false
        }, {
            "id": 5,
            "marca": "Honda",
            "modelo": "Insight",
            "precio": 286152.77,
            "cuatroXcuatro": false
        },
        { "id": 1, "marca": "Acura", "modelo": "SLX", "precio": 397777.89, "cantidadPuertas": 3 },
        { "id": 2, "marca": "Volkswagen", "modelo": "Corrado", "precio": 793283.11, "cantidadPuertas": 5 },
        { "id": 3, "marca": "Mercedes-Benz", "modelo": "SL-Class", "precio": 572210.1, "cantidadPuertas": 4 },
        { "id": 4, "marca": "Lotus", "modelo": "Exige", "precio": 315293.29, "cantidadPuertas": 3 },
        { "id": 5, "marca": "Cadillac", "modelo": "XLR", "precio": 926086.59, "cantidadPuertas": 5 },
        { "id": 6, "marca": "Pontiac", "modelo": "Trans Sport", "precio": 597539.62, "cantidadPuertas": 3 },
        { "id": 7, "marca": "Hyundai", "modelo": "Tiburon", "precio": 398698.31, "cantidadPuertas": 3 },
        { "id": 8, "marca": "Honda", "modelo": "S2000", "precio": 905839.67, "cantidadPuertas": 4 },
        { "id": 9, "marca": "Audi", "modelo": "S4", "precio": 170984.39, "cantidadPuertas": 2 },
        { "id": 10, "marca": "Maybach", "modelo": "57", "precio": 595443.0, "cantidadPuertas": 3 }
    ];
    localStorage.setItem("vehiculoArray", JSON.stringify(vData));
    console.log(localStorage.getItem("vehiculoArray"));
}
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.mostrarVentana = function (btn) {
        btn.hidden = true;
        var window = $("addMenu");
        window.hidden = false;
    };
    Main.prototype.mostrarOcultarColumna = function (s) {
        var tabla = $("tabla");
        switch (s) {
            case "checkId":
                break;
            default:
                break;
        }
    };
    return Main;
}());
