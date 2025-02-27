'use client';

import { useReducer } from 'react';
import Button from './ui/Button';
import { blueActiveColors, greenActiveColors, redActiveColors } from './colors';
import { reducer } from './reducer';

export default function Home() {
  const initialState = {
    active: false,
    balance: 500,
    loan: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <header className="mb-5">
        <div className="font-bold text-2xl text-center mb-3">
          useReducer Bank Acount
        </div>

        <p className="text-center">
          {state.active ? (
            <>
              <span className="pe-3">Balance ${state.balance}</span>
              <span className="ps-3">Loan ${state.loan}</span>
            </>
          ) : (
            'Please open an account.'
          )}
        </p>
      </header>
      <main className="">
        <Button
          buttonText="Open Account"
          activeColors={blueActiveColors}
          handleClick={() => dispatch({ type: 'activate_account' })}
          isActive={!state.active}
        />
        <Button
          buttonText="Deposit $100"
          activeColors={greenActiveColors}
          handleClick={() => dispatch({ type: 'deposit' })}
          isActive={state.active}
        />
        <Button
          buttonText="Withdraw $50"
          activeColors={greenActiveColors}
          handleClick={() => dispatch({ type: 'withdraw' })}
          isActive={state.active}
        />
        <Button
          buttonText="Request $5000 loan"
          activeColors={greenActiveColors}
          handleClick={() => dispatch({ type: 'request_loan' })}
          isActive={state.active}
        />
        <Button
          buttonText="Repay loan"
          activeColors={greenActiveColors}
          handleClick={() => dispatch({ type: 'repay_loan' })}
          isActive={state.balance > state.loan && state.loan !== 0}
        />
        <Button
          buttonText="Close Account"
          activeColors={redActiveColors}
          handleClick={() => dispatch({ type: 'deactivate_account' })}
          isActive={state.active && state.loan === 0}
        />
      </main>
    </div>
  );
}
