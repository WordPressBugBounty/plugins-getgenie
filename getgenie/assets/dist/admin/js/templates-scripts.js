(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/moment/moment.js
  var require_moment = __commonJS({
    "node_modules/moment/moment.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
      })(exports, function() {
        "use strict";
        var hookCallback;
        function hooks() {
          return hookCallback.apply(null, arguments);
        }
        function setHookCallback(callback) {
          hookCallback = callback;
        }
        function isArray(input) {
          return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
        }
        function isObject(input) {
          return input != null && Object.prototype.toString.call(input) === "[object Object]";
        }
        function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }
        function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
          } else {
            var k;
            for (k in obj) {
              if (hasOwnProp(obj, k)) {
                return false;
              }
            }
            return true;
          }
        }
        function isUndefined(input) {
          return input === void 0;
        }
        function isNumber(input) {
          return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
        }
        function isDate(input) {
          return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
        }
        function map(arr, fn) {
          var res = [], i, arrLen = arr.length;
          for (i = 0; i < arrLen; ++i) {
            res.push(fn(arr[i], i));
          }
          return res;
        }
        function extend(a, b) {
          for (var i in b) {
            if (hasOwnProp(b, i)) {
              a[i] = b[i];
            }
          }
          if (hasOwnProp(b, "toString")) {
            a.toString = b.toString;
          }
          if (hasOwnProp(b, "valueOf")) {
            a.valueOf = b.valueOf;
          }
          return a;
        }
        function createUTC(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, true).utc();
        }
        function defaultParsingFlags() {
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
          };
        }
        function getParsingFlags(m) {
          if (m._pf == null) {
            m._pf = defaultParsingFlags();
          }
          return m._pf;
        }
        var some;
        if (Array.prototype.some) {
          some = Array.prototype.some;
        } else {
          some = function(fun) {
            var t = Object(this), len = t.length >>> 0, i;
            for (i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                return true;
              }
            }
            return false;
          };
        }
        function isValid(m) {
          if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
              return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) {
              isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
            }
            if (Object.isFrozen == null || !Object.isFrozen(m)) {
              m._isValid = isNowValid;
            } else {
              return isNowValid;
            }
          }
          return m._isValid;
        }
        function createInvalid(flags) {
          var m = createUTC(NaN);
          if (flags != null) {
            extend(getParsingFlags(m), flags);
          } else {
            getParsingFlags(m).userInvalidated = true;
          }
          return m;
        }
        var momentProperties = hooks.momentProperties = [], updateInProgress = false;
        function copyConfig(to2, from2) {
          var i, prop, val, momentPropertiesLen = momentProperties.length;
          if (!isUndefined(from2._isAMomentObject)) {
            to2._isAMomentObject = from2._isAMomentObject;
          }
          if (!isUndefined(from2._i)) {
            to2._i = from2._i;
          }
          if (!isUndefined(from2._f)) {
            to2._f = from2._f;
          }
          if (!isUndefined(from2._l)) {
            to2._l = from2._l;
          }
          if (!isUndefined(from2._strict)) {
            to2._strict = from2._strict;
          }
          if (!isUndefined(from2._tzm)) {
            to2._tzm = from2._tzm;
          }
          if (!isUndefined(from2._isUTC)) {
            to2._isUTC = from2._isUTC;
          }
          if (!isUndefined(from2._offset)) {
            to2._offset = from2._offset;
          }
          if (!isUndefined(from2._pf)) {
            to2._pf = getParsingFlags(from2);
          }
          if (!isUndefined(from2._locale)) {
            to2._locale = from2._locale;
          }
          if (momentPropertiesLen > 0) {
            for (i = 0; i < momentPropertiesLen; i++) {
              prop = momentProperties[i];
              val = from2[prop];
              if (!isUndefined(val)) {
                to2[prop] = val;
              }
            }
          }
          return to2;
        }
        function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);
          if (!this.isValid()) {
            this._d = new Date(NaN);
          }
          if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
          }
        }
        function isMoment(obj) {
          return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
        }
        function warn(msg) {
          if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
            console.warn("Deprecation warning: " + msg);
          }
        }
        function deprecate(msg, fn) {
          var firstTime = true;
          return extend(function() {
            if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
              var args = [], arg, i, key, argLen = arguments.length;
              for (i = 0; i < argLen; i++) {
                arg = "";
                if (typeof arguments[i] === "object") {
                  arg += "\n[" + i + "] ";
                  for (key in arguments[0]) {
                    if (hasOwnProp(arguments[0], key)) {
                      arg += key + ": " + arguments[0][key] + ", ";
                    }
                  }
                  arg = arg.slice(0, -2);
                } else {
                  arg = arguments[i];
                }
                args.push(arg);
              }
              warn(
                msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
              );
              firstTime = false;
            }
            return fn.apply(this, arguments);
          }, fn);
        }
        var deprecations = {};
        function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
          }
          if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
          }
        }
        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;
        function isFunction(input) {
          return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
        }
        function set(config) {
          var prop, i;
          for (i in config) {
            if (hasOwnProp(config, i)) {
              prop = config[i];
              if (isFunction(prop)) {
                this[i] = prop;
              } else {
                this["_" + i] = prop;
              }
            }
          }
          this._config = config;
          this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
          );
        }
        function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig), prop;
          for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
              if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
              } else {
                delete res[prop];
              }
            }
          }
          for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
              res[prop] = extend({}, res[prop]);
            }
          }
          return res;
        }
        function Locale(config) {
          if (config != null) {
            this.set(config);
          }
        }
        var keys;
        if (Object.keys) {
          keys = Object.keys;
        } else {
          keys = function(obj) {
            var i, res = [];
            for (i in obj) {
              if (hasOwnProp(obj, i)) {
                res.push(i);
              }
            }
            return res;
          };
        }
        var defaultCalendar = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        };
        function calendar(key, mom, now2) {
          var output = this._calendar[key] || this._calendar["sameElse"];
          return isFunction(output) ? output.call(mom, now2) : output;
        }
        function zeroFill(number, targetLength, forceSign) {
          var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
          return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
        }
        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
        function addFormatToken(token2, padded, ordinal2, callback) {
          var func = callback;
          if (typeof callback === "string") {
            func = function() {
              return this[callback]();
            };
          }
          if (token2) {
            formatTokenFunctions[token2] = func;
          }
          if (padded) {
            formatTokenFunctions[padded[0]] = function() {
              return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
          }
          if (ordinal2) {
            formatTokenFunctions[ordinal2] = function() {
              return this.localeData().ordinal(
                func.apply(this, arguments),
                token2
              );
            };
          }
        }
        function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
          }
          return input.replace(/\\/g, "");
        }
        function makeFormatFunction(format2) {
          var array = format2.match(formattingTokens), i, length;
          for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
            } else {
              array[i] = removeFormattingTokens(array[i]);
            }
          }
          return function(mom) {
            var output = "", i2;
            for (i2 = 0; i2 < length; i2++) {
              output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
            }
            return output;
          };
        }
        function formatMoment(m, format2) {
          if (!m.isValid()) {
            return m.localeData().invalidDate();
          }
          format2 = expandFormat(format2, m.localeData());
          formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
          return formatFunctions[format2](m);
        }
        function expandFormat(format2, locale2) {
          var i = 5;
          function replaceLongDateFormatTokens(input) {
            return locale2.longDateFormat(input) || input;
          }
          localFormattingTokens.lastIndex = 0;
          while (i >= 0 && localFormattingTokens.test(format2)) {
            format2 = format2.replace(
              localFormattingTokens,
              replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
          }
          return format2;
        }
        var defaultLongDateFormat = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        function longDateFormat(key) {
          var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
          if (format2 || !formatUpper) {
            return format2;
          }
          this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
              return tok.slice(1);
            }
            return tok;
          }).join("");
          return this._longDateFormat[key];
        }
        var defaultInvalidDate = "Invalid date";
        function invalidDate() {
          return this._invalidDate;
        }
        var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
        function ordinal(number) {
          return this._ordinal.replace("%d", number);
        }
        var defaultRelativeTime = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
        }
        function pastFuture(diff2, output) {
          var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
          return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
        }
        var aliases = {};
        function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
        }
        function normalizeUnits(units) {
          return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
        }
        function normalizeObjectUnits(inputObject) {
          var normalizedInput = {}, normalizedProp, prop;
          for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);
              if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
              }
            }
          }
          return normalizedInput;
        }
        var priorities = {};
        function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
        }
        function getPrioritizedUnits(unitsObj) {
          var units = [], u;
          for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
              units.push({ unit: u, priority: priorities[u] });
            }
          }
          units.sort(function(a, b) {
            return a.priority - b.priority;
          });
          return units;
        }
        function isLeapYear(year) {
          return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        }
        function absFloor(number) {
          if (number < 0) {
            return Math.ceil(number) || 0;
          } else {
            return Math.floor(number);
          }
        }
        function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion, value = 0;
          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
          }
          return value;
        }
        function makeGetSet(unit, keepTime) {
          return function(value) {
            if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
            } else {
              return get(this, unit);
            }
          };
        }
        function get(mom, unit) {
          return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
        }
        function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
            if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
              value = toInt(value);
              mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](
                value,
                mom.month(),
                daysInMonth(value, mom.month())
              );
            } else {
              mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
            }
          }
        }
        function stringGet(units) {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units]();
          }
          return this;
        }
        function stringSet(units, value) {
          if (typeof units === "object") {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
            for (i = 0; i < prioritizedLen; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
            }
          } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
              return this[units](value);
            }
          }
          return this;
        }
        var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
        regexes = {};
        function addRegexToken(token2, regex, strictRegex) {
          regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
            return isStrict && strictRegex ? strictRegex : regex;
          };
        }
        function getParseRegexForToken(token2, config) {
          if (!hasOwnProp(regexes, token2)) {
            return new RegExp(unescapeFormat(token2));
          }
          return regexes[token2](config._strict, config._locale);
        }
        function unescapeFormat(s) {
          return regexEscape(
            s.replace("\\", "").replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function(matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4;
              }
            )
          );
        }
        function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        var tokens = {};
        function addParseToken(token2, callback) {
          var i, func = callback, tokenLen;
          if (typeof token2 === "string") {
            token2 = [token2];
          }
          if (isNumber(callback)) {
            func = function(input, array) {
              array[callback] = toInt(input);
            };
          }
          tokenLen = token2.length;
          for (i = 0; i < tokenLen; i++) {
            tokens[token2[i]] = func;
          }
        }
        function addWeekParseToken(token2, callback) {
          addParseToken(token2, function(input, array, config, token3) {
            config._w = config._w || {};
            callback(input, config._w, config, token3);
          });
        }
        function addTimeToArrayFromToken(token2, input, config) {
          if (input != null && hasOwnProp(tokens, token2)) {
            tokens[token2](input, config._a, config, token2);
          }
        }
        var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
        function mod(n, x) {
          return (n % x + x) % x;
        }
        var indexOf;
        if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
        } else {
          indexOf = function(o) {
            var i;
            for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                return i;
              }
            }
            return -1;
          };
        }
        function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
            return NaN;
          }
          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
        }
        addFormatToken("M", ["MM", 2], "Mo", function() {
          return this.month() + 1;
        });
        addFormatToken("MMM", 0, 0, function(format2) {
          return this.localeData().monthsShort(this, format2);
        });
        addFormatToken("MMMM", 0, 0, function(format2) {
          return this.localeData().months(this, format2);
        });
        addUnitAlias("month", "M");
        addUnitPriority("month", 8);
        addRegexToken("M", match1to2);
        addRegexToken("MM", match1to2, match2);
        addRegexToken("MMM", function(isStrict, locale2) {
          return locale2.monthsShortRegex(isStrict);
        });
        addRegexToken("MMMM", function(isStrict, locale2) {
          return locale2.monthsRegex(isStrict);
        });
        addParseToken(["M", "MM"], function(input, array) {
          array[MONTH] = toInt(input) - 1;
        });
        addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
          var month = config._locale.monthsParse(input, token2, config._strict);
          if (month != null) {
            array[MONTH] = month;
          } else {
            getParsingFlags(config).invalidMonth = input;
          }
        });
        var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
        function localeMonths(m, format2) {
          if (!m) {
            return isArray(this._months) ? this._months : this._months["standalone"];
          }
          return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
        }
        function localeMonthsShort(m, format2) {
          if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
          }
          return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
        }
        function handleStrictParse(monthName, format2, strict) {
          var i, ii, mom, llc = monthName.toLocaleLowerCase();
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
              mom = createUTC([2e3, i]);
              this._shortMonthsParse[i] = this.monthsShort(
                mom,
                ""
              ).toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeMonthsParse(monthName, format2, strict) {
          var i, mom, regex;
          if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format2, strict);
          }
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          }
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp(
                "^" + this.months(mom, "").replace(".", "") + "$",
                "i"
              );
              this._shortMonthsParse[i] = new RegExp(
                "^" + this.monthsShort(mom, "").replace(".", "") + "$",
                "i"
              );
            }
            if (!strict && !this._monthsParse[i]) {
              regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
              this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
              return i;
            } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
              return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
            }
          }
        }
        function setMonth(mom, value) {
          var dayOfMonth;
          if (!mom.isValid()) {
            return mom;
          }
          if (typeof value === "string") {
            if (/^\d+$/.test(value)) {
              value = toInt(value);
            } else {
              value = mom.localeData().monthsParse(value);
              if (!isNumber(value)) {
                return mom;
              }
            }
          }
          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
          mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
          return mom;
        }
        function getSetMonth(value) {
          if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
          } else {
            return get(this, "Month");
          }
        }
        function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
        }
        function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsShortStrictRegex;
            } else {
              return this._monthsShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsShortRegex")) {
              this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
          }
        }
        function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsStrictRegex;
            } else {
              return this._monthsRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsRegex")) {
              this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
          }
        }
        function computeMonthsParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }
          var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            shortPieces.push(this.monthsShort(mom, ""));
            longPieces.push(this.months(mom, ""));
            mixedPieces.push(this.months(mom, ""));
            mixedPieces.push(this.monthsShort(mom, ""));
          }
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
          }
          for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }
          this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp(
            "^(" + longPieces.join("|") + ")",
            "i"
          );
          this._monthsShortStrictRegex = new RegExp(
            "^(" + shortPieces.join("|") + ")",
            "i"
          );
        }
        addFormatToken("Y", 0, 0, function() {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : "+" + y;
        });
        addFormatToken(0, ["YY", 2], 0, function() {
          return this.year() % 100;
        });
        addFormatToken(0, ["YYYY", 4], 0, "year");
        addFormatToken(0, ["YYYYY", 5], 0, "year");
        addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
        addUnitAlias("year", "y");
        addUnitPriority("year", 1);
        addRegexToken("Y", matchSigned);
        addRegexToken("YY", match1to2, match2);
        addRegexToken("YYYY", match1to4, match4);
        addRegexToken("YYYYY", match1to6, match6);
        addRegexToken("YYYYYY", match1to6, match6);
        addParseToken(["YYYYY", "YYYYYY"], YEAR);
        addParseToken("YYYY", function(input, array) {
          array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken("YY", function(input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken("Y", function(input, array) {
          array[YEAR] = parseInt(input, 10);
        });
        function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
        }
        hooks.parseTwoDigitYear = function(input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
        };
        var getSetYear = makeGetSet("FullYear", true);
        function getIsLeapYear() {
          return isLeapYear(this.year());
        }
        function createDate(y, m, d, h, M, s, ms) {
          var date;
          if (y < 100 && y >= 0) {
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
              date.setFullYear(y);
            }
          } else {
            date = new Date(y, m, d, h, M, s, ms);
          }
          return date;
        }
        function createUTCDate(y) {
          var date, args;
          if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
              date.setUTCFullYear(y);
            }
          } else {
            date = new Date(Date.UTC.apply(null, arguments));
          }
          return date;
        }
        function firstWeekOffset(year, dow, doy) {
          var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
          return -fwdlw + fwd - 1;
        }
        function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
          if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
          } else {
            resYear = year;
            resDayOfYear = dayOfYear;
          }
          return {
            year: resYear,
            dayOfYear: resDayOfYear
          };
        }
        function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
          if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
          } else {
            resYear = mom.year();
            resWeek = week;
          }
          return {
            week: resWeek,
            year: resYear
          };
        }
        function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        }
        addFormatToken("w", ["ww", 2], "wo", "week");
        addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
        addUnitAlias("week", "w");
        addUnitAlias("isoWeek", "W");
        addUnitPriority("week", 5);
        addUnitPriority("isoWeek", 5);
        addRegexToken("w", match1to2);
        addRegexToken("ww", match1to2, match2);
        addRegexToken("W", match1to2);
        addRegexToken("WW", match1to2, match2);
        addWeekParseToken(
          ["w", "ww", "W", "WW"],
          function(input, week, config, token2) {
            week[token2.substr(0, 1)] = toInt(input);
          }
        );
        function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }
        var defaultLocaleWeek = {
          dow: 0,
          doy: 6
        };
        function localeFirstDayOfWeek() {
          return this._week.dow;
        }
        function localeFirstDayOfYear() {
          return this._week.doy;
        }
        function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        addFormatToken("d", 0, "do", "day");
        addFormatToken("dd", 0, 0, function(format2) {
          return this.localeData().weekdaysMin(this, format2);
        });
        addFormatToken("ddd", 0, 0, function(format2) {
          return this.localeData().weekdaysShort(this, format2);
        });
        addFormatToken("dddd", 0, 0, function(format2) {
          return this.localeData().weekdays(this, format2);
        });
        addFormatToken("e", 0, 0, "weekday");
        addFormatToken("E", 0, 0, "isoWeekday");
        addUnitAlias("day", "d");
        addUnitAlias("weekday", "e");
        addUnitAlias("isoWeekday", "E");
        addUnitPriority("day", 11);
        addUnitPriority("weekday", 11);
        addUnitPriority("isoWeekday", 11);
        addRegexToken("d", match1to2);
        addRegexToken("e", match1to2);
        addRegexToken("E", match1to2);
        addRegexToken("dd", function(isStrict, locale2) {
          return locale2.weekdaysMinRegex(isStrict);
        });
        addRegexToken("ddd", function(isStrict, locale2) {
          return locale2.weekdaysShortRegex(isStrict);
        });
        addRegexToken("dddd", function(isStrict, locale2) {
          return locale2.weekdaysRegex(isStrict);
        });
        addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
          var weekday = config._locale.weekdaysParse(input, token2, config._strict);
          if (weekday != null) {
            week.d = weekday;
          } else {
            getParsingFlags(config).invalidWeekday = input;
          }
        });
        addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
          week[token2] = toInt(input);
        });
        function parseWeekday(input, locale2) {
          if (typeof input !== "string") {
            return input;
          }
          if (!isNaN(input)) {
            return parseInt(input, 10);
          }
          input = locale2.weekdaysParse(input);
          if (typeof input === "number") {
            return input;
          }
          return null;
        }
        function parseIsoWeekday(input, locale2) {
          if (typeof input === "string") {
            return locale2.weekdaysParse(input) % 7 || 7;
          }
          return isNaN(input) ? null : input;
        }
        function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
        }
        var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
        function localeWeekdays(m, format2) {
          var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
          return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
        }
        function localeWeekdaysShort(m) {
          return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
        }
        function localeWeekdaysMin(m) {
          return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
        }
        function handleStrictParse$1(weekdayName, format2, strict) {
          var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (i = 0; i < 7; ++i) {
              mom = createUTC([2e3, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(
                mom,
                ""
              ).toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(
                mom,
                ""
              ).toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeWeekdaysParse(weekdayName, format2, strict) {
          var i, mom, regex;
          if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format2, strict);
          }
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp(
                "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
              this._shortWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
              this._minWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
            }
            if (!this._weekdaysParse[i]) {
              regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
              this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
            }
          }
        }
        function getSetDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, "d");
          } else {
            return day;
          }
        }
        function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, "d");
        }
        function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
            return this.day() || 7;
          }
        }
        function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysStrictRegex;
            } else {
              return this._weekdaysRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
          }
        }
        function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysShortStrictRegex;
            } else {
              return this._weekdaysShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysShortRegex")) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
          }
        }
        function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysMinStrictRegex;
            } else {
              return this._weekdaysMinRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysMinRegex")) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
          }
        }
        function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }
          var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ""));
            shortp = regexEscape(this.weekdaysShort(mom, ""));
            longp = regexEscape(this.weekdays(mom, ""));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
          }
          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;
          this._weekdaysStrictRegex = new RegExp(
            "^(" + longPieces.join("|") + ")",
            "i"
          );
          this._weekdaysShortStrictRegex = new RegExp(
            "^(" + shortPieces.join("|") + ")",
            "i"
          );
          this._weekdaysMinStrictRegex = new RegExp(
            "^(" + minPieces.join("|") + ")",
            "i"
          );
        }
        function hFormat() {
          return this.hours() % 12 || 12;
        }
        function kFormat() {
          return this.hours() || 24;
        }
        addFormatToken("H", ["HH", 2], 0, "hour");
        addFormatToken("h", ["hh", 2], 0, hFormat);
        addFormatToken("k", ["kk", 2], 0, kFormat);
        addFormatToken("hmm", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });
        addFormatToken("hmmss", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        addFormatToken("Hmm", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2);
        });
        addFormatToken("Hmmss", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        function meridiem(token2, lowercase) {
          addFormatToken(token2, 0, 0, function() {
            return this.localeData().meridiem(
              this.hours(),
              this.minutes(),
              lowercase
            );
          });
        }
        meridiem("a", true);
        meridiem("A", false);
        addUnitAlias("hour", "h");
        addUnitPriority("hour", 13);
        function matchMeridiem(isStrict, locale2) {
          return locale2._meridiemParse;
        }
        addRegexToken("a", matchMeridiem);
        addRegexToken("A", matchMeridiem);
        addRegexToken("H", match1to2);
        addRegexToken("h", match1to2);
        addRegexToken("k", match1to2);
        addRegexToken("HH", match1to2, match2);
        addRegexToken("hh", match1to2, match2);
        addRegexToken("kk", match1to2, match2);
        addRegexToken("hmm", match3to4);
        addRegexToken("hmmss", match5to6);
        addRegexToken("Hmm", match3to4);
        addRegexToken("Hmmss", match5to6);
        addParseToken(["H", "HH"], HOUR);
        addParseToken(["k", "kk"], function(input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken(["a", "A"], function(input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
        });
        addParseToken(["h", "hh"], function(input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("Hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken("Hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
        });
        function localeIsPM(input) {
          return (input + "").toLowerCase().charAt(0) === "p";
        }
        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
        function localeMeridiem(hours2, minutes2, isLower) {
          if (hours2 > 11) {
            return isLower ? "pm" : "PM";
          } else {
            return isLower ? "am" : "AM";
          }
        }
        var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,
          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,
          week: defaultLocaleWeek,
          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,
          meridiemParse: defaultLocaleMeridiemParse
        };
        var locales = {}, localeFamilies = {}, globalLocale;
        function commonPrefix(arr1, arr2) {
          var i, minl = Math.min(arr1.length, arr2.length);
          for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
              return i;
            }
          }
          return minl;
        }
        function normalizeLocale(key) {
          return key ? key.toLowerCase().replace("_", "-") : key;
        }
        function chooseLocale(names) {
          var i = 0, j, next, locale2, split;
          while (i < names.length) {
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while (j > 0) {
              locale2 = loadLocale(split.slice(0, j).join("-"));
              if (locale2) {
                return locale2;
              }
              if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
                break;
              }
              j--;
            }
            i++;
          }
          return globalLocale;
        }
        function isLocaleNameSane(name) {
          return name.match("^[^/\\\\]*$") != null;
        }
        function loadLocale(name) {
          var oldLocale = null, aliasedRequire;
          if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
            try {
              oldLocale = globalLocale._abbr;
              aliasedRequire = __require;
              aliasedRequire("./locale/" + name);
              getSetGlobalLocale(oldLocale);
            } catch (e) {
              locales[name] = null;
            }
          }
          return locales[name];
        }
        function getSetGlobalLocale(key, values) {
          var data;
          if (key) {
            if (isUndefined(values)) {
              data = getLocale(key);
            } else {
              data = defineLocale(key, values);
            }
            if (data) {
              globalLocale = data;
            } else {
              if (typeof console !== "undefined" && console.warn) {
                console.warn(
                  "Locale " + key + " not found. Did you forget to load it?"
                );
              }
            }
          }
          return globalLocale._abbr;
        }
        function defineLocale(name, config) {
          if (config !== null) {
            var locale2, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
              deprecateSimple(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              );
              parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
              } else {
                locale2 = loadLocale(config.parentLocale);
                if (locale2 != null) {
                  parentConfig = locale2._config;
                } else {
                  if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                  }
                  localeFamilies[config.parentLocale].push({
                    name,
                    config
                  });
                  return null;
                }
              }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) {
              localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
              });
            }
            getSetGlobalLocale(name);
            return locales[name];
          } else {
            delete locales[name];
            return null;
          }
        }
        function updateLocale(name, config) {
          if (config != null) {
            var locale2, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) {
              locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
              tmpLocale = loadLocale(name);
              if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
              }
              config = mergeConfigs(parentConfig, config);
              if (tmpLocale == null) {
                config.abbr = name;
              }
              locale2 = new Locale(config);
              locale2.parentLocale = locales[name];
              locales[name] = locale2;
            }
            getSetGlobalLocale(name);
          } else {
            if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                  getSetGlobalLocale(name);
                }
              } else if (locales[name] != null) {
                delete locales[name];
              }
            }
          }
          return locales[name];
        }
        function getLocale(key) {
          var locale2;
          if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
          }
          if (!key) {
            return globalLocale;
          }
          if (!isArray(key)) {
            locale2 = loadLocale(key);
            if (locale2) {
              return locale2;
            }
            key = [key];
          }
          return chooseLocale(key);
        }
        function listLocales() {
          return keys(locales);
        }
        function checkOverflow(m) {
          var overflow, a = m._a;
          if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
            }
            getParsingFlags(m).overflow = overflow;
          }
          return m;
        }
        var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, false],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, false],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, false],
          ["YYYY", /\d{4}/, false]
        ], isoTimes = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
          UT: 0,
          GMT: 0,
          EDT: -4 * 60,
          EST: -5 * 60,
          CDT: -5 * 60,
          CST: -6 * 60,
          MDT: -6 * 60,
          MST: -7 * 60,
          PDT: -7 * 60,
          PST: -8 * 60
        };
        function configFromISO(config) {
          var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
          if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDatesLen; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
              }
            }
            if (dateFormat == null) {
              config._isValid = false;
              return;
            }
            if (match[3]) {
              for (i = 0, l = isoTimesLen; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                  timeFormat = (match[2] || " ") + isoTimes[i][0];
                  break;
                }
              }
              if (timeFormat == null) {
                config._isValid = false;
                return;
              }
            }
            if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
            }
            if (match[4]) {
              if (tzRegex.exec(match[4])) {
                tzFormat = "Z";
              } else {
                config._isValid = false;
                return;
              }
            }
            config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
            configFromStringAndFormat(config);
          } else {
            config._isValid = false;
          }
        }
        function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
          var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
          ];
          if (secondStr) {
            result.push(parseInt(secondStr, 10));
          }
          return result;
        }
        function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);
          if (year <= 49) {
            return 2e3 + year;
          } else if (year <= 999) {
            return 1900 + year;
          }
          return year;
        }
        function preprocessRFC2822(s) {
          return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }
        function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
              parsedInput[0],
              parsedInput[1],
              parsedInput[2]
            ).getDay();
            if (weekdayProvided !== weekdayActual) {
              getParsingFlags(config).weekdayMismatch = true;
              config._isValid = false;
              return false;
            }
          }
          return true;
        }
        function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
            return obsOffsets[obsOffset];
          } else if (militaryOffset) {
            return 0;
          } else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
          }
        }
        function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
          if (match) {
            parsedArray = extractFromRFC2822Strings(
              match[4],
              match[3],
              match[2],
              match[5],
              match[6],
              match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
              return;
            }
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
          } else {
            config._isValid = false;
          }
        }
        function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);
          if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
          }
          configFromISO(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          configFromRFC2822(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          if (config._strict) {
            config._isValid = false;
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        hooks.createFromInputFallback = deprecate(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function(config) {
            config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
          }
        );
        function defaults(a, b, c) {
          if (a != null) {
            return a;
          }
          if (b != null) {
            return b;
          }
          return c;
        }
        function currentDateArray(config) {
          var nowValue = new Date(hooks.now());
          if (config._useUTC) {
            return [
              nowValue.getUTCFullYear(),
              nowValue.getUTCMonth(),
              nowValue.getUTCDate()
            ];
          }
          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
        }
        function configFromArray(config) {
          var i, date, input = [], currentDate, expectedWeekday, yearToUse;
          if (config._d) {
            return;
          }
          currentDate = currentDateArray(config);
          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
          }
          if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
              getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
          }
          for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
          }
          for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
          }
          if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
          }
          config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
          );
          expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
          if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }
          if (config._nextDay) {
            config._a[HOUR] = 24;
          }
          if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
          }
        }
        function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
          w = config._w;
          if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            weekYear = defaults(
              w.GG,
              config._a[YEAR],
              weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
            }
          } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
              weekday = w.d;
              if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
              }
            } else if (w.e != null) {
              weekday = w.e + dow;
              if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
              }
            } else {
              weekday = dow;
            }
          }
          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
          } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
          }
        }
        hooks.ISO_8601 = function() {
        };
        hooks.RFC_2822 = function() {
        };
        function configFromStringAndFormat(config) {
          if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
          }
          if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
          }
          config._a = [];
          getParsingFlags(config).empty = true;
          var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
          tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
          tokenLen = tokens2.length;
          for (i = 0; i < tokenLen; i++) {
            token2 = tokens2[i];
            parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
            if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));
              if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
              }
              string = string.slice(
                string.indexOf(parsedInput) + parsedInput.length
              );
              totalParsedInputLength += parsedInput.length;
            }
            if (formatTokenFunctions[token2]) {
              if (parsedInput) {
                getParsingFlags(config).empty = false;
              } else {
                getParsingFlags(config).unusedTokens.push(token2);
              }
              addTimeToArrayFromToken(token2, parsedInput, config);
            } else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token2);
            }
          }
          getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
          if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
          }
          if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = void 0;
          }
          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem;
          config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
          );
          era = getParsingFlags(config).era;
          if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
          }
          configFromArray(config);
          checkOverflow(config);
        }
        function meridiemFixWrap(locale2, hour, meridiem2) {
          var isPm;
          if (meridiem2 == null) {
            return hour;
          }
          if (locale2.meridiemHour != null) {
            return locale2.meridiemHour(hour, meridiem2);
          } else if (locale2.isPM != null) {
            isPm = locale2.isPM(meridiem2);
            if (isPm && hour < 12) {
              hour += 12;
            }
            if (!isPm && hour === 12) {
              hour = 0;
            }
            return hour;
          } else {
            return hour;
          }
        }
        function configFromStringAndArray(config) {
          var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
          if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
          }
          for (i = 0; i < configfLen; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) {
              validFormatFound = true;
            }
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
              if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                  bestFormatIsValid = true;
                }
              }
            } else {
              if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
              }
            }
          }
          extend(config, bestMoment || tempConfig);
        }
        function configFromObject(config) {
          if (config._d) {
            return;
          }
          var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
          config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function(obj) {
              return obj && parseInt(obj, 10);
            }
          );
          configFromArray(config);
        }
        function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));
          if (res._nextDay) {
            res.add(1, "d");
            res._nextDay = void 0;
          }
          return res;
        }
        function prepareConfig(config) {
          var input = config._i, format2 = config._f;
          config._locale = config._locale || getLocale(config._l);
          if (input === null || format2 === void 0 && input === "") {
            return createInvalid({ nullInput: true });
          }
          if (typeof input === "string") {
            config._i = input = config._locale.preparse(input);
          }
          if (isMoment(input)) {
            return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
            config._d = input;
          } else if (isArray(format2)) {
            configFromStringAndArray(config);
          } else if (format2) {
            configFromStringAndFormat(config);
          } else {
            configFromInput(config);
          }
          if (!isValid(config)) {
            config._d = null;
          }
          return config;
        }
        function configFromInput(config) {
          var input = config._i;
          if (isUndefined(input)) {
            config._d = new Date(hooks.now());
          } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
          } else if (typeof input === "string") {
            configFromString(config);
          } else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
              return parseInt(obj, 10);
            });
            configFromArray(config);
          } else if (isObject(input)) {
            configFromObject(config);
          } else if (isNumber(input)) {
            config._d = new Date(input);
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
          var c = {};
          if (format2 === true || format2 === false) {
            strict = format2;
            format2 = void 0;
          }
          if (locale2 === true || locale2 === false) {
            strict = locale2;
            locale2 = void 0;
          }
          if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
            input = void 0;
          }
          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale2;
          c._i = input;
          c._f = format2;
          c._strict = strict;
          return createFromConfig(c);
        }
        function createLocal(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, false);
        }
        var prototypeMin = deprecate(
          "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
          function() {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
              return other < this ? this : other;
            } else {
              return createInvalid();
            }
          }
        ), prototypeMax = deprecate(
          "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
          function() {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
              return other > this ? this : other;
            } else {
              return createInvalid();
            }
          }
        );
        function pickBy(fn, moments) {
          var res, i;
          if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
          }
          if (!moments.length) {
            return createLocal();
          }
          res = moments[0];
          for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
            }
          }
          return res;
        }
        function min() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isBefore", args);
        }
        function max() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isAfter", args);
        }
        var now = function() {
          return Date.now ? Date.now() : +new Date();
        };
        var ordering = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond"
        ];
        function isDurationValid(m) {
          var key, unitHasDecimal = false, i, orderLen = ordering.length;
          for (key in m) {
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
              return false;
            }
          }
          for (i = 0; i < orderLen; ++i) {
            if (m[ordering[i]]) {
              if (unitHasDecimal) {
                return false;
              }
              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
              }
            }
          }
          return true;
        }
        function isValid$1() {
          return this._isValid;
        }
        function createInvalid$1() {
          return createDuration(NaN);
        }
        function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
          this._isValid = isDurationValid(normalizedInput);
          this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
          this._days = +days2 + weeks2 * 7;
          this._months = +months2 + quarters * 3 + years2 * 12;
          this._data = {};
          this._locale = getLocale();
          this._bubble();
        }
        function isDuration(obj) {
          return obj instanceof Duration;
        }
        function absRound(number) {
          if (number < 0) {
            return Math.round(-1 * number) * -1;
          } else {
            return Math.round(number);
          }
        }
        function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
          for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
              diffs++;
            }
          }
          return diffs + lengthDiff;
        }
        function offset(token2, separator) {
          addFormatToken(token2, 0, 0, function() {
            var offset2 = this.utcOffset(), sign2 = "+";
            if (offset2 < 0) {
              offset2 = -offset2;
              sign2 = "-";
            }
            return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
          });
        }
        offset("Z", ":");
        offset("ZZ", "");
        addRegexToken("Z", matchShortOffset);
        addRegexToken("ZZ", matchShortOffset);
        addParseToken(["Z", "ZZ"], function(input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
        });
        var chunkOffset = /([\+\-]|\d\d)/gi;
        function offsetFromString(matcher, string) {
          var matches = (string || "").match(matcher), chunk, parts, minutes2;
          if (matches === null) {
            return null;
          }
          chunk = matches[matches.length - 1] || [];
          parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
          minutes2 = +(parts[1] * 60) + toInt(parts[2]);
          return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
        }
        function cloneWithOffset(input, model) {
          var res, diff2;
          if (model._isUTC) {
            res = model.clone();
            diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            res._d.setTime(res._d.valueOf() + diff2);
            hooks.updateOffset(res, false);
            return res;
          } else {
            return createLocal(input).local();
          }
        }
        function getDateOffset(m) {
          return -Math.round(m._d.getTimezoneOffset());
        }
        hooks.updateOffset = function() {
        };
        function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset2 = this._offset || 0, localAdjust;
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            if (typeof input === "string") {
              input = offsetFromString(matchShortOffset, input);
              if (input === null) {
                return this;
              }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
              this.add(localAdjust, "m");
            }
            if (offset2 !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                addSubtract(
                  this,
                  createDuration(input - offset2, "m"),
                  1,
                  false
                );
              } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
              }
            }
            return this;
          } else {
            return this._isUTC ? offset2 : getDateOffset(this);
          }
        }
        function getSetZone(input, keepLocalTime) {
          if (input != null) {
            if (typeof input !== "string") {
              input = -input;
            }
            this.utcOffset(input, keepLocalTime);
            return this;
          } else {
            return -this.utcOffset();
          }
        }
        function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
        }
        function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
              this.subtract(getDateOffset(this), "m");
            }
          }
          return this;
        }
        function setOffsetToParsedOffset() {
          if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === "string") {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
              this.utcOffset(tZone);
            } else {
              this.utcOffset(0, true);
            }
          }
          return this;
        }
        function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
            return false;
          }
          input = input ? createLocal(input).utcOffset() : 0;
          return (this.utcOffset() - input) % 60 === 0;
        }
        function isDaylightSavingTime() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }
        function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
          }
          var c = {}, other;
          copyConfig(c, this);
          c = prepareConfig(c);
          if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
            this._isDSTShifted = false;
          }
          return this._isDSTShifted;
        }
        function isLocal() {
          return this.isValid() ? !this._isUTC : false;
        }
        function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
        }
        function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }
        var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function createDuration(input, key) {
          var duration = input, match = null, sign2, ret, diffRes;
          if (isDuration(input)) {
            duration = {
              ms: input._milliseconds,
              d: input._days,
              M: input._months
            };
          } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
              duration[key] = +input;
            } else {
              duration.milliseconds = +input;
            }
          } else if (match = aspNetRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: 0,
              d: toInt(match[DATE]) * sign2,
              h: toInt(match[HOUR]) * sign2,
              m: toInt(match[MINUTE]) * sign2,
              s: toInt(match[SECOND]) * sign2,
              ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
            };
          } else if (match = isoRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: parseIso(match[2], sign2),
              M: parseIso(match[3], sign2),
              w: parseIso(match[4], sign2),
              d: parseIso(match[5], sign2),
              h: parseIso(match[6], sign2),
              m: parseIso(match[7], sign2),
              s: parseIso(match[8], sign2)
            };
          } else if (duration == null) {
            duration = {};
          } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
            diffRes = momentsDifference(
              createLocal(duration.from),
              createLocal(duration.to)
            );
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
          }
          ret = new Duration(duration);
          if (isDuration(input) && hasOwnProp(input, "_locale")) {
            ret._locale = input._locale;
          }
          if (isDuration(input) && hasOwnProp(input, "_isValid")) {
            ret._isValid = input._isValid;
          }
          return ret;
        }
        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;
        function parseIso(inp, sign2) {
          var res = inp && parseFloat(inp.replace(",", "."));
          return (isNaN(res) ? 0 : res) * sign2;
        }
        function positiveMomentsDifference(base, other) {
          var res = {};
          res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
          if (base.clone().add(res.months, "M").isAfter(other)) {
            --res.months;
          }
          res.milliseconds = +other - +base.clone().add(res.months, "M");
          return res;
        }
        function momentsDifference(base, other) {
          var res;
          if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
          }
          other = cloneWithOffset(other, base);
          if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
          } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
          }
          return res;
        }
        function createAdder(direction, name) {
          return function(val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
              deprecateSimple(
                name,
                "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
              );
              tmp = val;
              val = period;
              period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
          };
        }
        function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
          if (!mom.isValid()) {
            return;
          }
          updateOffset = updateOffset == null ? true : updateOffset;
          if (months2) {
            setMonth(mom, get(mom, "Month") + months2 * isAdding);
          }
          if (days2) {
            set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
          }
          if (milliseconds2) {
            mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
          }
          if (updateOffset) {
            hooks.updateOffset(mom, days2 || months2);
          }
        }
        var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
        function isString(input) {
          return typeof input === "string" || input instanceof String;
        }
        function isMomentInput(input) {
          return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
        }
        function isMomentInputObject(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms"
          ], i, property, propertyLen = properties.length;
          for (i = 0; i < propertyLen; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function isNumberOrStringArray(input) {
          var arrayTest = isArray(input), dataTypeTest = false;
          if (arrayTest) {
            dataTypeTest = input.filter(function(item) {
              return !isNumber(item) && isString(input);
            }).length === 0;
          }
          return arrayTest && dataTypeTest;
        }
        function isCalendarSpec(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse"
          ], i, property;
          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function getCalendarFormat(myMoment, now2) {
          var diff2 = myMoment.diff(now2, "days", true);
          return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
        }
        function calendar$1(time, formats) {
          if (arguments.length === 1) {
            if (!arguments[0]) {
              time = void 0;
              formats = void 0;
            } else if (isMomentInput(arguments[0])) {
              time = arguments[0];
              formats = void 0;
            } else if (isCalendarSpec(arguments[0])) {
              formats = arguments[0];
              time = void 0;
            }
          }
          var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
          return this.format(
            output || this.localeData().calendar(format2, this, createLocal(now2))
          );
        }
        function clone() {
          return new Moment(this);
        }
        function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() > localInput.valueOf();
          } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
        }
        function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() < localInput.valueOf();
          } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
        }
        function isBetween(from2, to2, units, inclusivity) {
          var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
          }
          inclusivity = inclusivity || "()";
          return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
        }
        function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input), inputMs;
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() === localInput.valueOf();
          } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
          }
        }
        function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
        }
        function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
        }
        function diff(input, units, asFloat) {
          var that, zoneDelta, output;
          if (!this.isValid()) {
            return NaN;
          }
          that = cloneWithOffset(input, this);
          if (!that.isValid()) {
            return NaN;
          }
          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
          units = normalizeUnits(units);
          switch (units) {
            case "year":
              output = monthDiff(this, that) / 12;
              break;
            case "month":
              output = monthDiff(this, that);
              break;
            case "quarter":
              output = monthDiff(this, that) / 3;
              break;
            case "second":
              output = (this - that) / 1e3;
              break;
            case "minute":
              output = (this - that) / 6e4;
              break;
            case "hour":
              output = (this - that) / 36e5;
              break;
            case "day":
              output = (this - that - zoneDelta) / 864e5;
              break;
            case "week":
              output = (this - that - zoneDelta) / 6048e5;
              break;
            default:
              output = this - that;
          }
          return asFloat ? output : absFloor(output);
        }
        function monthDiff(a, b) {
          if (a.date() < b.date()) {
            return -monthDiff(b, a);
          }
          var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
          if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
            adjust = (b - anchor) / (anchor - anchor2);
          } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
            adjust = (b - anchor) / (anchor2 - anchor);
          }
          return -(wholeMonthDiff + adjust) || 0;
        }
        hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        function toString() {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function toISOString(keepOffset) {
          if (!this.isValid()) {
            return null;
          }
          var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
          if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
              m,
              utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
          }
          if (isFunction(Date.prototype.toISOString)) {
            if (utc) {
              return this.toDate().toISOString();
            } else {
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
            }
          }
          return formatMoment(
            m,
            utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
        }
        function inspect() {
          if (!this.isValid()) {
            return "moment.invalid(/* " + this._i + " */)";
          }
          var func = "moment", zone = "", prefix, year, datetime, suffix;
          if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            zone = "Z";
          }
          prefix = "[" + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
          datetime = "-MM-DD[T]HH:mm:ss.SSS";
          suffix = zone + '[")]';
          return this.format(prefix + year + datetime + suffix);
        }
        function format(inputString) {
          if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
          }
          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
        }
        function from(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
        }
        function to(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
        }
        function locale(key) {
          var newLocaleData;
          if (key === void 0) {
            return this._locale._abbr;
          } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
              this._locale = newLocaleData;
            }
            return this;
          }
        }
        var lang = deprecate(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function(key) {
            if (key === void 0) {
              return this.localeData();
            } else {
              return this.locale(key);
            }
          }
        );
        function localeData() {
          return this._locale;
        }
        var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
        function mod$1(dividend, divisor) {
          return (dividend % divisor + divisor) % divisor;
        }
        function localStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return new Date(y, m, d).valueOf();
          }
        }
        function utcStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return Date.UTC(y, m, d);
          }
        }
        function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year(), 0, 1);
              break;
            case "quarter":
              time = startOfDate(
                this.year(),
                this.month() - this.month() % 3,
                1
              );
              break;
            case "month":
              time = startOfDate(this.year(), this.month(), 1);
              break;
            case "week":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday()
              );
              break;
            case "isoWeek":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
              );
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date());
              break;
            case "hour":
              time = this._d.valueOf();
              time -= mod$1(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
              );
              break;
            case "minute":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_MINUTE);
              break;
            case "second":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_SECOND);
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              time = startOfDate(
                this.year(),
                this.month() - this.month() % 3 + 3,
                1
              ) - 1;
              break;
            case "month":
              time = startOfDate(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday() + 7
              ) - 1;
              break;
            case "isoWeek":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              time = this._d.valueOf();
              time += MS_PER_HOUR - mod$1(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
              ) - 1;
              break;
            case "minute":
              time = this._d.valueOf();
              time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
              break;
            case "second":
              time = this._d.valueOf();
              time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 6e4;
        }
        function unix() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function toDate() {
          return new Date(this.valueOf());
        }
        function toArray() {
          var m = this;
          return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond()
          ];
        }
        function toObject() {
          var m = this;
          return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
          };
        }
        function toJSON() {
          return this.isValid() ? this.toISOString() : null;
        }
        function isValid$2() {
          return isValid(this);
        }
        function parsingFlags() {
          return extend({}, getParsingFlags(this));
        }
        function invalidAt() {
          return getParsingFlags(this).overflow;
        }
        function creationData() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }
        addFormatToken("N", 0, 0, "eraAbbr");
        addFormatToken("NN", 0, 0, "eraAbbr");
        addFormatToken("NNN", 0, 0, "eraAbbr");
        addFormatToken("NNNN", 0, 0, "eraName");
        addFormatToken("NNNNN", 0, 0, "eraNarrow");
        addFormatToken("y", ["y", 1], "yo", "eraYear");
        addFormatToken("y", ["yy", 2], 0, "eraYear");
        addFormatToken("y", ["yyy", 3], 0, "eraYear");
        addFormatToken("y", ["yyyy", 4], 0, "eraYear");
        addRegexToken("N", matchEraAbbr);
        addRegexToken("NN", matchEraAbbr);
        addRegexToken("NNN", matchEraAbbr);
        addRegexToken("NNNN", matchEraName);
        addRegexToken("NNNNN", matchEraNarrow);
        addParseToken(
          ["N", "NN", "NNN", "NNNN", "NNNNN"],
          function(input, array, config, token2) {
            var era = config._locale.erasParse(input, token2, config._strict);
            if (era) {
              getParsingFlags(config).era = era;
            } else {
              getParsingFlags(config).invalidEra = input;
            }
          }
        );
        addRegexToken("y", matchUnsigned);
        addRegexToken("yy", matchUnsigned);
        addRegexToken("yyy", matchUnsigned);
        addRegexToken("yyyy", matchUnsigned);
        addRegexToken("yo", matchEraYearOrdinal);
        addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
        addParseToken(["yo"], function(input, array, config, token2) {
          var match;
          if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
          }
          if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
            array[YEAR] = parseInt(input, 10);
          }
        });
        function localeEras(m, format2) {
          var i, l, date, eras = this._eras || getLocale("en")._eras;
          for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
              case "string":
                date = hooks(eras[i].since).startOf("day");
                eras[i].since = date.valueOf();
                break;
            }
            switch (typeof eras[i].until) {
              case "undefined":
                eras[i].until = Infinity;
                break;
              case "string":
                date = hooks(eras[i].until).startOf("day").valueOf();
                eras[i].until = date.valueOf();
                break;
            }
          }
          return eras;
        }
        function localeErasParse(eraName, format2, strict) {
          var i, l, eras = this.eras(), name, abbr, narrow;
          eraName = eraName.toUpperCase();
          for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) {
              switch (format2) {
                case "N":
                case "NN":
                case "NNN":
                  if (abbr === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNN":
                  if (name === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNNN":
                  if (narrow === eraName) {
                    return eras[i];
                  }
                  break;
              }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
              return eras[i];
            }
          }
        }
        function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? 1 : -1;
          if (year === void 0) {
            return hooks(era.since).year();
          } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
          }
        }
        function getEraName() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].name;
            }
          }
          return "";
        }
        function getEraNarrow() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].narrow;
            }
          }
          return "";
        }
        function getEraAbbr() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].abbr;
            }
          }
          return "";
        }
        function getEraYear() {
          var i, l, dir, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
              return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
            }
          }
          return this.year();
        }
        function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNameRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNameRegex : this._erasRegex;
        }
        function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, "_erasAbbrRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasAbbrRegex : this._erasRegex;
        }
        function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNarrowRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNarrowRegex : this._erasRegex;
        }
        function matchEraAbbr(isStrict, locale2) {
          return locale2.erasAbbrRegex(isStrict);
        }
        function matchEraName(isStrict, locale2) {
          return locale2.erasNameRegex(isStrict);
        }
        function matchEraNarrow(isStrict, locale2) {
          return locale2.erasNarrowRegex(isStrict);
        }
        function matchEraYearOrdinal(isStrict, locale2) {
          return locale2._eraYearOrdinalRegex || matchUnsigned;
        }
        function computeErasParse() {
          var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
          }
          this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
          this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
          this._erasNarrowRegex = new RegExp(
            "^(" + narrowPieces.join("|") + ")",
            "i"
          );
        }
        addFormatToken(0, ["gg", 2], 0, function() {
          return this.weekYear() % 100;
        });
        addFormatToken(0, ["GG", 2], 0, function() {
          return this.isoWeekYear() % 100;
        });
        function addWeekYearFormatToken(token2, getter) {
          addFormatToken(0, [token2, token2.length], 0, getter);
        }
        addWeekYearFormatToken("gggg", "weekYear");
        addWeekYearFormatToken("ggggg", "weekYear");
        addWeekYearFormatToken("GGGG", "isoWeekYear");
        addWeekYearFormatToken("GGGGG", "isoWeekYear");
        addUnitAlias("weekYear", "gg");
        addUnitAlias("isoWeekYear", "GG");
        addUnitPriority("weekYear", 1);
        addUnitPriority("isoWeekYear", 1);
        addRegexToken("G", matchSigned);
        addRegexToken("g", matchSigned);
        addRegexToken("GG", match1to2, match2);
        addRegexToken("gg", match1to2, match2);
        addRegexToken("GGGG", match1to4, match4);
        addRegexToken("gggg", match1to4, match4);
        addRegexToken("GGGGG", match1to6, match6);
        addRegexToken("ggggg", match1to6, match6);
        addWeekParseToken(
          ["gggg", "ggggg", "GGGG", "GGGGG"],
          function(input, week, config, token2) {
            week[token2.substr(0, 2)] = toInt(input);
          }
        );
        addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
          week[token2] = hooks.parseTwoDigitYear(input);
        });
        function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
          );
        }
        function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
          );
        }
        function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
        }
        function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
        }
        function getWeeksInYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }
        function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
        }
        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;
          if (input == null) {
            return weekOfYear(this, dow, doy).year;
          } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
              week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
        }
        function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
        }
        addFormatToken("Q", 0, "Qo", "quarter");
        addUnitAlias("quarter", "Q");
        addUnitPriority("quarter", 7);
        addRegexToken("Q", match1);
        addParseToken("Q", function(input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
        });
        function getSetQuarter(input) {
          return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        }
        addFormatToken("D", ["DD", 2], "Do", "date");
        addUnitAlias("date", "D");
        addUnitPriority("date", 9);
        addRegexToken("D", match1to2);
        addRegexToken("DD", match1to2, match2);
        addRegexToken("Do", function(isStrict, locale2) {
          return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
        });
        addParseToken(["D", "DD"], DATE);
        addParseToken("Do", function(input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
        });
        var getSetDayOfMonth = makeGetSet("Date", true);
        addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
        addUnitAlias("dayOfYear", "DDD");
        addUnitPriority("dayOfYear", 4);
        addRegexToken("DDD", match1to3);
        addRegexToken("DDDD", match3);
        addParseToken(["DDD", "DDDD"], function(input, array, config) {
          config._dayOfYear = toInt(input);
        });
        function getSetDayOfYear(input) {
          var dayOfYear = Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
        }
        addFormatToken("m", ["mm", 2], 0, "minute");
        addUnitAlias("minute", "m");
        addUnitPriority("minute", 14);
        addRegexToken("m", match1to2);
        addRegexToken("mm", match1to2, match2);
        addParseToken(["m", "mm"], MINUTE);
        var getSetMinute = makeGetSet("Minutes", false);
        addFormatToken("s", ["ss", 2], 0, "second");
        addUnitAlias("second", "s");
        addUnitPriority("second", 15);
        addRegexToken("s", match1to2);
        addRegexToken("ss", match1to2, match2);
        addParseToken(["s", "ss"], SECOND);
        var getSetSecond = makeGetSet("Seconds", false);
        addFormatToken("S", 0, 0, function() {
          return ~~(this.millisecond() / 100);
        });
        addFormatToken(0, ["SS", 2], 0, function() {
          return ~~(this.millisecond() / 10);
        });
        addFormatToken(0, ["SSS", 3], 0, "millisecond");
        addFormatToken(0, ["SSSS", 4], 0, function() {
          return this.millisecond() * 10;
        });
        addFormatToken(0, ["SSSSS", 5], 0, function() {
          return this.millisecond() * 100;
        });
        addFormatToken(0, ["SSSSSS", 6], 0, function() {
          return this.millisecond() * 1e3;
        });
        addFormatToken(0, ["SSSSSSS", 7], 0, function() {
          return this.millisecond() * 1e4;
        });
        addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
          return this.millisecond() * 1e5;
        });
        addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
          return this.millisecond() * 1e6;
        });
        addUnitAlias("millisecond", "ms");
        addUnitPriority("millisecond", 16);
        addRegexToken("S", match1to3, match1);
        addRegexToken("SS", match1to3, match2);
        addRegexToken("SSS", match1to3, match3);
        var token, getSetMillisecond;
        for (token = "SSSS"; token.length <= 9; token += "S") {
          addRegexToken(token, matchUnsigned);
        }
        function parseMs(input, array) {
          array[MILLISECOND] = toInt(("0." + input) * 1e3);
        }
        for (token = "S"; token.length <= 9; token += "S") {
          addParseToken(token, parseMs);
        }
        getSetMillisecond = makeGetSet("Milliseconds", false);
        addFormatToken("z", 0, 0, "zoneAbbr");
        addFormatToken("zz", 0, 0, "zoneName");
        function getZoneAbbr() {
          return this._isUTC ? "UTC" : "";
        }
        function getZoneName() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        var proto = Moment.prototype;
        proto.add = add;
        proto.calendar = calendar$1;
        proto.clone = clone;
        proto.diff = diff;
        proto.endOf = endOf;
        proto.format = format;
        proto.from = from;
        proto.fromNow = fromNow;
        proto.to = to;
        proto.toNow = toNow;
        proto.get = stringGet;
        proto.invalidAt = invalidAt;
        proto.isAfter = isAfter;
        proto.isBefore = isBefore;
        proto.isBetween = isBetween;
        proto.isSame = isSame;
        proto.isSameOrAfter = isSameOrAfter;
        proto.isSameOrBefore = isSameOrBefore;
        proto.isValid = isValid$2;
        proto.lang = lang;
        proto.locale = locale;
        proto.localeData = localeData;
        proto.max = prototypeMax;
        proto.min = prototypeMin;
        proto.parsingFlags = parsingFlags;
        proto.set = stringSet;
        proto.startOf = startOf;
        proto.subtract = subtract;
        proto.toArray = toArray;
        proto.toObject = toObject;
        proto.toDate = toDate;
        proto.toISOString = toISOString;
        proto.inspect = inspect;
        if (typeof Symbol !== "undefined" && Symbol.for != null) {
          proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return "Moment<" + this.format() + ">";
          };
        }
        proto.toJSON = toJSON;
        proto.toString = toString;
        proto.unix = unix;
        proto.valueOf = valueOf;
        proto.creationData = creationData;
        proto.eraName = getEraName;
        proto.eraNarrow = getEraNarrow;
        proto.eraAbbr = getEraAbbr;
        proto.eraYear = getEraYear;
        proto.year = getSetYear;
        proto.isLeapYear = getIsLeapYear;
        proto.weekYear = getSetWeekYear;
        proto.isoWeekYear = getSetISOWeekYear;
        proto.quarter = proto.quarters = getSetQuarter;
        proto.month = getSetMonth;
        proto.daysInMonth = getDaysInMonth;
        proto.week = proto.weeks = getSetWeek;
        proto.isoWeek = proto.isoWeeks = getSetISOWeek;
        proto.weeksInYear = getWeeksInYear;
        proto.weeksInWeekYear = getWeeksInWeekYear;
        proto.isoWeeksInYear = getISOWeeksInYear;
        proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
        proto.date = getSetDayOfMonth;
        proto.day = proto.days = getSetDayOfWeek;
        proto.weekday = getSetLocaleDayOfWeek;
        proto.isoWeekday = getSetISODayOfWeek;
        proto.dayOfYear = getSetDayOfYear;
        proto.hour = proto.hours = getSetHour;
        proto.minute = proto.minutes = getSetMinute;
        proto.second = proto.seconds = getSetSecond;
        proto.millisecond = proto.milliseconds = getSetMillisecond;
        proto.utcOffset = getSetOffset;
        proto.utc = setOffsetToUTC;
        proto.local = setOffsetToLocal;
        proto.parseZone = setOffsetToParsedOffset;
        proto.hasAlignedHourOffset = hasAlignedHourOffset;
        proto.isDST = isDaylightSavingTime;
        proto.isLocal = isLocal;
        proto.isUtcOffset = isUtcOffset;
        proto.isUtc = isUtc;
        proto.isUTC = isUtc;
        proto.zoneAbbr = getZoneAbbr;
        proto.zoneName = getZoneName;
        proto.dates = deprecate(
          "dates accessor is deprecated. Use date instead.",
          getSetDayOfMonth
        );
        proto.months = deprecate(
          "months accessor is deprecated. Use month instead",
          getSetMonth
        );
        proto.years = deprecate(
          "years accessor is deprecated. Use year instead",
          getSetYear
        );
        proto.zone = deprecate(
          "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
          getSetZone
        );
        proto.isDSTShifted = deprecate(
          "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
          isDaylightSavingTimeShifted
        );
        function createUnix(input) {
          return createLocal(input * 1e3);
        }
        function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
        }
        function preParsePostFormat(string) {
          return string;
        }
        var proto$1 = Locale.prototype;
        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set;
        proto$1.eras = localeEras;
        proto$1.erasParse = localeErasParse;
        proto$1.erasConvertYear = localeErasConvertYear;
        proto$1.erasAbbrRegex = erasAbbrRegex;
        proto$1.erasNameRegex = erasNameRegex;
        proto$1.erasNarrowRegex = erasNarrowRegex;
        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;
        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;
        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;
        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;
        function get$1(format2, index, field, setter) {
          var locale2 = getLocale(), utc = createUTC().set(setter, index);
          return locale2[field](utc, format2);
        }
        function listMonthsImpl(format2, index, field) {
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
          if (index != null) {
            return get$1(format2, index, field, "month");
          }
          var i, out = [];
          for (i = 0; i < 12; i++) {
            out[i] = get$1(format2, i, field, "month");
          }
          return out;
        }
        function listWeekdaysImpl(localeSorted, format2, index, field) {
          if (typeof localeSorted === "boolean") {
            if (isNumber(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          } else {
            format2 = localeSorted;
            index = format2;
            localeSorted = false;
            if (isNumber(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          }
          var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
          if (index != null) {
            return get$1(format2, (index + shift) % 7, field, "day");
          }
          for (i = 0; i < 7; i++) {
            out[i] = get$1(format2, (i + shift) % 7, field, "day");
          }
          return out;
        }
        function listMonths(format2, index) {
          return listMonthsImpl(format2, index, "months");
        }
        function listMonthsShort(format2, index) {
          return listMonthsImpl(format2, index, "monthsShort");
        }
        function listWeekdays(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
        }
        function listWeekdaysShort(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
        }
        function listWeekdaysMin(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
        }
        getSetGlobalLocale("en", {
          eras: [
            {
              since: "0001-01-01",
              until: Infinity,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD"
            },
            {
              since: "0000-12-31",
              until: -Infinity,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC"
            }
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
            return number + output;
          }
        });
        hooks.lang = deprecate(
          "moment.lang is deprecated. Use moment.locale instead.",
          getSetGlobalLocale
        );
        hooks.langData = deprecate(
          "moment.langData is deprecated. Use moment.localeData instead.",
          getLocale
        );
        var mathAbs = Math.abs;
        function abs() {
          var data = this._data;
          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);
          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);
          return this;
        }
        function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);
          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;
          return duration._bubble();
        }
        function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
        }
        function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
        }
        function absCeil(number) {
          if (number < 0) {
            return Math.floor(number);
          } else {
            return Math.ceil(number);
          }
        }
        function bubble() {
          var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
          if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
            milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
            days2 = 0;
            months2 = 0;
          }
          data.milliseconds = milliseconds2 % 1e3;
          seconds2 = absFloor(milliseconds2 / 1e3);
          data.seconds = seconds2 % 60;
          minutes2 = absFloor(seconds2 / 60);
          data.minutes = minutes2 % 60;
          hours2 = absFloor(minutes2 / 60);
          data.hours = hours2 % 24;
          days2 += absFloor(hours2 / 24);
          monthsFromDays = absFloor(daysToMonths(days2));
          months2 += monthsFromDays;
          days2 -= absCeil(monthsToDays(monthsFromDays));
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          data.days = days2;
          data.months = months2;
          data.years = years2;
          return this;
        }
        function daysToMonths(days2) {
          return days2 * 4800 / 146097;
        }
        function monthsToDays(months2) {
          return months2 * 146097 / 4800;
        }
        function as(units) {
          if (!this.isValid()) {
            return NaN;
          }
          var days2, months2, milliseconds2 = this._milliseconds;
          units = normalizeUnits(units);
          if (units === "month" || units === "quarter" || units === "year") {
            days2 = this._days + milliseconds2 / 864e5;
            months2 = this._months + daysToMonths(days2);
            switch (units) {
              case "month":
                return months2;
              case "quarter":
                return months2 / 3;
              case "year":
                return months2 / 12;
            }
          } else {
            days2 = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
              case "week":
                return days2 / 7 + milliseconds2 / 6048e5;
              case "day":
                return days2 + milliseconds2 / 864e5;
              case "hour":
                return days2 * 24 + milliseconds2 / 36e5;
              case "minute":
                return days2 * 1440 + milliseconds2 / 6e4;
              case "second":
                return days2 * 86400 + milliseconds2 / 1e3;
              case "millisecond":
                return Math.floor(days2 * 864e5) + milliseconds2;
              default:
                throw new Error("Unknown unit " + units);
            }
          }
        }
        function valueOf$1() {
          if (!this.isValid()) {
            return NaN;
          }
          return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
        }
        function makeAs(alias) {
          return function() {
            return this.as(alias);
          };
        }
        var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
        function clone$1() {
          return createDuration(this);
        }
        function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + "s"]() : NaN;
        }
        function makeGetter(name) {
          return function() {
            return this.isValid() ? this._data[name] : NaN;
          };
        }
        var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
        function weeks() {
          return absFloor(this.days() / 7);
        }
        var round = Math.round, thresholds = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          w: null,
          M: 11
        };
        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
          return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
        }
        function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
          var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
          if (thresholds2.w != null) {
            a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
          }
          a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale2;
          return substituteTimeAgo.apply(null, a);
        }
        function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === void 0) {
            return round;
          }
          if (typeof roundingFunction === "function") {
            round = roundingFunction;
            return true;
          }
          return false;
        }
        function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === void 0) {
            return false;
          }
          if (limit === void 0) {
            return thresholds[threshold];
          }
          thresholds[threshold] = limit;
          if (threshold === "s") {
            thresholds.ss = limit - 1;
          }
          return true;
        }
        function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var withSuffix = false, th = thresholds, locale2, output;
          if (typeof argWithSuffix === "object") {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
          }
          if (typeof argWithSuffix === "boolean") {
            withSuffix = argWithSuffix;
          }
          if (typeof argThresholds === "object") {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
              th.ss = argThresholds.s - 1;
            }
          }
          locale2 = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale2);
          if (withSuffix) {
            output = locale2.pastFuture(+this, output);
          }
          return locale2.postformat(output);
        }
        var abs$1 = Math.abs;
        function sign(x) {
          return (x > 0) - (x < 0) || +x;
        }
        function toISOString$1() {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
          if (!total) {
            return "P0D";
          }
          minutes2 = absFloor(seconds2 / 60);
          hours2 = absFloor(minutes2 / 60);
          seconds2 %= 60;
          minutes2 %= 60;
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
          totalSign = total < 0 ? "-" : "";
          ymSign = sign(this._months) !== sign(total) ? "-" : "";
          daysSign = sign(this._days) !== sign(total) ? "-" : "";
          hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
          return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
        }
        var proto$2 = Duration.prototype;
        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asQuarters = asQuarters;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;
        proto$2.toIsoString = deprecate(
          "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
          toISOString$1
        );
        proto$2.lang = lang;
        addFormatToken("X", 0, 0, "unix");
        addFormatToken("x", 0, 0, "valueOf");
        addRegexToken("x", matchSigned);
        addRegexToken("X", matchTimestamp);
        addParseToken("X", function(input, array, config) {
          config._d = new Date(parseFloat(input) * 1e3);
        });
        addParseToken("x", function(input, array, config) {
          config._d = new Date(toInt(input));
        });
        hooks.version = "2.29.4";
        setHookCallback(createLocal);
        hooks.fn = proto;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto;
        hooks.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM"
        };
        return hooks;
      });
    }
  });

  // assets/src/admin/js/RequestManager/EndPoints.js
  var EndPoints_exports = {};
  __export(EndPoints_exports, {
    clearHistoryUrl: () => clearHistoryUrl,
    competitorData: () => competitorData,
    contentFeedback: () => contentFeedback,
    continueWriting: () => continueWriting,
    createHistoryUrl: () => createHistoryUrl,
    expandOutline: () => expandOutline,
    filterNlpKeywordsUrl: () => filterNlpKeywordsUrl,
    genieChat: () => genieChat,
    genieChatClear: () => genieChatClear,
    genieChatList: () => genieChatList,
    genieChatSave: () => genieChatSave,
    genieImage: () => genieImage,
    genieImageSave: () => genieImageSave,
    genieMode: () => genieMode,
    getLicenseToken: () => getLicenseToken,
    historyData: () => historyData,
    keywordsData: () => keywordsData,
    limitUsage: () => limitUsage,
    nlpKeywords: () => nlpKeywords,
    nlpKeywordsUrl: () => nlpKeywordsUrl,
    oneClickBlog: () => oneClickBlog,
    outlines: () => outlines,
    plagiarismData: () => plagiarismData,
    relatedKeywords: () => relatedKeywords,
    removeLicenseToken: () => removeLicenseToken,
    semanticKeywords: () => semanticKeywords,
    storeApiUrl: () => storeApiUrl,
    subscriptionUpdateUrl: () => subscriptionUpdateUrl,
    topicalMap: () => topicalMap,
    updateUsageUrl: () => updateUsageUrl,
    webviewDataCreate: () => webviewDataCreate,
    webviewDataList: () => webviewDataList,
    webviewDeletePost: () => webviewDeletePost,
    webviewGetBlogWizardData: () => webviewGetBlogWizardData,
    writeIntro: () => writeIntro,
    writeTemplates: () => writeTemplates,
    writeTitle: () => writeTitle
  });
  var allUrls = window.getGenie.config;
  var parserApiUrl = allUrls.parserApi;
  var licenseApiUrl = allUrls.licenseApi;
  var historyData = allUrls.historyApi + "list";
  var createHistoryUrl = allUrls.historyApi + "create";
  var clearHistoryUrl = allUrls.historyApi + "clear";
  var updateUsageUrl = allUrls.baseApi + "user_usage_log";
  var writeTemplates = parserApiUrl + "writer-default/generate-templates-content";
  var writeIntro = parserApiUrl + "writer-wizard/generate-intro";
  var writeTitle = parserApiUrl + "writer-wizard/generate-title";
  var outlines = parserApiUrl + "writer-wizard/generate-outline";
  var nlpKeywordsUrl = parserApiUrl + "writer-wizard/keyword-cluster";
  var filterNlpKeywordsUrl = parserApiUrl + "writer-wizard/filter-nlp-keyword";
  var keywordsData = parserApiUrl + "writer-wizard/keyword-doctor";
  var competitorData = parserApiUrl + "writer-wizard/serp-data";
  var plagiarismData = parserApiUrl + "writer-wizard/plagiarism-checker";
  var continueWriting = parserApiUrl + "advanced-writing/continue-writing";
  var expandOutline = parserApiUrl + "advanced-writing/outline-expand";
  var genieMode = parserApiUrl + "advanced-writing/genie-mode";
  var oneClickBlog = parserApiUrl + "writer-wizard/generate-one-click-blog";
  var contentFeedback = allUrls.feedbackApi;
  var storeApiUrl = allUrls.storeApi + window.getGenie.blogWizardData?.post_id;
  var getLicenseToken = licenseApiUrl + "get-token";
  var removeLicenseToken = licenseApiUrl + "remove-token";
  var limitUsage = allUrls.usageLimitStatsApi;
  var subscriptionUpdateUrl = allUrls.subscriptionUpgradeUrlApi;
  var genieImage = parserApiUrl + "genie-image/generate-image";
  var genieImageSave = allUrls.baseApi + "genie-image/upload";
  var genieChat = parserApiUrl + "chat/default";
  var genieChatSave = allUrls.genieChatApi + "create";
  var genieChatList = allUrls.genieChatApi + "list";
  var genieChatClear = allUrls.genieChatApi + "clear";
  var webviewDataCreate = allUrls.webviewBaseApi + "save";
  var webviewDeletePost = allUrls.webviewBaseApi + "delete";
  var webviewDataList = allUrls.webviewBaseApi + "list";
  var webviewGetBlogWizardData = allUrls.webviewBaseApi + "doc_meta";
  var relatedKeywords = parserApiUrl + "writer-wizard/related-keywords";
  var nlpKeywords = parserApiUrl + "writer-wizard/nlp-keywords";
  var semanticKeywords = parserApiUrl + "writer-wizard/semantic-keywords";
  var topicalMap = parserApiUrl + "writer-wizard/topical-map";

  // assets/src/admin/js/Common/Libs/Notification.js
  var { notification } = window.antd;

  // assets/src/admin/js/RequestManager/HandleResponse.js
  var { Modal } = window.antd;

  // assets/src/admin/js/Common/Utilities/index.js
  var import_moment = __toESM(require_moment());
  var Helpers = class {
    storeTimeout = {};
    callStoreApi(name, data) {
      if (!window.getGenie.blogWizardData?.post_id) {
        return;
      }
      if (window.getGenie.config.saveData) {
        window.getGenie.config.saveData(name, data);
      } else {
        const url = EndPoints_exports.storeApiUrl + "/" + name + "/";
        fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-WP-Nonce": window.getGenie.config?.restNonce || ""
          }
        });
      }
    }
    storeData = (name) => {
      if (this.storeTimeout[name]) {
        clearTimeout(this.storeTimeout[name]);
      }
      this.storeTimeout[name] = setTimeout(() => {
        const inputs = wp.data.select("getgenie").getInputs();
        this.callStoreApi(name, inputs[name] || "");
      }, 3e3);
    };
    copyToClipboard(copyAbleText) {
      if (navigator?.clipboard && window?.isSecureContext) {
        return navigator.clipboard.writeText(copyAbleText);
      } else {
        let textArea = document.createElement("textarea");
        textArea.value = copyAbleText;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((resolve, reject) => {
          document.execCommand("copy") ? resolve() : reject();
          textArea.remove();
        });
      }
    }
    formatLargeNumber(n) {
      if (n < 1e3)
        return n;
      if (n >= 1e3 && n < 1e6)
        return +(n / 1e3).toFixed(1) + "K";
      if (n >= 1e6 && n < 1e9)
        return +(n / 1e6).toFixed(1) + "M";
      if (n >= 1e9 && n < 1e12)
        return +(n / 1e9).toFixed(1) + "B";
      if (n >= 1e12)
        return +(n / 1e12).toFixed(1) + "T";
    }
    getDomainName(url) {
      try {
        const parsedUrl = new URL(url);
        return parsedUrl.hostname.split(".").slice(-2).join(".");
      } catch (e) {
        return "";
      }
    }
    saveSidebarControllerOption(key, value) {
      if (!key || !value) {
        return;
      }
      localStorage.setItem(key, JSON.stringify(value));
      if (key == "getgenie-language") {
        wp.data.dispatch("getgenie").setSidebar({
          currentLanguage: value
        });
      }
    }
    snakeToTitleCase = (str) => {
      let initial = str.replace(/^[_]*(.)/, (_, char) => char.toUpperCase());
      let result = initial.replace(/[_]+(.)/g, (_, char) => " " + char.toUpperCase());
      return result;
    };
    camelCaseToTitleCase(text) {
      const result = text.replace(/([A-Z])/g, " $1").trim();
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
      return finalResult;
    }
    hyphenatedToCamelCase(text) {
      return text.replace(/-([a-z])/g, (g) => {
        return g[1].toUpperCase();
      });
    }
    joinArray(values, separator = "-") {
      if (values && values.length > 1) {
        return values.join(separator);
      }
      return "";
    }
    sortObjArray(a, b) {
      if (a.last_nom < b.last_nom) {
        return -1;
      }
      if (a.last_nom > b.last_nom) {
        return 1;
      }
      return 0;
    }
    convertToSlug(text) {
      return text?.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");
    }
    getCurrentDateTime = (date) => {
      const isPlayground = window.getGenie?.isPlayground;
      if (!isPlayground) {
        return date;
      }
      const format = "YYYY-MM-DD HH:mm:ssZ";
      const adjustedTime = (0, import_moment.default)(date, format).format("YYYY-MM-DD, h:mm:ss A");
      return adjustedTime;
    };
    isExistDomain = (siteURL) => {
      const domainList = ["shopify", "wikipedia", "youtube", "amazon", "aliexpress", "walmart", "alibaba", "bookshop", "etsy", "flipkart", "netflix", "reddit", "quora"];
      return domainList.some((domain) => siteURL?.includes(domain));
    };
  };
  var GenieHelpers = new Helpers();

  // assets/src/admin/js/Common/Libs/Button.js
  var { Form, Button } = window.antd;

  // assets/src/admin/js/Common/Libs/GenieAiModal.js
  var { Modal: Modal2 } = window.antd;

  // assets/src/admin/js/Common/Libs/InfoTooltip.js
  var { Tooltip } = window.antd;
  var InfoTooltip = ({ title, placement, className = "", color, ...props }) => {
    return /* @__PURE__ */ React.createElement(Tooltip, {
      className: "getgenie-tooltip-icon getgenie-icon-alert-circle",
      color,
      overlayStyle: { paddingLeft: "8px" },
      placement,
      ...props,
      title,
      overlayClassName: className,
      zIndex: 9999
    });
  };
  var InfoTooltip_default = InfoTooltip;

  // assets/src/admin/js/Common/Libs/Loading.js
  var Loading = ({ size = 25 }) => {
    return /* @__PURE__ */ React.createElement("div", {
      style: { width: `${size}px`, height: `${size}px` },
      className: "loading-icon"
    });
  };
  var Loading_default = Loading;

  // assets/src/admin/js/Common/Libs/Select.js
  var { ComposeComponents } = window.getGenie.Components.Common.ReduxManager;
  var { Select, Form: Form2 } = window.antd;
  var { Option } = Select;
  var { useEffect } = window.React;
  var GenieSelect = ComposeComponents(({ options, setInput, sidebar: sidebar6, getInputs, except = [], disableList = [], name = "", defaultValue = "", label = "", placeholder = "", className = "", handleOnChange = () => "", onSearch = () => {
  }, ...props }) => {
    let list = options;
    const handleChange = (value) => {
      handleOnChange(value);
      setInput(name, value);
    };
    let updatedValue = getInputs[name] || defaultValue || null;
    useEffect(() => {
      setInput(name, updatedValue);
    }, [sidebar6.currentTemplate]);
    if (except && except.length > 0) {
      list = options.filter((option) => !except.includes(option.value));
      if (except.includes(updatedValue)) {
        updatedValue = list?.[0]?.value;
      }
    }
    return /* @__PURE__ */ React.createElement(Form2.Item, {
      label,
      className
    }, /* @__PURE__ */ React.createElement(Select, {
      showSearch: true,
      value: updatedValue,
      placeholder,
      name,
      notFoundContent: props?.loading ? /* @__PURE__ */ React.createElement(Loading_default, {
        width: 25
      }) : null,
      suffixIcon: /* @__PURE__ */ React.createElement("span", {
        className: "getgenie-icon-arrow_down"
      }),
      onChange: handleChange,
      onSearch,
      onKeyDown: (e) => e.stopPropagation(),
      filterOption: (input, option) => {
        return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      },
      getPopupContainer: (node) => node.parentNode,
      ...props
    }, list.map((option, key) => /* @__PURE__ */ React.createElement(Option, {
      key,
      disabled: disableList.includes(option.value),
      value: option.value
    }, option.label))));
  }, ["setInput", "getInputs", "sidebar"]);

  // assets/src/admin/js/Common/Libs/Textarea.js
  var { ComposeComponents: ComposeComponents2 } = window.getGenie.Components.Common.ReduxManager;
  var { Input, Form: Form3 } = window.antd;
  var { useEffect: useEffect2 } = window.React;
  var GenieTextarea = ComposeComponents2(({ name = "", setInput, sidebar: sidebar6, getInputs, className = "", label = "", defaultValue = "", errorMessage = "", ...props }) => {
    const handleChange = (e) => {
      setInput(name, e.target.value);
    };
    useEffect2(() => {
      setInput(name, getInputs[name] || defaultValue);
    }, []);
    let updatedValue = getInputs[name] || defaultValue;
    const direction = sidebar6.languages.find((item) => item.value === sidebar6.currentLanguage)?.writingDirection;
    return /* @__PURE__ */ React.createElement(Form3.Item, {
      label,
      key: name,
      className: `genie-input ${className}`
    }, /* @__PURE__ */ React.createElement(Input.TextArea, {
      className: direction,
      value: updatedValue,
      onChange: handleChange,
      onKeyDown: (e) => e.stopPropagation(),
      ...props
    }));
  }, ["setInput", "getInputs", "sidebar"]);

  // assets/src/admin/js/Common/Libs/Card.js
  var { Row, Col, Card } = window.antd;
  var { ComposeComponents: ComposeComponents3 } = window.getGenie.Components.Common.ReduxManager;
  var { useState, useEffect: useEffect3 } = window.React;
  var GenieCard = ComposeComponents3(({ list, children, column = 1, handleClick, sidebar: sidebar6, setSidebar, skeleton: Skeleton3 = null, showActiveItem = false, loading = false, value = "", ...props }) => {
    const [card, setCard] = useState(null);
    let cols = 24 / column;
    if (column > 2) {
      cols = 24 / (column - 2);
    } else if (column > 1) {
      cols = 24 / (column - 1);
    }
    useEffect3(() => {
      if (showActiveItem && value) {
        const content = list.findIndex((item) => item.title === value);
        if (content !== -1) {
          setCard(content + "-selected");
        }
      }
    }, [value]);
    const handleCard = (e, item, index) => {
      setCard(index + "-selected");
      if (handleClick) {
        handleClick(e, item);
      }
    };
    useEffect3(() => {
      if (list.length === 0) {
        setCard(null);
      }
    }, [list]);
    const direction = sidebar6.languages.find((item) => item.value === sidebar6.currentLanguage)?.writingDirection;
    if (Skeleton3) {
      return /* @__PURE__ */ React.createElement(Skeleton3, null);
    }
    return /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-card"
    }, /* @__PURE__ */ React.createElement(Row, {
      gutter: 16
    }, list.map(
      (item, index) => /* @__PURE__ */ React.createElement(Col, {
        xs: 24,
        sm: cols,
        xl: 24 / column,
        key: index,
        className: direction
      }, /* @__PURE__ */ React.createElement(Card, {
        className: card && card === index + "-selected" ? "active" : "",
        key: index,
        onClick: (e) => handleCard(e, item, index),
        ...props
      }, children(item, index)))
    )));
  }, ["sidebar", "setSidebar"]);

  // assets/src/admin/js/Common/Libs/DrawerFooter.js
  var { Button: Button2, Tooltip: Tooltip2 } = window.antd;
  var { ComposeComponents: ComposeComponents4 } = window.getGenie.Components.Common.ReduxManager;
  var DrawerFooter = ComposeComponents4(({ prevScreen = true, nextScreen = true, enableNextBtn = false, handleNext = () => "", handlePrev = () => "", insertBtn = "", sidebar: sidebar6 }) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: `getgenie-sidebar-footer ${prevScreen && "getgenie-sidebar-footer-grid"}`
    }, prevScreen && /* @__PURE__ */ React.createElement(Button2, {
      type: "primary",
      onClick: handlePrev,
      className: "prevBtn"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-arrow"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "btnGrp"
    }, insertBtn, nextScreen && /* @__PURE__ */ React.createElement(Button2, {
      type: "primary",
      onClick: handleNext,
      disabled: !enableNextBtn,
      className: "nextBtn"
    }, sidebar6.__("Next", "getgenie"))));
  }, ["sidebar"]);

  // assets/src/admin/js/Common/Libs/GenieAiPopover.js
  var { Popover } = window.antd;
  var { useState: useState2 } = window.React;

  // assets/src/admin/js/Common/Libs/Input.js
  var { ComposeComponents: ComposeComponents5 } = window.getGenie.Components.Common.ReduxManager;
  var { Input: Input2, Form: Form4 } = window.antd;
  var { useEffect: useEffect4, useState: useState3 } = window.React;
  var GenieInput = ComposeComponents5(({ name, sidebar: sidebar6, setInput, getInputs, autoComplete = "off", className = "", defaultValue = "", label = "", required = false, errorMessage = "", ...props }) => {
    const [error, setError] = useState3(false);
    const handleChange = (e) => {
      const value = e.target.value;
      setInput(name, value);
      if (!value.length) {
        setError(true);
      } else {
        setError(false);
      }
    };
    useEffect4(() => {
      setInput(name, getInputs[name] || defaultValue);
    }, []);
    let updatedValue = getInputs[name] || defaultValue;
    const direction = sidebar6.languages.find((item) => item.value === sidebar6.currentLanguage)?.writingDirection;
    return /* @__PURE__ */ React.createElement(Form4.Item, {
      className: `genie-input ${className} ${required && error && !updatedValue && "ant-form-item-has-error"}`,
      label
    }, /* @__PURE__ */ React.createElement(Input2, {
      className: direction,
      value: updatedValue,
      name,
      ...props,
      onChange: handleChange,
      onKeyDown: (e) => e.stopPropagation()
    }), required && error && !updatedValue ? /* @__PURE__ */ React.createElement("p", {
      className: "ant-form-item-explain-error"
    }, errorMessage) : "");
  }, ["setInput", "getInputs", "sidebar"]);

  // assets/src/admin/js/Common/Libs/TitleMsg.js
  var { Typography, Tooltip: Tooltip3 } = window.antd;
  var sidebar = wp.data.select("getgenie").sidebar();

  // assets/src/admin/js/Common/Libs/Collapse.js
  var { Collapse, Form: Form5 } = window.antd;
  var { Panel } = Collapse;
  var GenieCollapse = ({ children, ...props }) => {
    return /* @__PURE__ */ React.createElement(Form5.Item, null, /* @__PURE__ */ React.createElement(Collapse, {
      ...props,
      expandIconPosition: "right",
      expandIcon: (panelProps) => /* @__PURE__ */ React.createElement("span", {
        className: "getgenie-icon-arrow_down"
      })
    }, children));
  };
  GenieCollapse.Panel = ({ children, ...props }) => {
    return /* @__PURE__ */ React.createElement(Panel, {
      ...props
    }, children);
  };

  // assets/src/admin/js/Common/Libs/DrawerHeader.js
  var { Button: Button3, Col: Col2, Row: Row2 } = window.antd;
  var { ComposeComponents: ComposeComponents6 } = window.getGenie.Components.Common.ReduxManager;
  var sidebarConfig = window.getGenie.config?.sidebar;
  var DrawerHeader = ComposeComponents6(({ sidebar: sidebar6, setSidebar, getInputs, setInput, screenName = "" }) => {
    const { imageUrl } = sidebar6;
    const seoData = getInputs["searchVolume"];
    const seoEnabled = getInputs["seoEnabled"];
    const handleClickSeoBtn = () => {
      setInput("seoEnabled", !seoEnabled);
    };
    const closeSidebar = () => {
      setSidebar({
        open: false
      });
    };
    return /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-sidebar-header"
    }, /* @__PURE__ */ React.createElement(Row2, null, /* @__PURE__ */ React.createElement(Col2, {
      span: 20
    }, /* @__PURE__ */ React.createElement("img", {
      className: "main-logo",
      src: `${imageUrl}/logo_black.svg`,
      alt: "logo"
    }), ["introScreen", "outlineScreen", "paragraphScreen"].includes(screenName) && seoData ? /* @__PURE__ */ React.createElement(Button3, {
      onClick: handleClickSeoBtn,
      shape: "round",
      className: "getgenie-sidebar-header-seoBtn"
    }, /* @__PURE__ */ React.createElement("img", {
      src: `${imageUrl}/badge.png`,
      alt: "logo"
    }), "SEO ", seoEnabled ? sidebar6.__("Enabled", "getgenie") : sidebar6.__("Disabled", "getgenie")) : /* @__PURE__ */ React.createElement("div", {
      className: "empty-btn-space"
    })), /* @__PURE__ */ React.createElement(Col2, {
      span: 4,
      className: "getgenie-close-btn"
    }, /* @__PURE__ */ React.createElement("span", {
      onClick: closeSidebar
    }, /* @__PURE__ */ React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 10 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z",
      fill: "#323232"
    }))))));
  }, ["setSidebar", "sidebar", "getInputs", "setInput"]);

  // assets/src/admin/js/Common/Libs/GenieAiSwitch.js
  var { Col: Col3, Row: Row3, Switch } = window.antd;
  var { ComposeComponents: ComposeComponents7 } = window.getGenie.Components.Common.ReduxManager;
  var { useEffect: useEffect5 } = window.React;
  var GenieAiSwitch = ComposeComponents7(({ getInputs, setInput, defaultChecked = false, className = "", name = "", label = "", ...props }) => {
    const handleChange = (value) => {
      setInput(name, value);
    };
    let updatedValue = getInputs[name] || defaultChecked;
    useEffect5(() => {
      setInput(name, updatedValue);
    }, []);
    return /* @__PURE__ */ React.createElement(Row3, {
      justify: "space-between",
      className: `getgenie-switch ${className}`
    }, /* @__PURE__ */ React.createElement(Col3, {
      span: 18,
      className: "label"
    }, label), /* @__PURE__ */ React.createElement(Col3, {
      span: 6,
      className: "switch"
    }, /* @__PURE__ */ React.createElement(Switch, {
      name,
      checked: updatedValue,
      ...props,
      onChange: handleChange
    })));
  }, ["setInput", "getInputs"]);

  // assets/src/admin/js/Common/Libs/SkeletonSingle.js
  var { Skeleton } = window.antd;

  // assets/src/admin/js/Common/Libs/SkeletonCard.js
  var { Card: Card2, Skeleton: Skeleton2 } = window.antd;
  var SkeletonCard = ({ count = 3 }) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-card-skeleton"
    }, [...Array(count)].map(
      (item, key) => /* @__PURE__ */ React.createElement(Card2, {
        key,
        className: "getgenie-generated-outlines-card"
      }, /* @__PURE__ */ React.createElement(Skeleton2, {
        active: true
      }))
    ));
  };
  var SkeletonCard_default = SkeletonCard;

  // assets/src/admin/js/Common/Libs/ConfirmModal.js
  var { Modal: Modal3 } = window.antd;

  // assets/src/admin/js/Common/Libs/ErrorModal.js
  var { Modal: Modal4 } = window.antd;

  // assets/src/admin/js/Common/Libs/DrawerWrapper.js
  var { useState: useState4, useEffect: useEffect6, useCallback } = window.React;
  var { Drawer } = window.antd;
  var { ComposeComponents: ComposeComponents8 } = window.getGenie.Components.Common.ReduxManager;
  var isResizing = null;
  var sidebarConfig2 = window.getGenie.config?.sidebar || {};
  var mainWidth = sidebarConfig2?.width || 380;
  var width = {
    main: mainWidth,
    generatedOutlines: 280,
    analyzeKeywordScreen: 350,
    keywordHeatMap: 860,
    paragraphEditorScreen: 350
  };
  delete sidebarConfig2?.width;
  var DrawerWrapper = ComposeComponents8(({ children, sidebar: sidebar6, setSidebar, getInputs }) => {
    const [drawerWidth, setDrawerWidth] = useState4(width.main);
    const { open, generatedOutlines, analyzeKeyword } = sidebar6;
    const headToHead = getInputs["headTohead"] || false;
    let mask = true;
    if (window.getGenie.config.wizardScreen === "post" && sidebar6.component === "ScoreAnalysis") {
      mask = false;
    }
    if (sidebar6.component === "GenieChat") {
      width.main = 430;
    } else {
      width.main = mainWidth;
    }
    const cbHandleMouseMove = useCallback(handleMousemove, []);
    const cbHandleMouseUp = useCallback(handleMouseup, []);
    useEffect6(() => {
      setSidebar({ width: drawerWidth });
    }, [drawerWidth]);
    function handleMouseup(e) {
      if (!isResizing) {
        return;
      }
      isResizing = false;
      document.removeEventListener("mousemove", cbHandleMouseMove);
      document.removeEventListener("mouseup", cbHandleMouseUp);
    }
    function handleMousedown(e) {
      e.stopPropagation();
      e.preventDefault();
      document.addEventListener("mousemove", cbHandleMouseMove);
      document.addEventListener("mouseup", cbHandleMouseUp);
      isResizing = true;
    }
    function handleMousemove(e) {
      let offsetRight = document.body.offsetWidth - (e.clientX - document.body.offsetLeft);
      let minWidth = 380;
      let maxWidth = window.innerWidth * 0.8;
      if (offsetRight > minWidth && offsetRight < maxWidth) {
        setDrawerWidth(offsetRight);
      }
    }
    useEffect6(() => {
      if (analyzeKeyword.open && !generatedOutlines.open) {
        setDrawerWidth(width.main + width.analyzeKeywordScreen);
      }
      if (generatedOutlines.open && !analyzeKeyword.open) {
        setDrawerWidth(width.main + width.generatedOutlines);
      }
      if (generatedOutlines.open && analyzeKeyword.open) {
        setDrawerWidth(width.main + width.generatedOutlines + width.analyzeKeywordScreen);
      }
      if (!generatedOutlines.open && !analyzeKeyword.open) {
        setDrawerWidth(width.main);
      }
      if (sidebar6.paragraphEditorScreen.open && analyzeKeyword.open) {
        setDrawerWidth(width.main + width.analyzeKeywordScreen + width.paragraphEditorScreen);
      }
      if (sidebar6.paragraphEditorScreen.open && !analyzeKeyword.open) {
        setDrawerWidth(width.main + width.paragraphEditorScreen);
      }
      if (headToHead) {
        setSidebar({
          analyzeKeyword: {
            ...setSidebar.analyzeKeyword,
            open: false
          },
          generatedOutlines: {
            ...sidebar6.generatedOutlines,
            open: false
          }
        });
        setDrawerWidth(width.main + width.keywordHeatMap);
      }
    }, [sidebar6.analyzeKeyword.open, sidebar6.generatedOutlines.open, sidebar6.paragraphEditorScreen.open, headToHead]);
    useEffect6(() => {
      const getDocumentBody = document.querySelector("body");
      const rootContainer = sidebar6.rootContainer;
      const { userAgent } = window.navigator;
      const browserSupport = userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Safari") != -1;
      const hasClass = (query) => {
        return getDocumentBody.classList.contains(query);
      };
      if (browserSupport) {
        if (hasClass("is-fullscreen-mode") || hasClass("elementor-device-desktop")) {
          rootContainer.classList.add("getgenie-browser-support");
        } else if (hasClass("wc-sass-manager")) {
          rootContainer.classList.add("getgenie-browser-support-playground");
        } else {
          rootContainer.classList.remove("getgenie-browser-support");
        }
      }
    }, [sidebar6.open]);
    return /* @__PURE__ */ React.createElement(Drawer, {
      rootClassName: "getgenie-drawer",
      width: "auto",
      onClose: () => setSidebar({ open: false }),
      open,
      closable: false,
      mask,
      ...sidebarConfig2,
      zIndex: 1200,
      autoFocus: false
    }, children(drawerWidth, width), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-sidebar-draggable",
      onMouseDown: handleMousedown
    }));
  }, ["sidebar", "setSidebar", "getInputs"]);

  // assets/src/admin/js/Common/Libs/GenieAiTable.js
  var { Table } = window.antd;

  // assets/src/admin/js/Common/Libs/NumberInput.js
  var { ComposeComponents: ComposeComponents9 } = window.getGenie.Components.Common.ReduxManager;
  var { Input: Input3, Form: Form6 } = window.antd;
  var { useEffect: useEffect7 } = window.React;
  var GenieNumberInput = ComposeComponents9(({ name, setInput, getInputs, sidebar: sidebar6, handleOnChange = () => "", defaultValue = 1, max = null, label = "", placeholder = "", type = "text", required = false, errorMessage = "", className = "", ...props }) => {
    let updatedValue = getInputs[name] || defaultValue;
    const handleChange = (value) => {
      if (isNaN(value)) {
        return;
      }
      if (max && value > max) {
        return;
      }
      handleOnChange(value);
      setInput(name, value);
    };
    useEffect7(() => {
      handleChange(getInputs[name] || updatedValue);
    }, [sidebar6.currentTemplate]);
    const updateValue = (num) => {
      if (props?.disabled) {
        return;
      }
      if (updatedValue === 1 && num === -1) {
        return;
      }
      let value = parseInt(updatedValue) + parseInt(num);
      if (max && value > max) {
        return;
      }
      handleOnChange(value);
      setInput(name, value);
    };
    return /* @__PURE__ */ React.createElement(Form6.Item, {
      initialValue: updatedValue,
      className: `NumberInput ${className}`,
      label,
      name,
      rules: [{ required, message: errorMessage }]
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-minus icon",
      onClick: () => updateValue(-1)
    }), /* @__PURE__ */ React.createElement(Input3, {
      ...props,
      type,
      placeholder,
      value: updatedValue,
      defaultValue: updatedValue,
      onChange: (e) => handleChange(e.target.value)
    }), /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-plus icon",
      onClick: () => updateValue(1)
    }));
  }, ["setInput", "getInputs", "sidebar"]);

  // assets/src/admin/js/Common/Libs/Slider.js
  var { Slider, Form: Form7 } = window.antd;
  var { ComposeComponents: ComposeComponents10 } = window.getGenie.Components.Common.ReduxManager;
  var { useEffect: useEffect8 } = window.React;
  var GenieSlider = ComposeComponents10(({ label, name, setInput, getInputs, sidebar: sidebar6, defaultValue, message, handleOnChange = () => "", className = "", ...props }) => {
    let max = props.max || 5, min = props.min || 1;
    const handleChange = (value) => {
      handleOnChange(value);
      setInput(name, value);
    };
    useEffect8(() => {
      setInput(name, getInputs[name] || defaultValue);
    }, [sidebar6.currentTemplate]);
    let updatedValue = getInputs[name] || defaultValue;
    const formatter = (value) => `${value}/${max}`;
    return /* @__PURE__ */ React.createElement(Form7.Item, {
      label,
      className: "getgenie-slider " + className,
      name
    }, /* @__PURE__ */ React.createElement(Slider, {
      style: { margin: 0 },
      min,
      max,
      ...props,
      defaultValue: updatedValue,
      onChange: handleChange,
      tooltip: { formatter }
    }));
  }, ["getInputs", "setInput", "sidebar"]);

  // assets/src/admin/js/Common/Libs/Navbar.js
  var { Tabs } = window.antd;
  var { TabPane } = Tabs;

  // assets/src/admin/js/Common/Libs/BlurElement.js
  var { ComposeComponents: ComposeComponents11 } = window.getGenie.Components.Common.ReduxManager;
  var { Button: Button4, Typography: Typography2 } = window.antd;
  var { useRef, useState: useState5 } = window.React;
  var BlurElement = ComposeComponents11(({ children, show = false, top = 0, left = 0, text = "", btnText = "", href = "#", textMargin = 13 }) => {
    const [isVisible, setIsVisible] = useState5(false);
    const [position, setPosition] = useState5({ top: 0 });
    const containerRef = useRef(null);
    const handleMouseMove = (event) => {
      if (containerRef.current && event.target.classList.contains("blur-element-content")) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          top: event.clientY - rect.top - 50
        });
      }
    };
    const handleMouseOver = () => {
      setIsVisible(true);
    };
    const handleMouseOut = () => {
      setIsVisible(false);
    };
    return show ? /* @__PURE__ */ React.createElement("div", {
      className: "blur-element"
    }, children, /* @__PURE__ */ React.createElement("div", {
      className: "blur-element-content",
      ref: containerRef,
      onMouseMove: handleMouseMove,
      onMouseOver: handleMouseOver,
      onMouseOut: handleMouseOut,
      style: { top, left, width: `calc(100% - ${left}px)`, height: `calc(100% - ${top}px)` }
    }, isVisible && /* @__PURE__ */ React.createElement("div", {
      className: "blur-element-text",
      style: { margin: textMargin, ...position }
    }, /* @__PURE__ */ React.createElement(Typography2.Title, {
      level: 4
    }, text), /* @__PURE__ */ React.createElement(Button4, {
      type: "primary",
      href,
      target: "_blank"
    }, btnText)))) : children;
  });

  // assets/src/admin/js/Common/Static/index.js
  var StaticData = {
    countries: [
      { label: "Global", value: "global" },
      { label: "Australia", value: 2036 },
      { label: "Canada", value: 2124 },
      { label: "India", value: 2356 },
      { label: "New Zealand", value: 2554 },
      { label: "South Africa", value: 2710 },
      { label: "United States (USA)", value: 2840 },
      { label: "United Kingdom", value: 2826 },
      { label: "Germany", value: 2276 },
      { label: "Portugal", value: 2620 },
      { label: "Spain", value: 2724 },
      { label: "Vietnam", value: 2704 },
      { label: "Indonesia", value: 2360 },
      { label: "Malaysia", value: 2458 },
      { label: "South Korea", value: 2410 },
      { label: "Japan", value: 2392 },
      { label: "China", value: 2156 },
      { label: "Turkey", value: 2792 },
      { label: "Ukraine", value: 2804 },
      { label: "Italy", value: 2380 },
      { label: "France", value: 2250 },
      { label: "Poland", value: 2616 },
      { label: "Netherland", value: 2528 },
      { label: "Lithuania", value: 2440 },
      { label: "Hungary", value: 2348 },
      { label: "Denmark", value: 2208 },
      { label: "Czechia", value: 2203 },
      { label: "Thailand", value: 2764 },
      { label: "Latvia", value: 2428 },
      { label: "Slovakia", value: 2703 },
      { label: "Greece", value: 2300 },
      { label: "Sweden", value: 2752 },
      { label: "Saudi Arabia", value: 2682 },
      { label: "Russia", value: 2643 },
      { label: "Bulgaria", value: 2100 },
      { label: "Mexico", value: 2484 },
      { label: "Norway", value: 2578 },
      { label: "Pakistan", value: 2586 },
      { label: "Israel", value: 2376 }
    ],
    languages: [
      {
        "value": "en",
        "label": "English"
      },
      {
        "value": "es",
        "label": "Spanish"
      },
      {
        "value": "de",
        "label": "German"
      }
    ],
    outputSizes: [
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" }
    ],
    maxToken: [
      { label: "Small", value: 200 },
      { label: "Medium", value: 400 },
      { label: "Large", value: 1200 }
    ],
    chatCharacters: [
      { label: "Professional Writer", value: "professional-writer" },
      { label: "General Purpose", value: "general-purpose" },
      { label: "Standup Comedian", value: "standup-comedian" },
      { label: "Life Coach", value: "life-coach" },
      { label: "Career Counselor", value: "career-counselor" },
      { label: "Nutritionist", value: "nutritionist" },
      { label: "Product Manager", value: "product-manager" },
      { label: "Personal Trainer", value: "personal-trainer" },
      { label: "Life Hacker", value: "life-hacker" },
      { label: "Travel Advisor", value: "travel-advisor" },
      { label: "Mindfulness Coach", value: "mindfulness-coach" },
      { label: "Financial Advisor", value: "financial-advisor" },
      { label: "Language Tutor", value: "language-tutor" },
      { label: "Travel Guide", value: "travel-guide" },
      { label: "Marketing Expert", value: "marketing-expert" },
      { label: "Software Developer", value: "software-developer" },
      { label: "Dating Coach", value: "dating-coach" },
      { label: "DIY Expert", value: "diy-expert" },
      { label: "Journalist", value: "journalist" },
      { label: "Tech Writer", value: "tech-writer" },
      { label: "Pro Chef", value: "professional-chef" },
      { label: "Pro Salesperson", value: "professional-salesperson" },
      { label: "Startup Tech Lawyer", value: "startup-tech-lawyer" },
      { label: "Email Copywriter", value: "email-copywriter" }
    ]
  };
  var Static_default = StaticData;

  // assets/src/admin/js/Common/ContentFeedback/index.js
  var { HandleFetch } = window.getGenie.Components.Common.RequestManager;
  var { ComposeComponents: ComposeComponents12 } = window.getGenie.Components.Common.ReduxManager;
  var { Tooltip: Tooltip4 } = window.antd;
  var ContentFeedback = ComposeComponents12(({ content, listName, getInputs, setInput, creativityLevel, input, sidebar: sidebar6, contentType = "" }) => {
    const handleFeedback = (type, text) => {
      let newList, currentList = getInputs[listName];
      if (type === "like") {
        if (currentList.find((item) => item.title === text && item.like)) {
          return;
        }
        newList = currentList.map((item) => {
          return item.title === text ? { ...item, like: true, dislike: false } : item;
        });
      } else {
        if (currentList.find((item) => item.title === text && item.dislike)) {
          return;
        }
        newList = currentList.map((item) => {
          return item.title === text ? { ...item, dislike: true, like: false } : item;
        });
      }
      setInput(listName, newList);
      let data = {
        input,
        output: text,
        creativity_level: creativityLevel,
        feedback_type: type,
        template_name: contentType || sidebar6.currentTemplate || "unknown",
        request_hash: sidebar6.requestId
      };
      HandleFetch((res) => {
      }, "contentFeedback", data);
    };
    return /* @__PURE__ */ React.createElement(Tooltip4, {
      placement: "bottomRight",
      title: "Is the output good?"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-giving-feedback",
      onClick: (e) => e.stopPropagation()
    }, /* @__PURE__ */ React.createElement("span", {
      onClick: () => handleFeedback("like", content.title)
    }, /* @__PURE__ */ React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 10 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      fill: `${content.like ? "#0FA958" : "none"}`,
      d: "M7.81833 4.16667H5.83333V2.08333C5.83333 1.86232 5.74554 1.65036 5.58926 1.49408C5.43298 1.3378 5.22101 1.25 5 1.25H4.96042C4.75208 1.25 4.58333 1.41875 4.58333 1.62708C4.58333 1.92458 4.49542 2.21542 4.33 2.46292L2.91667 4.58333V8.33333L4.48375 8.725C4.55 8.74167 4.61792 8.75 4.68583 8.75H6.35958C6.51444 8.75007 6.66626 8.70699 6.798 8.62559C6.92974 8.54419 7.03619 8.42769 7.10542 8.28917L8.56375 5.3725C8.62724 5.24545 8.6572 5.10428 8.65079 4.9624C8.64438 4.82052 8.60182 4.68263 8.52714 4.56182C8.45246 4.44101 8.34814 4.34129 8.22408 4.27213C8.10003 4.20298 7.96036 4.16667 7.81833 4.16667Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M5.83333 4.16667H7.81833C7.96036 4.16667 8.10003 4.20298 8.22408 4.27213C8.34814 4.34129 8.45246 4.44101 8.52714 4.56182C8.60182 4.68263 8.64438 4.82052 8.65079 4.9624C8.6572 5.10428 8.62724 5.24545 8.56375 5.3725L7.10542 8.28917C7.03619 8.42769 6.92974 8.54419 6.798 8.62559C6.66626 8.70699 6.51444 8.75007 6.35958 8.75H4.68583C4.61792 8.75 4.55 8.74167 4.48375 8.725L2.91667 8.33333M5.83333 4.16667V2.08333C5.83333 1.86232 5.74554 1.65036 5.58926 1.49408C5.43298 1.3378 5.22101 1.25 5 1.25H4.96042C4.75208 1.25 4.58333 1.41875 4.58333 1.62708C4.58333 1.92458 4.49542 2.21542 4.33 2.46292L2.91667 4.58333V8.33333M5.83333 4.16667H5M2.91667 8.33333H2.08333C1.86232 8.33333 1.65036 8.24554 1.49408 8.08926C1.3378 7.93298 1.25 7.72101 1.25 7.5V5C1.25 4.77899 1.3378 4.56702 1.49408 4.41074C1.65036 4.25446 1.86232 4.16667 2.08333 4.16667H3.125",
      stroke: "#0FA958",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /* @__PURE__ */ React.createElement("span", {
      onClick: () => handleFeedback("dislike", content.title)
    }, /* @__PURE__ */ React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 10 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      fill: `${content.dislike ? "#EA4646" : "none"}`,
      d: "M2.18166 5.83333H4.16625V7.91667C4.16625 8.13768 4.25404 8.34964 4.41032 8.50592C4.5666 8.6622 4.77857 8.75 4.99958 8.75H5.03958C5.24791 8.75 5.41666 8.58125 5.41666 8.37333C5.41666 8.07542 5.50458 7.78458 5.67 7.53667L7.08333 5.41667L7.08291 1.66667L5.51625 1.275C5.45016 1.25844 5.38229 1.25004 5.31416 1.25H3.64C3.48521 1.25001 3.33348 1.29312 3.20182 1.37452C3.07016 1.45591 2.96377 1.57237 2.89458 1.71083L1.43625 4.6275C1.37276 4.75455 1.3428 4.89572 1.34921 5.0376C1.35562 5.17948 1.39818 5.31737 1.47286 5.43818C1.54754 5.55899 1.65186 5.65871 1.77591 5.72787C1.89997 5.79702 2.03964 5.83333 2.18166 5.83333Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M7.08291 1.66667L5.51625 1.275C5.45016 1.25844 5.38229 1.25004 5.31416 1.25H3.64C3.48521 1.25001 3.33348 1.29312 3.20182 1.37452C3.07016 1.45591 2.96377 1.57237 2.89458 1.71083L1.43625 4.6275C1.37276 4.75455 1.3428 4.89572 1.34921 5.0376C1.35562 5.17948 1.39818 5.31737 1.47286 5.43818C1.54754 5.55899 1.65186 5.65871 1.77591 5.72787C1.89997 5.79702 2.03964 5.83333 2.18166 5.83333H4.16666H5M7.08291 1.66667L7.08333 5.41667L5.67 7.53667C5.50458 7.78458 5.41666 8.07542 5.41666 8.37333C5.41666 8.58125 5.24791 8.75 5.03958 8.75H4.99958C4.77857 8.75 4.5666 8.6622 4.41032 8.50592C4.25404 8.34964 4.16625 8.13768 4.16625 7.91667V5.83333M7.08291 1.66667H7.91666C8.13768 1.66667 8.34964 1.75446 8.50592 1.91074C8.6622 2.06702 8.75 2.27899 8.75 2.5V5C8.75 5.22101 8.6622 5.43298 8.50592 5.58926C8.34964 5.74554 8.13768 5.83333 7.91666 5.83333H6.875",
      stroke: "#EA4646",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })))));
  }, ["setInput", "getInputs", "sidebar"]);

  // assets/src/admin/js/BlogWizard/Utilities/KeywordFinder.js
  var KeywordFinder = class {
    content = "";
    constructor(content = "") {
      this.content = content;
    }
    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    findAllMatch(content = this.content, keywords = []) {
      const matchedKeywords = [];
      for (let i = 0; i < keywords.length; i++) {
        const keyword = keywords[i];
        let count = this.findSingleMatch(content, keyword);
        matchedKeywords.push({ keyword, count });
      }
      return matchedKeywords;
    }
    findSingleMatch(content = this.content, keyword = "") {
      const escapedChars = this.escapeRegExp(keyword);
      const arr = escapedChars.split(" ");
      const pattern = arr.join(String.raw`(\s+\w+\s+|\s+)`);
      const matched = content?.match(new RegExp(pattern, "gmi"));
      if (matched && matched.length > 0) {
        return matched.length;
      }
      return 0;
    }
  };

  // assets/src/admin/js/BlogWizard/SeoData/SerpAnalysis/CompetitorAnalyzer.js
  var CompetitorAnalyzer = class {
    constructor(ContentAnalysis, KeywordFinder2, GenieHelpers3) {
      this.ContentAnalysis = ContentAnalysis;
      this.KeywordFinder = KeywordFinder2;
      this.GenieHelpers = GenieHelpers3;
    }
    getDomainName(url) {
      try {
        const parsedUrl = new URL(url);
        return parsedUrl.hostname.split(".").slice(-2).join(".");
      } catch (e) {
        return "";
      }
    }
    saveCompetitor = (competitorData2) => {
      this.GenieHelpers.callStoreApi("serpData", {
        competitorData: competitorData2
      });
    };
    getNlpKeywords = async (focusKeyword, competitorData2, competitorKeywords, url) => {
      return new Promise((resolve, reject) => {
        const config = window.getGenie.config;
        const options = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Site-Token": config?.siteToken || "",
            "Auth-Token": config?.authToken || "",
            "X-WP-Nonce": config?.restNonce || "",
            "Plugin-Version": config?.version
          }
        };
        (async () => {
          let keywords = competitorKeywords || [];
          let nlpKeywords2 = [];
          for (const webItem of competitorData2) {
            options.body = JSON.stringify({
              textContent: webItem?.textContent,
              requestId: webItem?.requestId
            });
            const keywordCluster = await fetch(url, options);
            let result = await keywordCluster.json();
            for (let item of result?.data || []) {
              nlpKeywords2.push(item[0].toLowerCase());
            }
          }
          nlpKeywords2 = [...new Set(nlpKeywords2)];
          options.body = JSON.stringify({
            mainKeywords: competitorKeywords.length === 0 ? [focusKeyword] : competitorKeywords.map((item) => item?.keyword || "").slice(0, 10),
            nlpKeywords: nlpKeywords2
          });
          const filterNlpKeywords = await fetch(EndPoints_exports.filterNlpKeywordsUrl, options).catch((err) => resolve(keywords));
          if (!filterNlpKeywords.ok) {
            resolve(keywords);
            return;
          }
          const filteredKeywords = await filterNlpKeywords.json();
          try {
            const keywordDetail = (filteredKeywords?.data || nlpKeywords2)?.map((item) => {
              let keyword = Array.isArray(item) ? item[0] : item;
              return { keyword, type: "nlp" };
            });
            keywords = [...keywords, ...keywordDetail || []];
            keywords = keywords.filter(
              (obj1, index, arr) => index === arr.findIndex((obj2) => obj2?.keyword === obj1?.keyword)
            );
            resolve(keywords);
          } catch (error) {
            resolve(keywords);
            console.log(error);
          }
        })();
      });
    };
    analyze = async (competitorData2, statisticsData) => {
      return new Promise((resolve, reject) => {
        let analyzedCompetitors = [];
        let statistics = {}, serpDomains = {};
        const finder = new this.KeywordFinder();
        let avgScore = 0, maxScore = 0, totalScore = 0, index = 0;
        for (const site of competitorData2) {
          let url = this.getDomainName(site?.url);
          const analyzedContent = new this.ContentAnalysis({
            content: site?.source,
            url,
            title: site?.title,
            description: site?.description
          }, statisticsData);
          const analysis = analyzedContent.getStat();
          const keywordList = finder.findAllMatch(site?.source, Object.keys(statisticsData.keywords));
          serpDomains[site.keySlug] = {
            url: site.url,
            title: site.title,
            rank: index,
            favicon: site.favicon
          };
          for (const item of keywordList) {
            if (!statisticsData.keywords?.[item.keyword]?.total) {
              continue;
            }
            if (!statistics[item.keyword]) {
              statistics[item.keyword] = {
                keyPhrase: item.keyword,
                recommendation: statisticsData.keywords?.[item.keyword]?.total,
                heatMap: {
                  [site.keySlug]: {
                    matchedKeyPhrase: item.count
                  }
                }
              };
            } else {
              statistics[item.keyword].heatMap[site.keySlug] = {
                matchedKeyPhrase: item.count
              };
            }
          }
          index++;
          if (site.title === "myContent") {
            continue;
          }
          let competitorScore = parseFloat(analysis.contentStats.totalScore);
          analyzedCompetitors.push({
            url: site.url,
            statistics: analysis.statistics,
            score: parseInt(Math.ceil(competitorScore)) || 0
          });
          if (maxScore < competitorScore) {
            maxScore = parseInt(Math.ceil(competitorScore)) || 0;
          }
          totalScore += competitorScore;
        }
        avgScore = Math.ceil(totalScore / analyzedCompetitors.length - 1);
        avgScore = parseInt(avgScore) || 0;
        const competitorStats = {
          headToHeadData: {
            serpDomains,
            statistics
          },
          analyzedCompetitors,
          avgScore,
          maxScore,
          firstCompetitorScore: analyzedCompetitors?.[1]?.score || 0
        };
        resolve(competitorStats);
      });
    };
  };

  // assets/src/admin/js/Common/MainContentSidebar/index.js
  var { Libs, Utilities } = window.getGenie.Components.Common;
  var { ComposeComponents: ComposeComponents13 } = window.getGenie.Components.Common.ReduxManager;
  var { Sidebar, BlogWizardUtils } = window.getGenie.Components;
  var { OutlineScreen, ParagraphGenerator, AnalyzeKeywordScreen, KeywordHeatMap } = Sidebar || {};
  var { Col: Col4 } = window.antd;
  var { useEffect: useEffect9 } = window.React;
  var MainContentSidebar = ComposeComponents13(({ sidebar: sidebar6, setSidebar, setInput, getInputs }) => {
    let storage = window.getGenie.blogWizardData;
    const isPostEditor = window.getGenie.config.isBlockEditor || window.getGenie.config.wizardScreen === "post";
    const { open, generatedOutlines, analyzeKeyword, paragraphEditorScreen } = sidebar6;
    useEffect9(() => {
      if (sidebar6.open) {
        document.body.classList.add("genie-sidebar-open");
      } else {
        if (document.body.classList.contains("genie-sidebar-open")) {
          document.body.classList.remove("genie-sidebar-open");
        }
      }
      if (navigator?.platform === "Win32") {
        document.body.classList.add("genie-scrollbar-windows");
      }
    }, [sidebar6.open]);
    useEffect9(() => {
      if (!isPostEditor) {
        return;
      }
      let value = getInputs["seoEnabled"];
      if (value) {
        if (getInputs["searchVolume"] && "BlogScreen" == sidebar6.component) {
          setSidebar({
            analyzeKeyword: {
              ...sidebar6.analyzeKeyword,
              open: true
            }
          });
        }
      } else {
        setSidebar({
          analyzeKeyword: {
            ...sidebar6.analyzeKeyword,
            open: false,
            loading: false
          }
        });
      }
    }, [getInputs["searchVolume"], getInputs["seoEnabled"], sidebar6.component]);
    useEffect9(() => {
      if (!isPostEditor) {
        return;
      }
      let currentPost = wp.data.select("core/editor")?.getEditedPostContent();
      if (currentPost) {
        const title = wp.data.select("core/editor")?.getEditedPostAttribute("title");
        if (title && !currentPost.includes(title)) {
          currentPost = `<h1>${title}</h1>` + currentPost;
        }
        setSidebar({
          currentPostContent: currentPost
        });
      }
      if (!storage || Object.values(storage).filter(Boolean).length < 2) {
        return;
      }
      setSidebar({
        component: "BlogScreen",
        currentTemplate: "blogWizard"
      });
      for (const [key, value] of Object.entries(storage)) {
        if (!value || key == "post_id") {
          continue;
        }
        if (key === "keywordData") {
          if (value && Object.values(value).length > 0) {
            for (const [childKey, childValue] of Object.entries(value)) {
              setInput(childKey, childValue);
            }
          }
        } else if (key === "serpData") {
          if (value && Object.values(value).length > 0) {
            for (const [childKey, childValue] of Object.entries(value)) {
              if (childKey === "statisticsData") {
                setSidebar({
                  statisticsData: childValue
                });
              } else {
                setInput(childKey, childValue);
              }
            }
          }
        } else {
          if (!JSON.parse(localStorage.getItem("getgenie-" + key))) {
            setInput(key, value);
          }
        }
      }
      ;
    }, []);
    useEffect9(() => {
      if (!isPostEditor) {
        return;
      }
      const statisticsData = sidebar6.statisticsData, content = sidebar6.currentPostContent;
      if (Array.isArray(statisticsData?.keywords)) {
        return;
      }
      if (BlogWizardUtils && statisticsData) {
        let title = "", description = "";
        if (document.getElementsByClassName("block-editor__container")?.length > 0) {
          title = wp.data.select("core/editor")?.getEditedPostAttribute("title");
          description = wp.data.select("core/editor")?.getEditedPostAttribute("excerpt");
        } else if (document.getElementById("wp-content-editor-container")) {
          title = document.getElementById("title")?.value;
          description = document.getElementById("excerpt")?.value;
        }
        if (sidebar6.currentPostTitle) {
          title = sidebar6.currentPostTitle;
        }
        if (sidebar6.currentPostDescription) {
          description = sidebar6.currentPostDescription;
        }
        let contentObj = {
          content,
          url: location.origin,
          title,
          description
        };
        const analyzedContent = new BlogWizardUtils.ContentAnalysis(contentObj, statisticsData);
        let competitorStats = sidebar6.competitorStats;
        if (competitorStats?.headToHeadData?.statistics) {
          let finder = new KeywordFinder();
          for (const keyword of Object.keys(competitorStats?.headToHeadData?.statistics)) {
            let count = finder.findSingleMatch(content, keyword);
            if (!competitorStats.headToHeadData.statistics[keyword]?.heatMap?.["myContent_0"]) {
              competitorStats.headToHeadData.statistics[keyword].heatMap["myContent_0"] = {
                matchedKeyPhrase: 0
              };
            }
            competitorStats.headToHeadData.statistics[keyword].heatMap["myContent_0"].matchedKeyPhrase = count;
          }
        }
        setSidebar({
          analyzedContent: analyzedContent.getStat(),
          competitorStats
        });
      }
    }, [sidebar6.statisticsData, sidebar6.currentPostContent]);
    useEffect9(() => {
      let open2 = sidebar6.component === "BlogScreen" && sidebar6.currentScreen === "paragraphScreen";
      setSidebar({
        paragraphEditorScreen: {
          ...sidebar6.paragraphEditorScreen,
          open: open2
        }
      });
    }, [sidebar6.component, sidebar6.currentScreen]);
    useEffect9(() => {
      (async () => {
        let competitorData2 = getInputs["competitorData"];
        if (!competitorData2 || !sidebar6.statisticsData || Object.values(sidebar6.statisticsData).length === 0) {
          return;
        }
        let mySite = {
          source: sidebar6.currentPostContent,
          url: location.hostname || "myContent.com",
          title: "myContent",
          keySlug: "myContent_0",
          rank: 0,
          favicon: "default"
        };
        let competitorAnalyzer = new CompetitorAnalyzer(BlogWizardUtils.ContentAnalysis, KeywordFinder);
        const filterCompetitorData = (competitorData2 || []).filter((data) => !GenieHelpers.isExistDomain(data?.url)).slice(0, 10);
        let competitorStats = await competitorAnalyzer.analyze([mySite, ...filterCompetitorData], sidebar6.statisticsData);
        setSidebar({
          competitorStats
        });
      })();
    }, [sidebar6.statisticsData, getInputs["competitorData"]]);
    let SidebarContent = Sidebar[sidebar6.component] || (() => "");
    const headToHead = getInputs["headTohead"] || false;
    const getWidth = (drawerWidth, width2) => {
      const mainScreenWidth = drawerWidth - (analyzeKeyword.open ? width2.analyzeKeywordScreen : 0) - (generatedOutlines.open ? width2.generatedOutlines : 0) - (headToHead ? width2.keywordHeatMap : 0) - (paragraphEditorScreen.open ? width2.paragraphEditorScreen : 0);
      return mainScreenWidth >= width2.main ? mainScreenWidth : width2.main;
    };
    return /* @__PURE__ */ React.createElement(Libs.DrawerWrapper, null, (drawerWidth, width2) => /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-sidebar-content"
    }, /* @__PURE__ */ React.createElement(Col4, {
      className: "extended-panel"
    }, AnalyzeKeywordScreen && /* @__PURE__ */ React.createElement(AnalyzeKeywordScreen, {
      visible: sidebar6.open && analyzeKeyword.open,
      width: width2.analyzeKeywordScreen
    }), OutlineScreen && /* @__PURE__ */ React.createElement(OutlineScreen.GeneratedOutlines, {
      visible: sidebar6.open && generatedOutlines.open,
      width: width2.generatedOutlines
    }), ParagraphGenerator && /* @__PURE__ */ React.createElement(ParagraphGenerator, {
      visible: sidebar6.open && paragraphEditorScreen.open,
      width: width2.paragraphEditorScreen
    }), KeywordHeatMap && /* @__PURE__ */ React.createElement(KeywordHeatMap, {
      visible: sidebar6.open && headToHead,
      width: width2.keywordHeatMap
    })), /* @__PURE__ */ React.createElement(Col4, {
      className: "wizard-screen",
      style: { width: `${getWidth(drawerWidth, width2)}px` }
    }, /* @__PURE__ */ React.createElement(SidebarContent, null))));
  }, ["sidebar", "setSidebar", "setInput", "getInputs"]);

  // assets/src/admin/js/Common/LicenseNotice/index.js
  var { Alert } = window.antd;
  var sidebar2 = wp.data.select("getgenie").sidebar();

  // assets/src/admin/js/Common/UserHistory/index.js
  var { Libs: Libs2, Utilities: Utilities2 } = window.getGenie.Components.Common;
  var { HandleFetch: HandleFetch2 } = window.getGenie.Components.Common.RequestManager;
  var { ComposeComponents: ComposeComponents14 } = window.getGenie.Components.Common.ReduxManager;
  var { useEffect: useEffect10, useState: useState6 } = window.React;
  var { Button: Button5, Typography: Typography3 } = window.antd;
  var UserHistory = ComposeComponents14(({ setSidebar, setUserHistoryData, userHistoryData }) => {
    const [currentPage, setCurrentPage] = useState6(1);
    const [loading, setLoading] = useState6(false);
    const getHistoryData = (page = 1) => {
      setLoading(true);
      HandleFetch2((res) => {
        setLoading(false);
        const fetchedData = (res.data?.history || []).filter((item) => item?.templateTitle);
        const allHistory = page === 1 ? fetchedData : [...userHistoryData.allHistory, ...fetchedData];
        setUserHistoryData({
          allHistory,
          isCallable: false,
          hasMoreData: res?.data?.total_pages != page
        });
      }, "historyData", { page });
    };
    useEffect10(() => {
      if (userHistoryData.isCallable) {
        getHistoryData();
      }
    }, []);
    const loadMoreData = (page) => {
      setCurrentPage(currentPage + 1);
      getHistoryData(page);
    };
    const updateScreen = (e, item) => {
      setSidebar({
        component: "UserHistoryDetails"
      });
      setUserHistoryData({
        currentHistoryData: item
      });
    };
    const clearHistory = () => {
      Libs2.ConfirmModal(
        "You're clearing/removing all historical data of your GetGenie usage.",
        "Are you sure you want to remove them?",
        () => {
          HandleFetch2((res) => {
            setUserHistoryData({
              allHistory: []
            });
          }, "clearHistoryUrl");
        }
      );
    };
    return /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-history getgenie-history-sidebar-content"
    }, /* @__PURE__ */ React.createElement(Libs2.DrawerHeader, null), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-history-card-container"
    }, userHistoryData.allHistory?.length > 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button5, {
      onClick: clearHistory,
      type: "primary",
      className: "history-action-btn clear"
    }, "Clear History"), /* @__PURE__ */ React.createElement(Libs2.Card, {
      list: userHistoryData?.allHistory,
      handleClick: updateScreen
    }, (item) => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
        className: "card-container"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "card-heading"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "date"
      }, /* @__PURE__ */ React.createElement("svg", {
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /* @__PURE__ */ React.createElement("path", {
        d: "M11.6667 2.33334H2.33333C1.59695 2.33334 1 2.9303 1 3.66668V13C1 13.7364 1.59695 14.3333 2.33333 14.3333H11.6667C12.403 14.3333 13 13.7364 13 13V3.66668C13 2.9303 12.403 2.33334 11.6667 2.33334Z",
        stroke: "#57595F",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /* @__PURE__ */ React.createElement("path", {
        d: "M9.66675 1V3.66667",
        stroke: "#57595F",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /* @__PURE__ */ React.createElement("path", {
        d: "M4.33325 1V3.66667",
        stroke: "#57595F",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /* @__PURE__ */ React.createElement("path", {
        d: "M1 6.33334H13",
        stroke: "#57595F",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })), /* @__PURE__ */ React.createElement("span", {
        className: "date-info"
      }, Utilities2.GenieHelpers.getCurrentDateTime(item?.date))), /* @__PURE__ */ React.createElement("h3", {
        "data-slug": item?.templateSlug
      }, Utilities2.GenieHelpers.camelCaseToTitleCase(item?.templateTitle))), /* @__PURE__ */ React.createElement("div", {
        className: "card-body"
      }, Object.keys(item.input).map(
        (key, index) => item.input[key] && /* @__PURE__ */ React.createElement("p", {
          key: index
        }, " ", /* @__PURE__ */ React.createElement("strong", null, Utilities2.GenieHelpers.camelCaseToTitleCase(key), ": "), item.input[key])
      ))));
    })) : !loading ? /* @__PURE__ */ React.createElement(Typography3.Title, {
      level: 5,
      className: "getgenie-not-found-title"
    }, "No record found!") : "", loading ? /* @__PURE__ */ React.createElement(Libs2.SkeletonCard, {
      count: 5
    }) : "", userHistoryData.hasMoreData && userHistoryData.allHistory?.length ? /* @__PURE__ */ React.createElement(Libs2.Button, {
      onClick: () => loadMoreData(currentPage + 1)
    }, "Load More") : ""));
  }, ["setSidebar", "setUserHistoryData", "userHistoryData"]);
  var UserHistory_default = UserHistory;

  // assets/src/admin/js/Common/UserHistoryDetails/index.js
  var { Libs: Libs3, Utilities: Utilities3 } = window.getGenie.Components.Common;
  var { Card: Card3, Tooltip: Tooltip5, Button: Button6 } = window.antd;
  var { ComposeComponents: ComposeComponents15 } = window.getGenie.Components.Common.ReduxManager;
  var { useState: useState7 } = window.React;
  var UserHistoryDetails = ComposeComponents15(({ setSidebar, userHistoryData }) => {
    const [historyData2, setHistoryData] = useState7(userHistoryData.currentHistoryData);
    const [tooltipIndex, setTooltipIndex] = useState7(null);
    const copyHistoryContent = (val, index) => {
      let copyAbleText = "";
      if (typeof val === "string") {
        copyAbleText = val.replace(/<br\s*[\/]?>/g, "\n");
      } else if (Array.isArray(val)) {
        let newVal = val.join(",");
        copyAbleText = newVal.replace(/<br\s*[\/]?>/g, "\n");
      }
      Utilities3.GenieHelpers.copyToClipboard(copyAbleText).then(() => {
        setTooltipIndex(index);
        setTimeout(() => {
          setTooltipIndex(null);
        }, 3e3);
      }).catch(() => console.log("error"));
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Libs3.DrawerHeader, null), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-history getgenie-history-sidebar-content details"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-history-card-container"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-card"
    }, /* @__PURE__ */ React.createElement(Button6, {
      onClick: () => setSidebar({ component: "UserHistory" }),
      type: "primary",
      className: "history-action-btn back"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-arrow-left"
    })), /* @__PURE__ */ React.createElement(Card3, {
      className: "getgenie-history-card-detail"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "date"
    }, /* @__PURE__ */ React.createElement("svg", {
      width: "14",
      height: "16",
      viewBox: "0 0 14 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M11.6667 2.33334H2.33333C1.59695 2.33334 1 2.9303 1 3.66668V13C1 13.7364 1.59695 14.3333 2.33333 14.3333H11.6667C12.403 14.3333 13 13.7364 13 13V3.66668C13 2.9303 12.403 2.33334 11.6667 2.33334Z",
      stroke: "#57595F",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M9.66675 1V3.66667",
      stroke: "#57595F",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M4.33325 1V3.66667",
      stroke: "#57595F",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M1 6.33334H13",
      stroke: "#57595F",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), /* @__PURE__ */ React.createElement("span", {
      className: "date-info"
    }, Utilities3.GenieHelpers.getCurrentDateTime(historyData2?.date))), /* @__PURE__ */ React.createElement("h3", {
      className: "getgenie-history-title"
    }, Utilities3.GenieHelpers.camelCaseToTitleCase(historyData2?.templateTitle)), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-history-inputs"
    }, Object.keys(historyData2?.input || {}).map(
      (key, index) => historyData2.input[key] ? Array.isArray(historyData2.input[key]) ? /* @__PURE__ */ React.createElement("div", {
        key: index
      }, /* @__PURE__ */ React.createElement("h4", null, Utilities3.GenieHelpers.camelCaseToTitleCase(key), ":"), /* @__PURE__ */ React.createElement("div", {
        className: "getgenie-history-inputs-keywords"
      }, historyData2.input[key].map(
        (item, index2) => /* @__PURE__ */ React.createElement("p", {
          key: index2
        }, " ", item)
      ))) : /* @__PURE__ */ React.createElement("div", {
        key: index,
        className: "getgenie-history-inputs-details"
      }, /* @__PURE__ */ React.createElement("h4", null, Utilities3.GenieHelpers.camelCaseToTitleCase(key), ":"), /* @__PURE__ */ React.createElement("p", null, historyData2.input[key])) : ""
    )), /* @__PURE__ */ React.createElement("div", {
      className: "output-heading"
    }, /* @__PURE__ */ React.createElement("h4", null, "Outputs:"), Object.entries(historyData2?.usage || {}).map((item, index) => /* @__PURE__ */ React.createElement("h5", {
      key: index
    }, Utilities3.GenieHelpers.snakeToTitleCase(item?.[0]), ": ", item?.[1]))), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-history-card-container-details"
    }, (Array.isArray(historyData2.output) ? historyData2.output : []).map((item, index) => /* @__PURE__ */ React.createElement("div", {
      key: index
    }, historyData2.templateSlug === "keyword-analysis" ? /* @__PURE__ */ React.createElement(Tooltip5, {
      key: index,
      title: tooltipIndex === index ? "Copied" : "Click to copy",
      trigger: "hover",
      placement: "left"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-history-keyword-output",
      onClick: (e) => copyHistoryContent(e.target.closest("div.getgenie-history-keyword-output")?.innerText, index)
    }, /* @__PURE__ */ React.createElement("span", {
      style: { display: "block" }
    }, /* @__PURE__ */ React.createElement("strong", null, "keyword: "), item.keyword), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-history-search-volume"
    }, /* @__PURE__ */ React.createElement("strong", null, "Search volume: "), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Average in 12 month:"), /* @__PURE__ */ React.createElement("span", null, item?.searchVolume?.avg12Month)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Competition:", " "), /* @__PURE__ */ React.createElement("span", null, item?.searchVolume?.competition)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "CPC:", " "), /* @__PURE__ */ React.createElement("span", null, item?.searchVolume?.cpc?.currency + item?.searchVolume?.cpc?.value)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Highest:", " "), /* @__PURE__ */ React.createElement("span", null, item?.searchVolume?.highest)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Last month:", " "), /* @__PURE__ */ React.createElement("span", null, item?.searchVolume?.lastMonth)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Lowest:", " "), /* @__PURE__ */ React.createElement("span", null, item?.searchVolume?.lowest)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Total:", " "), /* @__PURE__ */ React.createElement("span", null, item?.searchVolume?.total, " "))))) : item ? /* @__PURE__ */ React.createElement(Tooltip5, {
      key: index,
      title: tooltipIndex === index ? "Copied" : "Click to copy",
      trigger: "hover",
      placement: "left"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-history-keyword-output",
      onClick: () => copyHistoryContent(item, index)
    }, /* @__PURE__ */ React.createElement("div", {
      dangerouslySetInnerHTML: { __html: item }
    }))) : "No output found!"))))))));
  }, ["setSidebar", "userHistoryData"]);
  var UserHistoryDetails_default = UserHistoryDetails;

  // assets/src/admin/js/Common/PromotionalNotice/index.js
  var { Alert: Alert2 } = window.antd;
  var { HandleFetch: HandleFetch3 } = window.getGenie.Components.Common.RequestManager;
  var { ComposeComponents: ComposeComponents16 } = window.getGenie.Components.Common.ReduxManager;
  var { useEffect: useEffect11, useState: useState8 } = window.React;
  var PromotionalNotice = ComposeComponents16(({ getInputs, type = "", names = [], showIcon = true, color = "#263e87", backgroundColor = "#bffdff", sidebar: sidebar6 }) => {
    const [message, setMessage] = useState8(null);
    useEffect11(() => {
      if (type == "promotionalNotice") {
        const wordUses = sidebar6.subscriptionStatistics.usagePercentage?.word_generate;
        const cookie = document.cookie.split(";").filter((item) => item.includes(`getgenie_${type}`));
        if (wordUses && wordUses >= 80 && cookie.length === 0) {
          HandleFetch3((res) => {
            if (res?.status != "success") {
              return;
            }
            setMessage(/* @__PURE__ */ React.createElement("div", {
              dangerouslySetInnerHTML: { __html: res?.data.message }
            }));
          }, "subscriptionUpdateUrl");
        }
      }
    }, [sidebar6.subscriptionStatistics.usagePercentage]);
    const handleClose = () => {
      const date = new Date();
      date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1e3);
      const expires = "expires=" + date.toUTCString();
      document.cookie = `getgenie_${type}=1;${expires};path=/`;
    };
    if (!message) {
      return "";
    }
    return /* @__PURE__ */ React.createElement("div", {
      style: { marginBottom: "20px" }
    }, /* @__PURE__ */ React.createElement(Alert2, {
      closable: true,
      closeIcon: /* @__PURE__ */ React.createElement(InfoTooltip_default, {
        title: "Close notice for 30 days"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "getgenie-icon-close1"
      })),
      afterClose: handleClose,
      style: { backgroundColor, color },
      className: "getgenie_promotional_message",
      message,
      type: "info",
      showIcon: false
    }));
  }, ["sidebar", "getInputs"]);

  // assets/src/admin/js/Common/GenieChat/Buttons.js
  var { Libs: Libs4 } = window.getGenie.Components.Common;
  var sidebar3 = wp.data.select("getgenie").sidebar();
  var Buttons = ({ newChatHandler = void 0, setShowChatList = void 0, resetChatHistory = void 0 }) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, newChatHandler && /* @__PURE__ */ React.createElement(Libs4.Button, {
      type: "primary",
      onClick: newChatHandler
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-plus"
    }), sidebar3.__("New Chat", "getgenie")), setShowChatList && /* @__PURE__ */ React.createElement(Libs4.Button, {
      type: "primary",
      onClick: () => {
        setShowChatList(true);
      }
    }, sidebar3.__("Chat History", "getgenie")), resetChatHistory && /* @__PURE__ */ React.createElement(Libs4.Button, {
      type: "primary",
      onClick: resetChatHistory
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-reload"
    }), sidebar3.__("Clear All", "getgenie")));
  };
  var Buttons_default = Buttons;

  // assets/src/admin/js/Common/GenieChat/ChatList.js
  var { Libs: Libs5, Utilities: Utilities4 } = window.getGenie.Components.Common;
  var { Alert: Alert3 } = window.antd;
  var { HandleFetch: HandleFetch4 } = window.getGenie.Components.Common.RequestManager;
  var GenieChatList = ({ oldChatList, loading, setAllChatData, setShowChatList, newChatHandler, resetChatHistory, setOldChatList }) => {
    const handleActiveList = (e, item) => {
      window.getGenie.genieChat = {
        id: item.id
      };
      setAllChatData(item?.messages);
      setShowChatList(false);
    };
    const handleDelete = (e, id) => {
      e.stopPropagation();
      const remainingList = oldChatList.filter((item) => item.id !== id);
      Libs5.ConfirmModal(
        "You're removing the selected conversation.",
        "Are you sure you want to remove it?",
        () => {
          setOldChatList(remainingList);
          HandleFetch4((res) => {
          }, "genieChatClear", { id });
        }
      );
    };
    return /* @__PURE__ */ React.createElement("div", {
      className: "chat-list"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "chat-list-buttons"
    }, /* @__PURE__ */ React.createElement(Buttons_default, {
      newChatHandler,
      resetChatHistory: oldChatList.length > 0 ? resetChatHistory : null
    })), loading ? /* @__PURE__ */ React.createElement(Libs5.SkeletonCard, {
      count: 5
    }) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Libs5.Card, {
      list: oldChatList,
      handleClick: handleActiveList
    }, (item) => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
        className: "card-container"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "card-heading"
      }, /* @__PURE__ */ React.createElement("h5", null, item?.messages?.[0]?.content), /* @__PURE__ */ React.createElement("p", null, Utilities4.GenieHelpers.getCurrentDateTime(item?.date))), /* @__PURE__ */ React.createElement("div", {
        className: "trash-icon"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "getgenie-icon-trash trash",
        onClick: (e) => handleDelete(e, item?.id)
      }))));
    }), oldChatList?.length === 0 && /* @__PURE__ */ React.createElement(Alert3, {
      className: "no-chat-found",
      message: "Woops! No chat found.",
      description: "Create a new chat to start a conversation.",
      type: "warning"
    })));
  };
  var ChatList_default = GenieChatList;

  // assets/src/admin/js/Common/GenieChat/index.js
  var { useEffect: useEffect12, useState: useState9, useRef: useRef2 } = window.React;
  var { HandleFetch: HandleFetch5, HandleResponse } = window.getGenie.Components.Common.RequestManager;
  var { ComposeComponents: ComposeComponents17 } = window.getGenie.Components.Common.ReduxManager;
  var { Libs: Libs6 } = window.getGenie.Components.Common;
  var { Row: Row4, Col: Col5, Button: Button7, Tooltip: Tooltip6 } = window.antd;
  var genieHead = `${window.getGenie.config.assetsUrl}dist/admin/images/genie-head.svg`;
  var genieChat2 = `${window.getGenie.config.assetsUrl}dist/admin/images/genie-chat.svg`;
  var ringtone = `${window.getGenie.config.assetsUrl}dist/admin/audio/click.mp3`;
  var editedMessageContent;
  var GenieChat = ComposeComponents17(({ sidebar: sidebar6, getInputs, setInput }) => {
    const messageContainerRef = useRef2(null);
    const focusRef = useRef2(null);
    const inputMessage = getInputs["inputMessage"] || "";
    const [editableFieldValue, setEditableFieldValue] = useState9("");
    const [allChatData, setAllChatData] = useState9([]);
    const [isFetching, setIsFetching] = useState9(false);
    const [showPrompt, setShowPrompt] = useState9(true);
    const [tooltipText, setTooltipText] = useState9(null);
    const [contentId, setContentId] = useState9(null);
    const [showChatList, setShowChatList] = useState9(false);
    const [oldChatList, setOldChatList] = useState9([]);
    const prompts = {
      "Write a poem about...": "Write a poem about...",
      "Write a blog post for...": "Write a blog post for...",
      "Help me to create a short story about...": "Help me to create a short story about..."
    };
    const fluentCrmPrompts = {
      "Email Subject Line": "Write an engaging email subject line about [your product/service].",
      "Email Preheader": "Write an email preheader about [your product/service], that increases open rate.",
      "Email Body Content": "Write the email copy for the email body about [your product/service] that convinces the potential customers."
    };
    const checkMessage = allChatData.length === 0;
    const [loading, setLoading] = useState9(false);
    const currentPrompt = window.getGenie.config.wizardScreen === "fluentcrm" ? fluentCrmPrompts : prompts;
    const updateOldChats = () => {
      setLoading(true);
      HandleFetch5((res) => {
        setLoading(false);
        let oldChats = res.data?.getgenie_chats || [];
        setOldChatList(oldChats);
      }, "genieChatList");
    };
    useEffect12(() => {
      updateOldChats();
    }, []);
    const handleSendMessage = () => {
      setInput("inputMessage", null);
      if (inputMessage !== "") {
        const message = inputMessage.replace(/\n$/, "");
        const chatData = [...allChatData, { id: allChatData.length, role: "user", content: message }];
        setAllChatData(chatData);
        handleResponse(chatData);
      }
    };
    const handleOnKeyUp = (e) => {
      if (isFetching && e.key === "Enter") {
        e.stopPropagation();
        return;
      }
      if (e.key === "Enter" && e.shiftKey) {
        return;
      }
      if (e.key == "Enter" || e?.which == 13) {
        handleSendMessage();
      }
    };
    const handleEdit = (id) => {
      if (focusRef.current) {
        focusRef.current.innerText = editableFieldValue;
        setInput("inputMessage", editableFieldValue);
      }
      setContentId(id);
    };
    const handleSave = (id) => {
      allChatData.splice(id);
      const chatData = [...allChatData, { id: allChatData.length, role: "user", content: editedMessageContent }];
      setAllChatData(chatData);
      handleCancel();
      handleResponse(chatData);
    };
    const handleCancel = () => {
      focusRef.current.contentEditable = false;
      focusRef.current.innerText = editableFieldValue;
      setContentId(null);
    };
    const handleRegenerate = (id) => {
      const previousChatData = allChatData.slice(0, id);
      setAllChatData(previousChatData);
      handleResponse(previousChatData);
    };
    const handleResponse = (chatData) => {
      const messages = chatData.map(({ id, likeStatus, ...rest }) => rest);
      const payLoad = {
        chatPersonality: getInputs["chatPersonality"] || sidebar6.chatPersonality,
        maxToken: getInputs["maxToken"] || sidebar6.maxToken,
        messages
      };
      setIsFetching(true);
      HandleFetch5((res) => {
        setIsFetching(false);
        HandleResponse(res, () => {
          if (!res.data?.content) {
            return;
          }
          res.data.id = chatData.length;
          res.data.likeStatus = null;
          setAllChatData([...chatData, res.data]);
          const audio = new Audio(ringtone);
          audio.play();
          HandleFetch5((res2) => {
            window.getGenie.genieChat = {
              id: res2.data?.conversation_id
            };
            updateOldChats();
          }, "genieChatSave", { id: window.getGenie.genieChat?.id || null, messages: [...chatData, res.data], templateSlug: "getgenieChat" });
        });
      }, "genieChat", payLoad);
    };
    useEffect12(() => {
      if (focusRef.current) {
        setEditableFieldValue(focusRef.current.innerText);
        focusRef.current.contentEditable = true;
        focusRef.current.focus();
        editedMessageContent = focusRef.current.innerText;
        const range = document.createRange();
        const sel = window.getSelection();
        range.setStart(focusRef.current.childNodes[0], focusRef.current.innerText.length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        focusRef.current.addEventListener(
          "input",
          (e) => {
            editedMessageContent = e.target.innerText;
          }
        );
      }
    }, [contentId]);
    useEffect12(() => {
      const messageContainer = messageContainerRef.current;
      if (messageContainer) {
        if (messageContainer.scrollHeight > messageContainer.clientHeight) {
          messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
        }
      }
    }, [allChatData]);
    const copyContent = (e, content) => {
      e.stopPropagation();
      let copyAbleText = content.replace(/<br\s*\/?>\s*/gi, "\n");
      GenieHelpers.copyToClipboard(copyAbleText).then(() => {
        setTooltipText(content);
        setTimeout(() => {
          setTooltipText(null);
        }, 2e3);
      });
    };
    const newChatHandler = () => {
      setAllChatData([]);
      setShowPrompt(true);
      setShowChatList(false);
      window.getGenie.genieChat = {};
    };
    const resetChatHistory = () => {
      Libs6.ConfirmModal(
        "You're clearing/removing your whole conversation.",
        "Are you sure you want to remove it?",
        () => {
          setAllChatData([]);
          setShowPrompt(true);
          setOldChatList([]);
          setShowChatList(false);
          HandleFetch5((res) => {
          }, "genieChatClear");
        }
      );
    };
    const saveFeedback = (feedback_type, input, output, id) => {
      let data = {
        input,
        output,
        creativity_level: getInputs["creativity"],
        feedback_type,
        template_name: "getgenie-chat"
      };
      const updateData = allChatData.map((item) => {
        if (item.id === id) {
          item.likeStatus = feedback_type;
        }
        return item;
      });
      setAllChatData(updateData);
      HandleFetch5((res) => {
      }, "contentFeedback", data);
      HandleFetch5((res) => {
        window.getGenie.genieChat = {
          id: res.data?.conversation_id
        };
        updateOldChats();
      }, "genieChatSave", { id: window.getGenie.genieChat?.id || null, messages: [...allChatData], templateSlug: "getgenieChat" });
    };
    useEffect12(() => {
      GenieHelpers.saveSidebarControllerOption("getgenie-maxToken", getInputs["maxToken"]);
    }, [getInputs["maxToken"]]);
    useEffect12(() => {
      GenieHelpers.saveSidebarControllerOption("getgenie-chatPersonality", getInputs["chatPersonality"]);
    }, [getInputs["chatPersonality"]]);
    useEffect12(() => {
      GenieHelpers.saveSidebarControllerOption("getgenie-creativity", getInputs["creativity"]);
    }, [getInputs["creativity"]]);
    return /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-chat"
    }, showChatList ? /* @__PURE__ */ React.createElement(ChatList_default, {
      loading,
      oldChatList,
      setAllChatData,
      setShowChatList,
      newChatHandler,
      resetChatHistory,
      setOldChatList
    }) : /* @__PURE__ */ React.createElement(React.Fragment, null, checkMessage && /* @__PURE__ */ React.createElement("div", {
      className: "genie-chat-welcome"
    }, /* @__PURE__ */ React.createElement("img", {
      src: genieChat2,
      alt: "genie-chat"
    }), /* @__PURE__ */ React.createElement("h5", null, sidebar6.__("Welcome to ", "getgenie"), " Genie ", sidebar6.__("Chat", "getgenie")), /* @__PURE__ */ React.createElement("p", null, sidebar6.__("All you have to do is ask or instruct your Genie to kick off the ", "getgenie"), " AI ", sidebar6.__("magic!", "getgenie"), " ")), /* @__PURE__ */ React.createElement("div", {
      className: "message-container",
      ref: messageContainerRef
    }, !isFetching && !checkMessage && /* @__PURE__ */ React.createElement(Button7, {
      onClick: () => setShowChatList(true),
      type: "primary",
      className: "genie-chat-history-back"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-arrow-left"
    })), allChatData.map((message, index) => /* @__PURE__ */ React.createElement("div", {
      key: index
    }, /* @__PURE__ */ React.createElement("div", {
      className: `message ${message.role === "user" ? "user-message" : "assistant-message"}`
    }, message.role === "user" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "message-content-user"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "message-content",
      ref: contentId === message.id ? focusRef : void 0
    }, message.content), !isFetching && /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-edit1 edit-content",
      onClick: () => handleEdit(message.id)
    })), /* @__PURE__ */ React.createElement("div", {
      className: "user-avatar"
    }, /* @__PURE__ */ React.createElement("img", {
      src: window.getGenie.config?.avatarUrl
    }))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "assistant-avatar"
    }, /* @__PURE__ */ React.createElement("img", {
      src: genieHead
    })), /* @__PURE__ */ React.createElement("div", {
      className: "message-content-assistant"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "message-content",
      dangerouslySetInnerHTML: { __html: message.content }
    }), /* @__PURE__ */ React.createElement("div", {
      className: "feedback-area"
    }, /* @__PURE__ */ React.createElement(Tooltip6, {
      placement: "bottom",
      zIndex: 9999,
      title: message?.likeStatus === "like" ? "Liked." : "Click to like this result"
    }, /* @__PURE__ */ React.createElement("span", {
      onClick: () => saveFeedback("like", allChatData[index - 1]?.content, message.content, message.id),
      className: `getgenie-icon-like ${message?.likeStatus === "like" ? "liked" : ""}`
    })), /* @__PURE__ */ React.createElement(Tooltip6, {
      placement: "bottom",
      zIndex: 9999,
      title: message?.likeStatus === "dislike" ? "Disliked." : "Click to dislike this result"
    }, /* @__PURE__ */ React.createElement("span", {
      onClick: () => saveFeedback("dislike", allChatData[index - 1]?.content, message.content, message.id),
      className: `getgenie-icon-dislike ${message?.likeStatus === "dislike" ? "disliked" : ""}`
    })), /* @__PURE__ */ React.createElement(Tooltip6, {
      placement: "bottom",
      zIndex: 9999,
      title: "Click to regenerate this response"
    }, /* @__PURE__ */ React.createElement("span", {
      onClick: () => handleRegenerate(message.id),
      className: "getgenie-icon-refresh"
    })), /* @__PURE__ */ React.createElement(Tooltip6, {
      placement: "bottom",
      zIndex: 9999,
      title: tooltipText === message.content ? "Copied" : "Copy this content"
    }, /* @__PURE__ */ React.createElement("span", {
      onClick: (e) => copyContent(e, message.content),
      className: "copy-icon getgenie-icon-copy"
    })))))), contentId === message.id && /* @__PURE__ */ React.createElement("div", {
      className: "edit-button-container"
    }, /* @__PURE__ */ React.createElement(Libs6.Button, {
      className: "save-button",
      onClick: () => handleSave(message.id)
    }, "Save & Submit"), /* @__PURE__ */ React.createElement(Libs6.Button, {
      className: "cancel-button",
      onClick: handleCancel
    }, "Cancel")))), isFetching ? /* @__PURE__ */ React.createElement("div", {
      className: "message assistant-message"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "assistant-avatar"
    }, /* @__PURE__ */ React.createElement("img", {
      src: genieHead
    })), /* @__PURE__ */ React.createElement("div", {
      className: "message-content-blinking"
    })) : ""), allChatData.length > 0 && /* @__PURE__ */ React.createElement("div", {
      className: "genie-chat-buttons"
    }, /* @__PURE__ */ React.createElement(Buttons_default, {
      newChatHandler,
      setShowChatList
    })), checkMessage ? /* @__PURE__ */ React.createElement("div", {
      className: "prompt-chat-container"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "prompt-chat-header"
    }, /* @__PURE__ */ React.createElement("h5", {
      onClick: () => setShowPrompt(!showPrompt),
      className: "prompt-auto-command"
    }, showPrompt ? "Hide" : "Show", " prompts", /* @__PURE__ */ React.createElement("span", {
      className: `getgenie-icon-arrow_up1 ${showPrompt ? "" : "hide-prompt"}`
    })), /* @__PURE__ */ React.createElement(Buttons_default, {
      setShowChatList
    })), showPrompt && /* @__PURE__ */ React.createElement("div", {
      className: "prompt-contents"
    }, Object.entries(currentPrompt).map(([key, value], index) => /* @__PURE__ */ React.createElement(Button7, {
      onClick: () => setInput("inputMessage", value),
      key: index,
      className: "prompt-chat",
      style: { maxWidth: "100%" }
    }, /* @__PURE__ */ React.createElement("span", {
      style: { maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }
    }, key))))) : "", /* @__PURE__ */ React.createElement("div", {
      style: { backgroundColor: "#f1f3f8" },
      className: "chat-controller-container"
    }, /* @__PURE__ */ React.createElement(Row4, {
      style: { marginTop: "10px" },
      gutter: 16
    }, /* @__PURE__ */ React.createElement(Col5, {
      span: 12
    }, /* @__PURE__ */ React.createElement(Libs6.Select, {
      name: "chatPersonality",
      className: "maxToken-field",
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar6.__("Chat Personality", "getgenie"), /* @__PURE__ */ React.createElement(Libs6.Tooltip, {
        title: sidebar6.__("Choose who you want to chat with", "getgenie"),
        placement: "top"
      })),
      options: Static_default.chatCharacters,
      defaultValue: sidebar6.chatPersonality
    })), /* @__PURE__ */ React.createElement(Col5, {
      span: 12
    }, /* @__PURE__ */ React.createElement(Libs6.Select, {
      name: "maxToken",
      className: "maxToken-field",
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar6.__("Size", "getgenie"), /* @__PURE__ */ React.createElement(Libs6.Tooltip, {
        title: sidebar6.__("Define the size of the content", "getgenie"),
        placement: "top"
      })),
      options: Static_default.maxToken,
      defaultValue: sidebar6.maxToken
    }))), /* @__PURE__ */ React.createElement("div", {
      className: "input-box-container"
    }, /* @__PURE__ */ React.createElement(Libs6.Textarea, {
      type: "text",
      className: "chat-input",
      placeholder: "Enter your question/command here...",
      onKeyUp: handleOnKeyUp,
      name: "inputMessage"
    }), /* @__PURE__ */ React.createElement(Button7, {
      disabled: isFetching || !getInputs["inputMessage"],
      className: "genie-chat-btn",
      onClick: handleSendMessage
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-send chat-btn-icon"
    }))))));
  }, ["sidebar", "setSidebar", "setInput", "getInputs"]);
  var GenieChat_default = GenieChat;

  // assets/src/admin/js/Common/Loading/index.js
  var Loading2 = () => {
    return /* @__PURE__ */ React.createElement(SkeletonCard_default, {
      count: 4
    });
  };
  var Loading_default2 = Loading2;

  // assets/src/admin/js/Common/SidebarControllerOption/index.js
  var { Row: Row5, Col: Col6 } = window.antd;
  var { Libs: Libs7, Utilities: Utilities5, PromotionalNotice: PromotionalNotice2 } = window.getGenie.Components.Common;
  var { ComposeComponents: ComposeComponents18 } = window.getGenie.Components.Common.ReduxManager;
  var { useEffect: useEffect13 } = window.React;
  var SidebarControllerOption = ComposeComponents18(({ unsupportedLanguages, setSidebar, sidebar: sidebar6, getInputs, className = "", language = true, tone = true, creativity = true, result = true, outputSize = false }) => {
    if (!Utilities5) {
      return;
    }
    ;
    const { GenieHelpers: GenieHelpers3 } = Utilities5;
    useEffect13(() => {
      GenieHelpers3.storeData("creativity");
    }, [getInputs["creativity"]]);
    useEffect13(() => {
      GenieHelpers3.storeData("numberOfResult");
    }, [getInputs["numberOfResult"]]);
    let toneOfVoice = Object.values(window.getGenie.config?.templateAssets?.toneOfVoice || {});
    toneOfVoice = toneOfVoice.map((item) => ({ label: item, value: item }));
    toneOfVoice = toneOfVoice.sort();
    toneOfVoice = toneOfVoice.reverse();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Row5, {
      gutter: 16,
      className
    }, language && /* @__PURE__ */ React.createElement(Col6, {
      span: 24
    }, /* @__PURE__ */ React.createElement(Libs7.Select, {
      handleOnChange: (val) => GenieHelpers3.saveSidebarControllerOption("getgenie-language", val),
      name: "selectedLanguage",
      except: unsupportedLanguages,
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar6.__("Language", "getgenie"), /* @__PURE__ */ React.createElement(Libs7.Tooltip, {
        title: sidebar6.__("Choose the desired language of your input and the outputs", "getgenie"),
        placement: "top"
      })),
      options: sidebar6.languages,
      defaultValue: sidebar6.currentLanguage
    })), outputSize && /* @__PURE__ */ React.createElement(Col6, {
      span: 12
    }, /* @__PURE__ */ React.createElement(Libs7.Select, {
      handleOnChange: (val) => GenieHelpers3.saveSidebarControllerOption("getgenie-outputSize", val),
      name: "outputSize",
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar6.__("Output Size", "getgenie"), /* @__PURE__ */ React.createElement(Libs7.Tooltip, {
        title: sidebar6.__("Define what type of size you want the outputs to have", "getgenie"),
        placement: "top"
      })),
      options: Static_default.outputSizes,
      defaultValue: sidebar6.outputSize
    }))), /* @__PURE__ */ React.createElement(Row5, {
      style: { marginTop: "10px" },
      gutter: 16,
      className
    }, creativity && /* @__PURE__ */ React.createElement(Col6, {
      span: 12
    }, /* @__PURE__ */ React.createElement(Libs7.Slider, {
      name: "creativity",
      handleOnChange: (val) => GenieHelpers3.saveSidebarControllerOption("getgenie-creativity", val),
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar6.__("Creativity", "getgenie"), " ", /* @__PURE__ */ React.createElement(Libs7.Tooltip, {
        title: sidebar6.__("How much creative you want genie to be", "getgenie"),
        placement: "top"
      })),
      message: false,
      defaultValue: sidebar6?.creativityLevel
    })), result && /* @__PURE__ */ React.createElement(Col6, {
      span: 12
    }, /* @__PURE__ */ React.createElement(Libs7.NumberInput, {
      name: "numberOfResult",
      handleOnChange: (val) => GenieHelpers3.saveSidebarControllerOption("getgenie-numberOfResult", val),
      className: "ResultLimitNumberInput",
      max: 6,
      type: "text",
      defaultValue: sidebar6?.numberOfResult,
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar6.__("Max Results", "getgenie"), " ", /* @__PURE__ */ React.createElement(Libs7.Tooltip, {
        title: sidebar6.__("Maximum content you want to generate", "getgenie"),
        placement: "top"
      })),
      required: true,
      errorMessage: sidebar6.__("Please choose valid limit", "getgenie")
    }))), /* @__PURE__ */ React.createElement(PromotionalNotice2, {
      type: "promotionalNotice",
      names: ["word_generate"]
    }));
  }, ["sidebar", "getInputs", "setSidebar"]);
  var SidebarControllerOption_default = SidebarControllerOption;

  // assets/src/admin/js/TemplateWizard/WriteTemplatesScreen.js
  var { Libs: Libs8, ContentFeedback: ContentFeedback2, Utilities: Utilities6 } = window.getGenie.Components.Common;
  var { Alert: Alert4, Form: Form8, Tooltip: Tooltip7, Divider } = window.antd;
  var { HandleFetch: HandleFetch6, HandleResponse: HandleResponse2 } = window.getGenie.Components.Common.RequestManager;
  var { ComposeComponents: ComposeComponents19 } = window.getGenie.Components.Common.ReduxManager;
  var { GenieHelpers: GenieHelpers2 } = Utilities6;
  var { useState: useState10, useEffect: useEffect14 } = window.React;
  var defaultField = [{
    "name": "textContent",
    "label": "Your content",
    "type": "textarea",
    "placeholder": "Enter your text here",
    "required": true
  }];
  var WriteTemplatesScreen = ComposeComponents19(({ setSidebar, templates: templates2, sidebar: sidebar6, getInputs, setInput, contextMenu }) => {
    let list = getInputs["generatedTemplateContents"] || [];
    list = [...new Set(list)];
    const [templateList2, setTemplateList] = useState10([]);
    const [showTooltip, setShowTooltip] = useState10("");
    const [visibleAlert, setVisibleAlert] = useState10(false);
    const [inputFields, setInputFields] = useState10(defaultField);
    const [writeLoading, setWriteLoading] = useState10(false);
    const [unsupportedLanguages, setUnsupportedLanguages] = useState10([]);
    const mode = sidebar6.currentWritingMode;
    const { currentTemplate, existingInputValue } = sidebar6;
    const { isBlockEditor, wizardScreen } = window.getGenie.config;
    const isAdvanceWriting = ["continueWriting", "expandOutline", "genieMode", "content-rewriter"].includes(currentTemplate);
    const isAdvanceMode = isAdvanceWriting && mode === "advance" || currentTemplate == "default";
    const { selectedText, beforeCaret } = contextMenu.inputContent;
    const [isInsertContent, setIsInsertContent] = useState10("");
    useEffect14(() => {
      let data = templates2.list.map((item) => ({
        value: item.templateSlug,
        label: item.title,
        inputFields: item?.inputFields || []
      }));
      data.push({
        value: "genieMode",
        label: "Genie Mode"
      });
      setTemplateList(data);
      setSidebar({
        analyzeKeyword: {
          ...sidebar6.analyzeKeyword,
          open: false
        },
        generatedOutlines: {
          ...sidebar6.generatedOutlines,
          open: false
        }
      });
    }, []);
    useEffect14(() => {
      if (wizardScreen === "post" && isBlockEditor && !isAdvanceWriting && !sidebar6.isWpModalOpen) {
        setSidebar({
          toolbarWriting: false,
          insertTextCallback: Callbacks_default.insertTemplateInPostEditor
        });
      }
    }, [currentTemplate]);
    useEffect14(() => {
      setInput("generatedTemplateContents", "");
    }, [selectedText, beforeCaret, sidebar6.existingInputValue, sidebar6.currentTemplate]);
    useEffect14(() => {
      if (!sidebar6.open) {
        return;
      }
      let selectedTemplate = templates2.list.find((item) => item.templateSlug === currentTemplate);
      let fields = selectedTemplate?.inputFields;
      if (!fields || fields.length === 0) {
        fields = defaultField;
      }
      const inputName = fields[0]?.name;
      setInputFields(fields);
      setUnsupportedLanguages(selectedTemplate?.unsupportedLanguages);
      if (sidebar6.existingInputValue) {
        setInput(inputName, existingInputValue);
      }
      if (currentTemplate === "expandOutline" || currentTemplate === "genieMode") {
        setInput(inputName, selectedText?.replace(/<br\s*[\/]?>/g, ""));
      } else if (currentTemplate === "continueWriting") {
        setInput(inputName, beforeCaret.replace(/<br\s*[\/]?>/g, ""));
      }
    }, [currentTemplate, sidebar6.open, selectedText]);
    const handleWrite = () => {
      let data = {};
      let urlKey = "writeTemplates";
      if (["continueWriting", "expandOutline", "genieMode"].includes(currentTemplate)) {
        let templateInputs = wp.data.select("getgenie").getTemplateInputs();
        data = {
          outputSize: getInputs["outputSize"],
          input: {
            title: wp.data.select("core/editor")?.getCurrentPost()?.title || templateInputs?.blogWizard?.selectedTitle || "",
            keyword: templateInputs?.blogWizard?.keyword || "",
            context: templateInputs?.[currentTemplate]?.inputContext || "",
            textContent: getInputs["textContent"]
          }
        };
        urlKey = currentTemplate;
      } else {
        const input = {};
        for (const item of inputFields) {
          input[item.name] = getInputs[item.name] || "";
        }
        data = {
          input
        };
      }
      data.templateSlug = currentTemplate;
      setInput("generatedTemplateContents", "");
      setWriteLoading(true);
      HandleFetch6((res) => {
        setWriteLoading(false);
        HandleResponse2(res, () => {
          let result = res.data.map((item) => {
            return { title: item, like: false, dislike: false };
          });
          setInput("generatedTemplateContents", result);
          setVisibleAlert(true);
          setTimeout(() => setVisibleAlert(false), 4e3);
        });
      }, urlKey, data);
    };
    useEffect14(() => {
      if (!sidebar6.open) {
        sidebar6.rootContainer.querySelectorAll(".ant-tooltip.generated-content-copied-text").forEach((item) => item.style.visibility = "hidden");
      }
    }, [sidebar6.open]);
    const handleActiveList = (e, value) => {
      sidebar6.rootContainer.querySelectorAll(".ant-tooltip.generated-content-copied-text").forEach((item) => item.style.visibility = "visible");
      let copyAbleText = value.title.replace(/<br\s*\/?>/gi, "\n");
      GenieHelpers2.copyToClipboard(copyAbleText).then(() => {
        setShowTooltip(value.title);
        setTimeout(() => {
          setShowTooltip(null);
        }, 2e3);
      });
    };
    const insertContent = (e, value) => {
      if (isInsertContent === value)
        return;
      e.stopPropagation();
      try {
        if (isAdvanceWriting) {
          if (["content-rewriter", "genieMode"].includes(currentTemplate)) {
            contextMenu.contextMenuCallback.rewrite(value, contextMenu.insertionField, contextMenu.inputContent);
          } else {
            contextMenu.contextMenuCallback[currentTemplate](value, contextMenu.insertionField, contextMenu.inputContent);
          }
        } else {
          sidebar6.insertTextCallback(value, sidebar6.insertTextField);
        }
        setIsInsertContent(value);
      } catch (e2) {
        Libs8.ErrorModal({
          title: sidebar6.__(`Oops! I'm not sure where to insert the content.`, "getgenie"),
          content: sidebar6.__("Please click on the field to select where you want the content to be inserted.", "getgenie")
        });
      }
    };
    const handleTemplateChange = (value) => {
      setSidebar({
        currentTemplate: value
      });
    };
    const handlePrev = () => {
      setSidebar({
        component: "TemplateListScreen"
      });
    };
    const isInputDisabled = ["continueWriting", "expandOutline"].includes(currentTemplate);
    const contextTooltipText = sidebar6.__(`You can give context or specific instruction on how GetGenie should ${currentTemplate == "expandOutline" ? "write the content under this heading" : "continue writing after the selected content"}.`, "getgenie");
    const contextPlaceholder = sidebar6.__(`e.g. ${currentTemplate == "expandOutline" ? "make it a list, explain how to reach out and start communicating" : "describe how to close an email, continue the idea in detail"}, etc.`, "getgenie");
    let isOutputSizeExist = sidebar6.languages.find((item) => item.value === sidebar6.currentLanguage)?.sml;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Libs8.DrawerHeader, null), /* @__PURE__ */ React.createElement(Form8, {
      layout: "vertical",
      className: "getgenie-sidebar-writing-form",
      onFinish: handleWrite
    }, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-sidebar-writing"
    }, !isAdvanceMode ? /* @__PURE__ */ React.createElement(Libs8.Select, {
      handleOnChange: handleTemplateChange,
      name: "selectedTemplate",
      defaultValue: currentTemplate,
      size: "large",
      label: sidebar6.__("Select Template", "getgenie"),
      options: templateList2
    }) : "", inputFields.map(
      (item, key) => /* @__PURE__ */ React.createElement(Libs8.Textarea, {
        disabled: currentTemplate === "expandOutline",
        key,
        label: /* @__PURE__ */ React.createElement("span", null, item?.label || "", " ", item?.required ? /* @__PURE__ */ React.createElement("span", {
          style: { display: "inline-block", color: "red" }
        }, "*") : `(${sidebar6.__("Optional", "getgenie")})`),
        name: item?.name,
        rows: 4,
        placeholder: item?.placeholder,
        required: item?.required
      })
    ), isInputDisabled ? /* @__PURE__ */ React.createElement(Libs8.Textarea, {
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar6.__("Additional Instructions (Optional)", "getgenie"), /* @__PURE__ */ React.createElement(Libs8.Tooltip, {
        title: contextTooltipText,
        placement: "top"
      })),
      name: "inputContext",
      rows: 4,
      placeholder: contextPlaceholder
    }) : "", /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(SidebarControllerOption_default, {
      className: "getgenie-sidebar-controller-options",
      language: currentTemplate !== "genieMode",
      outputSize: isInputDisabled && isOutputSizeExist,
      unsupportedLanguages,
      tone: currentTemplate !== "genieMode" && !(isInputDisabled && isOutputSizeExist)
    }), /* @__PURE__ */ React.createElement(Libs8.Button, {
      htmlType: "submit",
      type: "primary",
      loading: writeLoading
    }, sidebar6.__("Write", "getgenie"))), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-card-container editor",
      style: { backgroundColor: list.length === 0 && "transparent" }
    }, /* @__PURE__ */ React.createElement(Libs8.Card, {
      list,
      handleClick: handleActiveList,
      column: 1,
      skeleton: writeLoading ? () => /* @__PURE__ */ React.createElement(Libs8.SkeletonSingle, {
        count: 5
      }) : ""
    }, (item) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tooltip7, {
      overlayClassName: "generated-content-copied-text",
      placement: "right",
      title: showTooltip === item.title && "Copied",
      visible: showTooltip === item.title && sidebar6.open,
      zIndex: 999999
    }, /* @__PURE__ */ React.createElement("h5", {
      className: "generated-content"
    }, /* @__PURE__ */ React.createElement("div", {
      dangerouslySetInnerHTML: { __html: item.title }
    }))), /* @__PURE__ */ React.createElement(ContentFeedback2, {
      content: item,
      input: getInputs[inputFields[0]?.name] || "",
      creativityLevel: getInputs["creativity"],
      listName: "generatedTemplateContents"
    }), (isBlockEditor || ["post", "elementor", "bricks", "ct_builder", "fluentcrm"].includes(wizardScreen)) && !contextMenu?.isDisable?.[currentTemplate] ? /* @__PURE__ */ React.createElement(Tooltip7, {
      zIndex: 999999,
      title: isInsertContent !== item?.title ? "Insert this content" : "Inserted",
      placement: "topLeft"
    }, /* @__PURE__ */ React.createElement("span", {
      className: `getgenie-insert-content ${isInsertContent === item?.title ? "getgenie-icon-check" : "getgenie-icon-plus"}`,
      onClick: (e) => insertContent(e, item.title)
    })) : "")), visibleAlert && /* @__PURE__ */ React.createElement(Alert4, {
      className: "template-screen-alert",
      message: sidebar6.__("Click on the text to copy", "getgenie"),
      closeText: sidebar6.__("Okay", "getgenie"),
      closable: true
    })))), sidebar6.toolbarWriting || window.location.hash === "#write-for-me" ? "" : /* @__PURE__ */ React.createElement(Libs8.DrawerFooter, {
      prevScreen: true,
      nextScreen: false,
      handlePrev
    }));
  }, ["setSidebar", "templates", "sidebar", "getInputs", "setInput", "contextMenu"]);
  var WriteTemplatesScreen_default = WriteTemplatesScreen;

  // assets/src/admin/js/Common/Utilities/templates.js
  var sidebar4 = {
    __: window?.wp?.i18n?.__ || ((text, domain) => text)
  };
  var templateList = {
    "meta-description": {
      "title": sidebar4.__("Meta-Description", "getgenie"),
      "templateSlug": "meta-description",
      "description": sidebar4.__("Leverage SERP rankings with outstanding meta description of your blog post/page", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Blog Post Title", "getgenie"),
          "name": "blogPostTitle",
          "sample": "What Is Off-Page SEO? A Comprehensive Guide",
          "placeholder": sidebar4.__("Enter the blog post title here", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Focus Keyword", "getgenie"),
          "name": "focusKeyword",
          "sample": "Off-Page SEO guide",
          "placeholder": sidebar4.__("Enter the focus keyword/keyphrase for this meta description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "listicle-ideas": {
      "title": sidebar4.__("Listicle Ideas", "getgenie"),
      "templateSlug": "listicle-ideas",
      "description": sidebar4.__("Generate title ideas for listicles for your given topic and get ahead of your competition", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "Enter the topic for listicle ideas",
          "placeholder": sidebar4.__("Enter the topic and additional instructions (if any) for the listicle ideas", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "definition": {
      "title": sidebar4.__("Definition", "getgenie"),
      "templateSlug": "definition",
      "description": sidebar4.__("Need a brief explanation? Want to utilize featured snippets? Try our definition template", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "venture capital",
          "placeholder": sidebar4.__("Enter the topic for the definition", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "sentence-rewriter": {
      "title": sidebar4.__("Sentence Rewriter", "getgenie"),
      "templateSlug": "sentence-rewriter",
      "description": sidebar4.__("Get different variations of your given sentence with rewritten versions from Genie", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Sentence to Rewrite", "getgenie"),
          "name": "sentenceToRewrite",
          "sample": "When we talk about a particular topic, clarity is very important.",
          "placeholder": sidebar4.__("Enter your sentence to get a rewritten version", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "featured-snippet-numbered-list": {
      "title": sidebar4.__("Featured Snippet (Numbered List)", "getgenie"),
      "templateSlug": "featured-snippet-numbered-list",
      "description": sidebar4.__("Get a detailed numbered list of how to do something with a simple one-liner input", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "how to take care of a cat",
          "placeholder": sidebar4.__("Enter the topic for the list of steps", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "title-ideas": {
      "title": sidebar4.__("Title Ideas", "getgenie"),
      "templateSlug": "title-ideas",
      "description": sidebar4.__("Get multiple title ideas off an initial title to get a variation or deploying in headers", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "Fast fashion trend",
          "placeholder": sidebar4.__("Enter your desired topic for title generation", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "short-answer": {
      "title": sidebar4.__("Short Answer", "getgenie"),
      "templateSlug": "short-answer",
      "description": sidebar4.__("Generate brief, one-sentence answer to any given question to utilize in your content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Question", "getgenie"),
          "name": "question",
          "sample": "What is depreciation in accounting?",
          "placeholder": sidebar4.__("Enter your question", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "related-topics": {
      "title": sidebar4.__("Related Topics", "getgenie"),
      "templateSlug": "related-topics",
      "description": sidebar4.__("Stuck with your content? Input a paragraph and get a list of related topics to cover", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Content", "getgenie"),
          "name": "content",
          "sample": "Bollywood, an Indian Hollywood, refers to the Hindi-language movie industry in India. The term Bollywood combines Bombay (where most Hindi movies are made) and Hollywood (where most American movies are made). Bollywood makes many movies each year. Many Bollywood movies are called Masala movies.",
          "placeholder": sidebar4.__("Enter a paragraph/snippet of content", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "paragraph-compression": {
      "title": sidebar4.__("Paragraph Compression", "getgenie"),
      "templateSlug": "paragraph-compression",
      "description": sidebar4.__("Generate a short summary of a paragraph keeping the gist, tone, and context intact", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Paragraph", "getgenie"),
          "name": "paragraph",
          "sample": "With the introduction of a \u2018professional portfolio\u2019 by LinkedIn, you can now easily share visual content on your LinkedIn profile to demonstrate your capabilities more than what CVs ever could. From portfolio pieces to presentations to videos, you can now display your work on your profile by importing the content from a webpage or uploading your favorite work pieces straight from your computer. Instead of telling potential employers what you can do, display your work and let it speak for itself.",
          "placeholder": sidebar4.__("Enter the paragraph to be summarized", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "next-sentence": {
      "title": sidebar4.__("Next Sentence", "getgenie"),
      "templateSlug": "next-sentence",
      "description": sidebar4.__("Provide a sentence/line of content and get a follow-up sentence in return maintaining coherence", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Sentence", "getgenie"),
          "name": "sentence",
          "sample": "It was a cold winter night, perfect for Vlad the vampire to go out hunting for his next prey.",
          "placeholder": sidebar4.__("Enter the sentence to be followed-up", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "paragraph-rewriter": {
      "title": sidebar4.__("Paragraph Rewriter", "getgenie"),
      "templateSlug": "paragraph-rewriter",
      "description": sidebar4.__("Put a new and unique spin to your given content with rewritten versions of it", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Paragraph", "getgenie"),
          "name": "paragraph",
          "sample": "Most of the people of our country are farmers, workers, and day laborers who live below the poverty line. But the price of essential commodities is soaring higher and higher. It has now become impossible for them to make both ends meet. It has severely hit the day laborers, the lower and middle-class families, and the salaried class too. The prices of rice, vegetables, clothes, mustard oil, medicine, and other essential commodities are also increasing by leaps and bounds.",
          "placeholder": sidebar4.__("Enter the paragraph to be rewritten", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "next-paragraph": {
      "title": sidebar4.__("Next Paragraph", "getgenie"),
      "templateSlug": "next-paragraph",
      "description": sidebar4.__("Input your paragraph/lines of content and get a contextual follow-up content in return", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Paragraph", "getgenie"),
          "name": "paragraph",
          "sample": "In less than a generation, social media has evolved from direct electronic information exchange, to virtual gathering place, to retail platform, to vital 21st-century marketing tool.",
          "placeholder": sidebar4.__("Enter the paragraph to be followed-up", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "list-of-questions": {
      "title": sidebar4.__("List of Questions", "getgenie"),
      "templateSlug": "list-of-questions",
      "description": sidebar4.__("Generate lists of questions for your given topic and utilize them in your title/content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "Breakfast at home",
          "placeholder": sidebar4.__("Enter the topic for the list of related questions", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "paragraph-answer": {
      "title": sidebar4.__("Paragraph Answer", "getgenie"),
      "templateSlug": "paragraph-answer",
      "description": sidebar4.__("Get paragraph-long answers of informative content for every question you ask", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Question", "getgenie"),
          "name": "question",
          "sample": "Which country is going to be the next super power of the world?",
          "placeholder": sidebar4.__("Enter the question for a detailed answer", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "summary-bullets": {
      "title": sidebar4.__("Summary Bullets", "getgenie"),
      "templateSlug": "summary-bullets",
      "description": sidebar4.__("Get a bulleted list of summary for a given topic with the same tone and context", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Paragraph", "getgenie"),
          "name": "paragraph",
          "sample": "The Greek gods were all born from the union between a god and a mortal woman. Zeus was born from the union between his father, Kronos, and his mother, Rhea. Athena was born from the union of Zeus with Metis, or wisdom. Apollo was born from the union with Leto or Artemis. Poseidon was born from the union his father, Uranus, and Gaia, or Earth. Demeter was born from the union her husband, Persephone, and Kore, or Spring.",
          "placeholder": sidebar4.__("Enter the paragraph for summarized list", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "paragraph-for-heading": {
      "title": sidebar4.__("Paragraph for Heading", "getgenie"),
      "templateSlug": "paragraph-for-heading",
      "description": sidebar4.__("Input the heading/title of your long-form content and receive an introductory paragraph", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Title/Heading", "getgenie"),
          "name": "title/heading",
          "sample": "French new wave as a film movement",
          "placeholder": sidebar4.__("Enter the title/heading", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "outline": {
      "title": sidebar4.__("Outline", "getgenie"),
      "templateSlug": "outline",
      "description": sidebar4.__("Create an outline of your long-form content based on a title and a brief description", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Blog context", "getgenie"),
          "name": "blogContext",
          "sample": "Nulled or cracked software might contain malware and viruses that infect your computer. These viruses steal your data and sometimes make your device invalid. So, it is highly recommended not to use a cracked version of the software. Besides security reasons, it's completely unethical and like theft. ",
          "placeholder": sidebar4.__("Enter a few lines of the intro to get an outline", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "product-description": {
      "title": sidebar4.__("Product Description", "getgenie"),
      "templateSlug": "product-description",
      "description": sidebar4.__("Name any product (or service) and get Genie to write a convincing description for it", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Jhakanaka",
          "placeholder": sidebar4.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Product Brief", "getgenie"),
          "name": "productBrief",
          "sample": "Jhakanaka is a music player. A product of XpeedStudio. Plays all types of music and podcast. Speech-to-text technology for lyrics for music and subtitles for podcasts. Target audience: teens and young adults. Audiobook feature upcoming.",
          "placeholder": sidebar4.__("Explain briefly about the product, or which features to focus on", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "woocommerce-product-long-description": {
      "title": sidebar4.__("WooCommerce Product Long Description", "getgenie"),
      "templateSlug": "woocommerce-product-long-description",
      "description": sidebar4.__("Generate keyword-optimized & conversion-friendly long descriptions for your WooCommerce products", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "JBL C100SI",
          "placeholder": sidebar4.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Keywords", "getgenie"),
          "name": "keywords",
          "sample": "in-ear headphones, JBL pure bass, one-button remote, angled buds, black, comfort fit, suitable for punchy bass and rock music, 30-day replacement warranty, worldwide free shipping",
          "placeholder": sidebar4.__("Specify the keywords/key phrases for the product long description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "taglines": {
      "title": sidebar4.__("Taglines", "getgenie"),
      "templateSlug": "taglines",
      "description": sidebar4.__("Get genie to write taglines for your brands, products, services, or any content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Dunkin' Donuts",
          "placeholder": sidebar4.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Product Brief", "getgenie"),
          "name": "productBrief",
          "sample": "Dunkin\u2019 Donuts is the world\u2019s leading baked goods and coffee chain, serving more than 3 million customers per day. Dunkin\u2019 Donuts sells 52 varieties of donuts and more than a dozen coffee beverages as well as an array of bagels, sandwiches & more!",
          "placeholder": sidebar4.__("Explain briefly about the product, or which features to focus on", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "social-media-postcopy": {
      "title": sidebar4.__("Social Media Post/Copy", "getgenie"),
      "templateSlug": "social-media-postcopy",
      "description": sidebar4.__("Write copies for all your social media handles using a brief description of your product", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product/Brand Name", "getgenie"),
          "name": "product/brandName",
          "sample": "Semrush",
          "placeholder": sidebar4.__("Enter the name of the product/brand", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Product Brief", "getgenie"),
          "name": "productBrief",
          "sample": "Semrush is like a keyword research tool, Google Trends, Moz, Hootsuite, and SimilarWeb in one. Get measurable results from online marketing with Semrush \u2014 do SEO, content marketing, competitor research, PPC, and social media marketing from just one platform.",
          "placeholder": sidebar4.__("Explain briefly about the product, or which features to focus on", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "content-rewriter": {
      "title": sidebar4.__("Content Rewriter", "getgenie"),
      "templateSlug": "content-rewriter",
      "description": sidebar4.__("Get AI-paraphrased variations of your given sentence/paragraph/content from Genie", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Your Content", "getgenie"),
          "name": "yourContent",
          "sample": "Dengue fever, also known as breakbone fever, is a mosquito-borne infection that can lead to a severe flu-like illness. It is caused by four different viruses and spread by Aedes mosquitoes.",
          "placeholder": sidebar4.__("Provide the sentence/paragraph/content you want to be rewritten/paraphrased", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "call-to-action": {
      "title": sidebar4.__("Call to Action", "getgenie"),
      "templateSlug": "call-to-action",
      "description": sidebar4.__("Increase your CTA button/anchor's CTR using the magical persuasive words of Genie", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Context/Description", "getgenie"),
          "name": "context/description",
          "sample": "a lead magnet downloader button that gives users a content calendar for free",
          "placeholder": sidebar4.__("Provide the context or the details of the call-to-action (CTA) button/link", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Product/Brand Name ", "getgenie"),
          "name": "product/brandName",
          "sample": "Ollyo",
          "placeholder": sidebar4.__("You can provide the name of the product/brand to be included in the CTA content", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "conclusion": {
      "title": sidebar4.__("Conclusion", "getgenie"),
      "templateSlug": "conclusion",
      "description": sidebar4.__("Draw a relevant conclusion for your blog post or any content using Genie's AI magic", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Title", "getgenie"),
          "name": "title",
          "sample": "How to Write a Blog Post: A Step-by-Step Guide",
          "placeholder": sidebar4.__("Enter the title of the blog post/content that needs a conclusion from GetGenie", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Intro", "getgenie"),
          "name": "intro",
          "sample": "Writing a blog can be an extremely rewarding and fun activity. But the task of creating a successful blog post can seem daunting, especially if you\u2019re just starting out. From coming up with ideas to crafting compelling content, there\u2019s a lot to consider when writing a blog post. The good news is that with the proper guidance and strategy in place, anyone can craft a blog post that will capture their readers\u2019 attention. In this guide, we\u2019ll provide step-by-step instructions to help you write a blog post that will attract readers and keep them engaged.",
          "placeholder": sidebar4.__("Provide the introduction of the blog post/content for a better context", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "linkedin-post": {
      "title": sidebar4.__("LinkedIn Post", "getgenie"),
      "templateSlug": "linkedin-post",
      "description": sidebar4.__("For yourself or your company/brand, professional posts made easy with AI for LinkedIn", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "WordPress plugins",
          "placeholder": sidebar4.__("Enter the topic", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Context", "getgenie"),
          "name": "context",
          "sample": "make the post about the future of WordPress plugins with the advent of AI and how AI can be incorporated into plugins",
          "placeholder": sidebar4.__("Explain what the post is about and which topics should be touched upon", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Brand name", "getgenie"),
          "name": "brandName",
          "sample": "Wpmet",
          "placeholder": sidebar4.__("Enter the brand name", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "instagram-bio": {
      "title": sidebar4.__("Instagram Bio", "getgenie"),
      "templateSlug": "instagram-bio",
      "description": sidebar4.__("Make lasting impressions with the perfect instagram bio for your handle from AI", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Brand name", "getgenie"),
          "name": "brandName",
          "sample": "Asadullah Galib",
          "placeholder": sidebar4.__("Enter the brand name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Keywords", "getgenie"),
          "name": "keywords",
          "sample": "angel investor, digital marketer of Arraytics, YouTuber",
          "placeholder": sidebar4.__("Specify the keywords/key phrases for the instagram bio", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "instagram-caption": {
      "title": sidebar4.__("Instagram Caption", "getgenie"),
      "templateSlug": "instagram-caption",
      "description": sidebar4.__("Generate AI-powered captions for your instagram images in the blink of an eye", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Brand name", "getgenie"),
          "name": "brandName",
          "sample": "Pizzak",
          "placeholder": sidebar4.__("Enter the brand name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Context", "getgenie"),
          "name": "context",
          "sample": "pizzak is a cloud kitchen that serves pizza, wings, fries, etc. The post will feature it's 18-hour delivery system even at midnight, from 12 pm to 6 am.",
          "placeholder": sidebar4.__("Provide the topic, context or any additional instruction for the instagram caption", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "pros-and-cons": {
      "title": sidebar4.__("Pros and Cons", "getgenie"),
      "templateSlug": "pros-and-cons",
      "description": sidebar4.__("Generate a list of pros and cons about any given topic to utilize in your content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "Divulgaci\xF3n por correo electr\xF3nico en fr\xEDo",
          "placeholder": sidebar4.__("Enter a topic to get the pros and cons of it", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Context/Additional Instruction", "getgenie"),
          "name": "context/additionalInstruction",
          "sample": "Dame las ventajas y desventajas de la divulgaci\xF3n en fr\xEDo a trav\xE9s de correos electr\xF3nicos",
          "placeholder": sidebar4.__("You can give additional instruction/context for a more accurate output (optional)", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "woocommerce-product-short-description": {
      "title": sidebar4.__("WooCommerce Product Short Description", "getgenie"),
      "templateSlug": "woocommerce-product-short-description",
      "description": sidebar4.__("Get short descriptions/excerpts for your WooCommerce products optimized for your desired keywords", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "F\u0103in\u0103 de porumb Kellogg's cu piure de c\u0103p\u0219uni adev\u0103rat",
          "placeholder": sidebar4.__("Enter the brand name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Keywords", "getgenie"),
          "name": "keywords",
          "sample": "cereale pentru micul dejun, vitamina C, cu con\u021Binut sc\u0103zut de gr\u0103simi, f\u0103r\u0103 colesterol, 300 grame",
          "placeholder": sidebar4.__("Specify the keywords/key phrases for the product long description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "tweet-twitter-post": {
      "title": sidebar4.__("Tweet (Twitter Post)", "getgenie"),
      "templateSlug": "tweet-twitter-post",
      "description": sidebar4.__("Short but impactful \u2014 that's what your tweets will be when you generate them with GetGenie", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Context/Instruction", "getgenie"),
          "name": "context/instruction",
          "sample": "steps of how to optimize old youtube videos",
          "placeholder": sidebar4.__("Enter context/Instruction ", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "twitter-thread": {
      "title": sidebar4.__("Twitter Thread", "getgenie"),
      "templateSlug": "twitter-thread",
      "description": sidebar4.__("Create engaging Twitter threads on any topic and up your Twitter game using AI magic", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Context/Instruction", "getgenie"),
          "name": "context/instruction",
          "sample": "establishing yourself as a personal brand",
          "placeholder": sidebar4.__("Enter the context/instruction", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "explain-why": {
      "title": sidebar4.__("Explain Why", "getgenie"),
      "templateSlug": "explain-why",
      "description": sidebar4.__("Questions need answering and concepts need explaining \u2014 let\u2019s explain why", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Question", "getgenie"),
          "name": "question",
          "sample": "Why can't we live on mars?",
          "placeholder": sidebar4.__("Enter a WH-question question that you need explained", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Context", "getgenie"),
          "name": "context",
          "sample": "tell me the scientific as well as anthropological reasons",
          "placeholder": sidebar4.__("You can give additional instruction/context for a more accurate output", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "feature-benefit": {
      "title": sidebar4.__("Feature - Benefit", "getgenie"),
      "templateSlug": "feature-benefit",
      "description": sidebar4.__("Describe what your product/service does and get the detailed benefits in return", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Dove Original Beauty Bar",
          "placeholder": sidebar4.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Product Description", "getgenie"),
          "name": "productDescription",
          "sample": "Dove Original Beauty Bar and gentle skin cleanser combine a gentle cleansing formula with our signature 1/4 moisturizing cream to hydrate and nourish skin, instead of leaving skin feeling dry and tight like an ordinary bar soap might. Dove mild cleansers help skin retain its natural moisture, which helps replenish skin-natural nutrients that can be lost during the cleansing process.",
          "placeholder": sidebar4.__("Enter the product's features here to generate the benefits", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "before-after-bridge-bab": {
      "title": sidebar4.__("Before After Bridge (BAB)", "getgenie"),
      "templateSlug": "before-after-bridge-bab",
      "description": sidebar4.__("BAB formula shows the before and after of your product/solution in your content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Realme Narzo 50A",
          "placeholder": sidebar4.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Product Description", "getgenie"),
          "name": "productDescription",
          "sample": "Equipped with a Helio G85 Gaming Processor, the Realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favorite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos.",
          "placeholder": sidebar4.__("Enter the product description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "bullet-point-to-answers": {
      "title": sidebar4.__("Bullet Point to Answers", "getgenie"),
      "templateSlug": "bullet-point-to-answers",
      "description": sidebar4.__("Get bulleted lists of answers to related questions while writing long-form content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Question", "getgenie"),
          "name": "question",
          "sample": "How to make a cup of tea?",
          "placeholder": sidebar4.__("Enter the question to get an answer in bullet points", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Additional Instruction", "getgenie"),
          "name": "additionalInstruction",
          "sample": "describe how to prepare a cup of tea step by step",
          "placeholder": sidebar4.__("You can give instruction/context for a more accurate output (optional)", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "woocommerce-product-title": {
      "title": sidebar4.__("WooCommerce Product Title", "getgenie"),
      "templateSlug": "woocommerce-product-title",
      "description": sidebar4.__("Generate keyword-optimized product titles to rank & convert with your WooCommerce website", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "JBL C100SI",
          "placeholder": sidebar4.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Keywords", "getgenie"),
          "name": "keywords",
          "sample": "in-ear headphone, JBL pure bass, one button remote, angled buds, black",
          "placeholder": sidebar4.__("Specify which keywords should the product title be based on", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "product-ad-copy": {
      "title": sidebar4.__("Product Ad Copy", "getgenie"),
      "templateSlug": "product-ad-copy",
      "description": sidebar4.__("Generate a basic ad copy for your product inputting only a brief introduction/description", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "YOSUDA Exercise Bike L-007A",
          "placeholder": sidebar4.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Product Description", "getgenie"),
          "name": "productDescription",
          "sample": "Well-built exercise bike from the inside out. With its rock-solid foundation and athletic + aesthetic design, it's at the top of the game. With thickened frame tubes, precision manufacturing overcomes the wobbly defect of most of the cycle bikes on the market. Give you safer riding. Excellent bearing capacity for riders up to 330LBS. This is an energetic exercising bike, bringing you a cycling experience which is compared with riding classes!",
          "placeholder": sidebar4.__("Enter the product description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "problem-agitate-solution-pas": {
      "title": sidebar4.__("Problem, Agitate, Solution (PAS)", "getgenie"),
      "templateSlug": "problem-agitate-solution-pas",
      "description": sidebar4.__("Make use of the proven copywriting formula \u2014 Problem, Agitate, Solution (PAS)", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Canva",
          "placeholder": sidebar4.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Product Description", "getgenie"),
          "name": "productDescription",
          "sample": "Canva is a graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content. The app includes templates for users to use. The platform is free to use and offers paid subscriptions such as Canva Pro and Canva for Enterprise for additional functionality.",
          "placeholder": sidebar4.__("Enter the product description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "attention-interest-desire-action-aida": {
      "title": sidebar4.__("Attention Interest Desire Action (AIDA)", "getgenie"),
      "templateSlug": "attention-interest-desire-action-aida",
      "description": sidebar4.__("Generate sales/marketing copies by applying the renowned AIDA formula", "getgenie"),
      "inputFields": [
        {
          "label": sidebar4.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Typeform",
          "placeholder": sidebar4.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar4.__("Product Description", "getgenie"),
          "name": "productDescription",
          "sample": "Typeform is a popular online form builder and survey tool. It specializes in a conversational one question at a time experience that feels more like a conversation when compared to the regular form flow.",
          "placeholder": sidebar4.__("Enter the product description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    }
  };
  var templates = Object.values(templateList || {}).filter((item) => !["sentence-rewriter", "paragraph-rewriter"].includes(item?.templateSlug));

  // assets/src/admin/js/TemplateWizard/AdditionalWizards.js
  var AdditionalWizards = [
    {
      title: sidebar4.__("Blog Wizard", "getgenie"),
      templateSlug: "blogWizard",
      description: sidebar4.__("Get your blog article SERP-ready \u2014 from analyzing the keywords to generating content that ranks", "getgenie"),
      categories: {
        general: {
          title: "General",
          slug: "general"
        }
      }
    },
    {
      title: sidebar4.__("WooCommerce Wizard", "getgenie"),
      templateSlug: "wooWizard",
      description: sidebar4.__("Get conversion-friendly & SEO-optimized content for WooCommerce Product pages", "getgenie"),
      categories: {
        general: {
          title: "General",
          slug: "general"
        }
      }
    },
    {
      title: sidebar4.__("Genie Mode", "getgenie"),
      templateSlug: "genieMode",
      description: sidebar4.__("Write anything you want with the help of Genie Mode", "getgenie")
    }
  ];
  var AdditionalWizards_default = AdditionalWizards;

  // assets/src/admin/js/TemplateWizard/TemplateListScreen/index.js
  var { Libs: Libs9, LicenseNotice } = window.getGenie.Components.Common;
  var { Divider: Divider2, Typography: Typography4, Input: Input4 } = window.antd;
  var { ComposeComponents: ComposeComponents20 } = window.getGenie.Components.Common.ReduxManager;
  var { useEffect: useEffect15, useState: useState11 } = window.React;
  var TemplateListScreen = ComposeComponents20(({ templates: templates2, setSidebar, sidebar: sidebar6, setInput, getTemplateInputs, resetTemplateInputs }) => {
    let templateArray = [...AdditionalWizards_default, ...templates2.list];
    if (window.getGenie?.isPlayground) {
      templateArray = templateArray.filter((item) => item.templateSlug !== "wooWizard");
    }
    if (window.getGenie.config.wizardScreen == "elementor") {
      templateArray = templateArray.filter((item) => !["blogWizard", "wooWizard"].includes(item.templateSlug));
    }
    const [list, setList] = useState11(templateArray);
    useEffect15(() => {
      setSidebar({
        analyzeKeyword: {
          ...sidebar6.analyzeKeyword,
          open: false
        },
        generatedOutlines: {
          ...sidebar6.generatedOutlines,
          open: false
        },
        toolbarWriting: false,
        currentWritingMode: "template"
      });
      setInput("updateContent", "");
    }, []);
    const handleSearchTemplate = (e) => {
      let searchInput = e.target.value.toLowerCase();
      let updatedTemplates = templateArray.filter((item) => item.title.toLowerCase().includes(searchInput));
      setList(updatedTemplates);
    };
    const handleActiveList = (e, item) => {
      const config = window.getGenie.config;
      let component = "WriteTemplatesScreen";
      if (item.templateSlug == "blogWizard") {
        component = "BlogScreen";
        if (config?.wizardScreen !== "post") {
          if (config?.wizardScreen == "elementor") {
            Libs9.ErrorModal({
              title: sidebar6.__("Blog Wizard is not available in Elemetor!", "getgenie"),
              content: sidebar6.__("To use our blog writing workflow, use the Gutenberg post editor or classic editor.", "getgenie")
            });
          } else {
            window.open(config?.wizardScreenUrl?.post, "_blank");
          }
          return;
        }
      } else if (item.templateSlug == "wooWizard") {
        if (!config?.wcActivated) {
          Libs9.ErrorModal({
            title: sidebar6.__("Plugin not found!", "getgenie"),
            content: sidebar6.__("WooCommerce is not installed or activated yet.", "getgenie")
          });
          return;
        }
        component = "WooCommerceScreen";
        if (config?.wizardScreen !== "woo_product") {
          if (config?.wizardScreen == "elementor") {
            Libs9.ErrorModal({
              title: sidebar6.__("WooCommerce product wizard is not available in Elemetor!", "getgenie"),
              content: sidebar6.__("To use our WooCommerce product description writing workflow, use WooCommerce and its product page editor.", "getgenie")
            });
          } else {
            window.open(config?.wizardScreenUrl?.woo_product, "_blank");
          }
          return;
        }
      }
      const updateScreen = () => {
        setSidebar({
          component,
          currentTemplate: item.templateSlug,
          currentWritingMode: "template"
        });
      };
      if (getTemplateInputs[item.templateSlug]?.keyword) {
        Libs9.ConfirmModal(
          sidebar6.__("This wizard has generated data", "getgenie"),
          sidebar6.__("Do you want to erase that data?", "getgenie"),
          () => {
            resetTemplateInputs(item.templateSlug);
            updateScreen();
          },
          updateScreen
        );
      } else {
        updateScreen();
      }
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Libs9.DrawerHeader, null), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-sidebar-template"
    }, /* @__PURE__ */ React.createElement(LicenseNotice, null), /* @__PURE__ */ React.createElement(Typography4.Title, {
      level: 3
    }, sidebar6.__("What are we writing", "getgenie")), /* @__PURE__ */ React.createElement(Divider2, null), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-template-list"
    }, /* @__PURE__ */ React.createElement(Input4, {
      onChange: handleSearchTemplate,
      bordered: false,
      className: "search-container",
      placeholder: `${sidebar6.__("Search", "getgenie")}...`,
      suffix: /* @__PURE__ */ React.createElement("span", {
        className: "getgenie-icon-search"
      })
    }), /* @__PURE__ */ React.createElement(Libs9.Card, {
      list,
      handleClick: handleActiveList
    }, (item) => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
        className: "card-container"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "card-icon"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "getgenie-icon-edit"
      })), /* @__PURE__ */ React.createElement("div", {
        className: "card-heading"
      }, /* @__PURE__ */ React.createElement("h5", {
        "data-slug": item?.templateSlug
      }, item?.title), /* @__PURE__ */ React.createElement("p", null, item?.description))));
    }))));
  }, ["setSidebar", "sidebar", "templates", "setInput", "resetTemplateInputs", "getTemplateInputs"]);
  var TemplateListScreen_default = TemplateListScreen;

  // assets/src/admin/js/TemplateWizard/Callbacks.js
  var { Libs: Libs10 } = window.getGenie.Components.Common;
  var sidebar5 = wp.data.select("getgenie").sidebar();
  var Callbacks = {
    insertTemplateInPostEditor: (value) => {
      const sidebar6 = wp.data.select("getgenie").sidebar();
      let selectedBlock = wp.data.select("core/block-editor").getSelectedBlock();
      let clientId = selectedBlock?.clientId;
      let content = selectedBlock?.attributes?.content;
      let allBlocks = wp.data.select("core/block-editor").getBlocks();
      let index = allBlocks.findIndex((item) => item.clientId === clientId);
      let text = value.replace(/<br\s*[\/]?>/g, "\n");
      if (["content-rewriter", "paragraph-answer"].includes(sidebar6.currentTemplate)) {
        let replace = wp.data.select("getgenie").getInputs()?.updateContent;
        if (replace) {
          replace(text);
        }
      } else if (sidebar6.currentTemplate === "next-paragraph") {
        wp.data.dispatch("core/block-editor").insertBlocks(
          wp.blocks.createBlock("core/paragraph", {
            content: text
          }),
          index + 1
        );
      } else {
        if (!clientId) {
          wp.data.dispatch("getgenie").setSidebar({
            open: false
          });
          Libs10.ErrorModal({
            title: sidebar6.__("Insertion Failed!", "getgenie"),
            content: sidebar6.__("No insertion field found!", "getgenie")
          });
          return;
        }
        text = value;
        if (content) {
          text = " " + text;
        }
        wp.data.dispatch("core/block-editor").updateBlock(clientId, {
          attributes: {
            content: content + text
          }
        });
        wp.data.dispatch("getgenie").setSidebar({
          open: false
        });
      }
    }
  };
  var Callbacks_default = Callbacks;

  // assets/src/admin/js/templates-scripts.js
  window.getGenie.Components = {
    ...window.getGenie.Components,
    Sidebar: {
      ...window.getGenie.Components.Sidebar || {},
      TemplateListScreen: TemplateListScreen_default,
      WriteTemplatesScreen: WriteTemplatesScreen_default,
      UserHistory: UserHistory_default,
      UserHistoryDetails: UserHistoryDetails_default,
      GenieChat: GenieChat_default,
      Loading: Loading_default2
    }
  };
})();
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! moment.js
//! momentjs.com
//! version : 2.29.4
