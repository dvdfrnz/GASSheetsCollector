import { collector } from "../src/Collector";

describe("collector", () => {
  const sheet = {
    getDataRange: () => ({
      getValues: () => [
        ["John", "Doe", 25],
        ["Jane", "Doe", 30],
      ],
    }),
  };

  const spreadsheetApp = {
    openById: (spreadSheetId: string) => ({
      getSheetByName: (sheetName: string) =>
        sheetName === "Sheet1" ? sheet : null,
    }),
  };

  it("should return data when the sheet exists", () => {
    const data = collector(
      spreadsheetApp as typeof SpreadsheetApp,
      "123",
      "Sheet1"
    );
    expect(data).toEqual([
      ["John", "Doe", 25],
      ["Jane", "Doe", 30],
    ]);
  });

  it("should return an empty array when the sheet does not exist", () => {
    const data = collector(
      spreadsheetApp as typeof SpreadsheetApp,
      "123",
      "Sheet2"
    );
    expect(data).toEqual([]);
  });
});
