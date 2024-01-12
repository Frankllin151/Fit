export const UserAluno = () =>{
   return (
    <div className=" m-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="  bg-indigo-500 py-5 px-3 rounded-md hover:opacity-70 cursor-pointer">
           <div className="flex">
           <img src="https://e7.pngegg.com/pngimages/7/618/png-clipart-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-thumbnail.png" className=" w-8 h-8 rounded-full" alt="" />
           <p className="pl-2 font-sans font-bold ">João Teste</p>
           </div>
           <p className=" pl-2 pt-2 font-sans font-medium">Plano mensal</p>
        </div>
        <div className="  bg-indigo-500 py-5 px-3 rounded-md hover:opacity-70 cursor-pointer">
           <div className="flex">
           <img src="https://e7.pngegg.com/pngimages/7/618/png-clipart-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-thumbnail.png" className=" w-8 h-8 rounded-full" alt="" />
           <p className="pl-2 font-sans font-bold ">João Teste</p>
           </div>
           <p className=" pl-2 pt-2 font-sans font-medium">Plano mensal</p>
        </div>
        <div className="  bg-red-500 py-5 px-3 rounded-md hover:opacity-70 cursor-pointer">
           <div className="flex">
           <img src="https://e7.pngegg.com/pngimages/7/618/png-clipart-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-thumbnail.png" className=" w-8 h-8 rounded-full" alt="" />
           <p className="pl-2 font-sans font-bold ">João Teste</p>
           </div>
           <p className=" pl-2 pt-2 font-sans font-medium">Atrasado</p>
        </div>
            
        </div>
    </div>
   )
}