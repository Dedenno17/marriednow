'use client';

import { format } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import { LuCalendarSearch } from 'react-icons/lu';

import 'react-day-picker/dist/style.css';

interface Props {
  label: string;
  name?: string;
  id: string;
  placeholder: string;
  fromDate: Date;
  //   selectedDay: Date;
  className?: string;
  value: Date | undefined;
  // eslint-disable-next-line no-unused-vars
  onChooseDate: SelectSingleEventHandler;
  invalid?: boolean;
}

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    background-color: #7286D3;
    color: white;
  }
  .my-selected:hover([disabled]) { 
    color: currentColor;
    border: 1px solid #000;
  }
`;

const SelectFieldDate: React.FC<Props> = ({
  label,
  id,
  placeholder,
  fromDate,
  //   selectedDay,
  className,
  value,
  onChooseDate,
  invalid = false,
}) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);

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
        }
      `}
        onClick={toggleDropdown}
      >
        <span className={`${value ? 'text-black' : 'text-black/50'}`}>
          {!value ? placeholder : format(value, 'dd MMMM yyyy')}
        </span>
        <LuCalendarSearch className='text-lg' />
      </div>

      {/* DROPDOWN */}
      {isShowDropdown && (
        <>
          <style>{css}</style>
          <DayPicker
            fromDate={fromDate}
            selected={value}
            numberOfMonths={1}
            onSelect={onChooseDate}
            mode='single'
            className='absolute top-[90%] w-full -left-4 border-[1px] border-black/10 flex items-center justify-center py-5 box-border bg-white shadow-lg rounded-lg z-10'
            modifiersClassNames={{
              selected: 'my-selected',
              today: 'my-today',
            }}
            styles={{
              caption_label: { fontSize: '16px' },
              caption: { marginBottom: '33px' },
              head: { color: '#8E8C9A' },
              head_cell: { textTransform: 'capitalize' },
            }}
          />
        </>
      )}
    </div>
  );
};

export default SelectFieldDate;
