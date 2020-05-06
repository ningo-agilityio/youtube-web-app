import * as storage from '../storage/storage';
import * as types from '../buildTypes/buildTypes';

/**
 * find item with condition (item.id === id)
 * @param  {(types.Item)[]} list
 * @param  {number} id
 */
export function findItemById(list: types.Item[], id: number) {
  return list.find((item) => item.id === id);
}

/**
 * filter item by key with condition (item.key !== value)
 * @param  {types.Todo[]} list
 * @param  {string} value
 */
export function filterItemByKey(list: types.Todo[], value: string) {
  return list.filter((item) => item.key !== value);
}

export function filterItemByProp(
  list: types.Item[],
  prop: string,
  value: string
) {
  return list.filter((item) => (item as any)[prop] === value);
}

/**
 * push item into list
 * @param  {types.Item[]} list
 * @param  {types.Item[]} data
 * @param  {types.ConstructList} constructor
 */
export function pushItem(
  list: types.Item[],
  data: types.Item[],
  constructor: types.ConstructList
) {
  // eslint-disable-next-line no-param-reassign
  list.length = 0;
  for (let i = 0; i < data.length; i++) {
    const newList = new constructor(data[i]);
    list.push(newList);
  }
}

/**
 * check status todo: if active then change completed and vice versa
 * @param  {types.Item} item
 */
export function checkStatus(item: types.Item): types.Status {
  // eslint-disable-next-line no-param-reassign
  item.status =
    item.status === types.Status.Active
      ? types.Status.Completed
      : types.Status.Active;
  return item.status;
}

/** convert date input to dd-mm-yyyy format
 * @param  {string} dateInput
 */
export function convertDate(dateInput: string) {
  const input = dateInput;
  const now = new Date(input);
  const day = (`0${  now.getDate()}`).slice(-2);
  const month = (`0${  now.getMonth() + 1}`).slice(-2);
  return `${day  }-${  month  }-${  now.getFullYear()}`;
}

/**
 * Get list of todo data from local storage
 * @param  {string} key
 * @param  {types.ItemList} list
 * @param  {types.ConstructList} typeConstruct
 */
export function pushDataLocalToList(
  key: string,
  list: types.Item[],
  typeConstruct: types.ConstructList
) {
  if (storage.getData(key)) {
    const data = storage.getData(key);
    pushItem(list, data, typeConstruct);
  }
}
