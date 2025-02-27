'use client';

import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { clsx } from 'clsx';

type ButtonProps = {
  isActive: boolean;
  activeColors: ActiveColors;
  buttonText: string;
  handleClick: () => void;
};

type ActiveColors = {
  text: string;
  dark: string;
  light: string;
};

const inactiveColors = {
  text: 'text-white',
  dark: 'bg-blue-600',
  light: 'bg-blue-400',
};

export default function Button({
  isActive,
  activeColors,
  buttonText,
  handleClick,
}: ButtonProps) {
  const colorClass = isActive ? activeColors : inactiveColors;
  return (
    <button
      aria-label={buttonText}
      className={clsx(
        'font-bold capitalize text-2xl flex flex-row rounded-2xl overflow-hidden mb-5',
        colorClass.text
      )}
      onClick={() => handleClick()}
    >
      <div className={clsx('p-5 flex', colorClass.dark)}>
        <RiMoneyDollarCircleFill className="self-center text-4xl" />
      </div>
      <div className={clsx('flex w-72 justify-center', colorClass.light)}>
        <div className="self-center">{buttonText}</div>
      </div>
    </button>
  );
}
