const register = async (req, res) => {
  res.send('This is register route');
};
const login = async (req, res) => {
  res.send('This is login route');
};
const updateUser = async (req, res) => {
  res.send('This is update user route');
};
const deleteUser = async (req, res) => {
  res.send('This is delete user route');
};

export { register, login, updateUser, deleteUser };
