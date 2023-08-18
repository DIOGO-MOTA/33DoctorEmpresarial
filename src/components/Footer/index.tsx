export function Footer() {
  return (
    <main className="flex flex-col w-full bg-white mt-20  ">
      <div className="flex flex-col flex-1 max-w-screen-lg m-auto py-4 space-y-8 border-b border-stone-300 justify-between items-center space-x-4 ">
        <span className="text-center text-red-700 text-base font-bold leading-tight">
          33Doctor | © 2023, Todos os direitos reservados
        </span>

        <span className="text-center text-red-700 text-xs font-bold leading-tight">
          33Doctor Telemedicina | CNPJ: 38.210.193/0001-88 < br /> < br /> A Empresa 33Doctor
          Telemedicina não é plano de saúde,  não garante e não se responsabiliza
          pelos serviços oferecidos e pelo pagamento das despesas,< br />  nem assegura
          desconto em todos os serviços obrigatoriamente garantidos por plano de
          saúde
        </span>
      </div>
    </main>
  );
}
