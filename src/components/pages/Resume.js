import React from "react";
import pdfResume from '../../assets/Deanna_Madon_Resume_Electronic.pdf'
import {motion} from 'framer-motion'

function Resume(){
  
    
    const itemVariants = {
        start: {            
                y: -100,
                rotate: 340,
                opacity:0  
        },
        end:{ 
                y:0,
                opacity:1,
                rotate: 360,
                transition: {
                    duration: 2
                },
        }        
    }
   
    return (

        <div>

            <div className="resume-wrapper container d-flex flex-row justify-content-center">
                <iframe id="resume-preview" src={pdfResume}></iframe>
            </div>


            {/* <div className="btn-container d-flex flex-row justify-content-between">
                <a className="resumeBtn text-center" type="button" href={pdfResume} target="_blank">Open</a>
                <a className="resumeBtn text-center" type="button" href="https://zety.com/profile/deanna-madon" target="_blank">View My Electronic Resume</a>
            </div> */}

            <div className="container">
                <h2 className="section-title text-center py-3">Proficiencies</h2>
            
                <div className="skillsContainer d-flex flex-row justify-content-between flex-wrap">
                    
                    <div className="col-md-6 skills-column">
                        <h3 className="text-accent-2 text-center">Front-end</h3>
                        <ul className="list">
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"                           
                            >
                                    HTML
                            </motion.li>

                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"  
                            >
                                CSS
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"  
                            >
                                JavaScript
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"  
                            >
                                React
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"  
                            >
                                Bootstrap
                            </motion.li>
                        </ul>
                    </div>

                    <div className="col-md-6 skills-column">
                        <h3 className="text-accent-2 text-center">Back-end</h3>
                        <ul className="list">
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"
                            >APIs</motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"
                            >Node</motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"
                            >Express</motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"
                            >MySQL</motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"
                            >Sequelize ORM</motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"
                            >MongoDB</motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"
                            >Mongoose ODM</motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"
                            >RESTful APIs</motion.li>
                            <motion.li
                                variants={itemVariants}
                                initial="start"
                                animate="end"
                            >GraphQL</motion.li>
                        </ul>
                    </div>

                </div>
            </div>



        </div>

        )

}

export default Resume;