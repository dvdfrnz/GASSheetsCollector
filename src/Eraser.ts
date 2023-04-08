/**
 * Pencil function writes data to the active Spreadsheet
 */

const eraser = (): boolean => {
  let success: boolean = false;
  let sheet = SpreadsheetApp.getActiveSheet().getDataRange();
  let clearedRange = sheet.clearContent();
  if (clearedRange.getValues() == null) {
    success = true;
  }
  return success;
};
