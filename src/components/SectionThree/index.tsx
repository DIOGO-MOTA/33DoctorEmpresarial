'use client';

export function SectionThree() {
  return (
    <>
        <main className="flex flex-col max-w-screen-lg m-auto my-4 ">
      <div className="text-center">
        <span className="text-red-700 text-5xl font-bold leading-10">
          Facilidades,{" "}
        </span>
        <span className="text-red-700 text-5xl font-normal leading-10">
          Para Você
        </span>
      </div>
      <img className="w-[71px] h-[62px] self-end" src="/71x62.png" />
      <section className="grid gap-6 p-2 grid-cols-1 lg:grid-cols-4 w-full grid-wrap ">
        <article className="flex flex-col p-4  justify-center items-center gap-px  bg-white rounded-lg hover:scale-110  drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)] ">
          <img
            className="w-[43px] h-[62px]  mb-2"
            src="/rocket.png"
          />
          <span className="text-center text-red-700 text-lg font-bold leading-none tracking-tight">
            Completo
          </span>

          <span className="text-center mt-6 h-40 text-neutral-600 text-base font-normal leading-6 tracking-tight">
            Orientação de saúde e consulta médica resolve   até 90% dos casos   diretamente do aplicativo,  sem sair de casa. Equipe   médica capacitada para   resolver tudo o que você e   sua família precisa.
          </span>
       
          <img className="w-36 h-8 self-start mt-6" src="/estrela.png" />
        </article>

        <article className="flex flex-col p-4  justify-center items-center gap-px  bg-white rounded-lg hover:scale-110  drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)] ">
          <img
            className="w-[23px] h-[62px] mb-2 "
            src="/rapido.png"
          />
          <span className="text-center text-red-700 text-lg font-bold leading-none tracking-tight">
            Rápido
          </span>

          <span className="text-center mt-6 h-40 text-neutral-600 text-base font-normal leading-6 tracking-tight">
          O usuário faz uma consulta em poucos cliques e em menos de 20min já é atendido por um profissional. Economia de tempo na vida das pessoas.
          </span>
       
          <img className="w-36 h-8 self-start mt-6" src="/estrela.png" />
        </article>
        <article className="flex flex-col p-4  justify-center items-center gap-px  bg-white rounded-lg hover:scale-110  drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)] ">
          <img
            className="w-[62px] h-[47px] mb-4"
            src="/valor.png"
          />
          <span className="text-center text-red-700 text-lg font-bold leading-none tracking-tight">
            Valor acessível
          </span>

          <span className="text-center mt-6 h-40 text-neutral-600 text-base font-normal leading-6 tracking-tight">
          Somos o substituto dos planos de saúde caros que te oferecem. Com um custo realmente baixo, você e toda a sua família podem ter orientações e consultas médicas ilimitadas
          </span>
       
          <img className="w-36 h-8 self-start mt-6" src="/estrela.png" />
        </article>
        <article className="flex flex-col p-4  justify-center items-center gap-px  bg-white rounded-lg hover:scale-110  drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)] ">
          <img
            className="w-[31px] h-[62px]  mb-2 "
            src="/facilidade.png"
          />
          <span className="text-center text-red-700 text-lg font-bold leading-none tracking-tight"> 
          Facilidade
          </span>

          <span className="text-center mt-6 h-40 text-neutral-600 text-base font-normal leading-6 tracking-tight">
          Em poucos cliques, você tem acesso à plataforma. Se sua empresa oferece o benefício, basta entrar no sistema com o seu login e senha.
          </span>
       
          <img className="w-36 h-8 self-start mt-6" src="/estrela.png" />
        </article>
      </section>
    </main>
     <img className="w-[134px] h-[118px] z-10" src="/134x118.png" />
    </>

  );
}
