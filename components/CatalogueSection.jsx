import Image from 'next/image';
import { TbArrowNarrowRight } from 'react-icons/tb';

export default function CatalogueSection() {
    const items = [
        {
           id: "01",
           catagory: "Regulação e Fiscalização",
           title: "Regulação e Fiscalização",
           image: "/image/badroom.jpg",
           description: "o	Propor medidas para regular e fiscalizar os serviços aeroportuários, os processos aeronáuticos, a formação de pessoal, a segurança da aviação civil e outros aspectos críticos da operação aeroportuária.",
        },
        {
          id: "02",
          catagory: "Terminal De Cargas",
          title: "Terminal De Cargas",
          image: "/image/kitchen1.jpg",
          description: "do Terminal de Cargas com a recepção dos primeiros voos cargueiros puros; (2) Activação do Terminal de Passageiros com o início das operações dos voos domésticos e (3) Início das operações dos voos internacionais.",
       },
       {
        id: "03",
        catagory: "Terminal De Passageiros",
        title: "Terminal De Passageiros",
        image: "/image/drowing.jpg",
        description: "O terminal de passageiros do Aeroporto Internacional Dr. António Agostinho Neto é projectado para oferecer uma experiência de viagem eficiente e confortável, com instalações modernas e bem equipadas..",
     },{
      id: "04",
      catagory: "Gestão de Terrenos e Bens",
      title: "Gestão de terrenos e Bens",
      image: "/image/living.jpg",
      description: "o Estabelecer o perímetro do aeroporto e assegurar a formalização da venda de terrenos e activos essenciais para a operação eficiente e lucrativa.",
   },
 ]
   
   return (
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x">
            {
                items.map((item) => (
                    <div key={item.id}
                    className="relative overflow-hidden group"
                    >
                        <div>
                            <Image 
                             src={item.image}
                             width={380}
                             height={100}
                             alt=""
                             className="w-full"
                            />
                        </div>

                        <div className="absolute top-0 bg-white text-black bg-opacity-60
                        backdrop-blur m-12">
                          <div className="flex justify-between pb-4">
                            <p className="text-sm">{item.catagory}</p>
                            <span className="text-sm">{item.id}</span>
                          </div>
                            <a className="block text-xl font-semibold" href="">{item.title}</a>
                            <p className="py-4">{item.description}</p>
                            <a className="inline-flex items-center font-medium" href="">See Details 
                            <TbArrowNarrowRight className="ml-2" /></a>
                        </div>
                        <div className="inset-0 bg-primary flex-col items-center justify-end md:flex
                        md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2
                        group-hover:translate-y-full md:border-b-0 hidden">
                            <p className="tracking-wider -rotate-90">{item.catagory}</p>
                            <span>{item.id}</span>
                        </div>
                    </div>
                ))
            }
        </div>
   )
}

