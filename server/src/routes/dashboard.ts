import { genConsensus, keyWord, ratings, sentiments } from "../controllers/dashboard";
import express from "express";



export default (router: express.Router) => {
  router.get("/dashboard/ratings/:name",ratings);
  router.get("/dashboard/sentiments/:name",sentiments);
  router.get("/dashboard/consensus/:name",genConsensus);
  router.get("/dashboard/keyword/:name",keyWord);
};
