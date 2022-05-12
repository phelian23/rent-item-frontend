const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

const clearSession = () => {
  localStorage.clear();
};

export { getToken, clearSession };
