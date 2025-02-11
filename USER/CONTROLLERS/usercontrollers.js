const usermodel = require ('../models/usermodel');

const createuser = (req,res) => {
  const newuser = req.body;
  res.send('usuario $ {newuser.neme} criado com sucesso');
};

module.exports = {createUser};
