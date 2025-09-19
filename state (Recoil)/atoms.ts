import { atom } from 'recoil';

export const wizardCountriesState = atom<string[]>({
  key: 'wizardCountriesState',
  default: [],
});
export const selectedCountryState = atom<string | null>({
  key: 'selectedCountryState',
  default: null,
});