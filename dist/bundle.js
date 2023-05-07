function main() {
}
function looker() {
}
function pencil() {
}
function collector() {
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
    const result = [];
    const spreadsheetIds = [
        "1CXnuGk2G3LWrDoSxyzrJK8D13LtxfUZg6WAM9E_YNGg",
        "1w2wkoNPNW6WS66JOU1JY5lJL3sY5uYLR6aCJdozve9A",
    ];
    spreadsheetIds.forEach((file) => {
        (0,_Collector__WEBPACK_IMPORTED_MODULE_0__.collector)(file, "Tabellenblatt1").map((elem) => {
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
 * @param {string} spreadSheetId - ID of Spreadsheet File
 * @param {string} sheetName - Name of the Sheet in Spreadsheet
 *
 * */
const collector = (spreadSheetId, sheetName) => {
    try {
        const sheet = SpreadsheetApp.openById(spreadSheetId).getSheetByName(sheetName);
        if (sheet != null) {
            const data = sheet.getDataRange().getValues();
            return data;
        }
        else {
            return [];
        }
    }
    catch (error) {
        return [JSON.stringify(error)];
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
 * @ts-check
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




__webpack_require__.g.main = _App__WEBPACK_IMPORTED_MODULE_0__.main;
__webpack_require__.g.looker = _Looker__WEBPACK_IMPORTED_MODULE_1__.looker;
__webpack_require__.g.pencil = _Pencil__WEBPACK_IMPORTED_MODULE_2__.pencil;
__webpack_require__.g.collector = _Collector__WEBPACK_IMPORTED_MODULE_3__.collector;

})();

/******/ })()
;