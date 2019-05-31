/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GradskiElement {\r\n    constructor(naziv, godina) {\r\n        this.naziv = naziv;\r\n        this.godina = godina;\r\n    }\r\n}\r\n\r\nclass Park extends GradskiElement {\r\n    constructor(naziv, godina, povrsina, brojDrveca) {\r\n        super(naziv, godina);\r\n        this.povrsina = povrsina;\r\n        this.brojDrveca = brojDrveca;\r\n        this.gustoca = this.brojDrveca / this.povrsina;\r\n    }\r\n    info() {\r\n        console.log(this.naziv + '    ' + this.godina + '    ' + this.povrsina + ' km2     ' + this.brojDrveca +\r\n            '           ' + this.gustoca.toFixed(2));\r\n    }\r\n}\r\n\r\nclass Ulica extends GradskiElement {\r\n    constructor(naziv, godina, duzina, klasifikacija) {\r\n        super(naziv, godina);\r\n        this.duzina = duzina;\r\n        klasifikacija == null ?\r\n            this.klasifikacija = 3 : this.klasifikacija = klasifikacija;\r\n    }\r\n    info() {\r\n        console.log(this.naziv + ' ' + this.godina + '  ' + this.duzina + ' km2 ' +\r\n            myMap.get(this.klasifikacija));\r\n    }\r\n}\r\n\r\nlet myMap = new Map();\r\nmyMap.set(1, 'prolaz');\r\nmyMap.set(2, 'mala');\r\nmyMap.set(3, 'normalna');\r\nmyMap.set(4, 'velika');\r\n\r\nconst parkovi = [\r\n    new Park('Park skojevaca', 1987, 0.2, 215), //32\r\n    new Park('Pionirski Park', 1894, 2.9, 3541), //125 66\r\n    new Park('Omladinski Park', 1953, 0.4, 949),\r\n];\r\n\r\nconst ulice = [\r\n    new Ulica('Trg Oslobođenja', 1971, 1.1, 4),\r\n    new Ulica('Gat proleterskih brigada', 1982, 2.7, 1),\r\n    new Ulica('Beogradska', 1974, 0.8),\r\n    new Ulica('Lenjingradska', 1982, 2.5, 2),\r\n    new Ulica('Trg Oktobarske revolucije', 1973, 4, 4),\r\n];\r\n\r\nlet information = () => {\r\n    const god = new Date();\r\n    let ukupno = 0;\r\n    console.log('---------------Ulice-------------');\r\n    for (let i = 0; i < ulice.length; i++) {\r\n        ulice[i].info();\r\n    }\r\n\r\n    console.log('---------------Parkovi-------------');\r\n    console.log('Naziv:          Godina:  Površina: Broj drveća:  Gustina:');\r\n    for (let i = 0; i < parkovi.length; i++) {\r\n        parkovi[i].info();\r\n        ukupno = ukupno + (god.getFullYear() - parkovi[i].godina);\r\n    }\r\n    console.log('Prosjek starosti parkova: ' + (ukupno / parkovi.length).toFixed(2) + ' godina');\r\n}\r\n\r\nlet ParkoviPoBrojuDrveca = () => {\r\n    parkovi.sort((a, b) => b.brojDrveca - a.brojDrveca);\r\n    console.log(parkovi);\r\n}\r\n\r\nlet parkoviPoVelicini = () => {\r\n    parkovi.sort((a, b) => a.povrsina - b.povrsina);\r\n    console.log(parkovi);\r\n}\r\nlet ProsjecnaUkupnaDuzinaUlica = () => {\r\n    let ukupno = 0;\r\n    ulice.forEach(e => ukupno += e.duzina);\r\n    console.log('Ukupna dužina ulica: ' + ukupno.toFixed(2) + ' km2 a prosječna: ' +\r\n        (ukupno / parkovi.length).toFixed(2) + ' km2');\r\n}\r\n\r\nlet Ulice80tih = () => {\r\n    console.log(ulice.filter(e => e.godina >= 1980 && e.godina < 1990));\r\n}\r\ninformation();\r\nParkoviPoBrojuDrveca();\r\nparkoviPoVelicini();\r\nProsjecnaUkupnaDuzinaUlica();\r\nUlice80tih();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });