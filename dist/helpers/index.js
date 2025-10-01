"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostalcode = exports.getVillage = exports.getDistrict = exports.getRegency = exports.getProvince = void 0;
const database_1 = __importDefault(require("../database"));
const getProvince = (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = yield database_1.default.client.collection("provinces").find({
            'l': { $regex: (_a = params.q) !== null && _a !== void 0 ? _a : '', $options: 'i' }
        });
        return data.toArray();
    }
    catch (error) {
        return [];
    }
});
exports.getProvince = getProvince;
const getRegency = (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const data = yield database_1.default.client.collection("regencies").find({
            'vp': { $regex: (_a = params.id) !== null && _a !== void 0 ? _a : '', $options: 'i' },
            'l': { $regex: (_b = params.q) !== null && _b !== void 0 ? _b : '', $options: 'i' }
        });
        return data.toArray();
    }
    catch (error) {
        return [];
    }
});
exports.getRegency = getRegency;
const getDistrict = (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const data = yield database_1.default.client.collection("districts").find({
            'vr': { $regex: (_a = params.id) !== null && _a !== void 0 ? _a : '', $options: 'i' },
            'l': { $regex: (_b = params.q) !== null && _b !== void 0 ? _b : '', $options: 'i' }
        });
        return data.toArray();
    }
    catch (error) {
        return [];
    }
});
exports.getDistrict = getDistrict;
const getVillage = (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const data = yield database_1.default.client.collection("villages").find({
            'vd': { $regex: (_a = params.id) !== null && _a !== void 0 ? _a : '', $options: 'i' },
            'l': { $regex: (_b = params.q) !== null && _b !== void 0 ? _b : '', $options: 'i' }
        });
        return data.toArray();
    }
    catch (error) {
        return [];
    }
});
exports.getVillage = getVillage;
const getPostalcode = (param) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (param.regency.split(".").length == 2) {
            param.regency = param.regency.split(". ")[1].trim();
        }
        if (param.regency.toLowerCase().split("kota").length == 2) {
            param.regency = param.regency.split("kota")[1].trim();
        }
        const jsonData = yield database_1.default.client.collection("postalcode").find({
            p: { $regex: param.province, $options: "i" },
            r: { $regex: param.regency, $options: "i" },
            v: { $regex: param.district, $options: "i" },
            d: { $regex: param.village, $options: "i" }
        }).toArray();
        return jsonData;
    }
    catch (error) {
        return [];
    }
});
exports.getPostalcode = getPostalcode;
