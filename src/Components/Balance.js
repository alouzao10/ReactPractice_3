import React, {useContext} from 'react';

import {GlobalContext} from  '../Context/GlobalState';

export const Balance = () => {

    const {transactions} = useContext(GlobalContext); // Need a way to loop through to get values...

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
