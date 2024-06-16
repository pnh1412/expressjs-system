const UserModel = require('../models/user.model');

module.exports = {
  create: (payload = {}) => {
    // TODO: check email existed
    const user = new UserModel({
      first_name: payload.first_name,
      last_name: payload.last_name,
      email: payload.email,
      password:payload.password
    })
    return user.save();
  },

  findAll: async () => {
    const users = await UserModel.find().sort({ data: -1 });
    return users
  }
}