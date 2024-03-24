import { useContext } from "react";
import { moneyContext } from "../grandpa/Grandpa";


const Aunt = ({asset3}) => {
    const [money, setMoney] = useContext(moneyContext);
    return (
        <div>
            <h2>Aunt</h2>
            <p>{asset3}</p>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 10000)}>Add Money</button>
        </div>
    );
};

export default Aunt;