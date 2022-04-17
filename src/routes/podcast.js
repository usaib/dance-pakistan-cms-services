import express from "express";

import * as PodcastController from "../controllers/Podcasts/PodcastController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/getAllPodcasts", PodcastController.allPodcasts);
router.post("/createPodcast", PodcastController.create);
router.post("/deletePodcast", PodcastController.remove);
router.post("/updatePodcast", PodcastController.update);
module.exports = router;
