'use client'

import Image from "next/image";
import { Button } from './ui/button';
import { TbArrowUpRight } from "react-icons/tb";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className='container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
       {/* Left Section */}
      <div className='lg:w-1/2 xl:py-14 lg:py-8'>
          <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='tracking-widest uppercase'>
            AEROPORTO INTERNACIONAL DR. ANTONIO AGOSTINHO NETO
          </motion.p>
          <motion.h1 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className='h1'>
          Bem-vindo ao Novo Aeroporto Internacional 
        </motion.h1>
        <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={tagVariants} 
        className='pb-6 text-muted-foreground xl:pb-10'>
            O Aeroporto Internacional Dr. António Agostinho Neto está estrategicamente
             situado na província de Luanda, a 42 km a sudeste do centro da capital,
              na comuna de Bom Jesus, município do Icolo e Bengo. Com uma área total 
              de 1.324 hectares, este Aeroporto representa um marco significativo no 
              desenvolvimento da infraestrutura de transporte aéreo em Angola e África. 
        </motion.p>

        <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={tagVariants}
        > 
         <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg 
         hover:bg-gray-800 hover:ring-2 hover-ring-gray-950 ring-offset-2">
              Imagens <TbArrowUpRight className="w-5 h-5 ml-2" />
         </Button> 
        </motion.div>
      </div>
         {/* Right Image Section */} 
        <div className='w-1/2'>
          <Image 
           src="/image/hall.png"
           width={800}
           height={500}
           alt=""
           className="absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] 
           hidden lg:block" 
          />
        </div>
    </div>
  )
}

export default HeroSection