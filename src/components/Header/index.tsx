'use client';
import Link from "next/link";

export function Header() {

  function handlePlanos() {
    window.scroll({
      top: 2600,
      behavior: "smooth",
    });
  }

  function handleServicos() {
    window.scroll({
      top: 1100,
      behavior: "smooth",
    });
  }

  function handlePartsMobile() {
    window.scroll({
      top: 1200,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="flex w-full max-w-screen-lg m-auto justify-center items-center h-48 ">

        <img className="w-52" src="/logo.png" />

      
        <div className="hidden lg:flex w-full bg-white bg-opacity-20 justify-center items-center ">
          
            <div className="w-44  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal cursor-pointer tracking-wide">
                Página Inicial
              </div>
            </div>

            <button onClick={() => handleServicos()} className="w-48  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal  tracking-wide">
                Nossos Serviços
              </div>
            </button>

            

            <button onClick={() => handlePlanos()} className="w-48  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal  tracking-wide">
                Nossos Planos
              </div>
            </button>
            {/* <div className="w-44  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal cursor-pointer tracking-wide">
                Nossos Planos
              </div>
            </div> */}
            {/* <div className="w-52  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal cursor-pointer tracking-wide">
                Telepsicoterapia
              </div>
            </div> */}
            <Link href="https://api.whatsapp.com/send?phone=556239338700&text=Ol%C3%A1,%20estou%20vindo%20da%20p%C3%A1gina%2033doctor!" target="_blank">
            <div className="w-44  h-10 px-6 py-2.5 cursor-pointer hover:border-t hover:border-b  hover:border-stone-800 flex">
              <div className="text-black text-base font-normal cursor-pointer tracking-wide">
                Fale Conosco
              </div>
            </div>
            </Link>
     
        </div>
       
        <Link href="https://acesso.33doctortelemedicina.com.br/login" target="_blank">
        <div className="hidden lg:flex flex-1 py-6 px-10  bg-red-700 hover:bg-red-400 cursor-pointer rounded-full ">
          <span className="flex w-32  text-white text-base font-bold">
            Consulte aqui!
          </span>
        </div>
        </Link>
      </div>
    </>
  );
}
