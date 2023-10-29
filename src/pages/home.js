import React from "react";
import Navbar from "../components/navbar";
import "./home.css"
import my_potrait from '../assests/Harinarayanan.jpg'

const timeline_data=[
    {title:"Computer Science Engineering (AIML)",place:"-SRM University",year:"2021 - Present",description:"Coursework of significance includes AIML, DSA, OOPS, and Computer Organization and Architecture. 9.34 curent CGPA"},
    {title:"Senior Secondary School CBSE",place:"Kaathir Vidyaa Mandhir",year:"2019 - 2021",description:"Secured a 85% in the final board examination and was a dedicated JEE aspirant with a 91 percentile score."},
    {title:"Secondary School CBSE",place:"The Earnest Academy",year:"2016-2019",description:"Achieved a 91% in the final board examination while actively engaging in both chess and athletics."},
    {title:"Data Science Intern",place:"Let's Grow More",year:"Apr23 - May23",description:"Applied advanced data analysis techniques, including data preprocessing, EDA and ML algorithms to real-world problems"}
]

const Skills_data=[
    {name:'Data Analytics',percentage:'90',class:'ninty'},
    {name:'Frontend Development',percentage:'75',class:'seventyfive'},
    {name:'C ++',percentage:'70',class:'seventy'},
    {name:'Python',percentage:'80',class:'eighty'},
    {name:'Exploratory Data Analysis',percentage:'90',class:'ninty'},
    {name:'JavaScript',percentage:'60',class:'sixty'},
]

const home= () =>{
    return(
        <section class="container home-body">
            <div className="control"><Navbar/></div>
            <div class="main-title">
                <h2>About <span> me</span></h2>
            </div>
            <div class="h_about-container">
                <div class="left-about flex-center">
                    <p>
                    As an aspiring engineering graduate, My passion lies in coding and its applications.
                    From the practical use of coding in everyday tasks to its role in creating innovative solutions, 
                    I am captivated by the power of coding to bring ideas to life.
                    <br/><br/>I am particularly enthusiastic about Data Science. 
                    Data science continue to inspire and challenge me as I explore their possibilities. With each project 
                    and learning opportunity, my interest for this field continues to grow. I am excited to contribute to the advancement 
                    of technology and make a meaningful impact in the world of computers.
                    </p>
                </div>
                <div class="right-about flex-center">
                    <div class="about-item flex-center">
                        <img src={my_potrait} class="myself"/>
                    </div>
                </div>
                <div class="btn-con">
                        <a href="https://drive.google.com/file/d/1nC1Y8SR24wSlHstiKh2BnC6O1HRRTTg5/view?usp=drive_link" target="_blank" class="main-btn flex-center">
                            <span class="btn-text">Download CV</span>
                            <span class="btn-icon flex-center"><ion-icon name="download"></ion-icon></span>
                        </a>
                </div>
            </div>
            <div class="h_about-stats">
                <h4 class="h_stat-title">What I can do?</h4>
                <div class="progress-bars">
                {Skills_data.map((skdata) =>( 
                    <div class="progress-bar">
                        <p class="prog-title">{skdata.name}</p>
                        <div class="progress-con flex-center">
                            <p class="prog-text">{skdata.percentage}%</p>
                            <div class="progress">
                                <span class={skdata.class}></span>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <h4 class="h_stat-title">Survial History</h4>
            <div class="h_timeline">
                {timeline_data.map((tdata) =>(
                 <div class="timeline-item">
                 <div class="tl-icon flex-center">
                     <ion-icon name="briefcase"></ion-icon>
                 </div>
                 <p class="tl-duration">{tdata.year}</p>
                 <h5>{tdata.title}<span> <br></br>-{tdata.place}</span></h5>
                 <p>{tdata.description}</p>
                </div>
                ))}  
            </div>
        </section>
    );
}


export default home;