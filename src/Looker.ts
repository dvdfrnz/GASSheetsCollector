/**
 * The Looker Function finds Spreadsheet files within a given Folderstructure
 * @param folderId
 * @returns Array of FileIds
 */

const looker = (folderId: string): any[] => {
  let spreadsheetIds: any[] = [];
  try {
    let data = SpreadsheetApp.openById(folderId);
    spreadsheetIds.push(data);
  } catch (error) {
    return [JSON.stringify(error)];
  }
};
