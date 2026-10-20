import {
  ref,
  push,
  onValue,
  query,
  orderByChild,
  limitToLast,
  serverTimestamp,
} from 'firebase/database';
import { db } from '../firebase';

const messagesRef = ref(db, 'messages');

export async function sendMessage(user, text) {
  const cleanText = (text || '').trim();
  const cleanUser = (user || '').trim();

  if (!cleanUser || !cleanText) {
    throw new Error('El usuario y el mensaje no pueden estar vacíos');
  }

  await push(messagesRef, {
    user: cleanUser,
    text: cleanText,
    timestamp: serverTimestamp(),
  });
}

export function listenMessages(callback) {
  const messagesQuery = query(
    messagesRef,
    orderByChild('timestamp'),
    limitToLast(100)
  );

  const unsubscribe = onValue(messagesQuery, (snapshot) => {
    const data = snapshot.val() || {};

    const list = Object.entries(data)
      .map(([id, msg]) => ({ id, ...msg }))
      .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

    callback(list);
  });

  return unsubscribe;
}