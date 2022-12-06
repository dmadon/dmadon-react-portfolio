import React from "react";



function Footer(){

    return(
        <section className="footer d-flex flex-row fixed-bottom justify-content-center align-items-center">
            
            
            <a className="text-accent-4 footer-icon" href="https://github.com/dmadon" target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>

            <a className="text-accent-4 footer-icon" href="https://linkedin.com/in/deanna-madon" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a className="text-accent-4 footer-icon" href="https://stackoverflow.com/users/18262329/dmadon" target="_blank">
                <i className="fa-brands fa-stack-overflow"></i>
            </a>
        </section>


    )
   

}



export default Footer;