"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => res.status(200).json({ message: "api wilayah indonesia" }));
router.get("/api", (req, res) => res.status(200).json({ message: "api wilayah indonesia" }));
router.get("/api/province", controllers_1.default.provinces);
router.get("/api/regency", controllers_1.default.regencies);
router.get("/api/district", controllers_1.default.districts);
router.get("/api/village", controllers_1.default.villages);
router.post("/api/postalcode", controllers_1.default.postalcode);
exports.default = router;
