const crypto = require('crypto');

module.exports = function generateUniqueId() {
   return crypto.randomBytes(4).toString('HEX'); //gera uma string aleatorio de 4 bytes
}
