import * as types from '../buildTypes/buildTypes';

/**
 * sets the value of the specified Storage Object item
 * @param  {string} key
 * @param  {types.Item[]} items
 */
export function setData(key: string, items: types.Item[]): void {
  localStorage.setItem(key, JSON.stringify(items));
}

/**
 * returns value of the specified Storage Object item
 * @param  {string} key
 */
export function getData(key: string): [] {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch (error) {
    return [];
  }
}
