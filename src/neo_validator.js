const cryptoUtils = require("./crypto/utils");
const bitcoinValidator = require("./bitcoin_validator");

const NEO_PROTOCOL_VERSION = 53;

module.exports = {
    isValidAddress: function (address, currency, networkType) {
        try {
            const decoded = cryptoUtils.base58(address);

            /**
             * If prefix doesn't match the current protocol version
             * we can try to validate the address as a legacy address
             */
            if (decoded[0] !== NEO_PROTOCOL_VERSION) {
                return bitcoinValidator.isValidAddress(
                    address,
                    currency,
                    networkType
                );
            }

            return true;
        } catch (err) {
            // Something went wrong while decoding the address so try the legacy validation
            return bitcoinValidator.isValidAddress(
                address,
                currency,
                networkType
            );
        }
    },
};
