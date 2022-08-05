import { generateES256Pair } from "./mod.ts";

for (let i = 0; i < 10; i++) {
  const { privKey, pubKey } = await generateES256Pair();
  console.log("--------------------Private Key---------------------");
  console.log(JSON.stringify(privKey));
  console.log("--------------------Public Key----------------------");
  console.log(JSON.stringify(pubKey));
  console.log("\n");
}
