import { generateJWK } from "./mod.ts";

const generateJWKs = async () => {
  const keys = await Promise.all(Array(10).fill(0).map(generateJWK));
  return keys;
};

generateJWKs().then((keys) => {
  for (const key of keys) {
    console.log(JSON.stringify(key?.k));
  }
});
