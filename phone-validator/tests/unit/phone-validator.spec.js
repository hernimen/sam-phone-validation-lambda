const phoneValidator = require("./../../phone-validator");

describe("Phone validator", () => {
  it("should return true", () => {
    const realNumber = "+5491132398877";
    const response = phoneValidator(realNumber);
    expect(response).toBe(true);
  });

  it("Should return false for a fake number", () => {
    const fakeNumber = "32939812";
    const response = phoneValidator(fakeNumber);
    expect(response).toBe(false);
  });

  it("Should handle a empty string", () => {
    const response = phoneValidator("");
    expect(response).toBe(false);
  });
});
