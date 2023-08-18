import { AiFillCloseCircle } from "react-icons/ai";

type ModalProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

export function Modal({ showModal, setShowModal }: ModalProps) {
  return (
    <>
      {/*Modal Aplicação*/}
      <div className="flex flex-col bg-slate-100 justify-center items-center">
        {showModal ? (
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
                      onClick={() => setShowModal(false)}
                    >
                      <AiFillCloseCircle size={35} />
                    </button>
                  </div>

                  {/*body*/}
                  <div className="relative  py-2 flex  flex-col md:flex-row overflow-hidden  md:space-x-4 justify-start ">
                    <div className="flex flex-col space-y-4">
                      <span className="text-red-700 self-center text-lg font-bold leading-normal tracking-tight">
                        33FREE livre de mensalidades
                      </span>
                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                        1. Convênio Medico sem mensalidade para Consultas,
                        Exames, Check-Ups, Odontologia, Cirurgias e Vacinas na
                        Rede Particular Contamos com Serviços Especializados em
                        Clinicas, Laboratórios e Consultórios Particulares com
                        Descontos de até 70% para o seu colaborador. O
                        conveniado 33doctor irá pagar valores reduzidos(valores
                        de convênio) quando for utilizar algum serviço na rede
                        particular. Consultas a partir de R$ 70,00, Exames a
                        partir de R$ 3,80. E poderá contar com o pagamento
                        facilitado em até 10 vezes quando o valor da parcela
                        ultrapassar R$ 50,00.
                      </p>

                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                        2. Atendimento diferenciado ao cliente. Através da
                        Central de Agendamentos da 33Doctor, damos ênfase no
                        atendimento humanizado a pessoa, oferecemos nossa
                        tecnologia, expertise dos nossos parceiros da rede
                        medica e consultores dedicados para buscar o melhor
                        serviço, o melhor orçamento, o local ideal e em seguida,
                        realizamos o agendamento e o encaminhamento que ficar
                        mais acessível ao nossos conveniados. O Seu colaborador
                        não precisa se preocupar com mais nada, ganha tempo,
                        economia e tranquilidade. A 33Doctor organiza tudo para
                        o seu colaborador. Porque o cuidado e o atendimento as
                        pessoas é muito importante para todos nós!
                      </p>

                      <p className="text-stone-800 text-justify text-sm font-normal leading-6 tracking-tight">
                        3. Cartão 33doctor de associado + Beneficios * consulte
                        planos acima de 6 associados com descontos na taxa de
                        adesão; Taxa de Adesão individual por colaborador
                        DEPENDENTES NÂO PAGAM A TAXA DE ADESÃO Valor da taxa de
                        Adesão R$ 33,00, é paga uma única vez para a criação do
                        cadastro de associado para acessar a rede conveniada
                        33doctor e confecção do cartão 33doctor + benefícios. No
                        Pacote 33FREE, O associado fica LIVRE DE MENSALIDADE* .
                        * O beneficiário fica Livre de Mensalidade para sempre!
                        livre de carência e já pode utilizar a Central de
                        Atendimento 33doctor, imediatamente para consultas,
                        exames , cirurgias e odontologia com preços reduzidos e
                        também usufruir dos benefícios com descontos especiais
                        em farmácias, lojas e serviços parceiros.
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
