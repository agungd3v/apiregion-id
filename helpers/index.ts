import database from "../database";

export const getProvince = async (params: any) => {
  try {
    const data = await database.client.collection("provinces").find({
      'l': {$regex: params.q ?? '', $options: 'i'}
    });
    return data.toArray();
  } catch (error) {
    return [];
  }
}

export const getRegency = async (params: any) => {
  try {
    const data = await database.client.collection("regencies").find({
      'vp': {$regex: params.id ?? '', $options: 'i'},
      'l': {$regex: params.q ?? '', $options: 'i'}
    });
    return data.toArray();
  } catch (error) {
    return [];
  }
}

export const getDistrict = async (params: any) => {
  try {
    const data = await database.client.collection("districts").find({
      'vr': {$regex: params.id ?? '', $options: 'i'},
      'l': {$regex: params.q ?? '', $options: 'i'}
    });
    return data.toArray();
  } catch (error) {
    return [];
  }
}

export const getVillage = async (district_id?: string) => {
  try {
    const jsonData = await database.client.collection("villages");

    if (district_id) return jsonData.find({vd: district_id}).toArray();
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
    if (param.regency.split(".").length == 2) {
      param.regency = param.regency.split(". ")[1].trim();
    }
    if (param.regency.toLowerCase().split("kota").length == 2) {
      param.regency = param.regency.split("kota")[1].trim();
    }

    const jsonData: any = await database.client.collection("postalcode").find({
      p: {$regex: param.province, $options: "i"},
      r: {$regex: param.regency, $options: "i"},
      v: {$regex: param.district, $options: "i"},
      d: {$regex: param.village, $options: "i"}
    }).toArray();

    return jsonData;
  } catch (error) {
    return [];
  }
}