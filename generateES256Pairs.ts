import { generateES256Pair } from "./mod.ts";

for (let i = 0; i < 10; i++) {
  const { privKey, pubKey } = await generateES256Pair();
  console.log(JSON.stringify(privKey));
  console.log(JSON.stringify(pubKey));
  console.log("----------------------------------------------------");
}
