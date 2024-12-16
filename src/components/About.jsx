import aboutImg from "../assets/about.jpg"
import { motion } from "motion/react"

const About = () => {
    return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl"> About 
            <span className="text-neutral-500"> Me </span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{ opacity: 1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-xl w-full md:w-[500px] lg:w-[600px]" src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6"> Hello! I am a highly motivated and dedicated computer science student with a strong foundation in programming, algorithms, and problem-solving. My technical skills include proficiency in programming languages such as C++, Python, JavaScript, and HTML. Additionally, I am multilingual, fluent in Portuguese and English, with conversational proficiency in Spanish. My passion for technology drives me to continuously learn and apply my skills to real-world challenges, aiming to make meaningful contributions in the field of computer science.</p>
                </div>
            </motion.div>
        </div>
    </div>
    )   
}
export default About;