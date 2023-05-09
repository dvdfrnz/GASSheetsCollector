import { toCamelCase } from "../src/Helpers";

describe("toCamelCase", () => {
  it("should convert a string to camel case", () => {
    const input = "SOME_TEST_STRING";
    const output = toCamelCase(input);
    expect(output).toBe("someTestString");
  });

  it("should handle a string with spaces", () => {
    const input = "Some Sample String";
    const output = toCamelCase(input);
    expect(output).toBe("someSampleString");
  });

  it("should handle a string with dashes and underscores", () => {
    const input = "this-asd_Hello";
    const output = toCamelCase(input);
    expect(output).toBe("thisAsdHello");
  });
});
