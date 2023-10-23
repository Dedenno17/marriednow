import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className='py-8 max-w-[1200px] mx-auto'>{children}</div>;
};

export default Container;
