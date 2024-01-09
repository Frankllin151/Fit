"use client"
import React, {useState} from "react";

const Page = () => {


  const [showPassword, setShowPassword] = useState(false); 
  const [password, setPassword] = useState('');


  const handleTogglePassword = () =>{
  console.log(setShowPassword);
  
   
  }
  



  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
          placeholder="Digite seu Email"
            type="email"
            id="email"
            className="text-black w-full py-2 px-3 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Senha
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua Senha"
            className="w-full text-black  py-2 px-3 border rounded-md focus:outline-none focus:border-indigo-500"
          />
          <input type="checkbox"
          id="showPassword"
          onChange={handleTogglePassword} 
          className=""
          />
        </div>
        <button className=" bg-indigo-500 py-4 px-5 text-center rounded-md font-sans text-white mb-4">
          Entrar
        </button>
        
       <div className="flex flex-col">
       <a href="" className="text-indigo-500 text-sm cursor-pointer">Esqueceu a senha?</a> 
      <a href="" className="text-indigo-500 text-sm cursor-pointer">Cadastre</a>
       </div>
      </div>
    </div>
  );
};

export default Page;
