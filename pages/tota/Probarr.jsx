export default function Probarr({objet,eliminando,editar}){

return <div>
<h2>amgo wrg erg</h2>
 {objet.map( (a)=>{ return <div key={a.id} >
<h2>{a.nombre}</h2>
<button onClick={  function(){ eliminando(a.id )  }  }   >
    eliminar
</button>
<button onClick={ function( ){editar(a)  }   }  >
    editar
</button>npm run dev
</div>   }    )}
 
    <h2>logica</h2>
</div> 
}