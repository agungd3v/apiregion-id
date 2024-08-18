import { Router, Response } from "express";
import controller from "../controller";

const router = Router();

router.get("/api", (req, res: Response) => res.status(200).json({message: "api wilayan indonesia"}));
router.get("/api/province", controller.provinces);
router.get("/api/regency", controller.regencies);
router.get("/api/district", controller.districts);
router.get("/api/village", controller.villages);

export default router;
