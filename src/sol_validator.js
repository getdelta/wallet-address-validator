var base58 = require('./crypto/base58');

function getDecoded(address) {
    try {
        return base58.decode(address);
    } catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}

function isValidSolAddress(address) {
    const decoded = getDecoded(address);

    if (decoded) {
        return decoded.length === 32;
    }
    return false;
}

module.exports = {
    isValidAddress: function (address, currency, networkType) {
        return isValidSolAddress(address)
    }
}

