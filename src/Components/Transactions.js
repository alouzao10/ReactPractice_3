import React, {useContext} from 'react';

import {Transaction} from './Transaction';

import {GlobalContext} from  '../Context/GlobalState';

export const Transactions = () => {

    //const context = useContext(GlobalContext);
    //console.log("Transactions: " + context);

    const {transactions} = useContext(GlobalContext); // Need a way to loop through to get values...


    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transactions => (<Transaction key={transactions.id} transactions={transactions} />))}
            </ul>
        </>
    )
}
