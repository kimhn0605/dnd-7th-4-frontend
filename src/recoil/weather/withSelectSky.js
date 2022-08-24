import { selector } from 'recoil';

import tabMenuAtom from '../tabMenu';
import weatherAtom from './atom';

const skyWithSelect = selector({
  key: 'skyWithSelect',
  get: ({ get }) => {
    const tabMenuName = get(tabMenuAtom);
    let skyState = get(weatherAtom)?.data?.오늘?.배경이미지;
    switch (tabMenuName) {
      case '오늘':
        skyState = get(weatherAtom)?.data?.오늘?.배경이미지;
        break;
      case '내일':
        skyState = get(weatherAtom)?.data?.내일?.배경이미지;
        break;
      case '이번주':
        skyState = '이번주';
        break;
      default:
    }
    return skyState;
  },
});

export default skyWithSelect;
