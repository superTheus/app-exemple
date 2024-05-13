import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState(1);

  return (
    <Context.Provider value={{ data, setData }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
