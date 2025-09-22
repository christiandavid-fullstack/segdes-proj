import { atom } from 'recoil';

const textStateAtom = atom<string>({
    key: 'textState',
    default: "",
})

export default textStateAtom;