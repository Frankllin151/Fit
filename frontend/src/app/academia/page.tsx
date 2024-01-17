"use client"
import { AlunosHomeAcademia } from "./component/UserAluno";
import Header from "./header";
import {useState} from "react";


const  Page = () =>{
  const [isSidebarActive, setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive(!isSidebarActive);
  };
    return(
    <div className="">
    <Header isSidebarActive={isSidebarActive} handleSidebarToggle={handleSidebarToggle}/>
      <div className={isSidebarActive ? 'ml-64' : ''}>
      <div className="px-10 py-5">
      <AlunosHomeAcademia/>
    </div>
      </div>
    </div>
    )
  }
  
  export default Page;