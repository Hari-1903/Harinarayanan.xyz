import React from "react";
import Navbar from "../components/navbar";
import './contact.css';


const contact = () =>{
    return(
        <div className="main-bg">
            <div className="control"><Navbar/></div>
            <section class="container">
                <div >
                    <div class="main-title">
                        <h2>Contact <span>Me</span></h2>
                    </div>
                    <div class="contact-content">
                        <div class="left-contact">
                            <p>
                            Feel free to connect with me through email, my socials or simply drop me a message 
                            and I'll get back to you soon.
                            </p>
                            <div class="contact-info">
                                <div class="contact-item">
                                    <div class="icon flex-center">
                                        <ion-icon name="location-sharp" ></ion-icon>
                                        <a href="https://maps.app.goo.gl/ZfqyTdn7Z1SsKZe46" target="_blank">Location : Chennai, India</a>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <div class="icon flex-center">
                                        <ion-icon name="mail" ></ion-icon>
                                        <a href="mailto:hnnair1903@gmail.com" target="_blank">Mail Id : hnnair1903@gmail.com</a>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <div class="icon flex-center">
                                        <ion-icon name="call" ></ion-icon>
                                        <a href="callto:8220777077" target="_blank">Phone No : +91 82207 77077</a>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <div class="icon flex-center">
                                        <ion-icon name="mail-unread" ></ion-icon>
                                        <a href="mailto:hr3214@srmist.edu.in" target="_blank">Edu Mail Id : hr3214@srmist.edu.in</a>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-icons">
                                <div class="profile-card-social">
                                    <a href="https://github.com/Hari-1903" class="logo github flex-center" target="_blank">
                                    <span class="flex-center">
                                    <ion-icon name="logo-github"></ion-icon>
                                    </span>
                                    </a>  
                                    <a href="https://www.instagram.com/hari.narayanan_" class="logo instagram flex-center" target="_blank">
                                    <span class="flex-center">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                    </span>
                                    </a>
                                    <a href="https://discord.com/users/807628015441805374" class="logo discord flex-center" target="_blank">
                                    <span class="flex-center">
                                        <ion-icon name="logo-discord"></ion-icon>
                                    </span>
                                    </a>
                                    <a href="https://t.me/+918220777077" class="logo telegram flex-center" target="_blank">
                                    <span class="flex-center">
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="right-contact">
                            <form action="" class="contact-form">
                                <div class="input-control field">
                                    <input type="text" required placeholder=" Full Name"/>
                                    <input type="email" required placeholder=" Mail Id"/>
                                </div>
                                <div class="input-control">
                                    <input type="text" required placeholder=" Subject"/>
                                </div>
                                <div class="input-control">
                                    <textarea name="" id="" cols="15" rows="8" placeholder="Got any message for me?"></textarea>
                                </div>
                                <div class="submit-btn flex-center">
                                    <btn>Submit</btn>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>  
            </section>
        </div>
    );
}

export default contact;