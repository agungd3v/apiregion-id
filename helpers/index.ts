import district from "../data/district";
import postalcode from "../data/postalcode";
import province from "../data/province"
import regency from "../data/regency";
import village from "../data/village";
import { decrypt } from "../utils"

export const getProvince = async () => {
  try {
    const data = decrypt(province);
    const jsonData = await JSON.parse(data);

    return jsonData;
  } catch (error) {
    return [];
  }
}

export const getRegency = async (province_id?: string) => {
  try {
    const data = decrypt(regency);
    const jsonData = await JSON.parse(data);

    if (province_id) {
      return jsonData.filter((filter: any) => filter.vp == province_id);
    }

    return jsonData;
  } catch (error) {
    return [];
  }
}

export const getDistrict = async (regency_id?: string) => {
  try {
    const data = decrypt(district);
    const jsonData = await JSON.parse(data);

    if (regency_id) {
      return jsonData.filter((filter: any) => filter.vr == regency_id);
    }

    return jsonData;
  } catch (error) {
    return [];
  }
}

export const getVillage = async (district_id?: string) => {
  try {
    const data = decrypt(village);
    const jsonData = await JSON.parse(data);

    if (district_id) {
      return jsonData.filter((filter: any) => filter.vd == district_id);
    }

    return jsonData;
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