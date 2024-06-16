const services = require('../services/user.service');

module.exports = {
  getUsers: async (req, res) => {
    // get param: req.param
    // get  body data: req.body.data
    // res: res.status(200).json({ ... })
    try {
      const data = await services.findAll();
      res.status(200).json({
        isSuccess: true,
        msg: 'Get user successfully!',
        data
      })
    } catch(error) {
      res.status(500).json({
        isSuccess: false,
        msg: 'Server Error!',
      })
    }
  },

  createUser: async (req, res) => {
    const payload = {
      first_name: req.body.data.first_name || '',
      last_name: req.body.data.last_name || '',
      email: req.body.data.email || '',
      password: req.body.data.password || ''
    }

    try {
      const data = await services.create(payload);
      res.status(200).json({
        isSuccess: true,
        msg: 'Created user successfully!',
        data
      })
    } catch(error) {
      res.status(500).json({
        isSuccess: false,
        msg: 'Server Error!',
      })
    }
  }
}