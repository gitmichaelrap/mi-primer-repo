export default function Prueba({data}){

return (
   
   <h1>{ data.id} -{data.title} amigo  </h1>
     
)


}


export async function getStaticPaths() {
  try{ 
let red = await fetch( "https://jsonplaceholder.typicode.com/posts")
let data = await red.json()
   let paths= data.map(({id})=>(  { params:{id:`${id}`}   }        ))
    
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
    let red = await fetch( "https://jsonplaceholder.typicode.com/posts/"+ params.id )
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