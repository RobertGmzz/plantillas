import { motion } from "motion/react"

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: .2,
    },
  },
}

const navigationVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: .5 }},
}

const imgVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1,
      transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }
  }
}

export function Hero() {
  
  return (
    <motion.div 
    className="flex flex-col items-center w-full h-screen text-[#f7f5ec]"
    variants={heroContainer}
    initial="hidden"
    animate="visible"
    >
      <motion.header 
      className="flex justify-between items-start pt-2 px-5 w-full h-auto barlow-condensed-regular"
      variants={navigationVariants}
      >
        <img src="./images/logo.webp" alt="logotype" className="w-30 h-auto"/>
        <nav>
          <ul className="flex justify-between gap-12 text-2xl">
            <li className="londrina-outline-regular"><a href="#menu">MENU</a></li>
            <li className="londrina-outline-regular"><a href="#">ENCONTRANOS</a></li>
            <li className="londrina-outline-regular"><a href="#">CONTACTO</a></li>
            <button className="cursor-pointer bg-[#f7f5ec] text-red-800 px-4 rounded-2xl">PEDIR AHORA</button>
          </ul>
        </nav>
      </motion.header>
      
      <motion.h1
      className="flex flex-wrap gap-6 justify-center pt-10 w-220 pincoya-black text-center text-[#F9F6EE] leading-20"
      variants={heroContainer}
      initial="hidden"
      animate="visible"
      >
        <motion.span variants={navigationVariants} className="text-[150px]">LOS </motion.span>
        <motion.span variants={navigationVariants} className="text-[150px]">CLASICOS</motion.span>
        <motion.span variants={navigationVariants} className="text-[120px]">QUE</motion.span>
        <motion.span variants={navigationVariants} className="text-[120px]">NO</motion.span>
        <motion.span variants={navigationVariants} className="text-[120px]">FALLAN</motion.span>
      </motion.h1>

      <div className="absolute top-75 flex justify-center items-center w-full h-auto">
        <motion.img
        className="z-20 size-80 object-contain will-change-transform"
        src="./images/hambur-02.png"
        alt="hamburguer photo"
        variants={imgVariants} />
        <div className="absolute flex justify-center items-center gap-25 w-full overflow-hidden">
          <motion.img
          className="z-10 size-65 object-contain will-change-transform"
          src="./images/hambur-01.png"
          alt="hamburguer photo"
          variants={imgVariants} />
          <motion.img
          className="z-10 size-65 object-contain will-change-transform"
          src="./images/hambur-03.png"
          alt="hamburguer photo"
          variants={imgVariants} />
          <motion.div className="absolute flex justify-center gap-130 w-full" variants={imgVariants}>
            <motion.img src="./images/right-moustache.png" alt="moustache image" className="size-70 -rotate-5"/>
            <motion.img src="./images/left-moustache.png" alt="moustache image" className="size-70 rotate-5"/>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}