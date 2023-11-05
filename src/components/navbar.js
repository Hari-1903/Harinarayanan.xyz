import React from "react";

const navbar = () =>{
    return(
        <navbar className="nav_container flex-col  flex items-center justify-center">
                <a href="/home" className="  p-6 mt-5 mb-5 rounded-[100%] bg-[#555] text-[2.4rem] transition-all ease-in hover:scale-[1.1] hover:bg-[#f46767] flex items-center justify-center visited:text-[#fff5fd]"><ion-icon name="home"></ion-icon></a>
                <a href='/projects' className="  p-6 mt-5 mb-5 rounded-[100%] bg-[#555] text-[2.4rem] transition-all ease-in hover:scale-[1.1] hover:bg-[#f46767] flex items-center justify-center visited:text-[#fff5fd]"><ion-icon name="code"></ion-icon></a>
                <a href='/experience' className="  p-6 mt-5 mb-5 rounded-[100%] bg-[#555] text-[2.4rem] transition-all ease-in hover:scale-[1.1] hover:bg-[#f46767] flex items-center justify-center visited:text-[#fff5fd]"><ion-icon name="albums"></ion-icon></a>
                <a href="/contact" className="  p-6 mt-5 mb-5 rounded-[100%] bg-[#555] text-[2.4rem] transition-all ease-in hover:scale-[1.1] hover:bg-[#f46767] flex items-center justify-center visited:text-[#fff5fd]"><ion-icon name='qr-code'></ion-icon></a>
        </navbar>
    );
}

export default navbar;