"use client"

import {useState} from "react";
import Header from "../header";
import { AlunoTreinoDado, UserAluno } from "../component/UserAluno";


const  Page = () =>{
    const [isSidebarActive, setSidebarActive] = useState(false);
    const [isOpen , setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSidebarToggle = () => {
      setSidebarActive(!isSidebarActive);
    };

    const toggleDropdown = () =>{
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option:any) => {
        setSelectedOption(option);
        setIsOpen(false);
      };
      return(
      <div className="">
      <Header isSidebarActive={isSidebarActive} handleSidebarToggle={handleSidebarToggle}/>
        <div className={isSidebarActive ? 'ml-64' : ''}>
        <div className="px-10 flex justify-between items-center">
            
        <div className="bg-indigo-500 rounded-md px-4 py-2">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="w-full  px-2  outline-none bg-indigo-500 text-white "
      />
    </div>
           
            <div className="relative inline-block">
      <button
        className="bg-indigo-500 p-2 rounded-md hover:opacity-70 cursor-pointer font-sans font-semibold  "
        onClick={toggleDropdown}
      >
       {selectedOption ? selectedOption : "Todos os Treinos"}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-40 bg-indigo-500   rounded-md ">
          <a
           onClick={() => handleOptionClick('Todos os Treinos')}
            href="#"
            className="block py-2 px-4 font-sans font-semibold hover:opacity-70 cursor-pointer"
          >
           Todos os Treinos
          </a>
          <a
           onClick={() => handleOptionClick(' Treino Atuais')}
            href="#"
            className="block py-2 px-4 font-sans font-semibold hover:opacity-70 cursor-pointer"
          >
          Treino Atuais
          </a>
          <a
           onClick={() => handleOptionClick('Treino Atrasado')}
            href="#"
            className="block py-2 px-4 font-sans font-semibold hover:opacity-70 cursor-pointer"
          >
          Treino Atrasado
          </a>
          <a
            href="#"
            onClick={() => handleOptionClick('Novos Alunos')}
            className="block py-2 px-4 font-sans font-semibold hover:opacity-70 cursor-pointer"
          >
          Novos Alunos
          </a>
        </div>
      )}
    </div>







      </div>
      <div className="px-5">
        <AlunoTreinoDado/>
      </div>
        </div>
      </div>




      )
    }
    
    export default Page;