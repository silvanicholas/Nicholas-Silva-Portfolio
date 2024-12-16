import { RiReactjsLine } from "react-icons/ri";
import { FaFlask } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return ( 
    <div className="border-black border neutral-800 pb-24"> 
        <h2 className="my-20 text-center text-4xl"> Technologies </h2>
        <div className="flex flex-warp items-center justify-center gap-4">
            < motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFlask className="text-7xl text-black-400" />
            </motion.div>
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiNodejs className="text-7xl text-green-400" />
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsBootstrap className="text-7xl text-purple-400" />
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandFramerMotion className="text-7xl text-pink-400" />
            </motion.div>
        </div>
    </div>
    );
};

export default Technologies;
