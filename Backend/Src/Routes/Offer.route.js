import { Router } from "express";
import { AuthMiddelware } from "../Middelware/AuthMiddelware.js";
import { AdminMiddelware } from "../Middelware/AdminMiddelware.js";
import {
  Delete_offer,
  Get_all_offer,
  Get_Offer_by_id,
  Offer_create_controler,
} from "../Controler/Offer.controler.js";

const router = Router();

router
  .route("/create")
  .post(AuthMiddelware, AdminMiddelware, Offer_create_controler);
// second
router.route("/getall").get(AuthMiddelware, AdminMiddelware, Get_all_offer);
//third
router
  .route("/get_by_id/:id")
  .get(AuthMiddelware, AdminMiddelware, Get_Offer_by_id);
// fourth
router.route("/delete/:id").put(AuthMiddelware, AdminMiddelware, Delete_offer);
export default router;
