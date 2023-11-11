import React from "react";
import Roles from "../components/roles";

const landing=()=>{
    return(
    <body>
        <div className="min-h-screen p-12 pt-24 bg-[url('/public/background.svg')] bg-no-repeat bg-cover flex items-center justify-center" id="back">  
            <div className="max-w-[100rem] min-h-[460px] rounded-[12px] bg-[#fff5fd] m-auto shadow-[0_6px_20px_-10px_rgba(33,34,36,0.85)] flex items-center justify-center hover:scale-[1.05] hover:shadow-[2px_10px_30px_-10px_rgba(33,34,36,0.85)] transition-all ease-in h-full w-full">
                <div className="mt-40 text-center pl-5 pr-5 pb-10 transition-all"> 
                    <div className="text-gray-300 text-4xl uppercase w-full scale-[2] block">
                        <p className="text-black">Hello 👋 I'm Harinarayanan</p>
                        <Roles/>
                        <div className="flex-col pt-8 scale-[0.4]  flex items-center justify-center">
                            <a href="/home" className="lnd-button">
                                <div className="lnd-button__line"></div>
                                <div className="lnd-button__line"></div>
                                <span className="lnd-button__text  flex items-center justify-center h-full w-full">KNOW MORE</span>
                            </a>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </body>
    );
}

export default landing