import React, {useState} from 'react';


function Nav(props){

    const {navOptions = [], currentPage, setCurrentPage} = props;

    return(
        <header className='d-flex flex-row justify-content-between p-4' >
            <h1>Deanna Madon</h1>
            <nav>                
                <ul className="nav">
                    {navOptions.map((option) => (
                        <li className="mx-3" key={option}>
                            <a  href={`#${option}`} className={`${currentPage === option && 'nav-active'} grow`}
                                onClick={() => {setCurrentPage(option)
                                console.log(option)
                            }}>
                                {option}
                            </a>
                        </li> 
                         
                    ))}
                   
                
                
                </ul>
            </nav>
        </header>
    )
}

export default Nav;