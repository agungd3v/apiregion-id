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
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
class Controller {
    provinces(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, helpers_1.getProvince)(request.query);
                return response.status(200).json({ message: "Successfully get provinces", data: data });
            }
            catch (error) {
                return response.status(400).json({ message: error.toString() });
            }
        });
    }
    regencies(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, helpers_1.getRegency)(request.query);
                return response.status(200).json({ message: "Successfully get regencies", data: data });
            }
            catch (error) {
                return response.status(400).json({ message: error.toString() });
            }
        });
    }
    districts(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, helpers_1.getDistrict)(request.query);
                return response.status(200).json({ message: "Successfully get districts", data: data });
            }
            catch (error) {
                return response.status(400).json({ message: error.toString() });
            }
        });
    }
    villages(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, helpers_1.getVillage)(request.query);
                return response.status(200).json({ message: "Successfully get villages", data: data });
            }
            catch (error) {
                return response.status(400).json({ message: error.toString() });
            }
        });
    }
    postalcode(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { province, regency, district, village } = request.body;
                if (!province)
                    throw "Error, province required";
                if (!regency)
                    throw "Error, regency required";
                if (!district)
                    throw "Error, district required";
                if (!village)
                    throw "Error, village required";
                const data = yield (0, helpers_1.getPostalcode)(Object.assign({}, request.body));
                return response.status(200).json({ message: "Successfully get postalcode", data: data });
            }
            catch (error) {
                return response.status(400).json({ message: error.toString() });
            }
        });
    }
}
exports.default = new Controller();
