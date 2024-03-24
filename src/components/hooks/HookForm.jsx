import useInputState from "./useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState(100);
    const nameState = useInputState('example');
    const emailState = useInputState('example@react.com');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameState.value);
        console.log(emailState.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /> */}
                <input {...nameState} type="text" name="name" id="" />
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default HookForm;