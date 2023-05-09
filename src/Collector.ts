/**
 * Collector function that returns data range from Spreadsheet
 * @param {typeof SpreadSheetApp} spreadsheetApp - Pass instance of Spreassheet App
 * @param {string} spreadSheetId - ID of Spreadsheet File
 * @param {string} sheetName - Name of the Sheet in Spreadsheet
 * *
 * */
export const collector = (
  spreadsheetApp: typeof SpreadsheetApp,
  spreadSheetId: string,
  sheetName: string
): any[] => {
  try {
    const sheet = spreadsheetApp
      .openById(spreadSheetId)
      .getSheetByName(sheetName);
    if (sheet != null) {
      const data = sheet.getDataRange().getValues();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    return [(error as Error).message];
  }
};
