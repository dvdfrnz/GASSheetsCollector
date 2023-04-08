/**
 * @ts-check
 * Pencil function writes data to the active Spreadsheet
 * @param sheetId
 * @param sheetName
 */

const pencil = (data: any[][], sheetName: string): boolean => {
  let success: boolean = false;
  let lastRow: number =
    SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName(sheetName)
      .getLastRow() + 1;

  SpreadsheetApp.getActiveSheet()
    .getRange(lastRow, 1, data.length, data[0].length)
    .setValues(data);
  return success;
};
