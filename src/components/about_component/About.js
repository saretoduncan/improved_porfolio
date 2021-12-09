import React from 'react';
import {FaGrinWink} from "react-icons/fa"
import './About.css'

const About = () => {
    return (
        <div className=" bg-light">
           <div className="container-fluid text-light about_section">
               <div className=" container pt-3">
                    <h1 class="fw-bold text-center">Me, Myself & I</h1>
                    <p class="">A Stoic and a Software developer. I wish to apply the principles of stoicism to both life and software development. I fell in love with programming during the corona lockdowns. I love philosophy and read self-help books in my spare time. I am more interested in the science behind or inner engineering of all technologies I come across and haven't limited myself to any "stack".</p>
                    <h2 className="fw-bold text-center">More About Me<FaGrinWink className=" fs-4 orange"/></h2>
                    <ul>
                        <li>I’m daily working on Sharpening my skills and developing projects with developers from all over the globe.</li>
                        <li> Fact: "Good code is like a good joke: It needs no explanation". Russ Olsen(Eloquent Ruby).</li>
                        <li>I’m looking forward to collaborate on Java, springboot,JavaScript,React Projects.</li>
                        <li>Ask me about Technology, Troubleshooting, Psychology, History, Art.</li>
                    </ul>
               </div>
           </div>
            
        </div>
    );
}

export default About;
