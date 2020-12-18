/* 
    npm install -g typescript 
    tcs --version
    tcs archivo.ts | compila a js 
    tcs --watch | se queda mirando los archivos ts y genera automaticamente los js
*/ 
 
/*  TSCONFIG | tcs --init : para generar este archivo

    La presencia de este archivo indica que estamos en un proyecto Typescript
    Es un JSON
    Permite configurar opciones del compilador
    Especifica los archivos principales

// -------- Archivos .d.ts | se denominan declaration files
// Proveen informacion sobre los tipos para el compilador de TS

// Lodash: Libreria externa | se necesita package.json con npm init se genera
// npm install lodash --save
import {random} from 'lodash'; 
const numeroAleatorio = (a:number,b:number) => {
    return random(a,b) // si nos posicionamos con el mouse en random, no nos da mucha informacion
}

// creamos el archivo typings.d.ts
declare module 'lodash' {
    export function random(min:number, max:number): number;
}

// Ahora si nos va a dar informacion


// ------------- Librerias ---------------

/* DefinitelyTyped y @types / que pasa si la libreria cambia lodash ?

npm install --save-dev @types/lodash | lo que hace es actualizar la definicion de tipos
Ahora no hace falta el archivo typing.d.ts

*/

