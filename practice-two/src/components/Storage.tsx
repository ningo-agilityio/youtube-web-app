import { useState, useEffect } from 'react';
import * as types from '../buildTypes/buildTypes';

export const useLocalStorage = (key: string, initialValue: types.Issue[]) => {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem(key) || String(initialValue));
    } catch (error) {
      value = initialValue;
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  });

  return [state, setState];
};
