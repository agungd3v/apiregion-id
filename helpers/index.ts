import district from "../data/district";
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
