const models = require("../models");

const browse = async (req, res) => {
  try {
    const [mobile] = await models.mobile.findAll();
    res.status(200).json({ mobile });
  } catch (err) {
    res.status(500).send("Oups, le serveur est en panne");
  }
};

const read = async (req, res) => {
  const { id } = req.params;
  try {
    const [mobile] = await models.mobile.find(id);
    res.status(200).json({ mobile });
  } catch (err) {
    console.error(err);
    res.status(500).send("Oups, le serveur est en panne");
  }
};

const edit = async (req, res) => {
  const mobile = req.body;

  mobile.id = parseInt(req.params.id, 10);
  // const { id } = req.params.id;

  try {
    const update = await models.mobile.update(mobile);

    if (update[0].affectedRows === 1) {
      res.status(200).json({ message: "Les informations ont été modifiées" });
    } else {
      res
        .status(500)
        .json({ message: "Nous n'avons pas pu modifier les informations" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Oups, le serveur est en panne");
  }
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
        res.sendStatus(204);
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
