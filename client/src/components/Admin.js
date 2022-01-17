import { getMentees, getMentors } from "../helper/fetchData";
import { matchMentorsMentees } from "../helper/score-cal"; 
import { useState, useEffect } from "react";

const Admin = () => {
    const[mentors, setMentors] = useState([]); // because its asychro
    const [mentees, setMentees] = useState([]);
    useEffect(() => {
        getMentors().then((m)=>{
            setMentors(m);
        })
        getMentees().then((m)=>{
            setMentees(m);
        })
    }, []);         
    
    // display the data from the API to frontend Admin 
   
    const mentorList = mentors.map((m) => (
        <div key={m.iduser}>
          <div>{m.firstname + " " + m.lastname + ", remaining matching: " + m.matchingnum + ", email: " + m.email}</div>
        </div>
    ));
    const menteeList = mentees.map((m) => (
        <div key={m.iduser}>
          <div>{m.firstname + " " + m.lastname +  ", email: " + m.email}</div>
        </div>
    ));

    return (
        <div>
            <div>Mentors:</div>
            <div>{mentorList}</div>
            {mentors.length!==0 && mentees.length!==0 && <button type ="next" className="clickhere" onClick={()=>matchMentorsMentees(mentors, mentees)}> MATCH NOW</button>}
            <div>Mentees:</div>
            <div>{menteeList}</div>
        </div>
    );

}

export default Admin;
// admin see data of mentor 
// fetch data from database
// backend - database
// create a get function in fetch data 
// la copier dans admin et crees des fcts
// api to backend
// show them


