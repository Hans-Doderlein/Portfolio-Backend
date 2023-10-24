const router = require("express").Router();
const mailRoute = require("./mailer");
router.use("/contact/mailer", mailRoute);

module.exports = router;
