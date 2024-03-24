import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" id="" />
                <br />
                <input ref={emailRef} defaultValue={"example@react.com"} type="email"  name="email"/>
                <br /> 
                <input type="submit" />
            </form>
        </div>
    );
};

export default RefForm;