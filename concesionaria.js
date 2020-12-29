class Vehiculo {
    constructor(marca, modelo, precio) {
        this._marca = marca;
        this._modelo = modelo;
        this._precio = precio;
    }

    get marca() {
        return this._marca;
    }

    set marca(newMarca) {
        this._marca = newMarca;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(newModelo) {
        this._modelo = newModelo;
    }

    get precio() {
        return this._precio;
    }

    set precio(newPrecio) {
        this._precio = newPrecio;
    }
}


class Auto extends Vehiculo {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio);
        this._puertas = puertas;
    }

    get puertas() {
        return this._puertas;
    }

    set puertas(newPuertas) {
        this._puertas = newPuertas;
    }
}


class Moto extends Vehiculo {
    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio);
        this._cilindrada = cilindrada;
    }

    get cilindrada() {
        return this._cilindrada;
    }

    set cilindrada(newCilindrada) {
        this._cilindrada = newCilindrada;
    }
}


const vehiculos = new Array();
vehiculos.push(
    new Auto('Peugeot', '206', '200.000,00', '4'),
    new Moto('Honda', 'Titan', '60.000,00', '125cc'),
    new Auto('Peugeot', '208', '250.000,00', '5'),
    new Moto('Yamaha', 'YBR', '80.500,50', '160cc')
);

function imprimirTodos() {
    let todos = '';
    vehiculos.forEach(element => {
        todos = todos + `Marca: ${element.marca} // Modelo: ${element.modelo} // ${element.puertas ? 'Puertas: ' + element.puertas : 'Cilindrada: ' + element.cilindrada} // Precio: $${element.precio}\n`
    });
    return todos;
}

function vehiculoCaroOBarato(caro_o_barato) {
    if (caro_o_barato == 'caro') {
        let masCaro = vehiculos[0];
        vehiculos.forEach(element => {
            let comparado = parseFloat((masCaro.precio).replace(',', '.').replace('.', ''));
            let aComparar = parseFloat((element.precio).replace(',', '.').replace('.', ''));
            if (aComparar > comparado) {
                masCaro = element;
            }
        });
        return masCaro;
    }
    else if (caro_o_barato == 'barato') {
        let masBarato = vehiculos[0];
        vehiculos.forEach(element => {
            let comparado = parseFloat((masBarato.precio).replace(',', '.').replace('.', ''));
            let aComparar = parseFloat((element.precio).replace(',', '.').replace('.', ''));
            if (aComparar < comparado) {
                masBarato = element;
            }
        });
        return masBarato;
    }

}

function contieneY() {
    let elemento;
    vehiculos.forEach(element => {
        if (element.modelo.includes('Y')) {
            elemento = element;
        }
    });
    return elemento;
}

function ordenarDeMayorAMenor() {
    let vehiculosOrdenados = vehiculos.sort(function (a, b) {
        let comparado = parseFloat((a.precio).replace(',', '.').replace('.', ''));
        let aComparar = parseFloat((b.precio).replace(',', '.').replace('.', ''));
        if (comparado < aComparar) {
            return 1;
        }
        if (comparado > aComparar) {
            return -1;
        }
        return 0;
    });

    let ordenados = '';
    vehiculosOrdenados.forEach(element => {
        ordenados = ordenados + `${element.marca} ${element.modelo}\n`;
    });
    return ordenados;
}

/* vehiculos.forEach(element => {
    console.log(`Marca: ${element.marca} // Modelo: ${element.modelo} // ${element.puertas ? 'Puertas: ' + element.puertas : 'Cilindrada: ' + element.cilindrada} // Precio: $${element.precio}`);
}); */

console.log(`${imprimirTodos()}=============================
Vehículo más caro: ${vehiculoCaroOBarato('caro').marca} ${vehiculoCaroOBarato('caro').modelo}
Vehículo más barato: ${vehiculoCaroOBarato('barato').marca} ${vehiculoCaroOBarato('barato').modelo}
Vehículo que contiene en el modelo la letra 'Y': ${contieneY().marca} ${contieneY().modelo} $${contieneY().precio}
=============================
Vehículos ordenados por precio de mayor a menor:
${ordenarDeMayorAMenor()}

`);