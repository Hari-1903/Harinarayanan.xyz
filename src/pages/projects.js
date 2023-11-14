import React from "react";
import Navbar from "../components/navbar";

import recy_working from '../assests/recylink_working.png';
import recy_logo from '../assests/recylink_logo.png'
import port_working from '../assests/portfolio_sample.png';
import port_logo from '../assests/portfolio_logo.png';
import mmt_working from '../assests/mmt_working.png';
import mmt_logo from '../assests/mmt_logo.png';
import data_logo from '../assests/data_logo.webp';
import data_working from '../assests/data_working.png';
import ml_logo from '../assests/dl_logo.webp';
import lstm_working from '../assests/lstm_working.png';
import c_working from '../assests/c_working.png';
import c_logo from '../assests/c_logo.png';


const Project = () =>{
    return(
        <section class="pt-[4rem] pb-[4rem] pr-[26rem] pl-[26rem] text-[2rem] text-white bg-[#1d1d1d] font-['Poppins']">
            <div className="fixed z-10 top-[50%] right-[3%] translate-y-[-50%]"><Navbar/></div>
                <div >
                    <div class="text-center">
                        <h2 className="relative uppercase text-[6rem] font-bold">My <span className="text-[#ee5c67]">Projects</span></h2>
                    </div>
                </div>  
                <div className="mt-24">
                <a href="https://github.com/Hari-1903/DataScience_Internship-LGM/tree/main/Task_4" className="hover:scale-105 transition-all ease-in bg-[#555555] rounded-lg mb-20  flex items-center justify-center" target="_blank" rel="noreferrer">
                    <img src={lstm_working} className="shadow-[0_0_10px_10px_rgba(0,0,0,0.2)] h-56 rounded-lg mr-16 scale-[1.2]" alt="Working of the Project"/>
                    <div>
                        <div className="flex">
                            <img src={ml_logo} className="w-12 h-auto" alt="Logo of the Project"/>
                            <p>Stock Market Prediction</p>
                        </div>
                        <p className="pt-4 lpt">Using <span className="text-yellow-400">LSTM</span> recurrent neural networks and historical stock market data to forecast future stock values accurately.</p>
                    </div>
                </a>
                <a href="https://harinarayanan.xyz/" className="hover:scale-105 transition-all ease-in bg-[#555555] rounded-lg mb-20  flex items-center justify-center" target="_blank" rel="noreferrer">
                    <div className="mr-16 ml-8">
                        <div className="flex">
                            <img src={port_logo} className="w-12 h-auto" alt="Logo of the Project"/>
                            <p>Harinarayanan.xyz</p>
                        </div>
                        <p className="pt-4">A personal portfolio crafted with <span className="text-yellow-400">React</span>, filled with love and fueled by sleepless nights.</p>
                    </div>
                    <img src={port_working} className="shadow-[0_0_10px_10px_rgba(0,0,0,0.2)] h-56 rounded-lg scale-[1.2]" alt="Working of the Project"/>
                </a>
                <a href="https://mapmytask.netlify.app/" className="hover:scale-105 transition-all ease-in bg-[#555555] rounded-lg mb-20  flex items-center justify-center" target="_blank" rel="noreferrer">
                    <img src={mmt_working} className="shadow-[0_0_10px_10px_rgba(0,0,0,0.2)] h-56 rounded-lg mr-16 scale-[1.2]" alt="Working of the Project"/>
                    <div>
                        <div className="flex">
                            <img src={mmt_logo} className="w-12 h-auto" alt="Logo of the Project"/>
                            <p>MapMyTask</p>
                        </div>
                        <p className="pt-4 lpt">MapMyTask allow users to manage your tasks in an interactive-map interface. Built with <span className="text-yellow-400">JavaScript</span></p>
                    </div>
                </a>
                <a href="https://github.com/Hari-1903/DataScience_Internship-LGM/tree/main/Task_2" className="hover:scale-105 transition-all ease-in bg-[#555555]  rounded-lg mb-20  flex items-center justify-center" target="_blank" rel="noreferrer">
                    <div className=" mr-16 ml-8">
                        <div className="flex">
                            <img src={data_logo} className="w-12 h-auto" alt="Logo of the Project"/>
                            <p>EDA on Terrorism Dataset</p>
                        </div>
                        <p className="pt-4">The <span className="text-yellow-400">Data analysis</span> aimed to identify high-risk areas and provide understanding for    defence analysis.</p>
                    </div>
                    <img src={data_working} className="shadow-[0_0_10px_10px_rgba(0,0,0,0.2)] h-56 rounded-lg scale-[1.2]" alt="Working of the Project"/>
                </a>
                <a href="https://recylink.vercel.app/" className="hover:scale-105 transition-all ease-in bg-[#555555] flex rounded-lg mb-20 items-center justify-center" target="_blank" rel="noreferrer">
                    <img src={recy_working} className="shadow-[0_0_10px_10px_rgba(0,0,0,0.2)] h-56 rounded-lg mr-16 scale-[1.2]" alt="Working of the Project"/>
                    <div>
                        <div className="flex">
                            <img src={recy_logo} className="w-12 h-auto" alt="Logo of the Project"/>
                            <p>Recylink</p>
                        </div>
                        <p className="pt-4 lpt">Platform for efficient waste management, recycling, and energy generation using <span className="text-yellow-400">Deep Learning</span>. Built with <span className="text-yellow-400">Next.Js</span> & TS</p>
                    </div>
                </a>
                <a href="https://github.com/Hari-1903/Phonebook_PPS" className="hover:scale-105 transition-all ease-in bg-[#555555] rounded-lg mb-20  flex items-center justify-center" target="_blank" rel="noreferrer">
                    <div className="mr-16 ml-8">
                        <div className="flex">
                            <img src={c_logo} className="w-12 h-auto" alt="Logo of the Project"/>
                            <p>Phonebook Management System</p>
                        </div>
                        <p className="pt-4">It is my 1st <span className="text-yellow-400">C</span> project using file handling, recursive function etc. My intial steps towards coding 😜</p>
                    </div>
                    <img src={c_working} className="shadow-[0_0_10px_10px_rgba(0,0,0,0.2)] h-56 rounded-lg scale-[1.2]" alt="Working of the Project"/>
                </a>
                </div>
        </section>
    );
}

export default Project;
