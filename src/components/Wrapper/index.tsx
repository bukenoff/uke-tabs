import React, { FC } from 'react';

export const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={{ width: '80%', margin: '0 auto' }}>{children}</div>;
};
