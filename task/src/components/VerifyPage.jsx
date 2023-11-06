import React, { Component } from 'react';
import Navbar from './Navbar';

class VerifyPage extends Component{

    render(){
        return(
            <div className='verifyPage'>
                <Navbar />
                <div className='verify-bodySection'>
                    <h1>Please verify your email</h1>
                    <p>You're almost there! We sent an email to</p>
                    <p><b>sipho.mathebula@gmail.com</b></p>
                </div>
            </div>
        )
    }
}

export default VerifyPage;