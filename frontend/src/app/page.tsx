 const  Page = () =>{
  return(
  <div className="flex justify-center items-center h-screen">
    <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
    <a href="/academia/login" className="bg-indigo-500 py-4 px-5 text-center rounded-md font-sans">Academia</a>
    <a href="" className="bg-indigo-500 py-4 px-5 text-center rounded-md font-sans">Aluno</a>
    </div>
  </div>
  )
}

export default Page;