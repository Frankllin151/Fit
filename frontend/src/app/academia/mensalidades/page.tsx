"use client"
import Header from "../header";
import {useState} from "react";



const  Page = () =>{
  const [isSidebarActive, setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive(!isSidebarActive);
  };

    return(
       //ml-64 -> fazer verifição if o sidebar abrir coloca class ml-64
       <>
        <Header isSidebarActive={isSidebarActive} handleSidebarToggle={handleSidebarToggle}/>  
      
    <div  className={isSidebarActive ? 'ml-64' : ''}>
      
       
    <div className="flex justify-center">
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {/* Plano 3 meses */}
        <div className="bg-indigo-500 py-5 px-3 
            rounded-md hover:opacity-70 
            cursor-pointer">
            <p>R$150 à vista</p>
            <p>R$53,40 no cartão</p>
        </div>

        {/* Plano 6 meses */}
        <div className="bg-indigo-500 py-5 px-3 
            rounded-md hover:opacity-70 
            cursor-pointer">
            <p>R$300 à vista</p>
            <p>R$106,80 no cartão</p>
        </div>

        {/* Plano anual */}
        <div className="bg-indigo-500 py-5 px-3 
            rounded-md hover:opacity-70 
            cursor-pointer">
            <p>R$600 à vista</p>
            <p>R$213,60 no cartão</p>
        </div>
    </div>
</div>

    </div>
    </>
    )
  }
  
  export default Page;