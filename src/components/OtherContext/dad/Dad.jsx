import Myself from "../myself/Myself";
import Brother from "../brother/Brother";
import '../grandpa/Grandpa'


const Dad = ({asset, asset4}) => {
    return (
        <div>
            <h2>Dad</h2>
                <Myself asset={asset}></Myself>
                <Brother asset4={asset4}></Brother>
        </div>
    );
};

export default Dad;