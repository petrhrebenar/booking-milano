import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "prenota-milano",
  appId: "1:726263426259:web:c4a360e4bf45641c247826",
  storageBucket: "prenota-milano.firebasestorage.app",
  apiKey: "AIzaSyAR1kLHm0lDNEwcqWqcFOdLPENgELWy_o8",
  authDomain: "prenota-milano.firebaseapp.com",
  messagingSenderId: "726263426259",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
