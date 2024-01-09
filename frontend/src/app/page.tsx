import Link from 'next/link';

export default function Home(){
   return (
   <div className="flex justify-center items-center h-screen">
      <div className="gap-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
     
       <Link href="/app/login">
       <div className="bg-indigo-500 py-4 px-5 text-white rounded-md text-center hover:opacity-75">
            Academia
          </div>
       </Link>
       
       
          <a href="" className="bg-indigo-500 py-4 px-5 text-white rounded-md text-center hover:opacity-75">
           Aluno
          </a>
       
      </div>
   </div>
   )
}