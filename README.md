# 📊 Procesador de Transacciones CSV - CLI App

## 🧠 Introducción

    Este proyecto es una aplicación desarrollada con el lenguaje de programación **JavaScript (Node.js)** .
    El objetivo del reto es leer el archivo **data.csv** con transacciones financieras y generar un reporte 
    que muestre:

    - El **balance final**
    - La **transacción con mayor monto**
    - El **conteo de transacciones** por tipo (Crédito y Débito) 

## 🚀 Instrucciones de Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/eliasmoranurcia10/interbank-academy-25.git
```
### 2. Instalar dependencias
```bash
npm install
```
    ✅ Asegúrate de tener el archivo data.csv en la ruta correcta (./data/data.csv)

### 3. Ejecutar la aplicación
```bash
node procesamientoTransacciones.js
```

## 🧩 Enfoque y Solución

### 📎 Se utilizó el módulo "csv-parser" para leer el archivo CSV de manera eficiente.
### 📎 Las transacciones se almacenan en un arreglo y se recorren con .map() para sumar montos por tipo, contar montos e identificar la transacción con mayor monto.
### 📎 Se Calcula el Balance Final.
### 📎 Se imprime un reporte claro y estructurado en consola.

## 🗂️ Estructura del Proyecto

```bash
    interbank-academy-25/
    │
    ├── data 
    │   └── data.csv
    ├── .gitignore
    ├── package-lock.json           
    ├── package.json           
    ├── procesamientoTransacciones.js
    └── README.md  
```