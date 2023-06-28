const express = require("express");

const router = express.Router();

const mobileControllers = require("./controllers/mobileControllers");

router.get("/home", (req, res) => {
  try {
    res.status(200).send("Hello world !");
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
});

router.get("/mobiles", mobileControllers.browse);
router.get("/mobiles/:id", mobileControllers.read);
router.put("/mobiles/:id", mobileControllers.edit);
router.post("/mobiles", mobileControllers.add);
router.delete("/mobiles/:id", mobileControllers.destroy);

module.exports = router;
