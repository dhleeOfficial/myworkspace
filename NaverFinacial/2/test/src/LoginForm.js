import React, { useState } from "react";

export default function LoginForm({ onSubmit }) {
    const [ userName, setUserName ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');

    const _handleInputValue = (event) => {
        const target = event.target;

        if (target.id === 'username-input') {
            console.log(target.value);
            setUserName(target.value);
        }
        else setUserPassword(target.value);
    };

    const _handleSubmitBtn = (event) => {
        onSubmit(userName, userPassword);
    };

    return (
        <div >
            <div>
                <input id='username-input' type='text' value={userName} onChange={_handleInputValue} />
            </div>
            <div>
                <input id='password-input' type='password' value={userPassword} onChange={_handleInputValue} />
            </div>
            <button id='login-button' type='submit' disabled={!userName || !userPassword} onClick={_handleSubmitBtn}>
                Submit
            </button>
        </div>
    );
}