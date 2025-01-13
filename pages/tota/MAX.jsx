import { useState,useEffect } from "react"
import Layout from "../Layout"
import styles from"./MAX.module.css"
import Link from "next/link"


export default function Max ( {data}){
    console.log(data)

let [agregar,setagregar]=useState(
    ["","","","","","","","",""]
)
let [cambiando,setcambiando]=useState(true)
let[ detenerFuncion,setdetenerFuncion]=useState(true)
let [cantidad,setcatidad]=useState(0)

let [ escritura,setescritura]=useState( "")




useEffect(()=>{
let next = window.localStorage.getItem("grey") || "[]"
let mas= next? JSON.parse(next): []
 setagregar(mas)

let turno = window.localStorage.getItem("tur") || "true"
let capi= turno? JSON.parse(turno) : false

setcambiando(capi)


 
        },[])


function Reiniciar(a){
    setagregar( ["","","","","","","","",""]  )
   let  agre= ["","","","","","","","",""]

let sal = 0
setcatidad(0)

   window.localStorage.setItem("canti",JSON.stringify(sal) )
    window.localStorage.setItem("grey",JSON.stringify(agre))
    window.localStorage.setItem("tur",JSON.stringify(cambiando) )


  
    setdetenerFuncion(true)
  
}


function termino(){
 

    setdetenerFuncion(true)
   
    if(cambiando){
        alert( "X ES EL GANADOR preciona aseptar para comenzar de nuevo " )

      }else{
        alert("0 es el ganador preciona aseptar para comenzar de nuevo " )
      }
   
     setTimeout(Reiniciar,1000)
    
}



function mensaje(){
    setcatidad(0)
  
    alert("HAY UN EMPATE EL EL JUEGO TOCA EL BOTON DE ASEPTAR PARA REINICIAR LA PARTIDA")
    Reiniciar(0)
   
}


let arregloganador= [ [0,4,8] ,[ 0,1,2] ,[ 0,3,6],[1,4,7],[2,5,8],[3,4,5],[2,4,6],[6,7,8]]
 





function prueba(a){

 
if(detenerFuncion){
pruebar(a)
}else{
return
}

}
 



    function pruebar(a){
       
 let agre= [...agregar]
 
 if(cambiando){

    if(agre[a]== "0"){
   return
    }else{
    if(agre[a]== "x"){
     return
        
        }else{
             agre[a]= "x"
             setcambiando(false)
           
           setcatidad(cantidad+1)
  
        }
    }
  
    
    

    }else{
        
        if(agre[a]== "x"){
          return
            }else{
            if(agre[a]== "0"){
               return
                }else{
                     agre[a]= "0"
                     setcatidad(cantidad+1)
                    
                     setcambiando(true)
                }
            }

    }
    
    

let element1= arregloganador[0]
let element2=arregloganador[1]
let element3=arregloganador[2]
let element4=arregloganador[3]
let element5=arregloganador[4]
let element6=arregloganador[5]
let element7=arregloganador[6]
let element8=arregloganador[7]
setagregar(agre)


 if( cambiando){
    let otro = false
    window.localStorage.setItem("tur",JSON.stringify(otro) )
    console.log(otro)
}else{
  let otro = true
  window.localStorage.setItem("tur",JSON.stringify(otro) )
  console.log(otro)
}
window.localStorage.setItem("grey",JSON.stringify(agre))









if(agre[element1[0]] == "x" & agre[element1[1]] == "x" & agre[element1[2]] == "x" ||
    agre[element2[0]] == "x" & agre[element2[1]] == "x" & agre[element2[2]] =="x" ||
     agre[element3[0]] == "x" & agre[element3[1]] == "x" & agre[element3[2]] =="x"||
     agre[element4[0]] == "x" & agre[element4[1]] == "x" & agre[element4[2]] =="x" ||
     agre[element5[0]] == "x" & agre[element5[1]] == "x" & agre[element5[2]] =="x" ||
    agre[element6[0]] == "x" & agre[element6[1]] == "x" & agre[element6[2]] =="x" ||
    agre[element7[0]] == "x" & agre[element7[1]] == "x" & agre[element7[2]] =="x" ||
    agre[element8[0]] == "x" & agre[element8[1]] == "x" & agre[element8[2]] =="x" 
    
    ||
    agre[element1[0]] == "0" & agre[element1[1]] == "0" & agre[element1[2]] == "0" ||
    agre[element2[0]] == "0" & agre[element2[1]] == "0" & agre[element2[2]] =="0"||
      agre[element3[0]] == "0" & agre[element3[1]] == "0" & agre[element3[2]] =="0"||
     agre[element4[0]] == "0" & agre[element4[1]] == "0" & agre[element4[2]] =="0" ||
     agre[element5[0]] == "0" & agre[element5[1]] == "0" & agre[element5[2]] =="0" ||
    agre[element6[0]] == "0" & agre[element6[1]] == "0" & agre[element6[2]] =="0" ||
     agre[element7[0]] == "0" & agre[element7[1]] == "0" & agre[element7[2]] =="0" ||
      agre[element8[0]] == "0" & agre[element8[1]] == "0" & agre[element8[2]] =="0" 
   
 ){

setdetenerFuncion(false)

   setTimeout(termino,1000)


}else{
  if(cantidad>7){
    setTimeout( mensaje ,1000 )
   

  }

}
alert(cantidad)
setagregar(agre)

let idd= 15

let objetos={ nombre:{edad: idd } }
alert(objetos.nombre.edad )

}

 function comer(){

    let suma= 20
    let res= 15
    let sumando =  suma + res 

    return  sumando 

 }
  
console.log(comer())



    return <div>


        <Layout titl= " EL MEJOR JUEGO"  >
       
            {data.map( dat =>{ return  <div key={dat.id} >
   <h3>

<Link  href={`${dat.id}`}>
<a>{dat.id}-{dat.title}</a>
<p>{ dat.body}</p>
</Link>
    
   </h3>
                
                
      

            </div>   }    )}
      
        <input placeholder="escribe"  onChange={function (e){cama(e.target.value)    }}   ></input>
 
 <h2>{escritura}</h2>
<h1 className={styles.titulo}  > EL MEJOR JUEGO DE  X VS 0</h1>
<div className={styles.dip} >
{cambiando? <h2 className={ styles.conturnox}  > TURNO DE X </h2>: <h2 className={styles.sinturnox}  > ESPERANDO POR TURNO ..... </h2>     }
{ cambiando? <h2 className={styles.sinturno0}  > ESPERANDO POR TURNO .....   </h2> : <h2 className={styles.conturno0}  > TURNO DE 0    </h2>   }
</div>
        <table className={styles.marto}  >
            <thead    >
                <tr className={styles.martaa}    >
                    <td className={styles.martaa}   onClick={ function(){ prueba(0) }}  >{agregar[0]} </td>
                    <td  className={styles.martaa}  onClick={ function(){ prueba(1) }}> {agregar[1]}</td>
                    <td className={styles.martaa} onClick={ function(){ prueba(2) }}>   {agregar[2]}                           </td>
                </tr>
                <tr>
                    <td className={styles.martaa} onClick={ function(){ prueba(3) }}  >{agregar[3]} </td>  
                    <td className={styles.martaa}  onClick={ function(){ prueba(4) }}  >{agregar[4]}</td>
                    <td  className={styles.martaa} onClick={ function(){ prueba(5) }}  >{agregar[5]}</td>
                </tr>
                <tr>
                    <td className={styles.martaa} onClick={ function(){ prueba(6) }} >{agregar[6]}</td>
                <td className={styles.martaa}  onClick={ function(){ prueba(7) }}  >{agregar[7]}</td>
                    <td className={styles.martaa} onClick={ function(){ prueba(8) }} >{agregar[8]}</td>
                </tr>

            </thead>
        </table>

<button onClick={function(){
  setcatidad(0)
  Reiniciar(0)
  }} >
 REINICIAR
</button>

<a href="http://localhost:3000/Layout"> volver a pagina incial  </a>


</Layout>

    </div>


} 


      

    
    
    
      




export async function getStaticProps() {
   try{
    let red = await fetch( "https://jsonplaceholder.typicode.com/posts")
    let  data= await red.json()
    
    return {
    props: {
        data:data
    }
    
    }
}catch(error){
console.log(error)
}
    
    
    }

