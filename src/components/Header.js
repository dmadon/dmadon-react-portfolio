import React from "react";
import Nav from './Nav';
import {motion} from 'framer-motion';

function Header({currentPage, setCurrentPage, navOptions}){

    return (

        <header className='d-flex flex-row flex-wrap justify-content-between p-4' >
            <motion.h1
                className="col-md-4 col-sm-12" 
                initial={{opacity:0, y:-50}}
                animate={{opacity:1, y:0}}                
                transition={{duration: 1}}
            >
                Deanna Madon
            </motion.h1>

            <Nav 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                navOptions={navOptions}
            />

        </header>
    )
}

export default Header;