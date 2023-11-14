import React from "react";
import Navbar from "../components/navbar";

const Contact = () =>{
    return(
        <div className="overflow-hidden h-screen bg-[#1d1d1d]">
            <div className="fixed z-10 top-[50%] right-[3%] translate-y-[-50%]"><Navbar/></div>
            <section class="pt-[4rem] pb-[4rem] pr-[26rem] pl-[26rem] text-[2rem] text-white bg-[#1d1d1d] font-['Poppins']">
                <div >
                    <div class="text-center">
                        <h2 className="relative uppercase text-[6rem] font-bold">Contact <span className="text-[#ee5c67]">Me</span></h2>
                    </div>
                    <div class="grid pt-16 gap-8 grid-cols-[1fr,1.35fr]">
                        <div class=" mt-10">
                            <p className="leading-[1.8]">
                            Feel free to connect with me through email, my socials or simply drop me a message 
                            and I'll get back to you soon.
                            </p>
                            <div>
                                <div class=" mt-8">
                                    <div class="justify-start flex items-center">
                                        <ion-icon name="location-sharp" size='large'></ion-icon>
                                        <a href="https://maps.app.goo.gl/ZfqyTdn7Z1SsKZe46" target="_blank" rel="noreferrer" className="pl-3">Location : Chennai, India</a>
                                    </div>
                                </div>
                                <div class=" mt-8">
                                    <div class="justify-start flex items-center">
                                        <ion-icon name="mail" size='large' ></ion-icon>
                                        <a href="mailto:hnnair1903@gmail.com" target="_blank" rel="noreferrer" className="pl-3">Mail Id : hnnair1903@gmail.com</a>
                                    </div>
                                </div>
                                <div class=" mt-8">
                                    <div class="justify-start flex items-center">
                                        <ion-icon name="call" size='large' ></ion-icon>
                                        <a href="callto:8220777077" target="_blank" rel="noreferrer" className="pl-3">Phone No : +91 82207 77077</a>
                                    </div>
                                </div>
                                <div class=" mt-8">
                                    <div class="justify-start flex items-center">
                                        <ion-icon name="mail-unread" size='large' ></ion-icon>
                                        <a href="mailto:hr3214@srmist.edu.in" target="_blank" rel="noreferrer" className="pl-3">Edu Mail Id : hr3214@srmist.edu.in</a>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-icons">
                                <div class="flex gap-12 mt-16">
                                    <a href="https://github.com/Hari-1903" class="w-[55px] h-[55px] text-white text-5xl rounded-full bg-[linear-gradient(45deg,#333333,#626b73)] shadow-[0_4px_30px_0_rgba(255,255,255,0.1)] flex justify-center items-center" target="_blank" rel="noreferrer">
                                    <span class=" flex items-center justify-center">
                                    <ion-icon name="logo-github"></ion-icon>
                                    </span>
                                    </a>  
                                    <a href="https://www.instagram.com/hari.narayanan_" class="w-[55px] h-[55px] text-white text-5xl rounded-full bg-[linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)] shadow-[0_4px_30px_0_rgba(120,64,190,0.4)] flex justify-center items-center" target="_blank" rel="noreferrer">
                                    <span class=" flex items-center justify-center">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                    </span>
                                    </a>
                                    <a href="https://discord.com/users/807628015441805374" class="w-[55px] h-[55px] text-white text-5xl rounded-full bg-[linear-gradient(45deg,#7289da,#5865f2)] shadow-[0_4px_30px_0_rgba(88,101,242,0.4)] flex justify-center items-center" target="_blank" rel="noreferrer">
                                    <span class=" flex items-center justify-center">
                                        <ion-icon name="logo-discord"></ion-icon>
                                    </span>
                                    </a>
                                    <a href="https://t.me/+918220777077" class="w-[55px] h-[55px] text-white text-5xl rounded-full bg-[linear-gradient(45deg,#0088cc,#00aced)] shadow-[0_4px_30px_0_rgba(19,127,212,0.4)] flex justify-center items-center" target="_blank" rel="noreferrer">
                                    <span class=" flex items-center justify-center">
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="right-contact ml-10">
                            <form action="">
                                <div class="mt-10 mb-10 flex">
                                    <input type="text" required placeholder=" Full Name" className="w-full resize-none rounded-[30px] pt-3 pl-4 pr-4 pb-4 bg-[#555555] text-[#fff5fd]"/>
                                    <input type="email" required placeholder=" Mail Id" className="w-full resize-none rounded-[30px] pt-3 pl-4 pr-4 pb-4 bg-[#555555] text-[#fff5fd] ml-6"/>
                                </div>
                                <div class="mt-10 mb-10">
                                    <input type="text" required placeholder=" Subject" className="w-full resize-none rounded-[30px] pt-3 pl-4 pr-4 pb-4 bg-[#555555] text-[#fff5fd]"/>
                                </div>
                                <div class="mt-10 mb-10">
                                    <textarea name="" id="" cols="15" rows="8" placeholder="Got any message for me?" className="w-full resize-none rounded-[30px] pt-3 pl-4 pr-4 pb-4 bg-[#555555] text-[#fff5fd]"></textarea>
                                </div>
                                <div class="flex items-center justify-center">
                                    <btn className="text-white pt-2 pl-20 pb-2 pr-20 rounded-[10px] border-2 border-[#f46767] hover:bg-[#f46767] hover:scale-[0.95] transition-all ease-in">Submit</btn>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>  
            </section>
        </div>
    );
}

export default Contact;