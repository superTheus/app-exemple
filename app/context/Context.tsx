import React from 'react';

export interface IContext {
  data: number;
  setData: (value: any) => void;
}

const Context = React.createContext<IContext>({
  data: 1,
  setData: () => { },
});
export default Context;