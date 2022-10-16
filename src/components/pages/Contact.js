import React,{useState} from "react";
import {validateEmail, capitalizeFirstLetter} from '../../utils/helpers'

function Contact(){

    const[formState,setFormState] = useState({name:'',email:'',message:''});
    const {name, email, message} = formState;
    const[errorMessage,setErrorMessage] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
            if(!errorMessage){
            setFormState({[event.target.name]:event.target.value})
            console.log('Form ',formState);
        }
    };
    
    function handleChange(event){
        if(event.target.name === 'email'){
            const isValid = validateEmail(event.target.value);
            console.log(isValid);
            if(!isValid){
                setErrorMessage('Invalid email address');
            }
            else{
                setErrorMessage('');
            }
        }
        else{
            if(!event.target.value.length){
                setErrorMessage(capitalizeFirstLetter((`${event.target.name} is required`)));
            }
            else{
                setErrorMessage('');
            }
        }
        if(!errorMessage){setFormState({...formState,[event.target.name]:(event.target.value).trim()})}
    }
    





    return (
        <section className="container d-flex flex-column">
      
            
                <h2 className="section-title text-center py-3">Contact Me</h2>

                <form className="d-flex flex-column flex-wrap" id="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-5 d-flex flex-column align-items-center">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" name="name" onBlur={handleChange}></input>
                    </div>
                    <div className="mb-5 d-flex flex-column align-items-center">
                        <label htmlFor="email">Your Email Address:</label>
                        <input type="email" name="email" onBlur={handleChange}></input>
                    </div>
                    <div className="mb-5 d-flex flex-column align-items-center">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="4" onBlur={handleChange}></textarea>
                    </div>

                    <div className="mb-5 d-flex flex-column align-items-center">
                        <button className="contactBtn" type="submit">Submit</button>
                        
                    </div>


                    {errorMessage && (<div><p className='error-text text-center'>{errorMessage}</p></div>)}


                </form>


            
        </section>
    )

}

export default Contact;