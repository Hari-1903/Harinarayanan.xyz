import React,{useEffect} from "react";
import Navbar from "../components/navbar";
import Lenis from '@studio-freight/lenis';

const Experience= () =>{

    useEffect(()=>{
        const lenis = new Lenis()
        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    },[])
    return(
        <section class="pt-[4rem] pb-[4rem] pr-[15rem] pl-[15rem] text-[2rem] text-white bg-[#1d1d1d] font-['Poppins'] h-[100vh]">
        <div className="fixed z-10 top-[50%] right-[3%] translate-y-[-50%] "><Navbar/></div>
            <div class="text-center">
                <h2 className="relative uppercase text-[6rem] font-bold">my <span className="text-[#ee5c67]">certifications</span></h2>
            </div>
        </section>
    );
}
export default Experience;