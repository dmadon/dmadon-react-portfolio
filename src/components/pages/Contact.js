import React from "react";

function Contact(){

    return (
        <section className="container d-flex flex-column">
      
            
                <h2 className="section-title text-center py-3">Contact Me</h2>

                <form className="d-flex flex-column flex-wrap" id="contact-form">
                    <div className="mb-5 d-flex flex-column align-items-center">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" name="name"></input>
                    </div>
                    <div className="mb-5 d-flex flex-column align-items-center">
                        <label htmlFor="email">Your Email Address:</label>
                        <input type="email" name="email"></input>
                    </div>
                    <div className="mb-5 d-flex flex-column align-items-center">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="4"></textarea>
                    </div>
                </form>

                
            
        </section>
    )

}

export default Contact;