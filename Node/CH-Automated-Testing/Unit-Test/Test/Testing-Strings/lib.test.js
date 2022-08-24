// Tests are first-class citizens in your source code

const lib = require("../../lib");

describe("greet", () => {
  it("should return the grretting message", () => {
    const result = lib.greet("Fan");
    expect(result).toMatch(/Fan/);
    expect(result).toContain("Fan"); // Use it if you don't want to use Regex
  });
});
