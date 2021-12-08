import React from 'react';
import Nav from '../Nav_component/nav'
import Button from '../buttons_component/Button'
import './home.css'

const Home = () => {
    return (
        <div className="container-fluid home_body">
          <Nav/>
           <Button/>
        </div>
    );
}

export default Home;
