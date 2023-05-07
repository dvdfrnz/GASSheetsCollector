/**
 * Collector function that returns data range from Spreadsheet
 * @param {string} spreadSheetId - ID of Spreadsheet File
 * @param {string} sheetName - Name of the Sheet in Spreadsheet
 *
 * */
export const collector = (spreadSheetId: string, sheetName: string): any[] => {
  try {
    const sheet =
      SpreadsheetApp.openById(spreadSheetId).getSheetByName(sheetName);
    if (sheet != null) {
      const data = sheet.getDataRange().getValues();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    return [JSON.stringify(error)];
  }
};
