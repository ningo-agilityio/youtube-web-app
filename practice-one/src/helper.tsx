import * as storage from './storage';
import * as types from './buildTypes';

/**
 * add class name for Element DOM
 * @param  {Element} element
 * @param  {string} name
 */
export function addClassName(element: Element, name: string) {
  element.classList.add(name);
}

/**
 * remove class name for Element DOM
 * @param  {Element} element
 * @param  {string} name
 */
export function removeClassName(element: Element, name: string) {
  element.classList.remove(name);
}

/**
 * find item with condition (item.id === id)
 * @param  {(types.Item)[]} list
 * @param  {number} id
 */
export function findItemById(list: (types.Item)[], id: number) {
  return list.find((item) => item.id === id);
}

/**
 * filter item by key with condition (!== value)
 * @param  {types.Todo[]} list
 * @param  {string} value
 */
export function filterItemByKey(list: types.Todo[], value: string) {
  return list.filter((item) => item.key === value);
}

/**
 * filter list todo with status: all / active / completed
 * @param  {types.Status} selectedFilter
 * @param  {types.Todo[]} list
 */
export function filterListByState(
  selectedFilter: types.Status,
  list: types.Todo[]
): types.Todo[] {
  return selectedFilter === 'ALL'
    ? list
    : list.filter((item: types.Todo) => item.status === selectedFilter);
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
  list.length = 0;
  for (let i = 0; i < data.length; i++) {
    let newList = new constructor(data[i]);
    list.push(newList);
  }
}

/**
 * check status todo: if active then change completed and vice versa
 * @param  {types.Item} item
 */
export function checkStatus(item: types.Item): types.Status {
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
  let input = dateInput;
  let now = new Date(input);
  let day = ('0' + now.getDate()).slice(-2);
  let month = ('0' + (now.getMonth() + 1)).slice(-2);
  return day + '-' + month + '-' + now.getFullYear();
}

/**
 * find id of element
 * @param  {Element} elementClicked
 * @param  {string} name
 */
export function findElementId(elementClicked: Element, name: string) {
  if (elementClicked.parentElement) {
    let id = elementClicked.classList.contains(name)
      ? parseInt(elementClicked.id)
      : parseInt(elementClicked.parentElement.id);
    return id;
  }
}

  /**
   * Get list of todo data from local storage
   * @param  {string} key
   * @param  {types.ItemList} list
   * @param  {types.ConstructList} typeConstruct
   */
  export function pushDataToList(
    key: string,
    list: types.ItemList,
    typeConstruct: types.ConstructList
  ) {
    if (storage.getData(key)) {
      let data = storage.getData(key);
      pushItem(list, data, typeConstruct);
    }
  }

