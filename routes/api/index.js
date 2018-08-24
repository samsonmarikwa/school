const router = require("express").Router();
const personRoutes = require("./person");
const educationRoutes = require("./education");

// Person routes
router.use("/personrecords", personRoutes);

// Education routes
// router.use("/educationrecords", educationRoutes);

module.exports = router;
