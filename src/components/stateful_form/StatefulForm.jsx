import { useState } from "react";

const StatefulForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')
    const [name, setName] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 8) {
            setError('Password must be atleast 8 characters')
        } else {
            setError('');
        }
    }

    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}
                    type="text" name="name" id="" required />

                <br />

                <input onChange={handleEmailChange}
                    type="email" name="email" required />

                <br />

                <input onChange={handlePasswordChange}
                    type="password" name="password" id="" required/>

                <br />

                <input type="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;