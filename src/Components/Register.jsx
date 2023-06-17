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
                    <input value={name} type="text" placeholder="your full name" id="name" name="name" />
                    <label htmlFor="email">email</label>
                    <input value={email} type="email" placeholder="youremail@email.com" id="email" name="email" />
                    <label value={pass} htmlFor="password">password</label>
                    <input type="password" placeholder="********" id="password" name="password" />
                    <button className="signup-btn" type="submit">Sign Up</button>
                </form>
                <a className="link-btn" onClick={() => props.onFormSwitch("login")}>Already have an account? Login here.</a>
            </div>
        </>
    )
}
