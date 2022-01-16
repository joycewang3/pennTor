import '../App.css';
import Home from './Home';
import Mentor from './Mentor';
import Mentee from './Mentee';
import EndPage from './EndPage';
import Year from './Year';
import React, { useState } from 'react';

function User() {
    const [signUp, setSignUp] = useState(false);
    const [mentorForm, setMentorForm] = useState(false);
    const [menteeForm, setMenteeForm] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [year, setYear] = useState(false);
    const [complete, setComplete] = useState(false);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);

    return (
        <div>
            <hr id="line"></hr>
            <header className="pennTor">penn<span className="Tor">Tor</span></header>
            <Home signUp={signUp} setYear={setYear} setSignUp={setSignUp} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} setAdmin={setAdmin}>
            </Home>

            {
                (menteeForm || mentorForm) || complete ? <div> </div> :
                    <div>
                        <Year year={year} name={firstName} admin={admin} signUp={signUp} setMenteeForm={setMenteeForm} setMentorForm={setMentorForm}> </Year>
                    </div>
            }

            <Mentor mentorForm={mentorForm} setComplete={setComplete} setMentorForm={setMentorForm} firstName={firstName} lastName={lastName} email={email}> </Mentor>
            <Mentee menteeForm={menteeForm} setComplete={setComplete} setMenteeForm={setMenteeForm} firstName={firstName} lastName={lastName} email={email}> </Mentee>

            {complete && signUp && !(menteeForm || mentorForm) ? <EndPage name={firstName} > </EndPage> : <div></div>}
        </div>
    );
}

export default User;