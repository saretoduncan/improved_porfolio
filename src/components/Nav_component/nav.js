import React from 'react';
import './nav.css'
const Nav = (props) => {
    return (       
              <div className="container position-absolute top-0">
                <nav className='nav'>
                     <div className='container-fluid py-3'>
                        <h1><a className="logo" href="">Moiyo</a></h1>
                    </div>
                </nav>
           </div>
       
    );
}

export default Nav;
