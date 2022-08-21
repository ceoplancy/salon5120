import { atom } from 'recoil';

export const filterStateAtom = atom({
  key: 'filterState',
  default: 'all',
});

export const toastStateAtom = atom({
  key: 'toastState',
  default: false,
});
