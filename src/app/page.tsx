'use client';

import { useState } from 'react';
import Button from './ui/button';

export default function Home() {
  const [accountActive, setAccountActive] = useState(false);
  const [balance, setBalance] = useState(500);
  const [loan, setLoan] = useState(0);

  const blueActiveColors = {
    text: 'text-slate-800',
    dark: 'bg-slate-600',
    light: 'bg-slate-400',
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <header className="mb-5">
        <div className="font-bold text-2xl text-center mb-3">
          useReducer Bank Acount
        </div>

        <p className="text-center">
          {accountActive ? (
            <>
              <span className="pe-3">Balance ${balance}</span>
              <span className="ps-3">Loan ${loan}</span>
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
          handleClick={() => setAccountActive(true)}
          isActive={accountActive}
        />
      </main>
    </div>
  );
}
