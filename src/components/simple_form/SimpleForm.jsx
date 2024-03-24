
const SimpleForm = () => {

    const handleSubmit = e => {

        e.preventDefault(); 
        console.log(e.target.name.value);
        console.log('Form Submited');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email"  name="email"/>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;