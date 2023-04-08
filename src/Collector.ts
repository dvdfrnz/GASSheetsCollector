/**
 * Collector function that returns data range from Spreadsheet
 * @param {string} spreadSheetId - ID of Spreadsheet File
 * @param {string} sheetName - Name of the Sheet in Spreadsheet
 *
 * */

const collector = (spreadSheetId: string, sheetName: string): any[] => {
  try {
    let data = SpreadsheetApp.openById(spreadSheetId)
      .getSheetByName(sheetName)
      .getDataRange()
      .getValues();
    return data;
  } catch (error) {
    return [JSON.stringify(error)];
  }
};
