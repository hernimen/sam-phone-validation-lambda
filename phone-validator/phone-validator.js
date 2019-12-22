const { isValidNumber } = require("libphonenumber-js");

const phoneValidator = phone => {
  if (phone) {
    return isValidNumber(phone);
  } else {
    return false;
  }
};

module.exports = phoneValidator;
