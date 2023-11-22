import React from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <navbar className="nav_container flex-col  flex items-center justify-center">
                <Link to="/home" className="  p-6 mt-5 mb-5 rounded-[100%] bg-[#555] text-[2.4rem] transition-all ease-in hover:scale-[1.1] hover:bg-[#f46767] flex items-center justify-center visited:text-[#fff5fd] "><ion-icon name="home"></ion-icon></Link>
                <Link to='/projects' className="  p-6 mt-5 mb-5 rounded-[100%] bg-[#555] text-[2.4rem] transition-all ease-in hover:scale-[1.1] hover:bg-[#f46767] flex items-center justify-center visited:text-[#fff5fd]"><ion-icon name="code"></ion-icon></Link>
                <Link to='/certifications' className="  p-6 mt-5 mb-5 rounded-[100%] bg-[#555] text-[2.4rem] transition-all ease-in hover:scale-[1.1] hover:bg-[#f46767] flex items-center justify-center visited:text-[#fff5fd]"><ion-icon name="albums"></ion-icon></Link>
                <Link to="/contact" className="  p-6 mt-5 mb-5 rounded-[100%] bg-[#555] text-[2.4rem] transition-all ease-in hover:scale-[1.1] hover:bg-[#f46767] flex items-center justify-center visited:text-[#fff5fd]"><ion-icon name='qr-code'></ion-icon></Link>
        </navbar>
    );
}

export default Navbar;  