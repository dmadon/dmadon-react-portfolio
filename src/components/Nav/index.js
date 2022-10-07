import React, {useState} from 'react';

function Nav(props){

    const {navOptions = [], currentOption, setCurrentOption} = props;

    return(
        <header>
            <nav>
                <ul className="nav nav-tabs">
                    {navOptions.map((option) => (
                        <li className="mx-3" key={option}>
                            <a  className={`${currentOption === option && 'navActive bg-danger'}`}onClick={() => {
                                setCurrentOption(option)
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