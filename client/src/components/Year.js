import  '../style/Year.css'

const Year = ({ name, signUp, setMenteeForm, setMentorForm, year }) => {
    const selectMentor = () => {
        setMentorForm(true);
        setMenteeForm(false);
    }

    const selectMentee = () => {
        setMenteeForm(true);
        setMentorForm(false);
    }

    return (
        <div>
            {
                signUp && !year &&
                <div className="year">
                    <h2> Hi, {name}! </h2>
                    <h3> Are you signing up to be a mentor or mentee? </h3>

                   <div className="box1">
                       <button className="b1" onClick={selectMentor}> Mentor </button> 
                   </div>
                   <br></br>
                   
                   <h4> I’m a 2nd year MCIT student </h4>                       
                        <div className="box2">
                        <button className ="b2" onClick={selectMentee}> Mentee </button>
                   <div className="box2">
                    </div>
                    <br></br>
                   <h5> I’m a 1nd year MCIT student </h5>
                
               </div>
                </div>
            }


        </div>
    )
}

export default Year;