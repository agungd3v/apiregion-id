import { Request, Response } from "express";
import { getDistrict, getProvince, getRegency, getVillage } from "../helpers";

class Controller {
  async provinces(request: Request, response: Response) {
    try {
      const data = await getProvince();
      return response.status(200).json({message: "Successfully get provinces", data: data});
    } catch (error: any) {
      return response.status(400).json({message: error.toString()});
    }
  }
  async regencies(request: Request, response: Response) {
    try {
      const province_id: any = request.query.id;
      const data = await getRegency(province_id);
      return response.status(200).json({message: "Successfully get regencies", data: data});
    } catch (error: any) {
      return response.status(400).json({message: error.toString()});
    }
  }
  async districts(request: Request, response: Response) {
    try {
      const regency_id: any = request.query.id;
      const data = await getDistrict(regency_id);
      return response.status(200).json({message: "Successfully get districts", data: data});
    } catch (error: any) {
      return response.status(400).json({message: error.toString()});
    }
  }
  async villages(request: Request, response: Response) {
    try {
      const district_id: any = request.query.id;
      const data = await getVillage(district_id);
      return response.status(200).json({message: "Successfully get villages", data: data});
    } catch (error: any) {
      return response.status(400).json({message: error.toString()});
    }
  }
}

export default new Controller();
