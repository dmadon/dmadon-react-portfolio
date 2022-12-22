import React from 'react';
import {motion} from 'framer-motion';


function Nav({currentPage, setCurrentPage, navOptions}){

    return(
        <nav>
            <ul className="nav col-sm-12">
                {navOptions.map((option,i) => (
                    <motion.div
                        key={option}
                        initial={{opacity:0, y:-50}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:1.3, delay: i*0.5}}
                    >
                        <li className="mx-3">
                            <a  href={`#${option}`} className={`${currentPage === option && 'nav-active'} highlight`}
                                onClick={() => {setCurrentPage(option)
                            }}>
                                {option}
                            </a>
                        </li> 
                    </motion.div>                        
                ))}                           
            </ul>
        </nav>
    )
}

export default Nav;