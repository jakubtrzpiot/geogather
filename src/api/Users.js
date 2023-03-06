import * as SecureStore from 'expo-secure-store';

const storeUserData = async data => {
  await SecureStore.setItemAsync('user', JSON.stringify(data));
};

const getUserData = async () => {
  const user = await SecureStore.getItemAsync('user');
  return JSON.parse(user);
};

const isLoggedIn = async () => {
  const user = await getUserData();
  return user !== null;
};

export { storeUserData, getUserData, isLoggedIn };
