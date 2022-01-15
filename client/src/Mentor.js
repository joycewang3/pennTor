import "./Mentor.css";
import React from "react";

const Mentor = () => {
  return (
    <div>
      <header className="pennTor">pennTor</header>
      <a className="findMentee">
        Answer the questions below to help us find your perfect mentee match!
      </a>
      <form>
        <div className="q1box">
          <label className="question">
            What languages are you able to provide mentorship in?
          </label>
          <br></br>
          <br></br>
          <input type="text" id="language" name="language" size="90" font-size="25px" required/>
        </div>

        <div className="q2box">
          <label className="question">
          How often can you meet with your mentee?
          </label>
          <br></br>
          <br></br>
          <input type="checkbox" id="frequency" name="frequency1" value=""/>
          <label className="checkbox" for="frequency1">Once every two weeks</label>
          <br></br>
          <input type="checkbox" id="frequency" name="frequency2" value=""/>
          <label className="checkbox" for="frequency1">Once a month</label>
          <br></br>
          <input type="checkbox" id="frequency" name="frequency3" value=""/>
          <label className="checkbox" for="frequency1">Ad hoc</label>
          <br></br>
        </div>


      </form>
    </div>
  );
};

export default Mentor;
