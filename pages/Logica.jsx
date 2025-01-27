export default function Logica(){

function jugo(){
  
setTimeout(function(){alert("dentro y fuer ")},2000 )

amiguitos()

}



function amiguitos(){ 
alert("fuera")

}




    return <div>
        <h2>camianando</h2>
        <button onClick={ function(){jugo() }}> 
            prueba
        </button>
    </div>
}