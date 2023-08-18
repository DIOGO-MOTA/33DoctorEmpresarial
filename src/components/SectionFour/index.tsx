"use client";

import { useState } from "react";
import { Modal } from "../Modal";
import { Modal33Basic } from "../Modal33Basic";
import { Modal33Essencial } from "../Modal33Essencial";
import Link from "next/link";

export function SectionFour() {
  const [showModal, setShowModal] = useState(false);
  const [showModal33Basic, setShowModal33Basic] = useState(false);
  const [showModal33Essencial, setShowModal33Essencial] = useState(false);

  return (
    <main className="flex flex-col max-w-screen-lg m-auto my-4 ">
      <div className="flex w-full   justify-center ">
        <span className="text-red-700 text-4xl text-center font-normal leading-10">
          Desenvolvemos 3 pacotes de convênios para serviços médicos <br />{" "}
          <strong>EXCLUSIVOS PARA A SUA EMPRESA </strong>
        </span>
      </div>
      <img className="w-[71px] h-[62px] self-end" src="/71x62.png" />
      <section className="grid gap-6 p-2 grid-cols-1  lg:grid-cols-2  w-full grid-wrap ">
        <article className="flex flex-col space-y-16 flex-1">
          <div className="flex space-x-4">
            <div className="flex w-16 h-16 bg-red-700 rounded-full justify-center items-center">
              <samp className=" text-white text-2xl font-bold leading-normal tracking-tight">
                1
              </samp>
            </div>
            <div className="flex flex-col space-y-6">
              <span className="text-red-700 text-lg font-normal leading-normal tracking-tight">
                33 FREE - Convênio Livre de mensalidade
              </span>
              <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                Serviços Médicos, Odontológicos, Consultas, <br /> Exames e
                Cirurgias com valores reduzidos na rede particular
              </span>
              <button
                onClick={() => setShowModal(true)}
                className="p-2 w-40 hover:bg-red-500 border hover:text-white text-red-700  border-red-500 rounded-full justify-center items-start flex"
              >
                <span className="text-center  text-base font-bold">
                  Saíba Mais
                </span>
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex w-16 h-16 bg-red-700 rounded-full justify-center items-center">
              <samp className=" text-white text-2xl font-bold leading-normal tracking-tight">
                2
              </samp>
            </div>
            <div className="flex flex-col space-y-6">
              <span className="text-red-700 text-lg font-normal leading-normal tracking-tight">
                33 Basic
              </span>
              <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                TELEMEDICINA 24 Horas. A partir de 19,90 mensal.
              </span>

              <button
                onClick={() => setShowModal33Basic(true)}
                className="p-2 w-40 hover:bg-red-500 border hover:text-white text-red-700  border-red-500 rounded-full justify-center items-start flex"
              >
                <span className="text-center  text-base font-bold">
                  Saíba Mais
                </span>
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex w-16 h-16 bg-red-700 rounded-full justify-center items-center">
              <samp className=" text-white text-2xl font-bold leading-normal tracking-tight">
                3
              </samp>
            </div>
            <div className="flex flex-col space-y-6">
              <span className="text-red-700 text-lg font-normal leading-normal tracking-tight">
                33 ESSENCIAL
              </span>
              <span className="text-stone-800 text-sm font-normal leading-none tracking-tight">
                TELEMEDICINA 24 Horas + PSICOLOGO on Line
              </span>

              <button
                onClick={() => setShowModal33Essencial(true)}
                className="p-2 w-40 hover:bg-red-500 border hover:text-white text-red-700  border-red-500 rounded-full justify-center items-start flex"
              >
                <span className="text-center  text-base font-bold">
                  Saíba Mais
                </span>
              </button>
            </div>
          </div>
        </article>
        <div className="overflow-hidden">
          <video autoPlay loop muted>
            <source src="/telemedicina.mp4 " type="video/mp4" />
          </video>

            
            <div className=" flex w-full mt-20 justify-center items-center">
            <Link href="https://acesso.33doctortelemedicina.com.br/login" target="_blank">
              <button className="p-4   hover:bg-red-500 border hover:text-white text-red-700  border-red-500 rounded-full justify-center items-start flex">
                <span className="text-center  text-base font-bold">
                 Acessar 33Doctor Telemedicina
                </span>
              </button>
            </Link>
            </div>
         
        </div>

      </section>

      <Modal setShowModal={setShowModal} showModal={showModal} />

      <Modal33Basic
        setShowModal33Basic={setShowModal33Basic}
        showModal33Basic={showModal33Basic}
      />

      <Modal33Essencial
        setShowModal33Essencial={setShowModal33Essencial}
        showModal33Essencial={showModal33Essencial}
      />
    </main>
  );
}
