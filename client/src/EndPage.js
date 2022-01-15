import "./EndPage.css";
import React from "react";
// import ReactDOM from "react-dom";

// const element = <h1>Hello from Create React App</h1>;

// ReactDOM.render(element, document.getElementById("root"));

class EndPage extends React.Component {
  render() {
    return (
      <div>
        <hr className="line"></hr>
        <h1 className="header">pennTor</h1>
        <a className="thanks">Thanks, Joyce!</a>
      </div>
    );
  }
}

export default EndPage;
