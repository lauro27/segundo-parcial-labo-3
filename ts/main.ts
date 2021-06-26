window.addEventListener("load", prepareSite);

function $(id:string){ return document.getElementById(id);}

function prepareSite()
{
    let main = new Main();
    var addbtn = <HTMLInputElement> $("addButton");
    addbtn.addEventListener("click",  function(){main.mostrarVentana(addbtn)});

    var checkId = <HTMLElement> $("idCheck");
    var checkMarca = <HTMLElement> $("MarcaCheck");
    var checkModelo = <HTMLElement> $("ModeloCheck");
    var checkPrecio = <HTMLElement> $("PrecioCheck");

    checkId.addEventListener("change", function(){main.mostrarOcultarColumna("id")});

    var txtMarca = <HTMLElement> $("txtMarca");
    var txtModelo = <HTMLElement> $("txtModelo");
    var numPrecio = <HTMLElement> $("numPrecio");
    var selectTipo = <HTMLElement> $("selectorTipo");




    type veh = Camioneta | Auto;
    let vData: Array<veh>= [{
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
      {"id":1,"marca":"Acura","modelo":"SLX","precio":397777.89,"cantidadPuertas":3},
    {"id":2,"marca":"Volkswagen","modelo":"Corrado","precio":793283.11,"cantidadPuertas":5},
    {"id":3,"marca":"Mercedes-Benz","modelo":"SL-Class","precio":572210.1,"cantidadPuertas":4},
    {"id":4,"marca":"Lotus","modelo":"Exige","precio":315293.29,"cantidadPuertas":3},
    {"id":5,"marca":"Cadillac","modelo":"XLR","precio":926086.59,"cantidadPuertas":5},
    {"id":6,"marca":"Pontiac","modelo":"Trans Sport","precio":597539.62,"cantidadPuertas":3},
    {"id":7,"marca":"Hyundai","modelo":"Tiburon","precio":398698.31,"cantidadPuertas":3},
    {"id":8,"marca":"Honda","modelo":"S2000","precio":905839.67,"cantidadPuertas":4},
    {"id":9,"marca":"Audi","modelo":"S4","precio":170984.39,"cantidadPuertas":2},
    {"id":10,"marca":"Maybach","modelo":"57","precio":595443.0,"cantidadPuertas":3}
    ];
    
    localStorage.setItem("vehiculoArray", JSON.stringify(vData));

    console.log(localStorage.getItem("vehiculoArray"));
}

class Main {
    public mostrarVentana(btn:HTMLInputElement):void
    {
        btn.hidden = true;
        let window: HTMLElement = <HTMLElement> $("addMenu");
        window.hidden = false;
    }
    
    public mostrarOcultarColumna(s:string)
    {
        let tabla: HTMLElement= <HTMLElement> $("tabla");
        switch (s) {
            case "checkId":
                
                break;
        
            default:
                break;
        }
    }

    

}
