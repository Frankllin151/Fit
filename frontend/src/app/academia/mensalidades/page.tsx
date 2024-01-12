"use client"
import { UserAluno } from "../component/UserAluno";
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
      
       
    <div className="px-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Plano 3 meses */}
        <div className=" bg-indigo-500 py-5 px-3 rounded-md hover:opacity-70 cursor-pointer"
        onClick={(e) => alert("consulta o banco de dado")}
        >
            <p className="font-sans font-semibold">R$150 à vista</p>
            <p className="text-sm">R$53,40 no cartão</p>
        </div>

        {/* Plano 6 meses */}
        <div className="bg-indigo-500 py-5 px-3 rounded-md hover:opacity-70 cursor-pointer">
            <p className=" font-sans font-semibold">R$300 à vista</p>
            <p className="text-sm">R$106,80 no cartão</p>
        </div>

        {/* Plano anual */}
        <div className="bg-indigo-500 py-5 px-3 rounded-md hover:opacity-70 cursor-pointer">
            <p className="font-sans font-semibold">R$600 à vista</p>
            <p className="text-sm">R$213,60 no cartão</p>
        </div>
    </div>
</div>

        <UserAluno/>
    </div>

    </>
    )
  }
  
  export default Page;