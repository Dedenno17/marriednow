'use client';

import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { motion } from 'framer-motion';

interface Props {
  currentPage: number;
  pageData: string[];
  className?: string;
  style?: any;
  arrowBack?: boolean;
  onBack?: () => void;
}

const ProgressBar: React.FC<Props> = ({
  currentPage,
  pageData,
  className,
  style,
  arrowBack,
  onBack,
}) => {
  return (
    <div
      className={`w-full flex items-center py-2 relative bg-transparent ${className}`}
      style={style}
    >
      {arrowBack && (
        <BsArrowLeftShort
          className='text-[1.8rem] text-darkBlue cursor-pointer mr-4'
          onClick={onBack}
        />
      )}
      <div className='relative'>
        {/* LINE BAR */}
        <div className='w-full absolute top-1/2 -translate-y-1/2 h-[0.16rem] bg-black/20 -z-20' />
        <motion.div
          className={`absolute top-1/2 -translate-y-1/2 h-[0.16rem] bg-darkBlue -z-10`}
          initial={{ width: 0 }}
          animate={{
            width: `${
              Math.round((100 / pageData.length) * currentPage) -
              100 / pageData.length
            }%`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* NUMBER & TITLE PAGE */}
        <ul className='flex gap-12 items-center bg-transparent'>
          {pageData.map((item: string, i: number) => (
            <li
              key={Math.random() + i + ''}
              className='flex items-center gap-4 bg-white px-2 rounded-lg'
            >
              <div className='flex items-center gap-2'>
                <div
                  className={`w-6 h-6 rounded-full text-xs flex items-center justify-center border-[2px] transition duration-500 ${
                    currentPage >= i + 1
                      ? 'bg-darkBlue border-darkBlue text-white'
                      : 'bg-white border-black/10 text-black/20'
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`text-sm font-bold ${
                    currentPage >= i + 1 ? 'text-darkBlue' : 'text-black/20'
                  }`}
                >
                  {item}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressBar;
