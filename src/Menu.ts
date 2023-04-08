/**
 * Menu Item on Spreadsheet
 */

const onOpen = () => {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Data Collector")
    .addItem("Import Data", "menuItem1")
    .addSeparator()
    .addItem("Clear Sheet", "menuItem2")
    .addToUi();
};

const menuItem1 = () => {
  main();
};

const menuItem2 = () => {
  eraser();
};
