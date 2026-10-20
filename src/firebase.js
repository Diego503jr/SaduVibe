// src/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDZT-QtwU9nM0vggNBcoKVAljAaskG-suw",
  authDomain: "chat-app-dama.firebaseapp.com",
  databaseURL: "https://chat-app-dama-default-rtdb.firebaseio.com",
  projectId: "chat-app-dama",
  storageBucket: "chat-app-dama.firebasestorage.app",
  messagingSenderId: "55647651036",
  appId: "1:55647651036:web:595c236dbcca4f88cca019",
  measurementId: "G-0DDJ086DTV"
};

// Evita inicializar Firebase dos veces (puede pasar con el Fast Refresh de Expo)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getDatabase(app);