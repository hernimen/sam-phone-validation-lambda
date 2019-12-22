const phoneValidator = require("./phone-validator");
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.phoneValidatorHandler = async (event, _) => {
  try {
    let req = "";
    let res = "";

    if (event && event.body) {
      req = JSON.parse(event.body);
      res = phoneValidator(req.phone);
    }

    response = {
      statusCode: 200,
      body: JSON.stringify({
        number: req.phone,
        valid: res
      })
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
