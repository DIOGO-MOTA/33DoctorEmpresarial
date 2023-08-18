'use client';
import { AiFillCloseCircle } from "react-icons/ai";

type ModalProps = {
  showModal33Basic: boolean;
  setShowModal33Basic: (showModal33Basic: boolean) => void;
};

export function Modal33Basic({ showModal33Basic, setShowModal33Basic }: ModalProps) {
  return (
    <>
      {/*Modal Aplicação*/}
      <div className="flex flex-col bg-slate-100 justify-center items-center">
        {showModal33Basic ? (
          <>
            <div className="justify-center  flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto  flex h-full my-1 md:max-h-[600px] mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 p-6 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full items-center justify-end space-x-24 border-b border-solid border-slate-200 rounded-t">
                    <button
                      className="text-red-600 hover:text-red-500 transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal33Basic(false)}
                    >
                      <AiFillCloseCircle size={35} />
                    </button>
                  </div>

                  {/*body*/}
                  <div className="relative  py-2 flex  flex-col md:flex-row overflow-y-scroll scrollbar-thin md:overflow-hidden  md:space-x-4 justify-start ">
                    <div className="flex flex-col space-y-4">
                      <span className="text-red-700 self-center text-lg font-bold leading-normal tracking-tight">
                        33BASIC R$ 19,90 mensal
                      </span>
                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                      1. Consultas a partir de R$ 70,00 em diversas especialidades médicas, em clínicas e consultórios da Rede Particular. VOCÊ SÓ PAGA QUANTO FOR UTILIZAR, 

                      </p>

                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                      2. Diversos Especialidades Médicas e Exames de Imagens e Análises com Descontos de até 70%.
                      Oferecemos mais de 3000 exames em mais de 30 laboratórios credenciados na Região de Porto Alegre.


                      </p>

                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                      3. Odontologia, todos os Procedimentos e Exames com Valores de Convênios  Todos com descontos de até 70% em relação aos preços da rede Particular.

                      </p>
                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                      4. Atendimento Personalizado de nossos consultores, através da Central de Agendamentos da 33Doctor - que realiza todo o cuidado e encaminhamento buscando o melhor serviço, menor custo e mais próximo da residência ou local de trabalho, otimizando o tempo e valorizando as pessoas. * Consulte o atendimento em casa ou no trabalho . Voce não precisa ir até o local da coleta, o laboratório vai até o local onde você quiser agendar!


                      </p>
                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                      5. Cartão de associado 33doctor + Benefícios - Sem Anuidade - Livre de Mensalidades com descontos em Marcas e Serviços Parceiros  Farmácias, Lojas e Serviços.


                      </p>
                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                      6. Telemedicina 24 Horas/365 dias - Consultas com Médico Clínico geral. 


                      </p>
                    </div>
                  </div>

                  {/*footer*/}
                  {/* <div className="flex mt-4  flex-col text-lg lg:text-sm justify-center items-center">
                   
                  </div> */}
                </div>
              </div>
            </div>
            <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      {/*Fim Modal Aplicação*/}
    </>
  );
}
