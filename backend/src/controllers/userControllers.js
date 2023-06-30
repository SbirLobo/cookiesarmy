const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAllUser()
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const read = (req, res) => {
  models.user
    .findUser(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.json(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const edit = (req, res) => {
  const user = req.body;

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.location(`/users/${req.params.id}`).sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const add = (req, res) => {
  const user = req.body;

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oups, le serveur est en panne");
    });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(204).json({ message: "L'utilisateur a bien été supprimé" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const logout = (req, res) => {
  res.clearCookie("appjwt").status(200).json({ message: "User logged out" });
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
  logout,
};
