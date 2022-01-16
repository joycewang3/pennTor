import './App.css';
import Home from './components/Home';
import Mentor from './components/Mentor';
import Mentee from './components/Mentee';
import EndPage from './components/EndPage';
import Year from './components/Year';
import React, { useState } from 'react';

function App() {
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

      <Mentor mentorForm={mentorForm} setComplete={setComplete} setMentorForm={setMentorForm}> </Mentor>
      <Mentee menteeForm={menteeForm} setComplete={setComplete} setMenteeForm={setMenteeForm}> </Mentee>

      {complete && signUp && !(menteeForm || mentorForm) ? <EndPage name={firstName} > </EndPage> : <div></div>}
    </div>
  );
}

export default App;
