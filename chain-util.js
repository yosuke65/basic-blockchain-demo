const EC = require('elliptic').ec;
const {v1: uuidV1} = require('uuid');
const SHA256 = require("crypto-js/sha256");
const ec = new EC('secp256k1'); //special cryptographic curve
class ChainUtil {
  static genKeyPair() {
    return ec.genKeyPair();
  }

  static id() {
    return uuidV1();
  }

  static hash(data) {
    return SHA256(JSON.stringify(data)).toString();
  }

  static verifySignature(publicKey, signature, dataHash) {
    const key = ec.keyFromPublic(publicKey, 'hex');
    return key.verify(dataHash, signature);
  }
}

module.exports = ChainUtil;