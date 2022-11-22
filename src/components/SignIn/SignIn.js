import React, { useState } from 'react';
import './SignIn.css';
import { logInWithEmailAndPassword } from '../../firebase';


async function handleClick(email, password) {
    await logInWithEmailAndPassword(email, password);
}

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section>
            <div>
                <label for="login">Login</label>
                <input id="login" type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
                <label for="password">Password</label>
                <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <button onClick={() => handleClick(email, password)}>Connect</button>
        </section>
    );
}

export default SignIn;