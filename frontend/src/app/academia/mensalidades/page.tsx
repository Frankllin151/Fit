import Header from "../header";



const  Page = () =>{
    return(
       //ml-64 -> fazer verifição if o sidebar abrir coloca class ml-64
       <>
        <Header/>  
       
    <div className="ml-64">
      
       
      <div className="">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <div className="bg-indigo-500 py-5 px-3 
            rounded-md hover:opacity-70 
            cursor-pointer">Plano mensal</div>
            <div className="bg-indigo-500 py-5 px-3 
            rounded-md hover:opacity-70 
            cursor-pointer">Plano mensal</div>
            <div className="bg-indigo-500 py-5 px-3 
            rounded-md hover:opacity-70 
            cursor-pointer">Plano mensal</div>
        </div>
      </div>
    </div>
    </>
    )
  }
  
  export default Page;