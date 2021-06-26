class Vehiculo
{
    id: number = 0;
    marca: string = "";
    modelo: string = "";
    precio: number = 0;
    constructor(i: number, mar:string, mod:string, pre:number) {
        this.id = i;
        this.marca = mar;
        this.modelo = mod;
        this.precio = pre;
    }
}

class Auto extends Vehiculo
{
    cantidadPuertas: number = 2;
    constructor(i:number, mar:string, mod:string, pre:number, cPuertas:number){
        super(i, mar, mod, pre);
        this.cantidadPuertas = cPuertas;
    }
}

class Camioneta extends Vehiculo
{
    cuatroXcuatro: boolean = false;
    constructor(i:number, mar:string, mod:string, pre:number, cuatro:boolean){
        super(i, mar, mod, pre);
        this.cuatroXcuatro = cuatro;
    }
}
