import { useState,useEffect} from "react"

import styles from"./Practica.module.css"


export default function Practica  () {

    let [nombre,setnombre]=useState("")
    let [grupoNombre,setgrupoNombre]=useState([])
    

    useEffect(()=>{
    
    let mas= window.localStorage.getItem("key") || "[]"
let menos= mas?JSON.parse(mas): []
let mio = [...menos]
setgrupoNombre(menos)

        },[] )

    


function Agregar(e){
    e.preventDefault()
let id=0
let conteoid= grupoNombre.length + 1
id = conteoid  -1 


setgrupoNombre([...grupoNombre,{ nombre,id:id }  ] )

window.localStorage.setItem("key",JSON.stringify(grupoNombre))

}

 

function Eliminar(a){

 let elimiando= grupoNombre.filter(e => {return   e.id!== a } )   
setgrupoNombre(elimiando )

}






return <div>
    <form onSubmit={ function(e) {  Agregar(e)   }    }   >
<input onChange={ function (e){  setnombre(e.target.value)   }}  ></input>
<button >
agregar
</button>
</form>
<h2 className={styles.titulo}>EL MUNDO DEL HELADO </h2>

{grupoNombre.map( function(e){   return   <div className={styles.cliente}  key={e.id}>

<h2>{e.nombre}  </h2>

<button onClick={function(){ Eliminar(e.id)}}  >
eliminador
</button>
<button>
    editar
</button>
</div>      }            )    }


</div>

    
}