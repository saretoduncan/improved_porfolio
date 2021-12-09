import React from 'react';
import Nav from '../Nav_component/nav'
import Button from '../buttons_component/Button'
import profileIcon from '../images/mf-avatar.svg'
import './home.css'

const Home = () => {
    return (
        <div className="container-fluid d-flex  align-items-center position-relative home_body">
      <Nav />
            <div className="container "> 
                <div className="  flex-column-reverse content-center flex-md-row row ">
                    <div className=" align-self-center col-12 col-md-6 ">
                        <h1 className="text-light intro mb-3 ">
                            <span >Hi,</span><br/>
                            <span>I'm Duncan</span><br/>
                            <span>Fullstack Developer</span>
                        </h1>
                        <p class="text-light">Android/Web developer</p>
                        <Button btnName={'Get in Touch!'}/>
                    </div>
                    <div className="d-flex col-12 col-md-6 justify-content-center ">
                        <img className="img-fluid profile " src={profileIcon}/> 
                    </div>
                </div>
            </div>
         
           
        </div>
    );
}

export default Home;
