import { Request, Response } from "express";
import { getDistrict, getPostalcode, getProvince, getRegency, getVillage } from "../helpers";

class Controller {
  async provinces(request: Request, response: Response) {
    try {
      const data = await getProvince(request.query);
      return response.status(200).json({message: "Successfully get provinces", data: data});
    } catch (error: any) {
      return response.status(400).json({message: error.toString()});
    }
  }
  async regencies(request: Request, response: Response) {
    try {
      const data = await getRegency(request.query);
      return response.status(200).json({message: "Successfully get regencies", data: data});
    } catch (error: any) {
      return response.status(400).json({message: error.toString()});
    }
  }
  async districts(request: Request, response: Response) {
    try {
      const data = await getDistrict(request.query);
      return response.status(200).json({message: "Successfully get districts", data: data});
    } catch (error: any) {
      return response.status(400).json({message: error.toString()});
    }
  }
  async villages(request: Request, response: Response) {
    try {
      const data = await getVillage(request.query);
      return response.status(200).json({message: "Successfully get villages", data: data});
    } catch (error: any) {
      return response.status(400).json({message: error.toString()});
    }
  }
  async postalcode(request: Request, response: Response) {
    try {
      const {province, regency, district, village} = request.body;

      if (!province) throw "Error, province required";
      if (!regency) throw "Error, regency required";
      if (!district) throw "Error, district required";
      if (!village) throw "Error, village required";

      const data = await getPostalcode({...request.body});
      return response.status(200).json({message: "Successfully get postalcode", data: data});
    } catch (error: any) {
      return response.status(400).json({message: error.toString()});
    }
  }
}

export default new Controller();
