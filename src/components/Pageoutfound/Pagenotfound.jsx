import React from 'react';
import { Link } from 'react-router-dom';
function Pagenotfound(props) {
    return (
        <div className='PageNotFound'>
            <img style={{ mixBlendMode:'multiply' }} src='https://www.brainmeasures.com/videocourse/files/not-found.gif' alt='notfoundimg'></img>
            <h1>Page Not Found</h1>
            <Link to='/' className='button-css'>
                Go Back
            </Link>
        </div>

    );
}

export default Pagenotfound;