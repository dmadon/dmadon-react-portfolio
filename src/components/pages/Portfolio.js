import React,{useState} from "react";
import imgAbsenceReporting from '../../assets/Absence Reporting Screenclip.jpg';
import imgAdoptAFriend from '../../assets/Adopt-a-Friend Screenshot.png';
import imgJsQuiz from '../../assets/js-quiz-screenclip.jpg';
import imgTooGoodToWaste from '../../assets/too-good-to-waste-homepage-screenshot.png';
import imgWeatherDashboard from '../../assets/weather-dashboard-screenshot.png';
import imgNoteTaker from '../../assets/note-taker-screenshot.jpg';
import Project from '../Project'


function Portfolio(){

    const [projects] = useState([
        {
            title:'Too Good to Waste',
            href:'https://too-good-2-waste.herokuapp.com/',
            imgSrc:imgTooGoodToWaste,
            gitHub:'https://github.com/dmadon/too-good-to-waste',
            description:'This application seeks to help address the problem of food waste in America by allowing grocery stores to pre-package boxes of close-to-expiration foods and sell them at a reduced price.',
            bullets:['MongoDB','Express','React','Node','Mongoose','GraphQL','Apollo Server','Chakra UI','React Google Maps API','bcrypt','JavaScript']
        },        
        {
            title:'Absence Reporting Tool',
            href:'https://absence-reporting.herokuapp.com/',
            imgSrc:imgAbsenceReporting,
            gitHub:'https://github.com/dmadon/absence-reporting',
            description:"A practical business tool that allows a user to request time off from work. The employee's supervisor is notified by email of the absence requests and, when logged in, can easily approve or deny the absence from an approval queue.",
            bullets:['mySQL','Sequelize','Express','Node','Handlebars','Nodemailer','bcrypt','JavaScript']
        },
        {
            title:'Note Taker',
            href:'https://note-taker-module11.herokuapp.com/',
            imgSrc:imgNoteTaker,
            gitHub:'https://github.com/dmadon/note-taker',
            description:'A simple tool for writing and saving notes and reminders. Users can create new notes and add them to a list of saved notes. Notes may also be edited or deleted.',
            bullets:['Node','Express','JavaScript'] 
        },
        {
            title:'Adopt-a-Friend',
            href:'https://dmadon.github.io/adopt-a-friend/',
            imgSrc:imgAdoptAFriend,
            gitHub:'https://github.com/dmadon/adopt-a-friend',
            description:"Users can search for adoptable pets in their area through the Petfinder API. Pets can be saved to the user's favorites using local storage",
            bullets:['HTML','CSS','Materialize','Petfinder API','JavaScript'] 
        },        
        {
            title:'Weather Dashboard',
            href: 'https://dmadon.github.io/weather-dashboard/',
            imgSrc:imgWeatherDashboard,
            gitHub:'https://github.com/dmadon/weather-dashboard/',
            description:'An application which allows a user to search for a city and returns the current weather conditions for that city along with the five-day forecast using the OpenWeather API. The most recently-searched cities are displayed on the page and, when clicked, return the results for that location.',
            bullets:['HTML','CSS','Bootstrap','OpenWeather API','JavaScript']
        },
        {
            title:'JavaScript Quiz',
            href:'https://dmadon.github.io/js-quiz/',
            imgSrc:imgJsQuiz,
            gitHub:'https://github.com/dmadon/js-quiz',
            description:'A timed quiz to test your basic JavaScript knowledge. Users can choose to save their final score to local storage. The questions for this quiz were taken directly from the w3schools.com JavaScript quiz.',
            bullets:['HTML','CSS','JavaScript'] 
        },
    ])

    return (          

        <section id="projects" className="container">
            <h2 className="section-title text-center py-3">Projects</h2>

            <div id="project-holder d-flex flex-row">
                
                {projects.map((project,i) => (                       
                    
                        <Project
                            key={project.title}
                            title={project.title}
                            href={project.href}
                            imgSrc={project.imgSrc}
                            gitHub={project.gitHub}
                            description={project.description}
                            bullets={project.bullets}
                            i={i}
                        />
                                            
                ))}

            </div>
            
        </section>

    )
}
    



export default Portfolio;