'use client';
import { useReducer } from 'react';
import Button from '@/app/ui/Button';
import { reducer } from '@/app/lib/reducer';
import {
  blueActiveColors,
  greenActiveColors,
  redActiveColors,
} from '@/app/lib/colors';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { PiHandDepositFill, PiHandWithdraw } from 'react-icons/pi';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import { IoCloseCircle } from 'react-icons/io5';

export default function Home() {
  const initialState = {
    active: false,
    balance: 500,
    loan: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const buttons = [
    {
      buttonText: 'Open Account',
      activeColors: blueActiveColors,
      icon: <RiMoneyDollarCircleFill />,
      handleClick: () => dispatch({ type: 'activate_account' }),
      isActive: !state.active,
    },
    {
      buttonText: 'Deposit $100',
      activeColors: greenActiveColors,
      icon: <PiHandDepositFill />,
      handleClick: () => dispatch({ type: 'deposit' }), // Using string literals for action types
      isActive: state.active,
    },
    {
      buttonText: 'Withdraw $50',
      activeColors: greenActiveColors,
      icon: <PiHandWithdraw />,
      handleClick: () => dispatch({ type: 'withdraw' }), // Using string literals for action types
      isActive: state.active,
    },
    {
      buttonText: 'Request $5000 loan',
      activeColors: greenActiveColors,
      icon: <FaRegQuestionCircle />,
      handleClick: () => dispatch({ type: 'request_loan' }), // Using string literals for action types
      isActive: state.active,
    },
    {
      buttonText: 'Repay loan',
      activeColors: greenActiveColors,
      icon: <GiPayMoney />,
      handleClick: () => dispatch({ type: 'repay_loan' }), // Using string literals for action types
      isActive: state.balance > state.loan && state.loan !== 0,
    },
    {
      buttonText: 'Close Account',
      activeColors: redActiveColors,
      icon: <IoCloseCircle />,
      handleClick: () => dispatch({ type: 'deactivate_account' }), // Using string literals for action types
      isActive: state.active && state.loan === 0,
    },
  ];

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
        {buttons.map((v, i) => (
          <Button key={i} {...v} />
        ))}
      </main>
    </div>
  );
}
