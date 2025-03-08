import { openDB, DBSchema } from 'idb';

interface MyDB extends DBSchema {
  users: {
    key: string;
    value: { id: string; name: string };
  };
  contacts: {
    key: string;
    value: { id: string; name: string; email: string };
  };
  chats: {
    key: string;
    value: { id: string; message: string; timestamp: number };
  };
  feeds: {
    key: string;
    value: { id: string; content: string; timestamp: number };
  };
  settings: {
    key: string;
    value: { key: string; value: string };
  };
}

export const useIDB = () => {
  const dbPromise = openDB<MyDB>('CoSpace', 1, {
    upgrade(db) {
      db.createObjectStore('users', { keyPath: 'id' });
      db.createObjectStore('contacts', { keyPath: 'id' });
      db.createObjectStore('chats', { keyPath: 'id' });
      db.createObjectStore('feeds', { keyPath: 'id' });
      db.createObjectStore('settings', { keyPath: 'key' });
    },
  });

  const getCurrentUser = async () => {
    const db = await dbPromise;
    const userId = await db.get('settings', 'currentUserId');
    if (userId) {
      return db.get('users', userId.value);
    }
    return null;
  };

  const setCurrentUser = async (user: { id: string; name: string }) => {
    const db = await dbPromise;
    await db.put('users', user);
    await db.put('settings', { key: 'currentUserId', value: user.id });
  };

  const getContacts = async () => {
    const db = await dbPromise;
    return db.getAll('contacts');
  };

  const addContact = async (contact: { id: string; name: string; email: string }) => {
    const db = await dbPromise;
    await db.put('contacts', contact);
  };

  const getChats = async () => {
    const db = await dbPromise;
    return db.getAll('chats');
  };

  const addChat = async (chat: { id: string; message: string; timestamp: number }) => {
    const db = await dbPromise;
    await db.put('chats', chat);
  };

  const getFeeds = async () => {
    const db = await dbPromise;
    return db.getAll('feeds');
  };

  const addFeed = async (feed: { id: string; content: string; timestamp: number }) => {
    const db = await dbPromise;
    await db.put('feeds', feed);
  };

  return {
    getCurrentUser,
    setCurrentUser,
    getContacts,
    addContact,
    getChats,
    addChat,
    getFeeds,
    addFeed,
  };
};