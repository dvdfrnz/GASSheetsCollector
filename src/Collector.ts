/**
 *
 * @param folderId
 * @returns
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
