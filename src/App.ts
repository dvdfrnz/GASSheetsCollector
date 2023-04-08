/**
 * Applikation function
 *
 */

const main = () => {
  let spreadsheetId = "1CXnuGk2G3LWrDoSxyzrJK8D13LtxfUZg6WAM9E_YNGg";
  let data = makeDataRun(spreadsheetId);
  pencil(data, "Tabellenblatt1");
};

const makeDataRun = (spreadsheetId: string): any[][] => {
  let counter: number = 0;
  let result: any[] = [];
  while (counter < 4) {
    collector(spreadsheetId, "Tabellenblatt1").map((row) => {
      result.push(row);
    });
    counter++;
  }
  return result;
};
