import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";


export const encrypt = (text: string) => {
  const passphrase = process.env.SECRET_KEY as string;
  return AES.encrypt(text, passphrase).toString();
}

export const decrypt = (ciphertext: string) => {
  const passphrase = process.env.SECRET_KEY as string;
  const bytes = AES.decrypt(ciphertext, passphrase);
  const origin = bytes.toString(Utf8);

  return origin;
}