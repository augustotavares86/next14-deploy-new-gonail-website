import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center
        lg:py-64'>Who are we?</h1>
      </div>

      <div className='container'>
        <div className='pt-4'>
          <h2 className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>We have great ideas & Interior Design</h2>
          <p className='text-2xl text-center font-medium pb-10 mt-5'>Somos o GONAIL (Gabinete Operacional para o Novo Aeroporto Internacional de Luanda) 
            a entidade responsável por coordenar e gerenciar todas as actividades relaccionadas à 
            construção do aeroporto. É nossa missão incluir uma variedade de tarefas, como planejamento 
            de projectos, supervisão da construção, garantia de conformidade com regulamentos e normas de 
            segurança, coordenação de equipes de trabalho, gestão de orçamento e recursos, e comunicação 
            com todas as partes interessadas, incluindo autoridades governamentais, empresas de construção, e comunidade local. 
          </p>
        </div>

      <div className='items-center lg:flex gap-x-8'>
        {/*Left Image Section */}
        <div className="w-full">
          <Image src="/image/gallery1123.jpg" width={700} height={700} />
        </div>

        {/*Right Content Section */}
        <div>
          <p className='pb-8 tracking-wide mt-6'>
            O Gabinete Operacional para o Novo Aeroporto Internacional de Luanda (GONAIL),
            é uma empresa que está sob a tutela do Ministério dos Transportes, cuja sede social
            está em Luanda, na Estrada Nacional- E.N 230/Km 42 Aeroporto Internacional Dr. António Agostinho
            Neto, em conformidade com os poderes delegados pelo Presidente da República  
            nos termos do  artigo nº 137º, da Constituição da República de Angola, conjugado 
            com o nº 3 do Decreto presidencial n.º 233/18, de 5 de Outubro e de acordo com a alínea b) 
            do nº 4 do despacho Presidencial nº 289/17, de 13 de Outubro. <br /><br />
            Temos como principais serviços o estabelecimento do perímetro pertencente 
            Ao aeroporto e asseguramento do processo de formalização da venda dos terrenos, 
            activos e demais bens públicos que se revelem indispensáveis à exploração eficiente 
            E lucrativa da infra-estrutura, definição dos serviços a prestar e gerenciamento de 
            “duty frees”, assim como do processo de recrutamento e treino de pessoal. 
            É também nossa responsabilidade a realização do ‘road show’ internacional, 
            definir e implementar o plano diretório da nova cidade aeroportuária, propor 
            medidas de regulamentação e fiscalização dos serviços aeroportuários, os produtos 
            E processos aeronáuticos, a formação e o treino de pessoal especializado, os serviços 
            auxiliares, a segurança da aviação civil, a facilitação do transporte aéreo, 
            A habilitação de tripulantes, as emissões de poluentes e o ruído aeronáutico, 
            Os sistemas de reservas, a movimentação de passageiros e carga e as demais 
            actividades de aviação civil. <br /><br />
            <span className='text-xl font-extrabold tracking-tight'>
                The backpiperARCH, we share a belief in the transformational power of poeple united in a 
                common purpose. 
            </span>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page
