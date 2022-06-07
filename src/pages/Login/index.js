import React, { useState } from "react";
import "./style.css";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [errorUsername, setErrorUsername] = useState("");

    const handleLogin = () => {
        if (username === "") {
            setErrorUsername("Please input username");
        }
    }
    return (
        <div>
            <label>Username</label>
            <input
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                    setErrorUsername("");
                }}
            />
            <div>{errorUsername}</div>
            <button onClick={handleLogin}>Login</button>
        </div>

    )
}

export default LoginPage;