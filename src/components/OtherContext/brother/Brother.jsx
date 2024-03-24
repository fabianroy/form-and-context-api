import { useContext } from "react";
import { assetContext } from './../grandpa/Grandpa';


const Brother = ({asset4}) => {
    const asset5 = useContext(assetContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>{asset4}</p>
            <p>Also has {asset5}</p>
        </div>
    );
};

export default Brother;