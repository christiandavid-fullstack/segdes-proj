import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyBhzP6AR-FaWxSwMo3nyscoQJ3cmNENhrA',
  authDomain: 'esim-mobile-app-9fb5a.firebaseapp.com',
  projectId: 'esim-mobile-app-9fb5a',
  appId: '1:223377014356:android:8df8381993d80a644a37c1',
});

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});


// // firebaseConfig.ts
// import { initializeApp } from 'firebase/app';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const firebaseApp = initializeApp({
//   apiKey: 'AIzaSyBhzP6AR-FaWxSwMo3nyscoQJ3cmNENhrA',
//   authDomain: 'esim-mobile-app-9fb5a.firebaseapp.com',
//   projectId: 'esim-mobile-app-9fb5a',
//   appId: '1:223377014356:android:8df8381993d80a644a37c1',
// });
// export const auth = getAuth(firebaseApp);
