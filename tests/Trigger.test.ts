describe("Test toCamelCase formatter: ", () => {
  beforeEach(() => {
    // Test setup code
  });

  it("No Change", () => {
    expect(toCamelCase("test")).toBe("test");
  });

  it("Single Word Case", () => {
    expect(toCamelCase("TeST")).toBe("test");
  });

  it("Two Words", () => {
    expect(toCamelCase("test Me")).toBe("testMe");
  });

  it("Two Words Case", () => {
    expect(toCamelCase("TEST ME")).toBe("testMe");
  });
});
