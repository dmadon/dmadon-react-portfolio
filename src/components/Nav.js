import React, {useState} from 'react';
import {motion} from 'framer-motion';


function Nav(props){

    const {navOptions = [], currentPage, setCurrentPage} = props;

    return(
        <header className='d-flex flex-row justify-content-between p-4' >
            {/* animate the header on page load using the imported framer-motion package */}
            <motion.h1 
                initial={{opacity:0, y:-50}}
                animate={{opacity:1, y:0}}                
                transition={{duration: 1}}>
                    Deanna Madon
            </motion.h1>

            <nav>   

                <ul className="nav">
                    {navOptions.map((option,i) => (
                        // animate nav options on page load using the imported framer-motion package
                        <motion.div
                            key={option}
                            initial={{opacity:0, y:-50}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:1.3, delay: i*0.5}}
                        >
                            <li className="mx-3">
                                <a  href={`#${option}`} className={`${currentPage === option && 'nav-active'} highlight`}
                                    onClick={() => {setCurrentPage(option)
                                    console.log(option)
                                }}>
                                    {option}
                                </a>
                            </li> 
                        </motion.div>
                         
                    ))}                           
                </ul>

            </nav>
        </header>
    )
}

export default Nav;