import { genHMACSHA512 } from "./mod.ts";

const generateJWKs = async () => {
  const keys = await Promise.all(Array(10).fill(0).map(genHMACSHA512));
  return keys;
};

generateJWKs().then((keys) => {
  for (const key of keys) {
    console.log(JSON.stringify(key?.k));
  }
});
