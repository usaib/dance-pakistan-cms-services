import express from "express";

import * as DocumentaryController from "../controllers/Documentaries/DocumentaryController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post(
	"/getAllDocumentaries",

	DocumentaryController.allDocumentaries
);
router.post("/createDocumentary", DocumentaryController.create);
router.post("/deleteDocumentary", DocumentaryController.remove);
router.post("/updateDocumentary", DocumentaryController.update);
module.exports = router;
