import district from "../data/district";
import postalcode from "../data/postalcode";
import province from "../data/province"
import regency from "../data/regency";
import village from "../data/village";
import { decrypt } from "../utils"
import database from "../database";

export const getProvince = async () => {
  try {
    const data = await database.client.collection("provinces").find();
    const jsonData = data.toArray();

    return jsonData;
  } catch (error) {
    return [];
  }
}

export const getRegency = async (province_id?: string) => {
  try {
    const jsonData = await database.client.collection("regencies");

    if (province_id) return jsonData.find({vp: province_id}).toArray();
    return jsonData.find().toArray();
  } catch (error) {
    return [];
  }
}

export const getDistrict = async (regency_id?: string) => {
  try {
    const jsonData = await database.client.collection("districts");

    if (regency_id) return jsonData.find({vr: regency_id}).toArray();
    return jsonData.find().toArray();
  } catch (error) {
    return [];
  }
}

export const getVillage = async (district_id?: string) => {
  try {
    const jsonData = await database.client.collection("villages");

    if (district_id) {
      return jsonData.find({vd: district_id}).toArray();
    }

    return jsonData.find().toArray();
  } catch (error) {
    return [];
  }
}

interface CodeInterface {
  province: string,
  regency: string,
  district: string,
  village: string
}

export const getPostalcode = async (param: CodeInterface) => {
  try {
    const data = decrypt(postalcode);
    const jsonData = await JSON.parse(data);

    if (param.regency.split(".").length == 2) {
      param.regency = param.regency.split(". ")[1].trim();
    }
    if (param.regency.toLowerCase().split("kota").length == 2) {
      param.regency = param.regency.split("kota")[1].trim();
    }

    let f1: any[] = jsonData.filter((filter: any) => filter.p.toLowerCase() == param.province.toLowerCase());
    if (f1.length > 0) {
      f1 = f1.filter((filter: any) => filter.r.toLowerCase() == param.regency.toLowerCase());
      if (f1.length > 0) {
        f1 = f1.filter((filter: any) => filter.v.toLowerCase() == param.district.toLowerCase());
        if (f1.length > 1) {
          f1 = f1.filter((filter: any) => filter.d.toLowerCase() == param.village.toLowerCase());
        }
      }
    }

    return f1;
  } catch (error) {
    return [];
  }
}