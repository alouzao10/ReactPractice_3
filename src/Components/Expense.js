import React, {useContext} from 'react';

import {GlobalContext} from  '../Context/GlobalState';

export const Expense = () => {

    const {transactions} = useContext(GlobalContext); // Need a way to loop through to get values...

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">+${income}</p>
                    </div>
                    <div>
                    <h4>Expense</h4>
                    <p className="money minus">-${expense}</p>
                </div>
            </div>
        </>
    )
}
