const cryptoUtils = require("./crypto/utils");

const NEO_PROTOCOL_VERSION = 53;

module.exports = {
    isValidAddress: function (address) {
        try {
            const decoded = cryptoUtils.base58(address);

            // Check if prefix of hash matches the current protocol version
            if (decoded[0] !== NEO_PROTOCOL_VERSION) {
                return false;
            }

            return true;
        } catch (err) {
            return false;
        }
    },
};
