import "../style/EndPage.css";
import React from "react";

const EndPage = ({ name }) => {
  return (
    <div>
      <div className="thanks">Thanks, {name}! </div>
      <div className="box">
        <label className="text">
          Once we’ve found your mentor/mentee match,
          you’ll receive an email connecting the two of you!
          Make sure to check your inbox ;)
        </label>
        <br></br>
      </div>
    </div>
  );
}

export default EndPage;
