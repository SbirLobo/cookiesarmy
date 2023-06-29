const models = require("../models");

const browse = async (req, res) => {
  try {
    const [mobile] = await models.mobile.findAll();
    res.status(200).json(mobile);
  } catch (err) {
    res.status(500).send("Oups, le serveur est en panne");
  }
};

const read = async (req, res) => {
  const { id } = req.params;
  try {
    const [mobile] = await models.mobile.find(id);
    res.status(200).json(mobile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Oups, le serveur est en panne");
  }
};

const edit = (req, res) => {
  const mobile = req.body;

  mobile.id = parseInt(req.params.id, 10);

  models.mobile
    .update(mobile)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res
          .send(204)
          .json({ message: "Les informations ont bien été modifiées" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  const mobile = req.body;

  try {
    const create = await models.mobile.insert(mobile);
    if (create[0].affectedRows === 1) {
      res.status(200).json({ message: "Le téléphone a bien été enregistré" });
    } else {
      res
        .status(500)
        .json({ message: "Nous n'avons pas pu ajouter le téléphone" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Oups, le serveur est en panne");
  }
};

const destroy = (req, res) => {
  models.mobile
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(204).json({ message: "Le téléphone a bien été supprimé" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
