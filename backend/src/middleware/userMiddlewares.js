const models = require("../models");

const newUser = (req, res, next) => {
  models.user
    .findByMail(req.body)
    .then(([rows]) => {
      if (rows.length > 0) {
        res.json("User already exists");
      } else {
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const recognizeUser = (req, res, next) => {
  models.user
    .findByMail(req.body)
    .then(([user]) => {
      if (user[0] != null) {
        [req.user] = user;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  newUser,
  recognizeUser,
};
