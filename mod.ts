export const genHMACSHA512 = async () => {
  const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512" },
    true,
    ["sign", "verify"]
  );
  return crypto.subtle.exportKey("jwk", key);
};

export const generateES256Pair = async () => {
  const key = await crypto.subtle.generateKey(
    { name: "ECDSA", namedCurve: "P-256" },
    true,
    ["sign", "verify"]
  );
  const privKey = await crypto.subtle.exportKey("jwk", key.privateKey);
  const pubKey = await crypto.subtle.exportKey("jwk", key.publicKey);
  return { privKey, pubKey };
};
