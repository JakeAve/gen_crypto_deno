import { genHMACSHA256 } from "./mod.ts";

for (let i = 0; i < 10; i++) {
  const key = await genHMACSHA256();
  console.log(JSON.stringify(key));
  console.log("----------------------------------------------------");
}
