import style from"./Background.module.css"
import { useState } from "react"
import Head from "next/head"
import Contenido from "./mas/Contenido"
import Link from "next/link"


export  default function Mlb(){
let [selection,setselection]=useState("")
let [activar,setactivar]=useState(true)
let [arreglo,setarreglo]=useState([])
let[ numero,setnumero]=useState( {})

function Selec(e){

alert("SELECIONASTE A " + e + " AL DARLE AL BOTON VERDE QUE DICE DATOS LISTOS  PODRAS VER  LOS ATRIBUTOS Y DEVILIDADES DEL JUGADOR "    )
setselection(e)
setactivar(false)



}

function Prueba(e){
e.preventDefault()


    let id= 0
    let sumar = arreglo.length + 1
    
     id= sumar - 1
    
    let agregar = [{nombre:selection,id },]
    setarreglo(agregar)
    
alert("hola")
  let more = agregar[0].id

setnumero({ id:more})



alert(numero)

}











return <div style={{ backgroundImage: 'url("/dd.jpj.webp")', backgroundSize: 'cover', height: '100vh'     }}>

    <Head>

        <title  >
           dominos del vivero 
        </title>
        </Head>
        <h1 className={style.fondo} > JUGADORES DE DOMINO DEL VIVERO </h1>
           
  
        <form className={style.formulario} >

 <select  onChange={function(e){Selec(e.target.value) }} className={style.select}   >

    <option>
        MICHAEL
    </option>
    <option>
        KENNY
    </option>
    <option>
        ISAAC
    </option>
    <option>
        WANDER
    </option>
    <option>
        VICTOR
    </option>
    <option>
        RONNY
    </option>
    <option>
     SIOR
    </option>
    <option> 
    luis bolibar 
    </option>
    
 </select>
<Link href={ "http://localhost:3000/tota/grupos/" +  `${numero.id} ` }>
nada sigue
</Link>


<a href="http://localhost:3000/tota/grupos/2" > hola todos  </a>


 <input className={style.inputt} value={selection}  ></input>
 {  activar ? <button className={style.button}> SELECIONASTE EL JUGADOR? </button>: <button   onClick={function(e){Prueba(e)}}  className={style.buttonactivado} ><a href="">DATOS DE {selection}
         </a>  </button> }


 </form>
 



 
 

<Contenido arreglo={arreglo}  />

<div className={style.prueba1}>
<button className={style.botonmagico} >
boton magico
</button>
</div>
</div>





}


