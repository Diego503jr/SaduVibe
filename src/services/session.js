import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "session_username";

export const saveSession = (username) => AsyncStorage.setItem(KEY, username);
export const getSession = () => AsyncStorage.getItem(KEY);
export const clearSession = () => AsyncStorage.removeItem(KEY);
