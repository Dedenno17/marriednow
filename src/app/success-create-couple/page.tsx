'use client';

import React, { useState } from 'react';

import { HiMiniClipboardDocumentList } from 'react-icons/hi2';
import { BsCheckLg } from 'react-icons/bs';

const SuccessCreateCouple = () => {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const base = 'http://localhost:3000';

  const links = base + '/example';
  const copylink = () => {
    setIsCopy(true);
    navigator.clipboard.writeText(links);
  };

  return (
    <div className='w-full min-h-screen pt-24 flex flex-col justify-center items-center gap-6'>
      <h1 className='text-[4rem] font-semibold text-center leading-[4.5rem] text-darkBlue mb-8'>
        Successfully Create <br />
        Invitation!
      </h1>
      <span className='text-xl text-primaryBlack'>Copy link down below</span>
      <div className='w-[500px] h-12 flex items-center'>
        <div className='px-4 h-full flex items-center w-[90%] border-[1px] border-black/20 rounded-l-md bg-black/5'>
          <p className='text-sm text-primaryBlack'>{links}</p>
        </div>
        <div
          className='w-[10%] h-full bg-darkBlue text-white cursor-pointer flex border-[1px] border-darkBlue rounded-r-md'
          onClick={copylink}
        >
          {isCopy ? (
            <BsCheckLg className='m-auto text-xl' />
          ) : (
            <HiMiniClipboardDocumentList className='m-auto text-xl' />
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessCreateCouple;
