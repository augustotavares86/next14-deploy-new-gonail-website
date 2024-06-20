'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "@/utils/animation";

  const AboutComponent = () => {
      return (
          <div className="container py-12 xl:py-24 h-[auto]">
            <div className="grid lg:grid-cols-2 place-items-center">
              <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              >
                <Image 
                 src="/image/aboutfront.png"
                 width={900}
                 height={500}
                 alt="About"
                 className="max-md:hidden"
                />
              </motion.div>
                <div className="items-center">
                  <motion.h2 
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={titleVariants}
                  className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">
                      INFRAESTRUTURAS DO AEROPORTO
                  </motion.h2>
                  <motion.p 
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={desVariants}
                  className="px-12 tracking-wider uppercase text-gray-400 mt-3">
                    Pistas e Taxiways
                    </motion.p>
                  <motion.p 
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={tagVariants}
                  className="px-12 pb-4 mt-4">
                  O Aeroporto Internacional Dr. António Agostinho Neto foi
                   projectado para ser uma referência em infraestrutura
                    aeroportuária, incorporando diversas instalações modernas 
                    e de alta capacidade.
                  </motion.p>
                  <motion.p 
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={tagVariants}
                  className="px-12 pb-4">
                   Projectado para movimentar cerca de 15 milhões de passageiros
                   por ano, sendo 10 milhões provenientes de voos internacionais
                   E 5 milhões de voos domésticos, o novo Aeroporto é uma peça 
                   Chave para o crescimento económico e a conectividade global 
                   De Angola. Na sua primeira fase, está preparado para manusear 
                   50 mil toneladas de carga anualmente, atendendo às necessidades 
                   Logísticas e comerciais do país e da região.
                  </motion.p>
                </div>
            </div>
          </div>
      )
}

export default AboutComponent