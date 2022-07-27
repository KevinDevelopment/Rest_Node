const express = require("express");
const router = express.Router();
const Users = require("../model/User");
const bcrypt = require("bcrypt");

router.post("/register", async (request, response) => {

  const { nome_completo, email, password } = request.body;
  const hash = await bcrypt.hash(password, 10);

  const findUser = await Users.findOne({
    attributes: ['id', 'nome_completo', 'email', 'password'],
    where: {
      email: email
    }
  });

  if (!findUser) {
    const create = Users.create({

      nome_completo: nome_completo,
      email: email,
      password: hash

    }).then((user) => {
      
      return response.status(200).json({
        message: "user registered successfully",
        User: user
      })

    })
  }
  else {

    return response.status(400).json({
      message: "there is already a registered user with this email"
    })
   
  }

})

module.exports = router;

