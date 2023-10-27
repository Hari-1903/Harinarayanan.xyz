import React from "react";

const navbar = () =>{
    return(
        <navbar className="nav_container flex-center">
                <a href="/home" className="nav_button flex-center active_icon"><ion-icon name="home"></ion-icon></a>
                <a href='/projects' className="nav_button flex-center"><ion-icon name="code"></ion-icon></a>
                <a href='/experience' className="nav_button flex-center"><ion-icon name="albums"></ion-icon></a>
                <a href="/contact" className="nav_button flex-center"><ion-icon name='qr-code'></ion-icon></a>
        </navbar>
    );
}

export default navbar;