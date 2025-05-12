export default function Contenido({arreglo}){



    let arre= [ {nombre:"MICHAEL", contenido:"el mejor de todos los tiempo ",devilidades:"ninguna", id:arreglo.id  },
        {nombre:"francisco", contenido:"jugadorcito ahi de segunda mano",devilidades:"los 1" ,id:arreglo.id  }
    ]




 let filtrado= arre.filter((e)=> {    return  e.nombre== arreglo.nombre     }   )


return <div>
   
         { filtrado.map((e)=> {   return <div key={e.id}>
<h2> {e.nombre}</h2>


</div>    }   )}





</div>

}