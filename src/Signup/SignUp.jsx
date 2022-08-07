import React from "react"
import styled from "./signup.module.css"
const SignUp =()=>{

    return(
        <div className={styled.signup_main_container}>
            <h1>Register</h1>
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
        </div>
    )
}

export default SignUp