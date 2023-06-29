const express = require("express");

const router = express.Router();

const mobileControllers = require("./controllers/mobileControllers");
const userControllers = require("./controllers/userControllers");
const { newUser, recognizeUser } = require("./middleware/userMiddlewares");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./controllers/authControllers");

router.post("/login", recognizeUser, verifyPassword);
router.get("/logout", userControllers.logout);

router.post("/users", newUser, hashPassword, userControllers.add);
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

router.get("/mobiles", mobileControllers.browse);
router.get("/mobiles/:id", mobileControllers.read);
router.put("/mobiles/:id", mobileControllers.edit);
router.post("/mobiles", mobileControllers.add);
router.delete("/mobiles/:id", mobileControllers.destroy);

router.use(verifyToken);

router.get("/dashboard", (req, res) => {
  try {
    res.json("Access granted");
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
});

module.exports = router;
