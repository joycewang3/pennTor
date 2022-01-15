import logo from './logo.svg';
import './App.css'; //create new .css file e.g. header.css and import in header.js
import Header from './header';

function App() {
  
  const greet = () =>{
    console.log("button clicked");
  }
  
  return (
    <div>
      <Header/>
      <button onClick={greet} id="button" className="allbuttons">Mentor</button>
      <form>
        <label for="firstname">
          First Name
        </label>
        <input type="text" name="firstname" required>
          
        </input>
      </form>

      <div className="box">

      </div>

    </div>
  );
}

export default App;
