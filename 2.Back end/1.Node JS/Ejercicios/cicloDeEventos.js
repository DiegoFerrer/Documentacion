console.log('inicio')

setTimeout(()=>{
    console.log('Uno')
},3000)

setTimeout(()=>{
    console.log('Dos')
},0)

setTimeout(()=>{
    console.log('Tres')
},0)

console.log('fin')


/* 
    Inicio
    Fin
    Dos
    Tres
    Uno

    

*/