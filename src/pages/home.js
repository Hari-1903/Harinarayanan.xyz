import React from "react";
import Navbar from "../components/navbar";
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
        <section className="pt-[4rem] pb-[4rem] pr-[26rem] pl-[26rem] text-[2rem] text-white bg-[#1d1d1d] font-['Poppins'] home-body">
            <div className="fixed z-10 top-[50%] right-[3%] translate-y-[-50%]"><Navbar/></div>
            <div className="text-center">
                <h2 className="relative uppercase text-[6rem] font-bold">About <span className="text-[#ee5c67]"> me</span></h2>
            </div>
            <div className="grid pt-12 pb-48 grid-cols-[1.1fr,1fr]">
                <div className="pr-20 flex items-center justify-center text-[#fff5fd]">
                    <p className="leading-[3rem] p-4">
                    As an aspiring engineering graduate, My passion lies in coding and its applications.
                    From the practical use of coding in everyday tasks to its role in creating innovative solutions, 
                    I am captivated by the power of coding to bring ideas to life.
                    <br/><br/>I am particularly enthusiastic about Data Science. 
                    Data science continue to inspire and challenge me as I explore their possibilities. With each project 
                    and learning opportunity, my interest for this field continues to grow. I am excited to contribute to the advancement 
                    of technology and make a meaningful impact in the world of computers.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="rounded-md border-2 border-[#555] transition-all ease-in shadow-[2px_4px_30px_5px_rgba(0,0,0,.1)] hover:scale-[1.02] hover:border-1 hover:border-[#d73b67]  flex items-center justify-center">
                        <img src={my_potrait} className="w-full rounded-md" alt="Potrait of Harinarayanan"/>
                    </div>
                </div>
                <div className="flex self-start">
                        <a href="https://drive.google.com/file/d/10cEdb1Qh4jSLlE6P3faOWz_SzhOfRDDz/view?usp=sharing" target="_blank" className="font-semibold relative overflow-hidden mt-[2rem] rounded-[40px] border-2 border-[#df4667] before:absolute before:top-0 before:right-0 before:content-[''] before:translate-x-[100%] hover:before:duration-500 hover:before:transition-all hover:before:ease-in  flex items-center hover:before:w-full hover:before:h-full hover:before:bg-[#df4667] hover:before:translate-x-0 justify-center" rel="noreferrer">
                            <span className="pl-[4rem] pr-[4rem] z-10">Download CV</span>
                            <span className="p-[1.6rem] rounded-[50%] bg-[#df4667]  flex items-center justify-center"><ion-icon name="download" size='large'></ion-icon></span>
                        </a>
                </div>
            </div>
            <div className="pb-32">
                <h4 className="uppercase font-bold text-center relative text-[2.4rem] pt-[5rem] pb-[5rem] before:content-[''] before:left-[50%] before:translate-x-[-50%] before:absolute before:top-0 before:w-2/5 before:h-[2px] before:bg-[#3e3e3e]">What I can do?</h4>
                <div className="grid grid-cols-2 gap-[3.2rem]">
                {Skills_data.map((skdata) =>( 
                    <div className="flex flex-col">
                        <p className="uppercase font-medium">{skdata.name}</p>
                        <div className="progress-con  flex items-center justify-center">
                            <p className="text-[#f46767]">{skdata.percentage}%</p>
                            <div className="w-full h-3 ml-6 relative bg-[#555]">
                                <span className={skdata.class}></span>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <h4 className="uppercase font-bold text-center relative text-[2.4rem] pt-[5rem] pb-[5rem] before:content-[''] before:left-[50%] before:translate-x-[-50%] before:absolute before:top-0 before:w-2/5 before:h-[2px] before:bg-[#3e3e3e]">Survial History</h4>
            <div className="grid grid-cols-2 gap-[3.2rem] pb-28">
                {timeline_data.map((tdata) =>(
                 <div className="relative pl-16 border-l-2 border-[#555]">
                 <div className="absolute top-0 w-[50px] h-[50px] left-[-27px] bg-[#d73b67] rounded-[50%] flex items-center justify-center">
                     <ion-icon name="briefcase"></ion-icon>
                 </div>
                 <p className="inline-block text-base uppercase font-medium pt-[.3rem] pb-[.3rem] pl-[.8rem] pr-[.8rem] bg-[#555] rounded-2xl">{tdata.year}</p>
                 <h5 className="uppercase text-[2rem] font-semibold pt-[1.6rem] pb-[1.6rem]">{tdata.title}<span className="font-medium text-[2rem] text-[#ffedf5]"> <br></br>-{tdata.place}</span></h5>
                 <p className="text-[1.6rem] text=[#fff5fd]">{tdata.description}</p>
                </div>
                ))}  
            </div>
        </section>
    );
}


export default home;