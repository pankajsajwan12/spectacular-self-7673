
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../Login/Login.css";
import './Singup.css'

const SignUp = () => {
    const [userData, setUserData] = useState({});

    const handleOnchange = (e) => {
        const {name , value} = e.target
        setUserData({
            ...userData,
            [name] : value
        })
    }
  
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    }
  return (
    <div className="LoginPage_mainDiv">
      <div className="LoginPage_topLeft">
        <p className="LoginToHomePage">HOME</p>
        <p>&nbsp;/&nbsp;</p>
        <p>CREATE AN ACCOUNT</p>
      </div>

      <div className="LoginPage_singImg">
        <img src="..\..\create-account_d.png" alt="signInImg" />
      </div>

      <div className="singIn_text ">
        <p > Create an Account </p>
      </div>
      <hr />

      {/* firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    postalcode:{type:Number, required:true},
    phone:{type:Number, required:true},
    role:{type:String, required:true} */}
      <div className="sign_up_main_Div">
            <form onSubmit={handleOnSubmit}>
                <div className="firstName_samllDiv">
                    <p>First Name</p>
                    <input type="text" name="firstname" onChange={handleOnchange}/>
                </div>

               <div className="firstName_samllDiv marginDiv">
                    <p>Last Name</p>
                    <input type="text" name="lastname" onChange={handleOnchange}/>
                </div> 

                 <div className="firstName_samllDiv marginDiv">
                    <p>Email</p>
                    <input type="text" name="email" onChange={handleOnchange} />
                </div> 

                <div className="firstName_samllDiv marginDiv">
                    <p>Confirm Email</p>
                    <input type="text" />
                </div>

                <div className="firstName_samllDiv marginDiv">
                    <p>ZIP/ Postal Code</p>
                    <input type="text" name="postalcode" onChange={handleOnchange}/>
                </div>

                <div className="firstName_samllDiv marginDiv">
                    <p>Phone</p>
                    <input type="text"  name="phone" onChange={handleOnchange}/>
                </div>

                <div className="firstName_samllDiv marginDiv">
                    <p>Password</p>
                    <input type="password" name="password" onChange={handleOnchange}/>
                </div>

                <div className="marginDiv">
                    <p className="center">Privacy Policy</p>
                    <button type="submit" className="createAccount_btn"> CREATE ACCOUNT</button>
                </div>
            </form>
        </div>

        <div className="question_div question_div_width">
            <p className="fontsize">QUESTIONS?</p>
            <p>We’re here for you! Call us at 1-800-756-5005.</p>
        </div>
    </div>
  );
};

export default SignUp;
