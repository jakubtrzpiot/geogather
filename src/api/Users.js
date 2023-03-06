const storeUserData = data => {
  //store user email and uid in expo secure store
  SecureStore.setItemAsync('user', JSON.stringify(data));
};
