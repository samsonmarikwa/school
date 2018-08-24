const router = require("express").Router();
const schoolController = require("../../controllers/schoolController");

// Matches with "/api/schoolrecords"
router.route("/person/")
  .post(schoolController.createPerson);

/*   
  .get(schoolController.findAll)
// Matches with "/api/schoolrecords/:id"
router.route("/:id")
  .get(schoolController.findById)
  .put(schoolController.update)
  .delete(schoolController.remove);

 */
module.exports = router;
