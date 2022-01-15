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
                    <button onClick={selectMentor}> Mentor </button>
                    <button onClick={selectMentee}> Mentee </button>
                </div>
            }

        </div>
    )
}

export default Year;