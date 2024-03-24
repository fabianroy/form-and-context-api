import { createContext, useState } from "react";
import Aunt from "../aunt/Aunt";
import Dad from "../dad/Dad";
import Uncle from "../uncle/Uncle";
import './Grandpa.css'

export const assetContext = createContext('Gold');
export const moneyContext = createContext(100000);

const Grandpa = () => {

    const [money, setMoney] = useState(100000);

    const asset = "Diamond";
    const asset2 = "Gold";
    const asset3 = "Silver";
    const asset4 = "Alu";
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money : {money}</p>
            <moneyContext.Provider value={[money, setMoney]}>
            <assetContext.Provider value="Gold">
                <section className="flex">
                    <Dad asset={asset} asset4={asset4}></Dad>
                    <Uncle asset2={asset2}></Uncle>
                    <Aunt asset3={asset3}></Aunt>
                </section>
            </assetContext.Provider>
            </moneyContext.Provider>

        </div>
    );
};

export default Grandpa;

// 1. Create a context and export.
// 2. Add provider for the context witha value. Value can be anything. 
// 3. useContext to access value in the context API 