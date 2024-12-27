import Probarr from "./tota/Probarr"
import { useState,useEffect } from "react"
import Logica from "./Logica"

export default function Red({data}){

    useEffect(function() {

    }, []  )

    


let [agregar,setagregar]=useState("")
let [objet,setobjet]=useState([])
let [cambioBoton,setcambioBoton]=useState( true)
let [ objetoEdicion,setobjetoEdicion]=useState({})






function agregando(e){
e.preventDefault()


let prueba= objet.find( function( element){ return element.nombre == agregar    }   )


if(prueba){
alert("codigo repetido")
}else{ 


if(agregar.length == 0 ){ 
 
alert("llenar campos")

}else{



let id=0 

let sumar = objet.length - 1

 id = sumar + 1 
let agre=  [...objet,{nombre:agregar,id:id }]
setobjet(agre)





}
}


setagregar(" ")

}







 








 

function eliminando (m){
alert(m)

 let filtrando=  objet.filter( a=> a.id!== m   )
setobjet(filtrando)

}

function editar(e){
let ver = e.nombre
setagregar(ver )
setcambioBoton(false)
setobjetoEdicion(e)


}

function edicionFinal(e){

e.preventDefault()

 
 let calma= objet.map( (r)=>{return  r.id == objetoEdicion.id ?  {nombre:agregar ,id:objetoEdicion.id }:r  }       ) 


 setobjet(calma)
 setcambioBoton(true)
   setagregar("")



}


 

    return <div>
        <Logica></Logica>
        {  data.map( (s)=>{ return <div key={s.id}  >
            <h2>{s.body}</h2>
        </div>         }     )    }
 
 
<form onSubmit={function(e){agregando(e)}} >

<input onChange={function(a){setagregar(a.target.value);}   } value={agregar}     ></input>

{ cambioBoton? <button>agregar</button>:<button onClick={ function(e){ edicionFinal(e)    }}   >editando</button>      }
</form>
 


<Probarr objet={objet}  eliminando={eliminando} editar={editar}  />

    </div>    

}
export async function getStaticProps() {
try{
    let red =  await fetch("https://jsonplaceholder.typicode.com/posts ")

  let data = await red.json()
  return {  
    props: {
        data:data
    }
   }
}catch(error){
console.log(error)
}
    
}

