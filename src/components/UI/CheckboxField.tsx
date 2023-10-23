'use client';

import React from 'react';
import { LuCheck } from 'react-icons/lu';

interface Props {
  label?: string;
  id?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  className?: string;
  reverseLabel?: boolean;
}

const CheckboxField: React.FC<Props> = ({
  label,
  id,
  value,
  onChecked,
  checked,
  className,
  reverseLabel = false,
}) => {
  return (
    <div
      className={`${className} ${
        className ? '' : 'w-full'
      } flex gap-2 items-center`}
    >
      {reverseLabel && (
        <label
          htmlFor={id}
          className='text-xs font-normal text-primaryBlack cursor-pointer'
        >
          {label}
        </label>
      )}
      <div
        className={`relative w-4 h-4 border-[1px] border-black/20 rounded-sm flex items-center justify-center cursor-pointer ${
          checked ? 'bg-darkBlue' : 'bg-white'
        }`}
      >
        {checked && <LuCheck className='text-white text-xs' />}
        <input
          id={id}
          type='checkbox'
          value={value}
          checked={checked}
          onChange={onChecked}
          className='cursor-pointer opacity-0 absolute w-4 h-4 top-0 left-0'
        />
      </div>
      {!reverseLabel && (
        <label
          htmlFor={id}
          className='text-xs font-normal text-primaryBlack cursor-pointer'
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckboxField;
