// @ts-ignore: Object is possibly 'null'.
namespace vehiculos {
  
  window.addEventListener("load", prepareSite);
  
  function $(id: string) { return document.getElementById(id); }
  
  //DONE
  function prepareSite() {
    $("addButton")?.addEventListener("click", mostrarVentana);
    
    $("selectorTipo")?.addEventListener("change", seleccionarVehiculo);
    
    $("filtroTipo")?.addEventListener("change", filtrarVehiculo);
    
    $("idCheck")?.addEventListener("change", function(){mostrarOcultarColumna(0, (<HTMLInputElement>$("idCheck")).checked);});
    $("MarcaCheck")?.addEventListener("change", function(){mostrarOcultarColumna(1, (<HTMLInputElement>$("MarcaCheck")).checked);});
    $("ModeloCheck")?.addEventListener("change", function(){mostrarOcultarColumna(2, (<HTMLInputElement>$("ModeloCheck")).checked);});
    $("PrecioCheck")?.addEventListener("change", function(){mostrarOcultarColumna(3, (<HTMLInputElement>$("PrecioCheck")).checked);});
    $("DetalleCheck")?.addEventListener("change", function(){mostrarOcultarColumna(4, (<HTMLInputElement>$("DetalleCheck")).checked);});
    
    if (localStorage.getItem("vehiculoArray") == null) {
      let vData: Array<Vehiculo> = [{
        "id": 1,
        "marca": "Mitsubishi",
        "modelo": "3000GT",
        "precio": 115673.7,
        "cuatroXcuatro": false
      } as Camioneta, {
        "id": 2,
        "marca": "Mercury",
        "modelo": "Montego",
        "precio": 318354.06,
        "cuatroXcuatro": false
      } as Camioneta, {
        "id": 3,
        "marca": "Mazda",
        "modelo": "MX-6",
        "precio": 583343.73,
        "cuatroXcuatro": false
      } as Camioneta, {
        "id": 4,
        "marca": "Mercedes-Benz",
        "modelo": "CLK-Class",
        "precio": 520144.68,
        "cuatroXcuatro": false
      } as Camioneta, {
        "id": 5,
        "marca": "Honda",
        "modelo": "Insight",
        "precio": 286152.77,
        "cuatroXcuatro": false
      } as Camioneta,
      { "id": 1, "marca": "Acura", "modelo": "SLX", "precio": 397777.89, "cantidadPuertas": 3 } as Auto,
      { "id": 2, "marca": "Volkswagen", "modelo": "Corrado", "precio": 793283.11, "cantidadPuertas": 5 } as Auto,
      { "id": 3, "marca": "Mercedes-Benz", "modelo": "SL-Class", "precio": 572210.1, "cantidadPuertas": 4 } as Auto,
      { "id": 4, "marca": "Lotus", "modelo": "Exige", "precio": 315293.29, "cantidadPuertas": 3 } as Auto,
      { "id": 5, "marca": "Cadillac", "modelo": "XLR", "precio": 926086.59, "cantidadPuertas": 5 } as Auto,
      { "id": 6, "marca": "Pontiac", "modelo": "Trans Sport", "precio": 597539.62, "cantidadPuertas": 3 } as Auto,
      { "id": 7, "marca": "Hyundai", "modelo": "Tiburon", "precio": 398698.31, "cantidadPuertas": 3 } as Auto,
      { "id": 8, "marca": "Honda", "modelo": "S2000", "precio": 905839.67, "cantidadPuertas": 4 } as Auto,
      { "id": 9, "marca": "Audi", "modelo": "S4", "precio": 170984.39, "cantidadPuertas": 2 } as Auto,
      { "id": 10, "marca": "Maybach", "modelo": "57", "precio": 595443.0, "cantidadPuertas": 3 } as Auto
    ];
    
    localStorage.setItem("vehiculoArray", JSON.stringify(vData));
  }
  
  var finalData = JSON.parse(localStorage.getItem("vehiculoArray")!);
  
  rehacerTabla(finalData);
}

//DONE
export function mostrarVentana() {
  (<HTMLInputElement>$("addMenu")).style.display = "block";
}

//DONE
export function cerrarVentana(){
  (<HTMLInputElement>$("addMenu")).style.display = "none";
  
  (<HTMLInputElement>$("selectorCuatro")).hidden = true;
  (<HTMLInputElement>$("selectorPuertas")).hidden = false;
  
  (<HTMLInputElement>$("txtMarca")).value = "";
  (<HTMLInputElement>$("txtModelo")).value = "";
  (<HTMLInputElement>$("numPrecio")).value = "";
  (<HTMLInputElement>$("selectorTipo")).value = "camioneta";
  (<HTMLInputElement>$("checkCuatro")).checked = false;
  (<HTMLInputElement>$("numPuertas")).value = "2";
  
  seleccionarVehiculo();
  
}

//DONE
function mostrarOcultarColumna(col_num :number, do_show: boolean) {
  let tabla= <HTMLInputElement>$("tabla");
  var col = tabla.getElementsByTagName('col')[col_num];
  if (col) {
    
    col.style.visibility=do_show?"":"collapse";
  }
}

//DONE
function filtrarVehiculo(){
  var tipo = (<HTMLInputElement>$("filtroTipo")).value;
  
  if(tipo=="auto"){
    var filtrados = JSON.parse(localStorage.getItem("vehiculoArray")!).filter(item=> item.hasOwnProperty("cantidadPuertas"));
  }else if(tipo=="camioneta"){
    var filtrados = JSON.parse(localStorage.getItem("vehiculoArray")!).filter(item=> item.hasOwnProperty("cuatroXcuatro"));
  }else{
    var filtrados = JSON.parse(localStorage.getItem("vehiculoArray")!);
  }
  rehacerTabla(filtrados);
}

//DONE
function rehacerTabla(lista: Array<object>){
  
  var tabla: HTMLTableElement = <HTMLTableElement>$("tCuerpo");
  var detalle: string;
  
  while(tabla.rows.length>0){
    tabla.removeChild(tabla.childNodes[0]);
  }
  
  for(const item of lista){
    if(item.hasOwnProperty("cuatroXcuatro")){
      if((<Camioneta>item).cuatroXcuatro)
      {detalle = "Es 4x4";}
      else
      {detalle = "No es 4x4";}
    }
    else if(item.hasOwnProperty("cantidadPuertas")){
      detalle = (<Auto>item).cantidadPuertas.toString() + " puertas";
    }
    else{detalle = "NaN"}
    
    var row: HTMLTableRowElement = document.createElement("tr");
    
    for(const param in item){
      if(param.toString() != "constructor"){
        let td: HTMLTableDataCellElement = document.createElement("td");
        if(param.toString() == "cuatroXcuatro" || param.toString() == "cantidadPuertas")
        {
          td.appendChild(document.createTextNode(detalle));
        }
        else{td.appendChild(document.createTextNode(item[param]));}
        row.appendChild(td);
      }
    }
    
    var btnDel = document.createElement("input");
    btnDel.type = "button";
    btnDel.className = "btn";
    btnDel.value = "Eliminar";
    btnDel.onclick = function(){eliminarDeTabla(lista.indexOf(item));};
    
    let td: HTMLTableDataCellElement = document.createElement("td");
    td.appendChild(btnDel);
    row.appendChild(td);
    
    tabla.appendChild(row);
  }
}

//DONE
function seleccionarVehiculo() {
  if((<HTMLInputElement>$("selectorTipo")).value == "auto"){
    (<HTMLInputElement>$("selectorCuatro")).hidden = true;
    (<HTMLInputElement>$("selectorPuertas")).hidden = false;
  }else{
    (<HTMLInputElement>$("selectorPuertas")).hidden = true;
    (<HTMLInputElement>$("selectorCuatro")).hidden = false;
  }
}

//DONE
export function agregar(){
  var id;
  let data = JSON.parse(localStorage.getItem("vehiculoArray")!);
  if(data.length == 0){
    id = 1;
  }
  else{
    var auxVehiculos = data;
    id = auxVehiculos.reduce(function(max, item){
      if(item.id >= max){
        return item.id +1;
      }
      return max;
    }, 0);
    if (id== 0){
      id + 1;
    }
  }
  
  var marca = (<HTMLInputElement>$("txtMarca")).value;
  var modelo = (<HTMLInputElement>$("txtModelo")).value;
  var precio = parseInt((<HTMLInputElement>$("numPrecio")).value);
  var tipo = (<HTMLInputElement>$("selectorTipo")).value;
  var cuatro = (<HTMLInputElement>$("checkCuatro")).checked;
  var puertas = parseInt((<HTMLInputElement>$("numPuertas")).value);
  
  if(tipo == "auto"){
    var auto: Auto = new Auto(id, marca, modelo, precio, puertas);
    data.push(auto);
  }
  else{
    var camioneta:Camioneta = new Camioneta(id, marca, modelo, precio, cuatro);
    data.push(camioneta)
  }
  localStorage.setItem("vehiculoArray", JSON.stringify(data));
  
  cerrarVentana();
  rehacerTabla(data);
}

function eliminarDeTabla(index : number){
  var data = JSON.parse(localStorage.getItem("vehiculoArray")!);
  data.splice(index, 1);
  localStorage.setItem("vehiculoArray", JSON.stringify(data));
  rehacerTabla(data);
}

export function calcularPromedio(){
  var tabla: HTMLTableElement = <HTMLTableElement>$("tCuerpo");
  var total: number = 0;
  var rows = tabla.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const element = rows[i].cells[rows[i].cells.length-3].innerText;
    total += parseInt(element);
  }
  total /= rows.length;
  (<HTMLInputElement>$("txtPromedio")).value = total.toString();
  }
  
}