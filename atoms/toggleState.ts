import { atom } from 'recoil';

const toggleStateAtom = atom<boolean>({
    key: 'toggleState',
    default: false,
})  ;

export default toggleStateAtom;