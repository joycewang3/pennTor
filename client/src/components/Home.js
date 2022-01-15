
const Home = ({ signUp, setSignUp, setName, setAdmin, setYear }) => {
    const handleHide = () => {
        setSignUp(true);
    }

    const updateName = e => {
        setName(e.target.value);
    }

    const handleName = e => {
        e.preventDefault();
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleAdmin = () => {
        setAdmin(true);
        console.log("admin set to true");
    }

    return (
        <div>
            {
                !signUp &&

                <div className="App">

                    <div className="desc">
                        welcome to pennTor, MCIT's web app platform for our mentor-mentee program. </div>
                    <div className="desc">
                        Enter your name and email below to get started!
                    </div>
                    <div id="formBox">
                        <form onSubmit={handleName, handleHide}>
                            <div className="formInput">
                                <label for="firstName" className="lbls"> First name: </label>
                                <br></br>
                                <input type="text" id="firstName" name="firstName" required className="inputBox" onChange={updateName}></input>
                            </div>

                            <div className="formInput">
                                <label for="lastName" className="lbls"> Last name: </label>
                                <br></br>
                                <input type="text" id="lastName" name="lastName" required className="inputBox"></input>
                            </div>

                            <div className="formInput">
                                <label for="email" className="lbls"> Email: </label>
                                <br></br>
                                <input type="email" id="email" name="email" pattern=".+@seas.upenn\.edu" required className="inputBox"></input>
                                <br></br>
                                <small id="note" className="lbls">Make sure to use your Penn SEAS email! </small>
                            </div>

                            <div className="formInput">
                                <input type="submit" value="next" id="nextBtn" ></input>
                            </div>
                        </form>

                    </div>
                </div>
            }

        </div >
    )
}

export default Home;