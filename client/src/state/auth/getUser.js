function getLocalStorageItem(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}


function isAuth(){
    const token = getLocalStorageItem("myData");
    const tokenS = token.tokenFront;
    
}