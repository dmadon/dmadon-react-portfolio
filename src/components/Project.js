import React from "react";
import {motion} from 'framer-motion';


function Project({title,href,imgSrc,gitHub,description,bullets,i}) {

    return(
        <motion.div
        className="project-wrapper d-flex flex-column my-3"
        key={title}

        initial={{
            opacity: 0,
            x: i % 2 === 0 ? -70 : 70
        }}
        animate={{
            opacity: 1,
            x: 0
        }}
        whileHover={{
            scale: 1.025
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
            <div className="project-title d-flex flex-row justify-content-between align-items-center">
                <h4>{title}</h4>            
                <a href={gitHub} target="_blank">
                    <i className="project-icon fa-brands fa-github"></i>
                </a>        
            </div>
            
            
            <article className="d-flex flex-row project-article">
                <a href={href} target="_blank" className="project-img text-center">            
                    <img className="mainImg" src={imgSrc} alt="project screenshot" />
                </a>

                <div className="project-details px-2">
                    <p>{description}</p>
                    <ul className="project-bullets">
                        {bullets.map((bullet) => 
                            <li>{bullet}</li>
                        )}
                        
                    </ul>
                </div>
            </article>
            
            

        </motion.div>
        

        
    )
}


export default Project;