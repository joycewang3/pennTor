import './App.css';
import Home from './home';
import Mentor from './Mentor';

import Mentee from './Mentee';
import EndPage from './EndPage';
import Year from './year';
import React, { useState } from 'react';

function App() {
  const [signUp, setSignUp] = useState(false);
  const [mentorForm, setMentorForm] = useState(false);
  const [menteeForm, setMenteeForm] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [year, setYear] = useState(false);
  const [complete, setComplete] = useState(false);
  const [name, setName] = useState("");

  return (
    <div>
      <header className="pennTor">penn<span className="Tor">Tor</span></header>
      <hr id="line"></hr>
      <div id="space"> </div>
      <Home signUp={signUp} setYear={setYear} setSignUp={setSignUp} setName={setName} setAdmin={setAdmin}>
      </Home>

      {
        (menteeForm || mentorForm) || complete ? <div> </div> :
          <div>
            <Year year={year} name={name} admin={admin} signUp={signUp} setMenteeForm={setMenteeForm} setMentorForm={setMentorForm}> </Year>
          </div>
      }

      <Mentor mentorForm={mentorForm} setComplete={setComplete} setMentorForm={setMentorForm}> </Mentor>
      <Mentee menteeForm={menteeForm}> </Mentee>

      {complete && signUp && !(menteeForm || mentorForm) ? <EndPage name={name} > </EndPage> : <div></div>}
    </div>
  );
}

export default App;
