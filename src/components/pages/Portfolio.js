import React from "react";
import imgAbsenceReporting from '../../assets/Absence Reporting Screenclip RESIZED.jpg';

function Portfolio(){

    return (  

        <div>

            {/*PROJECTS SECTION FLEXBOX*/}
            <section id="projects" className="container">
                <h2 className="section-title text-center py-3">Projects</h2>

                <div className="d-flex flex-row flex-wrap justify-content-between">
                <a className="project-wrapper my-3" href="https://absence-reporting.herokuapp.com/" target="_blank">
                    <article className="project-article">
                        <h3 className="project-title text-center">Absence Reporting</h3>
                        <img className="secondary-img" id="absence-reporting-img" src={imgAbsenceReporting} alt="Absence reporting website screen clip" />
                    </article>
                </a>
                <a className="project-wrapper my-3" href="https://dmadon.github.io/adopt-a-friend/" target="_blank">
                    <article className="project-article" id="project-2">
                        <h3 className="project-title text-center">Adopt-a-Friend</h3>
                        <img className="secondary-img" id="run-buddy-img" src="./assets/Adopt-a-Friend Screenshot RESIZED.png" alt="Adopt-a-Friend website screen clip" />
                    </article>
                </a>
                <a className="project-wrapper my-3" href="https://dmadon.github.io/horiseon-refactor/" target="_blank">
                    <article className="project-article" id="project-3">
                        <h3 className="project-title text-center">Horiseon Refactor</h3>
                        <img className="secondary-img" id="horiseon-refactor-img" src="./assets/Horiseon Refactor Screen Clip.jpg" alt="Horiseon website screen clip" />
                    </article>
                </a>
                <a className="project-wrapper my-3" href="https://dmadon.github.io/run-buddy/" target="_blank">
                    <article className="project-article" id="project-4">
                        <h3 className="project-title text-center">Run Buddy</h3>
                        <img className="secondary-img" id="run-buddy-img" src="./assets/Run Buddy Screen Clip RESIZED.jpg" alt="Run Buddy website screen clip" />
                    </article>
                </a>
                <a className="project-wrapper my-3" href="#" target="">
                    <article className="project-article" id="project-5">
                        <h3 className="project-title text-center">Project 4</h3>
                        <img className="secondary-img" id="Project-4-img" src="./assets/Placeholder 2 RESIZED.jpg" alt="Placeholder image of Starship Enterprise" />
                    </article>
                </a>

                </div>
             
            </section>

      
        </div>
)
    }
    



export default Portfolio;