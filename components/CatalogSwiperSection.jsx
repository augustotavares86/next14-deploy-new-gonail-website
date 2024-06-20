"use client";
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";

import { motion } from "framer-motion";

//Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

export default function CatalogSwiperSection() {
    return (
        <div className="py-8 lg:py-28">
           <div className="container grid pb-8 lg:grid-cols-1">
              <div className="text-left">
                <motion.h1 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">RESPONSABILIDADE SOCIAL</motion.h1>
                <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants} 
                    className="pb-6 text-xl font-bold tracking-wider mt-5">PROTÇÃO DO MANATIM AFRICANO</motion.h2>
              </div>

              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="grid grid-cols-2 text-gray-500 gap-x-8">
                  <p>
                    O GONAIL dedica-se à proteção do manatim africano,
                     uma espécie actualmente listada como vulnerável 
                     à extinção pela IUCN. Por meio de diversas iniciativas,
                      buscamos garantir a preservação e o bem-estar desses animais, 
                      contribuindo para a sua conservação e a manutenção do equilíbrio 
                      dos ecossistemas aquáticos.
                  </p>
                  <p>
                      Desde 2018, o GONAIL colabora com a Fundação Kissama e o Ministério
                      do Ambiente na conservação dos elefantes-da-floresta. Esta parceria
                      visa proteger esses majestosos animais, promovendo a pesquisa, 
                      a vigilância e a implementação de medidas eficazes para assegurar 
                      a sua sobrevivência e a protecção dos seus habitats naturais.
                  </p>
              </motion.div>
                <a href="/gallery">
                  <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full
                  shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" /> </Button>
                </a>
           </div> 

              {/* Swiper Section */}
              <Swiper
                sliderPerview={1}
                breakpoints={{
                   640: {
                       slidesPerView: 2,
                       spaceBetween: 20, 
                   },
                   1024: {
                       slidesPerView: 3,
                       spaceBetween: 50,
                   },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                    <Image 
                     src="/image/swiper1.jpg"
                     alt="Swiper"
                     width={500}
                     height={220}
                     className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                     src="/image/swiper2.jpg"
                     alt="Swiper"
                     width={500}
                     height={220}
                     className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                     src="/image/swiper3.jpg"
                     alt="Swiper"
                     width={500}
                     height={220}
                     className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                     src="/image/swiper4.jpg"
                     alt="Swiper"
                     width={500}
                     height={220}
                     className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                     src="/image/swiper5.jpg"
                     alt="Swiper"
                     width={500}
                     height={220}
                     className="w-full"
                    />
                </SwiperSlide>
              </Swiper>

        </div>
    )
}