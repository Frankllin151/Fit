"use client"
import React, { useState } from "react";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // Lógica para enviar o email para redefinição de senha
    console.log(`Email para redefinição de senha: ${email}`);
    // Adicione a lógica necessária para enviar o email
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl text-black font-bold mb-4 font-sans">Redefinir Senha</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            placeholder="Digite seu Email"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="text-black w-full py-2 px-3 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
          className="bg-indigo-500 py-4 px-5 text-center rounded-md font-sans text-white mb-4"
          onClick={handleResetPassword}
        >
         Recupera Senha
        </button>
        <div className="flex flex-col">
          <p className="text-indigo-500 text-sm font-bold">Acesse sua caixa de Email</p>
          <a href="/aluno/login" className="text-indigo-500 text-sm cursor-pointer">
            Voltar para o Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
