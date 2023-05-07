/**
 * @ts-check
 * Pencil function writes data to the active Spreadsheet
 * @param sheetId
 * @param sheetName
 */

export const pencil = (data: any[][], sheetName: string) => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  const lastRow: any = sheet?.getLastRow();
  SpreadsheetApp.getActiveSheet()
    .getRange(lastRow ? lastRow + 1 : 1, 1, data.length, data[0].length)
    .setValues(data);
};
