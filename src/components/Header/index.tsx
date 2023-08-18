export function Header() {
  return (
    <>
      <div className="flex w-full max-w-screen-lg m-auto justify-center items-center h-48 ">
        <img className="w-52 h-32" src="/logo.png" />

        <div className="w-full bg-white bg-opacity-20 justify-center items-center inline-flex">
          
            <div className="w-44  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal cursor-pointer tracking-wide">
                Página Inicial
              </div>
            </div>

            <div className="w-48  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal  tracking-wide">
                Nossos Serviços
              </div>
            </div>
            <div className="w-44  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal cursor-pointer tracking-wide">
                Nossos Planos
              </div>
            </div>
            <div className="w-52  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal cursor-pointer tracking-wide">
                Telepsicoterapia
              </div>
            </div>
            <div className="w-44  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal cursor-pointer tracking-wide">
                Fale Conosco
              </div>
            </div>
     
        </div>

        <div className="flex flex-1 py-6 px-10  bg-red-700 hover:bg-red-400 cursor-pointer rounded-full ">
          <span className="flex w-32  text-white text-base font-bold">
            Consulte aqui!
          </span>
        </div>
      </div>
    </>
  );
}
