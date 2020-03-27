import React from 'react';

import './App.css';

import {Header} from './Components/Header';
import {Balance} from './Components/Balance';
import {Expense} from './Components/Expense';
import {Transactions} from './Components/Transactions';
import {AddTransaction} from './Components/AddTransaction';

import {GlobalProvider} from './Context/GlobalState';




function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Expense/>
        <Transactions/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
