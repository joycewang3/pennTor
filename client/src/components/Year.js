import '../style/Year.css'

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

                <div>
                    <h2> Hi, {name}! </h2>
                    <h3> Are you signing up to be a mentor or mentee? </h3>
                    <div className="year">
                        <div>
                            <button className="btn1" onClick={selectMentor}> mentor </button>
                            <p id="secondyr"> I'm a 2nd year MCIT student! </p>
                        </div>
                        <div className="column">
                            <button className="btn2" onClick={selectMentee}> mentee </button>
                            <p id="firstyr"> I'm a 1st year MCIT student! </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default Year;

