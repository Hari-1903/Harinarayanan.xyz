import React from "react";
import Navbar from "../components/navbar";
import './project.css';

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


const project = () =>{
    const val="active_btn";
    return(
        <section class="container">
            <div className="control"><Navbar/></div>
                <div >
                    <div class="main-title">
                        <h2>My <span>Projects</span></h2>
                    </div>
                </div>  
                <div className="projects">
                <a href="https://github.com/Hari-1903/DataScience_Internship-LGM/tree/main/Task_4" className="project-item flex-center" target="_blank">
                    <img src={lstm_working} className="project-image lpi"/>
                    <div className="project-content">
                        <div className="project-heading  ">
                            <img src={ml_logo} className="project-logo"/>
                            <p>Stock Market Prediction</p>
                        </div>
                        <p className="project-text lpt">Using <span>LSTM</span> recurrent neural networks and historical stock market data to forecast future stock values accurately.</p>
                    </div>
                </a>
                <a href="https://harinarayanan.xyz/" className="project-item flex-center" target="_blank">
                    <div className="project-content rpc">
                        <div className="project-heading ">
                            <img src={port_logo} className="project-logo"/>
                            <p>Harinarayanan.xyz</p>
                        </div>
                        <p className="project-text">A personal portfolio crafted with <span>React</span>, filled with love and fueled by sleepless nights.</p>
                    </div>
                    <img src={port_working} className="project-image"/>
                </a>
                <a href="https://mapmytask.netlify.app/" className="project-item flex-center" target="_blank">
                    <img src={mmt_working} className="project-image lpi"/>
                    <div className="project-content">
                        <div className="project-heading  ">
                            <img src={mmt_logo} className="project-logo"/>
                            <p>MapMyTask</p>
                        </div>
                        <p className="project-text lpt">MapMyTask allow users to manage your tasks in an interactive-map interface. Built with <span>JavaScript</span></p>
                    </div>
                </a>
                <a href="https://github.com/Hari-1903/DataScience_Internship-LGM/tree/main/Task_2" className="project-item flex-center" target="_blank">
                    <div className="project-content rpc">
                        <div className="project-heading ">
                            <img src={data_logo} className="project-logo"/>
                            <p>EDA on Terrorism Dataset</p>
                        </div>
                        <p className="project-text">The <span>Data analysis</span> aimed to identify high-risk areas and provide understanding for    defence analysis.</p>
                    </div>
                    <img src={data_working} className="project-image"/>
                </a>
                <a href="https://recylink.vercel.app/" className="project-item flex-center" target="_blank">
                    <img src={recy_working} className="project-image lpi"/>
                    <div className="project-content">
                        <div className="project-heading ">
                            <img src={recy_logo} className="project-logo"/>
                            <p>Recylink</p>
                        </div>
                        <p className="project-text lpt">Platform for efficient waste management, recycling, and energy generation using <span>Deep Learning</span>. Built with <span>Next.Js</span> & TS</p>
                    </div>
                </a>
                <a href="https://github.com/Hari-1903/Phonebook_PPS" className="project-item flex-center" target="_blank">
                    <div className="project-content rpc">
                        <div className="project-heading ">
                            <img src={c_logo} className="project-logo"/>
                            <p>Phonebook Management System</p>
                        </div>
                        <p className="project-text">It is my 1st <span>C</span> project using file handling, recursive function etc. My intial steps towards coding 😜</p>
                    </div>
                    <img src={c_working} className="project-image"/>
                </a>
                </div>
        </section>
    );
}

export default project;
