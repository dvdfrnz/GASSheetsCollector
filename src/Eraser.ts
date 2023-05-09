/**
 * Pencil function writes data to the active Spreadsheet
 */

export const eraser = (): boolean => {
  SpreadsheetApp.getActiveSpreadsheet().toast(
    "Running function: eraser",
    "Status",
    2
  );
  let success: boolean = false;
  let sheet = SpreadsheetApp.getActiveSheet().getDataRange();
  let clearedRange = sheet.clearContent();
  if (clearedRange.getValues() == null) {
    success = true;
  }
  return success;
};
