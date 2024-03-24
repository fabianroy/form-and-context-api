import { useContext } from 'react';
import { assetContext } from './../grandpa/Grandpa';

const Friend = () => {
    const gift = useContext(assetContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>{gift}</p>
        </div>
    );
};

export default Friend;