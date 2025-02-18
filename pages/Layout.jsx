import Head from "next/head"


export default function Layout({children,titl}){



    return <div>
     <nav>
    <Head>
            <title>
                {titl}
            </title>
</Head>
      
     </nav>
   
     <main>
  
          {children}
   
     </main>
     <footer>
<h2>este es el pie de paginadd </h2>
     </footer>

    </div>

}




