import Link from "next/link";

export function SectionOne() {
  return (
    <>
      <section className="flex flex-col lg:flex-row w-full  max-w-screen-lg m-auto justify-start items-center lg:space-x-10 ">
        <article className="flex lg:-mt-64 flex-col items-center lg:items-start text-center lg:text-start space-y-4">
          <img className="w-9 h-8 self-end" src="/37x31.png" />
          <div>
            <span className="text-red-700 text-5xl font-normal leading-10">
              <strong>Saúde </strong>mais acessível para todos.
            </span>
          </div>
          <span className="text-stone-800 text-lg font-normal leading-2">
            O intuito da 33Doctor é facilitar o acesso a saúde através <br />
            do agendamento de consultas, exames e cirurgias por valores
            reduzidos.
          </span>
          <div className="w-64 h-14 px-16 py-5 justify-center items-center inline-flex">
            <div className="pr-px justify-center items-start flex">
              <span className="text-center text-white text-base font-bold">
                Adquira agora!
              </span>
            </div>
          </div>
          <Link
            href="https://acesso.33doctortelemedicina.com.br/login"
            target="_blank"
          >
            <div className="flex max-w-[220px] py-4 px-6 mb-10 lg:mb-0 justify-center  bg-red-700 hover:bg-red-400 cursor-pointer rounded-full ">
              <span className="flex w-32  text-white text-base font-bold">
                Consulte aqui!
              </span>
            </div>
          </Link>
        </article>
        <img className="w-[729px] h-[729]" src="/image1.png" />
        {/*   <div className="w-64 h-72 bg-white rounded-lg shadow" /> */}
      </section>
      <img className="w-16 h-14 z-10" src="/62x53.png" />
    </>
  );
}
