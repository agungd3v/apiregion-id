import province from "../data/province"
import { decrypt } from "../utils"

export const getProvinces = async () => {
  try {
    const data = decrypt(province);
    const jsonData = await JSON.parse(data);

    return jsonData;
  } catch (error) {
    return [];
  }
}