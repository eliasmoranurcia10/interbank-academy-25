// Se importa los módulos necesarios
const fileSystem = require('fs');       // Módulo para leer archivos del sistema
const csv = require('csv-parser');      // Módulo para analizar archivos CSV

// Arreglo donde se almacenarán todas las transacciones leídas del CSV
const dataTransacciones = [];

// Variables para acumular la suma de los montos por tipo de transacción
let sumaMontoTipoCredito = 0;
let sumaMontoTipoDebito = 0;
let balanceFinal = 0;

// Variables para detectar e identificar la transacción con mayor monto
let mayorMonto = 0;
let idMayorMonto = 0;

// Variables para contar las transacciones por tipo
let conteoCredito = 0;
let conteoDebito = 0;

// Lectura y procesamiento del archivo CSV
fileSystem.createReadStream('./data/data.csv')                      //Lee el archivo CSV
    .pipe(csv())                                                    // Parsea el CSV línea por línea
    .on('data', (data) => dataTransacciones.push(data))             // Agrega cada línea al array dataTransacciones
    .on('end', () => {                                              // Termina de leer el archivo y procede con la arrow función
        //Procesa cada transaccion una por una
        dataTransacciones.map((transaccion) => {                    
            // Suma y cuenta los montos por tipo
            if(transaccion.tipo === 'Crédito') {
                sumaMontoTipoCredito += parseFloat(transaccion.monto)
                // Proceso de conteo por Crédito
                conteoCredito ++;
                
            } else if(transaccion.tipo === 'Débito') {
                sumaMontoTipoDebito += parseFloat(transaccion.monto)
                // Proceso de conteo por Crédito
                conteoDebito ++;
            }

            // Verifica si esta transacción tiene el mayor monto, si es así se le asigna a la variable mayorMonto
            if (parseFloat(transaccion.monto) >=  mayorMonto ) {
                mayorMonto =  parseFloat(transaccion.monto);
                idMayorMonto = transaccion.id;
            }
        })
        // Calcula el balance final 
        balanceFinal = sumaMontoTipoCredito - sumaMontoTipoDebito;

        // Muestra los resultados del análisis
        console.log("Reporte de Transacciones");
        console.log("-------------------------------------------------");
        console.log("Balance Final: ", balanceFinal);
        console.log("Transaccion de Mayor Monto: ID", idMayorMonto, " - ", mayorMonto);
        console.log("Conteo de Transacciones: Crédito: ", conteoCredito, " Debito: ", conteoDebito);

        // Para ejecutar el app desde la terminal, se escribe lo siguiente
        // > node procesamientoTransacciones.js
    });




