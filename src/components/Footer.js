import React from "react";
import {UilGithub,UilLinkedin} from '@iconscout/react-unicons'


function Footer(){

    return(
        <section className="footer d-flex flex-row fixed-bottom justify-content-center align-items-center">
            <UilGithub className="footer-icon " size="3rem"/>
            <UilLinkedin className="footer-icon " size="3rem"/>
           
        </section>


    )
   

}



export default Footer;