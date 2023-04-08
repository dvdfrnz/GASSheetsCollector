/**
 * Main Function calls functions to collect data and write back to SpreadSheet
 */
const main = () => {
  let result: any[] = [];
  let spreadsheetIds = [
    "1CXnuGk2G3LWrDoSxyzrJK8D13LtxfUZg6WAM9E_YNGg",
    "1w2wkoNPNW6WS66JOU1JY5lJL3sY5uYLR6aCJdozve9A",
  ];
  spreadsheetIds.forEach((file) => {
    collector(file, "Tabellenblatt1").map((elem) => {
      result.push(elem);
      Logger.log(`Updated File from Spreadsheet ${file}`);
    });
  });
  pencil(result, "Tabellenblatt1");
};
