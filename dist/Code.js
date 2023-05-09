function main() {
}
function looker() {
}
function pencil() {
}
function collector() {
}
function onOpen() {
}
function createTimeTriggerSpecifcDate() {
}
function eraser() {
}/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _Collector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Pencil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/**
 * Main Function calls functions to collect data and write back to SpreadSheet
 */
const main = () => {
    SpreadsheetApp.getActiveSpreadsheet().toast("Running function: main", "Status", 2);
    const result = [];
    const spreadSheetApp = SpreadsheetApp;
    const spreadsheetIds = [
        "1CXnuGk2G3LWrDoSxyzrJK8D13LtxfUZg6WAM9E_YNGg",
        "1w2wkoNPNW6WS66JOU1JY5lJL3sY5uYLR6aCJdozve9A",
    ];
    spreadsheetIds.forEach((file) => {
        (0,_Collector__WEBPACK_IMPORTED_MODULE_0__.collector)(spreadSheetApp, file, "Tabellenblatt1").map((elem) => {
            result.push(elem);
            Logger.log(`Updated File from Spreadsheet ${file}`);
        });
    });
    (0,_Pencil__WEBPACK_IMPORTED_MODULE_1__.pencil)(result, "Tabellenblatt1");
};


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collector": () => (/* binding */ collector)
/* harmony export */ });
/**
 * Collector function that returns data range from Spreadsheet
 * @param {typeof SpreadSheetApp} spreadsheetApp - Pass instance of Spreassheet App
 * @param {string} spreadSheetId - ID of Spreadsheet File
 * @param {string} sheetName - Name of the Sheet in Spreadsheet
 * *
 * */
const collector = (spreadsheetApp, spreadSheetId, sheetName) => {
    try {
        const sheet = spreadsheetApp
            .openById(spreadSheetId)
            .getSheetByName(sheetName);
        if (sheet != null) {
            const data = sheet.getDataRange().getValues();
            return data;
        }
        else {
            return [];
        }
    }
    catch (error) {
        return [error.message];
    }
};


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pencil": () => (/* binding */ pencil)
/* harmony export */ });
/**
 * Pencil function writes data to the active Spreadsheet
 * @param sheetId
 * @param sheetName
 */
const pencil = (data, sheetName) => {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    const lastRow = sheet?.getLastRow();
    SpreadsheetApp.getActiveSheet()
        .getRange(lastRow ? lastRow + 1 : 1, 1, data.length, data[0].length)
        .setValues(data);
};


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "looker": () => (/* binding */ looker)
/* harmony export */ });
/**
 * The Looker Function finds Spreadsheet files within a given Folderstructure
 * @param folderId
 * @returns Array of FileIds
 */
const looker = (folderId) => {
    let spreadsheetIds = [];
    try {
        let data = SpreadsheetApp.openById(folderId);
        spreadsheetIds.push(data);
    }
    catch (error) {
        return [JSON.stringify(error)];
    }
};


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onOpen": () => (/* binding */ onOpen)
/* harmony export */ });
/**
 * Menu Item on Spreadsheet
 */
const onOpen = () => {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu("Data Collector")
        .addItem("Import Data", "main")
        .addSeparator()
        .addItem("Clear Sheet", "eraser")
        .addSeparator()
        .addItem("Add Trigger", "createTimeTriggerSpecifcDate")
        .addToUi();
};


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIfTriggerExists": () => (/* binding */ checkIfTriggerExists),
/* harmony export */   "createTimeTriggerSpecifcDate": () => (/* binding */ createTimeTriggerSpecifcDate),
/* harmony export */   "removeAllTriggers": () => (/* binding */ removeAllTriggers)
/* harmony export */ });
/**
 * Creates a trigger at given hour of the day for a specific script
 * @param everyNthDay
 * @param hourOfDay
 * @param handlerFunction
 * @todo Create conditional Trigger Creation
 * @returns
 */
const createTimeTriggerSpecifcDate = (everyNthDay = 1, hourOfDay = 3, handlerFunction = "main") => {
    SpreadsheetApp.getActiveSpreadsheet().toast("Running function: trigger", "Status", 2);
    if (!checkIfTriggerExists("CLOCK", handlerFunction)) {
        ScriptApp.newTrigger(handlerFunction)
            .timeBased()
            .atHour(hourOfDay)
            .everyDays(everyNthDay)
            .create();
    }
    return {
        triggerCreate: true,
        handlerFunction: handlerFunction,
        timestamp: Date.now(),
    };
};
/**
 *
 * @param eventType
 * @param handlerFunction
 * @returns
 */
const checkIfTriggerExists = (eventType, handlerFunction) => {
    var triggers = ScriptApp.getProjectTriggers();
    var triggerExists = false;
    triggers.forEach(function (trigger) {
        if (trigger.getEventType() === eventType &&
            trigger.getHandlerFunction() === handlerFunction)
            triggerExists = true;
    });
    return triggerExists;
};
/**
 *
 * @param removeAll
 * @todo have to add condotional removal of triggers based on handlerfunction
 */
const removeAllTriggers = (removeAll = true) => {
    var triggers = ScriptApp.getProjectTriggers();
    if (removeAll) {
        triggers.forEach((element) => {
            ScriptApp.deleteTrigger(element);
        });
    }
};


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eraser": () => (/* binding */ eraser)
/* harmony export */ });
/**
 * Pencil function writes data to the active Spreadsheet
 */
const eraser = () => {
    SpreadsheetApp.getActiveSpreadsheet().toast("Running function: eraser", "Status", 2);
    let success = false;
    let sheet = SpreadsheetApp.getActiveSheet().getDataRange();
    let clearedRange = sheet.clearContent();
    if (clearedRange.getValues() == null) {
        success = true;
    }
    return success;
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Looker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _Pencil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _Collector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _Trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _Eraser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);







__webpack_require__.g.main = _App__WEBPACK_IMPORTED_MODULE_0__.main;
__webpack_require__.g.looker = _Looker__WEBPACK_IMPORTED_MODULE_1__.looker;
__webpack_require__.g.pencil = _Pencil__WEBPACK_IMPORTED_MODULE_2__.pencil;
__webpack_require__.g.collector = _Collector__WEBPACK_IMPORTED_MODULE_3__.collector;
__webpack_require__.g.onOpen = _Menu__WEBPACK_IMPORTED_MODULE_4__.onOpen;
__webpack_require__.g.createTimeTriggerSpecifcDate = _Trigger__WEBPACK_IMPORTED_MODULE_5__.createTimeTriggerSpecifcDate;
__webpack_require__.g.eraser = _Eraser__WEBPACK_IMPORTED_MODULE_6__.eraser;

})();

/******/ })()
;