import React, { FC, ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div style={{ width: '80%', margin: '0 auto' }}>{children}</div>;
};
