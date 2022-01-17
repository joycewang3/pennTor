import { getMentees, getMentors, postFinalMatch, getFinalMatch, postEmail } from "../helper/fetchData";
import { matchMentorsMentees } from "../helper/score-cal";
import { useState, useEffect } from "react";

const Admin = () => {
    const [mentors, setMentors] = useState([]); // because its asychro
    const [mentees, setMentees] = useState([]);
    const [finalMatch, setFinalMatch] = useState([]);
    const [admin, setAdmin] = useState(false);
    const [pw, setPw] = useState(null);

    useEffect(() => {
        getMentors().then((m) => {
            setMentors(m);
        })
        getMentees().then((m) => {
            setMentees(m);
        })
    }, []);

    const handleMatch = () => {
        const matchArray = matchMentorsMentees(mentors, mentees);
        postFinalMatch(matchArray).then(() => {
            console.log("heyyy");
            getFinalMatch().then((result) => {
                postEmail(result);
                console.log(result);
                setFinalMatch(result);
            })
        })
    }

    // display the data from the API to frontend Admin 
    const mentorList = mentors.map((m) => (
        <div key={m.iduser}>
            <div>{m.firstname + " " + m.lastname + ", remaining matching: " + m.matchingnum + ", email: " + m.email}</div>
        </div>
    ));
    const menteeList = mentees.map((m) => (
        <div key={m.iduser}>
            <div>{m.firstname + " " + m.lastname + ", email: " + m.email}</div>
        </div>
    ));

    const finalMatchList = finalMatch.map((m) => (
        <div key={m.iduser}>
            <div>{"Mentor: " + m.mentorfirstname + " " + m.mentorlastname + " (" + m.mentoremail + ") says: " + m.mentormessage}</div>
            <div>{"Mentee: " + m.menteefirstname + " " + m.menteelastname + " (" + m.menteeemail + ") says: " + m.menteemessage}</div>
            <br></br>
            <hr></hr>
        </div>
    ));

    const handlePw = (e) => {
        setPw(e.target.value);
        console.log(e.target.value);
    }

    const validatePw = () => {
        if (pw === "password") { // use env var instead
            setAdmin(true);
        }
    }

    return (
        <div>
            {!admin &&
                <div>
                    <label for="password"> secret key: </label>
                    <br></br>
                    <input type="password" id="pw" name="password" onChange={handlePw}></input>
                    <br></br>
                    <button value="next" onClick={validatePw}> submit </button>
                </div>
            }
            {admin &&
                <div>
                    <div>Mentors:</div>
                    <div>{mentorList}</div>
                    <br></br>
                    <div>Mentees:</div>
                    <div>{menteeList}</div>
                    <br></br>
                    {mentors.length !== 0 && mentees.length !== 0 && <button type="next" className="clickhere" onClick={handleMatch}> MATCH NOW</button>}
                    <div>Results</div>
                    <div>{finalMatchList}</div>
                </div>}
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


