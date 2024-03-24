import Friend from "../friend/Friend";


const Myself = ({asset}) => {
    return (
        <div>
            <h2>My Self</h2>
            <p>{asset}</p>
            <Friend></Friend>
        </div>
    );
};

export default Myself;