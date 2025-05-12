import Link from "next/link"
export default function Prueba({data}){

let todos= [ { nombre: "michael" ,id:1},{ nombre: "victor" ,id:5},{ nombre: "wander" ,id:3},{ nombre: "vsior" ,id:2},{ nombre: "isac" ,id:4} ]


  let mas= todos.filter(t=> t.id!== data.id  )
console.log(mas)
return (<div>
       <h2>{mas[0].nombre}</h2>
   < h1>{ data.id} -{data.title} amigo  </h1>
 
   <h3>
     
<Link href={"1"} >

 volver a todos los post
</Link>
</h3>
  
   </div>
)


}


export async function getStaticPaths() {
  try{ 
   let paths= [ {params:{id:"1"}},
      {params:{id:"2"}},
      {params:{id:"3"}},
      {params:{id:"4"}},
      {params:{id:"5"}},

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