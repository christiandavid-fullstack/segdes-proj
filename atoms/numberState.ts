import { atom } from 'recoil';

const numberStateAtom = atom<number>({
    key: 'numberState',
    default: 0,
})
export default numberStateAtom;