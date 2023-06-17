import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="nmae">full name</label>
                    <input type="text" placeholder="your full name" id="name" name="name" required />
                    <label htmlFor="email">email</label>
                    <input type="email" placeholder="youremail@email.com" id="email" name="email" required />
                    <label htmlFor="password">password</label>
                    <input type="password" placeholder="********" id="password" name="password" required/>
                    <button className="signup-btn" type="submit">Sign Up</button>
                </form>
                <a className="link-btn" onClick={() => props.onFormSwitch("login")}>Already have an account? Login here.</a>
            </div>
        </>
    )
}
