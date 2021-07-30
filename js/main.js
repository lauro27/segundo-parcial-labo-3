"use strict";
// @ts-ignore: Object is possibly 'null'.
var vehiculos;
(function (vehiculos) {
    window.addEventListener("load", prepareSite);
    function $(id) { return document.getElementById(id); }
    //DONE
    function prepareSite() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        (_a = $("addButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", mostrarVentana);
        (_b = $("selectorTipo")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", seleccionarVehiculo);
        (_c = $("filtroTipo")) === null || _c === void 0 ? void 0 : _c.addEventListener("change", filtrarVehiculo);
        (_d = $("idCheck")) === null || _d === void 0 ? void 0 : _d.addEventListener("change", function () { mostrarOcultarColumna(0, $("idCheck").checked); });
        (_e = $("MarcaCheck")) === null || _e === void 0 ? void 0 : _e.addEventListener("change", function () { mostrarOcultarColumna(1, $("MarcaCheck").checked); });
        (_f = $("ModeloCheck")) === null || _f === void 0 ? void 0 : _f.addEventListener("change", function () { mostrarOcultarColumna(2, $("ModeloCheck").checked); });
        (_g = $("PrecioCheck")) === null || _g === void 0 ? void 0 : _g.addEventListener("change", function () { mostrarOcultarColumna(3, $("PrecioCheck").checked); });
        (_h = $("DetalleCheck")) === null || _h === void 0 ? void 0 : _h.addEventListener("change", function () { mostrarOcultarColumna(4, $("DetalleCheck").checked); });
        if (localStorage.getItem("vehiculoArray") == null) {
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
        }
        var finalData = JSON.parse(localStorage.getItem("vehiculoArray"));
        rehacerTabla(finalData);
    }
    //DONE
    function mostrarVentana() {
        $("addMenu").style.display = "block";
    }
    vehiculos.mostrarVentana = mostrarVentana;
    //DONE
    function cerrarVentana() {
        $("addMenu").style.display = "none";
        $("selectorCuatro").hidden = true;
        $("selectorPuertas").hidden = false;
        $("txtMarca").value = "";
        $("txtModelo").value = "";
        $("numPrecio").value = "";
        $("selectorTipo").value = "camioneta";
        $("checkCuatro").checked = false;
        $("numPuertas").value = "2";
        seleccionarVehiculo();
    }
    vehiculos.cerrarVentana = cerrarVentana;
    //DONE
    function mostrarOcultarColumna(col_num, do_show) {
        var tabla = $("tabla");
        var col = tabla.getElementsByTagName('col')[col_num];
        if (col) {
            col.style.visibility = do_show ? "" : "collapse";
        }
    }
    //DONE
    function filtrarVehiculo() {
        var tipo = $("filtroTipo").value;
        if (tipo == "auto") {
            var filtrados = JSON.parse(localStorage.getItem("vehiculoArray")).filter(function (item) { return item.hasOwnProperty("cantidadPuertas"); });
        }
        else if (tipo == "camioneta") {
            var filtrados = JSON.parse(localStorage.getItem("vehiculoArray")).filter(function (item) { return item.hasOwnProperty("cuatroXcuatro"); });
        }
        else {
            var filtrados = JSON.parse(localStorage.getItem("vehiculoArray"));
        }
        rehacerTabla(filtrados);
    }
    //DONE
    function rehacerTabla(lista) {
        var tabla = $("tCuerpo");
        var detalle;
        while (tabla.rows.length > 0) {
            tabla.removeChild(tabla.childNodes[0]);
        }
        var _loop_1 = function (item) {
            if (item.hasOwnProperty("cuatroXcuatro")) {
                if (item.cuatroXcuatro) {
                    detalle = "Es 4x4";
                }
                else {
                    detalle = "No es 4x4";
                }
            }
            else if (item.hasOwnProperty("cantidadPuertas")) {
                detalle = item.cantidadPuertas.toString() + " puertas";
            }
            else {
                detalle = "NaN";
            }
            row = document.createElement("tr");
            for (var param in item) {
                if (param.toString() != "constructor") {
                    var td_1 = document.createElement("td");
                    if (param.toString() == "cuatroXcuatro" || param.toString() == "cantidadPuertas") {
                        td_1.appendChild(document.createTextNode(detalle));
                    }
                    else {
                        td_1.appendChild(document.createTextNode(item[param]));
                    }
                    row.appendChild(td_1);
                }
            }
            btnDel = document.createElement("input");
            btnDel.type = "button";
            btnDel.className = "btn";
            btnDel.value = "Eliminar";
            btnDel.onclick = function () { eliminarDeTabla(lista.indexOf(item)); };
            var td = document.createElement("td");
            td.appendChild(btnDel);
            row.appendChild(td);
            tabla.appendChild(row);
        };
        var row, btnDel;
        for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
            var item = lista_1[_i];
            _loop_1(item);
        }
    }
    //DONE
    function seleccionarVehiculo() {
        if ($("selectorTipo").value == "auto") {
            $("selectorCuatro").hidden = true;
            $("selectorPuertas").hidden = false;
        }
        else {
            $("selectorPuertas").hidden = true;
            $("selectorCuatro").hidden = false;
        }
    }
    //DONE
    function agregar() {
        var id;
        var data = JSON.parse(localStorage.getItem("vehiculoArray"));
        if (data.length == 0) {
            id = 1;
        }
        else {
            var auxVehiculos = data;
            id = auxVehiculos.reduce(function (max, item) {
                if (item.id >= max) {
                    return item.id + 1;
                }
                return max;
            }, 0);
            if (id == 0) {
                id + 1;
            }
        }
        var marca = $("txtMarca").value;
        var modelo = $("txtModelo").value;
        var precio = parseInt($("numPrecio").value);
        var tipo = $("selectorTipo").value;
        var cuatro = $("checkCuatro").checked;
        var puertas = parseInt($("numPuertas").value);
        if (tipo == "auto") {
            var auto = new vehiculos.Auto(id, marca, modelo, precio, puertas);
            data.push(auto);
        }
        else {
            var camioneta = new vehiculos.Camioneta(id, marca, modelo, precio, cuatro);
            data.push(camioneta);
        }
        localStorage.setItem("vehiculoArray", JSON.stringify(data));
        cerrarVentana();
        rehacerTabla(data);
    }
    vehiculos.agregar = agregar;
    function eliminarDeTabla(index) {
        var data = JSON.parse(localStorage.getItem("vehiculoArray"));
        data.splice(index, 1);
        localStorage.setItem("vehiculoArray", JSON.stringify(data));
        rehacerTabla(data);
    }
    function calcularPromedio() {
        var tabla = $("tCuerpo");
        var total = 0;
        var rows = tabla.getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++) {
            console.log(rows[i]);
            var element = rows[i].cells[rows[i].cells.length - 3].innerText;
            console.log(element);
            total += parseInt(element);
        }
        total /= rows.length;
        $("txtPromedio").value = total.toString();
    }
    vehiculos.calcularPromedio = calcularPromedio;
})(vehiculos || (vehiculos = {}));
