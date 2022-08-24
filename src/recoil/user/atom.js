import { atom } from 'recoil';

const userAtom = atom({
  key: 'userAtom',
  default: JSON.parse(window.localStorage.getItem('user')),
});

export default userAtom;
