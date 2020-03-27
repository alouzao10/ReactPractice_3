import React, {useContext} from 'react';

import {GlobalContext} from  '../Context/GlobalState';

export const Transaction = ({transactions}) => {

    const {deleteTransaction} = useContext(GlobalContext); // Need a way to loop through to get values...

    const sign = transactions.amount < 0 ? '-' : '+';
    
    const color = transactions.amount < 0 ? 'minus' : 'plus';

    return (
        <li className={color}>
            {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transactions.id)}>x</button>
        </li>
    )
}
