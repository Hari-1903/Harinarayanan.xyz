import React, { useEffect, useRef }  from "react";
import {useTransform, useScroll,motion} from "framer-motion";
import Lenis from '@studio-freight/lenis'

const Skilltab = () =>{
    const container = useRef(null)
    const { scrollYProgress }=useScroll({
        target:container,
        offset:["start end", "end start"]
    })

    const x = useTransform(scrollYProgress,[0,1],[0,-window.innerHeight/2])

    useEffect(()=>{
        const lenis = new Lenis()
        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    },[])

    const skills=[{name:'html'},{name:'css'},{name:'js'},{name:'react'},{name:'tailwind'},{name:'nodejs'},{name:'c'},{name:'cpp'},{name:'py'},
    {name:'git'},{name:'github'},{name:'mysql'},{name:'vercel'},{name:'netlify'},{name:'vscode'}]

    return(
        <div ref={container}  className="w-[150vw] p-3 bg-[#1d1d1d] flex flex-row items-center gap-[2vw] overflow-hidden">
        {skills.map((skilldata) =>(
        <motion.div className="h-full  flex flex-row gap-[2vw]  relative left-[0%]" style={{x}} >
                <img src={`https://skillicons.dev/icons?i=${skilldata.name}`} alt="skill icons" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
            </motion.div>
        ))}
        </div>
    );
}

export default Skilltab;