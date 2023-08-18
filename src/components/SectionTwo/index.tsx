"use client";

import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../animation.json";

import { BsCheckLg } from 'react-icons/bs';

export function SectionTwo() {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    
  };

  return (
    <>
      <main className="flex flex-col max-w-screen-lg m-auto ">
        <section className="flex w-full space-x-4 ">
          <Lottie
            options={defaultOptions}
            height={658}
            width={775}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
         
          />

          <article className="flex flex-col">
            <span className="text-red-700 block text-4xl font-bold leading-10">
              Vantagens de ser clíente 33Doctor
            </span>
          
            <img className="w-[71px] h-[62px] self-end" src="/71x62.png" />

            <section className="flex flex-col space-y-4 mt-10">
              <div className="flex  items-center space-x-4">
              <BsCheckLg className="text-red-700" size='30' />
                <div className="flex flex-col space-y-2">
                  <span className=" text-red-700 text-lg font-bold leading-none tracking-tight">
                  Convênio médico sem mensalidade
                  </span>
                  <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                  O Usuário só paga quando for utilizar algum serviço.
                  </span>
                </div>
              </div>

              <div className="flex  items-center space-x-4">
                <BsCheckLg className="text-red-700" size='30' />
                <div className="flex flex-col space-y-2">
                  <span className=" text-red-700 text-lg font-bold leading-none tracking-tight">
                  Foco em qualidade de serviços e atendimento 
                  </span>
                  <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                  Reconhecidos com ganhos expressivos em Economia de gastos com serviços médicos.
                  </span>
                </div>
              </div>

              <div className="flex  items-center space-x-4">
                <BsCheckLg className="text-red-700" size='30' />
                <div className="flex flex-col space-y-2">
                  <span className=" text-red-700 text-lg font-bold leading-none tracking-tight">
                  Ampla rede de serviços médicos
                  </span>
                  <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                  clínicas e laboratórios e serviços odontológicos de Qualidade reconhecida. Rede Particular.
                  </span>
                </div>
              </div>

              <div className="flex  items-center space-x-4">
                <BsCheckLg className="text-red-700" size='30' />
                <div className="flex flex-col space-y-2">
                  <span className=" text-red-700 text-lg font-bold leading-none tracking-tight">
                  Centralização do Atendimento via telefone, whatsapp e na central
                  </span>
                  <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                  Mais comodidade para os colaboradores que podem agendar sem sair de casa ou do trabalho
                  </span>
                </div>
              </div>

              <div className="flex  items-center space-x-4">
                <BsCheckLg className="text-red-700" size='30' />
                <div className="flex flex-col space-y-2">
                  <span className=" text-red-700 text-lg font-bold leading-none tracking-tight">
                  Pacotes com telemedicina e tele psicologia
                  </span>
                  <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                  Com baixo custo e de boa qualidade para essa modalidade.
                  </span>
                </div>
              </div>

              <div className="flex  items-center space-x-4">
                <BsCheckLg className="text-red-700" size='30' />
                <div className="flex flex-col space-y-2">
                  <span className=" text-red-700 text-lg font-bold leading-none tracking-tight">
                  Fornecedores da area de exames de laboratório
                  </span>
                  <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                  Com coleta no domicilio ou na empresa para facilitar a vida dos colaboradores.
                  </span>
                </div>
              </div>

              <div className="flex  items-center space-x-4">
                <BsCheckLg className="text-red-700" size='30' />
                <div className="flex flex-col space-y-2">
                  <span className=" text-red-700 text-lg font-bold leading-none tracking-tight">
                  Atendimento e cobrança sob demanda. 
                  </span>
                  <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                   A empresa pode escolher o pacote que se ajustar melhor as suas necessidades de seus colaboradores.
                  </span>
                </div>
              </div>

              <div className="flex  items-center space-x-4">
                <BsCheckLg className="text-red-700" size='30' />
                <div className="flex flex-col space-y-2">
                  <span className=" text-red-700 text-lg font-bold leading-none tracking-tight">
                  Planos inteligentes com foco em prevenção e proteção da vida do usuário
                  </span>
                  <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                  Incluindo montagem de checkups com a extensão com seguro de vida. Opcional.
                  </span>
                </div>
              </div>
            </section>
          </article>
        </section>
        <img className="w-[312px] h-[229px] -ml-[25rem]" src="/512x429.png" />
      </main>
    </>
  );
}
