/**
 * Menu Item on Spreadsheet
 */

const onOpen = () => {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Data Collector")
    .addItem("Import Data", "menuItem1")
    .addSeparator()
    .addItem("Clear Sheet", "menuItem2")
    .addSeparator()
    .addItem("Add Trigger", "menuItem3")
    .addToUi();
};

const menuItem1 = () => {
  main();
};

const menuItem2 = () => {
  eraser();
};

const menuItem3 = () => {
  createTimeTriggerSpecifcDate();
  SpreadsheetApp.getUi().alert("Added Trigger");
};
