import * as copy from "copy-to-clipboard";
import { classNameMenuItem, classNameMenuItemSource } from "./consts";
import { formatSourceHtml } from "../../helpers/parse-mmd-element";

export const getMenuItems = () => {
  return document.querySelectorAll(`.${classNameMenuItem}`);
};

export const getMenuItemActive = () => {
  return document.querySelector(`.${classNameMenuItem}.active`);
};

export const findIndexActiveItem = (elem, items?) => {
  if (!elem || !items || !items.length) {
    return -1;
  }
  
  for (let i = 0; i < items.length; i++) {
    if (items[i] === elem) {
      return i;
    }
  }
  return -1;
};

export const clearActiveItem = () => {
  const items = document.querySelectorAll(`.${classNameMenuItem}.active`);
  if (!items || !items.length) {
    return;
  }

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }
};

export const chooseItem = (el) => {
  try {
    if (!el) {
      return;
    }
    
    const elSource = el.querySelector(`.${classNameMenuItemSource}`);
    if (elSource) {
      let source = elSource.innerHTML;
      source = source ? formatSourceHtml(source) : '';
      copy(source);
    }
    
    if (!el.classList.contains('active')) {
      el.classList.add('active');
    }
    
  } catch (err) {
    console.error(err);
  }
};

export const chooseNextItem = () => {
  const items = getMenuItems();
  if (!items || !items.length) {
    return;
  }
  
  let elActive = getMenuItemActive();
  let index = findIndexActiveItem(elActive, items);
  const len = items && items.length ? items.length - 1 : 0;
  
  if (elActive) {
    index++;
    elActive.classList.remove('active');
    const next = items[index];

    if (typeof next !== undefined && index <= len) {
      elActive = next;
    } else {
      elActive = items[0];
    }

    chooseItem(elActive);
  } else {
    chooseItem(items[0]);
  }
};

export const choosePreviousItem = () => {
  const items = getMenuItems();
  if (!items || !items.length) {
    return;
  }

  let elActive = getMenuItemActive();
  let index = findIndexActiveItem(elActive, items);
  const len = items && items.length ? items.length - 1 : 0;

  if (elActive) {
    index--;
    elActive.classList.remove('active');
    const next = items[index];

    if (typeof next !== undefined && index >= 0) {
      elActive = next;
    } else {
      elActive = items[len];
    }
    chooseItem(elActive);
  } else {
    chooseItem(items[len]);
  }
};