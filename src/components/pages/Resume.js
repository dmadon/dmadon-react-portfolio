import React from "react";
import { saveAs } from "file-saver";
import pdfResume from '../../assets/Deanna_Madon_Resume.pdf'
import {motion} from 'framer-motion'

function Resume(){
    const saveFile = () => {
        saveAs(
            `${pdfResume}`,
            "Deanna_Madon_Resume.pdf"
        )
    }

    
    const itemVariants = {
        start: {            
                y: -100,
                rotate: 300,
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

            <div className="btn-container d-flex flex-row justify-content-between">
                <button className="resumeBtn text-center" type="submit" onClick={saveFile}>Download My Resume</button>
                <a className="resumeBtn text-center" type="button" href="https://zety.com/profile/deanna-madon" target="_blank">View My Electronic Resume</a>
            </div>

            <div className="container">
                <h2 className="section-title text-center py-3">Proficiencies</h2>
            </div>
            <div className="skillsContainer d-flex flex-row justify-content-around">
                <div>
                    <h3 className="text-accent-2">Front-end</h3>
                    <motion.ul>
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
                    </motion.ul>
                </div>

                <div>
                    <h3 className="text-accent-2">Back-end</h3>
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

        )

}

export default Resume;