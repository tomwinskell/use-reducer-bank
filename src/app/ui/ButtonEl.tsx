'use client';
import { clsx } from 'clsx';
import { ButtonProps } from '@/app/lib/definitions';

const inactiveClasses = {
  text: 'text-slate-800 cursor-not-allowed',
  dark: 'bg-slate-600',
  light: 'bg-slate-400',
};

const otherActiveClasses = {
  text: 'text-white cursor-pointer',
};

export default function Button({
  isActive,
  activeColors,
  icon,
  buttonText,
  handleClick,
}: ButtonProps) {
  const colorClass = isActive
    ? { ...activeColors, ...otherActiveClasses }
    : inactiveClasses;
  return (
    <button
      aria-label={buttonText}
      className={clsx(
        'font-bold capitalize text-2xl flex flex-row rounded-2xl overflow-hidden mb-5',
        colorClass.text
      )}
      onClick={() => handleClick()}
      disabled={!isActive}
    >
      <div className={clsx('p-5 flex', colorClass.dark)}>
        <span className="self-center text-4xl">{icon}</span>
      </div>
      <div className={clsx('flex w-72 justify-center', colorClass.light)}>
        <div className="self-center">{buttonText}</div>
      </div>
    </button>
  );
}
