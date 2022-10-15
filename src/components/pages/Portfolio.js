import React,{useState} from "react";
import {motion} from 'framer-motion';
import imgAbsenceReporting from '../../assets/Absence Reporting Screenclip RESIZED.jpg';
import imgAdoptAFriend from '../../assets/Adopt-a-Friend Screenshot RESIZED.png';
import imgJsQuiz from '../../assets/js-quiz-screenclip.jpg';
import imgRunBuddy from '../../assets/Run Buddy Screen Clip RESIZED.jpg';
import {UilGithub} from '@iconscout/react-unicons'

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
        title:'Run Buddy',
        href:'https://dmadon.github.io/run-buddy/',
        imgSrc:`${imgRunBuddy}`,
        gitHub:'https://github.com/dmadon/run-buddy' 
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
                            <article className="project-article">
                                <div className="project-title d-flex flex-row justify-content-between align-items-center">
                                    <h4>{project.title}</h4>
                                    
                                    <a href={project.gitHub} target="_blank">
                                        <UilGithub className="gh-icon"/>
                                    </a>
                                
                                </div>
                                                                
                                <a href={project.href} target="_blank">
                                    <img className="mainImg" src={project.imgSrc} alt="project screenshot" />
                                </a>

                            </article>
                        </motion.div>
                    ))}

                </div>
             
            </section>

      
        </div>
)
    }
    



export default Portfolio;