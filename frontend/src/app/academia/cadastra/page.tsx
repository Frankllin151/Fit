"use client"

import axios from 'axios';
import React, { useState } from "react";

const RegistrationPage = () => {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  //

  const sendDataToBackEnd = async () => {
    try {
      const response = await fetch('http://localhost:8560/api/academia/cadastra', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          data: {
            name: name,
            email: email,
            password: password,
          }
        })
      });
  
      const result = await response.json();
      console.log(result.message); // Mensagem do backend
    } catch (error) {
      console.error("Erro ao enviar dados para o backend", error);
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl text-black font-bold mb-4 font-sans">Cadastro Academia</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Nome
          </label>
          <input
            placeholder="Digite seu Nome"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-black w-full py-2 px-3 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            placeholder="Digite seu Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <input
            type="checkbox"
            id="showPassword"
            onChange={handleTogglePassword}
          />
        </div>
        <button
          onClick={sendDataToBackEnd}
          className="bg-indigo-500 py-4 px-5 text-center rounded-md font-sans text-white mb-4"
        >
          Cadastrar
        </button>
        <div className="flex flex-col">
          <a href="/academia/login" className="text-indigo-500 text-sm cursor-pointer">
            Já tem uma conta? Faça login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
