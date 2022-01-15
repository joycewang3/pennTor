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
        <div className="q1Box">
          <label className="question">
            What languages are you able to provide mentorship in? (Note: Please
            ensure that you are fluent in the language as you will be expected
            to provide mentorship to a (likely) native speaker)
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            id="questionText"
            name="language"
            size="90"
            placeholder="e.g. English, French, Spanish, Chinese, etc."
            required
          />
        </div>
        <div className="q1Box">
          <label className="question">
            What languages are you able to provide mentorship in? (Note: Please
            ensure that you are fluent in the language as you will be expected
            to provide mentorship to a (likely) native speaker)
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            id="questionText"
            name="language"
            size="90"
            required
          />
        </div>
        <div className="q1Box">
          <label className="question">
            What languages are you able to provide mentorship in? (Note: Please
            ensure that you are fluent in the language as you will be expected
            to provide mentorship to a (likely) native speaker)
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            id="questionText"
            name="language"
            size="90"
            required
          />
        </div>
        <div className="q1Box">
          <label className="question">
            What languages are you able to provide mentorship in? (Note: Please
            ensure that you are fluent in the language as you will be expected
            to provide mentorship to a (likely) native speaker)
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            id="questionText"
            name="language"
            size="90"
            required
          />
        </div>

        <div className="q2Box">
          <label className="question">
            How often can you meet with your mentee?
          </label>
          <br></br>
          <br></br>
          <input type="checkbox" id="frequency" name="frequency1" value="" />
          <label className="checkbox" for="frequency1">
            Every week
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency2" value="" />
          <label className="checkbox" for="frequency2">
            Every other week
          </label>
          <br></br>
          <input type="checkbox" id="frequency" name="frequency3" value="" />
          <label className="checkbox" for="frequency3">
            Every month
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency4" value="" />
          <label className="checkbox" for="frequency4">
            Ad hoc
          </label>
          <br></br>
        </div>

        <div className="q3Box">
          <label className="question">
            What subjects are you willing to provide mentorship around?
          </label>
          <br></br>
          <br></br>
          <input type="checkbox" id="frequency" name="frequency1" value="" />
          <label className="checkbox" for="frequency1">
            Navigating classes
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency2" value="" />
          <label className="checkbox" for="frequency2">
            Prepping for interviews
          </label>
          <br></br>
          <input type="checkbox" id="frequency" name="frequency3" value="" />
          <label className="checkbox" for="frequency3">
            Staying social
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency4" value="" />
          <label className="checkbox" for="frequency4">
            Career options
          </label>
          <br></br>
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Other...
          </label>
          <br></br>
        </div>

        <div className="q4Box">
          <label className="question">
            How many people are you willing to mentor?
          </label>
          <br></br>
          <br></br>
          <input type="checkbox" id="frequency" name="frequency1" value="" />
          <label className="checkbox" for="frequency1">
            1
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency2" value="" />
          <label className="checkbox" for="frequency2">
            2
          </label>
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency3" value="" />
          <label className="checkbox" for="frequency3">
            3
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency4" value="" />
          <label className="checkbox" for="frequency4">
            4
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            5+
          </label>{" "}
          &nbsp;&nbsp;
        </div>

        <div className="q5Box">
          <label className="question">
            Where did you attend undergrad? What did you study?
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            id="questionText"
            name="language"
            size="90"
            required
          />
        </div>

        <div className="q6Box">
          <label className="question">
            What city or country do you consider home?
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            id="questionText"
            name="language"
            size="90"
            required
          />
        </div>

        <div className="q7Box">
          <label className="question">
            Select all the self-descriptors that apply
          </label>
          <br></br>
          <br></br>
          <input type="checkbox" id="frequency" name="frequency1" value="" />
          <label className="checkbox" for="frequency1">
            Sports Fan
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency2" value="" />
          <label className="checkbox" for="frequency2">
            Musician
          </label>
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency3" value="" />
          <label className="checkbox" for="frequency3">
            Social butterfly
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency4" value="" />
          <label className="checkbox" for="frequency4">
            Gardener
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Pet Owner
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Pet Owner
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Athlete
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Foodie
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Artist
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Health-nut
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Traveler
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Bookworm
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Beach-lounger
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Class clown
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Gamer
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            History buff
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Activist
          </label>{" "}
          &nbsp;&nbsp;
          <input type="checkbox" id="frequency" name="frequency5" value="" />
          <label className="checkbox" for="frequency4">
            Parent
          </label>{" "}
          &nbsp;&nbsp;
        </div>

        <div className="q8Box">
          <label className="question">
            Is there anything else that you would like to share about yourself?
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            id="questionText"
            name="language"
            size="90"
            required
          />
        </div>
      <button type="button" className="submit" onClick="submitFunction()">
        Submit!
      </button>
      </form>
      
    </div>
    
  );
};

function submitFunction() {
  return console.log("mentor form submitted");
}

export default Mentor;
