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

    return(
        <div ref={container}  className="p-3 bg-[#1d1d1d] flex flex-row items-center gap-[2vw] overflow-hidden">
        <motion.div className="h-full flex flex-row gap-[2vw]  relative left-[0%]" style={{x}} >
                <img src="https://skillicons.dev/icons?i=html" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=css" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=js" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>   
                <img src="https://skillicons.dev/icons?i=react" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=tailwind" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=nodejs" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=c" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=cpp" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=py" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=git" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=github" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=mysql" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=vercel" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=netlify" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
                <img src="https://skillicons.dev/icons?i=vscode" className="object-cover rounded-[1vw] h-[10rem] w-auto "/>
            </motion.div>
        </div>
    );
}

export default Skilltab;