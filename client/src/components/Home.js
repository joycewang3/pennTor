import "../style/home.css";
import React, { useState } from 'react';

const Home = ({ signUp, setSignUp, setFirstName, setAdmin, firstName, lastName, setLastName, email, setEmail }) => {
    const [validEmail, setValidEmail] = useState(true);

    const handleHide = () => {
        setSignUp(true);
    }

    const handleFirstName = e => {
        setFirstName(e.target.value);
    }

    const handleLastName = e => {
        setLastName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handleName = e => {
        e.preventDefault();
        setFirstName(e.target.value);
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleAdmin = () => {
        setAdmin(true);
        console.log("admin set to true");
    }

    const pennEmail = "@seas.upenn.edu"

    // need to validateEmail 
    // and check if email is already in database
    const validateEmail = () => {
        if (email.includes(pennEmail)) {
            setEmail(email);
        } else {
            setEmail(null);
            console.log("EMAIL NOT VALID!");
        }
    }

    return (
        <div>
            {
                !signUp &&

                <div>
                    <div className="desc">
                        welcome to pennTor, MCIT's web app platform for our mentor-mentee program. </div>
                    <div className="desc">
                        Enter your name and email below to get started!
                    </div>

                    <div id="formBox">
                        <div>
                            <div className="formInput">
                                <label for="firstName" className="lbls"> First name: </label>
                                <br></br>
                                <input type="text" id="firstName" name="firstName" required className="inputBox" onChange={handleFirstName}></input>
                            </div>

                            <div className="formInput">
                                <label for="lastName" className="lbls"> Last name: </label>
                                <br></br>
                                <input type="text" id="lastName" name="lastName" required className="inputBox" onChange={handleLastName}></input>
                            </div>

                            <div className="formInput">
                                <label for="email" className="lbls"> Email: </label>
                                <br></br>
                                <input type="email" id="email" name="email" pattern=".+@seas.upenn\.edu" required className="inputBox" onChange={handleEmail}></input>
                                <br></br>
                                <small id="note" className="lbls">Make sure to use your Penn SEAS email! </small>
                            </div>

                            <div className="formInput">
                                {
                                    firstName && lastName && email && <button type="submit" value="next" id="nextBtn" onClick={handleName, handleHide}> next </button>
                                }
                            </div>
                        </div>

                    </div>
                    <div className="admin">
                        For admins, please log-in <a className="admin"> here: </a>
                        <br></br>
                        <div>
                            <label for="email" className="admin"> Email:</label>
                            <input type="email" name="adminEmail" className="admin"></input>
                        </div>
                        <div>
                            <label for="password" className="admin"> Password:</label>
                            <input type="passowrd" id="psw" name="psw" className="admin"></input>
                        </div>

                    </div>
                </div>
            }

        </div >
    )
}

export default Home;