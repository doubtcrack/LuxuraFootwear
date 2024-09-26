/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useContext, useState } from 'react';

export const ShopContext = createContext()

export function ShopContextProvider({ children }) {
  return <ShopContext.Provider>{children}</ShopContext.Provider>
}