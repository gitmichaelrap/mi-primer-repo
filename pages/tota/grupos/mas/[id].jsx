import { useState } from "react"

export default function Jugadores({date}){

return <div>
    <h2>hola</h2>
</div>

}

export async function getStaticPaths() {
    try{ 
     let paths= [ {params:{id:"1"}},
        {params:{id:"6"}}
     ]
  
  return  {
     paths,
     fallback: false,
  
  }
  }catch(error){
  console.log(error)
  }
  
  
  }
  
  
  
  
  export async function getStaticProps({params}) {
     try{
      let red = await fetch( "http://localhost:3000/tota/grupos/"+ params.id )
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
