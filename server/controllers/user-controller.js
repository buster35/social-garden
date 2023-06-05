const { User } = require('../models');
const jwt = require("jsonwebtoken");
require("dotenv").config()

// FYI: The user's password is encrypted at the model level

module.exports = {
  
  async createUser({ body }, res) {
    try{
      const user = await User.create(body);
      const { password, ...modifiedUser } = user;

      const token = jwt.sign({
        email: user.email,
        id: user._id
      }, process.env.JWT_SECRET)
  
      res.cookie("auth-cookie", token).json({ status: "success", payload: modifiedUser })
    } catch(err){
      return res.status(400).json({ status: "error", msg: `Error creating user: ${err.message}` });
    }
  },


  async authUser({ body }, res) {
    let user
    try {
      user = await User.findOne({ email: body.email});
    } catch(err){
      return res.status(400).json({ message: 'Unable to authenticate user' });
    }
    if (!user) return res.status(400).json({ message: 'Unable to authenticate user' });

    const isValid = await user.verify(body.password)
    if( !isValid ) return res.status(400).json({ message: 'Unable to authenticate user' });

    const token = jwt.sign({
      email: user.email,
      id: user._id
    }, process.env.JWT_SECRET)

    const { password, ...modifiedUser } = user;
    res.cookie("auth-cookie", token).json({ status: "success", payload: modifiedUser })
  },


  async verifyUser(req, res){
    const cookie = req.cookies["auth-cookie"]
    if( !cookie ) return res.status(401).json({msg: "un-authorized"})

    const isVerified = jwt.verify(cookie, process.env.JWT_SECRET)
    if( !isVerified ) return res.status(401).json({msg: "un-authorized"})

    const user = await User.findOne({ _id: isVerified.id }).select("-password")
    if( !user ) return res.status(401).json({msg: "authorized"})
    
    return res.status(200).json({ status: "success", payload: user })
  }

};
