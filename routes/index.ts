import { Router, Request, Response } from "express";
import controller from "../controllers";

const router = Router();

router.get("/api", (req: Request, res: Response) => res.status(200).json({message: "api wilayan indonesia"}));
router.get("/api/province", controller.provinces);
router.get("/api/regency", controller.regencies);
router.get("/api/district", controller.districts);
router.get("/api/village", controller.villages);
router.post("/api/postalcode", controller.postalcode);

export default router;
