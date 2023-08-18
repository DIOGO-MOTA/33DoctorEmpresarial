import { AiFillCloseCircle } from "react-icons/ai";

type ModalProps = {
  showModal33Essencial: boolean;
  setShowModal33Essencial: (showModal33Essencial: boolean) => void;
};

export function Modal33Essencial({
  showModal33Essencial,
  setShowModal33Essencial,
}: ModalProps) {
  return (
    <>
      {/*Modal Aplicação*/}
      <div className="flex flex-col bg-slate-100 justify-center items-center">
        {showModal33Essencial ? (
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
                      onClick={() => setShowModal33Essencial(false)}
                    >
                      <AiFillCloseCircle size={35} />
                    </button>
                  </div>

                  {/*body*/}
                  <div className="relative  py-2 flex  flex-col md:flex-row overflow-hidden  md:space-x-4 justify-start ">
                    <div className="flex flex-col space-y-4">
                      <span className="text-red-700 self-center text-lg text-center font-bold leading-normal tracking-tight">
                        33ESSENCIAL CONVÊNIO + TELEMEDICINA - Especialidades A
                        Partir de 49,90 Mensais
                      </span>
                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                        1. Convênio 33 Doctor - CONSULTAS a partir de R$ 70,00
                        + EXAMES com Descontos de até 60%, CIRURGIAS e VACINAS
                        com Valores reduzidos  NA REDE PARTICULAR.
                      </p>

                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                        2. Atendimento Através da Central de Agendamentos da
                        33Doctor
                      </p>

                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                        3. Cartão de Associado + Beneficios 33doctor
                      </p>
                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                        4. Telemedicina 24 Horas - Medico Clinico geral + XX
                        Especialidades
                      </p>
                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                        5. Psicólogo OnLine uma vez por semana,
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
