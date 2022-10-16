import React from "react";
import {UilGithub} from '@iconscout/react-unicons';

function Project({title,href,imgSrc,gitHub}) {

    return(

        <article className="project-article">
            <div className="project-title d-flex flex-row justify-content-between align-items-center">
                <h4>{title}</h4>            
                <a href={gitHub} target="_blank">
                    <UilGithub className="gh-icon"/>
                </a>        
            </div>
                                            
            <a href={href} target="_blank">
                <img className="mainImg" src={imgSrc} alt="project screenshot" />
            </a>

        </article>
    )
}


export default Project;