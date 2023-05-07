/**
 * Menu Item on Spreadsheet
 */

export const onOpen = () => {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Data Collector")
    .addItem("Import Data", "main")
    .addSeparator()
    .addItem("Clear Sheet", "eraser")
    .addSeparator()
    .addItem("Add Trigger", "createTimeTriggerSpecifcDate")
    .addToUi();
};
