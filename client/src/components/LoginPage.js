import '../style/login.css'
import React from "react"

const LoginPage=()=>{

    return (
        <div> 

            <div> 
            <hr></hr>
            
           

                <div className ="header"> penn<span className="header-second">Tor</span></div>

                <div className ="welcome">
                welcome to pennTor,<div></div>  </div>
            <div className = "loginFormBack"> 
                <div id = "loginForm">
                    <form>
                        <div className = "userInfo">

                            <label for ="firstName" className = "fillOut"> First Name : </label><br></br>
                        < input type = "text" id="fname" name ="fname" required className="boxToFill"></input>
                        </div>

                        <div className = "userInfo">
                            <label for ="LastName" className = "fillOut"> Last Name : </label><br></br>
                        < input type = "text" id="lname" name ="lname" required className="boxToFill"></input>
                        </div>

                        <div className = "userInfo">
                            <label for ="firstName" className = "fillOut"> Email : </label><br></br>
                        < input type = "email" id="email" name ="email" required className="boxToFill"></input>
                        </div>

                        <div className = "userInfo">
                            <button type ="next" className="fillOut"> Next</button>
   
                
                        </div>
                    </form>    
                    
                </div>
                </div>
            </div>
         </div>


                        
        
            
        );
    
}

export default LoginPage;
