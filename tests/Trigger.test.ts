import { toCamelCase } from "../src/Helpers";

describe("Test toCamelCase formatter: ", () => {
  beforeEach(() => {
    // Test setup code
  });

  it("No Change", () => {
    expect(toCamelCase("Some Test String")).toBe("someTestString");
  });

  it("Single Word Case", () => {
    expect(toCamelCase("Another")).toBe("another");
  });

  it("Multiple Words mixed Case", () => {
    expect(toCamelCase("lorem Ipsum dolor Sit amet")).toBe(
      "loremIpsumDolorSitAmet"
    );
  });

  it("Multiple Words sames Case", () => {
    expect(toCamelCase("lorem ipsum dolor sit amet")).toBe(
      "loremIpsumDolorSitAmet"
    );
  });
});
