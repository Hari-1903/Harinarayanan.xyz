import React from "react";
import './landing.css';

const landing=()=>{
    return(
    <body>
        <div className="wrapper flex-center" id="back">  
            <div className="profile-card flex-center full-size">
                <div className="card-info">
                    <div className="animated-txt displayed">
                        <p>Hello 👋 I'm Harinarayanan</p>
                        <section className="animation">
                        <div className="first"><div>Engineering Student</div></div>
                        <div className="second"><div>Aspiring Data scientist</div></div>
                        <div className="third"><div>Web developer</div></div>
                        </section>
                        <div className="btn-container flex-center">
                            <a href="/home" className="lnd-button">
                                <div className="lnd-button__line"></div>
                                <div className="lnd-button__line"></div>
                                <span className="lnd-button__text flex-center full-size">KNOW MORE</span>
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