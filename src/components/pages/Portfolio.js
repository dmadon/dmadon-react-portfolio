import React,{useState} from "react";
import imgAbsenceReporting from '../../assets/Absence Reporting Screenclip RESIZED.jpg';
import imgAdoptAFriend from '../../assets/Adopt-a-Friend Screenshot RESIZED.png';
import imgJsQuiz from '../../assets/js-quiz-screenclip.jpg';
import imgTooGoodToWaste from '../../assets/too-good-to-waste-homepage-screenshot.png';
import imgWeatherDashboard from '../../assets/weather-dashboard-screenshot.png';
import imgNoteTaker from '../../assets/note-taker-screenshot.jpg';
import Project from '../Project'
import {motion} from 'framer-motion';

function Portfolio(){

    const [projects] = useState([
        {
            title:'Absence Reporting Tool',
            href:'https://absence-reporting.herokuapp.com/',
            imgSrc:`${imgAbsenceReporting}`,
            gitHub:'https://github.com/dmadon/absence-reporting'       
        },
        {
            title:'Adopt-a-Friend',
            href:'https://dmadon.github.io/adopt-a-friend/',
            imgSrc:`${imgAdoptAFriend}`,
            gitHub:'https://github.com/dmadon/adopt-a-friend' 
        },
        {
            title:'JavaScript Quiz',
            href:'https://dmadon.github.io/js-quiz/',
            imgSrc:`${imgJsQuiz}`,
            gitHub:'https://github.com/dmadon/js-quiz' 
        },
        {
            title:'Weather Dashboard',
            href: 'https://dmadon.github.io/weather-dashboard/',
            imgSrc:`${imgWeatherDashboard}`,
            gitHub:'https://github.com/dmadon/weather-dashboard/'
        },
        {
            title:'Note Taker',
            href:'https://note-taker-module11.herokuapp.com/',
            imgSrc:`${imgNoteTaker}`,
            gitHub:'https://github.com/dmadon/note-taker' 
        },
        {
            title:'Too Good to Waste',
            href:'https://ancient-ocean-76067.herokuapp.com/',
            imgSrc:`${imgTooGoodToWaste}`,
            gitHub:'https://github.com/dmadon/too-good-to-waste' 
        },
        

    ])

    return (  

        <div>

            <section id="projects" className="container">
                <h2 className="section-title text-center py-3">Projects</h2>

                <div className="d-flex flex-row flex-wrap justify-content-between">
                    
                    {projects.map((project,i) => (

                        <motion.div
                        className="project-wrapper my-3"
                        key={project.title}

                        initial={{
                            opacity: 0,
                            x: i % 2 === 0 ? -70 : 70
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        whileHover={{
                            // scale: 1.1
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.5,
                            scale:{
                                delay: 0,
                                duration: .5
                            }
                        }}
                        >
                        
                            <Project
                                title={project.title}
                                href={project.href}
                                imgSrc={project.imgSrc}
                                gitHub={project.gitHub}
                            />

                        </motion.div>
                        
                    ))}

                </div>
             
            </section>

        </div>
    )
}
    



export default Portfolio;