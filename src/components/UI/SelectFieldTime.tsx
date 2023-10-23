'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LuClock } from 'react-icons/lu';
import Button from './Button';

interface Props {
  label: string;
  name?: string;
  id: string;
  placeholder: string;
  className?: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChooseTime: (time: string) => void;
  invalid?: boolean;
}

const SelectFieldTime: React.FC<Props> = ({
  label,
  id,
  placeholder,
  className,
  value,
  onChooseTime,
  invalid = false,
}) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);

  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);

  //   SET TIME FUNCTION
  const handleSetTime = () => {
    if (!hour) return;

    if (!minute) {
      const time = `${
        (hour + '').length > 1 ? hour + '' : '0' + (hour + '')
      } : ${'00'}`;
      onChooseTime(time);
      setIsShowDropdown(!isShowDropdown);
    } else {
      const time = `${
        (hour + '').length > 1 ? hour + '' : '0' + (hour + '')
      } : ${(minute + '').length > 1 ? minute + '' : '0' + (minute + '')}`;
      onChooseTime(time);
      setIsShowDropdown(!isShowDropdown);
    }
  };

  const toggleDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  useEffect(() => {
    // Add a click event listener to the document to handle clicks outside the dropdown.
    const handleClickOutside = (event: any) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts.
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex flex-col gap-2 relative ${className}`}
      ref={dropDownRef}
    >
      {label && (
        <label htmlFor={id} className='text-sm font-bold text-primaryBlack'>
          {label}
        </label>
      )}
      <div
        className={`w-full flex items-center justify-between py-4 px-6 border-[1px] rounded-lg text-xs outline-none bg-white cursor-pointer ${
          invalid ? 'border-red-500' : 'border-black/20'
        }`}
        onClick={toggleDropdown}
      >
        <span className={`${value ? 'text-black' : 'text-black/50'}`}>
          {!value ? placeholder : value}
        </span>
        <LuClock className='text-lg' />
      </div>

      {/* DROPDOWN */}
      {isShowDropdown && (
        <div className='absolute top-[110%] w-full left-0 border-[1px] border-black/10 p-5 box-border bg-white shadow-lg rounded-lg z-10'>
          <div className='w-full flex items-center gap-6'>
            {/* HOUR */}
            <div className='w-1/2'>
              <h3 className='text-center py-2 font-bold text-darkBlue mb-2'>
                Hour
              </h3>
              <ul className='w-full flex flex-col h-[200px] overflow-y-auto px-2'>
                {Array.from({ length: 17 }, (_, i) => i + 6).map(
                  (item, idx) => (
                    <li
                      key={idx}
                      className={`w-full text-center py-3 text-sm border-b-[1px] border-b-black/5 hover:bg-black/5 cursor-pointer ${
                        idx === 0 ? 'border-t-[1px] border-t-black/5' : ''
                      } ${hour === item ? 'bg-black/5' : 'bg-white'}`}
                      onClick={() => setHour(item)}
                    >
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* MINUTE */}
            <div className='w-1/2'>
              <h3 className='text-center py-2 font-bold text-darkBlue mb-2'>
                Minute
              </h3>
              <ul className='w-full flex flex-col h-[200px] overflow-y-auto px-2'>
                {Array.from({ length: 12 }, (_, i) => i * 5).map(
                  (item, idx) => (
                    <li
                      key={idx}
                      className={`w-full text-center py-3 text-sm border-b-[1px] border-b-black/5 hover:bg-black/5 cursor-pointer ${
                        idx === 0 ? 'border-t-[1px] border-t-black/5' : ''
                      } ${minute === item ? 'bg-black/5' : 'bg-white'}`}
                      onClick={() => setMinute(item)}
                    >
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* BUTTON */}
          <div className='w-full flex items-center justify-end'>
            <Button
              type='button'
              variants='primary'
              className='text-xs mt-4'
              onClick={handleSetTime}
            >
              Set Time
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectFieldTime;
