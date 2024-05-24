export const strToLowercase = (str) => str.toLowerCase();

export const isEmptyObject = (val) => isNullOrEmpty(val) || (val && Object.keys(val).length === 0);

export const isEmptyArray = (val) => val && !val.length;

export const isNullOrEmpty = (str) => !str;

export const hasText = (str) => !!(str && str.trim() !== '');

export const hasNoText = (str) => !(str && str.trim() !== '');

export const parseStr = (str, replaceStr = '') => isNullOrEmpty(str) ? replaceStr : str;

export const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };